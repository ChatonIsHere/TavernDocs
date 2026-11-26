---
title: Remote console
description: The websocket console on port 1760, how logins work, the JSON it sends, the 1758 and REST consoles, and what TavernLib changes.
sidebar_position: 5
---

# Remote console

`ServerConsoleManager` (no namespace) and `Alta.Console.WebSocketRemoteConsole`, `WebSocketCommandHandler` in `Root.Township`. Server in practice: the code runs wherever the game is logged in with `debug_features`, but hosts and tools only use it on servers.

The websocket console is what the Server launcher, Remote Console and TavernKeeper talk to. It's built on Fleck (third party). This page is about the game's side and the protocol; the host's side is in [Console and tokens](../../../host/console-and-tokens.md).

## ServerConsoleManager

`public class ServerConsoleManager : SingletonBehaviour<ServerConsoleManager>`. Get it with `SingletonBehaviour<ServerConsoleManager>.Instance`; most of what you need is static.

When the game logs in (or already is, in `Awake`), it checks `UserPermissions.HasPermission("debug_features")` for the game's own account. Only then does it:

1. open a local console window if the command line has `/console`,
2. watch for the backquote key to open one later,
3. start the remote consoles: `ServerRemoteConsole` (TCP, port 1758) and `WebSocketRemoteConsole` (websocket, port 1760).

On a TavernLib server the game logs in with tokens that carry `debug_features`, so this always happens. TavernLib then closes the 1758 console straight away (`CommandSecurityPatches.InstantCloseRemoteConsole`) and moves 1760 to `console_port` from `tavern_server.json` with a transpiler on `WebSocketRemoteConsole.Start`.

| Member | What it does | Notes |
| --- | --- | --- |
| `static HashSet<IRemoteConsoleHandler> ConnectedHandlers { get; }` | Every logged-in remote session. | Changed from other threads. Copy it with a retry, as TavernLib's `ConsoleTokenPatches.ConnectedHandlers` does. |
| `static event Action<UserInfoWithPermissions, IRemoteConsoleHandler> ConsoleConnected`, `ConsoleDisconnected` | A session logged in or closed. | Raised on the socket's thread, not the main thread. |
| `void StartRemoteConsole()` | Starts both remote consoles if they aren't running. | `debug remote-console` calls it. TavernLib postfixes it. |
| `static Task<bool> ValidateConsoleToken(JwtSecurityToken token)` | Decides whether a console token is good. | See below. |

```csharp
ServerConsoleManager.ConsoleConnected += (user, handler) => MelonLogger.Msg($"Console login: {user.Username}");
ServerConsoleManager.ConsoleDisconnected += (user, handler) => MelonLogger.Msg($"Console logout: {user.Username}");
```

## Logging in

The first text message on a new websocket is the token, as plain JWT text. Nothing else is accepted until it's checked.

1. `WebSocketCommandHandler.ProcessAuthorization` parses it and calls `ServerConsoleManager.ValidateConsoleToken`.
2. In the unpatched game (the server build has the same code), on a running server that returns false for every token: a token with a `server_id` claim is logged as "for a different server" and one without is logged as missing the claim, and both are refused. It looks like the check against the server's own id was taken out. With no server running it returns true for anything. TavernLib replaces it completely (`ConsoleTokenPatches.CheckConsoleLogin`) with its owner token and named tokens, and a postfix makes sure no other mod's prefix overrides the answer.
3. On success the session's user is built from the token's claims (`UserInfoWithPermissions.FromToken`: user id, username and the `Policy` claims as `Policies`), and its group permissions are asked of Alta's web API. TavernLib answers that with just `GroupPermissions.Console`.
4. The server sends a `SystemMessage` with `Connection Succeeded, Authenticated as: ...` and from then on every message is a command request.

A bad token gets a `SystemMessage` that starts with `Invalid Token` (event type `FatalLog`) and the socket is closed.

Because the caller's policies come from the token, `[WithPermissionOnly]` and the other requirements see the token's roles. TavernLib's owner token has `server_owner` and `debug_features`; named tokens are limited further by TavernLib.

## Requests

```json
{ "id": 7, "content": "player list" }
```

`id` is a `uint` you choose; the reply carries it back as `commandId`. `content` is the command line. Each request is handed to `MainThreadDispatcher.Run`, so it runs on the next `Update`, one after another.

## Replies

Every message the server sends is one `WebSocketCommandHandler.ResponseData` as JSON:

| Field | What it is |
| --- | --- |
| `type` | `SystemMessage`, `Subscription` or `CommandResult`. |
| `timeStamp` | When it was made, UTC. |
| `eventType` | For subscriptions, the event's name. For system messages, a log level event name such as `InfoLog`. Left out for command results. |
| `data` | The payload. |
| `commandId` | The request's `id`, for command results. |

For a command result, `data` is the `CommandResult` object itself:

```json
{
  "type": "CommandResult",
  "timeStamp": "2026-11-25T12:00:00Z",
  "data": {
    "ResultString": "pong",
    "Command": {
      "Parameters": [],
      "IsProgressive": false,
      "ReturnType": "System.String",
      "Priority": 0,
      "Aliases": ["ping"],
      "Requirements": [],
      "Attributes": [],
      "Name": "ping",
      "Description": "Answers pong",
      "FullName": "hello.ping"
    }
  },
  "commandId": 7
}
```

- `ResultString` is the text answer. `Result` is there for object results, as JSON. `Exception` is there when it failed, as Newtonsoft serializes an exception (`ClassName`, `Message`, `StackTraceString` and so on).
- Enums are written as names and null fields are left out. That comes from the game's API client, which sets `JsonConvert.DefaultSettings` as soon as it's created at startup. The console's own settings add converters for `Vector2`, `Vector3` and `Vector4` (as `[x, y, z]` arrays) and `Type` (as its name).
- `JsonConvert.DefaultSettings` is global, so your mod's own `JsonConvert` calls get those settings too.

:::note
`WebsocketContractResolver` was meant to hide `[DevOnly]` members from callers. It does nothing in practice: `DevOnlyAttribute` can only go on classes and methods, and the resolver only looks at properties and fields.
:::

## After each command

`WebSocketCommandHandler.RunCommand`:

1. sets `WebSocketCommandHandler.Current` to the session (so `websocket subscribe` knows who's asking),
2. awaits `CommandService.Handle(content, sessionContext)`,
3. clears `Current`,
4. raises the `CommandExecuted` [console event](console-events.md) with the line, whether it worked and the result text (server only),
5. sends the reply.

`Current` is only reliable before your command's first `await`. TavernLib prefixes `TryLogConsoleCommandExecutionWithEventStream` to log each command and strip token text out of the event.

## WebSocketCommandHandler

`public class WebSocketCommandHandler : IRemoteConsoleHandler`. One per websocket connection. `WebSocketRemoteConsole.Handlers` (a static list) holds every one, logged in or not.

| Member | What it is | Notes |
| --- | --- | --- |
| `static WebSocketCommandHandler Current { get; }` | The session whose command is running. | Null outside a websocket command. |
| `UserInfoWithPermissions UserInfo { get; }` | Who logged in. | |
| `bool IsAuthorized { get; }` | Logged in. | |
| `SubscriptionResult Subscribe(string eventType)`, `Unsubscribe(string eventType)` | Subscribe the session to a console event. | `Success`, `Unchanged` or `NotFound`. |
| `event Action<WebSocketCommandHandler> Closed`, `Authorized` | | Socket thread. |
| `connection`, `connectionString` (private fields) | The Fleck socket and `ip:port`. | Private: through att-stubs or `AccessTools`. TavernLib closes sessions through `connection`. |

`WebSocketRemoteConsole.IsActive` and `ServerRemoteConsole.IsActive` say whether each listener is running. `WebSocketRemoteConsole.WebsocketPort` is the `1760` constant; the real port on a TavernLib server can differ.

## The other consoles

| Console | Port | What it is |
| --- | --- | --- |
| `ServerRemoteConsole` | 1758 (TCP) | Reads a token from the first packet, answers `ok` or `Invalid Token`, then takes commands on that socket (`ClientHandler`). It logs every token it receives in full. TavernLib closes it as soon as it starts. |
| `ClientLogSender` | 1759 (TCP) | Made for each 1758 session: streams the server console log to whoever connects. Never made on a TavernLib server, since 1758 is closed first. |
| `Alta.WebServer.AltaConsoleModule` | the game's web server, path `/console` | A REST console: a POST to `/console` with `Authorization: Bearer <token>` and the same `{id, content}` body, answered with one `ResponseData`. The token goes through the same `ValidateConsoleToken`; the context gets the token's user and no group permissions. See [The web server](#the-web-server). |
| `WindowsServerConsole` | none | The local window from `/console` or the backquote key. Commands run with the default context. |
| `CommandSync.RouteCommand` | none | Lets the quick-access menu send a command to the server. TavernLib turns it off. |

## The web server

`Alta.WebServer.WebServerThread` in `Root.Township`. Server only. `ServerHandler` makes one while the server starts, on port 1761 (TavernLib moves it to `web_port` in `tavern_server.json`). It runs EmbedIO (third party) on its own thread, listening on every address (`http://*:port`), with:

| Path | Module | What it serves |
| --- | --- | --- |
| `/console` | `AltaConsoleModule` | The REST console above. POST only. The command runs on the main thread through `MainThreadDispatcher.RunAsync`. |
| `/cache` | `AltaFolderModule` | Files from the server's save cache folder, by path. No login. Clients download cached files from the web server (`ClientCacheManager`). |
| `/output` | `OutputFolderModule` | Files that commands wrote for a user (`FileDownload`), as `/output/<userId>/<file>`. Needs a Bearer token that passes `ValidateConsoleToken` and whose `UserId` claim is that user. |

A CORS module on `/` answers every origin. If the web server fails to start, it stops the server.

## Hooking it

- To react to logins, use the `ConsoleConnected` and `ConsoleDisconnected` events; no patch needed.
- To decide logins yourself you'd have to prefix `ServerConsoleManager.ValidateConsoleToken`, but on a TavernLib server its postfix keeps TavernLib's answer. Don't fight it.
- To see every command, patch `CommandService.HandleMatchedCommand` ([Arguments and results](arguments-and-results.md#watching-every-command)), which also catches the local and REST consoles.
- `ProcessAuthorization`, `OnAuthorize` and `RunCommand` are `async void`. A prefix runs before the first `await`; a postfix runs when the method first yields, not when it finishes.

## See also

- [Console events](console-events.md) for subscriptions.
- [Console and tokens](../../../host/console-and-tokens.md) for owner and named tokens.
- [TavernLib's console](../../tavernlib-api/console.md) for named token paths and what TavernLib logs.

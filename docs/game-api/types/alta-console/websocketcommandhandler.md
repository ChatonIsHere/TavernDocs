---
title: "WebSocketCommandHandler"
description: "Server: one remote console connection over WebSocket (Fleck)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketCommandHandler

A **class** in `Root.Township`, `Alta.Console`.

Server: one remote console connection over WebSocket (Fleck). The first message must be a console JWT; after that each message is a JSON request that runs a console command.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`IRemoteConsoleHandler`](/game-api/types/global-i-l/iremoteconsolehandler)
- **Nested types** [`Request`](/game-api/types/alta-console/websocketcommandhandler-request), [`ResponseData`](/game-api/types/alta-console/websocketcommandhandler-responsedata), [`ResponseType`](/game-api/types/alta-console/websocketcommandhandler-responsetype), [`SubscriptionResult`](/game-api/types/alta-console/websocketcommandhandler-subscriptionresult)
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console#websocketcommandhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebSocketCommandHandler(IWebSocketConnection connection)"}</code> | Creates a `WebSocketCommandHandler` from `connection`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-authorizationtask" /><code>{"private TaskCompletionSource<bool> authorizationTask"}</code> | Private: completes with whether the token was accepted. Null until the first message and after close. |
| <Link id="m-connection" /><code>{"private readonly IWebSocketConnection connection"}</code> | Private: the underlying Fleck socket. |
| <Link id="m-connectionstring" /><code>{"private readonly string connectionString"}</code> | Private: the client's IP and port, used in log lines. |
| <Link id="m-context" /><code>{"private "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context"}</code> | Private: the command context (user plus server permissions) every command from this connection runs with. |
| <Link id="m-jsonsettings" /><code>{"private static readonly JsonSerializerSettings jsonSettings"}</code> | Private: JSON settings for responses, with converters for Unity vectors and nullable types. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Logger for this class. |
| <Link id="m-subscriptions" /><code>{"private readonly HashSet<string> subscriptions"}</code> | Private: the console event types this connection is subscribed to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"static "}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" Current { get; private set; }"}</code> | The handler whose command is running right now. Set only while `RunCommand` awaits a result, so subscribe commands can find their caller. |
| <Link id="m-isauthorized" /><code>{"bool IsAuthorized { get; }"}</code> | True once the authorization task finished and the token was accepted. |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" UserInfo { get; private set; }"}</code> | The user and permissions read from the validated token. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-authorized" /><code>{"event Action<"}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{"> Authorized"}</code> | Raised once the connection's token has been validated and its command context built. |
| <Link id="m-closed" /><code>{"event Action<"}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{"> Closed"}</code> | Raised when the socket closes, after its event subscriptions are dropped. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-subscribe" /><code><Link to="/game-api/types/alta-console/websocketcommandhandler-subscriptionresult">{"WebSocketCommandHandler.SubscriptionResult"}</Link>{" Subscribe(string eventType)"}</code> | Subscribes this connection to a console event type. Returns whether it was added, already there or not found. |
| <Link id="m-unsubscribe" /><code><Link to="/game-api/types/alta-console/websocketcommandhandler-subscriptionresult">{"WebSocketCommandHandler.SubscriptionResult"}</Link>{" Unsubscribe(string eventType)"}</code> | Removes a console event subscription from this connection. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentserverpermissionsforloggedinuser" /><code>{"private async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetCurrentServerPermissionsForLoggedInUser()"}</code> | Private: asks the Alta API for the connected user's group permissions on this server. |
| <Link id="m-handlerequest" /><code>{"private void HandleRequest(string message)"}</code> | Private: parses a JSON `Request` and runs it on the main thread through `RunCommand`. |
| <Link id="m-onauthorize" /><code>{"private async void OnAuthorize(string message)"}</code> | Private: first message handler. Waits for any running authorization, then either authorizes the token or treats the message as a normal request. |
| <Link id="m-onclose" /><code>{"private void OnClose()"}</code> | Private: unsubscribes all console events, removes the message handlers and raises `Closed`. |
| <Link id="m-onerror" /><code>{"private static void OnError(Exception ex)"}</code> | Private: logs socket errors. |
| <Link id="m-onopen" /><code>{"private void OnOpen()"}</code> | Private: logs that the connection opened. |
| <Link id="m-processauthorization" /><code>{"private async void ProcessAuthorization(string message)"}</code> | Private: validates the JWT with `ServerConsoleManager`, loads the user's permissions and switches the socket to `HandleRequest`. Closes the socket on a bad token. |
| <Link id="m-processpreauthorizedrequest" /><code>{"private void ProcessPreAuthorizedRequest(string message)"}</code> | Private: for a message that reached `OnAuthorize` after authorization, swaps in `HandleRequest` and handles it. |
| <Link id="m-runcommand" /><code>{"private async void RunCommand("}<Link to="/game-api/types/alta-console/websocketcommandhandler-request">{"WebSocketCommandHandler.Request"}</Link>{" request)"}</code> | Private: runs the request through `CommandService.Handle`, raises the command executed console event and sends back the result with the request id. |
| <Link id="m-send" /><code>{"private void Send("}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsetype">{"WebSocketCommandHandler.ResponseType"}</Link>{" type, object data, string eventType = null, uint? commandId = null)"}</code> | Private: serializes a response and sends it. Drops the event subscription if the socket is no longer available. |
| <Link id="m-send-2" /><code>{"private void Send("}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{" response)"}</code> | Private: serializes a response and sends it. Drops the event subscription if the socket is no longer available. |
| <Link id="m-trylogconsolecommandexecutionwitheventstream" /><code>{"private void TryLogConsoleCommandExecutionWithEventStream(string command, bool wasSuccessful, string output)"}</code> | Private: server only, raises `ConsoleEvents.CommandExecuted` with the command, success and output. |

</details>

## Used in

Members of other types that take, return or hold a `WebSocketCommandHandler`:

[`WebSocketRemoteConsole.HandlerAuthorized`](/game-api/types/alta-console/websocketremoteconsole#m-handlerauthorized), [`WebSocketRemoteConsole.Handlers`](/game-api/types/alta-console/websocketremoteconsole#m-handlers), [`WebSocketRemoteConsole.RemoteConsoleClosed`](/game-api/types/alta-console/websocketremoteconsole#m-remoteconsoleclosed).

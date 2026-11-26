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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`IRemoteConsoleHandler`](/mod/game-api/types/global-i-l/iremoteconsolehandler)
- **Nested types** [`Request`](/mod/game-api/types/alta-console/websocketcommandhandler-request), [`ResponseData`](/mod/game-api/types/alta-console/websocketcommandhandler-responsedata), [`ResponseType`](/mod/game-api/types/alta-console/websocketcommandhandler-responsetype), [`SubscriptionResult`](/mod/game-api/types/alta-console/websocketcommandhandler-subscriptionresult)
- **Documented in** [Remote console](/mod/game-api/console-and-utilities/remote-console#websocketcommandhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebSocketCommandHandler(IWebSocketConnection connection)"}</code> | <span className="api-desc">Creates a `WebSocketCommandHandler` from `connection`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-authorizationtask" /><code>{"private TaskCompletionSource<bool> authorizationTask"}</code> | <span className="api-desc">Private: completes with whether the token was accepted. Null until the first message and after close.</span> |
| <Link id="m-connection" /><code>{"private readonly IWebSocketConnection connection"}</code> | <span className="api-desc">Private: the underlying Fleck socket.</span> |
| <Link id="m-connectionstring" /><code>{"private readonly string connectionString"}</code> | <span className="api-desc">Private: the client's IP and port, used in log lines.</span> |
| <Link id="m-context" /><code>{"private "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context"}</code> | <span className="api-desc">Private: the command context (user plus server permissions) every command from this connection runs with.</span> |
| <Link id="m-jsonsettings" /><code>{"private static readonly JsonSerializerSettings jsonSettings"}</code> | <span className="api-desc">Private: JSON settings for responses, with converters for Unity vectors and nullable types.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-subscriptions" /><code>{"private readonly HashSet<string> subscriptions"}</code> | <span className="api-desc">Private: the console event types this connection is subscribed to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" Current { get; private set; }"}</code> | <span className="api-desc">The handler whose command is running right now. Set only while `RunCommand` awaits a result, so subscribe commands can find their caller.</span> |
| <Link id="m-isauthorized" /><code>{"bool IsAuthorized { get; }"}</code> | <span className="api-desc">True once the authorization task finished and the token was accepted.</span> |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" UserInfo { get; private set; }"}</code> | <span className="api-desc">The user and permissions read from the validated token.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-authorized" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{"> Authorized"}</code> | <span className="api-desc">Raised once the connection's token has been validated and its command context built.</span> |
| <Link id="m-closed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{"> Closed"}</code> | <span className="api-desc">Raised when the socket closes, after its event subscriptions are dropped.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-subscribe" /><code><Link to="/mod/game-api/types/alta-console/websocketcommandhandler-subscriptionresult">{"WebSocketCommandHandler.SubscriptionResult"}</Link>{" Subscribe(string eventType)"}</code> | <span className="api-desc">Subscribes this connection to a console event type. Returns whether it was added, already there or not found.</span> |
| <Link id="m-unsubscribe" /><code><Link to="/mod/game-api/types/alta-console/websocketcommandhandler-subscriptionresult">{"WebSocketCommandHandler.SubscriptionResult"}</Link>{" Unsubscribe(string eventType)"}</code> | <span className="api-desc">Removes a console event subscription from this connection.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentserverpermissionsforloggedinuser" /><code>{"private async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetCurrentServerPermissionsForLoggedInUser()"}</code> | <span className="api-desc">Private: asks the Alta API for the connected user's group permissions on this server.</span> |
| <Link id="m-handlerequest" /><code>{"private void HandleRequest(string message)"}</code> | <span className="api-desc">Private: parses a JSON `Request` and runs it on the main thread through `RunCommand`.</span> |
| <Link id="m-onauthorize" /><code>{"private async void OnAuthorize(string message)"}</code> | <span className="api-desc">Private: first message handler. Waits for any running authorization, then either authorizes the token or treats the message as a normal request.</span> |
| <Link id="m-onclose" /><code>{"private void OnClose()"}</code> | <span className="api-desc">Private: unsubscribes all console events, removes the message handlers and raises `Closed`.</span> |
| <Link id="m-onerror" /><code>{"private static void OnError(Exception ex)"}</code> | <span className="api-desc">Private: logs socket errors.</span> |
| <Link id="m-onopen" /><code>{"private void OnOpen()"}</code> | <span className="api-desc">Private: logs that the connection opened.</span> |
| <Link id="m-processauthorization" /><code>{"private async void ProcessAuthorization(string message)"}</code> | <span className="api-desc">Private: validates the JWT with `ServerConsoleManager`, loads the user's permissions and switches the socket to `HandleRequest`. Closes the socket on a bad token.</span> |
| <Link id="m-processpreauthorizedrequest" /><code>{"private void ProcessPreAuthorizedRequest(string message)"}</code> | <span className="api-desc">Private: for a message that reached `OnAuthorize` after authorization, swaps in `HandleRequest` and handles it.</span> |
| <Link id="m-runcommand" /><code>{"private async void RunCommand("}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-request">{"WebSocketCommandHandler.Request"}</Link>{" request)"}</code> | <span className="api-desc">Private: runs the request through `CommandService.Handle`, raises the command executed console event and sends back the result with the request id.</span> |
| <Link id="m-send" /><code>{"private void Send("}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsetype">{"WebSocketCommandHandler.ResponseType"}</Link>{" type, object data, string eventType = null, uint? commandId = null)"}</code> | <span className="api-desc">Private: serializes a response and sends it. Drops the event subscription if the socket is no longer available.</span> |
| <Link id="m-send-2" /><code>{"private void Send("}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{" response)"}</code> | <span className="api-desc">Private: serializes a response and sends it. Drops the event subscription if the socket is no longer available.</span> |
| <Link id="m-trylogconsolecommandexecutionwitheventstream" /><code>{"private void TryLogConsoleCommandExecutionWithEventStream(string command, bool wasSuccessful, string output)"}</code> | <span className="api-desc">Private: server only, raises `ConsoleEvents.CommandExecuted` with the command, success and output.</span> |

</details>

## Used in

Members of other types that take, return or hold a `WebSocketCommandHandler`:

<div className="api-used-in">

[`WebSocketRemoteConsole.HandlerAuthorized`](/mod/game-api/types/alta-console/websocketremoteconsole#m-handlerauthorized), [`WebSocketRemoteConsole.Handlers`](/mod/game-api/types/alta-console/websocketremoteconsole#m-handlers), [`WebSocketRemoteConsole.RemoteConsoleClosed`](/mod/game-api/types/alta-console/websocketremoteconsole#m-remoteconsoleclosed).

</div>

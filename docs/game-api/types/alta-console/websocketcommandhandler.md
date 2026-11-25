---
title: "WebSocketCommandHandler"
description: "One per websocket connection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketCommandHandler

A **class** in `Root.Township`, `Alta.Console`.

One per websocket connection. `WebSocketRemoteConsole.Handlers` (a static list) holds every one, logged in or not.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`IRemoteConsoleHandler`](/game-api/types/global-i-l/iremoteconsolehandler)
- **Nested types** [`Request`](/game-api/types/alta-console/websocketcommandhandler-request), [`ResponseData`](/game-api/types/alta-console/websocketcommandhandler-responsedata), [`ResponseType`](/game-api/types/alta-console/websocketcommandhandler-responsetype), [`SubscriptionResult`](/game-api/types/alta-console/websocketcommandhandler-subscriptionresult)
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console#websocketcommandhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebSocketCommandHandler(IWebSocketConnection connection)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-authorizationtask" /><code>{"private TaskCompletionSource<bool> authorizationTask"}</code> |  |
| <Link id="m-connection" /><code>{"private readonly IWebSocketConnection connection"}</code> |  |
| <Link id="m-connectionstring" /><code>{"private readonly string connectionString"}</code> |  |
| <Link id="m-context" /><code>{"private "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context"}</code> |  |
| <Link id="m-jsonsettings" /><code>{"private static readonly JsonSerializerSettings jsonSettings"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-subscriptions" /><code>{"private readonly HashSet<string> subscriptions"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"static "}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" Current { get; private set; }"}</code> |  |
| <Link id="m-isauthorized" /><code>{"bool IsAuthorized { get; }"}</code> |  |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" UserInfo { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-authorized" /><code>{"event Action<"}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{"> Authorized"}</code> |  |
| <Link id="m-closed" /><code>{"event Action<"}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{"> Closed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-subscribe" /><code><Link to="/game-api/types/alta-console/websocketcommandhandler-subscriptionresult">{"WebSocketCommandHandler.SubscriptionResult"}</Link>{" Subscribe(string eventType)"}</code> |  |
| <Link id="m-unsubscribe" /><code><Link to="/game-api/types/alta-console/websocketcommandhandler-subscriptionresult">{"WebSocketCommandHandler.SubscriptionResult"}</Link>{" Unsubscribe(string eventType)"}</code> |  |
| <Link id="m-getcurrentserverpermissionsforloggedinuser" /><code>{"private async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetCurrentServerPermissionsForLoggedInUser()"}</code> |  |
| <Link id="m-handlerequest" /><code>{"private void HandleRequest(string message)"}</code> |  |
| <Link id="m-onauthorize" /><code>{"private async void OnAuthorize(string message)"}</code> |  |
| <Link id="m-onclose" /><code>{"private void OnClose()"}</code> |  |
| <Link id="m-onerror" /><code>{"private static void OnError(Exception ex)"}</code> |  |
| <Link id="m-onopen" /><code>{"private void OnOpen()"}</code> |  |
| <Link id="m-processauthorization" /><code>{"private async void ProcessAuthorization(string message)"}</code> |  |
| <Link id="m-processpreauthorizedrequest" /><code>{"private void ProcessPreAuthorizedRequest(string message)"}</code> |  |
| <Link id="m-runcommand" /><code>{"private async void RunCommand("}<Link to="/game-api/types/alta-console/websocketcommandhandler-request">{"WebSocketCommandHandler.Request"}</Link>{" request)"}</code> |  |
| <Link id="m-send" /><code>{"private void Send("}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsetype">{"WebSocketCommandHandler.ResponseType"}</Link>{" type, object data, string eventType = null, uint? commandId = null)"}</code> |  |
| <Link id="m-send-2" /><code>{"private void Send("}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{" response)"}</code> |  |
| <Link id="m-trylogconsolecommandexecutionwitheventstream" /><code>{"private void TryLogConsoleCommandExecutionWithEventStream(string command, bool wasSuccessful, string output)"}</code> |  |

## Used in

Members of other types that take, return or hold a `WebSocketCommandHandler`:

[`WebSocketRemoteConsole.HandlerAuthorized`](/game-api/types/alta-console/websocketremoteconsole#m-handlerauthorized), [`WebSocketRemoteConsole.Handlers`](/game-api/types/alta-console/websocketremoteconsole#m-handlers), [`WebSocketRemoteConsole.RemoteConsoleClosed`](/game-api/types/alta-console/websocketremoteconsole#m-remoteconsoleclosed).

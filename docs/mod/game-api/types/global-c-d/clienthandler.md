---
title: "ClientHandler"
description: "Server: one connected remote console client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientHandler

A **class** in `Root.Township`, the global namespace.

Server: one connected remote console client. Made by `ServerRemoteConsole` from the socket and the client's JWT, and wraps a command handler and log sender.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`IRemoteConsoleHandler`](/mod/game-api/types/global-i-l/iremoteconsolehandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientHandler(Socket clientSocket, JwtSecurityToken token)"}</code> | <span className="api-desc">Creates a `ClientHandler` from `clientSocket` and `token`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientendpoint" /><code>{"IPEndPoint ClientEndpoint { get; }"}</code> | <span className="api-desc">The client's IP endpoint.</span> |
| <Link id="m-commandhandler" /><code><Link to="/mod/game-api/types/global-c-d/clientcommandhandler">{"ClientCommandHandler"}</Link>{" CommandHandler { get; }"}</code> | <span className="api-desc">Handles commands from this client.</span> |
| <Link id="m-logsender" /><code><Link to="/mod/game-api/types/global-c-d/clientlogsender">{"ClientLogSender"}</Link>{" LogSender { get; }"}</code> | <span className="api-desc">Sends subscribed log output to this client.</span> |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" UserInfo { get; }"}</code> | <span className="api-desc">User and permissions read from the client's token.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-c-d/clienthandler">{"ClientHandler"}</Link>{"> Disconnected"}</code> | <span className="api-desc">Raised when the client is terminated.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> | <span className="api-desc">Closes the command handler and log sender and raises `Disconnected`. Runs when the command handler disconnects.</span> |

## Used in

Members of other types that take, return or hold a `ClientHandler`:

<div className="api-used-in">

[`ServerRemoteConsole.allClientHandlers`](/mod/game-api/types/global-s/serverremoteconsole#m-allclienthandlers), [`ServerRemoteConsole.HandleClientTerminated`](/mod/game-api/types/global-s/serverremoteconsole#m-handleclientterminated).

</div>

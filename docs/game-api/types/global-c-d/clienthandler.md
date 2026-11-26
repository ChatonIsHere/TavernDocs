---
title: "ClientHandler"
description: "Server: one connected remote console client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientHandler

A **class** in `Root.Township`, no namespace.

Server: one connected remote console client. Made by `ServerRemoteConsole` from the socket and the client's JWT, and wraps a command handler and log sender.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`IRemoteConsoleHandler`](/game-api/types/global-i-l/iremoteconsolehandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientHandler(Socket clientSocket, JwtSecurityToken token)"}</code> | Creates a `ClientHandler` from `clientSocket` and `token`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientendpoint" /><code>{"IPEndPoint ClientEndpoint { get; }"}</code> | The client's IP endpoint. |
| <Link id="m-commandhandler" /><code><Link to="/game-api/types/global-c-d/clientcommandhandler">{"ClientCommandHandler"}</Link>{" CommandHandler { get; }"}</code> | Handles commands from this client. |
| <Link id="m-logsender" /><code><Link to="/game-api/types/global-c-d/clientlogsender">{"ClientLogSender"}</Link>{" LogSender { get; }"}</code> | Sends subscribed log output to this client. |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" UserInfo { get; }"}</code> | User and permissions read from the client's token. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/game-api/types/global-c-d/clienthandler">{"ClientHandler"}</Link>{"> Disconnected"}</code> | Raised when the client is terminated. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> | Closes the command handler and log sender and raises `Disconnected`. Runs when the command handler disconnects. |

## Used in

Members of other types that take, return or hold a `ClientHandler`:

[`ServerRemoteConsole.allClientHandlers`](/game-api/types/global-s/serverremoteconsole#m-allclienthandlers), [`ServerRemoteConsole.HandleClientTerminated`](/game-api/types/global-s/serverremoteconsole#m-handleclientterminated).

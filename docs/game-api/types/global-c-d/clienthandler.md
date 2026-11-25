---
title: "ClientHandler"
description: "class ClientHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientHandler

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`IRemoteConsoleHandler`](/game-api/types/global-i-l/iremoteconsolehandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientHandler(Socket clientSocket, JwtSecurityToken token)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientendpoint" /><code>{"IPEndPoint ClientEndpoint { get; }"}</code> |  |
| <Link id="m-commandhandler" /><code><Link to="/game-api/types/global-c-d/clientcommandhandler">{"ClientCommandHandler"}</Link>{" CommandHandler { get; }"}</code> |  |
| <Link id="m-logsender" /><code><Link to="/game-api/types/global-c-d/clientlogsender">{"ClientLogSender"}</Link>{" LogSender { get; }"}</code> |  |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" UserInfo { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/game-api/types/global-c-d/clienthandler">{"ClientHandler"}</Link>{"> Disconnected"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ClientHandler`:

[`ServerRemoteConsole.allClientHandlers`](/game-api/types/global-s/serverremoteconsole#m-allclienthandlers), [`ServerRemoteConsole.HandleClientTerminated`](/game-api/types/global-s/serverremoteconsole#m-handleclientterminated).

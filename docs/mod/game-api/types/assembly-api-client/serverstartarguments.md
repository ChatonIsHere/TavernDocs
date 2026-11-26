---
title: "ServerStartArguments"
description: "What a server tells the Alta web API when it starts its session."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerStartArguments

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

What a server tells the Alta web API when it starts its session. Built by `ServerHandler` and passed to `IServerAccess.StartAsync`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerStartArguments()"}</code> | Creates a `ServerStartArguments` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-address" /><code>{"IPAddress Address { get; set; }"}</code> | Public address of a locally run server, from the public IP lookup. |
| <Link id="m-consoleport" /><code>{"int? ConsolePort { get; set; }"}</code> | Remote console port (1758) when the console is on. |
| <Link id="m-gameport" /><code>{"int? GamePort { get; set; }"}</code> | Game port of a locally run server (1757). |
| <Link id="m-isrunninglocally" /><code>{"bool IsRunningLocally { get; set; }"}</code> | True for a self-hosted server, which registers its address and ports with the API instead of starting a hosted session. |
| <Link id="m-localaddress" /><code>{"IPAddress LocalAddress { get; set; }"}</code> | LAN IPv4 address of a locally run server. |
| <Link id="m-loggingport" /><code>{"int? LoggingPort { get; set; }"}</code> | Logging port (1759) when the remote console is on. |
| <Link id="m-version" /><code><Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" Version { get; set; }"}</code> | Game version the server runs. |
| <Link id="m-webserverport" /><code>{"int? WebServerPort { get; set; }"}</code> | Web server port of a locally run server (1761). |
| <Link id="m-websocketport" /><code>{"int? WebSocketPort { get; set; }"}</code> | Websocket port. Not set by `ServerHandler`. |

## Used in

Members of other types that take, return or hold a `ServerStartArguments`:

[`IServerAccess.StartAsync`](/mod/game-api/types/assembly-api-client/iserveraccess#m-startasync), [`LocalServerAccess.StartAsync`](/mod/game-api/types/assembly-api-client/localserveraccess#m-startasync), [`ServerAccess.StartAsync`](/mod/game-api/types/assembly-api-client/serveraccess#m-startasync).

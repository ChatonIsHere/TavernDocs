---
title: "ServerLifetimePipeline"
description: "Opens the server socket and makes the handler. GetServerRegion(), GetServerFleet()."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerLifetimePipeline

A **static class** in `Root.Township`, `Alta.Networking.Servers`.

Opens the server socket and makes the handler. `GetServerRegion()`, `GetServerFleet()`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Attributes** `ApplicationShutdownOrder`
- **Documented in** [Server lifecycle](/game-api/networking/server-lifecycle)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hostname" /><code>{"const string HostName"}</code> |  |
| <Link id="m-servername" /><code>{"const string ServerName"}</code> |  |
| <Link id="m-servertransporttype" /><code>{"const string ServerTransportType"}</code> |  |
| <Link id="m-currentserver" /><code>{"private static "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" currentServer"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-serveridentifier" /><code>{"private const string ServerIdentifier"}</code> |  |
| <Link id="m-serverversion" /><code>{"private const string ServerVersion"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttostartserver" /><code>{"static async Task<bool> AttemptToStartServer("}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server, int port, bool isRunningLocally)"}</code> |  |
| <Link id="m-getserverfleet" /><code>{"static string GetServerFleet()"}</code> |  |
| <Link id="m-getserverregion" /><code>{"static string GetServerRegion()"}</code> |  |
| <Link id="m-serverended" /><code>{"private static void ServerEnded("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> |  |
| <Link id="m-startrejected" /><code>{"private static void StartRejected(string error)"}</code> |  |
| <Link id="m-startserverhandler" /><code>{"private static async Task StartServerHandler("}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess, int port, bool isRunningLocally)"}</code> |  |

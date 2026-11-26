---
title: "ServerLifetimePipeline"
description: "Server: starts the game server on a port and tracks the running server's info until its socket closes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerLifetimePipeline

A **static class** in `Root.Township`, `Alta.Networking.Servers`.

Server: starts the game server on a port and tracks the running server's info until its socket closes.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Attributes** `ApplicationShutdownOrder`
- **Documented in** [Server lifecycle](/mod/game-api/networking/server-lifecycle)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hostname" /><code>{"const string HostName"}</code> | Log context key `hostname`. |
| <Link id="m-servername" /><code>{"const string ServerName"}</code> | Log context key `server_name`. |
| <Link id="m-servertransporttype" /><code>{"const string ServerTransportType"}</code> | Log context key `network_transport`. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentserver" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" currentServer"}</code> | Info of the server being started or running. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-serveridentifier" /><code>{"private const string ServerIdentifier"}</code> | Log context key `server_id`, set to the server's name. |
| <Link id="m-serverversion" /><code>{"private const string ServerVersion"}</code> | Log context key `server_version`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttostartserver" /><code>{"static async Task<bool> AttemptToStartServer("}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server, int port, bool isRunningLocally)"}</code> | Starts the server unless one is already starting or running; returns false in that case. |
| <Link id="m-getserverfleet" /><code>{"static string GetServerFleet()"}</code> | Fleet name of the running server, or null. |
| <Link id="m-getserverregion" /><code>{"static string GetServerRegion()"}</code> | Launch region of the running server, or null. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serverended" /><code>{"private static void ServerEnded("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | When the server socket closes, clears the server info and log context and sets `IsServer` false. |
| <Link id="m-startrejected" /><code>{"private static void StartRejected(string error)"}</code> | Logs a failed start and clears the server info. |
| <Link id="m-startserverhandler" /><code>{"private static async Task StartServerHandler("}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess, int port, bool isRunningLocally)"}</code> | Opens a KCP server socket, sets `IsServer`, and boots a `ServerHandler` that initializes the network scene. |

</details>

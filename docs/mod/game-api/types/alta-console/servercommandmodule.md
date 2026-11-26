---
title: "ServerCommandModule"
description: "Console module server: starts servers, proxies commands to other servers over their websocket console, and runs a spot-instance migration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `server`: starts servers, proxies commands to other servers over their websocket console, and runs a spot-instance migration. Needs login, play mode and `server_owner`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `LoggedInOnly`, `PlayOnly`, `WithPermissionOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-informnewserverofreadiness" /><code>{"private static async Task<bool> InformNewServerOfReadiness(int serverIdentifier)"}</code> | Sends `server mark-ready` to the new server over websocket during a migration; returns false on failure. |
| <Link id="m-migrate" /><code>{"private static async Task Migrate(float secondsLeftUntilTermination = 120)"}</code> | Server: `server migrate` locks joins, warns players, stops for migration, asks the API for a new allocation, saves, signals the new server and shuts down. |
| <Link id="m-migrateclienttonewinstance" /><code>{"private static Task MigrateClientToNewInstance("}<Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" connectionToNewInstance)"}</code> | Placeholder for moving clients to the new server during migration; does nothing. |
| <Link id="m-proxy" /><code>{"private static async Task Proxy(int serverId, string proxiedCommand)"}</code> | `server proxy`: sends a console command to another server through its websocket console. |
| <Link id="m-requestmigrationfromwebapi" /><code>{"private static async Task<"}<Link to="/mod/game-api/types/assembly-api-models/allocationresult">{"AllocationResult"}</Link>{"> RequestMigrationFromWebApi("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" activeServer)"}</code> | Asks the Alta API for a migration allocation, retrying every 5 seconds until it gets one. |
| <Link id="m-saveworld" /><code>{"private static Task SaveWorld()"}</code> | Saves the world instantly before a migration completes. |
| <Link id="m-sendplayercommunications" /><code>{"private static async Task SendPlayerCommunications(TimeSpan remainingTime)"}</code> | Sends migration warnings to all players now, a minute before and 10 seconds before termination. |
| <Link id="m-sendwebsocketmessage" /><code>{"private static async Task SendWebsocketMessage(int serverIdentifier, string message)"}</code> | Gets console connection details from the API, opens the server's websocket, authenticates with the token and sends one command request. |
| <Link id="m-shutdownpostmigration" /><code>{"private static void ShutdownPostMigration("}<Link to="/mod/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | Quits the application after a migration with the given shutdown reason. |
| <Link id="m-startserverasync" /><code>{"private static async void StartServerAsync(int serverId, bool isExternalLaunch = true, int port = 1757, bool isHeadless = true, bool isRunningLocally = true)"}</code> | `server start`: fetches a controllable server from the API and starts it, by default headless, launched externally on port 1757. |

</details>

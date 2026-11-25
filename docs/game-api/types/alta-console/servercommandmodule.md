---
title: "ServerCommandModule"
description: "static class ServerCommandModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `LoggedInOnly`, `PlayOnly`, `WithPermissionOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-informnewserverofreadiness" /><code>{"private static async Task<bool> InformNewServerOfReadiness(int serverIdentifier)"}</code> |
| <Link id="m-migrate" /><code>{"private static async Task Migrate(float secondsLeftUntilTermination = 120)"}</code> |
| <Link id="m-migrateclienttonewinstance" /><code>{"private static Task MigrateClientToNewInstance("}<Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" connectionToNewInstance)"}</code> |
| <Link id="m-proxy" /><code>{"private static async Task Proxy(int serverId, string proxiedCommand)"}</code> |
| <Link id="m-requestmigrationfromwebapi" /><code>{"private static async Task<"}<Link to="/game-api/types/assembly-api-models/allocationresult">{"AllocationResult"}</Link>{"> RequestMigrationFromWebApi("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" activeServer)"}</code> |
| <Link id="m-saveworld" /><code>{"private static Task SaveWorld()"}</code> |
| <Link id="m-sendplayercommunications" /><code>{"private static async Task SendPlayerCommunications(TimeSpan remainingTime)"}</code> |
| <Link id="m-sendwebsocketmessage" /><code>{"private static async Task SendWebsocketMessage(int serverIdentifier, string message)"}</code> |
| <Link id="m-shutdownpostmigration" /><code>{"private static void ShutdownPostMigration("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> |
| <Link id="m-startserverasync" /><code>{"private static async void StartServerAsync(int serverId, bool isExternalLaunch = true, int port = 1757, bool isHeadless = true, bool isRunningLocally = true)"}</code> |

</details>

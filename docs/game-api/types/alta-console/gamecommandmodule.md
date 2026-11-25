---
title: "GameCommandModule"
description: "static class GameCommandModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `LoggedInOnly`, `PlayOnly`, `NotAllowedInRemote`, `Module`, `Alias`

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-recentlyshownservers" /><code>{"private static List<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> recentlyShownServers"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getserverinfo" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" GetServerInfo(int serverIdentifier)"}</code> |

<details>
<summary>23 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-connecttoplayer" /><code>{"private static async Task ConnectToPlayer("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0)"}</code> |
| <Link id="m-connecttoserver" /><code>{"private static async Task ConnectToServer(int serverIdentifier, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0)"}</code> |
| <Link id="m-createserverasync" /><code>{"private static async Task CreateServerAsync(string serverName, int sceneIndex, string region)"}</code> |
| <Link id="m-deletesave" /><code>{"private static void DeleteSave(int serverIdentifier)"}</code> |
| <Link id="m-displayservers" /><code>{"private static void DisplayServers(string header)"}</code> |
| <Link id="m-findserverbyname" /><code>{"private static async Task FindServerByName(string name)"}</code> |
| <Link id="m-joinserverasync" /><code>{"private static async Task JoinServerAsync(int serverIdentifier, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0)"}</code> |
| <Link id="m-joinserveratipasync" /><code>{"private static async Task JoinServerAtIpAsync(string serverIp, int sceneIndex = 0, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0, int port = 1757)"}</code> |
| <Link id="m-joinserveratlocalipasync" /><code>{"private static async Task JoinServerAtLocalIpAsync(int sceneIndex = 0, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0, int port = 1757)"}</code> |
| <Link id="m-setrecentlyshownservers" /><code>{"private static void SetRecentlyShownServers(IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> onlineServers)"}</code> |
| <Link id="m-showallonlineservers" /><code>{"private static async Task ShowAllOnlineServers()"}</code> |
| <Link id="m-showdiscover" /><code>{"private static async void ShowDiscover()"}</code> |
| <Link id="m-showonlineservers" /><code>{"private static async Task ShowOnlineServers()"}</code> |
| <Link id="m-showopenservers" /><code>{"private static async Task ShowOpenServers()"}</code> |
| <Link id="m-showownedservers" /><code>{"private static async Task ShowOwnedServers()"}</code> |
| <Link id="m-showpublicservers" /><code>{"private static async Task ShowPublicServers()"}</code> |
| <Link id="m-showservers" /><code>{"private static void ShowServers()"}</code> |
| <Link id="m-startlocalserverasync" /><code>{"private static async Task StartLocalServerAsync(int sceneIndex, bool isExternalLaunch = true, int port = 1757, bool isHeadless = true, bool isRunningLocally = true)"}</code> |
| <Link id="m-startlocaltestasync" /><code>{"private static async Task StartLocalTestAsync(int serverIdentifier = -1, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0)"}</code> |
| <Link id="m-startlocaltestwithsceneasync" /><code>{"private static async Task StartLocalTestWithSceneAsync(int scene = -1, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0)"}</code> |
| <Link id="m-startserverasync" /><code>{"private static async Task StartServerAsync(int server, bool isExternalLaunch = true, int port = 1757, bool isHeadless = true, bool isRunningLocally = true)"}</code> |
| <Link id="m-startserverasyncclean" /><code>{"private static async Task StartServerAsyncClean(int server, bool isExternalLaunch = true, int port = 1757, bool isHeadless = true, bool isRunningLocally = true)"}</code> |
| <Link id="m-stopgamemode" /><code>{"private static async Task StopGameMode()"}</code> |

</details>

---
title: "GameCommandModule"
description: "Console module game (alias g) for finding, joining, starting and stopping servers from the client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `game` (alias `g`) for finding, joining, starting and stopping servers from the client. Needs a logged in user, in play, and isn't allowed from the remote console.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `LoggedInOnly`, `PlayOnly`, `NotAllowedInRemote`, `Module`, `Alias`

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. Command output goes here. |
| <Link id="m-recentlyshownservers" /><code>{"private static List<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> recentlyShownServers"}</code> | The last listed servers, which the index arguments of other commands refer to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getserverinfo" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" GetServerInfo(int serverIdentifier)"}</code> | The server at that index in the last shown list, or the local server info if the index is out of range. |

<details>
<summary>23 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connecttoplayer" /><code>{"private static async Task ConnectToPlayer("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0)"}</code> | Command `game connect-player` (alias `cp`): joins the first server the given player is on. |
| <Link id="m-connecttoserver" /><code>{"private static async Task ConnectToServer(int serverIdentifier, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0)"}</code> | Command `game connect` (alias `c`): joins a server by its real API id. |
| <Link id="m-createserverasync" /><code>{"private static async Task CreateServerAsync(string serverName, int sceneIndex, string region)"}</code> | Command `game create-server` (alias `create`): server owner only. Asks the API to create a server with a name, scene index and region. |
| <Link id="m-deletesave" /><code>{"private static void DeleteSave(int serverIdentifier)"}</code> | Command `game delete-save`: server owner only. Deletes the save of a server from the recent list. |
| <Link id="m-displayservers" /><code>{"private static void DisplayServers(string header)"}</code> | Logs the recent list with index, name, scene type (Tutorial, Test or Town) and player count. |
| <Link id="m-findserverbyname" /><code>{"private static async Task FindServerByName(string name)"}</code> | Command `game find` (alias `f`): lists servers whose name matches. |
| <Link id="m-joinserverasync" /><code>{"private static async Task JoinServerAsync(int serverIdentifier, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0)"}</code> | Command `game join-server` (aliases `join`, `j`): joins the server at that index in the last shown list. |
| <Link id="m-joinserveratipasync" /><code>{"private static async Task JoinServerAtIpAsync(string serverIp, int sceneIndex = 0, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0, int port = 1757)"}</code> | Command `game join-ip` (alias `ip`): joins a dev server at an IPv4 address, scene and port (default 1757). |
| <Link id="m-joinserveratlocalipasync" /><code>{"private static async Task JoinServerAtLocalIpAsync(int sceneIndex = 0, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0, int port = 1757)"}</code> | Command `game ip-local` (alias `iplocal`): joins a dev server on the local IP. |
| <Link id="m-setrecentlyshownservers" /><code>{"private static void SetRecentlyShownServers(IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> onlineServers)"}</code> | Replaces the recent list, dropping servers whose target doesn't match this build's feature set. |
| <Link id="m-showallonlineservers" /><code>{"private static async Task ShowAllOnlineServers()"}</code> | Command `game show-all` (alias `all`): lists all online servers. |
| <Link id="m-showdiscover" /><code>{"private static async void ShowDiscover()"}</code> | Command `game show-discover` (alias `discover`): lists servers from discovery. |
| <Link id="m-showonlineservers" /><code>{"private static async Task ShowOnlineServers()"}</code> | Command `game show-online` (aliases `online`, `joined`): lists servers you have joined, sorted by name. |
| <Link id="m-showopenservers" /><code>{"private static async Task ShowOpenServers()"}</code> | Command `game show-open` (alias `open`): lists open servers. |
| <Link id="m-showownedservers" /><code>{"private static async Task ShowOwnedServers()"}</code> | Command `game show-owned` (alias `owned`): needs `debug_features`. Lists servers you can control. |
| <Link id="m-showpublicservers" /><code>{"private static async Task ShowPublicServers()"}</code> | Command `game show-public` (alias `public`): lists public servers. |
| <Link id="m-showservers" /><code>{"private static void ShowServers()"}</code> | Command `game list-recent` (alias `list`): shows the last listed servers again. |
| <Link id="m-startlocalserverasync" /><code>{"private static async Task StartLocalServerAsync(int sceneIndex, bool isExternalLaunch = true, int port = 1757, bool isHeadless = true, bool isRunningLocally = true)"}</code> | Command `game start-local`: server owner only. Starts the local server with the given scene index. |
| <Link id="m-startlocaltestasync" /><code>{"private static async Task StartLocalTestAsync(int serverIdentifier = -1, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0)"}</code> | Command `game local-test` (aliases `test`, `local`): needs `debug_features`. Starts a local test, on a listed server or the local one. |
| <Link id="m-startlocaltestwithsceneasync" /><code>{"private static async Task StartLocalTestWithSceneAsync(int scene = -1, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode = 0)"}</code> | Command `game local-test-scene`: needs `debug_features`. Starts a local test with a given scene index. |
| <Link id="m-startserverasync" /><code>{"private static async Task StartServerAsync(int server, bool isExternalLaunch = true, int port = 1757, bool isHeadless = true, bool isRunningLocally = true)"}</code> | Command `game start-server` (aliases `start`, `host`): server owner only. Starts a listed server, headless and external by default. |
| <Link id="m-startserverasyncclean" /><code>{"private static async Task StartServerAsyncClean(int server, bool isExternalLaunch = true, int port = 1757, bool isHeadless = true, bool isRunningLocally = true)"}</code> | Command `game startclean`: server owner only. Deletes the server's save, then starts it. |
| <Link id="m-stopgamemode" /><code>{"private static async Task StopGameMode()"}</code> | Command `game stop-mode` (alias `stop`): stops the current game mode. |

</details>

---
title: "JoinedServerGameMode"
description: "Client game mode for joining a game server: connects with retries, loads the server's scene and tells the server it's ready to spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinedServerGameMode

A **class** in `Root.Township`, the global namespace.

Client game mode for joining a game server: connects with retries, loads the server's scene and tells the server it's ready to spawn. Goes back to the main menu if it fails.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`JoinServerGameModeBase`](/mod/game-api/types/global-i-l/joinservergamemodebase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinedServerGameMode("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Creates a `JoinedServerGameMode` from `server`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdeeplink" /><code>{"private bool isDeepLink"}</code> | Set when the join came from a deep link. |
| <Link id="m-joinretries" /><code>{"private const int JoinRetries"}</code> | 24 connection attempts. |
| <Link id="m-joinretrydelayms" /><code>{"private const int JoinRetryDelayMs"}</code> | 5000 ms between connection attempts. |
| <Link id="m-lostconnectiondelayms" /><code>{"private const int LostConnectionDelayMs"}</code> | 2000 ms wait after losing the connection before leaving. |
| <Link id="m-server" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server"}</code> | The server being joined. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateasync" /><code>{"override async Task<bool> ActivateAsync()"}</code> | Shows the loading scene and tries to connect. On failure, returns to the main menu and returns false. |
| <Link id="m-createdeeplinkjoingamemode" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/joinedservergamemode">{"JoinedServerGameMode"}</Link>{" CreateDeeplinkJoinGameMode("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Makes the mode for a deep link join, which shows a deep link error message if joining fails. |
| <Link id="m-onstartsucceeded" /><code>{"override void OnStartSucceeded()"}</code> | Starts listening for the connection dropping. |
| <Link id="m-stopmodeasync" /><code>{"override async Task StopModeAsync(string reason)"}</code> | Fades to black, disconnects from the server and shuts down networking. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connecttoserver" /><code>{"private async Task<"}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> ConnectToServer()"}</code> | Tries to connect up to 24 times, 5 seconds apart. Stops early on a failure that can't be recovered. |
| <Link id="m-loadgamescene" /><code>{"private async Task<"}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> LoadGameScene("}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> | Loads the server's scene, sets up the client scene and sends `ClientIsReadyToSpawn`. |
| <Link id="m-lostconnection" /><code>{"private static async void LostConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Shows "Lost connection to server", waits 2 seconds, then stops the current game mode. |
| <Link id="m-returntomainmenuonfailure" /><code>{"private async Task ReturnToMainMenuOnFailure("}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> | Logs the error, loads the main menu, shows the error and shuts down networking. |
| <Link id="m-setuploadingscene" /><code>{"private static async Task SetupLoadingScene()"}</code> | Creates the loading scene and fades the screen back in. |

</details>

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
| <Link id="m-ctor" /><code>{"JoinedServerGameMode("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | <span className="api-desc">Creates a `JoinedServerGameMode` from `server`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdeeplink" /><code>{"private bool isDeepLink"}</code> | <span className="api-desc">Set when the join came from a deep link.</span> |
| <Link id="m-joinretries" /><code>{"private const int JoinRetries"}</code> | <span className="api-desc">24 connection attempts.</span> |
| <Link id="m-joinretrydelayms" /><code>{"private const int JoinRetryDelayMs"}</code> | <span className="api-desc">5000 ms between connection attempts.</span> |
| <Link id="m-lostconnectiondelayms" /><code>{"private const int LostConnectionDelayMs"}</code> | <span className="api-desc">2000 ms wait after losing the connection before leaving.</span> |
| <Link id="m-server" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server"}</code> | <span className="api-desc">The server being joined.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateasync" /><code>{"override async Task<bool> ActivateAsync()"}</code> | <span className="api-desc">Shows the loading scene and tries to connect. On failure, returns to the main menu and returns false.</span> |
| <Link id="m-createdeeplinkjoingamemode" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/joinedservergamemode">{"JoinedServerGameMode"}</Link>{" CreateDeeplinkJoinGameMode("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | <span className="api-desc">Makes the mode for a deep link join, which shows a deep link error message if joining fails.</span> |
| <Link id="m-onstartsucceeded" /><code>{"override void OnStartSucceeded()"}</code> | <span className="api-desc">Starts listening for the connection dropping.</span> |
| <Link id="m-stopmodeasync" /><code>{"override async Task StopModeAsync(string reason)"}</code> | <span className="api-desc">Fades to black, disconnects from the server and shuts down networking.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connecttoserver" /><code>{"private async Task<"}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> ConnectToServer()"}</code> | <span className="api-desc">Tries to connect up to 24 times, 5 seconds apart. Stops early on a failure that can't be recovered.</span> |
| <Link id="m-loadgamescene" /><code>{"private async Task<"}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> LoadGameScene("}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> | <span className="api-desc">Loads the server's scene, sets up the client scene and sends `ClientIsReadyToSpawn`.</span> |
| <Link id="m-lostconnection" /><code>{"private static async void LostConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Shows "Lost connection to server", waits 2 seconds, then stops the current game mode.</span> |
| <Link id="m-returntomainmenuonfailure" /><code>{"private async Task ReturnToMainMenuOnFailure("}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" result)"}</code> | <span className="api-desc">Logs the error, loads the main menu, shows the error and shuts down networking.</span> |
| <Link id="m-setuploadingscene" /><code>{"private static async Task SetupLoadingScene()"}</code> | <span className="api-desc">Creates the loading scene and fades the screen back in.</span> |

</details>

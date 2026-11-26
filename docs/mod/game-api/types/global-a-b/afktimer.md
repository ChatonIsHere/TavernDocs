---
title: "AfkTimer"
description: "Server: kicks players who don't move or hit anything for a while, when the server's AFK timer setting is on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AfkTimer

A **class** in `Root.Township`, the global namespace.

Server: kicks players who don't move or hit anything for a while, when the server's AFK timer setting is on.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AfkTimer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-graceperiod" /><code>{"private float gracePeriod"}</code> | <span className="api-desc">Seconds between the warning and the kick. Defaults to 30.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Whether the timer is on, from the server's `HasAFKTimer` setting.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-timeouts" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{", Coroutine> timeouts"}</code> | <span className="api-desc">Running timeout coroutines by player.</span> |
| <Link id="m-timerinseconds" /><code>{"private float timerInSeconds"}</code> | <span className="api-desc">Idle seconds before the warning. Defaults to 600.</span> |

</details>

## Methods

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkupdatesettings" /><code>{"private void CheckUpdateSettings("}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Turns the timer on or off when the server's `HasAFKTimer` setting changes.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the server start and end events.</span> |
| <Link id="m-playercontrollerset" /><code>{"private void PlayerControllerSet("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Listens to the new controller's movement and tool hits and restarts the timer; stops it if the controller is gone.</span> |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Listens for the player's controller being set.</span> |
| <Link id="m-playerleft" /><code>{"private void PlayerLeft("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Stops the player's timer.</span> |
| <Link id="m-positionchanged" /><code>{"private void PositionChanged("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Restarts the player's timer when they move.</span> |
| <Link id="m-resettimeout" /><code>{"private void ResetTimeout("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Stops and restarts the player's timeout coroutine.</span> |
| <Link id="m-resetwithhit" /><code>{"private void ResetWithHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Restarts the wielder's timer when they hit something with a tool.</span> |
| <Link id="m-serverended" /><code>{"private void ServerEnded()"}</code> | <span className="api-desc">Stops every player's timer.</span> |
| <Link id="m-serverstarted" /><code>{"private void ServerStarted()"}</code> | <span className="api-desc">Reads the AFK setting, listens for setting changes and applies it.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the server start and end events.</span> |
| <Link id="m-stoptimeout" /><code>{"private void StopTimeout("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Stops and removes the player's timeout coroutine.</span> |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings()"}</code> | <span className="api-desc">When on, hooks joins and leaves and sets up current players; when off, unhooks and stops every timer.</span> |
| <Link id="m-waitfortimeout" /><code>{"private IEnumerator WaitForTimeout("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player) (iterator)"}</code> | <span className="api-desc">Waits `timerInSeconds`, warns the player, waits `gracePeriod`, says they're disconnected, then kicks after 5 seconds. The warning wrongly quotes `timerInSeconds`.</span> |

</details>

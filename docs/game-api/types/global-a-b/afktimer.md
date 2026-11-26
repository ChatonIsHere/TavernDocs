---
title: "AfkTimer"
description: "Server: kicks players who don't move or hit anything for a while, when the server's AFK timer setting is on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AfkTimer

A **class** in `Root.Township`, no namespace.

Server: kicks players who don't move or hit anything for a while, when the server's AFK timer setting is on.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AfkTimer()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-graceperiod" /><code>{"private float gracePeriod"}</code> | Seconds between the warning and the kick. Defaults to 30. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Whether the timer is on, from the server's `HasAFKTimer` setting. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-timeouts" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{", Coroutine> timeouts"}</code> | Running timeout coroutines by player. |
| <Link id="m-timerinseconds" /><code>{"private float timerInSeconds"}</code> | Idle seconds before the warning. Defaults to 600. |

</details>

## Methods

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkupdatesettings" /><code>{"private void CheckUpdateSettings("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | Turns the timer on or off when the server's `HasAFKTimer` setting changes. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the server start and end events. |
| <Link id="m-playercontrollerset" /><code>{"private void PlayerControllerSet("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Listens to the new controller's movement and tool hits and restarts the timer; stops it if the controller is gone. |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Listens for the player's controller being set. |
| <Link id="m-playerleft" /><code>{"private void PlayerLeft("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Stops the player's timer. |
| <Link id="m-positionchanged" /><code>{"private void PositionChanged("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Restarts the player's timer when they move. |
| <Link id="m-resettimeout" /><code>{"private void ResetTimeout("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Stops and restarts the player's timeout coroutine. |
| <Link id="m-resetwithhit" /><code>{"private void ResetWithHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Restarts the wielder's timer when they hit something with a tool. |
| <Link id="m-serverended" /><code>{"private void ServerEnded()"}</code> | Stops every player's timer. |
| <Link id="m-serverstarted" /><code>{"private void ServerStarted()"}</code> | Reads the AFK setting, listens for setting changes and applies it. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the server start and end events. |
| <Link id="m-stoptimeout" /><code>{"private void StopTimeout("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Stops and removes the player's timeout coroutine. |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings()"}</code> | When on, hooks joins and leaves and sets up current players; when off, unhooks and stops every timer. |
| <Link id="m-waitfortimeout" /><code>{"private IEnumerator WaitForTimeout("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player) (iterator)"}</code> | Waits `timerInSeconds`, warns the player, waits `gracePeriod`, says they're disconnected, then kicks after 5 seconds. The warning wrongly quotes `timerInSeconds`. |

</details>

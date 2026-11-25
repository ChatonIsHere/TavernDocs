---
title: "AfkTimer"
description: "class AfkTimer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AfkTimer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AfkTimer()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-graceperiod" /><code>{"private float gracePeriod"}</code> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-timeouts" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{", Coroutine> timeouts"}</code> |
| <Link id="m-timerinseconds" /><code>{"private float timerInSeconds"}</code> |

</details>

## Methods

<details>
<summary>14 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkupdatesettings" /><code>{"private void CheckUpdateSettings("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-playercontrollerset" /><code>{"private void PlayerControllerSet("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-playerleft" /><code>{"private void PlayerLeft("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-positionchanged" /><code>{"private void PositionChanged("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |
| <Link id="m-resettimeout" /><code>{"private void ResetTimeout("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-resetwithhit" /><code>{"private void ResetWithHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |
| <Link id="m-serverended" /><code>{"private void ServerEnded()"}</code> |
| <Link id="m-serverstarted" /><code>{"private void ServerStarted()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-stoptimeout" /><code>{"private void StopTimeout("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings()"}</code> |
| <Link id="m-waitfortimeout" /><code>{"private IEnumerator WaitForTimeout("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player) (iterator)"}</code> |

</details>

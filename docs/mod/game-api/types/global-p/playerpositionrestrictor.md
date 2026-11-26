---
title: "PlayerPositionRestrictor"
description: "Client: keeps the local player within a radius of this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPositionRestrictor

A **class** in `Root.Township`, the global namespace.

Client: keeps the local player within a radius of this object. If the player moves too far, it moves them back to a target point with a recovery move.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerPositionRestrictor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Vector3 center"}</code> | World position of this object at start, the center of the allowed area. |
| <Link id="m-istracking" /><code>{"private bool isTracking"}</code> | Whether the distance check runs. |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> | Squared allowed distance (set in the inspector as a plain distance). |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Where the player is sent back to. Defaults to this object. |
| <Link id="m-trackingcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" trackingController"}</code> | Local player controller being watched. |
| <Link id="m-trackingtransform" /><code>{"private Transform trackingTransform"}</code> | Transform of the watched player controller. |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> | Registered late update handle for `UpdatePosition`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settracking" /><code>{"void SetTracking(bool isEnabled)"}</code> | Turns the distance check on or off. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Stops tracking and forgets the player controller. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Clears tracking and unhooks from `LocalPlayerSet`. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the allowed radius and the return point in the editor. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks `LocalPlayerSet`, starts tracking the current player if enabled, and stores the center. |
| <Link id="m-updatelocalplayer" /><code>{"private void UpdateLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Switches tracking to a new local player controller, or clears it when null. |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> | Late update: if the player's local position is beyond the radius, moves them to `target`. |

</details>

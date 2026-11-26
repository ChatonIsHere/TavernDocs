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
| <Link id="m-ctor" /><code>{"PlayerPositionRestrictor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Vector3 center"}</code> | <span className="api-desc">World position of this object at start, the center of the allowed area.</span> |
| <Link id="m-istracking" /><code>{"private bool isTracking"}</code> | <span className="api-desc">Whether the distance check runs.</span> |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> | <span className="api-desc">Squared allowed distance (set in the inspector as a plain distance).</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Where the player is sent back to. Defaults to this object.</span> |
| <Link id="m-trackingcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" trackingController"}</code> | <span className="api-desc">Local player controller being watched.</span> |
| <Link id="m-trackingtransform" /><code>{"private Transform trackingTransform"}</code> | <span className="api-desc">Transform of the watched player controller.</span> |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> | <span className="api-desc">Registered late update handle for `UpdatePosition`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settracking" /><code>{"void SetTracking(bool isEnabled)"}</code> | <span className="api-desc">Turns the distance check on or off.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Stops tracking and forgets the player controller.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears tracking and unhooks from `LocalPlayerSet`.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the allowed radius and the return point in the editor.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks `LocalPlayerSet`, starts tracking the current player if enabled, and stores the center.</span> |
| <Link id="m-updatelocalplayer" /><code>{"private void UpdateLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Switches tracking to a new local player controller, or clears it when null.</span> |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> | <span className="api-desc">Late update: if the player's local position is beyond the radius, moves them to `target`.</span> |

</details>

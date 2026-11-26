---
title: "DirectionConstrainedRandomMovement"
description: "Moves an object back and forth along one local direction to random points, picked by the server and synced to clients (for example bobbing or swaying props)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DirectionConstrainedRandomMovement

A **class** in `Root.Township`, the global namespace.

Moves an object back and forth along one local direction to random points, picked by the server and synced to clients (for example bobbing or swaying props).

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DirectionConstrainedRandomMovement()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-aceleration" /><code>{"private float aceleration"}</code> | <span className="api-desc">How fast speed ramps up after a new target; 0 means full speed at once.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform being moved.</span> |
| <Link id="m-currentspeedmultiplier" /><code>{"private float currentSpeedMultiplier"}</code> | <span className="api-desc">Current speed ramp, 0 to 1.</span> |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | <span className="api-desc">Local direction of travel (normalised).</span> |
| <Link id="m-modulator" /><code>{"private AnimationCurve modulator"}</code> | <span className="api-desc">Curve for how far each step goes, as a share of the amplitude.</span> |
| <Link id="m-movementamplitude" /><code>{"private float movementAmplitude"}</code> | <span className="api-desc">Length of the line the object moves along.</span> |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> | <span className="api-desc">Movement speed, or lerp rate when lerping.</span> |
| <Link id="m-movewithlerp" /><code>{"private bool moveWithLerp"}</code> | <span className="api-desc">Whether to ease with lerp instead of moving at a steady speed.</span> |
| <Link id="m-movingtowards" /><code>{"private Vector3 movingTowards"}</code> | <span className="api-desc">Current target local position.</span> |
| <Link id="m-nextsign" /><code>{"private float nextSign"}</code> | <span className="api-desc">Which way the next step goes; flips each time.</span> |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | <span className="api-desc">Full position sync.</span> |
| <Link id="m-syncmovement" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncMovement"}</code> | <span className="api-desc">Target sync.</span> |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> | <span className="api-desc">The update registration.</span> |
| <Link id="m-usesnegativevaluesonmodulator" /><code>{"private bool usesNegativeValuesOnModulator"}</code> | <span className="api-desc">Whether the modulator is sampled from -1 to 1 instead of 0 to 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the syncs and registers the server or client update.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the current target. It sends to all chunks, not only the joining player.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getnewposition" /><code>{"private void GetNewPosition()"}</code> | <span className="api-desc">Server: picks the next target along the direction, alternating sides, and sends it to clients.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the update registration.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the movement line in the parent's space.</span> |
| <Link id="m-serverupdateposition" /><code>{"private void ServerUpdatePosition()"}</code> | <span className="api-desc">Server: picks a new target on arrival, then moves.</span> |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs current position and target as ratios along the line. Not sent anywhere in this class.</span> |
| <Link id="m-syncmovement-2" /><code>{"private void SyncMovement("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float movingTowardsRatio)"}</code> | <span className="api-desc">Client: receives a new target ratio and restarts the speed ramp.</span> |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> | <span className="api-desc">Moves toward the target, by lerp or at a steady speed, with optional speed ramp-up.</span> |

</details>

---
title: "DirectionConstrainedRandomMovement"
description: "Moves an object back and forth along one local direction to random points, picked by the server and synced to clients (for example bobbing or swaying props)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DirectionConstrainedRandomMovement

A **class** in `Root.Township`, no namespace.

Moves an object back and forth along one local direction to random points, picked by the server and synced to clients (for example bobbing or swaying props).

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DirectionConstrainedRandomMovement()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-aceleration" /><code>{"private float aceleration"}</code> | How fast speed ramps up after a new target; 0 means full speed at once. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform being moved. |
| <Link id="m-currentspeedmultiplier" /><code>{"private float currentSpeedMultiplier"}</code> | Current speed ramp, 0 to 1. |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | Local direction of travel (normalised). |
| <Link id="m-modulator" /><code>{"private AnimationCurve modulator"}</code> | Curve for how far each step goes, as a share of the amplitude. |
| <Link id="m-movementamplitude" /><code>{"private float movementAmplitude"}</code> | Length of the line the object moves along. |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> | Movement speed, or lerp rate when lerping. |
| <Link id="m-movewithlerp" /><code>{"private bool moveWithLerp"}</code> | Whether to ease with lerp instead of moving at a steady speed. |
| <Link id="m-movingtowards" /><code>{"private Vector3 movingTowards"}</code> | Current target local position. |
| <Link id="m-nextsign" /><code>{"private float nextSign"}</code> | Which way the next step goes; flips each time. |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | Full position sync. |
| <Link id="m-syncmovement" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncMovement"}</code> | Target sync. |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> | The update registration. |
| <Link id="m-usesnegativevaluesonmodulator" /><code>{"private bool usesNegativeValuesOnModulator"}</code> | Whether the modulator is sampled from -1 to 1 instead of 0 to 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the syncs and registers the server or client update. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the current target. It sends to all chunks, not only the joining player. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getnewposition" /><code>{"private void GetNewPosition()"}</code> | Server: picks the next target along the direction, alternating sides, and sends it to clients. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the update registration. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the movement line in the parent's space. |
| <Link id="m-serverupdateposition" /><code>{"private void ServerUpdatePosition()"}</code> | Server: picks a new target on arrival, then moves. |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs current position and target as ratios along the line. Not sent anywhere in this class. |
| <Link id="m-syncmovement-2" /><code>{"private void SyncMovement("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float movingTowardsRatio)"}</code> | Client: receives a new target ratio and restarts the speed ramp. |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> | Moves toward the target, by lerp or at a steady speed, with optional speed ramp-up. |

</details>

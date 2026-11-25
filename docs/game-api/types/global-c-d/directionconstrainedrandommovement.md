---
title: "DirectionConstrainedRandomMovement"
description: "class DirectionConstrainedRandomMovement in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DirectionConstrainedRandomMovement

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DirectionConstrainedRandomMovement()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-aceleration" /><code>{"private float aceleration"}</code> |  |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-currentspeedmultiplier" /><code>{"private float currentSpeedMultiplier"}</code> |  |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> |  |
| <Link id="m-modulator" /><code>{"private AnimationCurve modulator"}</code> |  |
| <Link id="m-movementamplitude" /><code>{"private float movementAmplitude"}</code> |  |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> |  |
| <Link id="m-movewithlerp" /><code>{"private bool moveWithLerp"}</code> |  |
| <Link id="m-movingtowards" /><code>{"private Vector3 movingTowards"}</code> |  |
| <Link id="m-nextsign" /><code>{"private float nextSign"}</code> |  |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> |  |
| <Link id="m-syncmovement" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncMovement"}</code> |  |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> |  |
| <Link id="m-usesnegativevaluesonmodulator" /><code>{"private bool usesNegativeValuesOnModulator"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-getnewposition" /><code>{"private void GetNewPosition()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-serverupdateposition" /><code>{"private void ServerUpdatePosition()"}</code> |  |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncmovement-2" /><code>{"private void SyncMovement("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float movingTowardsRatio)"}</code> |  |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> |  |

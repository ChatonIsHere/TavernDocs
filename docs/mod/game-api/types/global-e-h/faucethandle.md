---
title: "FaucetHandle"
description: "Twistable handle that turns around its local Z axis while a player holds its pickup, and reports a 0 to 1 value through onValueChanged."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FaucetHandle

A **class** in `Root.Township`, the global namespace.

Twistable handle that turns around its local Z axis while a player holds its pickup, and reports a 0 to 1 value through `onValueChanged`. The angle is only synced to players when they join.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FaucetHandle()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletoprogressskew" /><code>{"private AnimationCurve angleToProgressSkew"}</code> | <span className="api-desc">Curve mapping angle over `maxAngle` to the value sent to `onValueChanged`.</span> |
| <Link id="m-checking" /><code>{"private Coroutine checking"}</code> | <span className="api-desc">The running `RotationCheck` coroutine, if any.</span> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">Backing field for `CurrentAngle`.</span> |
| <Link id="m-halfrotation" /><code>{"private Quaternion halfRotation"}</code> | <span className="api-desc">Rotation at half of `maxAngle`, used as the centre for clamping.</span> |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | <span className="api-desc">Largest angle the handle can turn to, 1 to 180 degrees.</span> |
| <Link id="m-maxrotationpersecond" /><code>{"private float maxRotationPerSecond"}</code> | <span className="api-desc">How fast the handle can follow the hand, in degrees per second (its tightness).</span> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handlevalueevent">{"HandleValueEvent"}</Link>{" onValueChanged"}</code> | <span className="api-desc">Event fired with the 0 to 1 progress whenever the angle changes.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> sync"}</code> | <span className="api-desc">Method sync used to send the angle.</span> |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" targetPickup"}</code> | <span className="api-desc">The pickup players grab to turn the handle.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle-2" /><code>{"float CurrentAngle { get; private set; }"}</code> | <span className="api-desc">Current handle angle in degrees. Setting it fires `onValueChanged` with the skewed 0 to 1 progress.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the `sync` method sync on `SyncA`.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: sets `CurrentAngle` from the handle's starting rotation.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the current angle to the joining player.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Works out the half-way rotation and hooks the pickup's interaction start and end events.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">In play mode, recomputes the half-way rotation after `maxAngle` changes.</span> |
| <Link id="m-rotationcheck" /><code>{"private IEnumerator RotationCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Coroutine that turns the handle to follow the holding hand's twist, clamped to `maxAngle` and limited by `maxRotationPerSecond`.</span> |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" target, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Starts `RotationCheck` for the hand that grabbed the pickup.</span> |
| <Link id="m-stopcheck" /><code>{"private void StopCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" target, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops `RotationCheck` when the pickup is let go.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float angle)"}</code> | <span className="api-desc">Writes the angle, and on a client applies the received angle to the rotation and `CurrentAngle`.</span> |

</details>

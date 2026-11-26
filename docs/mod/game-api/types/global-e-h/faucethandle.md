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
| <Link id="m-ctor" /><code>{"FaucetHandle()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletoprogressskew" /><code>{"private AnimationCurve angleToProgressSkew"}</code> | Curve mapping angle over `maxAngle` to the value sent to `onValueChanged`. |
| <Link id="m-checking" /><code>{"private Coroutine checking"}</code> | The running `RotationCheck` coroutine, if any. |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | Backing field for `CurrentAngle`. |
| <Link id="m-halfrotation" /><code>{"private Quaternion halfRotation"}</code> | Rotation at half of `maxAngle`, used as the centre for clamping. |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | Largest angle the handle can turn to, 1 to 180 degrees. |
| <Link id="m-maxrotationpersecond" /><code>{"private float maxRotationPerSecond"}</code> | How fast the handle can follow the hand, in degrees per second (its tightness). |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handlevalueevent">{"HandleValueEvent"}</Link>{" onValueChanged"}</code> | Event fired with the 0 to 1 progress whenever the angle changes. |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> sync"}</code> | Method sync used to send the angle. |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" targetPickup"}</code> | The pickup players grab to turn the handle. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle-2" /><code>{"float CurrentAngle { get; private set; }"}</code> | Current handle angle in degrees. Setting it fires `onValueChanged` with the skewed 0 to 1 progress. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `sync` method sync on `SyncA`. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: sets `CurrentAngle` from the handle's starting rotation. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the current angle to the joining player. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Works out the half-way rotation and hooks the pickup's interaction start and end events. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | In play mode, recomputes the half-way rotation after `maxAngle` changes. |
| <Link id="m-rotationcheck" /><code>{"private IEnumerator RotationCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Coroutine that turns the handle to follow the holding hand's twist, clamped to `maxAngle` and limited by `maxRotationPerSecond`. |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" target, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Starts `RotationCheck` for the hand that grabbed the pickup. |
| <Link id="m-stopcheck" /><code>{"private void StopCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" target, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops `RotationCheck` when the pickup is let go. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float angle)"}</code> | Writes the angle, and on a client applies the received angle to the rotation and `CurrentAngle`. |

</details>

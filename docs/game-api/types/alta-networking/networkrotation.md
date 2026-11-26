---
title: "NetworkRotation"
description: "Syncs an interactable's local rotation around one axis (for example a wheel or handle a player turns)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkRotation

A **class** in `Root.Township`, `Alta.Networking`.

Syncs an interactable's local rotation around one axis (for example a wheel or handle a player turns). The turning player's client sends the angle when the interaction ends; others lerp to it.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkRotation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrotationmultiplier" /><code>{"private float addRotationMultiplier"}</code> | Scale applied to angles passed to `RotateAngle` (default 0.5). |
| <Link id="m-baseinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" baseInteractable"}</code> | The interactable whose interaction ending triggers a sync. |
| <Link id="m-fixedupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedUpdate"}</code> | The registered fixed update lerp, or null. |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | Lerp factor per fixed update (default 0.5). |
| <Link id="m-localaxis" /><code>{"private Vector3 localAxis"}</code> | The normalized axis the rotation is around. |
| <Link id="m-precision" /><code>{"private float precision"}</code> | Step size used to pack the angle, and the close-enough distance for lerping. |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> | Angle difference above which a received value snaps instead of lerping (default 90). |
| <Link id="m-syncstatus" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncStatus"}</code> | Method sync that carries the angle. |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | The transform being rotated (this object). |
| <Link id="m-value" /><code>{"private float value"}</code> | The target angle last set or received. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private float CurrentValue { get; }"}</code> | The current angle around the axis, 0 to 360. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the angle method sync. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current angle to a newly connected remote player. |
| <Link id="m-rotateangle" /><code>{"void RotateAngle(float angle)"}</code> | Turns by the given angle times `addRotationMultiplier`, locally only. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyvalue" /><code>{"private void ApplyValue(float value)"}</code> | Sets the local rotation to the given angle around the axis. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the interactable's start and end events and reads the starting angle. |
| <Link id="m-clampvalue" /><code>{"private float ClampValue(float value)"}</code> | Wraps an angle into the 0 to 360 range. |
| <Link id="m-finishlerp" /><code>{"private void FinishLerp()"}</code> | Applies the target angle and stops the fixed update lerp. |
| <Link id="m-getdifference" /><code>{"private float GetDifference(float currentValue, float value)"}</code> | Difference between two angles, folded when over 180. |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | Fixed update: lerps toward the synced angle, then finishes once within `precision`. |
| <Link id="m-lerptovalue" /><code>{"private float LerpToValue(float value, float lerpValue)"}</code> | Lerps the current angle toward the target, taking wrap-around into account. |
| <Link id="m-sendsync" /><code>{"private void SendSync("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When a local interactor lets go, sends the current angle to everyone. |
| <Link id="m-stoplerp" /><code>{"private void StopLerp("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When an interaction starts, snaps to the target angle and stops lerping. |
| <Link id="m-syncstatus-2" /><code>{"private void SyncStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float syncValue)"}</code> | Sends or receives the angle. The server only accepts it from the last interacting player, then relays it to others. |

</details>

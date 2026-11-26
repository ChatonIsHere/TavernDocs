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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkRotation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrotationmultiplier" /><code>{"private float addRotationMultiplier"}</code> | <span className="api-desc">Scale applied to angles passed to `RotateAngle` (default 0.5).</span> |
| <Link id="m-baseinteractable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" baseInteractable"}</code> | <span className="api-desc">The interactable whose interaction ending triggers a sync.</span> |
| <Link id="m-fixedupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedUpdate"}</code> | <span className="api-desc">The registered fixed update lerp, or null.</span> |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | <span className="api-desc">Lerp factor per fixed update (default 0.5).</span> |
| <Link id="m-localaxis" /><code>{"private Vector3 localAxis"}</code> | <span className="api-desc">The normalized axis the rotation is around.</span> |
| <Link id="m-precision" /><code>{"private float precision"}</code> | <span className="api-desc">Step size used to pack the angle, and the close-enough distance for lerping.</span> |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> | <span className="api-desc">Angle difference above which a received value snaps instead of lerping (default 90).</span> |
| <Link id="m-syncstatus" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncStatus"}</code> | <span className="api-desc">Method sync that carries the angle.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">The transform being rotated (this object).</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">The target angle last set or received.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private float CurrentValue { get; }"}</code> | <span className="api-desc">The current angle around the axis, 0 to 360.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the angle method sync.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current angle to a newly connected remote player.</span> |
| <Link id="m-rotateangle" /><code>{"void RotateAngle(float angle)"}</code> | <span className="api-desc">Turns by the given angle times `addRotationMultiplier`, locally only.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyvalue" /><code>{"private void ApplyValue(float value)"}</code> | <span className="api-desc">Sets the local rotation to the given angle around the axis.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the interactable's start and end events and reads the starting angle.</span> |
| <Link id="m-clampvalue" /><code>{"private float ClampValue(float value)"}</code> | <span className="api-desc">Wraps an angle into the 0 to 360 range.</span> |
| <Link id="m-finishlerp" /><code>{"private void FinishLerp()"}</code> | <span className="api-desc">Applies the target angle and stops the fixed update lerp.</span> |
| <Link id="m-getdifference" /><code>{"private float GetDifference(float currentValue, float value)"}</code> | <span className="api-desc">Difference between two angles, folded when over 180.</span> |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | <span className="api-desc">Fixed update: lerps toward the synced angle, then finishes once within `precision`.</span> |
| <Link id="m-lerptovalue" /><code>{"private float LerpToValue(float value, float lerpValue)"}</code> | <span className="api-desc">Lerps the current angle toward the target, taking wrap-around into account.</span> |
| <Link id="m-sendsync" /><code>{"private void SendSync("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When a local interactor lets go, sends the current angle to everyone.</span> |
| <Link id="m-stoplerp" /><code>{"private void StopLerp("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When an interaction starts, snaps to the target angle and stops lerping.</span> |
| <Link id="m-syncstatus-2" /><code>{"private void SyncStatus("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float syncValue)"}</code> | <span className="api-desc">Sends or receives the angle. The server only accepts it from the last interacting player, then relays it to others.</span> |

</details>

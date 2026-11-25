---
title: "NetworkRotation"
description: "class NetworkRotation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkRotation

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkRotation()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-addrotationmultiplier" /><code>{"private float addRotationMultiplier"}</code> |
| <Link id="m-baseinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" baseInteractable"}</code> |
| <Link id="m-fixedupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedUpdate"}</code> |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> |
| <Link id="m-localaxis" /><code>{"private Vector3 localAxis"}</code> |
| <Link id="m-precision" /><code>{"private float precision"}</code> |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> |
| <Link id="m-syncstatus" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncStatus"}</code> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |
| <Link id="m-value" /><code>{"private float value"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-currentvalue" /><code>{"private float CurrentValue { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-rotateangle" /><code>{"void RotateAngle(float angle)"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-applyvalue" /><code>{"private void ApplyValue(float value)"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-clampvalue" /><code>{"private float ClampValue(float value)"}</code> |
| <Link id="m-finishlerp" /><code>{"private void FinishLerp()"}</code> |
| <Link id="m-getdifference" /><code>{"private float GetDifference(float currentValue, float value)"}</code> |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> |
| <Link id="m-lerptovalue" /><code>{"private float LerpToValue(float value, float lerpValue)"}</code> |
| <Link id="m-sendsync" /><code>{"private void SendSync("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-stoplerp" /><code>{"private void StopLerp("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-syncstatus-2" /><code>{"private void SyncStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float syncValue)"}</code> |

</details>

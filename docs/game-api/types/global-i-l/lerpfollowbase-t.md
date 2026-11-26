---
title: "LerpFollowBase<T>"
description: "Makes an object trail smoothly after a target's position plus an offset, in late update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpFollowBase&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

Makes an object trail smoothly after a target's position plus an offset, in late update. Off on a dedicated server by default. `LerpFollow` and `ScaledLerpFollow` derive from it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`LerpFollow`](/game-api/types/global-i-l/lerpfollow), [`ScaledLerpFollow`](/game-api/types/global-s/scaledlerpfollow)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected LerpFollowBase()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"protected Transform cachedTransform"}</code> | This object's transform. |
| <Link id="m-oldposition" /><code>{"protected Vector3 oldPosition"}</code> | Position from the last update. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabledonserver" /><code>{"private bool isDisabledOnServer"}</code> | When true, the component turns itself off on a server, except in a local test. |
| <Link id="m-lerppersecond" /><code>{"private float lerpPerSecond"}</code> | How fast it catches up with the target. |
| <Link id="m-staticupdatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" staticUpdateModule"}</code> | Shared LateUpdate module for all followers of this target type. |
| <Link id="m-updatemodule" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateModule"}</code> | This follower's registration in the update module. |
| <Link id="m-worldoffset" /><code>{"private Vector3 worldOffset"}</code> | World offset from the target position. Defaults to 0.5 up. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"abstract T Target { get; }"}</code> | The thing being followed. Following stops when it becomes null. |
| <Link id="m-targetposition" /><code>{"protected abstract Vector3 TargetPosition { get; }"}</code> | World position of the target. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settarget" /><code>{"virtual void SetTarget(T target)"}</code> | Enables following when the target is not null. |
| <Link id="m-start" /><code>{"virtual void Start()"}</code> | Snaps to the target, and disables itself on a server unless that is turned off. |
| <Link id="m-moving" /><code>{"protected virtual void Moving(Vector3 from, Vector3 to)"}</code> | Called each update with the old and target positions, for subclasses. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-movementupdate" /><code>{"private void MovementUpdate()"}</code> | Runs in LateUpdate. Moves towards the target plus `worldOffset` by `lerpPerSecond` of the gap each second, or disables itself if the target is gone. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops the movement update. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Registers the movement update with the shared update module. |

</details>

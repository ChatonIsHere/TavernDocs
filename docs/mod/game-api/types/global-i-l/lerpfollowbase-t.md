---
title: "LerpFollowBase<T>"
description: "Makes an object trail smoothly after a target's position plus an offset, in late update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpFollowBase&lt;T&gt;

An **abstract class** in `Root.Township`, the global namespace.

Makes an object trail smoothly after a target's position plus an offset, in late update. Off on a dedicated server by default. `LerpFollow` and `ScaledLerpFollow` derive from it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`LerpFollow`](/mod/game-api/types/global-i-l/lerpfollow), [`ScaledLerpFollow`](/mod/game-api/types/global-s/scaledlerpfollow)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LerpFollowBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"protected Transform cachedTransform"}</code> | <span className="api-desc">This object's transform.</span> |
| <Link id="m-oldposition" /><code>{"protected Vector3 oldPosition"}</code> | <span className="api-desc">Position from the last update.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabledonserver" /><code>{"private bool isDisabledOnServer"}</code> | <span className="api-desc">When true, the component turns itself off on a server, except in a local test.</span> |
| <Link id="m-lerppersecond" /><code>{"private float lerpPerSecond"}</code> | <span className="api-desc">How fast it catches up with the target.</span> |
| <Link id="m-staticupdatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" staticUpdateModule"}</code> | <span className="api-desc">Shared LateUpdate module for all followers of this target type.</span> |
| <Link id="m-updatemodule" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateModule"}</code> | <span className="api-desc">This follower's registration in the update module.</span> |
| <Link id="m-worldoffset" /><code>{"private Vector3 worldOffset"}</code> | <span className="api-desc">World offset from the target position. Defaults to 0.5 up.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"abstract T Target { get; }"}</code> | <span className="api-desc">The thing being followed. Following stops when it becomes null.</span> |
| <Link id="m-targetposition" /><code>{"protected abstract Vector3 TargetPosition { get; }"}</code> | <span className="api-desc">World position of the target.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settarget" /><code>{"virtual void SetTarget(T target)"}</code> | <span className="api-desc">Enables following when the target is not null.</span> |
| <Link id="m-start" /><code>{"virtual void Start()"}</code> | <span className="api-desc">Snaps to the target, and disables itself on a server unless that is turned off.</span> |
| <Link id="m-moving" /><code>{"protected virtual void Moving(Vector3 from, Vector3 to)"}</code> | <span className="api-desc">Called each update with the old and target positions, for subclasses.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-movementupdate" /><code>{"private void MovementUpdate()"}</code> | <span className="api-desc">Runs in LateUpdate. Moves towards the target plus `worldOffset` by `lerpPerSecond` of the gap each second, or disables itself if the target is gone.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops the movement update.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Registers the movement update with the shared update module.</span> |

</details>

---
title: "GuidedMovement"
description: "Moves this object along an IPositionRotationPath on the same object from a progress value, applied in fixed update by default."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GuidedMovement

A **class** in `Root.Township`, the global namespace.

Moves this object along an `IPositionRotationPath` on the same object from a progress value, applied in fixed update by default.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GuidedMovement()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">This object's transform.</span> |
| <Link id="m-haschanged" /><code>{"private bool hasChanged"}</code> | <span className="api-desc">True when a new sample is waiting to be applied.</span> |
| <Link id="m-isfixedupdate" /><code>{"private bool isFixedUpdate"}</code> | <span className="api-desc">Apply positions in fixed update. Can only be set in edit mode.</span> |
| <Link id="m-isnormalized" /><code>{"private bool isNormalized"}</code> | <span className="api-desc">Passed to the path's `GetPosition`; true means the progress value is normalized (probably 0 to 1).</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-path" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ipositionrotationpath">{"IPositionRotationPath"}</Link>{" path"}</code> | <span className="api-desc">The path followed.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Last sampled position.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Last sampled rotation.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Registered fixed update method.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetposition" /><code>{"void ResetPosition(Transform transform)"}</code> | <span className="api-desc">Does nothing: it only reassigns its own parameter.</span> |
| <Link id="m-setprogress" /><code>{"void SetProgress(float value)"}</code> | <span className="api-desc">Samples the path at a progress value; applies it now, or on the next fixed update if `isFixedUpdate`.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the path, caches the transform and registers the fixed update when `isFixedUpdate`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Deregisters the update.</span> |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | <span className="api-desc">Fixed update: applies the last sampled position and rotation if it changed.</span> |

</details>

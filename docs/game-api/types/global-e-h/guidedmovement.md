---
title: "GuidedMovement"
description: "Moves this object along an IPositionRotationPath on the same object from a progress value, applied in fixed update by default."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GuidedMovement

A **class** in `Root.Township`, no namespace.

Moves this object along an `IPositionRotationPath` on the same object from a progress value, applied in fixed update by default.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GuidedMovement()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | This object's transform. |
| <Link id="m-haschanged" /><code>{"private bool hasChanged"}</code> | True when a new sample is waiting to be applied. |
| <Link id="m-isfixedupdate" /><code>{"private bool isFixedUpdate"}</code> | Apply positions in fixed update. Can only be set in edit mode. |
| <Link id="m-isnormalized" /><code>{"private bool isNormalized"}</code> | Passed to the path's `GetPosition`; true means the progress value is normalized (probably 0 to 1). |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-path" /><code>{"private "}<Link to="/game-api/types/global-i-l/ipositionrotationpath">{"IPositionRotationPath"}</Link>{" path"}</code> | The path followed. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Last sampled position. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Last sampled rotation. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Registered fixed update method. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetposition" /><code>{"void ResetPosition(Transform transform)"}</code> | Does nothing: it only reassigns its own parameter. |
| <Link id="m-setprogress" /><code>{"void SetProgress(float value)"}</code> | Samples the path at a progress value; applies it now, or on the next fixed update if `isFixedUpdate`. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the path, caches the transform and registers the fixed update when `isFixedUpdate`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Deregisters the update. |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | Fixed update: applies the last sampled position and rotation if it changed. |

</details>

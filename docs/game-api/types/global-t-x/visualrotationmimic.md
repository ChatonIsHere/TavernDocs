---
title: "VisualRotationMimic"
description: "Client: turns this transform to follow how a target transform turns, tracked through one axis and optionally scaled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisualRotationMimic

A **class** in `Root.Township`, no namespace.

Client: turns this transform to follow how a target transform turns, tracked through one axis and optionally scaled. Off on a headless server.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VisualRotationMimic()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | This object's transform. |
| <Link id="m-copyrotation" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" copyRotation"}</code> | Handle for the registered late-update method. |
| <Link id="m-lastvalue" /><code>{"private Vector3 lastValue"}</code> | The target's axis direction, in this transform's space, from the last update. |
| <Link id="m-nonrotationaxis" /><code>{"private Vector3 nonRotationAxis"}</code> | Axis on the target whose direction is tracked (default forward). |
| <Link id="m-rotationmultiplier" /><code>{"private float rotationMultiplier"}</code> | Scales the copied rotation angle. |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | Transform whose rotation is followed. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: stores the starting axis direction and registers `CopyRotation` in late update. |
| <Link id="m-copyrotation-2" /><code>{"private void CopyRotation()"}</code> | When the target has moved, applies the change in its `nonRotationAxis` direction (times `rotationMultiplier`) to this transform. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Deregisters `CopyRotation`. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the tracked axis on the target. |

</details>

---
title: "VisualRotationMimic"
description: "Client: turns this transform to follow how a target transform turns, tracked through one axis and optionally scaled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisualRotationMimic

A **class** in `Root.Township`, the global namespace.

Client: turns this transform to follow how a target transform turns, tracked through one axis and optionally scaled. Off on a headless server.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VisualRotationMimic()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">This object's transform.</span> |
| <Link id="m-copyrotation" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" copyRotation"}</code> | <span className="api-desc">Handle for the registered late-update method.</span> |
| <Link id="m-lastvalue" /><code>{"private Vector3 lastValue"}</code> | <span className="api-desc">The target's axis direction, in this transform's space, from the last update.</span> |
| <Link id="m-nonrotationaxis" /><code>{"private Vector3 nonRotationAxis"}</code> | <span className="api-desc">Axis on the target whose direction is tracked (default forward).</span> |
| <Link id="m-rotationmultiplier" /><code>{"private float rotationMultiplier"}</code> | <span className="api-desc">Scales the copied rotation angle.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">Transform whose rotation is followed.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: stores the starting axis direction and registers `CopyRotation` in late update.</span> |
| <Link id="m-copyrotation-2" /><code>{"private void CopyRotation()"}</code> | <span className="api-desc">When the target has moved, applies the change in its `nonRotationAxis` direction (times `rotationMultiplier`) to this transform.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Deregisters `CopyRotation`.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the tracked axis on the target.</span> |

</details>

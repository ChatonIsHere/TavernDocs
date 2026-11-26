---
title: "InGameSphereGizmo"
description: "Pooled sphere drawn in the game world, made by InGameGizmosSettings.DrawSphere."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameSphereGizmo

A **class** in `Root.Township`, no namespace.

Pooled sphere drawn in the game world, made by `InGameGizmosSettings.DrawSphere`. It can follow a transform.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InGameSphereGizmo()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lasttarget" /><code>{"private Vector3 lastTarget"}</code> | Last known target position. |
| <Link id="m-material" /><code>{"private Material material"}</code> | The sphere's own material copy. |
| <Link id="m-renderertransform" /><code>{"private Transform rendererTransform"}</code> | Transform of the sphere mesh, scaled and moved each frame. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Marker transform the sphere sits on. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setposition" /><code>{"void SetPosition(Vector3 target, float radius)"}</code> | Places the sphere at a world point, or parents its target to a transform with an offset, and sets the radius. |
| <Link id="m-setposition-2" /><code>{"void SetPosition(Transform target, float radius, Vector3 offset)"}</code> | Places the sphere at a world point, or parents its target to a transform with an offset, and sets the radius. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Gives the sphere its own material copy. |
| <Link id="m-requestedsetup" /><code>{"private void RequestedSetup("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Runs when taken from the pool. Tints the sphere with `InGameGizmosSettings.Color`. |
| <Link id="m-setradius" /><code>{"private void SetRadius(float radius)"}</code> | Scales the sphere mesh to the given radius. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Moves the mesh to the target. If a followed transform was destroyed, stays at its last spot. |

</details>

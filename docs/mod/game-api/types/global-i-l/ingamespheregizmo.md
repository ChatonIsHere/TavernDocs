---
title: "InGameSphereGizmo"
description: "Pooled sphere drawn in the game world, made by InGameGizmosSettings.DrawSphere."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameSphereGizmo

A **class** in `Root.Township`, the global namespace.

Pooled sphere drawn in the game world, made by `InGameGizmosSettings.DrawSphere`. It can follow a transform.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InGameSphereGizmo()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lasttarget" /><code>{"private Vector3 lastTarget"}</code> | <span className="api-desc">Last known target position.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The sphere's own material copy.</span> |
| <Link id="m-renderertransform" /><code>{"private Transform rendererTransform"}</code> | <span className="api-desc">Transform of the sphere mesh, scaled and moved each frame.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Marker transform the sphere sits on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setposition" /><code>{"void SetPosition(Vector3 target, float radius)"}</code> | <span className="api-desc">Places the sphere at a world point, or parents its target to a transform with an offset, and sets the radius.</span> |
| <Link id="m-setposition-2" /><code>{"void SetPosition(Transform target, float radius, Vector3 offset)"}</code> | <span className="api-desc">Places the sphere at a world point, or parents its target to a transform with an offset, and sets the radius.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gives the sphere its own material copy.</span> |
| <Link id="m-requestedsetup" /><code>{"private void RequestedSetup("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Runs when taken from the pool. Tints the sphere with `InGameGizmosSettings.Color`.</span> |
| <Link id="m-setradius" /><code>{"private void SetRadius(float radius)"}</code> | <span className="api-desc">Scales the sphere mesh to the given radius.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Moves the mesh to the target. If a followed transform was destroyed, stays at its last spot.</span> |

</details>

---
title: "ParticleMeshReplacePooledObject"
description: "A pooled mesh-replace effect that shows the mesh through particle system renderers and waits a while before going back to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleMeshReplacePooledObject

A **class** in `Root.Township`, the global namespace.

A pooled mesh-replace effect that shows the mesh through particle system renderers and waits a while before going back to the pool.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`MeshReplacePooledObject`](/mod/game-api/types/global-m-o/meshreplacepooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleMeshReplacePooledObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-releaseroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" releaseRoutine"}</code> | <span className="api-desc">The running release timer, if any.</span> |
| <Link id="m-releasetime" /><code>{"private float releaseTime"}</code> | <span className="api-desc">Seconds before the object returns to the pool (1 by default).</span> |
| <Link id="m-renderers" /><code>{"private ParticleSystemRenderer[] renderers"}</code> | <span className="api-desc">Particle renderers that show the mesh.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"override void Setup(Mesh mesh, Material material)"}</code> | <span className="api-desc">Sets the mesh and material on every particle renderer.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pool's `Requested` event to start the delayed release.</span> |
| <Link id="m-delayedrelease" /><code>{"private IEnumerator DelayedRelease(float releaseTime) (iterator)"}</code> | <span className="api-desc">Coroutine that waits `releaseTime` seconds and then releases the object to the pool.</span> |
| <Link id="m-delayrelease" /><code>{"private void DelayRelease("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Restarts the release timer whenever the object is taken from the pool.</span> |

</details>

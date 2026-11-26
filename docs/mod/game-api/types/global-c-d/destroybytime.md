---
title: "DestroyByTime"
description: "A pooled object that releases itself back to its pool a set time after it is requested."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyByTime

A **class** in `Root.Township`, the global namespace.

A pooled object that releases itself back to its pool a set time after it is requested. Used for short-lived effects.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Derived types** [`CastToSurfaceEffect`](/mod/game-api/types/global-c-d/casttosurfaceeffect), [`ConglomerateDestroyByTime`](/mod/game-api/types/global-c-d/conglomeratedestroybytime), [`DissolvingEffect`](/mod/game-api/types/global-c-d/dissolvingeffect), [`PooledParticleSystemMeshEmision`](/mod/game-api/types/global-p/pooledparticlesystemmeshemision), [`ProgressMaterialEffect`](/mod/game-api/types/global-p/progressmaterialeffect), [`WoodcutPooledObject`](/mod/game-api/types/global-t-x/woodcutpooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DestroyByTime()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroycoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" destroyCoroutine"}</code> | <span className="api-desc">The running countdown, restarted each time the object is taken from the pool.</span> |
| <Link id="m-time" /><code>{"private float time"}</code> | <span className="api-desc">Backing field for `Time`: seconds until release.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-time-2" /><code>{"float Time { get; set; }"}</code> | <span className="api-desc">Seconds before release. Setting it restarts the timer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Returns the object to the pool if not already released.</span> |
| <Link id="m-resetrun" /><code>{"override void ResetRun()"}</code> | <span className="api-desc">Resets the object and restarts the timer.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Starts the timer each time the object is taken from the pool.</span> |
| <Link id="m-destroy" /><code>{"protected virtual IEnumerator Destroy() (iterator)"}</code> | <span className="api-desc">Coroutine that waits `Time` seconds then releases the object.</span> |
| <Link id="m-startruning" /><code>{"protected void StartRuning("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Restarts the release timer.</span> |

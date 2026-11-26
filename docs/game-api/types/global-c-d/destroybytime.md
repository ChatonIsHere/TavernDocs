---
title: "DestroyByTime"
description: "A pooled object that releases itself back to its pool a set time after it is requested."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyByTime

A **class** in `Root.Township`, no namespace.

A pooled object that releases itself back to its pool a set time after it is requested. Used for short-lived effects.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Derived types** [`CastToSurfaceEffect`](/game-api/types/global-c-d/casttosurfaceeffect), [`ConglomerateDestroyByTime`](/game-api/types/global-c-d/conglomeratedestroybytime), [`DissolvingEffect`](/game-api/types/global-c-d/dissolvingeffect), [`PooledParticleSystemMeshEmision`](/game-api/types/global-p/pooledparticlesystemmeshemision), [`ProgressMaterialEffect`](/game-api/types/global-p/progressmaterialeffect), [`WoodcutPooledObject`](/game-api/types/global-t-x/woodcutpooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DestroyByTime()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroycoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" destroyCoroutine"}</code> | The running countdown, restarted each time the object is taken from the pool. |
| <Link id="m-time" /><code>{"private float time"}</code> | Backing field for `Time`: seconds until release. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-time-2" /><code>{"float Time { get; set; }"}</code> | Seconds before release. Setting it restarts the timer. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Returns the object to the pool if not already released. |
| <Link id="m-resetrun" /><code>{"override void ResetRun()"}</code> | Resets the object and restarts the timer. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Starts the timer each time the object is taken from the pool. |
| <Link id="m-destroy" /><code>{"protected virtual IEnumerator Destroy() (iterator)"}</code> | Coroutine that waits `Time` seconds then releases the object. |
| <Link id="m-startruning" /><code>{"protected void StartRuning("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Restarts the release timer. |

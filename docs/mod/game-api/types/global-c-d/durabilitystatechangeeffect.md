---
title: "DurabilityStateChangeEffect"
description: "Pooled client effect that copies an item's mesh and plays a shader cut animation on it, with optional particles, when durability state changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityStateChangeEffect

A **class** in `Root.Township`, the global namespace.

Pooled client effect that copies an item's mesh and plays a shader cut animation on it, with optional particles, when durability state changes. Spawned by `DurabilityGlobalSettings.GetEffect`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilityStateChangeEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for `_Progress`.</span> |
| <Link id="m-tricut" /><code>{"private static readonly int _TriCut"}</code> | <span className="api-desc">Shader property ID for `_TriCut`.</span> |
| <Link id="m-androidparticledefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidParticleDefinition"}</code> | <span className="api-desc">Particle definition meant for Android; it took over the old serialized `particleDefinition` data but is not read by this code.</span> |
| <Link id="m-animationprogress" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" animationProgress"}</code> | <span className="api-desc">Duration (and curve) of the animation.</span> |
| <Link id="m-animationroutine" /><code>{"private Coroutine animationRoutine"}</code> | <span className="api-desc">The running animation coroutine.</span> |
| <Link id="m-currentmaterial" /><code>{"private Material currentMaterial"}</code> | <span className="api-desc">This effect's own material copy.</span> |
| <Link id="m-filtertoset" /><code>{"private MeshFilter filterToSet"}</code> | <span className="api-desc">Mesh filter that receives the copied mesh.</span> |
| <Link id="m-particledefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particleDefinition"}</code> | <span className="api-desc">Pooled particles spawned during the animation.</span> |
| <Link id="m-particleeffectdelay" /><code>{"private float particleEffectDelay"}</code> | <span className="api-desc">Progress (0 to 1) at which the particles spawn.</span> |
| <Link id="m-particlesystem" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledparticlesystemmeshemision">{"PooledParticleSystemMeshEmision"}</Link>{" particleSystem"}</code> | <span className="api-desc">The particles spawned for this play.</span> |
| <Link id="m-progresstofullness" /><code>{"private AnimationCurve progressToFullness"}</code> | <span className="api-desc">Curve from progress to the `_TriCut` value.</span> |
| <Link id="m-renderertoanimate" /><code>{"private MeshRenderer rendererToAnimate"}</code> | <span className="api-desc">Renderer whose material is animated.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particledefinition-2" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ParticleDefinition { get; }"}</code> | <span className="api-desc">The particle definition in use; always `particleDefinition`, never the Android one.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Stops the animation early and returns the effect to the pool.</span> |
| <Link id="m-setmesh" /><code>{"void SetMesh(Renderer renderer)"}</code> | <span className="api-desc">Copies the mesh from the given renderer's mesh filter.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> | <span className="api-desc">Coroutine that drives the shader progress over the curve's duration, spawns particles part way, then releases itself.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes a tracked copy of the material and hooks the pool's requested and released events.</span> |
| <Link id="m-cleanup" /><code>{"private void CleanUp("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">On release, releases the spawned particle system.</span> |
| <Link id="m-getparticles" /><code>{"private void GetParticles()"}</code> | <span className="api-desc">Spawns the pooled mesh particle system here and gives it the animated mesh.</span> |
| <Link id="m-onrequested" /><code>{"private void OnRequested("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Starts the animation when the object is taken from the pool.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-setmaterial" /><code>{"private void SetMaterial(float progress)"}</code> | <span className="api-desc">Sets the shader's `_Progress` and `_TriCut` values for a progress.</span> |

</details>

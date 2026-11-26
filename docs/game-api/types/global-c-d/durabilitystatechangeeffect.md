---
title: "DurabilityStateChangeEffect"
description: "Pooled client effect that copies an item's mesh and plays a shader cut animation on it, with optional particles, when durability state changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityStateChangeEffect

A **class** in `Root.Township`, no namespace.

Pooled client effect that copies an item's mesh and plays a shader cut animation on it, with optional particles, when durability state changes. Spawned by `DurabilityGlobalSettings.GetEffect`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilityStateChangeEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | Shader property ID for `_Progress`. |
| <Link id="m-tricut" /><code>{"private static readonly int _TriCut"}</code> | Shader property ID for `_TriCut`. |
| <Link id="m-androidparticledefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidParticleDefinition"}</code> | Particle definition meant for Android; it took over the old serialized `particleDefinition` data but is not read by this code. |
| <Link id="m-animationprogress" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" animationProgress"}</code> | Duration (and curve) of the animation. |
| <Link id="m-animationroutine" /><code>{"private Coroutine animationRoutine"}</code> | The running animation coroutine. |
| <Link id="m-currentmaterial" /><code>{"private Material currentMaterial"}</code> | This effect's own material copy. |
| <Link id="m-filtertoset" /><code>{"private MeshFilter filterToSet"}</code> | Mesh filter that receives the copied mesh. |
| <Link id="m-particledefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particleDefinition"}</code> | Pooled particles spawned during the animation. |
| <Link id="m-particleeffectdelay" /><code>{"private float particleEffectDelay"}</code> | Progress (0 to 1) at which the particles spawn. |
| <Link id="m-particlesystem" /><code>{"private "}<Link to="/game-api/types/global-p/pooledparticlesystemmeshemision">{"PooledParticleSystemMeshEmision"}</Link>{" particleSystem"}</code> | The particles spawned for this play. |
| <Link id="m-progresstofullness" /><code>{"private AnimationCurve progressToFullness"}</code> | Curve from progress to the `_TriCut` value. |
| <Link id="m-renderertoanimate" /><code>{"private MeshRenderer rendererToAnimate"}</code> | Renderer whose material is animated. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particledefinition-2" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ParticleDefinition { get; }"}</code> | The particle definition in use; always `particleDefinition`, never the Android one. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Stops the animation early and returns the effect to the pool. |
| <Link id="m-setmesh" /><code>{"void SetMesh(Renderer renderer)"}</code> | Copies the mesh from the given renderer's mesh filter. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> | Coroutine that drives the shader progress over the curve's duration, spawns particles part way, then releases itself. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes a tracked copy of the material and hooks the pool's requested and released events. |
| <Link id="m-cleanup" /><code>{"private void CleanUp("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | On release, releases the spawned particle system. |
| <Link id="m-getparticles" /><code>{"private void GetParticles()"}</code> | Spawns the pooled mesh particle system here and gives it the animated mesh. |
| <Link id="m-onrequested" /><code>{"private void OnRequested("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Starts the animation when the object is taken from the pool. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Empty. |
| <Link id="m-setmaterial" /><code>{"private void SetMaterial(float progress)"}</code> | Sets the shader's `_Progress` and `_TriCut` values for a progress. |

</details>

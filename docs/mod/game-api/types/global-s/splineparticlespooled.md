---
title: "SplineParticlesPooled"
description: "Client: a pooled curved line with particles running along it between two transforms, such as the crafting line between parts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineParticlesPooled

A **class** in `Root.Township`, the global namespace.

Client: a pooled curved line with particles running along it between two transforms, such as the crafting line between parts.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Derived types** [`ChiselSplineParticlesPooled`](/mod/game-api/types/global-c-d/chiselsplineparticlespooled)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplineParticlesPooled()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-origin" /><code>{"protected Transform origin"}</code> | <span className="api-desc">The start transform.</span> |
| <Link id="m-target" /><code>{"protected Transform target"}</code> | <span className="api-desc">The end transform.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> | <span className="api-desc">Player character whose IK pre-render callback drives updates, if `Set` got one.</span> |
| <Link id="m-color" /><code>{"private Color color"}</code> | <span className="api-desc">Backing field for `Color`.</span> |
| <Link id="m-hasparticlesonandroid" /><code>{"private bool hasParticlesOnAndroid"}</code> | <span className="api-desc">Inspector flag. Not read anywhere in this class.</span> |
| <Link id="m-intervals" /><code>{"private int intervals"}</code> | <span className="api-desc">Number of line points along the spline, from `CraftingLineIterations` (at least 2).</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> | <span className="api-desc">Colour of the line and its particles.</span> |
| <Link id="m-alignmentmultiplier" /><code>{"protected virtual float AlignmentMultiplier { get; }"}</code> | <span className="api-desc">How closely the two ends face the same way, 0 to 1. Bends the curve more when aligned.</span> |
| <Link id="m-distancemultiplier" /><code>{"protected virtual float DistanceMultiplier { get; }"}</code> | <span className="api-desc">How far apart the ends are, as 0 to 1 over the first half metre.</span> |
| <Link id="m-linerenderer" /><code>{"protected LineRenderer LineRenderer { get; private set; }"}</code> | <span className="api-desc">The line renderer that draws the curve.</span> |
| <Link id="m-originforward" /><code>{"protected virtual Vector3 OriginForward { get; }"}</code> | <span className="api-desc">Direction the curve leaves the origin.</span> |
| <Link id="m-originposition" /><code>{"protected virtual Vector3 OriginPosition { get; }"}</code> | <span className="api-desc">Where the curve starts.</span> |
| <Link id="m-targetforward" /><code>{"protected virtual Vector3 TargetForward { get; }"}</code> | <span className="api-desc">Direction the curve arrives at the target.</span> |
| <Link id="m-targetposition" /><code>{"protected virtual Vector3 TargetPosition { get; }"}</code> | <span className="api-desc">Where the curve ends.</span> |

<details className="api-private">
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particles" /><code>{"private ParticleSystem.Particle[] Particles { get; set; }"}</code> | <span className="api-desc">Buffer for reading and rewriting the particle system's particles, regrown if `maxParticles` increases.</span> |
| <Link id="m-speed" /><code>{"private float Speed { get; set; }"}</code> | <span className="api-desc">Control point length for the spline ends, from `PickupTypeSettings.CraftingLineVelocity`.</span> |
| <Link id="m-spline" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" Spline { get; set; }"}</code> | <span className="api-desc">The child Bezier spline that the line and particles follow.</span> |
| <Link id="m-system" /><code>{"private ParticleSystem System { get; set; }"}</code> | <span className="api-desc">The child particle system whose particles are placed along the spline.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-renderupdate" /><code>{"void RenderUpdate()"}</code> | <span className="api-desc">Rebuilds the curve, line points and particle positions.</span> |
| <Link id="m-set" /><code>{"void Set(Transform origin, Transform target, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Color color)"}</code> | <span className="api-desc">Connects the line between two transforms with a colour. For player characters it updates before IK rendering, otherwise every frame.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Finds the spline, particle system and line renderer, and reads line speed and segment count from pickup type settings.</span> |
| <Link id="m-multiplier" /><code>{"protected virtual float Multiplier()"}</code> | <span className="api-desc">How far the curve's control points stick out: 30% alignment, 70% distance.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-resetunpooled" /><code>{"private void ResetUnpooled("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Runs on release: unhooks `RenderUpdate` from the character's IK pre-render callback.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Calls `RenderUpdate` each frame when there is no player character to hook into.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SplineParticlesPooled`:

<div className="api-used-in">

[`JointInsert.particlesPool`](/mod/game-api/types/alta-crafting/jointinsert#m-particlespool).

</div>

---
title: "SplineParticlesPooled"
description: "Client: a pooled curved line with particles running along it between two transforms, such as the crafting line between parts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineParticlesPooled

A **class** in `Root.Township`, no namespace.

Client: a pooled curved line with particles running along it between two transforms, such as the crafting line between parts.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Derived types** [`ChiselSplineParticlesPooled`](/game-api/types/global-c-d/chiselsplineparticlespooled)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplineParticlesPooled()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> |  |
| <Link id="m-color" /><code>{"private Color color"}</code> |  |
| <Link id="m-hasparticlesonandroid" /><code>{"private bool hasParticlesOnAndroid"}</code> |  |
| <Link id="m-intervals" /><code>{"private int intervals"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-origin" /><code>{"protected Transform origin"}</code> | The start transform. |
| <Link id="m-target" /><code>{"protected Transform target"}</code> | The end transform. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> | Colour of the line and its particles. |
| <Link id="m-alignmentmultiplier" /><code>{"protected virtual float AlignmentMultiplier { get; }"}</code> | How closely the two ends face the same way, 0 to 1. Bends the curve more when aligned. |
| <Link id="m-distancemultiplier" /><code>{"protected virtual float DistanceMultiplier { get; }"}</code> | How far apart the ends are, as 0 to 1 over the first half metre. |
| <Link id="m-linerenderer" /><code>{"protected LineRenderer LineRenderer { get; private set; }"}</code> | The line renderer that draws the curve. |
| <Link id="m-originforward" /><code>{"protected virtual Vector3 OriginForward { get; }"}</code> | Direction the curve leaves the origin. |
| <Link id="m-originposition" /><code>{"protected virtual Vector3 OriginPosition { get; }"}</code> | Where the curve starts. |
| <Link id="m-particles" /><code>{"private ParticleSystem.Particle[] Particles { get; set; }"}</code> |  |
| <Link id="m-speed" /><code>{"private float Speed { get; set; }"}</code> |  |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" Spline { get; set; }"}</code> |  |
| <Link id="m-system" /><code>{"private ParticleSystem System { get; set; }"}</code> |  |
| <Link id="m-targetforward" /><code>{"protected virtual Vector3 TargetForward { get; }"}</code> | Direction the curve arrives at the target. |
| <Link id="m-targetposition" /><code>{"protected virtual Vector3 TargetPosition { get; }"}</code> | Where the curve ends. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-renderupdate" /><code>{"void RenderUpdate()"}</code> | Rebuilds the curve, line points and particle positions. |
| <Link id="m-set" /><code>{"void Set(Transform origin, Transform target, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Color color)"}</code> | Connects the line between two transforms with a colour. For player characters it updates before IK rendering, otherwise every frame. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Finds the spline, particle system and line renderer, and reads line speed and segment count from pickup type settings. |
| <Link id="m-multiplier" /><code>{"protected virtual float Multiplier()"}</code> | How far the curve's control points stick out: 30% alignment, 70% distance. |
| <Link id="m-resetunpooled" /><code>{"private void ResetUnpooled("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `SplineParticlesPooled`:

[`JointInsert.particlesPool`](/game-api/types/alta-crafting/jointinsert#m-particlespool).

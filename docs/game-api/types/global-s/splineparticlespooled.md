---
title: "SplineParticlesPooled"
description: "class SplineParticlesPooled in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineParticlesPooled

A **class** in `Root.Township`, no namespace.

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
| <Link id="m-origin" /><code>{"protected Transform origin"}</code> |  |
| <Link id="m-target" /><code>{"protected Transform target"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> |  |
| <Link id="m-alignmentmultiplier" /><code>{"protected virtual float AlignmentMultiplier { get; }"}</code> |  |
| <Link id="m-distancemultiplier" /><code>{"protected virtual float DistanceMultiplier { get; }"}</code> |  |
| <Link id="m-linerenderer" /><code>{"protected LineRenderer LineRenderer { get; private set; }"}</code> |  |
| <Link id="m-originforward" /><code>{"protected virtual Vector3 OriginForward { get; }"}</code> |  |
| <Link id="m-originposition" /><code>{"protected virtual Vector3 OriginPosition { get; }"}</code> |  |
| <Link id="m-particles" /><code>{"private ParticleSystem.Particle[] Particles { get; set; }"}</code> |  |
| <Link id="m-speed" /><code>{"private float Speed { get; set; }"}</code> |  |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" Spline { get; set; }"}</code> |  |
| <Link id="m-system" /><code>{"private ParticleSystem System { get; set; }"}</code> |  |
| <Link id="m-targetforward" /><code>{"protected virtual Vector3 TargetForward { get; }"}</code> |  |
| <Link id="m-targetposition" /><code>{"protected virtual Vector3 TargetPosition { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-renderupdate" /><code>{"void RenderUpdate()"}</code> |  |
| <Link id="m-set" /><code>{"void Set(Transform origin, Transform target, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Color color)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-multiplier" /><code>{"protected virtual float Multiplier()"}</code> |  |
| <Link id="m-resetunpooled" /><code>{"private void ResetUnpooled("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `SplineParticlesPooled`:

[`JointInsert.particlesPool`](/game-api/types/alta-crafting/jointinsert#m-particlespool).

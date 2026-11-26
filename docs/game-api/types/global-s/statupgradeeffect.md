---
title: "StatUpgradeEffect"
description: "Pooled particle effect for a stat upgrade: particles burst out from a point, then stream along a spline into a target transform, raising an event as each..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatUpgradeEffect

A **class** in `Root.Township`, no namespace.

Pooled particle effect for a stat upgrade: particles burst out from a point, then stream along a spline into a target transform, raising an event as each arrives. Client visuals.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatUpgradeEffect()"}</code> |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Color color"}</code> | Backing field for `Color`. |
| <Link id="m-expansioncurve" /><code>{"private AnimationCurve expansionCurve"}</code> | Curve of burst spread over the expansion time. |
| <Link id="m-expansionradius" /><code>{"private float expansionRadius"}</code> | How far particles spread in the burst. |
| <Link id="m-offsetcurve" /><code>{"private AnimationCurve offsetCurve"}</code> | How much of each particle's burst offset remains along the spline. |
| <Link id="m-onorbfinished" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onOrbFinished"}</code> | Inspector event raised with the target position each time a particle arrives. |
| <Link id="m-originspeed" /><code>{"private float originSpeed"}</code> | Tangent length at the target end of the spline. |
| <Link id="m-particlegap" /><code>{"private float particleGap"}</code> | Seconds between releasing each group of particles. |
| <Link id="m-renderupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" renderUpdate"}</code> | Update handle. Not used in this code. |
| <Link id="m-speedprogress" /><code>{"private float speedProgress"}</code> | Spline progress per second for each particle. |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> | Bezier spline from the start point to the target. |
| <Link id="m-stepincrease" /><code>{"private int stepIncrease"}</code> | How many particles are released per group. |
| <Link id="m-system" /><code>{"private ParticleSystem system"}</code> | The particle system. |
| <Link id="m-systemrenderer" /><code>{"private ParticleSystemRenderer systemRenderer"}</code> | The particle renderer, given the trail material once particles start moving. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Transform the particles fly to. The effect stops if it is destroyed. |
| <Link id="m-targetspeed" /><code>{"private float targetSpeed"}</code> | Upward tangent length at the start of the spline. |
| <Link id="m-trailmaterial" /><code>{"private Material trailMaterial"}</code> | Trail material used while particles travel. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> | Particle start colour. Setting it updates the particle system. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(Transform target, Vector3 originPosition, float duration, Color color)"}</code> | Sets the colour, target and start point and starts the animation with the given expansion time. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animation" /><code>{"private IEnumerator Animation(float expansionDuration, Vector3 originPosition) (iterator)"}</code> | Coroutine that expands the burst, then sends particles in groups along the spline to the target and releases the effect. |
| <Link id="m-updatecolor" /><code>{"private void UpdateColor()"}</code> | Applies `Color` as the particle system's start colour. |

</details>

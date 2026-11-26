---
title: "StatUpgradeEffect"
description: "Pooled particle effect for a stat upgrade: particles burst out from a point, then stream along a spline into a target transform, raising an event as each..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatUpgradeEffect

A **class** in `Root.Township`, the global namespace.

Pooled particle effect for a stat upgrade: particles burst out from a point, then stream along a spline into a target transform, raising an event as each arrives. Client visuals.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatUpgradeEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Color color"}</code> | <span className="api-desc">Backing field for `Color`.</span> |
| <Link id="m-expansioncurve" /><code>{"private AnimationCurve expansionCurve"}</code> | <span className="api-desc">Curve of burst spread over the expansion time.</span> |
| <Link id="m-expansionradius" /><code>{"private float expansionRadius"}</code> | <span className="api-desc">How far particles spread in the burst.</span> |
| <Link id="m-offsetcurve" /><code>{"private AnimationCurve offsetCurve"}</code> | <span className="api-desc">How much of each particle's burst offset remains along the spline.</span> |
| <Link id="m-onorbfinished" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onOrbFinished"}</code> | <span className="api-desc">Inspector event raised with the target position each time a particle arrives.</span> |
| <Link id="m-originspeed" /><code>{"private float originSpeed"}</code> | <span className="api-desc">Tangent length at the target end of the spline.</span> |
| <Link id="m-particlegap" /><code>{"private float particleGap"}</code> | <span className="api-desc">Seconds between releasing each group of particles.</span> |
| <Link id="m-renderupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" renderUpdate"}</code> | <span className="api-desc">Update handle. Not used in this code.</span> |
| <Link id="m-speedprogress" /><code>{"private float speedProgress"}</code> | <span className="api-desc">Spline progress per second for each particle.</span> |
| <Link id="m-spline" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> | <span className="api-desc">Bezier spline from the start point to the target.</span> |
| <Link id="m-stepincrease" /><code>{"private int stepIncrease"}</code> | <span className="api-desc">How many particles are released per group.</span> |
| <Link id="m-system" /><code>{"private ParticleSystem system"}</code> | <span className="api-desc">The particle system.</span> |
| <Link id="m-systemrenderer" /><code>{"private ParticleSystemRenderer systemRenderer"}</code> | <span className="api-desc">The particle renderer, given the trail material once particles start moving.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Transform the particles fly to. The effect stops if it is destroyed.</span> |
| <Link id="m-targetspeed" /><code>{"private float targetSpeed"}</code> | <span className="api-desc">Upward tangent length at the start of the spline.</span> |
| <Link id="m-trailmaterial" /><code>{"private Material trailMaterial"}</code> | <span className="api-desc">Trail material used while particles travel.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> | <span className="api-desc">Particle start colour. Setting it updates the particle system.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(Transform target, Vector3 originPosition, float duration, Color color)"}</code> | <span className="api-desc">Sets the colour, target and start point and starts the animation with the given expansion time.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animation" /><code>{"private IEnumerator Animation(float expansionDuration, Vector3 originPosition) (iterator)"}</code> | <span className="api-desc">Coroutine that expands the burst, then sends particles in groups along the spline to the target and releases the effect.</span> |
| <Link id="m-updatecolor" /><code>{"private void UpdateColor()"}</code> | <span className="api-desc">Applies `Color` as the particle system's start colour.</span> |

</details>

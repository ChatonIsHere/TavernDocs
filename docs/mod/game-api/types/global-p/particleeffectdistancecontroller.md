---
title: "ParticleEffectDistanceController"
description: "Shortens the life of world-space particles that drift too far from this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleEffectDistanceController

A **class** in `Root.Township`, the global namespace.

Shortens the life of world-space particles that drift too far from this object. Checks every few frames; removed on headless servers.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ParticleSystemEvaluator`](/mod/game-api/types/global-p/particleeffectdistancecontroller-particlesystemevaluator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleEffectDistanceController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatorcount" /><code>{"private int evaluatorCount"}</code> | <span className="api-desc">Number of evaluators.</span> |
| <Link id="m-evaluators" /><code>{"private "}<Link to="/mod/game-api/types/global-p/particleeffectdistancecontroller-particlesystemevaluator">{"ParticleEffectDistanceController.ParticleSystemEvaluator"}</Link>{"[] evaluators"}</code> | <span className="api-desc">One per world-space child particle system.</span> |
| <Link id="m-framecount" /><code>{"private int frameCount"}</code> | <span className="api-desc">Frame counter for the update interval.</span> |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> | <span className="api-desc">Squared distance past which particles are cut short.</span> |
| <Link id="m-remaininglifetimewhenfar" /><code>{"private float remainingLifetimeWhenFar"}</code> | <span className="api-desc">Backing field for `RemainingLifetimeWhenFar`.</span> |
| <Link id="m-updateframecount" /><code>{"private int updateFrameCount"}</code> | <span className="api-desc">Frames between checks (default 15).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-remaininglifetimewhenfar-2" /><code>{"float RemainingLifetimeWhenFar { get; }"}</code> | <span className="api-desc">Remaining lifetime given to particles beyond the max distance.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Removes itself on headless builds, otherwise sets up an evaluator for each world-space child particle system.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Every `updateFrameCount` frames, cuts the remaining life of far particles.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the max distance as a sphere.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ParticleEffectDistanceController`:

<div className="api-used-in">

[`ParticleEffectDistanceController.ParticleSystemEvaluator.controller`](/mod/game-api/types/global-p/particleeffectdistancecontroller-particlesystemevaluator#m-controller), [`ParticleEffectDistanceController.ParticleSystemEvaluator.ParticleSystemEvaluator`](/mod/game-api/types/global-p/particleeffectdistancecontroller-particlesystemevaluator#m-ctor).

</div>

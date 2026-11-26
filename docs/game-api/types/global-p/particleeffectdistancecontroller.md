---
title: "ParticleEffectDistanceController"
description: "Shortens the life of world-space particles that drift too far from this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleEffectDistanceController

A **class** in `Root.Township`, no namespace.

Shortens the life of world-space particles that drift too far from this object. Checks every few frames; removed on headless servers.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ParticleSystemEvaluator`](/game-api/types/global-p/particleeffectdistancecontroller-particlesystemevaluator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ParticleEffectDistanceController()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatorcount" /><code>{"private int evaluatorCount"}</code> | Number of evaluators. |
| <Link id="m-evaluators" /><code>{"private "}<Link to="/game-api/types/global-p/particleeffectdistancecontroller-particlesystemevaluator">{"ParticleEffectDistanceController.ParticleSystemEvaluator"}</Link>{"[] evaluators"}</code> | One per world-space child particle system. |
| <Link id="m-framecount" /><code>{"private int frameCount"}</code> | Frame counter for the update interval. |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> | Squared distance past which particles are cut short. |
| <Link id="m-remaininglifetimewhenfar" /><code>{"private float remainingLifetimeWhenFar"}</code> | Backing field for `RemainingLifetimeWhenFar`. |
| <Link id="m-updateframecount" /><code>{"private int updateFrameCount"}</code> | Frames between checks (default 15). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-remaininglifetimewhenfar-2" /><code>{"float RemainingLifetimeWhenFar { get; }"}</code> | Remaining lifetime given to particles beyond the max distance. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Removes itself on headless builds, otherwise sets up an evaluator for each world-space child particle system. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Every `updateFrameCount` frames, cuts the remaining life of far particles. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the max distance as a sphere. |

</details>

## Used in

Members of other types that take, return or hold a `ParticleEffectDistanceController`:

[`ParticleEffectDistanceController.ParticleSystemEvaluator.controller`](/game-api/types/global-p/particleeffectdistancecontroller-particlesystemevaluator#m-controller), [`ParticleEffectDistanceController.ParticleSystemEvaluator.ParticleSystemEvaluator`](/game-api/types/global-p/particleeffectdistancecontroller-particlesystemevaluator#m-ctor).

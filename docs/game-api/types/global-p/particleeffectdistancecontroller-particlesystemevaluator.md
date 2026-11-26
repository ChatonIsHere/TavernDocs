---
title: "ParticleEffectDistanceController.ParticleSystemEvaluator"
description: "Checks one world-space particle system for ParticleEffectDistanceController and cuts short particles that drift too far away."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleEffectDistanceController.ParticleSystemEvaluator

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Checks one world-space particle system for `ParticleEffectDistanceController` and cuts short particles that drift too far away.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`ParticleEffectDistanceController`](/game-api/types/global-p/particleeffectdistancecontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ParticleSystemEvaluator(ParticleSystem system, "}<Link to="/game-api/types/global-p/particleeffectdistancecontroller">{"ParticleEffectDistanceController"}</Link>{" controller)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-p/particleeffectdistancecontroller">{"ParticleEffectDistanceController"}</Link>{" controller"}</code> | The controller that holds the distance and lifetime settings. |
| <Link id="m-particles" /><code>{"private ParticleSystem.Particle[] particles"}</code> | Reused buffer sized to the system's max particles. |
| <Link id="m-system" /><code>{"private ParticleSystem system"}</code> | The particle system being checked. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"void Evaluate(Vector3 position)"}</code> | Sets the remaining lifetime of every particle further than the controller's max distance from a position to the controller's short value. |

## Used in

Members of other types that take, return or hold a `ParticleSystemEvaluator`:

[`ParticleEffectDistanceController.evaluators`](/game-api/types/global-p/particleeffectdistancecontroller#m-evaluators).

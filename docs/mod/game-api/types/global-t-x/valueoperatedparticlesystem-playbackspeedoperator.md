---
title: "ValueOperatedParticleSystem.PlaybackSpeedOperator"
description: "Operator that drives a particle system's simulation speed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValueOperatedParticleSystem.PlaybackSpeedOperator

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Operator that drives a particle system's simulation speed.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`ValueOperatedParticleSystem`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem)
- **Inherits or implements** [`ValueOperatedParticleSystem.ParticleSystemValueOperator`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalueoperator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaybackSpeedOperator()"}</code> | <span className="api-desc">Creates a `ValueOperatedParticleSystem.PlaybackSpeedOperator` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-module" /><code>{"private ParticleSystem.MainModule module"}</code> | <span className="api-desc">The main module being changed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize(ParticleSystem targetSystem)"}</code> | <span className="api-desc">Grabs the target system's main module.</span> |
| <Link id="m-set" /><code>{"override void Set(float value)"}</code> | <span className="api-desc">Sets the simulation speed.</span> |

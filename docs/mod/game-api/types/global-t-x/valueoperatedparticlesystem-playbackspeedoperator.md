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
| <Link id="m-ctor" /><code>{"PlaybackSpeedOperator()"}</code> | Creates a `ValueOperatedParticleSystem.PlaybackSpeedOperator` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-module" /><code>{"private ParticleSystem.MainModule module"}</code> | The main module being changed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize(ParticleSystem targetSystem)"}</code> | Grabs the target system's main module. |
| <Link id="m-set" /><code>{"override void Set(float value)"}</code> | Sets the simulation speed. |

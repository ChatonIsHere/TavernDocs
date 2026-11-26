---
title: "ValueOperatedParticleSystem.PlaybackSpeedOperator"
description: "Operator that drives a particle system's simulation speed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValueOperatedParticleSystem.PlaybackSpeedOperator

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Operator that drives a particle system's simulation speed.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`ValueOperatedParticleSystem`](/game-api/types/global-t-x/valueoperatedparticlesystem)
- **Inherits or implements** [`ValueOperatedParticleSystem.ParticleSystemValueOperator`](/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalueoperator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlaybackSpeedOperator()"}</code> |

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

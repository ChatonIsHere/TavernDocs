---
title: "ValueOperatedParticleSystem.EmissionOperator"
description: "Base for operators that change a particle system's emission module."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValueOperatedParticleSystem.EmissionOperator

An **private abstract class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Base for operators that change a particle system's emission module.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`ValueOperatedParticleSystem`](/game-api/types/global-t-x/valueoperatedparticlesystem)
- **Inherits or implements** [`ValueOperatedParticleSystem.ParticleSystemValueOperator`](/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalueoperator)
- **Derived types** [`ValueOperatedParticleSystem.EmissionRateOverDistanceOperator`](/game-api/types/global-t-x/valueoperatedparticlesystem-emissionrateoverdistanceoperator), [`ValueOperatedParticleSystem.EmissionRateOverTimeOperator`](/game-api/types/global-t-x/valueoperatedparticlesystem-emissionrateovertimeoperator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected EmissionOperator()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-module" /><code>{"protected ParticleSystem.EmissionModule module"}</code> | The emission module being changed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize(ParticleSystem targetSystem)"}</code> | Grabs the target system's emission module. |

---
title: "ValueOperatedParticleSystem.EmissionOperator"
description: "Base for operators that change a particle system's emission module."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValueOperatedParticleSystem.EmissionOperator

An **private abstract class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Base for operators that change a particle system's emission module.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`ValueOperatedParticleSystem`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem)
- **Inherits or implements** [`ValueOperatedParticleSystem.ParticleSystemValueOperator`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalueoperator)
- **Derived types** [`ValueOperatedParticleSystem.EmissionRateOverDistanceOperator`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-emissionrateoverdistanceoperator), [`ValueOperatedParticleSystem.EmissionRateOverTimeOperator`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-emissionrateovertimeoperator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected EmissionOperator()"}</code> | <span className="api-desc">Creates a `ValueOperatedParticleSystem.EmissionOperator` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-module" /><code>{"protected ParticleSystem.EmissionModule module"}</code> | <span className="api-desc">The emission module being changed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize(ParticleSystem targetSystem)"}</code> | <span className="api-desc">Grabs the target system's emission module.</span> |

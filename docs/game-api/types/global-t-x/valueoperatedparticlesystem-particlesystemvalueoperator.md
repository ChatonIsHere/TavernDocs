---
title: "ValueOperatedParticleSystem.ParticleSystemValueOperator"
description: "Base for the small classes that write one value into a particle system module."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValueOperatedParticleSystem.ParticleSystemValueOperator

An **private abstract class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Base for the small classes that write one value into a particle system module.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`ValueOperatedParticleSystem`](/game-api/types/global-t-x/valueoperatedparticlesystem)
- **Derived types** [`ValueOperatedParticleSystem.EmissionOperator`](/game-api/types/global-t-x/valueoperatedparticlesystem-emissionoperator), [`ValueOperatedParticleSystem.PlaybackSpeedOperator`](/game-api/types/global-t-x/valueoperatedparticlesystem-playbackspeedoperator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ParticleSystemValueOperator()"}</code> | Creates a `ValueOperatedParticleSystem.ParticleSystemValueOperator` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"abstract void Initialize(ParticleSystem targetSystem)"}</code> | Grabs the particle system module this operator writes to. |
| <Link id="m-set" /><code>{"abstract void Set(float value)"}</code> | Writes the value into the module. |

## Used in

Members of other types that take, return or hold a `ParticleSystemValueOperator`:

[`ValueOperatedParticleSystem.ParticleSystemValueOperatorDefinition.valueOperator`](/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalueoperatordefinition#m-valueoperator).

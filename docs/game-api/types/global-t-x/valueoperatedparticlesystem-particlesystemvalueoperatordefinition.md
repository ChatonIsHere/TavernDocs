---
title: "ValueOperatedParticleSystem.ParticleSystemValueOperatorDefinition"
description: "Inspector entry pairing a particle system value with a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValueOperatedParticleSystem.ParticleSystemValueOperatorDefinition

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Inspector entry pairing a particle system value with a curve. Builds the matching operator at startup.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`ValueOperatedParticleSystem`](/game-api/types/global-t-x/valueoperatedparticlesystem)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ParticleSystemValueOperatorDefinition()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | Curve from the 0 to 1 input to the value written. |
| <Link id="m-value" /><code>{"private "}<Link to="/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalue">{"ValueOperatedParticleSystem.ParticleSystemValue"}</Link>{" value"}</code> | Which particle system value to drive. |
| <Link id="m-valueoperator" /><code>{"private "}<Link to="/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalueoperator">{"ValueOperatedParticleSystem.ParticleSystemValueOperator"}</Link>{" valueOperator"}</code> | The operator created in `Initialize`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(ParticleSystem targetsystem)"}</code> | Creates the operator for the chosen value and points it at the particle system. |
| <Link id="m-set" /><code>{"void Set(float value)"}</code> | Maps the input through the curve and applies it. |

## Used in

Members of other types that take, return or hold a `ParticleSystemValueOperatorDefinition`:

[`ValueOperatedParticleSystem.operators`](/game-api/types/global-t-x/valueoperatedparticlesystem#m-operators).

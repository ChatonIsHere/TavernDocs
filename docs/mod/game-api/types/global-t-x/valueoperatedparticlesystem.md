---
title: "ValueOperatedParticleSystem"
description: "Drives a particle system's playback speed or emission rates from one 0 to 1 value through curves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValueOperatedParticleSystem

A **class** in `Root.Township`, the global namespace.

Drives a particle system's playback speed or emission rates from one 0 to 1 value through curves. Client only; does nothing on a headless server.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EmissionOperator`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-emissionoperator), [`EmissionRateOverDistanceOperator`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-emissionrateoverdistanceoperator), [`EmissionRateOverTimeOperator`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-emissionrateovertimeoperator), [`ParticleSystemValue`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalue), [`ParticleSystemValueOperator`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalueoperator), [`ParticleSystemValueOperatorDefinition`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalueoperatordefinition), [`PlaybackSpeedOperator`](/mod/game-api/types/global-t-x/valueoperatedparticlesystem-playbackspeedoperator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValueOperatedParticleSystem()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-operators" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/valueoperatedparticlesystem-particlesystemvalueoperatordefinition">{"ValueOperatedParticleSystem.ParticleSystemValueOperatorDefinition"}</Link>{"[] operators"}</code> | The values to drive and their curves. |
| <Link id="m-targetsystem" /><code>{"private ParticleSystem targetSystem"}</code> | The particle system to change. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setvalue" /><code>{"void SetValue(float value)"}</code> | Client: passes the value to every operator, which maps it through its curve and applies it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: sets up each operator on the target system. |

</details>

## Used in

Members of other types that take, return or hold a `ValueOperatedParticleSystem`:

[`PlayerHealthVisualEffectsSettings.NightmareEffectController.valueOperator`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings-nightmareeffectcontroller#m-valueoperator).

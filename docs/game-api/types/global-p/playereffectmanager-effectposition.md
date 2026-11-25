---
title: "PlayerEffectManager.EffectPosition"
description: "A spot on a player's body where heat (smoke, burn) and stat effect particles are placed, tied to a HeatPoint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager.EffectPosition

A **class** in `Root.Township`, no namespace.

A spot on a player's body where heat (smoke, burn) and stat effect particles are placed, tied to a `HeatPoint`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerEffectManager`](/game-api/types/global-p/playereffectmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EffectPosition()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cullburneffect" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" cullBurnEffect"}</code> |
| <Link id="m-cullsmokeeffect" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" cullSmokeEffect"}</code> |
| <Link id="m-cullstateffects" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" cullStatEffects"}</code> |
| <Link id="m-parent" /><code>{"private Transform parent"}</code> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |
| <Link id="m-radius" /><code>{"private float radius"}</code> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> |
| <Link id="m-size" /><code>{"private float size"}</code> |
| <Link id="m-targetpoint" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" targetPoint"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cullburneffect-2" /><code><Link to="/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" CullBurnEffect { get; }"}</code> | Turns off the burn effect here. Any value but `none` culls it for local and remote players alike, because `local` is 3. |
| <Link id="m-cullsmokeeffect-2" /><code><Link to="/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" CullSmokeEffect { get; }"}</code> | Turns off the smoke effect here. Same culling rule as `CullBurnEffect`. |
| <Link id="m-cullstateffects-2" /><code><Link to="/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" CullStatEffects { get; }"}</code> | Turns off stat buff and debuff effects here. Same culling rule as `CullBurnEffect`. |
| <Link id="m-size-2" /><code>{"float Size { get; }"}</code> | Scale of effects placed here. |
| <Link id="m-targetpoint-2" /><code><Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" TargetPoint { get; }"}</code> | The heat point whose temperature drives smoke and burn effects here. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos()"}</code> | Editor: draws a capsule showing the effect's size and radius. |
| <Link id="m-position-2" /><code>{"void Position("}<Link to="/game-api/types/global-p/playereffectparticle">{"PlayerEffectParticle"}</Link>{" effect)"}</code> | Parents an effect to this spot and sets its local position, rotation, scale and (for particles) radius. |
| <Link id="m-position-3" /><code>{"void Position("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Parents an effect to this spot and sets its local position, rotation, scale and (for particles) radius. |

## Used in

Members of other types that take, return or hold a `EffectPosition`:

[`PlayerEffectManager.effectPositions`](/game-api/types/global-p/playereffectmanager#m-effectpositions), [`PlayerEffectManager.EffectApplication.EffectApplication`](/game-api/types/global-p/playereffectmanager-effectapplication#m-ctor), [`PlayerEffectManager.EffectApplication.effectPosition`](/game-api/types/global-p/playereffectmanager-effectapplication#m-effectposition), [`PlayerEffectManager.EffectPointStatus.EffectPointStatus`](/game-api/types/global-p/playereffectmanager-effectpointstatus#m-ctor), [`PlayerEffectManager.EffectPointStatus.effectPosition`](/game-api/types/global-p/playereffectmanager-effectpointstatus#m-effectposition).

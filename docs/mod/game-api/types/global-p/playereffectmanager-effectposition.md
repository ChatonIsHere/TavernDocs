---
title: "PlayerEffectManager.EffectPosition"
description: "A spot on a player's body where heat (smoke, burn) and stat effect particles are placed, tied to a HeatPoint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager.EffectPosition

A **class** in `Root.Township`, the global namespace.

A spot on a player's body where heat (smoke, burn) and stat effect particles are placed, tied to a `HeatPoint`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerEffectManager`](/mod/game-api/types/global-p/playereffectmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectPosition()"}</code> | <span className="api-desc">Creates a `PlayerEffectManager.EffectPosition` with default values.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cullburneffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" cullBurnEffect"}</code> | <span className="api-desc">Which players (local, remote or both) get no burn effect at this point.</span> |
| <Link id="m-cullsmokeeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" cullSmokeEffect"}</code> | <span className="api-desc">Which players (local, remote or both) get no smoke effect at this point.</span> |
| <Link id="m-cullstateffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" cullStatEffects"}</code> | <span className="api-desc">Which players (local, remote or both) get no stat buff or debuff effects at this point.</span> |
| <Link id="m-parent" /><code>{"private Transform parent"}</code> | <span className="api-desc">Body transform the effect is parented to.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Local position of the effect under `parent`.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Radius passed to the effect particle, also used for the gizmo capsule.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Local rotation of the effect under `parent`.</span> |
| <Link id="m-size" /><code>{"private float size"}</code> | <span className="api-desc">Base scale of the effect; `EffectApplication.SetSize` multiplies it.</span> |
| <Link id="m-targetpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" targetPoint"}</code> | <span className="api-desc">The `HeatPoint` whose temperature drives the smoke and burn effects here.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cullburneffect-2" /><code><Link to="/mod/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" CullBurnEffect { get; }"}</code> | <span className="api-desc">Turns off the burn effect here. Any value but `none` culls it for local and remote players alike, because `local` is 3.</span> |
| <Link id="m-cullsmokeeffect-2" /><code><Link to="/mod/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" CullSmokeEffect { get; }"}</code> | <span className="api-desc">Turns off the smoke effect here. Same culling rule as `CullBurnEffect`.</span> |
| <Link id="m-cullstateffects-2" /><code><Link to="/mod/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" CullStatEffects { get; }"}</code> | <span className="api-desc">Turns off stat buff and debuff effects here. Same culling rule as `CullBurnEffect`.</span> |
| <Link id="m-size-2" /><code>{"float Size { get; }"}</code> | <span className="api-desc">Scale of effects placed here.</span> |
| <Link id="m-targetpoint-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" TargetPoint { get; }"}</code> | <span className="api-desc">The heat point whose temperature drives smoke and burn effects here.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos()"}</code> | <span className="api-desc">Editor: draws a capsule showing the effect's size and radius.</span> |
| <Link id="m-position-2" /><code>{"void Position("}<Link to="/mod/game-api/types/global-p/playereffectparticle">{"PlayerEffectParticle"}</Link>{" effect)"}</code> | <span className="api-desc">Parents an effect to this spot and sets its local position, rotation, scale and (for particles) radius.</span> |
| <Link id="m-position-3" /><code>{"void Position("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Parents an effect to this spot and sets its local position, rotation, scale and (for particles) radius.</span> |

## Used in

Members of other types that take, return or hold a `EffectPosition`:

<div className="api-used-in">

[`PlayerEffectManager.effectPositions`](/mod/game-api/types/global-p/playereffectmanager#m-effectpositions), [`PlayerEffectManager.EffectApplication.EffectApplication`](/mod/game-api/types/global-p/playereffectmanager-effectapplication#m-ctor), [`PlayerEffectManager.EffectApplication.effectPosition`](/mod/game-api/types/global-p/playereffectmanager-effectapplication#m-effectposition), [`PlayerEffectManager.EffectPointStatus.EffectPointStatus`](/mod/game-api/types/global-p/playereffectmanager-effectpointstatus#m-ctor), [`PlayerEffectManager.EffectPointStatus.effectPosition`](/mod/game-api/types/global-p/playereffectmanager-effectpointstatus#m-effectposition).

</div>

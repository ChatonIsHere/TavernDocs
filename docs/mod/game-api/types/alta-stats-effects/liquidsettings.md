---
title: "LiquidSettings"
description: "Global settings asset for liquids: transition speed, splash and pour particles, and the default water."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidSettings

A **class** in `Root.Township`, `Alta.Liquid`.

Global settings asset for liquids: transition speed, splash and pour particles, and the default water. Get it with `GlobalSettings<LiquidSettings>.Instance`.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`GlobalSettings<LiquidSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`LiquidSettings`](/mod/game-api/types/alta-stats-effects/liquidsettings), [`LiquidSettings.Create`](/mod/game-api/types/alta-stats-effects/liquidsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-stats-effects/liquidsettings-create)
- **Attributes** `GlobalSettings`
- **Documented in** [Liquids](/mod/game-api/game-systems/liquids)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androiddfaultpouringparticles" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidDfaultPouringParticles"}</code> | <span className="api-desc">Android pouring particles; no getter reads it.</span> |
| <Link id="m-androidliquidsplashparticle" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidLiquidSplashParticle"}</code> | <span className="api-desc">Android splash particles; no getter reads it.</span> |
| <Link id="m-debugwaterconcoction" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" debugWaterConcoction"}</code> | <span className="api-desc">Backing field for `DebugWaterConcoction`.</span> |
| <Link id="m-defaultpouringparticles" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" defaultPouringParticles"}</code> | <span className="api-desc">Backing field for `DefaultPouringParticles`.</span> |
| <Link id="m-liquidsplashparticle" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" liquidSplashParticle"}</code> | <span className="api-desc">Backing field for `LiquidSplashParticles`.</span> |
| <Link id="m-liquidtransitionspeed" /><code>{"private float liquidTransitionSpeed"}</code> | <span className="api-desc">Backing field for `LiquidTransitionSpeed` (default 0.01).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-debugwaterconcoction-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" DebugWaterConcoction { get; }"}</code> | <span className="api-desc">Default liquid (water); used for infinite sources saved without content and as a stew recipe fallback.</span> |
| <Link id="m-defaultpouringparticles-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DefaultPouringParticles { get; }"}</code> | <span className="api-desc">Default pooled particles for pouring.</span> |
| <Link id="m-liquidsplashparticles" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LiquidSplashParticles { get; }"}</code> | <span className="api-desc">Pooled particles for liquid splashes.</span> |
| <Link id="m-liquidtransitionspeed-2" /><code>{"float LiquidTransitionSpeed { get; }"}</code> | <span className="api-desc">Multiplier on how fast liquid moves between containers in a `LiquidTransition`.</span> |

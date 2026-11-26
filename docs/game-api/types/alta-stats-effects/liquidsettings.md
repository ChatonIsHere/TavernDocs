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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`GlobalSettings<LiquidSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`LiquidSettings`](/game-api/types/alta-stats-effects/liquidsettings), [`LiquidSettings.Create`](/game-api/types/alta-stats-effects/liquidsettings-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/liquidsettings-create)
- **Attributes** `GlobalSettings`
- **Documented in** [Liquids](/game-api/game-systems/liquids)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androiddfaultpouringparticles" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidDfaultPouringParticles"}</code> | Android pouring particles; no getter reads it. |
| <Link id="m-androidliquidsplashparticle" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidLiquidSplashParticle"}</code> | Android splash particles; no getter reads it. |
| <Link id="m-debugwaterconcoction" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" debugWaterConcoction"}</code> | Backing field for `DebugWaterConcoction`. |
| <Link id="m-defaultpouringparticles" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" defaultPouringParticles"}</code> | Backing field for `DefaultPouringParticles`. |
| <Link id="m-liquidsplashparticle" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" liquidSplashParticle"}</code> | Backing field for `LiquidSplashParticles`. |
| <Link id="m-liquidtransitionspeed" /><code>{"private float liquidTransitionSpeed"}</code> | Backing field for `LiquidTransitionSpeed` (default 0.01). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-debugwaterconcoction-2" /><code><Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" DebugWaterConcoction { get; }"}</code> | Default liquid (water); used for infinite sources saved without content and as a stew recipe fallback. |
| <Link id="m-defaultpouringparticles-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DefaultPouringParticles { get; }"}</code> | Default pooled particles for pouring. |
| <Link id="m-liquidsplashparticles" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LiquidSplashParticles { get; }"}</code> | Pooled particles for liquid splashes. |
| <Link id="m-liquidtransitionspeed-2" /><code>{"float LiquidTransitionSpeed { get; }"}</code> | Multiplier on how fast liquid moves between containers in a `LiquidTransition`. |

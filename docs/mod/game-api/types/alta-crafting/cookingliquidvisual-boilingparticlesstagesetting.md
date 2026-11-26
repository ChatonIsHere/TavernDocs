---
title: "CookingLiquidVisual.BoilingParticlesStageSetting"
description: "Boiling particle settings for one boil stage of a cooking liquid's surface visual."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingLiquidVisual.BoilingParticlesStageSetting

A **struct** in `Root.Township`, `Alta.Cooking`.

Boiling particle settings for one boil stage of a cooking liquid's surface visual. `CookingLiquidVisual` keeps an array of them, at least one.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`CookingLiquidVisual`](/mod/game-api/types/alta-crafting/cookingliquidvisual)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heightoffset" /><code>{"private float heightOffset"}</code> | Backing field for `HeightOffset`. |
| <Link id="m-lifetime" /><code>{"private float lifetime"}</code> | Backing field for `Lifetime`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heightoffset-2" /><code>{"float HeightOffset { get; }"}</code> | How far above the liquid surface the boiling particles start at this stage. |
| <Link id="m-lifetime-2" /><code>{"float Lifetime { get; }"}</code> | Particle lifetime at this boiling stage. |

## Used in

Members of other types that take, return or hold a `BoilingParticlesStageSetting`:

[`CookingLiquidVisual.boilingParticlesStages`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-boilingparticlesstages), [`BoilingParticles.SetupForContainer`](/mod/game-api/types/alta-stats-effects/boilingparticles#m-setupforcontainer), [`BoilingParticles.stageSettings`](/mod/game-api/types/alta-stats-effects/boilingparticles#m-stagesettings).

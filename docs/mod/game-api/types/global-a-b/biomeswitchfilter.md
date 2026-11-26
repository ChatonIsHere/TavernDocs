---
title: "BiomeSwitchFilter"
description: "Forest fill spawn modifier that picks the biome at each point from a list and swaps in that biome's fill set spawn modifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSwitchFilter

A **class** in `Root.Township`, the global namespace.

Forest fill spawn modifier that picks the biome at each point from a list and swaps in that biome's fill set spawn modifiers.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`BiomeSwitchFilter.Create`](/mod/game-api/types/global-a-b/biomeswitchfilter-create)
- **Nested types** [`Biome`](/mod/game-api/types/global-a-b/biomeswitchfilter-biome), [`Create`](/mod/game-api/types/global-a-b/biomeswitchfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeSwitchFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biomes" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeswitchfilter-biome">{"BiomeSwitchFilter.Biome"}</Link>{"[] biomes"}</code> | Pairs of forest biome and the fill set (`IFillSet`) to use there. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, ref float weight)"}</code> | Gets the biome sphere at the point from the listed biomes, tags the point with it, and uses the matching fill set's spawn modifiers. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Initialises each listed fill set's spawn modifiers. |

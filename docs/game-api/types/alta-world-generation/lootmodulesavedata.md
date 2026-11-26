---
title: "LootModuleSaveData"
description: "Save data (version 5) for LootModule, a loot spawner on a dock group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootModuleSaveData

A **internal class** in `Root.Township`, `Alta.Loot`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 5) for `LootModule`, a loot spawner on a dock group. Internal.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<LootModule, LootModuleSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LootModule`](/game-api/types/alta-world-generation/lootmodule), [`LootModuleSaveData`](/game-api/types/alta-world-generation/lootmodulesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LootModuleSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code><Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome"}</code> | Override biome for the loot; null means use the chunk's biome. |
| <Link id="m-incrementingfailchance" /><code>{"float incrementingFailChance"}</code> | How much the chance to stop filling grows with each dock tried. |
| <Link id="m-isoneoff" /><code>{"bool isOneOff"}</code> | If true the module spawns its loot once and then destroys itself. |
| <Link id="m-prosperity" /><code>{"float prosperity"}</code> | Prosperity value the loot is generated with, which skews rarity. |
| <Link id="m-respawnfrequency" /><code>{"float respawnFrequency"}</code> | Seconds between refills. Values under 60 (the default is -1) are ignored and the prefab's value is kept. |
| <Link id="m-waittorefill" /><code>{"TimeSpan waitToRefill"}</code> | Time left on the refill timer. |

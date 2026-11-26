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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<LootModule, LootModuleSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LootModule`](/mod/game-api/types/alta-world-generation/lootmodule), [`LootModuleSaveData`](/mod/game-api/types/alta-world-generation/lootmodulesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootModuleSaveData()"}</code> | <span className="api-desc">Creates a `LootModuleSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome"}</code> | <span className="api-desc">Override biome for the loot; null means use the chunk's biome.</span> |
| <Link id="m-incrementingfailchance" /><code>{"float incrementingFailChance"}</code> | <span className="api-desc">How much the chance to stop filling grows with each dock tried.</span> |
| <Link id="m-isoneoff" /><code>{"bool isOneOff"}</code> | <span className="api-desc">If true the module spawns its loot once and then destroys itself.</span> |
| <Link id="m-prosperity" /><code>{"float prosperity"}</code> | <span className="api-desc">Prosperity value the loot is generated with, which skews rarity.</span> |
| <Link id="m-respawnfrequency" /><code>{"float respawnFrequency"}</code> | <span className="api-desc">Seconds between refills. Values under 60 (the default is -1) are ignored and the prefab's value is kept.</span> |
| <Link id="m-waittorefill" /><code>{"TimeSpan waitToRefill"}</code> | <span className="api-desc">Time left on the refill timer.</span> |

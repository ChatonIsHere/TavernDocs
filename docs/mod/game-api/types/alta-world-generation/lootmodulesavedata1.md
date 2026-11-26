---
title: "LootModuleSaveData1"
description: "Old save format (version 1) for LootModule, with the refill timer in float seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootModuleSaveData1

A **internal class** in `Root.Township`, `Alta.Loot`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save format (version 1) for `LootModule`, with the refill timer in float seconds. Migrates to `LootModuleSaveData2`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootModuleSaveData1()"}</code> | <span className="api-desc">Creates a `LootModuleSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome"}</code> | <span className="api-desc">Override biome for the loot.</span> |
| <Link id="m-hasrun" /><code>{"bool hasRun"}</code> | <span className="api-desc">Whether the module had spawned loot.</span> |
| <Link id="m-incrementingfailchance" /><code>{"float incrementingFailChance"}</code> | <span className="api-desc">How much the chance to stop filling grows with each dock tried.</span> |
| <Link id="m-prosperity" /><code>{"float prosperity"}</code> | <span className="api-desc">Prosperity value the loot is generated with.</span> |
| <Link id="m-waittorefill" /><code>{"float waitToRefill"}</code> | <span className="api-desc">Seconds left on the refill timer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to version 2, turning the float seconds into a `TimeSpan`.</span> |

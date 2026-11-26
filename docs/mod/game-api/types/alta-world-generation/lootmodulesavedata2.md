---
title: "LootModuleSaveData2"
description: "Old save format (version 2) for LootModule."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootModuleSaveData2

A **internal class** in `Root.Township`, `Alta.Loot`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save format (version 2) for `LootModule`. Migrates to `LootModuleSaveData3`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootModuleSaveData2()"}</code> | <span className="api-desc">Creates a `LootModuleSaveData2` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome"}</code> | <span className="api-desc">Override biome for the loot.</span> |
| <Link id="m-hasrun" /><code>{"bool hasRun"}</code> | <span className="api-desc">Whether the module had spawned loot.</span> |
| <Link id="m-incrementingfailchance" /><code>{"float incrementingFailChance"}</code> | <span className="api-desc">How much the chance to stop filling grows with each dock tried.</span> |
| <Link id="m-prosperity" /><code>{"float prosperity"}</code> | <span className="api-desc">Prosperity value the loot is generated with.</span> |
| <Link id="m-waittorefill" /><code>{"TimeSpan waitToRefill"}</code> | <span className="api-desc">Time left on the refill timer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies every field into version 3.</span> |

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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootModuleSaveData1()"}</code> | Creates a `LootModuleSaveData1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code><Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome"}</code> | Override biome for the loot. |
| <Link id="m-hasrun" /><code>{"bool hasRun"}</code> | Whether the module had spawned loot. |
| <Link id="m-incrementingfailchance" /><code>{"float incrementingFailChance"}</code> | How much the chance to stop filling grows with each dock tried. |
| <Link id="m-prosperity" /><code>{"float prosperity"}</code> | Prosperity value the loot is generated with. |
| <Link id="m-waittorefill" /><code>{"float waitToRefill"}</code> | Seconds left on the refill timer. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to version 2, turning the float seconds into a `TimeSpan`. |

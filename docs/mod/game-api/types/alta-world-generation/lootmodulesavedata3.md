---
title: "LootModuleSaveData3"
description: "Old save format (version 3) for LootModule, which added isOneOff."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootModuleSaveData3

A **internal class** in `Root.Township`, `Alta.Loot`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save format (version 3) for `LootModule`, which added `isOneOff`. Migrates to `LootModuleSaveData4`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootModuleSaveData3()"}</code> | Creates a `LootModuleSaveData3` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome"}</code> | Override biome for the loot. |
| <Link id="m-hasrun" /><code>{"bool hasRun"}</code> | Whether the module had spawned loot. |
| <Link id="m-incrementingfailchance" /><code>{"float incrementingFailChance"}</code> | How much the chance to stop filling grows with each dock tried. |
| <Link id="m-isoneoff" /><code>{"bool isOneOff"}</code> | Whether the module spawned once and then destroyed itself. Lost on migration. |
| <Link id="m-prosperity" /><code>{"float prosperity"}</code> | Prosperity value the loot is generated with. |
| <Link id="m-waittorefill" /><code>{"TimeSpan waitToRefill"}</code> | Time left on the refill timer. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to version 4 with `respawnFrequency` set to -1. `isOneOff` is not copied, so it becomes false. |

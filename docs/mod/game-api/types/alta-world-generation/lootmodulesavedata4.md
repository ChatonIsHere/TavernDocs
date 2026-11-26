---
title: "LootModuleSaveData4"
description: "Old save format (version 4) for LootModule, which added respawnFrequency."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootModuleSaveData4

A **internal class** in `Root.Township`, `Alta.Loot`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save format (version 4) for `LootModule`, which added `respawnFrequency`. Migrates to `LootModuleSaveData`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootModuleSaveData4()"}</code> | <span className="api-desc">Creates a `LootModuleSaveData4` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome"}</code> | <span className="api-desc">Override biome for the loot.</span> |
| <Link id="m-hasrun" /><code>{"bool hasRun"}</code> | <span className="api-desc">Whether the module had spawned loot. Dropped on migration.</span> |
| <Link id="m-incrementingfailchance" /><code>{"float incrementingFailChance"}</code> | <span className="api-desc">Saved fail chance increment. Replaced with 0.01 on migration.</span> |
| <Link id="m-isoneoff" /><code>{"bool isOneOff"}</code> | <span className="api-desc">Whether the module spawned once and then destroyed itself. Dropped on migration.</span> |
| <Link id="m-prosperity" /><code>{"float prosperity"}</code> | <span className="api-desc">Prosperity value the loot is generated with.</span> |
| <Link id="m-respawnfrequency" /><code>{"float respawnFrequency"}</code> | <span className="api-desc">Seconds between refills; -1 means not set.</span> |
| <Link id="m-waittorefill" /><code>{"TimeSpan waitToRefill"}</code> | <span className="api-desc">Time left on the refill timer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to the current format but resets `incrementingFailChance` to 0.01 and drops `isOneOff` and `hasRun`.</span> |

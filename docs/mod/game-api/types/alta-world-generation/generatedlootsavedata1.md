---
title: "GeneratedLootSaveData1"
description: "Old save format (version 1) for GeneratedLoot, with the refill timer in float seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedLootSaveData1

A **internal class** in `Root.Township`, `Alta.Loot`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save format (version 1) for `GeneratedLoot`, with the refill timer in float seconds. Migrated to `GeneratedLootSaveData`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneratedLootSaveData1()"}</code> | <span className="api-desc">Creates a `GeneratedLootSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedpluginidentifier" /><code>{"int cachedPluginIdentifier"}</code> | <span className="api-desc">Stored int, copied as is.</span> |
| <Link id="m-hasrun" /><code>{"bool hasRun"}</code> | <span className="api-desc">Whether loot had been generated, copied as is.</span> |
| <Link id="m-waittorefill" /><code>{"float waitToRefill"}</code> | <span className="api-desc">Seconds left on the refill timer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to `GeneratedLootSaveData`, turning the float seconds into a `TimeSpan`.</span> |

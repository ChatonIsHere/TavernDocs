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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GeneratedLootSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedpluginidentifier" /><code>{"int cachedPluginIdentifier"}</code> | Stored int, copied as is. |
| <Link id="m-hasrun" /><code>{"bool hasRun"}</code> | Whether loot had been generated, copied as is. |
| <Link id="m-waittorefill" /><code>{"float waitToRefill"}</code> | Seconds left on the refill timer. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to `GeneratedLootSaveData`, turning the float seconds into a `TimeSpan`. |

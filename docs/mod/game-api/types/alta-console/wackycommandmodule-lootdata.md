---
title: "WackyCommandModule.LootData"
description: "One chest's loot module for the ow-loot command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WackyCommandModule.LootData

A **private class** in `Root.Township`, `Alta.Console.Commands`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One chest's loot module for the `ow-loot` command.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`WackyCommandModule`](/mod/game-api/types/alta-console/wackycommandmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootData()"}</code> | Creates a `WackyCommandModule.LootData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-json" /><code>{"string json"}</code> | `LootModule` settings as JSON, applied to the new module with `JsonUtility.FromJsonOverwrite`. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Where the chest is. The nearest chest within 1 metre gets the module. |

## Used in

Members of other types that take, return or hold a `LootData`:

[`WackyCommandModule.ChunkLootData.lootData`](/mod/game-api/types/alta-console/wackycommandmodule-chunklootdata#m-lootdata).

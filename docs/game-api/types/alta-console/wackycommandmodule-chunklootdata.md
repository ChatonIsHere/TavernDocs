---
title: "WackyCommandModule.ChunkLootData"
description: "Loot module data for one chunk, used by the ow-loot command that restores Overworld chest loot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WackyCommandModule.ChunkLootData

A **private class** in `Root.Township`, `Alta.Console.Commands`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Loot module data for one chunk, used by the `ow-loot` command that restores Overworld chest loot.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`WackyCommandModule`](/game-api/types/alta-console/wackycommandmodule)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChunkLootData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"string chunk"}</code> | The chunk's identifier, such as `Chunk 27-33`. |
| <Link id="m-lootdata" /><code>{"List<"}<Link to="/game-api/types/alta-console/wackycommandmodule-lootdata">{"WackyCommandModule.LootData"}</Link>{"> lootData"}</code> | The loot modules to add to chests in that chunk. |

## Used in

Members of other types that take, return or hold a `ChunkLootData`:

[`WackyCommandModule.ChunkData.chunkLootData`](/game-api/types/alta-console/wackycommandmodule-chunkdata#m-chunklootdata).

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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`WackyCommandModule`](/mod/game-api/types/alta-console/wackycommandmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkLootData()"}</code> | <span className="api-desc">Creates a `WackyCommandModule.ChunkLootData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"string chunk"}</code> | <span className="api-desc">The chunk's identifier, such as `Chunk 27-33`.</span> |
| <Link id="m-lootdata" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/wackycommandmodule-lootdata">{"WackyCommandModule.LootData"}</Link>{"> lootData"}</code> | <span className="api-desc">The loot modules to add to chests in that chunk.</span> |

## Used in

Members of other types that take, return or hold a `ChunkLootData`:

<div className="api-used-in">

[`WackyCommandModule.ChunkData.chunkLootData`](/mod/game-api/types/alta-console/wackycommandmodule-chunkdata#m-chunklootdata).

</div>

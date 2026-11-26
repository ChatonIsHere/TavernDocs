---
title: "WackyCommandModule.ChunkData"
description: "JSON shape for the hardcoded chest loot list OWLoot reads: loot module settings and positions grouped by chunk name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WackyCommandModule.ChunkData

A **private class** in `Root.Township`, `Alta.Console.Commands`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

JSON shape for the hardcoded chest loot list `OWLoot` reads: loot module settings and positions grouped by chunk name.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`WackyCommandModule`](/mod/game-api/types/alta-console/wackycommandmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkData()"}</code> | <span className="api-desc">Creates a `WackyCommandModule.ChunkData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunklootdata" /><code><Link to="/mod/game-api/types/alta-console/wackycommandmodule-chunklootdata">{"WackyCommandModule.ChunkLootData"}</Link>{"[] chunkLootData"}</code> | <span className="api-desc">One entry per chunk, each with the loot modules to restore there.</span> |

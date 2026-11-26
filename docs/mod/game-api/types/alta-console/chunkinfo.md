---
title: "ChunkInfo"
description: "Small result object for console commands that shows a chunk by its identifier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkInfo

A **class** in `Root.Township`, `Alta.Console.Commands`.

Small result object for console commands that shows a chunk by its identifier.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkInfo()"}</code> | <span className="api-desc">Creates a `ChunkInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkidentifier" /><code>{"string ChunkIdentifier { get; set; }"}</code> | <span className="api-desc">The chunk's identifier.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/chunkinfo">{"ChunkInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Turns a `Chunk` into a `ChunkInfo`.</span> |

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

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkInfo()"}</code> | Creates a `ChunkInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkidentifier" /><code>{"string ChunkIdentifier { get; set; }"}</code> | The chunk's identifier. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-console/chunkinfo">{"ChunkInfo"}</Link>{" op_Implicit("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Turns a `Chunk` into a `ChunkInfo`. |

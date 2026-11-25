---
title: "ICacheable"
description: "interface ICacheable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICacheable

An **interface** in `Root.Township`, `Alta.Static`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`ForestGeneration`](/game-api/types/alta-world-generation/forestgeneration), [`RiverGeneration`](/game-api/types/alta-world-generation/rivergeneration), [`InstructionSet`](/game-api/types/alta-world/instructionset), [`TerrainAccess`](/game-api/types/global-t-x/terrainaccess)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializeasync" /><code>{"Task SerializeAsync(uint version, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ICacheable`:

[`CacheFileFormat.Write`](/game-api/types/alta-world/cachefileformat#m-write).

---
title: "ICacheable"
description: "Data that can be saved to and loaded from a versioned cache file, such as forest and river generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICacheable

An **interface** in `Root.Township`, `Alta.Static`.

Data that can be saved to and loaded from a versioned cache file, such as forest and river generation. Used by `CacheManager`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Derived types** [`ForestGeneration`](/mod/game-api/types/alta-world-generation/forestgeneration), [`RiverGeneration`](/mod/game-api/types/alta-world-generation/rivergeneration), [`InstructionSet`](/mod/game-api/types/alta-world/instructionset), [`TerrainAccess`](/mod/game-api/types/global-t-x/terrainaccess)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> | Current data version, written at the start of the cache file. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializeasync" /><code>{"Task SerializeAsync(uint version, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the data on the stream. When reading, `version` is the version stored in the file. |

## Used in

Members of other types that take, return or hold a `ICacheable`:

[`CacheFileFormat.Write`](/mod/game-api/types/alta-world/cachefileformat#m-write).

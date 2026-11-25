---
title: "ChunkEffect"
description: "Asset for something that happens when the local player enters or leaves a LocationChunk, such as darkness or occlusion changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkEffect

An **abstract class** in `Root.Township`, `Alta.Chunks`.

Asset for something that happens when the local player enters or leaves a `LocationChunk`, such as darkness or occlusion changes. Client only.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`MasterTerrainChunkEffectData`](/game-api/types/alta-world/masterterrainchunkeffectdata), [`OcclusionChunkEffectData`](/game-api/types/alta-world/occlusionchunkeffectdata), [`UnloadAllLandmarks`](/game-api/types/alta-world/unloadalllandmarks), [`DarknessChunkData`](/game-api/types/global-c-d/darknesschunkdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ChunkEffect()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"abstract void Apply(bool isContained)"}</code> | Called when the chunk's `HasLocalPlayerChanged` fires. `isContained` is true when the local player is now in the chunk. |

## Used in

Members of other types that take, return or hold a `ChunkEffect`:

[`LocationChunk.chunkEffects`](/game-api/types/alta-world/locationchunk#m-chunkeffects).

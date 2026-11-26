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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`MasterTerrainChunkEffectData`](/mod/game-api/types/alta-world/masterterrainchunkeffectdata), [`OcclusionChunkEffectData`](/mod/game-api/types/alta-world/occlusionchunkeffectdata), [`UnloadAllLandmarks`](/mod/game-api/types/alta-world/unloadalllandmarks), [`DarknessChunkData`](/mod/game-api/types/global-c-d/darknesschunkdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ChunkEffect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"abstract void Apply(bool isContained)"}</code> | <span className="api-desc">Called when the chunk's `HasLocalPlayerChanged` fires. `isContained` is true when the local player is now in the chunk.</span> |

## Used in

Members of other types that take, return or hold a `ChunkEffect`:

<div className="api-used-in">

[`LocationChunk.chunkEffects`](/mod/game-api/types/alta-world/locationchunk#m-chunkeffects).

</div>

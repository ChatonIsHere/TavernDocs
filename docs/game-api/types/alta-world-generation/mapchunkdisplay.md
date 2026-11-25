---
title: "MapChunkDisplay"
description: "abstract class MapChunkDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapChunkDisplay

An **abstract class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ConstrainedSpawnerDisplay`](/game-api/types/alta-world-generation/constrainedspawnerdisplay), [`BasicObjectDisplay`](/game-api/types/alta-world-generation/basicobjectdisplay), [`PixelMapChunkDisplay`](/game-api/types/alta-world-generation/pixelmapchunkdisplay), [`PolygonChunkDisplay`](/game-api/types/alta-world-generation/polygonchunkdisplay), [`MarchingCubesChunkDisplay`](/game-api/types/alta-world-generation/marchingcubeschunkdisplay), [`SpawnAreaDisplay`](/game-api/types/alta-world-generation/spawnareadisplay), [`SpawnPointsDisplay`](/game-api/types/alta-world-generation/spawnpointsdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MapChunkDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"protected "}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-layer" /><code>{"protected "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer"}</code> |  |
| <Link id="m-renderindex" /><code>{"protected int renderIndex"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-plugin" /><code><Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" Plugin { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, int renderIndex)"}</code> |  |
| <Link id="m-initialize-2" /><code>{"abstract void Initialize()"}</code> |  |
| <Link id="m-render" /><code>{"abstract IEnumerator Render()"}</code> |  |

## Used in

Members of other types that take, return or hold a `MapChunkDisplay`:

[`Element.prefab`](/game-api/types/alta-world-generation/element#m-prefab), [`Element.Prefab`](/game-api/types/alta-world-generation/element#m-prefab-2), [`MapChunk.displays`](/game-api/types/alta-world-generation/mapchunk#m-displays), [`MapChunk.Displays`](/game-api/types/alta-world-generation/mapchunk#m-displays-2), [`MapChunk.Render`](/game-api/types/alta-world-generation/mapchunk#m-render).

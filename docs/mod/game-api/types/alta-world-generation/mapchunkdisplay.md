---
title: "MapChunkDisplay"
description: "Base for a component that draws one cave generation plugin's output in one map chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapChunkDisplay

An **abstract class** in `Root.Township`, `Alta.Caves`.

Base for a component that draws one cave generation plugin's output in one map chunk. Subclasses implement `Initialize` and the `Render` coroutine.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ConstrainedSpawnerDisplay`](/mod/game-api/types/alta-world-generation/constrainedspawnerdisplay), [`BasicObjectDisplay`](/mod/game-api/types/alta-world-generation/basicobjectdisplay), [`PixelMapChunkDisplay`](/mod/game-api/types/alta-world-generation/pixelmapchunkdisplay), [`PolygonChunkDisplay`](/mod/game-api/types/alta-world-generation/polygonchunkdisplay), [`MarchingCubesChunkDisplay`](/mod/game-api/types/alta-world-generation/marchingcubeschunkdisplay), [`SpawnAreaDisplay`](/mod/game-api/types/alta-world-generation/spawnareadisplay), [`SpawnPointsDisplay`](/mod/game-api/types/alta-world-generation/spawnpointsdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MapChunkDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"protected "}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk"}</code> | The map chunk being drawn. |
| <Link id="m-layer" /><code>{"protected "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer"}</code> | The map chunk layer being drawn. |
| <Link id="m-renderindex" /><code>{"protected int renderIndex"}</code> | Index of this display in the render order. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-plugin" /><code><Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" Plugin { get; private set; }"}</code> | The plugin instance this display renders for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, int renderIndex)"}</code> | With arguments: stores the plugin, layer, chunk and render index, then calls the parameterless version for subclass setup. |
| <Link id="m-initialize-2" /><code>{"abstract void Initialize()"}</code> | With arguments: stores the plugin, layer, chunk and render index, then calls the parameterless version for subclass setup. |
| <Link id="m-render" /><code>{"abstract IEnumerator Render()"}</code> | Coroutine that builds the display, run step by step by the generator. |

## Used in

Members of other types that take, return or hold a `MapChunkDisplay`:

[`Element.prefab`](/mod/game-api/types/alta-world-generation/element#m-prefab), [`Element.Prefab`](/mod/game-api/types/alta-world-generation/element#m-prefab-2), [`MapChunk.displays`](/mod/game-api/types/alta-world-generation/mapchunk#m-displays), [`MapChunk.Displays`](/mod/game-api/types/alta-world-generation/mapchunk#m-displays-2), [`MapChunk.Render`](/mod/game-api/types/alta-world-generation/mapchunk#m-render).

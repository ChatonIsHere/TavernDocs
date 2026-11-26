---
title: "IGenerator"
description: "What a cave layer's generator exposes to its plugins while building the layer: seed, noise, entrance, chunk size and the plugin list."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IGenerator

An **interface** in `Root.Township`, `Alta.Caves`.

What a cave layer's generator exposes to its plugins while building the layer: seed, noise, entrance, chunk size and the plugin list. `GenerationBase` implements it.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`GenerationBase`](/mod/game-api/types/alta-world-generation/generationbase)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunksize" /><code>{"int ChunkSize { get; }"}</code> | <span className="api-desc">Size of each map chunk the layer is built from.</span> |
| <Link id="m-entrance" /><code>{"Vector2 Entrance { get; }"}</code> | <span className="api-desc">Where the layer's entrance is, as x and z.</span> |
| <Link id="m-entrancedirection" /><code>{"Vector2 EntranceDirection { get; }"}</code> | <span className="api-desc">Direction the entrance faces, as x and z.</span> |
| <Link id="m-hashfunction" /><code><Link to="/mod/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" { get; }"}</code> | <span className="api-desc">Seeded hash for repeatable random values.</span> |
| <Link id="m-isgeneratingdynamic" /><code>{"bool IsGeneratingDynamic { get; }"}</code> | <span className="api-desc">True when dynamic plugins should run: the first time the layer is ever generated on the server.</span> |
| <Link id="m-layer" /><code>{"int Layer { get; }"}</code> | <span className="api-desc">The layer number.</span> |
| <Link id="m-layerstreamer" /><code><Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" LayerStreamer { get; }"}</code> | <span className="api-desc">The `CaveLayerStreamer` for this layer.</span> |
| <Link id="m-plugininstances" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{"> PluginInstances { get; }"}</code> | <span className="api-desc">The running plugin instances.</span> |
| <Link id="m-pluginlist" /><code><Link to="/mod/game-api/types/alta-world-generation/pluginlist">{"PluginList"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/pluginlist">{"PluginList"}</Link>{" { get; }"}</code> | <span className="api-desc">The plugin list asset the layer is built with.</span> |
| <Link id="m-seed" /><code>{"int Seed { get; }"}</code> | <span className="api-desc">The layer's seed.</span> |
| <Link id="m-simplexnoise" /><code><Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" "}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" { get; }"}</code> | <span className="api-desc">Seeded simplex noise for the layer.</span> |
| <Link id="m-snap" /><code>{"Vector2 Snap { get; set; }"}</code> | <span className="api-desc">Grid snap offset used while generating.</span> |
| <Link id="m-spawndata" /><code><Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> | <span className="api-desc">Spawn data used for things the generator spawns.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decrementgenerating" /><code>{"void DecrementGenerating()"}</code> | <span className="api-desc">Marks one chunk as done generating.</span> |
| <Link id="m-startrendering" /><code>{"void StartRendering("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Queues a map chunk to be rendered.</span> |

## Used in

Members of other types that take, return or hold a `IGenerator`:

<div className="api-used-in">

[`MapChunk.Generator`](/mod/game-api/types/alta-world-generation/mapchunk#m-generator), [`MapChunk.Initialize`](/mod/game-api/types/alta-world-generation/mapchunk#m-initialize), [`Plugin.GetInstance`](/mod/game-api/types/alta-world-generation/plugin#m-getinstance), [`PluginInstance.Generator`](/mod/game-api/types/alta-world-generation/plugininstance#m-generator), [`PluginInstance.PluginInstance`](/mod/game-api/types/alta-world-generation/plugininstance#m-ctor), [`RoomFixPlugin.GetInstance`](/mod/game-api/types/alta-world-generation/roomfixplugin#m-getinstance), [`RoomFixPluginInstance.RoomFixPluginInstance`](/mod/game-api/types/alta-world-generation/roomfixplugininstance#m-ctor).

</div>

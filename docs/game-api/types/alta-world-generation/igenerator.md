---
title: "IGenerator"
description: "interface IGenerator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IGenerator

An **interface** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`GenerationBase`](/game-api/types/alta-world-generation/generationbase)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunksize" /><code>{"int ChunkSize { get; }"}</code> |  |
| <Link id="m-entrance" /><code>{"Vector2 Entrance { get; }"}</code> |  |
| <Link id="m-entrancedirection" /><code>{"Vector2 EntranceDirection { get; }"}</code> |  |
| <Link id="m-hashfunction" /><code><Link to="/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" "}<Link to="/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isgeneratingdynamic" /><code>{"bool IsGeneratingDynamic { get; }"}</code> |  |
| <Link id="m-layer" /><code>{"int Layer { get; }"}</code> |  |
| <Link id="m-layerstreamer" /><code><Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" LayerStreamer { get; }"}</code> |  |
| <Link id="m-plugininstances" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{"> PluginInstances { get; }"}</code> |  |
| <Link id="m-pluginlist" /><code><Link to="/game-api/types/alta-world-generation/pluginlist">{"PluginList"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/pluginlist">{"PluginList"}</Link>{" { get; }"}</code> |  |
| <Link id="m-seed" /><code>{"int Seed { get; }"}</code> |  |
| <Link id="m-simplexnoise" /><code><Link to="/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" "}<Link to="/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" { get; }"}</code> |  |
| <Link id="m-snap" /><code>{"Vector2 Snap { get; set; }"}</code> |  |
| <Link id="m-spawndata" /><code><Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decrementgenerating" /><code>{"void DecrementGenerating()"}</code> |  |
| <Link id="m-startrendering" /><code>{"void StartRendering("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IGenerator`:

[`MapChunk.Generator`](/game-api/types/alta-world-generation/mapchunk#m-generator), [`MapChunk.Initialize`](/game-api/types/alta-world-generation/mapchunk#m-initialize), [`Plugin.GetInstance`](/game-api/types/alta-world-generation/plugin#m-getinstance), [`PluginInstance.Generator`](/game-api/types/alta-world-generation/plugininstance#m-generator), [`PluginInstance.PluginInstance`](/game-api/types/alta-world-generation/plugininstance#m-ctor), [`RoomFixPlugin.GetInstance`](/game-api/types/alta-world-generation/roomfixplugin#m-getinstance), [`RoomFixPluginInstance.RoomFixPluginInstance`](/game-api/types/alta-world-generation/roomfixplugininstance#m-ctor).

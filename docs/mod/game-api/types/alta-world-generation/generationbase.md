---
title: "GenerationBase"
description: "Generates one procedural cave layer from a seed: splits it into map chunks and runs each generation plugin on them, spread over frames."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationBase

A **class** in `Root.Township`, `Alta.Caves`.

Generates one procedural cave layer from a seed: splits it into map chunks and runs each generation plugin on them, spread over frames. The server picks the seed and sends it so clients build the same cave.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IGenerator`](/mod/game-api/types/alta-world-generation/igenerator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerationBase()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{"[,] chunks"}</code> | Grid of generated map chunks. |
| <Link id="m-chunksgenerating" /><code>{"private int chunksGenerating"}</code> | Number of map chunks still generating. |
| <Link id="m-chunkshigh" /><code>{"private int chunksHigh"}</code> | Map chunks along Z. |
| <Link id="m-chunksize" /><code>{"private int chunkSize"}</code> | Size of one map chunk in local units. |
| <Link id="m-chunksparent" /><code>{"private Transform chunksParent"}</code> | Parent object for the map chunks. |
| <Link id="m-chunkswide" /><code>{"private int chunksWide"}</code> | Map chunks along X. |
| <Link id="m-clientspawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-c-d/caveseedarguments">{"CaveSeedArguments"}</Link>{"> clientSpawn"}</code> | Method sync that sends the seed to clients. |
| <Link id="m-currentrendering" /><code>{"private IEnumerator<bool> currentRendering"}</code> | The chunk render step in progress. |
| <Link id="m-deletingentities" /><code>{"private Transform deletingEntities"}</code> | Declared but not used. |
| <Link id="m-floorplugin" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" floorPlugin"}</code> | The plugin for the cave floor. |
| <Link id="m-isgenerationstarted" /><code>{"private bool isGenerationStarted"}</code> | Set once generation starts; late joiners then get the seed on connect. |
| <Link id="m-isseedrandomonregenerate" /><code>{"private bool isSeedRandomOnRegenerate"}</code> | Declared but not used. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for generation progress and errors. |
| <Link id="m-pluginlist" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/pluginlist">{"PluginList"}</Link>{" pluginList"}</code> | Plugins that generate and render each chunk, in order. |
| <Link id="m-rendering" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{"> rendering"}</code> | Chunks waiting to be rendered, sorted by request count. |
| <Link id="m-seed" /><code>{"private int seed"}</code> | Generation seed; a negative value picks a random one at start. |
| <Link id="m-stepindex" /><code>{"private int stepIndex"}</code> | Declared but not used. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunks-2" /><code><Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{"[,] Chunks { get; }"}</code> | The grid of map chunks, null before generation. |
| <Link id="m-chunksize-2" /><code>{"int ChunkSize { get; }"}</code> | Size of one map chunk in generator units. |
| <Link id="m-currentlyrendering" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" CurrentlyRendering { get; set; }"}</code> | The generator allowed to render this frame, so only one renders at a time. |
| <Link id="m-entrance" /><code>{"Vector2 Entrance { get; private set; }"}</code> | Where the layer's entrance is. |
| <Link id="m-entrancedirection" /><code>{"Vector2 EntranceDirection { get; private set; }"}</code> | Direction of the layer's entrance. |
| <Link id="m-floorplugin-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" FloorPlugin { get; }"}</code> | The plugin that makes the floor. |
| <Link id="m-hashfunction" /><code><Link to="/mod/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" { get; private set; }"}</code> | Seeded hash function for the plugins, made at generation start. |
| <Link id="m-isgeneratingdynamic" /><code>{"bool IsGeneratingDynamic { get; }"}</code> | Whether the layer streamer is generating dynamic content. |
| <Link id="m-layer" /><code>{"int Layer { get; private set; }"}</code> | The cave layer number. |
| <Link id="m-layerstreamer" /><code><Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" LayerStreamer { get; private set; }"}</code> | The streamer that owns this cave layer. |
| <Link id="m-plugininstances" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{"> PluginInstances { get; private set; }"}</code> | One plugin instance per plugin in `PluginList`, made at generation start. |
| <Link id="m-pluginlist-2" /><code><Link to="/mod/game-api/types/alta-world-generation/pluginlist">{"PluginList"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/pluginlist">{"PluginList"}</Link>{" { get; }"}</code> | The plugins that make up this cave. |
| <Link id="m-seed-2" /><code>{"int Seed { get; set; }"}</code> | The generation seed. A negative value is replaced with a random one at start. |
| <Link id="m-simplexnoise" /><code><Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" "}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" { get; private set; }"}</code> | Seeded noise for the plugins, made at generation start. |
| <Link id="m-snap" /><code>{"Vector2 Snap { get; set; }"}</code> | A settable offset; not used inside this class. |
| <Link id="m-spawndata" /><code><Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; private set; }"}</code> | Spawn data built from the layer's biome. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-renderingcomplete" /><code>{"event Action RenderingComplete"}</code> | Raised once when all chunks are generated and rendered. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decrementgenerating" /><code>{"void DecrementGenerating()"}</code> | Called by a map chunk when it finishes generating. |
| <Link id="m-getchunkcoord" /><code>{"int GetChunkCoord(float position)"}</code> | Map chunk index for a position along one axis. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced seed message clients use to start generating. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the seed and entrance to a player who joins after generation started. |
| <Link id="m-releasechunk" /><code>{"void ReleaseChunk(int x, int y)"}</code> | Drops one request for a map chunk and destroys it when none are left. |
| <Link id="m-requestchunk" /><code>{"void RequestChunk(int x, int y)"}</code> | Creates and starts generating a map chunk, or adds a request to an existing one. |
| <Link id="m-setuplayer" /><code>{"async Task SetupLayer("}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer, int layer, int seed, Vector2 entrance, Vector2 entranceDirection)"}</code> | Sets the layer, seed, streamer and entrance, then generates. |
| <Link id="m-startgenerating" /><code>{"async Task StartGenerating()"}</code> | Generates every chunk and waits until rendering is complete. The server also sends the seed to clients. |
| <Link id="m-startrendering" /><code>{"void StartRendering("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | Queues a generated map chunk for rendering. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Destroys every generated map chunk. |
| <Link id="m-clientspawn-2" /><code>{"private async void ClientSpawn("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-c-d/caveseedarguments">{"CaveSeedArguments"}</Link>{" args)"}</code> | Syncs the cave seed, layer and entrance; clients then generate the same layer locally. |
| <Link id="m-decrementsceneloading" /><code>{"private void DecrementSceneLoading()"}</code> | Lowers the scene loading count when rendering completes. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Drops the chunks and plugin instances and clears the layer streamer's static renderers. |
| <Link id="m-prepareandstart" /><code>{"private async Task PrepareAndStart()"}</code> | Loads the layer's biome, sets up the environment and chunk parent, then starts generating. |
| <Link id="m-render" /><code>{"private IEnumerator<bool> Render("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk) (iterator)"}</code> | Runs every plugin's chunk render step by step, then on the server builds pathfinding if needed. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Lets one generator at a time run its rendering queue. |
| <Link id="m-updaterendering" /><code>{"private void UpdateRendering()"}</code> | Renders queued chunks within a per-frame time budget and raises `RenderingComplete` when all are done. |

</details>

## Used in

Members of other types that take, return or hold a `GenerationBase`:

[`EveryXLayersConstrain.SpawnParameters`](/mod/game-api/types/alta-world-generation/everyxlayersconstrain#m-spawnparameters), [`MapChunk.RenderGenerator`](/mod/game-api/types/alta-world-generation/mapchunk#m-rendergenerator), [`PluginInstance.RenderGenerator`](/mod/game-api/types/alta-world-generation/plugininstance#m-rendergenerator), [`SpawnConstrain.SpawnParameters`](/mod/game-api/types/alta-world-generation/spawnconstrain#m-spawnparameters), [`CaveLayerStreamer.generator`](/mod/game-api/types/alta-world/cavelayerstreamer#m-generator), [`CaveLayerStreamer.Generator`](/mod/game-api/types/alta-world/cavelayerstreamer#m-generator-2).

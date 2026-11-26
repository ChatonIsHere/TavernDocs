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
| <Link id="m-ctor" /><code>{"GenerationBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{"[,] chunks"}</code> | <span className="api-desc">Grid of generated map chunks.</span> |
| <Link id="m-chunksgenerating" /><code>{"private int chunksGenerating"}</code> | <span className="api-desc">Number of map chunks still generating.</span> |
| <Link id="m-chunkshigh" /><code>{"private int chunksHigh"}</code> | <span className="api-desc">Map chunks along Z.</span> |
| <Link id="m-chunksize" /><code>{"private int chunkSize"}</code> | <span className="api-desc">Size of one map chunk in local units.</span> |
| <Link id="m-chunksparent" /><code>{"private Transform chunksParent"}</code> | <span className="api-desc">Parent object for the map chunks.</span> |
| <Link id="m-chunkswide" /><code>{"private int chunksWide"}</code> | <span className="api-desc">Map chunks along X.</span> |
| <Link id="m-clientspawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-c-d/caveseedarguments">{"CaveSeedArguments"}</Link>{"> clientSpawn"}</code> | <span className="api-desc">Method sync that sends the seed to clients.</span> |
| <Link id="m-currentrendering" /><code>{"private IEnumerator<bool> currentRendering"}</code> | <span className="api-desc">The chunk render step in progress.</span> |
| <Link id="m-deletingentities" /><code>{"private Transform deletingEntities"}</code> | <span className="api-desc">Declared but not used.</span> |
| <Link id="m-floorplugin" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" floorPlugin"}</code> | <span className="api-desc">The plugin for the cave floor.</span> |
| <Link id="m-isgenerationstarted" /><code>{"private bool isGenerationStarted"}</code> | <span className="api-desc">Set once generation starts; late joiners then get the seed on connect.</span> |
| <Link id="m-isseedrandomonregenerate" /><code>{"private bool isSeedRandomOnRegenerate"}</code> | <span className="api-desc">Declared but not used.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for generation progress and errors.</span> |
| <Link id="m-pluginlist" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/pluginlist">{"PluginList"}</Link>{" pluginList"}</code> | <span className="api-desc">Plugins that generate and render each chunk, in order.</span> |
| <Link id="m-rendering" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{"> rendering"}</code> | <span className="api-desc">Chunks waiting to be rendered, sorted by request count.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Generation seed; a negative value picks a random one at start.</span> |
| <Link id="m-stepindex" /><code>{"private int stepIndex"}</code> | <span className="api-desc">Declared but not used.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunks-2" /><code><Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{"[,] Chunks { get; }"}</code> | <span className="api-desc">The grid of map chunks, null before generation.</span> |
| <Link id="m-chunksize-2" /><code>{"int ChunkSize { get; }"}</code> | <span className="api-desc">Size of one map chunk in generator units.</span> |
| <Link id="m-currentlyrendering" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" CurrentlyRendering { get; set; }"}</code> | <span className="api-desc">The generator allowed to render this frame, so only one renders at a time.</span> |
| <Link id="m-entrance" /><code>{"Vector2 Entrance { get; private set; }"}</code> | <span className="api-desc">Where the layer's entrance is.</span> |
| <Link id="m-entrancedirection" /><code>{"Vector2 EntranceDirection { get; private set; }"}</code> | <span className="api-desc">Direction of the layer's entrance.</span> |
| <Link id="m-floorplugin-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" FloorPlugin { get; }"}</code> | <span className="api-desc">The plugin that makes the floor.</span> |
| <Link id="m-hashfunction" /><code><Link to="/mod/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Seeded hash function for the plugins, made at generation start.</span> |
| <Link id="m-isgeneratingdynamic" /><code>{"bool IsGeneratingDynamic { get; }"}</code> | <span className="api-desc">Whether the layer streamer is generating dynamic content.</span> |
| <Link id="m-layer" /><code>{"int Layer { get; private set; }"}</code> | <span className="api-desc">The cave layer number.</span> |
| <Link id="m-layerstreamer" /><code><Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" LayerStreamer { get; private set; }"}</code> | <span className="api-desc">The streamer that owns this cave layer.</span> |
| <Link id="m-plugininstances" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{"> PluginInstances { get; private set; }"}</code> | <span className="api-desc">One plugin instance per plugin in `PluginList`, made at generation start.</span> |
| <Link id="m-pluginlist-2" /><code><Link to="/mod/game-api/types/alta-world-generation/pluginlist">{"PluginList"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/pluginlist">{"PluginList"}</Link>{" { get; }"}</code> | <span className="api-desc">The plugins that make up this cave.</span> |
| <Link id="m-seed-2" /><code>{"int Seed { get; set; }"}</code> | <span className="api-desc">The generation seed. A negative value is replaced with a random one at start.</span> |
| <Link id="m-simplexnoise" /><code><Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" "}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Seeded noise for the plugins, made at generation start.</span> |
| <Link id="m-snap" /><code>{"Vector2 Snap { get; set; }"}</code> | <span className="api-desc">A settable offset; not used inside this class.</span> |
| <Link id="m-spawndata" /><code><Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Spawn data built from the layer's biome.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-renderingcomplete" /><code>{"event Action RenderingComplete"}</code> | <span className="api-desc">Raised once when all chunks are generated and rendered.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decrementgenerating" /><code>{"void DecrementGenerating()"}</code> | <span className="api-desc">Called by a map chunk when it finishes generating.</span> |
| <Link id="m-getchunkcoord" /><code>{"int GetChunkCoord(float position)"}</code> | <span className="api-desc">Map chunk index for a position along one axis.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the synced seed message clients use to start generating.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the seed and entrance to a player who joins after generation started.</span> |
| <Link id="m-releasechunk" /><code>{"void ReleaseChunk(int x, int y)"}</code> | <span className="api-desc">Drops one request for a map chunk and destroys it when none are left.</span> |
| <Link id="m-requestchunk" /><code>{"void RequestChunk(int x, int y)"}</code> | <span className="api-desc">Creates and starts generating a map chunk, or adds a request to an existing one.</span> |
| <Link id="m-setuplayer" /><code>{"async Task SetupLayer("}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer, int layer, int seed, Vector2 entrance, Vector2 entranceDirection)"}</code> | <span className="api-desc">Sets the layer, seed, streamer and entrance, then generates.</span> |
| <Link id="m-startgenerating" /><code>{"async Task StartGenerating()"}</code> | <span className="api-desc">Generates every chunk and waits until rendering is complete. The server also sends the seed to clients.</span> |
| <Link id="m-startrendering" /><code>{"void StartRendering("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Queues a generated map chunk for rendering.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Destroys every generated map chunk.</span> |
| <Link id="m-clientspawn-2" /><code>{"private async void ClientSpawn("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-c-d/caveseedarguments">{"CaveSeedArguments"}</Link>{" args)"}</code> | <span className="api-desc">Syncs the cave seed, layer and entrance; clients then generate the same layer locally.</span> |
| <Link id="m-decrementsceneloading" /><code>{"private void DecrementSceneLoading()"}</code> | <span className="api-desc">Lowers the scene loading count when rendering completes.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Drops the chunks and plugin instances and clears the layer streamer's static renderers.</span> |
| <Link id="m-prepareandstart" /><code>{"private async Task PrepareAndStart()"}</code> | <span className="api-desc">Loads the layer's biome, sets up the environment and chunk parent, then starts generating.</span> |
| <Link id="m-render" /><code>{"private IEnumerator<bool> Render("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk) (iterator)"}</code> | <span className="api-desc">Runs every plugin's chunk render step by step, then on the server builds pathfinding if needed.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Lets one generator at a time run its rendering queue.</span> |
| <Link id="m-updaterendering" /><code>{"private void UpdateRendering()"}</code> | <span className="api-desc">Renders queued chunks within a per-frame time budget and raises `RenderingComplete` when all are done.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenerationBase`:

<div className="api-used-in">

[`EveryXLayersConstrain.SpawnParameters`](/mod/game-api/types/alta-world-generation/everyxlayersconstrain#m-spawnparameters), [`MapChunk.RenderGenerator`](/mod/game-api/types/alta-world-generation/mapchunk#m-rendergenerator), [`PluginInstance.RenderGenerator`](/mod/game-api/types/alta-world-generation/plugininstance#m-rendergenerator), [`SpawnConstrain.SpawnParameters`](/mod/game-api/types/alta-world-generation/spawnconstrain#m-spawnparameters), [`CaveLayerStreamer.generator`](/mod/game-api/types/alta-world/cavelayerstreamer#m-generator), [`CaveLayerStreamer.Generator`](/mod/game-api/types/alta-world/cavelayerstreamer#m-generator-2).

</div>

---
title: "MapChunk"
description: "One square of a cave generator's map."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapChunk

A **class** in `Root.Township`, `Alta.Caves`.

One square of a cave generator's map. It holds a `MapChunkLayer` per plugin, runs its generation on a worker thread, then hands itself to the generator to render through `MapChunkDisplay` objects.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapChunk()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displays" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/mapchunkdisplay">{"MapChunkDisplay"}</Link>{"> displays"}</code> | Backing field for `Displays`: displays spawned by `Render`. |
| <Link id="m-generationthread" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/chunkthread">{"ChunkThread"}</Link>{" generationThread"}</code> | Background thread generating this chunk's layers. Null once it finishes. |
| <Link id="m-layers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{", "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{"> layers"}</code> | One layer of values per plugin, added by `AddLayer` and read by `GetLayer`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displays-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/mapchunkdisplay">{"MapChunkDisplay"}</Link>{"> Displays { get; }"}</code> | Displays spawned to render this chunk. |
| <Link id="m-generator" /><code><Link to="/mod/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" Generator { get; private set; }"}</code> | The generator this chunk belongs to. |
| <Link id="m-offx" /><code>{"int OffX { get; private set; }"}</code> | X offset in cells: `X` times the chunk size. |
| <Link id="m-offz" /><code>{"int OffZ { get; private set; }"}</code> | Z offset in cells: `Z` times the chunk size. |
| <Link id="m-rendergenerator" /><code><Link to="/mod/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" RenderGenerator { get; private set; }"}</code> | The generator as a `GenerationBase`, or null. |
| <Link id="m-requestcount" /><code>{"int RequestCount { get; set; }"}</code> | Number of outstanding requests for this chunk. |
| <Link id="m-x" /><code>{"int X { get; private set; }"}</code> | Chunk grid x. |
| <Link id="m-z" /><code>{"int Z { get; private set; }"}</code> | Chunk grid z. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlayer" /><code>{"void AddLayer("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" pluginInstance)"}</code> | Adds a layer for a plugin instance. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Disposes all layers. |
| <Link id="m-createallnonzerolists" /><code>{"void CreateAllNonZeroLists()"}</code> | Builds the non-zero cell list on every layer. |
| <Link id="m-getlayer" /><code><Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" GetLayer("}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" plugin)"}</code> | The layer for a plugin. Throws if there is none. |
| <Link id="m-initialize" /><code><Link to="/mod/game-api/types/alta-world-generation/chunkthread">{"ChunkThread"}</Link>{" Initialize("}<Link to="/mod/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" generator, int x, int z)"}</code> | Sets the generator and grid position, works out the offsets and creates the generation thread. |
| <Link id="m-prepare" /><code>{"void Prepare()"}</code> | Clears any old layers and starts a fresh set. |
| <Link id="m-render" /><code>{"IEnumerator Render("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" pluginInstance, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunkdisplay">{"MapChunkDisplay"}</Link>{" displayPrefab, int renderIndex)"}</code> | Spawns a display for a plugin's layer and returns its render coroutine, or null without a prefab. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Aborts a running generation thread and releases its layers and displays. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Waits for the generation thread to finish, then turns itself off and asks the generator to render the chunk. |

</details>

## Used in

Members of other types that take, return or hold a `MapChunk`:

[`ChunkThread.chunk`](/mod/game-api/types/alta-world-generation/chunkthread#m-chunk), [`ChunkThread.ChunkThread`](/mod/game-api/types/alta-world-generation/chunkthread#m-ctor), [`GenerationBase.chunks`](/mod/game-api/types/alta-world-generation/generationbase#m-chunks), [`GenerationBase.Chunks`](/mod/game-api/types/alta-world-generation/generationbase#m-chunks-2), [`GenerationBase.Render`](/mod/game-api/types/alta-world-generation/generationbase#m-render), [`GenerationBase.rendering`](/mod/game-api/types/alta-world-generation/generationbase#m-rendering), [`GenerationBase.StartRendering`](/mod/game-api/types/alta-world-generation/generationbase#m-startrendering), [`IGenerator.StartRendering`](/mod/game-api/types/alta-world-generation/igenerator#m-startrendering), [`MapChunkDisplay.chunk`](/mod/game-api/types/alta-world-generation/mapchunkdisplay#m-chunk), [`MapChunkDisplay.Initialize`](/mod/game-api/types/alta-world-generation/mapchunkdisplay#m-initialize), [`MapChunkLayer.Chunk`](/mod/game-api/types/alta-world-generation/mapchunklayer#m-chunk), [`MapChunkLayer.MapChunkLayer`](/mod/game-api/types/alta-world-generation/mapchunklayer#m-ctor), [`MarchingCubesChunkDisplay.GetMesh`](/mod/game-api/types/alta-world-generation/marchingcubeschunkdisplay#m-getmesh), [`MarchingCubesPlugin.GetMesh`](/mod/game-api/types/alta-world-generation/marchingcubesplugin#m-getmesh), [`MarchingCubesPlugin.meshes`](/mod/game-api/types/alta-world-generation/marchingcubesplugin#m-meshes), [`MarchingCubesPlugin.Modify`](/mod/game-api/types/alta-world-generation/marchingcubesplugin#m-modify), [`Plugin.Modify`](/mod/game-api/types/alta-world-generation/plugin#m-modify), [`Plugin.Render`](/mod/game-api/types/alta-world-generation/plugin#m-render), [`PluginInstance.ModifyChunk`](/mod/game-api/types/alta-world-generation/plugininstance#m-modifychunk), [`PluginInstance.RenderChunk`](/mod/game-api/types/alta-world-generation/plugininstance#m-renderchunk), [`IPartInstance.Modify`](/mod/game-api/types/alta-world-generation/ipartinstance#m-modify), [`MapGeneratorPartInstance<T>.Modify`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-modify), [`RoomFixPlugin.Render`](/mod/game-api/types/alta-world-generation/roomfixplugin#m-render).

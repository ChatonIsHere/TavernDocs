---
title: "MapChunk"
description: "class MapChunk in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapChunk

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapChunk()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displays" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/mapchunkdisplay">{"MapChunkDisplay"}</Link>{"> displays"}</code> |  |
| <Link id="m-generationthread" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/chunkthread">{"ChunkThread"}</Link>{" generationThread"}</code> |  |
| <Link id="m-layers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{", "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{"> layers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displays-2" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/mapchunkdisplay">{"MapChunkDisplay"}</Link>{"> Displays { get; }"}</code> |  |
| <Link id="m-generator" /><code><Link to="/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" Generator { get; private set; }"}</code> |  |
| <Link id="m-offx" /><code>{"int OffX { get; private set; }"}</code> |  |
| <Link id="m-offz" /><code>{"int OffZ { get; private set; }"}</code> |  |
| <Link id="m-rendergenerator" /><code><Link to="/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" RenderGenerator { get; private set; }"}</code> |  |
| <Link id="m-requestcount" /><code>{"int RequestCount { get; set; }"}</code> |  |
| <Link id="m-x" /><code>{"int X { get; private set; }"}</code> |  |
| <Link id="m-z" /><code>{"int Z { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlayer" /><code>{"void AddLayer("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" pluginInstance)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-createallnonzerolists" /><code>{"void CreateAllNonZeroLists()"}</code> |  |
| <Link id="m-getlayer" /><code><Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" GetLayer("}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" plugin)"}</code> |  |
| <Link id="m-initialize" /><code><Link to="/game-api/types/alta-world-generation/chunkthread">{"ChunkThread"}</Link>{" Initialize("}<Link to="/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" generator, int x, int z)"}</code> |  |
| <Link id="m-prepare" /><code>{"void Prepare()"}</code> |  |
| <Link id="m-render" /><code>{"IEnumerator Render("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" pluginInstance, "}<Link to="/game-api/types/alta-world-generation/mapchunkdisplay">{"MapChunkDisplay"}</Link>{" displayPrefab, int renderIndex)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `MapChunk`:

[`ChunkThread.chunk`](/game-api/types/alta-world-generation/chunkthread#m-chunk), [`ChunkThread.ChunkThread`](/game-api/types/alta-world-generation/chunkthread#m-ctor), [`GenerationBase.chunks`](/game-api/types/alta-world-generation/generationbase#m-chunks), [`GenerationBase.Chunks`](/game-api/types/alta-world-generation/generationbase#m-chunks-2), [`GenerationBase.Render`](/game-api/types/alta-world-generation/generationbase#m-render), [`GenerationBase.rendering`](/game-api/types/alta-world-generation/generationbase#m-rendering), [`GenerationBase.StartRendering`](/game-api/types/alta-world-generation/generationbase#m-startrendering), [`IGenerator.StartRendering`](/game-api/types/alta-world-generation/igenerator#m-startrendering), [`MapChunkDisplay.chunk`](/game-api/types/alta-world-generation/mapchunkdisplay#m-chunk), [`MapChunkDisplay.Initialize`](/game-api/types/alta-world-generation/mapchunkdisplay#m-initialize), [`MapChunkLayer.Chunk`](/game-api/types/alta-world-generation/mapchunklayer#m-chunk), [`MapChunkLayer.MapChunkLayer`](/game-api/types/alta-world-generation/mapchunklayer#m-ctor), [`MarchingCubesChunkDisplay.GetMesh`](/game-api/types/alta-world-generation/marchingcubeschunkdisplay#m-getmesh), [`MarchingCubesPlugin.GetMesh`](/game-api/types/alta-world-generation/marchingcubesplugin#m-getmesh), [`MarchingCubesPlugin.meshes`](/game-api/types/alta-world-generation/marchingcubesplugin#m-meshes), [`MarchingCubesPlugin.Modify`](/game-api/types/alta-world-generation/marchingcubesplugin#m-modify), [`Plugin.Modify`](/game-api/types/alta-world-generation/plugin#m-modify), [`Plugin.Render`](/game-api/types/alta-world-generation/plugin#m-render), [`PluginInstance.ModifyChunk`](/game-api/types/alta-world-generation/plugininstance#m-modifychunk), [`PluginInstance.RenderChunk`](/game-api/types/alta-world-generation/plugininstance#m-renderchunk), [`IPartInstance.Modify`](/game-api/types/alta-world-generation/ipartinstance#m-modify), [`MapGeneratorPartInstance<T>.Modify`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-modify), [`RoomFixPlugin.Render`](/game-api/types/alta-world-generation/roomfixplugin#m-render).

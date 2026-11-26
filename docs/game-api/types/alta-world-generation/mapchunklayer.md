---
title: "MapChunkLayer"
description: "A 3D grid of float values for one cave generator plugin over one map chunk, with an overflow border around the chunk on the horizontal axes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapChunkLayer

A **class** in `Root.Township`, `Alta.Caves`.

A 3D grid of float values for one cave generator plugin over one map chunk, with an overflow border around the chunk on the horizontal axes. Plugin parts read and write it with the indexer.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `IDisposable`
- **Nested types** [`Value`](/game-api/types/alta-world-generation/mapchunklayer-value)
- **Attributes** `DefaultMember`
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MapChunkLayer("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isnonzerolistcreated" /><code>{"private bool isNonZeroListCreated"}</code> | Copied from the plugin. When false, `CreateAllNonZeroList` returns null. |
| <Link id="m-values" /><code>{"private float[,,] values"}</code> | The layer's grid of values, padded by `LayerOverflowXZ` on X and Z. The indexer applies the offset. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" Chunk { get; }"}</code> | The map chunk the layer belongs to. |
| <Link id="m-item" /><code>{"float this[int x, int y, int z] { get; set; }"}</code> | Value at x, y, z. X and z can go from `MinXZ` to `MaxXZ` (into the overflow border). |
| <Link id="m-layeroverflowxz" /><code>{"int LayerOverflowXZ { get; }"}</code> | Width of the extra border around the chunk, from the plugin settings. |
| <Link id="m-maxxz" /><code>{"int MaxXZ { get; }"}</code> | Exclusive upper bound for x and z: chunk size plus the overflow. |
| <Link id="m-maxy" /><code>{"int MaxY { get; }"}</code> | Exclusive upper bound for y: the plugin's layer height. |
| <Link id="m-minxz" /><code>{"int MinXZ { get; }"}</code> | Lowest x and z index: minus the overflow. |
| <Link id="m-miny" /><code>{"int MinY { get; }"}</code> | Lowest y index: 0. |
| <Link id="m-nonzero" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/mapchunklayer-value">{"MapChunkLayer.Value"}</Link>{"> NonZero { get; private set; }"}</code> | The list from the last `CreateAllNonZeroList` call. |
| <Link id="m-plugin" /><code><Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" Plugin { get; }"}</code> | The plugin instance that owns this layer. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createallnonzerolist" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/mapchunklayer-value">{"MapChunkLayer.Value"}</Link>{"> CreateAllNonZeroList()"}</code> | Builds and stores the list of cells above 0, if the plugin asks for one. Returns null otherwise. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Drops the value grid. |

## Used in

Members of other types that take, return or hold a `MapChunkLayer`:

[`ConstrainedSpawnerDisplay.Spawn`](/game-api/types/alta-world-generation/constrainedspawnerdisplay#m-spawn), [`GameObjectDisplay.floor`](/game-api/types/alta-world-generation/gameobjectdisplay#m-floor), [`PolygonChunkDisplay.GetDepth`](/game-api/types/alta-world-generation/polygonchunkdisplay#m-getdepth), [`WallAlignedDisplay.floor`](/game-api/types/alta-world-generation/wallaligneddisplay#m-floor), [`WallAlignedDisplay.floorPlanLayer`](/game-api/types/alta-world-generation/wallaligneddisplay#m-floorplanlayer), [`MapChunk.GetLayer`](/game-api/types/alta-world-generation/mapchunk#m-getlayer), [`MapChunk.layers`](/game-api/types/alta-world-generation/mapchunk#m-layers), [`MapChunkDisplay.Initialize`](/game-api/types/alta-world-generation/mapchunkdisplay#m-initialize), [`MapChunkDisplay.layer`](/game-api/types/alta-world-generation/mapchunkdisplay#m-layer), [`ApplyElementInstance.Modify`](/game-api/types/alta-world-generation/applyelementinstance#m-modify), [`BlobEdgeInstance.Modify`](/game-api/types/alta-world-generation/blobedgeinstance#m-modify), [`BlurInstance.Modify`](/game-api/types/alta-world-generation/blurinstance#m-modify), [`CellularAutomataInstance.Modify`](/game-api/types/alta-world-generation/cellularautomatainstance#m-modify), [`CircleInstance.Modify`](/game-api/types/alta-world-generation/circleinstance#m-modify), [`CopyPartInstance.Modify`](/game-api/types/alta-world-generation/copypartinstance#m-modify), [`CurveInstance.Modify`](/game-api/types/alta-world-generation/curveinstance#m-modify), [`LineDraw.Cylinder3D`](/game-api/types/alta-world-generation/linedraw#m-cylinder3d), [`LineDraw.ThickLine2D`](/game-api/types/alta-world-generation/linedraw#m-thickline2d), [`LogRangeInstance.Modify`](/game-api/types/alta-world-generation/lograngeinstance#m-modify), [`MapGeneratorPartInstance<T>.Modify`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-modify-2), [`MaskInstance.Modify`](/game-api/types/alta-world-generation/maskinstance#m-modify), [`OperationPartInstance.Modify`](/game-api/types/alta-world-generation/operationpartinstance#m-modify), [`RandomNoiseInstance.Modify`](/game-api/types/alta-world-generation/randomnoiseinstance#m-modify), [`RoofHoleInstance.Modify`](/game-api/types/alta-world-generation/roofholeinstance#m-modify), [`RoomFixesInstance.FloodFill`](/game-api/types/alta-world-generation/roomfixesinstance#m-floodfill), [`RoomFixesInstance.Modify`](/game-api/types/alta-world-generation/roomfixesinstance#m-modify), [`SimplexNoisePartInstance.Modify`](/game-api/types/alta-world-generation/simplexnoisepartinstance#m-modify), [`StretchInstance.Modify`](/game-api/types/alta-world-generation/stretchinstance#m-modify), [`CavePopulationSpawnInformation.CavePopulationSpawnInformation`](/game-api/types/alta-world-generation/cavepopulationspawninformation#m-ctor), [`CavePopulationSpawnInformation.floor`](/game-api/types/alta-world-generation/cavepopulationspawninformation#m-floor), [`CavePopulationSpawnInformation.layer`](/game-api/types/alta-world-generation/cavepopulationspawninformation#m-layer), [`SpawnAreaDisplay.Spawn`](/game-api/types/alta-world-generation/spawnareadisplay#m-spawn), [`SpawnPointsDisplay.Spawn`](/game-api/types/alta-world-generation/spawnpointsdisplay#m-spawn).

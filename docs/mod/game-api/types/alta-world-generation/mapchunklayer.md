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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `IDisposable`
- **Nested types** [`Value`](/mod/game-api/types/alta-world-generation/mapchunklayer-value)
- **Attributes** `DefaultMember`
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapChunkLayer("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates a `MapChunkLayer` from `chunk` and `plugin`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isnonzerolistcreated" /><code>{"private bool isNonZeroListCreated"}</code> | <span className="api-desc">Copied from the plugin. When false, `CreateAllNonZeroList` returns null.</span> |
| <Link id="m-values" /><code>{"private float[,,] values"}</code> | <span className="api-desc">The layer's grid of values, padded by `LayerOverflowXZ` on X and Z. The indexer applies the offset.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" Chunk { get; }"}</code> | <span className="api-desc">The map chunk the layer belongs to.</span> |
| <Link id="m-item" /><code>{"float this[int x, int y, int z] { get; set; }"}</code> | <span className="api-desc">Value at x, y, z. X and z can go from `MinXZ` to `MaxXZ` (into the overflow border).</span> |
| <Link id="m-layeroverflowxz" /><code>{"int LayerOverflowXZ { get; }"}</code> | <span className="api-desc">Width of the extra border around the chunk, from the plugin settings.</span> |
| <Link id="m-maxxz" /><code>{"int MaxXZ { get; }"}</code> | <span className="api-desc">Exclusive upper bound for x and z: chunk size plus the overflow.</span> |
| <Link id="m-maxy" /><code>{"int MaxY { get; }"}</code> | <span className="api-desc">Exclusive upper bound for y: the plugin's layer height.</span> |
| <Link id="m-minxz" /><code>{"int MinXZ { get; }"}</code> | <span className="api-desc">Lowest x and z index: minus the overflow.</span> |
| <Link id="m-miny" /><code>{"int MinY { get; }"}</code> | <span className="api-desc">Lowest y index: 0.</span> |
| <Link id="m-nonzero" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer-value">{"MapChunkLayer.Value"}</Link>{"> NonZero { get; private set; }"}</code> | <span className="api-desc">The list from the last `CreateAllNonZeroList` call.</span> |
| <Link id="m-plugin" /><code><Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" Plugin { get; }"}</code> | <span className="api-desc">The plugin instance that owns this layer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createallnonzerolist" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer-value">{"MapChunkLayer.Value"}</Link>{"> CreateAllNonZeroList()"}</code> | <span className="api-desc">Builds and stores the list of cells above 0, if the plugin asks for one. Returns null otherwise.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Drops the value grid.</span> |

## Used in

Members of other types that take, return or hold a `MapChunkLayer`:

<div className="api-used-in">

[`ConstrainedSpawnerDisplay.Spawn`](/mod/game-api/types/alta-world-generation/constrainedspawnerdisplay#m-spawn), [`GameObjectDisplay.floor`](/mod/game-api/types/alta-world-generation/gameobjectdisplay#m-floor), [`PolygonChunkDisplay.GetDepth`](/mod/game-api/types/alta-world-generation/polygonchunkdisplay#m-getdepth), [`WallAlignedDisplay.floor`](/mod/game-api/types/alta-world-generation/wallaligneddisplay#m-floor), [`WallAlignedDisplay.floorPlanLayer`](/mod/game-api/types/alta-world-generation/wallaligneddisplay#m-floorplanlayer), [`MapChunk.GetLayer`](/mod/game-api/types/alta-world-generation/mapchunk#m-getlayer), [`MapChunk.layers`](/mod/game-api/types/alta-world-generation/mapchunk#m-layers), [`MapChunkDisplay.Initialize`](/mod/game-api/types/alta-world-generation/mapchunkdisplay#m-initialize), [`MapChunkDisplay.layer`](/mod/game-api/types/alta-world-generation/mapchunkdisplay#m-layer), [`ApplyElementInstance.Modify`](/mod/game-api/types/alta-world-generation/applyelementinstance#m-modify), [`BlobEdgeInstance.Modify`](/mod/game-api/types/alta-world-generation/blobedgeinstance#m-modify), [`BlurInstance.Modify`](/mod/game-api/types/alta-world-generation/blurinstance#m-modify), [`CellularAutomataInstance.Modify`](/mod/game-api/types/alta-world-generation/cellularautomatainstance#m-modify), [`CircleInstance.Modify`](/mod/game-api/types/alta-world-generation/circleinstance#m-modify), [`CopyPartInstance.Modify`](/mod/game-api/types/alta-world-generation/copypartinstance#m-modify), [`CurveInstance.Modify`](/mod/game-api/types/alta-world-generation/curveinstance#m-modify), [`LineDraw.Cylinder3D`](/mod/game-api/types/alta-world-generation/linedraw#m-cylinder3d), [`LineDraw.ThickLine2D`](/mod/game-api/types/alta-world-generation/linedraw#m-thickline2d), [`LogRangeInstance.Modify`](/mod/game-api/types/alta-world-generation/lograngeinstance#m-modify), [`MapGeneratorPartInstance<T>.Modify`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t#m-modify-2), [`MaskInstance.Modify`](/mod/game-api/types/alta-world-generation/maskinstance#m-modify), [`OperationPartInstance.Modify`](/mod/game-api/types/alta-world-generation/operationpartinstance#m-modify), [`RandomNoiseInstance.Modify`](/mod/game-api/types/alta-world-generation/randomnoiseinstance#m-modify), [`RoofHoleInstance.Modify`](/mod/game-api/types/alta-world-generation/roofholeinstance#m-modify), [`RoomFixesInstance.FloodFill`](/mod/game-api/types/alta-world-generation/roomfixesinstance#m-floodfill), [`RoomFixesInstance.Modify`](/mod/game-api/types/alta-world-generation/roomfixesinstance#m-modify), [`SimplexNoisePartInstance.Modify`](/mod/game-api/types/alta-world-generation/simplexnoisepartinstance#m-modify), [`StretchInstance.Modify`](/mod/game-api/types/alta-world-generation/stretchinstance#m-modify), [`CavePopulationSpawnInformation.CavePopulationSpawnInformation`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-ctor), [`CavePopulationSpawnInformation.floor`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-floor), [`CavePopulationSpawnInformation.layer`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-layer), [`SpawnAreaDisplay.Spawn`](/mod/game-api/types/alta-world-generation/spawnareadisplay#m-spawn), [`SpawnPointsDisplay.Spawn`](/mod/game-api/types/alta-world-generation/spawnpointsdisplay#m-spawn).

</div>

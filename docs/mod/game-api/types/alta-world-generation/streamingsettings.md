---
title: "StreamingSettings"
description: "Cave settings for chunk loading distances, the cave layer prefabs, and the A graph used for cave pathfinding."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamingSettings

A **class** in `Root.Township`, `Alta.Caves`.

Cave settings for chunk loading distances, the cave layer prefabs, and the A* graph used for cave pathfinding. Get it with `CaveSettings<StreamingSettings>.Instance`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`CaveSettings<StreamingSettings>`](/mod/game-api/types/alta-world-generation/cavesettings-t)
- **Derived types** [`StreamingSettings`](/mod/game-api/types/alta-world-generation/streamingsettings), [`StreamingSettings.Create`](/mod/game-api/types/alta-world-generation/streamingsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/streamingsettings-create), [`SpecialLayer`](/mod/game-api/types/alta-world-generation/streamingsettings-speciallayer)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamingSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caveconnectioncost" /><code>{"private float caveConnectionCost"}</code> | Cost of connections between cave layers. Nothing reads it in this build. |
| <Link id="m-cavestreamerprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" caveStreamerPrefab"}</code> | Default network prefab spawned for each cave layer, and always used on a simple server. |
| <Link id="m-cellsize" /><code>{"private float cellSize"}</code> | Cave A* recast graph cell size. |
| <Link id="m-characterradius" /><code>{"private float characterRadius"}</code> | Cave A* recast graph agent radius. |
| <Link id="m-colliderrasterizedetail" /><code>{"private float colliderRasterizeDetail"}</code> | Cave A* recast graph collider detail. |
| <Link id="m-contourmaxerror" /><code>{"private float contourMaxError"}</code> | Cave A* recast graph contour error. |
| <Link id="m-dynamicchunkloadradius" /><code>{"private float dynamicChunkLoadRadius"}</code> | Normal client: default load radius for dynamic chunks, scaled by `DynamicLoadDistanceMultiplier`. |
| <Link id="m-loadbounds" /><code>{"private Vector3 loadBounds"}</code> | Optimised client: box size around the player that loads chunks. |
| <Link id="m-mask" /><code>{"private LayerMask mask"}</code> | Layers the cave A* recast graph rasterizes. |
| <Link id="m-maxedgelength" /><code>{"private float maxEdgeLength"}</code> | Cave A* recast graph maximum edge length. |
| <Link id="m-maxslope" /><code>{"private float maxSlope"}</code> | Cave A* recast graph maximum walkable slope. |
| <Link id="m-minregionsize" /><code>{"private float minRegionSize"}</code> | Cave A* recast graph minimum region size. |
| <Link id="m-rasterizecolliders" /><code>{"private bool rasterizeColliders"}</code> | Whether the cave A* graph uses colliders. On by default. |
| <Link id="m-rasterizemeshes" /><code>{"private bool rasterizeMeshes"}</code> | Whether the cave A* graph uses meshes. |
| <Link id="m-rasterizeterrain" /><code>{"private bool rasterizeTerrain"}</code> | Whether the cave A* graph uses terrain. |
| <Link id="m-speciallayers" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/streamingsettings-speciallayer">{"StreamingSettings.SpecialLayer"}</Link>{"[] specialLayers"}</code> | Layers that spawn a different prefab instead of `caveStreamerPrefab`. |
| <Link id="m-staticchunkloadradius" /><code>{"private float staticChunkLoadRadius"}</code> | Normal client: default load radius for static chunks, scaled by `StaticLoadDistanceMultiplier`. |
| <Link id="m-tilesize" /><code>{"private int tileSize"}</code> | Cave A* recast graph tile size. |
| <Link id="m-unloadbounds" /><code>{"private Vector3 unloadBounds"}</code> | Optimised client: box size around the player outside which chunks unload. |
| <Link id="m-usetiles" /><code>{"private bool useTiles"}</code> | Whether the cave A* recast graph is tiled. |
| <Link id="m-walkableclimb" /><code>{"private float walkableClimb"}</code> | Cave A* recast graph step height. |
| <Link id="m-walkableheight" /><code>{"private float walkableHeight"}</code> | Cave A* recast graph agent height. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-caveconnectioncost-2" /><code>{"float CaveConnectionCost { get; }"}</code> | Cost of the connections between cave layers. Not read anywhere else in this build. |
| <Link id="m-cavestreamerprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" CaveStreamerPrefab { get; }"}</code> | The cave layer prefab used by default and always on simple servers. |
| <Link id="m-dynamicchunkloadradius-2" /><code>{"float DynamicChunkLoadRadius { get; }"}</code> | Default dynamic load radius of a location chunk. |
| <Link id="m-dynamicloaddistancemultiplier" /><code>{"float DynamicLoadDistanceMultiplier { get; set; }"}</code> | Multiplies every chunk's dynamic load strength. Set by the `dynamic-load-multiplier` command. |
| <Link id="m-loadbounds-2" /><code>{"Vector3 LoadBounds { get; set; }"}</code> | Box size for loading chunks on an optimised client. |
| <Link id="m-speciallayers-2" /><code><Link to="/mod/game-api/types/alta-world-generation/streamingsettings-speciallayer">{"StreamingSettings.SpecialLayer"}</Link>{"[] SpecialLayers { get; }"}</code> | Cave layers that use their own prefab, by layer number. |
| <Link id="m-staticchunkloadradius-2" /><code>{"float StaticChunkLoadRadius { get; }"}</code> | Default static load radius of a location chunk. |
| <Link id="m-staticloaddistancemultiplier" /><code>{"float StaticLoadDistanceMultiplier { get; set; }"}</code> | Multiplies every chunk's static load strength. Set by the `static-load-multiplier` command. |
| <Link id="m-unloadbounds-2" /><code>{"Vector3 UnloadBounds { get; set; }"}</code> | Box size for unloading chunks on an optimised client. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcavepathfindinggraph" /><code>{"RecastGraph GetCavePathfindingGraph()"}</code> | Adds a new recast graph to A* with the cave pathfinding settings and returns it. |

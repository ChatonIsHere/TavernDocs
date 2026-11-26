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
| <Link id="m-ctor" /><code>{"StreamingSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caveconnectioncost" /><code>{"private float caveConnectionCost"}</code> | <span className="api-desc">Cost of connections between cave layers. Nothing reads it in this build.</span> |
| <Link id="m-cavestreamerprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" caveStreamerPrefab"}</code> | <span className="api-desc">Default network prefab spawned for each cave layer, and always used on a simple server.</span> |
| <Link id="m-cellsize" /><code>{"private float cellSize"}</code> | <span className="api-desc">Cave A* recast graph cell size.</span> |
| <Link id="m-characterradius" /><code>{"private float characterRadius"}</code> | <span className="api-desc">Cave A* recast graph agent radius.</span> |
| <Link id="m-colliderrasterizedetail" /><code>{"private float colliderRasterizeDetail"}</code> | <span className="api-desc">Cave A* recast graph collider detail.</span> |
| <Link id="m-contourmaxerror" /><code>{"private float contourMaxError"}</code> | <span className="api-desc">Cave A* recast graph contour error.</span> |
| <Link id="m-dynamicchunkloadradius" /><code>{"private float dynamicChunkLoadRadius"}</code> | <span className="api-desc">Normal client: default load radius for dynamic chunks, scaled by `DynamicLoadDistanceMultiplier`.</span> |
| <Link id="m-loadbounds" /><code>{"private Vector3 loadBounds"}</code> | <span className="api-desc">Optimised client: box size around the player that loads chunks.</span> |
| <Link id="m-mask" /><code>{"private LayerMask mask"}</code> | <span className="api-desc">Layers the cave A* recast graph rasterizes.</span> |
| <Link id="m-maxedgelength" /><code>{"private float maxEdgeLength"}</code> | <span className="api-desc">Cave A* recast graph maximum edge length.</span> |
| <Link id="m-maxslope" /><code>{"private float maxSlope"}</code> | <span className="api-desc">Cave A* recast graph maximum walkable slope.</span> |
| <Link id="m-minregionsize" /><code>{"private float minRegionSize"}</code> | <span className="api-desc">Cave A* recast graph minimum region size.</span> |
| <Link id="m-rasterizecolliders" /><code>{"private bool rasterizeColliders"}</code> | <span className="api-desc">Whether the cave A* graph uses colliders. On by default.</span> |
| <Link id="m-rasterizemeshes" /><code>{"private bool rasterizeMeshes"}</code> | <span className="api-desc">Whether the cave A* graph uses meshes.</span> |
| <Link id="m-rasterizeterrain" /><code>{"private bool rasterizeTerrain"}</code> | <span className="api-desc">Whether the cave A* graph uses terrain.</span> |
| <Link id="m-speciallayers" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/streamingsettings-speciallayer">{"StreamingSettings.SpecialLayer"}</Link>{"[] specialLayers"}</code> | <span className="api-desc">Layers that spawn a different prefab instead of `caveStreamerPrefab`.</span> |
| <Link id="m-staticchunkloadradius" /><code>{"private float staticChunkLoadRadius"}</code> | <span className="api-desc">Normal client: default load radius for static chunks, scaled by `StaticLoadDistanceMultiplier`.</span> |
| <Link id="m-tilesize" /><code>{"private int tileSize"}</code> | <span className="api-desc">Cave A* recast graph tile size.</span> |
| <Link id="m-unloadbounds" /><code>{"private Vector3 unloadBounds"}</code> | <span className="api-desc">Optimised client: box size around the player outside which chunks unload.</span> |
| <Link id="m-usetiles" /><code>{"private bool useTiles"}</code> | <span className="api-desc">Whether the cave A* recast graph is tiled.</span> |
| <Link id="m-walkableclimb" /><code>{"private float walkableClimb"}</code> | <span className="api-desc">Cave A* recast graph step height.</span> |
| <Link id="m-walkableheight" /><code>{"private float walkableHeight"}</code> | <span className="api-desc">Cave A* recast graph agent height.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-caveconnectioncost-2" /><code>{"float CaveConnectionCost { get; }"}</code> | <span className="api-desc">Cost of the connections between cave layers. Not read anywhere else in this build.</span> |
| <Link id="m-cavestreamerprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" CaveStreamerPrefab { get; }"}</code> | <span className="api-desc">The cave layer prefab used by default and always on simple servers.</span> |
| <Link id="m-dynamicchunkloadradius-2" /><code>{"float DynamicChunkLoadRadius { get; }"}</code> | <span className="api-desc">Default dynamic load radius of a location chunk.</span> |
| <Link id="m-dynamicloaddistancemultiplier" /><code>{"float DynamicLoadDistanceMultiplier { get; set; }"}</code> | <span className="api-desc">Multiplies every chunk's dynamic load strength. Set by the `dynamic-load-multiplier` command.</span> |
| <Link id="m-loadbounds-2" /><code>{"Vector3 LoadBounds { get; set; }"}</code> | <span className="api-desc">Box size for loading chunks on an optimised client.</span> |
| <Link id="m-speciallayers-2" /><code><Link to="/mod/game-api/types/alta-world-generation/streamingsettings-speciallayer">{"StreamingSettings.SpecialLayer"}</Link>{"[] SpecialLayers { get; }"}</code> | <span className="api-desc">Cave layers that use their own prefab, by layer number.</span> |
| <Link id="m-staticchunkloadradius-2" /><code>{"float StaticChunkLoadRadius { get; }"}</code> | <span className="api-desc">Default static load radius of a location chunk.</span> |
| <Link id="m-staticloaddistancemultiplier" /><code>{"float StaticLoadDistanceMultiplier { get; set; }"}</code> | <span className="api-desc">Multiplies every chunk's static load strength. Set by the `static-load-multiplier` command.</span> |
| <Link id="m-unloadbounds-2" /><code>{"Vector3 UnloadBounds { get; set; }"}</code> | <span className="api-desc">Box size for unloading chunks on an optimised client.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcavepathfindinggraph" /><code>{"RecastGraph GetCavePathfindingGraph()"}</code> | <span className="api-desc">Adds a new recast graph to A* with the cave pathfinding settings and returns it.</span> |

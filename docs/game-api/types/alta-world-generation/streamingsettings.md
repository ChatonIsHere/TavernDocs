---
title: "StreamingSettings"
description: "class StreamingSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamingSettings

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`CaveSettings<StreamingSettings>`](/game-api/types/alta-world-generation/cavesettings-t)
- **Derived types** [`StreamingSettings`](/game-api/types/alta-world-generation/streamingsettings), [`StreamingSettings.Create`](/game-api/types/alta-world-generation/streamingsettings-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/streamingsettings-create), [`SpecialLayer`](/game-api/types/alta-world-generation/streamingsettings-speciallayer)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamingSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-caveconnectioncost" /><code>{"private float caveConnectionCost"}</code> |  |
| <Link id="m-cavestreamerprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" caveStreamerPrefab"}</code> |  |
| <Link id="m-cellsize" /><code>{"private float cellSize"}</code> |  |
| <Link id="m-characterradius" /><code>{"private float characterRadius"}</code> |  |
| <Link id="m-colliderrasterizedetail" /><code>{"private float colliderRasterizeDetail"}</code> |  |
| <Link id="m-contourmaxerror" /><code>{"private float contourMaxError"}</code> |  |
| <Link id="m-dynamicchunkloadradius" /><code>{"private float dynamicChunkLoadRadius"}</code> |  |
| <Link id="m-loadbounds" /><code>{"private Vector3 loadBounds"}</code> |  |
| <Link id="m-mask" /><code>{"private LayerMask mask"}</code> |  |
| <Link id="m-maxedgelength" /><code>{"private float maxEdgeLength"}</code> |  |
| <Link id="m-maxslope" /><code>{"private float maxSlope"}</code> |  |
| <Link id="m-minregionsize" /><code>{"private float minRegionSize"}</code> |  |
| <Link id="m-rasterizecolliders" /><code>{"private bool rasterizeColliders"}</code> |  |
| <Link id="m-rasterizemeshes" /><code>{"private bool rasterizeMeshes"}</code> |  |
| <Link id="m-rasterizeterrain" /><code>{"private bool rasterizeTerrain"}</code> |  |
| <Link id="m-speciallayers" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/streamingsettings-speciallayer">{"StreamingSettings.SpecialLayer"}</Link>{"[] specialLayers"}</code> |  |
| <Link id="m-staticchunkloadradius" /><code>{"private float staticChunkLoadRadius"}</code> |  |
| <Link id="m-tilesize" /><code>{"private int tileSize"}</code> |  |
| <Link id="m-unloadbounds" /><code>{"private Vector3 unloadBounds"}</code> |  |
| <Link id="m-usetiles" /><code>{"private bool useTiles"}</code> |  |
| <Link id="m-walkableclimb" /><code>{"private float walkableClimb"}</code> |  |
| <Link id="m-walkableheight" /><code>{"private float walkableHeight"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-caveconnectioncost-2" /><code>{"float CaveConnectionCost { get; }"}</code> |  |
| <Link id="m-cavestreamerprefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" CaveStreamerPrefab { get; }"}</code> |  |
| <Link id="m-dynamicchunkloadradius-2" /><code>{"float DynamicChunkLoadRadius { get; }"}</code> |  |
| <Link id="m-dynamicloaddistancemultiplier" /><code>{"float DynamicLoadDistanceMultiplier { get; set; }"}</code> |  |
| <Link id="m-loadbounds-2" /><code>{"Vector3 LoadBounds { get; set; }"}</code> |  |
| <Link id="m-speciallayers-2" /><code><Link to="/game-api/types/alta-world-generation/streamingsettings-speciallayer">{"StreamingSettings.SpecialLayer"}</Link>{"[] SpecialLayers { get; }"}</code> |  |
| <Link id="m-staticchunkloadradius-2" /><code>{"float StaticChunkLoadRadius { get; }"}</code> |  |
| <Link id="m-staticloaddistancemultiplier" /><code>{"float StaticLoadDistanceMultiplier { get; set; }"}</code> |  |
| <Link id="m-unloadbounds-2" /><code>{"Vector3 UnloadBounds { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcavepathfindinggraph" /><code>{"RecastGraph GetCavePathfindingGraph()"}</code> |  |

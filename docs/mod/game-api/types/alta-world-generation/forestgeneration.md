---
title: "ForestGeneration"
description: "A forest's generated layout: outline, entrances and a path graph of nodes, edges and triangular spaces, plus lookups by chunk and grid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestGeneration

A **class** in `Root.Township`, `Alta.Forests`.

A forest's generated layout: outline, entrances and a path graph of nodes, edges and triangular spaces, plus lookups by chunk and grid. Cached as an `ICacheable`; get it from the forest generator's `GetGenerationAsync` or `GetGenerated`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`ICacheable`](/mod/game-api/types/alta-world/icacheable)
- **Documented in** [Forest](/mod/game-api/world/forest#forestgeneration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestGeneration()"}</code> | Creates a `ForestGeneration` with default values. |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-area" /><code>{"private float area"}</code> | Backing field for `Area`: the area inside the outline, worked out when the perimeter is triangulated. |
| <Link id="m-chunkedges" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{">> chunkEdges"}</code> | Edges grouped by the location chunk that holds their midpoint; read by `GetEdgesWithinChunk`. |
| <Link id="m-chunknodes" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{">> chunkNodes"}</code> | Nodes grouped by the location chunk that holds them; read by `GetNodesWithinChunk`. |
| <Link id="m-delaunaymesh" /><code>{"private Mesh delaunayMesh"}</code> | Backing field for `Delaunay`: the Delaunay triangulation of the node positions, rebuilt by `UpdateDelaunay`. |
| <Link id="m-edges" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> edges"}</code> | Backing field for `Edges` and `WorkingEdges`: the paths between nodes. |
| <Link id="m-entrancenodes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> entranceNodes"}</code> | Backing field for `EntranceNodes`: the first nodes, one for each entrance position. |
| <Link id="m-entrancepositions" /><code>{"private Vector3[] entrancePositions"}</code> | Backing field for `Entrances`: world positions of the forest entrances. |
| <Link id="m-groupsizex" /><code>{"private uint groupSizeX"}</code> | Width in world units of one cell of the lookup grid. |
| <Link id="m-groupsizez" /><code>{"private uint groupSizeZ"}</code> | Depth in world units of one cell of the lookup grid. |
| <Link id="m-indices" /><code>{"private int[] indices"}</code> | Backing field for `OutlineIndices`: triangle indices of the triangulated perimeter, used by `Contains`. |
| <Link id="m-lastresult" /><code>{"private Otri lastResult"}</code> | Triangle found by the last `GetSpace` call; the next search starts from it. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-nodes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> nodes"}</code> | Backing field for `Nodes` and `WorkingNodes`: the forest's path nodes. |
| <Link id="m-noise" /><code>{"private "}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise"}</code> | Backing field for `SimplexNoise`, seeded from `Seed` plus one in `GenerateNoise`. |
| <Link id="m-outlinepositions" /><code>{"private Vector3[] outlinePositions"}</code> | Backing field for `Outline`: world positions of the forest border points. |
| <Link id="m-perimeter" /><code>{"private Vector2[] perimeter"}</code> | The outline points flattened to XZ, used for containment and border distance checks. |
| <Link id="m-seed" /><code>{"private uint seed"}</code> | Backing field for `Seed`; saved with the forest. |
| <Link id="m-sortededges" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{">[,] sortedEdges"}</code> | 51 by 51 lookup grid of the edges near each cell, filled by `SortNodes` and used by `EvaluateNearest`. |
| <Link id="m-sortednodes" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{">[,] sortedNodes"}</code> | 51 by 51 lookup grid of the nodes near each cell, filled by `SortNodes`. |
| <Link id="m-spaces" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/space">{"Space"}</Link>{"> spaces"}</code> | Backing field for `WorkingSpaces` (and `Spaces`, which skips nulls): triangles between three nodes, matched to Delaunay triangles by index. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-area-2" /><code>{"float Area { get; }"}</code> | Area of the forest outline, worked out when the outline is set. |
| <Link id="m-biomespheremanager" /><code><Link to="/mod/game-api/types/global-a-b/biomespheremanager">{"BiomeSphereManager"}</Link>{" "}<Link to="/mod/game-api/types/global-a-b/biomespheremanager">{"BiomeSphereManager"}</Link>{" { get; }"}</code> | The biome areas inside the forest. Saved with the layout. |
| <Link id="m-bounds" /><code>{"Bounds Bounds { get; private set; }"}</code> | Bounds around the outline points, grown by 1 unit. |
| <Link id="m-delaunay" /><code>{"Mesh Delaunay { get; }"}</code> | The TriangleNet triangulation of the node positions, used by `GetSpace` and `GetNodeHeight`. |
| <Link id="m-edges-2" /><code>{"IReadOnlyList<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> Edges { get; }"}</code> | All path edges between nodes. |
| <Link id="m-entrancenodes-2" /><code>{"ICollection<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> EntranceNodes { get; }"}</code> | The nodes at the forest entrances, set by `CollectEntrances`. |
| <Link id="m-entrances" /><code>{"ICollection<Vector3> Entrances { get; }"}</code> | World positions of the entrance points. |
| <Link id="m-generator" /><code><Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" Generator { get; set; }"}</code> | The `ForestGenerator` this layout belongs to. |
| <Link id="m-longestpath" /><code>{"float LongestPath { get; private set; }"}</code> | Not set anywhere in this build, so always 0. |
| <Link id="m-nodecount" /><code>{"int NodeCount { get; }"}</code> | How many path nodes there are. |
| <Link id="m-nodes-2" /><code>{"IReadOnlyList<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> Nodes { get; }"}</code> | All path nodes, read-only. |
| <Link id="m-outline" /><code>{"ICollection<Vector3> Outline { get; }"}</code> | World positions of the outline points. |
| <Link id="m-outlineindices" /><code>{"int[] OutlineIndices { get; }"}</code> | Triangle indices from triangulating the outline. Used by `Contains`. |
| <Link id="m-seed-2" /><code>{"uint Seed { get; }"}</code> | The seed the layout was generated from. |
| <Link id="m-simplexnoise" /><code><Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" "}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" { get; }"}</code> | Noise seeded from the forest seed, set by `GenerateNoise`. |
| <Link id="m-spaces-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/space">{"Space"}</Link>{"> Spaces { get; }"}</code> | The triangular spaces between edges, skipping empty slots. |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> | Cache data version, 1. |
| <Link id="m-workingedges" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> WorkingEdges { get; }"}</code> | The editable edge list, used while generating. |
| <Link id="m-workingnodes" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> WorkingNodes { get; }"}</code> | The editable node list, used while generating. |
| <Link id="m-workingspaces" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/space">{"Space"}</Link>{"> WorkingSpaces { get; }"}</code> | The editable space list (may hold nulls), used while generating. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closestnode" /><code><Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" ClosestNode(Vector2 point, out bool isWithinRadius)"}</code> | Nearest path node to an x/z point from the grid lookup. Stops early and reports when the point is inside a node's radius. |
| <Link id="m-collectentrances" /><code>{"void CollectEntrances()"}</code> | Takes the first nodes (one per entrance position) as the entrance nodes. |
| <Link id="m-contains" /><code>{"bool Contains(Vector2 point)"}</code> | Whether an x/z point is inside the forest outline. |
| <Link id="m-createedge" /><code><Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" CreateEdge("}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" b, "}<Link to="/mod/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" type)"}</code> | Adds an edge of a given type between two nodes, links paths both ways and files it under its location chunk. |
| <Link id="m-distancetobordersquared" /><code>{"float DistanceToBorderSquared(Vector2 point)"}</code> | Squared distance from an x/z point to the nearest outline segment. |
| <Link id="m-distancetopath" /><code>{"float DistanceToPath(Vector2 point, Predicate<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> predicate, bool isIncludingRadius = true)"}</code> | Distance from an x/z point to the nearest edge that passes the filter, checking every edge. Minus the path radius by default. |
| <Link id="m-distancetopath-2" /><code>{"float DistanceToPath(Vector2 point, Predicate<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> predicate, out "}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" nearest, out float nearestProgress, bool isIncludingRadius = true)"}</code> | Distance from an x/z point to the nearest edge that passes the filter, checking every edge. Minus the path radius by default. |
| <Link id="m-distancetopathornode" /><code>{"float DistanceToPathOrNode(Vector2 point, Predicate<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> edgePredicate, out "}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" nearestEdge, out "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" nearestNode, out float nearestProgress, bool isIncludingRadius = true)"}</code> | Like `DistanceToPath` but checks the grid group first and falls back to all edges. The node output is always null. |
| <Link id="m-evaluategroup" /><code>{"void EvaluateGroup(float worldX, float worldZ, out int groupX, out int groupZ)"}</code> | Turns a world x/z into grid group indices, from the terrain offset and the group sizes. |
| <Link id="m-evaluatenearest" /><code><Link to="/mod/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" EvaluateNearest(Vector2 position, int xGroup, int zGroup, Predicate<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> condition)"}</code> | Up to the five nearest edges (passing a filter) to a point within one grid group, nearest first. |
| <Link id="m-generatenoise" /><code>{"void GenerateNoise()"}</code> | Creates the forest's simplex noise from the seed. |
| <Link id="m-getedge" /><code><Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" GetEdge(int fromIndex, int toIndex)"}</code> | The edge between two node indices, or null (with an error) if an index is out of range. |
| <Link id="m-getedgeswithinchunk" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> GetEdgesWithinChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | The edges filed under a location chunk. Empty if none. |
| <Link id="m-getnodeheight" /><code>{"float GetNodeHeight(Vector2 point)"}</code> | Height at an x/z point, blended from the heights of the surrounding nodes. -1 if outside the triangulation. |
| <Link id="m-getnodeswithinchunk" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> GetNodesWithinChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | The nodes filed under a location chunk. Empty if none. |
| <Link id="m-getspace" /><code><Link to="/mod/game-api/types/alta-world-generation/space">{"Space"}</Link>{" GetSpace(Vector2 point)"}</code> | The triangular space containing an x/z point, found through the triangulation. Null if outside. |
| <Link id="m-serializeasync" /><code>{"async Task SerializeAsync(uint version, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the layout for the cache. After reading it rebuilds the chunk and grid lookups, triangulation, entrances and noise. |
| <Link id="m-setgroupsizes" /><code>{"void SetGroupSizes(uint sizeX, uint sizeZ)"}</code> | Sets the x and z size of the grid groups used for lookups. |
| <Link id="m-setoutline" /><code>{"void SetOutline(Transform[] outline, Transform[] entrances)"}</code> | Copies the outline and entrance positions from transforms and works out bounds and area. |
| <Link id="m-setseed" /><code>{"void SetSeed(uint seed)"}</code> | Sets the generation seed. |
| <Link id="m-sortnodes" /><code>{"async Task SortNodes()"}</code> | Async: files nodes and edges under their location chunks and a 51 by 51 grid for fast lookups. Also adds those chunks to `LocationChunk.ContentLocationChunks`. |
| <Link id="m-updatedelaunay" /><code>{"void UpdateDelaunay(List<Vector3> overridePoints = null)"}</code> | Rebuilds the triangulation from the node positions, or from given points. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatebounds" /><code>{"private void EvaluateBounds()"}</code> | Builds `Bounds` from the outline (grown by 1) and triangulates the perimeter into `indices`, storing the forest `area`. |
| <Link id="m-getgroup" /><code>{"private Vector2 GetGroup(int groupX, int groupZ, out float distanceToCornerSquared)"}</code> | Returns the world XZ corner of a lookup grid cell and the squared length of a cell's diagonal. |
| <Link id="m-serializenodes" /><code>{"private void SerializeNodes("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Saves or loads the nodes (position and radius), the edges between them (by node index and type) and the spaces (triangles of three nodes). |
| <Link id="m-serializeoutline" /><code>{"private void SerializeOutline("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Saves or loads the outline and entrance positions; on load it rebuilds the perimeter and bounds. |

</details>

## Used in

Members of other types that take, return or hold a `ForestGeneration`:

[`ForestDefinedAtmosphere.generation`](/mod/game-api/types/alta-world/forestdefinedatmosphere#m-generation), [`CutoutPathModifier.Modify`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier#m-modify), [`CutoutPathModifier.ModifyHeight`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier#m-modifyheight), [`CutoutPathModifier.ModifySplat`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier#m-modifysplat), [`ForestAttributeEvaluator.EvaluateEdge`](/mod/game-api/types/alta-world-generation/forestattributeevaluator#m-evaluateedge), [`ForestAttributeEvaluator.EvaluateNode`](/mod/game-api/types/alta-world-generation/forestattributeevaluator#m-evaluatenode), [`ForestAttributeEvaluator.Modify`](/mod/game-api/types/alta-world-generation/forestattributeevaluator#m-modify), [`ForestBridges.GenerateDynamic`](/mod/game-api/types/alta-world-generation/forestbridges#m-generatedynamic), [`ForestBridges.GenerateGlobal`](/mod/game-api/types/alta-world-generation/forestbridges#m-generateglobal), [`ForestBridges.GenerateStatic`](/mod/game-api/types/alta-world-generation/forestbridges#m-generatestatic), [`ForestCliffEvaluator.EvaluateCliff`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-evaluatecliff), [`ForestCliffEvaluator.IsLegitimateEdge`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-islegitimateedge), [`ForestCliffEvaluator.Modify`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-modify), [`ForestConnectivityIncreaser.Modify`](/mod/game-api/types/alta-world-generation/forestconnectivityincreaser#m-modify), [`ForestEncounters.GenerateDynamic`](/mod/game-api/types/alta-world-generation/forestencounters#m-generatedynamic), [`ForestEncounters.GenerateGlobal`](/mod/game-api/types/alta-world-generation/forestencounters#m-generateglobal), [`ForestEncounters.GenerateStatic`](/mod/game-api/types/alta-world-generation/forestencounters#m-generatestatic), [`ForestFillCore.Forest`](/mod/game-api/types/alta-world-generation/forestfillcore#m-forest), [`ForestFillCore.GenerateDynamic`](/mod/game-api/types/alta-world-generation/forestfillcore#m-generatedynamic), [`ForestFillCore.GenerateGlobal`](/mod/game-api/types/alta-world-generation/forestfillcore#m-generateglobal), [`ForestFillCore.GenerateStatic`](/mod/game-api/types/alta-world-generation/forestfillcore#m-generatestatic), [`ForestFillCore.Setup.Forest`](/mod/game-api/types/alta-world-generation/forestfillcore-setup#m-forest), [`ForestFillCore.Setup.Setup`](/mod/game-api/types/alta-world-generation/forestfillcore-setup#m-ctor), [`ForestGenerator.AddRandomInTriangle`](/mod/game-api/types/alta-world-generation/forestgenerator#m-addrandomintriangle), [`ForestGenerator.AddRandomPoint`](/mod/game-api/types/alta-world-generation/forestgenerator#m-addrandompoint), [`ForestGenerator.AreaStartingAt`](/mod/game-api/types/alta-world-generation/forestgenerator#m-areastartingat), [`ForestGenerator.Carve`](/mod/game-api/types/alta-world-generation/forestgenerator#m-carve), [`ForestGenerator.CreateRandomPoints`](/mod/game-api/types/alta-world-generation/forestgenerator#m-createrandompoints), [`ForestGenerator.EvaluateHeights`](/mod/game-api/types/alta-world-generation/forestgenerator#m-evaluateheights), [`ForestGenerator.EvaluateSplatData`](/mod/game-api/types/alta-world-generation/forestgenerator#m-evaluatesplatdata), [`ForestGenerator.EvaluateTargetHeight`](/mod/game-api/types/alta-world-generation/forestgenerator#m-evaluatetargetheight), [`ForestGenerator.GenerateAsync`](/mod/game-api/types/alta-world-generation/forestgenerator#m-generateasync), [`ForestGenerator.GenerateInternalAsync`](/mod/game-api/types/alta-world-generation/forestgenerator#m-generateinternalasync), [`ForestGenerator.GenerateTerrain`](/mod/game-api/types/alta-world-generation/forestgenerator#m-generateterrain), [`ForestGenerator.generation`](/mod/game-api/types/alta-world-generation/forestgenerator#m-generation), [`ForestGenerator.GetAllGCores`](/mod/game-api/types/alta-world-generation/forestgenerator#m-getallgcores), [`ForestGenerator.GetChunkInstructionsAsync`](/mod/game-api/types/alta-world-generation/forestgenerator#m-getchunkinstructionsasync), [`ForestGenerator.GetGenerated`](/mod/game-api/types/alta-world-generation/forestgenerator#m-getgenerated), [`ForestGenerator.GetGenerationAsync`](/mod/game-api/types/alta-world-generation/forestgenerator#m-getgenerationasync), [`ForestGenerator.ModifyHeights`](/mod/game-api/types/alta-world-generation/forestgenerator#m-modifyheights), [`ForestGenerator.OutlineGizmo`](/mod/game-api/types/alta-world-generation/forestgenerator#m-outlinegizmo), [`ForestGenerator.PathGizmos`](/mod/game-api/types/alta-world-generation/forestgenerator#m-pathgizmos), [`ForestGenerator.Reproduce`](/mod/game-api/types/alta-world-generation/forestgenerator#m-reproduce), [`ForestGenerator.SpaceGizmos`](/mod/game-api/types/alta-world-generation/forestgenerator#m-spacegizmos), [`ForestGenerator.Traverse`](/mod/game-api/types/alta-world-generation/forestgenerator#m-traverse), [`ForestGenerator.WeightToEdge`](/mod/game-api/types/alta-world-generation/forestgenerator#m-weighttoedge), [`ForestPathAttributeLerper.Modify`](/mod/game-api/types/alta-world-generation/forestpathattributelerper#m-modify), [`ForestSpaceEvaluator.Modify`](/mod/game-api/types/alta-world-generation/forestspaceevaluator#m-modify), [`IForestGeneration.GenerateDynamic`](/mod/game-api/types/alta-world-generation/iforestgeneration#m-generatedynamic), [`IForestGeneration.GenerateGlobal`](/mod/game-api/types/alta-world-generation/iforestgeneration#m-generateglobal), [`IForestGeneration.GenerateStatic`](/mod/game-api/types/alta-world-generation/iforestgeneration#m-generatestatic), [`ISplatPainter.Paint`](/mod/game-api/types/alta-world-generation/isplatpainter#m-paint), [`ITerrainModifier.ModifyHeight`](/mod/game-api/types/alta-world-generation/iterrainmodifier#m-modifyheight), [`ITerrainModifier.ModifySplat`](/mod/game-api/types/alta-world-generation/iterrainmodifier#m-modifysplat), [`LandBridgeModifier.Modify`](/mod/game-api/types/alta-world-generation/landbridgemodifier#m-modify), [`NodeMapModifier.Modify`](/mod/game-api/types/alta-world-generation/nodemapmodifier#m-modify), [`PointEdge.EvaluateEdge`](/mod/game-api/types/alta-world-generation/pointedge#m-evaluateedge), [`PointEdge.GetEdge`](/mod/game-api/types/alta-world-generation/pointedge#m-getedge), [`PointEdge.GetEdgeDistance`](/mod/game-api/types/alta-world-generation/pointedge#m-getedgedistance), [`PointNormal.GetEdge`](/mod/game-api/types/alta-world-generation/pointnormal#m-getedge) and 24 more.

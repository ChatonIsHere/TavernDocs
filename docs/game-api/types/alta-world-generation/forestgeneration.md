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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`ICacheable`](/game-api/types/alta-world/icacheable)
- **Documented in** [Forest](/game-api/world/forest#forestgeneration)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestGeneration()"}</code> |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-area" /><code>{"private float area"}</code> |
| <Link id="m-chunkedges" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", HashSet<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{">> chunkEdges"}</code> |
| <Link id="m-chunknodes" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", HashSet<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{">> chunkNodes"}</code> |
| <Link id="m-delaunaymesh" /><code>{"private Mesh delaunayMesh"}</code> |
| <Link id="m-edges" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> edges"}</code> |
| <Link id="m-entrancenodes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> entranceNodes"}</code> |
| <Link id="m-entrancepositions" /><code>{"private Vector3[] entrancePositions"}</code> |
| <Link id="m-groupsizex" /><code>{"private uint groupSizeX"}</code> |
| <Link id="m-groupsizez" /><code>{"private uint groupSizeZ"}</code> |
| <Link id="m-indices" /><code>{"private int[] indices"}</code> |
| <Link id="m-lastresult" /><code>{"private Otri lastResult"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-nodes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> nodes"}</code> |
| <Link id="m-noise" /><code>{"private "}<Link to="/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise"}</code> |
| <Link id="m-outlinepositions" /><code>{"private Vector3[] outlinePositions"}</code> |
| <Link id="m-perimeter" /><code>{"private Vector2[] perimeter"}</code> |
| <Link id="m-seed" /><code>{"private uint seed"}</code> |
| <Link id="m-sortededges" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{">[,] sortedEdges"}</code> |
| <Link id="m-sortednodes" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{">[,] sortedNodes"}</code> |
| <Link id="m-spaces" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/space">{"Space"}</Link>{"> spaces"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-area-2" /><code>{"float Area { get; }"}</code> | Area of the forest outline, worked out when the outline is set. |
| <Link id="m-biomespheremanager" /><code><Link to="/game-api/types/global-a-b/biomespheremanager">{"BiomeSphereManager"}</Link>{" "}<Link to="/game-api/types/global-a-b/biomespheremanager">{"BiomeSphereManager"}</Link>{" { get; }"}</code> | The biome areas inside the forest. Saved with the layout. |
| <Link id="m-bounds" /><code>{"Bounds Bounds { get; private set; }"}</code> | Bounds around the outline points, grown by 1 unit. |
| <Link id="m-delaunay" /><code>{"Mesh Delaunay { get; }"}</code> | The TriangleNet triangulation of the node positions, used by `GetSpace` and `GetNodeHeight`. |
| <Link id="m-edges-2" /><code>{"IReadOnlyList<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> Edges { get; }"}</code> | All path edges between nodes. |
| <Link id="m-entrancenodes-2" /><code>{"ICollection<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> EntranceNodes { get; }"}</code> | The nodes at the forest entrances, set by `CollectEntrances`. |
| <Link id="m-entrances" /><code>{"ICollection<Vector3> Entrances { get; }"}</code> | World positions of the entrance points. |
| <Link id="m-generator" /><code><Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" Generator { get; set; }"}</code> | The `ForestGenerator` this layout belongs to. |
| <Link id="m-longestpath" /><code>{"float LongestPath { get; private set; }"}</code> | Not set anywhere in this build, so always 0. |
| <Link id="m-nodecount" /><code>{"int NodeCount { get; }"}</code> | How many path nodes there are. |
| <Link id="m-nodes-2" /><code>{"IReadOnlyList<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> Nodes { get; }"}</code> | All path nodes, read-only. |
| <Link id="m-outline" /><code>{"ICollection<Vector3> Outline { get; }"}</code> | World positions of the outline points. |
| <Link id="m-outlineindices" /><code>{"int[] OutlineIndices { get; }"}</code> | Triangle indices from triangulating the outline. Used by `Contains`. |
| <Link id="m-seed-2" /><code>{"uint Seed { get; }"}</code> | The seed the layout was generated from. |
| <Link id="m-simplexnoise" /><code><Link to="/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" "}<Link to="/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" { get; }"}</code> | Noise seeded from the forest seed, set by `GenerateNoise`. |
| <Link id="m-spaces-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/space">{"Space"}</Link>{"> Spaces { get; }"}</code> | The triangular spaces between edges, skipping empty slots. |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> | Cache data version, 1. |
| <Link id="m-workingedges" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> WorkingEdges { get; }"}</code> | The editable edge list, used while generating. |
| <Link id="m-workingnodes" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> WorkingNodes { get; }"}</code> | The editable node list, used while generating. |
| <Link id="m-workingspaces" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/space">{"Space"}</Link>{"> WorkingSpaces { get; }"}</code> | The editable space list (may hold nulls), used while generating. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closestnode" /><code><Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" ClosestNode(Vector2 point, out bool isWithinRadius)"}</code> | Nearest path node to an x/z point from the grid lookup. Stops early and reports when the point is inside a node's radius. |
| <Link id="m-collectentrances" /><code>{"void CollectEntrances()"}</code> | Takes the first nodes (one per entrance position) as the entrance nodes. |
| <Link id="m-contains" /><code>{"bool Contains(Vector2 point)"}</code> | Whether an x/z point is inside the forest outline. |
| <Link id="m-createedge" /><code><Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" CreateEdge("}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" a, "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" b, "}<Link to="/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" type)"}</code> | Adds an edge of a given type between two nodes, links paths both ways and files it under its location chunk. |
| <Link id="m-distancetobordersquared" /><code>{"float DistanceToBorderSquared(Vector2 point)"}</code> | Squared distance from an x/z point to the nearest outline segment. |
| <Link id="m-distancetopath" /><code>{"float DistanceToPath(Vector2 point, Predicate<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> predicate, bool isIncludingRadius = true)"}</code> | Distance from an x/z point to the nearest edge that passes the filter, checking every edge. Minus the path radius by default. |
| <Link id="m-distancetopath-2" /><code>{"float DistanceToPath(Vector2 point, Predicate<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> predicate, out "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" nearest, out float nearestProgress, bool isIncludingRadius = true)"}</code> | Distance from an x/z point to the nearest edge that passes the filter, checking every edge. Minus the path radius by default. |
| <Link id="m-distancetopathornode" /><code>{"float DistanceToPathOrNode(Vector2 point, Predicate<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> edgePredicate, out "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" nearestEdge, out "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" nearestNode, out float nearestProgress, bool isIncludingRadius = true)"}</code> | Like `DistanceToPath` but checks the grid group first and falls back to all edges. The node output is always null. |
| <Link id="m-evaluategroup" /><code>{"void EvaluateGroup(float worldX, float worldZ, out int groupX, out int groupZ)"}</code> | Turns a world x/z into grid group indices, from the terrain offset and the group sizes. |
| <Link id="m-evaluatenearest" /><code><Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" EvaluateNearest(Vector2 position, int xGroup, int zGroup, Predicate<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> condition)"}</code> | Up to the five nearest edges (passing a filter) to a point within one grid group, nearest first. |
| <Link id="m-generatenoise" /><code>{"void GenerateNoise()"}</code> | Creates the forest's simplex noise from the seed. |
| <Link id="m-getedge" /><code><Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" GetEdge(int fromIndex, int toIndex)"}</code> | The edge between two node indices, or null (with an error) if an index is out of range. |
| <Link id="m-getedgeswithinchunk" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> GetEdgesWithinChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | The edges filed under a location chunk. Empty if none. |
| <Link id="m-getnodeheight" /><code>{"float GetNodeHeight(Vector2 point)"}</code> | Height at an x/z point, blended from the heights of the surrounding nodes. -1 if outside the triangulation. |
| <Link id="m-getnodeswithinchunk" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> GetNodesWithinChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | The nodes filed under a location chunk. Empty if none. |
| <Link id="m-getspace" /><code><Link to="/game-api/types/alta-world-generation/space">{"Space"}</Link>{" GetSpace(Vector2 point)"}</code> | The triangular space containing an x/z point, found through the triangulation. Null if outside. |
| <Link id="m-serializeasync" /><code>{"async Task SerializeAsync(uint version, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the layout for the cache. After reading it rebuilds the chunk and grid lookups, triangulation, entrances and noise. |
| <Link id="m-setgroupsizes" /><code>{"void SetGroupSizes(uint sizeX, uint sizeZ)"}</code> | Sets the x and z size of the grid groups used for lookups. |
| <Link id="m-setoutline" /><code>{"void SetOutline(Transform[] outline, Transform[] entrances)"}</code> | Copies the outline and entrance positions from transforms and works out bounds and area. |
| <Link id="m-setseed" /><code>{"void SetSeed(uint seed)"}</code> | Sets the generation seed. |
| <Link id="m-sortnodes" /><code>{"async Task SortNodes()"}</code> | Async: files nodes and edges under their location chunks and a 51 by 51 grid for fast lookups. Also adds those chunks to `LocationChunk.ContentLocationChunks`. |
| <Link id="m-updatedelaunay" /><code>{"void UpdateDelaunay(List<Vector3> overridePoints = null)"}</code> | Rebuilds the triangulation from the node positions, or from given points. |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-evaluatebounds" /><code>{"private void EvaluateBounds()"}</code> |
| <Link id="m-getgroup" /><code>{"private Vector2 GetGroup(int groupX, int groupZ, out float distanceToCornerSquared)"}</code> |
| <Link id="m-serializenodes" /><code>{"private void SerializeNodes("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-serializeoutline" /><code>{"private void SerializeOutline("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ForestGeneration`:

[`ForestDefinedAtmosphere.generation`](/game-api/types/alta-world/forestdefinedatmosphere#m-generation), [`CutoutPathModifier.Modify`](/game-api/types/alta-world-generation/cutoutpathmodifier#m-modify), [`CutoutPathModifier.ModifyHeight`](/game-api/types/alta-world-generation/cutoutpathmodifier#m-modifyheight), [`CutoutPathModifier.ModifySplat`](/game-api/types/alta-world-generation/cutoutpathmodifier#m-modifysplat), [`ForestAttributeEvaluator.EvaluateEdge`](/game-api/types/alta-world-generation/forestattributeevaluator#m-evaluateedge), [`ForestAttributeEvaluator.EvaluateNode`](/game-api/types/alta-world-generation/forestattributeevaluator#m-evaluatenode), [`ForestAttributeEvaluator.Modify`](/game-api/types/alta-world-generation/forestattributeevaluator#m-modify), [`ForestBridges.GenerateDynamic`](/game-api/types/alta-world-generation/forestbridges#m-generatedynamic), [`ForestBridges.GenerateGlobal`](/game-api/types/alta-world-generation/forestbridges#m-generateglobal), [`ForestBridges.GenerateStatic`](/game-api/types/alta-world-generation/forestbridges#m-generatestatic), [`ForestCliffEvaluator.EvaluateCliff`](/game-api/types/alta-world-generation/forestcliffevaluator#m-evaluatecliff), [`ForestCliffEvaluator.IsLegitimateEdge`](/game-api/types/alta-world-generation/forestcliffevaluator#m-islegitimateedge), [`ForestCliffEvaluator.Modify`](/game-api/types/alta-world-generation/forestcliffevaluator#m-modify), [`ForestConnectivityIncreaser.Modify`](/game-api/types/alta-world-generation/forestconnectivityincreaser#m-modify), [`ForestEncounters.GenerateDynamic`](/game-api/types/alta-world-generation/forestencounters#m-generatedynamic), [`ForestEncounters.GenerateGlobal`](/game-api/types/alta-world-generation/forestencounters#m-generateglobal), [`ForestEncounters.GenerateStatic`](/game-api/types/alta-world-generation/forestencounters#m-generatestatic), [`ForestFillCore.Forest`](/game-api/types/alta-world-generation/forestfillcore#m-forest), [`ForestFillCore.GenerateDynamic`](/game-api/types/alta-world-generation/forestfillcore#m-generatedynamic), [`ForestFillCore.GenerateGlobal`](/game-api/types/alta-world-generation/forestfillcore#m-generateglobal), [`ForestFillCore.GenerateStatic`](/game-api/types/alta-world-generation/forestfillcore#m-generatestatic), [`ForestFillCore.Setup.Forest`](/game-api/types/alta-world-generation/forestfillcore-setup#m-forest), [`ForestFillCore.Setup.Setup`](/game-api/types/alta-world-generation/forestfillcore-setup#m-ctor), [`ForestGenerator.AddRandomInTriangle`](/game-api/types/alta-world-generation/forestgenerator#m-addrandomintriangle), [`ForestGenerator.AddRandomPoint`](/game-api/types/alta-world-generation/forestgenerator#m-addrandompoint), [`ForestGenerator.AreaStartingAt`](/game-api/types/alta-world-generation/forestgenerator#m-areastartingat), [`ForestGenerator.Carve`](/game-api/types/alta-world-generation/forestgenerator#m-carve), [`ForestGenerator.CreateRandomPoints`](/game-api/types/alta-world-generation/forestgenerator#m-createrandompoints), [`ForestGenerator.EvaluateHeights`](/game-api/types/alta-world-generation/forestgenerator#m-evaluateheights), [`ForestGenerator.EvaluateSplatData`](/game-api/types/alta-world-generation/forestgenerator#m-evaluatesplatdata), [`ForestGenerator.EvaluateTargetHeight`](/game-api/types/alta-world-generation/forestgenerator#m-evaluatetargetheight), [`ForestGenerator.GenerateAsync`](/game-api/types/alta-world-generation/forestgenerator#m-generateasync), [`ForestGenerator.GenerateInternalAsync`](/game-api/types/alta-world-generation/forestgenerator#m-generateinternalasync), [`ForestGenerator.GenerateTerrain`](/game-api/types/alta-world-generation/forestgenerator#m-generateterrain), [`ForestGenerator.generation`](/game-api/types/alta-world-generation/forestgenerator#m-generation), [`ForestGenerator.GetAllGCores`](/game-api/types/alta-world-generation/forestgenerator#m-getallgcores), [`ForestGenerator.GetChunkInstructionsAsync`](/game-api/types/alta-world-generation/forestgenerator#m-getchunkinstructionsasync), [`ForestGenerator.GetGenerated`](/game-api/types/alta-world-generation/forestgenerator#m-getgenerated), [`ForestGenerator.GetGenerationAsync`](/game-api/types/alta-world-generation/forestgenerator#m-getgenerationasync), [`ForestGenerator.ModifyHeights`](/game-api/types/alta-world-generation/forestgenerator#m-modifyheights), [`ForestGenerator.OutlineGizmo`](/game-api/types/alta-world-generation/forestgenerator#m-outlinegizmo), [`ForestGenerator.PathGizmos`](/game-api/types/alta-world-generation/forestgenerator#m-pathgizmos), [`ForestGenerator.Reproduce`](/game-api/types/alta-world-generation/forestgenerator#m-reproduce), [`ForestGenerator.SpaceGizmos`](/game-api/types/alta-world-generation/forestgenerator#m-spacegizmos), [`ForestGenerator.Traverse`](/game-api/types/alta-world-generation/forestgenerator#m-traverse), [`ForestGenerator.WeightToEdge`](/game-api/types/alta-world-generation/forestgenerator#m-weighttoedge), [`ForestPathAttributeLerper.Modify`](/game-api/types/alta-world-generation/forestpathattributelerper#m-modify), [`ForestSpaceEvaluator.Modify`](/game-api/types/alta-world-generation/forestspaceevaluator#m-modify), [`IForestGeneration.GenerateDynamic`](/game-api/types/alta-world-generation/iforestgeneration#m-generatedynamic), [`IForestGeneration.GenerateGlobal`](/game-api/types/alta-world-generation/iforestgeneration#m-generateglobal), [`IForestGeneration.GenerateStatic`](/game-api/types/alta-world-generation/iforestgeneration#m-generatestatic), [`ISplatPainter.Paint`](/game-api/types/alta-world-generation/isplatpainter#m-paint), [`ITerrainModifier.ModifyHeight`](/game-api/types/alta-world-generation/iterrainmodifier#m-modifyheight), [`ITerrainModifier.ModifySplat`](/game-api/types/alta-world-generation/iterrainmodifier#m-modifysplat), [`LandBridgeModifier.Modify`](/game-api/types/alta-world-generation/landbridgemodifier#m-modify), [`NodeMapModifier.Modify`](/game-api/types/alta-world-generation/nodemapmodifier#m-modify), [`PointEdge.EvaluateEdge`](/game-api/types/alta-world-generation/pointedge#m-evaluateedge), [`PointEdge.GetEdge`](/game-api/types/alta-world-generation/pointedge#m-getedge), [`PointEdge.GetEdgeDistance`](/game-api/types/alta-world-generation/pointedge#m-getedgedistance), [`PointNormal.GetEdge`](/game-api/types/alta-world-generation/pointnormal#m-getedge) and 24 more.

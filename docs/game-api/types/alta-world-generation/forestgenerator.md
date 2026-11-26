---
title: "ForestGenerator"
description: "Generates the procedural forest from a seed: a path graph inside an outline, reshaped and painted terrain, rivers, and per-chunk content."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestGenerator

A **class** in `Root.Township`, `Alta.Forests`.

Generates the procedural forest from a seed: a path graph inside an outline, reshaped and painted terrain, rivers, and per-chunk content. Most results are cached on disk by seed. A scene component on both sides; `All` lists them.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ForestGeneratorSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ForestGeneratorSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ForestGeneratorSaveData`](/game-api/types/alta-world-generation/forestgeneratorsavedata)
- **Nested types** [`NearestInfo`](/game-api/types/alta-world-generation/forestgenerator-nearestinfo), [`TerrainNoise`](/game-api/types/alta-world-generation/forestgenerator-terrainnoise)
- **Attributes** `TypeConverter`
- **Documented in** [Forest](/game-api/world/forest#forestgenerator), [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestGenerator()"}</code> |

## Fields

<details>
<summary>63 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> all"}</code> | Backing field for `All`. |
| <Link id="m-bootupstatus" /><code>{"private Action<string> bootupStatus"}</code> | Progress callback used while `Bootup` runs. Null otherwise. |
| <Link id="m-btnnavmesh" /><code>{"private bool btnNavmesh"}</code> | Editor button that runs `RegenerateNavmesh`. |
| <Link id="m-cache" /><code>{"private string cache"}</code> | Backing field for `Cache`. Part of every cache file name for this forest. |
| <Link id="m-currentmaximum" /><code>{"private float currentMaximum"}</code> | Most distance two points can be apart and still get an edge, for the current pass. |
| <Link id="m-currentminimum" /><code>{"private float currentMinimum"}</code> | Least spacing between points, for the current pass. |
| <Link id="m-edgebuffer" /><code>{"private float edgeBuffer"}</code> | Distance points and edges must keep from the outline. 20 by default. |
| <Link id="m-edgeheightpullfalloff" /><code>{"private float edgeHeightPullFalloff"}</code> | Not read in this class. |
| <Link id="m-edgeheightpullfalloffpower" /><code>{"private float edgeHeightPullFalloffPower"}</code> | Not read in this class. |
| <Link id="m-edgeheightpullstrength" /><code>{"private float edgeHeightPullStrength"}</code> | Not read in this class. |
| <Link id="m-entrancenodes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> entranceNodes"}</code> | Backing field for `Entrances`. Not assigned in this class. |
| <Link id="m-entranceradius" /><code>{"private float entranceRadius"}</code> | Radius given to entrance nodes. 5 by default. |
| <Link id="m-entrances" /><code>{"private Transform[] entrances"}</code> | Transforms marking where paths enter the forest. They become the first nodes. |
| <Link id="m-forestgeneration" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/iforestgeneration">{"IForestGeneration"}</Link>{"[] forestGeneration"}</code> | The `IForestGeneration` steps under the generator (trees, rocks and more) that make global, static and dynamic content. |
| <Link id="m-generation" /><code>{"private Task<"}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{"> generation"}</code> | The generation task, started once by `GetGenerationAsync`. |
| <Link id="m-groupsizex" /><code>{"private int groupSizeX"}</code> | Not used. Group sizes come from the heightmap size instead. |
| <Link id="m-groupsizez" /><code>{"private int groupSizeZ"}</code> | Not used. Group sizes come from the heightmap size instead. |
| <Link id="m-hardlimit" /><code>{"private int hardLimit"}</code> | Most points the graph can have. 2000 by default. |
| <Link id="m-heightinterations" /><code>{"private int heightInterations"}</code> | Number of `ModifyHeights` smoothing passes. 10 by default. |
| <Link id="m-heightrandompower" /><code>{"private float heightRandomPower"}</code> | Power applied to the random height nudge, so most nudges are small. 2 by default. |
| <Link id="m-initialcount" /><code>{"private int initialCount"}</code> | How many starting points were added after the entrances. Used by gizmos. |
| <Link id="m-initialheight" /><code>{"private float initialHeight"}</code> | Height new nodes start at. 10 by default. |
| <Link id="m-initialmaximumnearbydistance" /><code>{"private float initialMaximumNearbyDistance"}</code> | Edge distance limit while connecting the entrances. 20 by default. |
| <Link id="m-initialminimumpointdistance" /><code>{"private float initialMinimumPointDistance"}</code> | Point spacing while connecting the entrances. 10 by default. |
| <Link id="m-initialpathincrement" /><code>{"private int initialPathIncrement"}</code> | Points added per pass until every entrance is connected. 1 by default. |
| <Link id="m-initialpointextraradiusmaximum" /><code>{"private float initialPointExtraRadiusMaximum"}</code> | Most extra radius for the starting points. 12 by default. |
| <Link id="m-initialpointextraradiusminimum" /><code>{"private float initialPointExtraRadiusMinimum"}</code> | Least extra radius for the starting points. 5 by default. |
| <Link id="m-initialrandompointcount" /><code>{"private int initialRandomPointCount"}</code> | Random points tried at the start. 100 by default. |
| <Link id="m-instructions" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{"> instructions"}</code> | Static instruction set run for each loaded chunk, undone on `ReleaseStatic`. |
| <Link id="m-isdrawinggizmos" /><code>{"private bool isDrawingGizmos"}</code> | Editor: draws the generated graph in play mode. |
| <Link id="m-lastiterationweightmultiplier" /><code>{"private float lastIterationWeightMultiplier"}</code> | How strong the random nudge is on the last height pass, compared to the first. 0.1 by default. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maximumheightperiteration" /><code>{"private float maximumHeightPerIteration"}</code> | Largest random height change per pass. 5 by default. |
| <Link id="m-maximumnearbydistance" /><code>{"private float maximumNearbyDistance"}</code> | Edge distance limit after the entrances are connected. 20 by default. |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> | Largest base node radius, picked by noise. 10 by default. |
| <Link id="m-minimumpointdistance" /><code>{"private float minimumPointDistance"}</code> | Point spacing after the entrances are connected. 10 by default. |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> | Smallest base node radius, picked by noise. 2 by default. |
| <Link id="m-nearestinfos" /><code>{"private ConcurrentBag<"}<Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{"> nearestInfos"}</code> | Pool of nearest-edge buffers reused across height worker threads. |
| <Link id="m-nodemapmodifiers" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/nodemapmodifier">{"NodeMapModifier"}</Link>{"[] nodeMapModifiers"}</code> | Modifiers under the generator that change the finished node map. Those that are also terrain modifiers change heights. |
| <Link id="m-openingminimumdistance" /><code>{"private float openingMinimumDistance"}</code> | Point spacing for the very first points. 20 by default. |
| <Link id="m-outline" /><code>{"private Transform[] outline"}</code> | Transforms tracing the forest's border. |
| <Link id="m-overworldonlyastar" /><code>{"private static readonly NNConstraint overworldOnlyAstar"}</code> | A* constraint limited to the first graph, used for navmesh updates. |
| <Link id="m-radiusnoisescale" /><code>{"private float radiusNoiseScale"}</code> | Scale of the noise that picks node radii. 10000 by default. |
| <Link id="m-randompointcount" /><code>{"private int randomPointCount"}</code> | Target node count for the second, filling pass. 1000 by default. |
| <Link id="m-randompointradius" /><code>{"private List<Vector3> randomPointRadius"}</code> | Working list of points as x, z and radius. The first ones are the entrances. |
| <Link id="m-randomweighting" /><code>{"private float randomWeighting"}</code> | Chance (0 to 1) that carving restarts from a random used node instead of the newest. |
| <Link id="m-seed" /><code>{"private int seed"}</code> | The forest seed. -1 until set; the server picks a random one. Saved and synced to clients. |
| <Link id="m-selfheightweighting" /><code>{"private float selfHeightWeighting"}</code> | How much a node's own height counts against its neighbours when smoothing. 2 by default. |
| <Link id="m-sizex" /><code>{"private int sizeX"}</code> | Heightmap resolution on X, from `SetupConstants`. |
| <Link id="m-sizez" /><code>{"private int sizeZ"}</code> | Heightmap resolution on Z, from `SetupConstants`. |
| <Link id="m-splatmap" /><code>{"private Texture2D splatMap"}</code> | Not read in this class. |
| <Link id="m-splatmapresolutionmultiplier" /><code>{"private int splatMapResolutionMultiplier"}</code> | Not read in this class. |
| <Link id="m-splatpainters" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/isplatpainter">{"ISplatPainter"}</Link>{"[] splatPainters"}</code> | Splat painters under the generator, found when painting starts. |
| <Link id="m-syncseed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSeed"}</code> | Method sync that sends the seed to joining players. |
| <Link id="m-terrain" /><code>{"private "}<Link to="/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" terrain"}</code> | The terrain the forest reshapes and paints. |
| <Link id="m-terrainedgeblurpower" /><code>{"private float terrainEdgeBlurPower"}</code> | Not read in this class. |
| <Link id="m-terrainedgeblurstrength" /><code>{"private float terrainEdgeBlurStrength"}</code> | Not read in this class. |
| <Link id="m-terrainfadedistance" /><code>{"private float terrainFadeDistance"}</code> | Distance inside the border over which generated heights blend into the existing terrain. 10 by default. |
| <Link id="m-terrainmodifiers" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/iterrainmodifier">{"ITerrainModifier"}</Link>{"> terrainModifiers"}</code> | Node map modifiers that also change terrain heights. |
| <Link id="m-terrainnoise" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgenerator-terrainnoise">{"ForestGenerator.TerrainNoise"}</Link>{"[] terrainNoise"}</code> | Noise layers added to terrain heights, each with scale, magnitude and a fade near paths. |
| <Link id="m-unit" /><code>{"private Vector3 unit"}</code> | Heightmap scale: world size of one heightmap cell and the height range. |
| <Link id="m-usednodes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> usedNodes"}</code> | Nodes reached by carved paths, used to pick where carving continues. |
| <Link id="m-wipelock" /><code>{"private TaskCompletionSource<bool> wipeLock"}</code> | Set while `Wipe` runs, so generation and a second wipe wait for it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all-2" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> All { get; }"}</code> | Every forest generator in the scene. |
| <Link id="m-cache-2" /><code>{"string Cache { get; }"}</code> | The forest's name in cache file names, such as "The Forest". |
| <Link id="m-entrances-2" /><code>{"ICollection<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> Entrances { get; }"}</code> | The entrance nodes of the path graph. |
| <Link id="m-gizmosversion" /><code>{"int GizmosVersion { get; private set; }"}</code> | Counter bumped when debug gizmo data changes. |
| <Link id="m-isduringcalculate" /><code>{"bool IsDuringCalculate { get; }"}</code> | True while generation is running. |
| <Link id="m-rivergenerator" /><code><Link to="/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" { get; private set; }"}</code> | The river, lake and waterfall generator under this forest. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-generateddynamic" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GeneratedDynamic"}</code> | Raised when a chunk has had its dynamic content (creatures, items) generated. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"static async Task<"}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> Get(Vector2 position)"}</code> | Finds the forest whose outline contains an x/z point. Waits for generation. |
| <Link id="m-getallgcores" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/alta-world-generation/forestgcoreinstruction">{"ForestGCoreInstruction"}</Link>{">> GetAllGCores("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" generating)"}</code> | Collects the generation core instructions of every chunk in a layout. |
| <Link id="m-getgenerated" /><code><Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" GetGenerated(bool isThrowingError = true)"}</code> | The layout if generation has finished, else null (logging an error unless told not to). |
| <Link id="m-getgenerationasync" /><code>{"Task<"}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{"> GetGenerationAsync()"}</code> | The generated layout. Starts generation the first time and returns the same task after. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the message that syncs the seed. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: picks a random seed if none is saved. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the seed to a joining player. |
| <Link id="m-regeneratenavmesh" /><code>{"async void RegenerateNavmesh()"}</code> | Rebuilds the A* navmesh inside the forest outline. |
| <Link id="m-reheight" /><code>{"async void Reheight()"}</code> | Editor tool: recomputes terrain heights inside the forest. |
| <Link id="m-releasedynamic" /><code>{"void ReleaseDynamic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Clears a chunk's dynamic content from every generation step. |
| <Link id="m-releasestatic" /><code>{"void ReleaseStatic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Clears a chunk's static content and undoes its instructions. |
| <Link id="m-requestdynamic" /><code>{"async Task RequestDynamic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Generates a chunk's dynamic content and raises `GeneratedDynamic`. |
| <Link id="m-requeststatic" /><code>{"async Task RequestStatic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, bool isRequiringTerrain, CancellationToken cancellationToken)"}</code> | Runs a chunk's static instructions (trees, rocks). On the server it can also update the navmesh for the chunk. |
| <Link id="m-resplat" /><code>{"async void Resplat()"}</code> | Editor tool: repaints terrain textures inside the forest. |
| <Link id="m-wipe" /><code>{"async Task Wipe(int newSeed = -1)"}</code> | Server: clears the forest's caches and chunk saves, moves players out and regenerates. A seed passed in is ignored; negative picks a random one. TavernLib replaces it with a reset that takes effect at the next restart. |
| <Link id="m-zeroheights" /><code>{"void ZeroHeights()"}</code> | Editor tool: flattens the terrain inside the outline to 0. |

<details>
<summary>28 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrandomintriangle" /><code>{"private void AddRandomInTriangle("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, int startIndex, float additionalRadius)"}</code> | Picks a random point in one outline triangle and keeps it if it is far enough from the border and other points. |
| <Link id="m-addrandompoint" /><code>{"private void AddRandomPoint("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, float additionalRadius)"}</code> | Tries to add one random point, picking an outline triangle weighted by area. |
| <Link id="m-areastartingat" /><code>{"private float AreaStartingAt("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, int index)"}</code> | Area of the outline triangle starting at an index, on the x/z plane. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the river generator, node map modifiers and generation steps under it, and adds itself to `All`. |
| <Link id="m-bootup" /><code>{"private async Task Bootup(Action<string> progressNotification)"}</code> | Generates the forest while reporting progress. No callers in this build. |
| <Link id="m-carve" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" Carve("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" current)"}</code> | Extends a path from a node to a random unused neighbour, marking the edge as a normal path. Returns the new node or null. |
| <Link id="m-connection" /><code>{"private async Task "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, Action<string> progressNotification)"}</code> | Makes sure a connecting client has the node and terrain caches for this seed. No callers in this build. |
| <Link id="m-createrandompoints" /><code>{"private void CreateRandomPoints("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, int count, bool isClearing, float additionalRadiusMinimum = 0, float additionalRadiusMaximum = -1)"}</code> | Adds up to `count` random points (each may fail), optionally clearing first and re-adding the entrances. |
| <Link id="m-evaluateheights" /><code>{"private async Task EvaluateHeights("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, float[,] heights, "}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int minX, int minY, int maxX, int maxY)"}</code> | Worker for a block of heightmap rows: sets heights inside the outline from nearby paths and noise, fading into the existing terrain at the border. |
| <Link id="m-evaluatesplatdata" /><code>{"private async Task EvaluateSplatData("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, "}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{"[,] data, "}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int minX, int minY, int maxX, int maxY)"}</code> | Worker for a block of splat rows: runs every splat painter on cells inside the outline. |
| <Link id="m-evaluatetargetheight" /><code>{"private float EvaluateTargetHeight("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" generation, "}<Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" info, Vector2 position, out float distanceToPath)"}</code> | Works out a terrain height from the nearest path edges' node heights, then applies the terrain modifiers. |
| <Link id="m-generateasync" /><code>{"private async Task<"}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{"> GenerateAsync()"}</code> | Waits for a wipe and a seed, then loads the forest layout from cache or generates nodes, terrain and chunk instructions. |
| <Link id="m-generateinternalasync" /><code>{"private async Task<bool> GenerateInternalAsync("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> | Builds the path graph on a worker thread: random points, Delaunay edges, carved paths, heights, spaces and node modifiers. |
| <Link id="m-generateterrain" /><code>{"private async Task GenerateTerrain("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Gets the forest's heights and splat (from cache or by generating, with rivers), applies them and spawns river visuals and global content. |
| <Link id="m-getchunkinstructionsasync" /><code>{"private Task<"}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{"> GetChunkInstructionsAsync("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Gets a chunk's static instruction set from cache, or builds it by running every generation step's `GenerateStatic`. |
| <Link id="m-getnext" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" GetNext(Random random)"}</code> | Picks the next node to carve from: usually the newest used node, or a random one by `randomWeighting`. |
| <Link id="m-modifyheights" /><code>{"private void ModifyHeights("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, float weight)"}</code> | One smoothing pass over node heights: blends each with its path neighbours and adds a random nudge. Entrances keep their height. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes itself from `All`. |
| <Link id="m-ondrawgizmos" /><code>{"private async void OnDrawGizmos()"}</code> | Editor: draws the outline, or after generation (if `isDrawingGizmos`) the biome spheres, outline, paths and spaces. |
| <Link id="m-outlinegizmo" /><code>{"private void OutlineGizmo("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> | Editor: draws the outline triangles. |
| <Link id="m-pathgizmos" /><code>{"private void PathGizmos("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> | Editor: draws the starting points, node radii and edges coloured by type. |
| <Link id="m-reproduce" /><code>{"private void Reproduce("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Dictionary<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{", List<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{">> toReproduce)"}</code> | Rebuilds paths from the last pass by pathfinding between previously linked nodes in the new graph. |
| <Link id="m-setupconstants" /><code>{"private void SetupConstants()"}</code> | Reads heightmap size and scale from the terrain data. |
| <Link id="m-spacegizmos" /><code>{"private void SpaceGizmos("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> | Editor: draws a sphere at each space's centre, coloured by space type. |
| <Link id="m-syncseed-2" /><code>{"private void SyncSeed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler that sends or reads the seed. |
| <Link id="m-traverse" /><code>{"private void Traverse("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random)"}</code> | Carves paths from used nodes until none can grow further. |
| <Link id="m-weighttoedge" /><code>{"private void WeightToEdge("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, float fade)"}</code> | Pulls each node's height towards the height of the nearest outline edge. A fade of 0 sets it fully. |
| <Link id="m-wipechunk" /><code>{"private async Task WipeChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Unloads a chunk, saves and clears its save, and deletes its static instruction cache. Used by `Wipe`. |

</details>

## Used in

Members of other types that take, return or hold a `ForestGenerator`:

[`WorldCommandModule.ForestCommandModule.Info`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-info), [`WorldCommandModule.ForestCommandModule.Reset`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-reset), [`WorldCommandModule.ForestCommandModule.Teleport`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-teleport), [`ForestDefinedAtmosphere.forest`](/game-api/types/alta-world/forestdefinedatmosphere#m-forest), [`ForestGeneration.Generator`](/game-api/types/alta-world-generation/forestgeneration#m-generator), [`ForestPopulationArea.forest`](/game-api/types/alta-world-generation/forestpopulationarea#m-forest), [`RiverCollision.forest`](/game-api/types/alta-world-generation/rivercollision#m-forest), [`RiverGenerator.forest`](/game-api/types/alta-world-generation/rivergenerator#m-forest), [`RiverGenerator.Forest`](/game-api/types/alta-world-generation/rivergenerator#m-forest-2), [`RiverMeshTest.forest`](/game-api/types/alta-world-generation/rivermeshtest#m-forest), [`ForestChunk.Forests`](/game-api/types/global-e-h/forestchunk#m-forests), [`ForestChunk.inBounds`](/game-api/types/global-e-h/forestchunk#m-inbounds).

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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ForestGeneratorSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<ForestGeneratorSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ForestGeneratorSaveData`](/mod/game-api/types/alta-world-generation/forestgeneratorsavedata)
- **Nested types** [`NearestInfo`](/mod/game-api/types/alta-world-generation/forestgenerator-nearestinfo), [`TerrainNoise`](/mod/game-api/types/alta-world-generation/forestgenerator-terrainnoise)
- **Attributes** `TypeConverter`
- **Documented in** [Forest](/mod/game-api/world/forest#forestgenerator), [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestGenerator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>63 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> all"}</code> | <span className="api-desc">Backing field for `All`.</span> |
| <Link id="m-bootupstatus" /><code>{"private Action<string> bootupStatus"}</code> | <span className="api-desc">Progress callback used while `Bootup` runs. Null otherwise.</span> |
| <Link id="m-btnnavmesh" /><code>{"private bool btnNavmesh"}</code> | <span className="api-desc">Editor button that runs `RegenerateNavmesh`.</span> |
| <Link id="m-cache" /><code>{"private string cache"}</code> | <span className="api-desc">Backing field for `Cache`. Part of every cache file name for this forest.</span> |
| <Link id="m-currentmaximum" /><code>{"private float currentMaximum"}</code> | <span className="api-desc">Most distance two points can be apart and still get an edge, for the current pass.</span> |
| <Link id="m-currentminimum" /><code>{"private float currentMinimum"}</code> | <span className="api-desc">Least spacing between points, for the current pass.</span> |
| <Link id="m-edgebuffer" /><code>{"private float edgeBuffer"}</code> | <span className="api-desc">Distance points and edges must keep from the outline. 20 by default.</span> |
| <Link id="m-edgeheightpullfalloff" /><code>{"private float edgeHeightPullFalloff"}</code> | <span className="api-desc">Not read in this class.</span> |
| <Link id="m-edgeheightpullfalloffpower" /><code>{"private float edgeHeightPullFalloffPower"}</code> | <span className="api-desc">Not read in this class.</span> |
| <Link id="m-edgeheightpullstrength" /><code>{"private float edgeHeightPullStrength"}</code> | <span className="api-desc">Not read in this class.</span> |
| <Link id="m-entrancenodes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> entranceNodes"}</code> | <span className="api-desc">Backing field for `Entrances`. Not assigned in this class.</span> |
| <Link id="m-entranceradius" /><code>{"private float entranceRadius"}</code> | <span className="api-desc">Radius given to entrance nodes. 5 by default.</span> |
| <Link id="m-entrances" /><code>{"private Transform[] entrances"}</code> | <span className="api-desc">Transforms marking where paths enter the forest. They become the first nodes.</span> |
| <Link id="m-forestgeneration" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/iforestgeneration">{"IForestGeneration"}</Link>{"[] forestGeneration"}</code> | <span className="api-desc">The `IForestGeneration` steps under the generator (trees, rocks and more) that make global, static and dynamic content.</span> |
| <Link id="m-generation" /><code>{"private Task<"}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{"> generation"}</code> | <span className="api-desc">The generation task, started once by `GetGenerationAsync`.</span> |
| <Link id="m-groupsizex" /><code>{"private int groupSizeX"}</code> | <span className="api-desc">Not used. Group sizes come from the heightmap size instead.</span> |
| <Link id="m-groupsizez" /><code>{"private int groupSizeZ"}</code> | <span className="api-desc">Not used. Group sizes come from the heightmap size instead.</span> |
| <Link id="m-hardlimit" /><code>{"private int hardLimit"}</code> | <span className="api-desc">Most points the graph can have. 2000 by default.</span> |
| <Link id="m-heightinterations" /><code>{"private int heightInterations"}</code> | <span className="api-desc">Number of `ModifyHeights` smoothing passes. 10 by default.</span> |
| <Link id="m-heightrandompower" /><code>{"private float heightRandomPower"}</code> | <span className="api-desc">Power applied to the random height nudge, so most nudges are small. 2 by default.</span> |
| <Link id="m-initialcount" /><code>{"private int initialCount"}</code> | <span className="api-desc">How many starting points were added after the entrances. Used by gizmos.</span> |
| <Link id="m-initialheight" /><code>{"private float initialHeight"}</code> | <span className="api-desc">Height new nodes start at. 10 by default.</span> |
| <Link id="m-initialmaximumnearbydistance" /><code>{"private float initialMaximumNearbyDistance"}</code> | <span className="api-desc">Edge distance limit while connecting the entrances. 20 by default.</span> |
| <Link id="m-initialminimumpointdistance" /><code>{"private float initialMinimumPointDistance"}</code> | <span className="api-desc">Point spacing while connecting the entrances. 10 by default.</span> |
| <Link id="m-initialpathincrement" /><code>{"private int initialPathIncrement"}</code> | <span className="api-desc">Points added per pass until every entrance is connected. 1 by default.</span> |
| <Link id="m-initialpointextraradiusmaximum" /><code>{"private float initialPointExtraRadiusMaximum"}</code> | <span className="api-desc">Most extra radius for the starting points. 12 by default.</span> |
| <Link id="m-initialpointextraradiusminimum" /><code>{"private float initialPointExtraRadiusMinimum"}</code> | <span className="api-desc">Least extra radius for the starting points. 5 by default.</span> |
| <Link id="m-initialrandompointcount" /><code>{"private int initialRandomPointCount"}</code> | <span className="api-desc">Random points tried at the start. 100 by default.</span> |
| <Link id="m-instructions" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{"> instructions"}</code> | <span className="api-desc">Static instruction set run for each loaded chunk, undone on `ReleaseStatic`.</span> |
| <Link id="m-isdrawinggizmos" /><code>{"private bool isDrawingGizmos"}</code> | <span className="api-desc">Editor: draws the generated graph in play mode.</span> |
| <Link id="m-lastiterationweightmultiplier" /><code>{"private float lastIterationWeightMultiplier"}</code> | <span className="api-desc">How strong the random nudge is on the last height pass, compared to the first. 0.1 by default.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maximumheightperiteration" /><code>{"private float maximumHeightPerIteration"}</code> | <span className="api-desc">Largest random height change per pass. 5 by default.</span> |
| <Link id="m-maximumnearbydistance" /><code>{"private float maximumNearbyDistance"}</code> | <span className="api-desc">Edge distance limit after the entrances are connected. 20 by default.</span> |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> | <span className="api-desc">Largest base node radius, picked by noise. 10 by default.</span> |
| <Link id="m-minimumpointdistance" /><code>{"private float minimumPointDistance"}</code> | <span className="api-desc">Point spacing after the entrances are connected. 10 by default.</span> |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> | <span className="api-desc">Smallest base node radius, picked by noise. 2 by default.</span> |
| <Link id="m-nearestinfos" /><code>{"private ConcurrentBag<"}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{"> nearestInfos"}</code> | <span className="api-desc">Pool of nearest-edge buffers reused across height worker threads.</span> |
| <Link id="m-nodemapmodifiers" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/nodemapmodifier">{"NodeMapModifier"}</Link>{"[] nodeMapModifiers"}</code> | <span className="api-desc">Modifiers under the generator that change the finished node map. Those that are also terrain modifiers change heights.</span> |
| <Link id="m-openingminimumdistance" /><code>{"private float openingMinimumDistance"}</code> | <span className="api-desc">Point spacing for the very first points. 20 by default.</span> |
| <Link id="m-outline" /><code>{"private Transform[] outline"}</code> | <span className="api-desc">Transforms tracing the forest's border.</span> |
| <Link id="m-overworldonlyastar" /><code>{"private static readonly NNConstraint overworldOnlyAstar"}</code> | <span className="api-desc">A* constraint limited to the first graph, used for navmesh updates.</span> |
| <Link id="m-radiusnoisescale" /><code>{"private float radiusNoiseScale"}</code> | <span className="api-desc">Scale of the noise that picks node radii. 10000 by default.</span> |
| <Link id="m-randompointcount" /><code>{"private int randomPointCount"}</code> | <span className="api-desc">Target node count for the second, filling pass. 1000 by default.</span> |
| <Link id="m-randompointradius" /><code>{"private List<Vector3> randomPointRadius"}</code> | <span className="api-desc">Working list of points as x, z and radius. The first ones are the entrances.</span> |
| <Link id="m-randomweighting" /><code>{"private float randomWeighting"}</code> | <span className="api-desc">Chance (0 to 1) that carving restarts from a random used node instead of the newest.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">The forest seed. -1 until set; the server picks a random one. Saved and synced to clients.</span> |
| <Link id="m-selfheightweighting" /><code>{"private float selfHeightWeighting"}</code> | <span className="api-desc">How much a node's own height counts against its neighbours when smoothing. 2 by default.</span> |
| <Link id="m-sizex" /><code>{"private int sizeX"}</code> | <span className="api-desc">Heightmap resolution on X, from `SetupConstants`.</span> |
| <Link id="m-sizez" /><code>{"private int sizeZ"}</code> | <span className="api-desc">Heightmap resolution on Z, from `SetupConstants`.</span> |
| <Link id="m-splatmap" /><code>{"private Texture2D splatMap"}</code> | <span className="api-desc">Not read in this class.</span> |
| <Link id="m-splatmapresolutionmultiplier" /><code>{"private int splatMapResolutionMultiplier"}</code> | <span className="api-desc">Not read in this class.</span> |
| <Link id="m-splatpainters" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/isplatpainter">{"ISplatPainter"}</Link>{"[] splatPainters"}</code> | <span className="api-desc">Splat painters under the generator, found when painting starts.</span> |
| <Link id="m-syncseed" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSeed"}</code> | <span className="api-desc">Method sync that sends the seed to joining players.</span> |
| <Link id="m-terrain" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" terrain"}</code> | <span className="api-desc">The terrain the forest reshapes and paints.</span> |
| <Link id="m-terrainedgeblurpower" /><code>{"private float terrainEdgeBlurPower"}</code> | <span className="api-desc">Not read in this class.</span> |
| <Link id="m-terrainedgeblurstrength" /><code>{"private float terrainEdgeBlurStrength"}</code> | <span className="api-desc">Not read in this class.</span> |
| <Link id="m-terrainfadedistance" /><code>{"private float terrainFadeDistance"}</code> | <span className="api-desc">Distance inside the border over which generated heights blend into the existing terrain. 10 by default.</span> |
| <Link id="m-terrainmodifiers" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/iterrainmodifier">{"ITerrainModifier"}</Link>{"> terrainModifiers"}</code> | <span className="api-desc">Node map modifiers that also change terrain heights.</span> |
| <Link id="m-terrainnoise" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator-terrainnoise">{"ForestGenerator.TerrainNoise"}</Link>{"[] terrainNoise"}</code> | <span className="api-desc">Noise layers added to terrain heights, each with scale, magnitude and a fade near paths.</span> |
| <Link id="m-unit" /><code>{"private Vector3 unit"}</code> | <span className="api-desc">Heightmap scale: world size of one heightmap cell and the height range.</span> |
| <Link id="m-usednodes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> usedNodes"}</code> | <span className="api-desc">Nodes reached by carved paths, used to pick where carving continues.</span> |
| <Link id="m-wipelock" /><code>{"private TaskCompletionSource<bool> wipeLock"}</code> | <span className="api-desc">Set while `Wipe` runs, so generation and a second wipe wait for it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> All { get; }"}</code> | <span className="api-desc">Every forest generator in the scene.</span> |
| <Link id="m-cache-2" /><code>{"string Cache { get; }"}</code> | <span className="api-desc">The forest's name in cache file names, such as "The Forest".</span> |
| <Link id="m-entrances-2" /><code>{"ICollection<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> Entrances { get; }"}</code> | <span className="api-desc">The entrance nodes of the path graph.</span> |
| <Link id="m-gizmosversion" /><code>{"int GizmosVersion { get; private set; }"}</code> | <span className="api-desc">Counter bumped when debug gizmo data changes.</span> |
| <Link id="m-isduringcalculate" /><code>{"bool IsDuringCalculate { get; }"}</code> | <span className="api-desc">True while generation is running.</span> |
| <Link id="m-rivergenerator" /><code><Link to="/mod/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The river, lake and waterfall generator under this forest.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-generateddynamic" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GeneratedDynamic"}</code> | <span className="api-desc">Raised when a chunk has had its dynamic content (creatures, items) generated.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"static async Task<"}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> Get(Vector2 position)"}</code> | <span className="api-desc">Finds the forest whose outline contains an x/z point. Waits for generation.</span> |
| <Link id="m-getallgcores" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/forestgcoreinstruction">{"ForestGCoreInstruction"}</Link>{">> GetAllGCores("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" generating)"}</code> | <span className="api-desc">Collects the generation core instructions of every chunk in a layout.</span> |
| <Link id="m-getgenerated" /><code><Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" GetGenerated(bool isThrowingError = true)"}</code> | <span className="api-desc">The layout if generation has finished, else null (logging an error unless told not to).</span> |
| <Link id="m-getgenerationasync" /><code>{"Task<"}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{"> GetGenerationAsync()"}</code> | <span className="api-desc">The generated layout. Starts generation the first time and returns the same task after.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the message that syncs the seed.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: picks a random seed if none is saved.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the seed to a joining player.</span> |
| <Link id="m-regeneratenavmesh" /><code>{"async void RegenerateNavmesh()"}</code> | <span className="api-desc">Rebuilds the A* navmesh inside the forest outline.</span> |
| <Link id="m-reheight" /><code>{"async void Reheight()"}</code> | <span className="api-desc">Editor tool: recomputes terrain heights inside the forest.</span> |
| <Link id="m-releasedynamic" /><code>{"void ReleaseDynamic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Clears a chunk's dynamic content from every generation step.</span> |
| <Link id="m-releasestatic" /><code>{"void ReleaseStatic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Clears a chunk's static content and undoes its instructions.</span> |
| <Link id="m-requestdynamic" /><code>{"async Task RequestDynamic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Generates a chunk's dynamic content and raises `GeneratedDynamic`.</span> |
| <Link id="m-requeststatic" /><code>{"async Task RequestStatic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, bool isRequiringTerrain, CancellationToken cancellationToken)"}</code> | <span className="api-desc">Runs a chunk's static instructions (trees, rocks). On the server it can also update the navmesh for the chunk.</span> |
| <Link id="m-resplat" /><code>{"async void Resplat()"}</code> | <span className="api-desc">Editor tool: repaints terrain textures inside the forest.</span> |
| <Link id="m-wipe" /><code>{"async Task Wipe(int newSeed = -1)"}</code> | <span className="api-desc">Server: clears the forest's caches and chunk saves, moves players out and regenerates. A seed passed in is ignored; negative picks a random one. TavernLib replaces it with a reset that takes effect at the next restart.</span> |
| <Link id="m-zeroheights" /><code>{"void ZeroHeights()"}</code> | <span className="api-desc">Editor tool: flattens the terrain inside the outline to 0.</span> |

<details className="api-private">
<summary>28 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrandomintriangle" /><code>{"private void AddRandomInTriangle("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, int startIndex, float additionalRadius)"}</code> | <span className="api-desc">Picks a random point in one outline triangle and keeps it if it is far enough from the border and other points.</span> |
| <Link id="m-addrandompoint" /><code>{"private void AddRandomPoint("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, float additionalRadius)"}</code> | <span className="api-desc">Tries to add one random point, picking an outline triangle weighted by area.</span> |
| <Link id="m-areastartingat" /><code>{"private float AreaStartingAt("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, int index)"}</code> | <span className="api-desc">Area of the outline triangle starting at an index, on the x/z plane.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the river generator, node map modifiers and generation steps under it, and adds itself to `All`.</span> |
| <Link id="m-bootup" /><code>{"private async Task Bootup(Action<string> progressNotification)"}</code> | <span className="api-desc">Generates the forest while reporting progress. No callers in this build.</span> |
| <Link id="m-carve" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" Carve("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" current)"}</code> | <span className="api-desc">Extends a path from a node to a random unused neighbour, marking the edge as a normal path. Returns the new node or null.</span> |
| <Link id="m-connection" /><code>{"private async Task "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, Action<string> progressNotification)"}</code> | <span className="api-desc">Makes sure a connecting client has the node and terrain caches for this seed. No callers in this build.</span> |
| <Link id="m-createrandompoints" /><code>{"private void CreateRandomPoints("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, int count, bool isClearing, float additionalRadiusMinimum = 0, float additionalRadiusMaximum = -1)"}</code> | <span className="api-desc">Adds up to `count` random points (each may fail), optionally clearing first and re-adding the entrances.</span> |
| <Link id="m-evaluateheights" /><code>{"private async Task EvaluateHeights("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, float[,] heights, "}<Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int minX, int minY, int maxX, int maxY)"}</code> | <span className="api-desc">Worker for a block of heightmap rows: sets heights inside the outline from nearby paths and noise, fading into the existing terrain at the border.</span> |
| <Link id="m-evaluatesplatdata" /><code>{"private async Task EvaluateSplatData("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, "}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{"[,] data, "}<Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int minX, int minY, int maxX, int maxY)"}</code> | <span className="api-desc">Worker for a block of splat rows: runs every splat painter on cells inside the outline.</span> |
| <Link id="m-evaluatetargetheight" /><code>{"private float EvaluateTargetHeight("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" generation, "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" info, Vector2 position, out float distanceToPath)"}</code> | <span className="api-desc">Works out a terrain height from the nearest path edges' node heights, then applies the terrain modifiers.</span> |
| <Link id="m-generateasync" /><code>{"private async Task<"}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{"> GenerateAsync()"}</code> | <span className="api-desc">Waits for a wipe and a seed, then loads the forest layout from cache or generates nodes, terrain and chunk instructions.</span> |
| <Link id="m-generateinternalasync" /><code>{"private async Task<bool> GenerateInternalAsync("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> | <span className="api-desc">Builds the path graph on a worker thread: random points, Delaunay edges, carved paths, heights, spaces and node modifiers.</span> |
| <Link id="m-generateterrain" /><code>{"private async Task GenerateTerrain("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Gets the forest's heights and splat (from cache or by generating, with rivers), applies them and spawns river visuals and global content.</span> |
| <Link id="m-getchunkinstructionsasync" /><code>{"private Task<"}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{"> GetChunkInstructionsAsync("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Gets a chunk's static instruction set from cache, or builds it by running every generation step's `GenerateStatic`.</span> |
| <Link id="m-getnext" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" GetNext(Random random)"}</code> | <span className="api-desc">Picks the next node to carve from: usually the newest used node, or a random one by `randomWeighting`.</span> |
| <Link id="m-modifyheights" /><code>{"private void ModifyHeights("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, float weight)"}</code> | <span className="api-desc">One smoothing pass over node heights: blends each with its path neighbours and adds a random nudge. Entrances keep their height.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes itself from `All`.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private async void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws the outline, or after generation (if `isDrawingGizmos`) the biome spheres, outline, paths and spaces.</span> |
| <Link id="m-outlinegizmo" /><code>{"private void OutlineGizmo("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> | <span className="api-desc">Editor: draws the outline triangles.</span> |
| <Link id="m-pathgizmos" /><code>{"private void PathGizmos("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> | <span className="api-desc">Editor: draws the starting points, node radii and edges coloured by type.</span> |
| <Link id="m-reproduce" /><code>{"private void Reproduce("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{">> toReproduce)"}</code> | <span className="api-desc">Rebuilds paths from the last pass by pathfinding between previously linked nodes in the new graph.</span> |
| <Link id="m-setupconstants" /><code>{"private void SetupConstants()"}</code> | <span className="api-desc">Reads heightmap size and scale from the terrain data.</span> |
| <Link id="m-spacegizmos" /><code>{"private void SpaceGizmos("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> | <span className="api-desc">Editor: draws a sphere at each space's centre, coloured by space type.</span> |
| <Link id="m-syncseed-2" /><code>{"private void SyncSeed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler that sends or reads the seed.</span> |
| <Link id="m-traverse" /><code>{"private void Traverse("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random)"}</code> | <span className="api-desc">Carves paths from used nodes until none can grow further.</span> |
| <Link id="m-weighttoedge" /><code>{"private void WeightToEdge("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, float fade)"}</code> | <span className="api-desc">Pulls each node's height towards the height of the nearest outline edge. A fade of 0 sets it fully.</span> |
| <Link id="m-wipechunk" /><code>{"private async Task WipeChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Unloads a chunk, saves and clears its save, and deletes its static instruction cache. Used by `Wipe`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ForestGenerator`:

<div className="api-used-in">

[`WorldCommandModule.ForestCommandModule.Info`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-info), [`WorldCommandModule.ForestCommandModule.Reset`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-reset), [`WorldCommandModule.ForestCommandModule.Teleport`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-teleport), [`ForestDefinedAtmosphere.forest`](/mod/game-api/types/alta-world/forestdefinedatmosphere#m-forest), [`ForestGeneration.Generator`](/mod/game-api/types/alta-world-generation/forestgeneration#m-generator), [`ForestPopulationArea.forest`](/mod/game-api/types/alta-world-generation/forestpopulationarea#m-forest), [`RiverCollision.forest`](/mod/game-api/types/alta-world-generation/rivercollision#m-forest), [`RiverGenerator.forest`](/mod/game-api/types/alta-world-generation/rivergenerator#m-forest), [`RiverGenerator.Forest`](/mod/game-api/types/alta-world-generation/rivergenerator#m-forest-2), [`RiverMeshTest.forest`](/mod/game-api/types/alta-world-generation/rivermeshtest#m-forest), [`ForestChunk.Forests`](/mod/game-api/types/global-e-h/forestchunk#m-forests), [`ForestChunk.inBounds`](/mod/game-api/types/global-e-h/forestchunk#m-inbounds).

</div>

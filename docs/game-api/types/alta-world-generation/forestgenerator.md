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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestGenerator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> all"}</code> |  |
| <Link id="m-bootupstatus" /><code>{"private Action<string> bootupStatus"}</code> |  |
| <Link id="m-btnnavmesh" /><code>{"private bool btnNavmesh"}</code> |  |
| <Link id="m-cache" /><code>{"private string cache"}</code> |  |
| <Link id="m-currentmaximum" /><code>{"private float currentMaximum"}</code> |  |
| <Link id="m-currentminimum" /><code>{"private float currentMinimum"}</code> |  |
| <Link id="m-edgebuffer" /><code>{"private float edgeBuffer"}</code> |  |
| <Link id="m-edgeheightpullfalloff" /><code>{"private float edgeHeightPullFalloff"}</code> |  |
| <Link id="m-edgeheightpullfalloffpower" /><code>{"private float edgeHeightPullFalloffPower"}</code> |  |
| <Link id="m-edgeheightpullstrength" /><code>{"private float edgeHeightPullStrength"}</code> |  |
| <Link id="m-entrancenodes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> entranceNodes"}</code> |  |
| <Link id="m-entranceradius" /><code>{"private float entranceRadius"}</code> |  |
| <Link id="m-entrances" /><code>{"private Transform[] entrances"}</code> |  |
| <Link id="m-forestgeneration" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/iforestgeneration">{"IForestGeneration"}</Link>{"[] forestGeneration"}</code> |  |
| <Link id="m-generation" /><code>{"private Task<"}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{"> generation"}</code> |  |
| <Link id="m-groupsizex" /><code>{"private int groupSizeX"}</code> |  |
| <Link id="m-groupsizez" /><code>{"private int groupSizeZ"}</code> |  |
| <Link id="m-hardlimit" /><code>{"private int hardLimit"}</code> |  |
| <Link id="m-heightinterations" /><code>{"private int heightInterations"}</code> |  |
| <Link id="m-heightrandompower" /><code>{"private float heightRandomPower"}</code> |  |
| <Link id="m-initialcount" /><code>{"private int initialCount"}</code> |  |
| <Link id="m-initialheight" /><code>{"private float initialHeight"}</code> |  |
| <Link id="m-initialmaximumnearbydistance" /><code>{"private float initialMaximumNearbyDistance"}</code> |  |
| <Link id="m-initialminimumpointdistance" /><code>{"private float initialMinimumPointDistance"}</code> |  |
| <Link id="m-initialpathincrement" /><code>{"private int initialPathIncrement"}</code> |  |
| <Link id="m-initialpointextraradiusmaximum" /><code>{"private float initialPointExtraRadiusMaximum"}</code> |  |
| <Link id="m-initialpointextraradiusminimum" /><code>{"private float initialPointExtraRadiusMinimum"}</code> |  |
| <Link id="m-initialrandompointcount" /><code>{"private int initialRandomPointCount"}</code> |  |
| <Link id="m-instructions" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{"> instructions"}</code> |  |
| <Link id="m-isdrawinggizmos" /><code>{"private bool isDrawingGizmos"}</code> |  |
| <Link id="m-lastiterationweightmultiplier" /><code>{"private float lastIterationWeightMultiplier"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maximumheightperiteration" /><code>{"private float maximumHeightPerIteration"}</code> |  |
| <Link id="m-maximumnearbydistance" /><code>{"private float maximumNearbyDistance"}</code> |  |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> |  |
| <Link id="m-minimumpointdistance" /><code>{"private float minimumPointDistance"}</code> |  |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> |  |
| <Link id="m-nearestinfos" /><code>{"private ConcurrentBag<"}<Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{"> nearestInfos"}</code> |  |
| <Link id="m-nodemapmodifiers" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/nodemapmodifier">{"NodeMapModifier"}</Link>{"[] nodeMapModifiers"}</code> |  |
| <Link id="m-openingminimumdistance" /><code>{"private float openingMinimumDistance"}</code> |  |
| <Link id="m-outline" /><code>{"private Transform[] outline"}</code> |  |
| <Link id="m-overworldonlyastar" /><code>{"private static readonly NNConstraint overworldOnlyAstar"}</code> |  |
| <Link id="m-radiusnoisescale" /><code>{"private float radiusNoiseScale"}</code> |  |
| <Link id="m-randompointcount" /><code>{"private int randomPointCount"}</code> |  |
| <Link id="m-randompointradius" /><code>{"private List<Vector3> randomPointRadius"}</code> |  |
| <Link id="m-randomweighting" /><code>{"private float randomWeighting"}</code> |  |
| <Link id="m-seed" /><code>{"private int seed"}</code> |  |
| <Link id="m-selfheightweighting" /><code>{"private float selfHeightWeighting"}</code> |  |
| <Link id="m-sizex" /><code>{"private int sizeX"}</code> |  |
| <Link id="m-sizez" /><code>{"private int sizeZ"}</code> |  |
| <Link id="m-splatmap" /><code>{"private Texture2D splatMap"}</code> |  |
| <Link id="m-splatmapresolutionmultiplier" /><code>{"private int splatMapResolutionMultiplier"}</code> |  |
| <Link id="m-splatpainters" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/isplatpainter">{"ISplatPainter"}</Link>{"[] splatPainters"}</code> |  |
| <Link id="m-syncseed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSeed"}</code> |  |
| <Link id="m-terrain" /><code>{"private "}<Link to="/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" terrain"}</code> |  |
| <Link id="m-terrainedgeblurpower" /><code>{"private float terrainEdgeBlurPower"}</code> |  |
| <Link id="m-terrainedgeblurstrength" /><code>{"private float terrainEdgeBlurStrength"}</code> |  |
| <Link id="m-terrainfadedistance" /><code>{"private float terrainFadeDistance"}</code> |  |
| <Link id="m-terrainmodifiers" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/iterrainmodifier">{"ITerrainModifier"}</Link>{"> terrainModifiers"}</code> |  |
| <Link id="m-terrainnoise" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgenerator-terrainnoise">{"ForestGenerator.TerrainNoise"}</Link>{"[] terrainNoise"}</code> |  |
| <Link id="m-unit" /><code>{"private Vector3 unit"}</code> |  |
| <Link id="m-usednodes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{"> usedNodes"}</code> |  |
| <Link id="m-wipelock" /><code>{"private TaskCompletionSource<bool> wipeLock"}</code> |  |

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
| <Link id="m-addrandomintriangle" /><code>{"private void AddRandomInTriangle("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, int startIndex, float additionalRadius)"}</code> |  |
| <Link id="m-addrandompoint" /><code>{"private void AddRandomPoint("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, float additionalRadius)"}</code> |  |
| <Link id="m-areastartingat" /><code>{"private float AreaStartingAt("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, int index)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-bootup" /><code>{"private async Task Bootup(Action<string> progressNotification)"}</code> |  |
| <Link id="m-carve" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" Carve("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" current)"}</code> |  |
| <Link id="m-connection" /><code>{"private async Task "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, Action<string> progressNotification)"}</code> |  |
| <Link id="m-createrandompoints" /><code>{"private void CreateRandomPoints("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, int count, bool isClearing, float additionalRadiusMinimum = 0, float additionalRadiusMaximum = -1)"}</code> |  |
| <Link id="m-evaluateheights" /><code>{"private async Task EvaluateHeights("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, float[,] heights, "}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int minX, int minY, int maxX, int maxY)"}</code> |  |
| <Link id="m-evaluatesplatdata" /><code>{"private async Task EvaluateSplatData("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, "}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{"[,] data, "}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int minX, int minY, int maxX, int maxY)"}</code> |  |
| <Link id="m-evaluatetargetheight" /><code>{"private float EvaluateTargetHeight("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" generation, "}<Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" info, Vector2 position, out float distanceToPath)"}</code> |  |
| <Link id="m-generateasync" /><code>{"private async Task<"}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{"> GenerateAsync()"}</code> |  |
| <Link id="m-generateinternalasync" /><code>{"private async Task<bool> GenerateInternalAsync("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> |  |
| <Link id="m-generateterrain" /><code>{"private async Task GenerateTerrain("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |
| <Link id="m-getchunkinstructionsasync" /><code>{"private Task<"}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{"> GetChunkInstructionsAsync("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |
| <Link id="m-getnext" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" GetNext(Random random)"}</code> |  |
| <Link id="m-modifyheights" /><code>{"private void ModifyHeights("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random, float weight)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private async void OnDrawGizmos()"}</code> |  |
| <Link id="m-outlinegizmo" /><code>{"private void OutlineGizmo("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> |  |
| <Link id="m-pathgizmos" /><code>{"private void PathGizmos("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> |  |
| <Link id="m-reproduce" /><code>{"private void Reproduce("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Dictionary<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{", List<"}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{">> toReproduce)"}</code> |  |
| <Link id="m-setupconstants" /><code>{"private void SetupConstants()"}</code> |  |
| <Link id="m-spacegizmos" /><code>{"private void SpaceGizmos("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result)"}</code> |  |
| <Link id="m-syncseed-2" /><code>{"private void SyncSeed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-traverse" /><code>{"private void Traverse("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, Random random)"}</code> |  |
| <Link id="m-weighttoedge" /><code>{"private void WeightToEdge("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" result, float fade)"}</code> |  |
| <Link id="m-wipechunk" /><code>{"private async Task WipeChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ForestGenerator`:

[`WorldCommandModule.ForestCommandModule.Info`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-info), [`WorldCommandModule.ForestCommandModule.Reset`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-reset), [`WorldCommandModule.ForestCommandModule.Teleport`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-teleport), [`ForestDefinedAtmosphere.forest`](/game-api/types/alta-world/forestdefinedatmosphere#m-forest), [`ForestGeneration.Generator`](/game-api/types/alta-world-generation/forestgeneration#m-generator), [`ForestPopulationArea.forest`](/game-api/types/alta-world-generation/forestpopulationarea#m-forest), [`RiverCollision.forest`](/game-api/types/alta-world-generation/rivercollision#m-forest), [`RiverGenerator.forest`](/game-api/types/alta-world-generation/rivergenerator#m-forest), [`RiverGenerator.Forest`](/game-api/types/alta-world-generation/rivergenerator#m-forest-2), [`RiverMeshTest.forest`](/game-api/types/alta-world-generation/rivermeshtest#m-forest), [`ForestChunk.Forests`](/game-api/types/global-e-h/forestchunk#m-forests), [`ForestChunk.inBounds`](/game-api/types/global-e-h/forestchunk#m-inbounds).

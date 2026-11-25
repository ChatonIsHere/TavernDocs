---
title: "CaveLayerStreamer"
description: "Streams one procedurally generated cave layer as its own location chunk below the surface."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerStreamer

A **class** in `Root.Township`, `Alta.Chunks`.

Streams one procedurally generated cave layer as its own location chunk below the surface. The `CaveLayerManager` places it at its entrance; it spawns the layer's generator content, positions the culling portal and syncs the layout to clients.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CaveLayerStreamerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CaveLayerStreamerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ICaveLayer`](/game-api/types/alta-world/icavelayer), [`IPortalApplier`](/game-api/types/alta-world/iportalapplier), [`IProceduralGenerationStreamer`](/game-api/types/alta-world/iproceduralgenerationstreamer)
- **Derived types** [`CaveLayerStreamerSaveData`](/game-api/types/alta-world/cavelayerstreamersavedata)
- **Documented in** [Caves](/game-api/world/caves#cavelayerstreamer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerStreamer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxnumberoflayers" /><code>{"const int MaxNumberOfLayers"}</code> | Upper bound used when syncing the layer number. |
| <Link id="m-androidterrainmaterial" /><code>{"private Material androidTerrainMaterial"}</code> |  |
| <Link id="m-androidterrainmateriallod1" /><code>{"private Material androidTerrainMaterialLOD1"}</code> |  |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-chunkboundsextents" /><code>{"private Vector3 chunkBoundsExtents"}</code> |  |
| <Link id="m-ecosystem" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" ecosystem"}</code> |  |
| <Link id="m-entrancedirection" /><code>{"private Vector2 entranceDirection"}</code> |  |
| <Link id="m-generator" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" generator"}</code> |  |
| <Link id="m-isconnect" /><code>{"private bool isConnect"}</code> |  |
| <Link id="m-isgenerated" /><code>{"private bool isGenerated"}</code> |  |
| <Link id="m-layer" /><code>{"private int layer"}</code> |  |
| <Link id="m-layercontentoffset" /><code>{"private float layerContentOffset"}</code> |  |
| <Link id="m-layerentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" layerEntity"}</code> |  |
| <Link id="m-loaded" /><code>{"private bool loaded"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-navgraph" /><code>{"private RecastGraph navGraph"}</code> |  |
| <Link id="m-needsmatrix" /><code>{"private bool needsMatrix"}</code> |  |
| <Link id="m-neighborstreamer" /><code>{"private "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" neighborStreamer"}</code> |  |
| <Link id="m-portal" /><code>{"private "}<Link to="/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal"}</code> |  |
| <Link id="m-synclayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLayer"}</code> |  |
| <Link id="m-synclayersetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Vector3> syncLayerSetup"}</code> |  |
| <Link id="m-terrainrenderer" /><code>{"private Renderer terrainRenderer"}</code> |  |
| <Link id="m-worldtolocal" /><code>{"private Matrix4x4 worldToLocal"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allstaticrenderers" /><code>{"Dictionary<Renderer, Vector3> AllStaticRenderers { get; }"}</code> | Static renderers in the layer's band, with their positions. Clients only; shown only while the local player is in the chunk. |
| <Link id="m-bounds" /><code>{"Bounds Bounds { get; set; }"}</code> | Bounds used for the layer's pathfinding graph. |
| <Link id="m-chunk-2" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> | The location chunk on the same object. |
| <Link id="m-depth" /><code>{"float Depth { get; set; }"}</code> | Depth of the layer below the manager. Set with `SetEntrance`. |
| <Link id="m-ecosystem-2" /><code><Link to="/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" { get; }"}</code> | Ecosystem asset for this layer. |
| <Link id="m-entrance" /><code>{"Vector2 Entrance { get; set; }"}</code> | Horizontal position of the layer's entrance. |
| <Link id="m-entrancedirection-2" /><code>{"Vector2 EntranceDirection { get; }"}</code> | Horizontal direction the entrance faces. |
| <Link id="m-generator-2" /><code><Link to="/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" Generator { get; }"}</code> | The generation component in the spawned layer content, or null before `Generate`. |
| <Link id="m-isgeneratingdynamic" /><code>{"bool IsGeneratingDynamic { get; private set; }"}</code> | True on the server when the layer is being generated for the first time. |
| <Link id="m-layeridentifier" /><code>{"int LayerIdentifier { get; }"}</code> | The layer number. |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Manager { get; private set; }"}</code> | The cave layer manager that owns this layer. |
| <Link id="m-needtogeneratepathfinding" /><code>{"bool NeedToGeneratePathFinding { get; }"}</code> | True until the pathfinding graph has been built. |
| <Link id="m-portaltransform" /><code>{"Transform PortalTransform { get; private set; }"}</code> | Transform of the culling portal between this layer and the one above. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadingfinished" /><code>{"event Action ClientLoadingFinished"}</code> | Raised by `OnClientLoadingFinished`. |
| <Link id="m-exitready" /><code>{"event Action<int, float, Vector2, Vector2> ExitReady"}</code> | Raised with the layer, the next layer's depth, and the exit position and direction when the exit is placed. |
| <Link id="m-hasmodifiedrenderers" /><code>{"event Action hasModifiedRenderers"}</code> | Raised when the set of static renderers changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterrenderers" /><code>{"void DeregisterRenderers(Renderer[] renderers)"}</code> | Removes renderers from `AllStaticRenderers`. Does nothing on a headless server. |
| <Link id="m-generate" /><code>{"async Task Generate()"}</code> | Spawns the layer content prefab once, positions the portal, syncs setup to clients and runs the generator. |
| <Link id="m-generatepathfinding" /><code>{"IEnumerator GeneratePathfinding() (iterator)"}</code> | Coroutine that scans an A* graph over the layer's bounds, if not already built. |
| <Link id="m-getidentifier" /><code>{"string GetIdentifier(int layer)"}</code> | Returns the chunk identifier for a layer number, such as "Cave Layer 2". |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network messages for the layer number and layout. |
| <Link id="m-initializecavelayer" /><code>{"void InitializeCaveLayer("}<Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager, int layerId)"}</code> | Links the streamer to its manager and layer number and sets the chunk's bounds and identifier. |
| <Link id="m-onclientloadingfinished" /><code>{"void OnClientLoadingFinished()"}</code> | Raises `ClientLoadingFinished`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the layer number and layout to a joining player. |
| <Link id="m-onexitready" /><code>{"void OnExitReady(Vector2 exit, Vector2 exitDirection)"}</code> | Called by the generator when the exit is placed; raises `ExitReady` for the layer below. |
| <Link id="m-registerportal" /><code>{"void RegisterPortal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" other)"}</code> | Links the portal to the chunk in front of it and its cave layer. |
| <Link id="m-registerrenderers" /><code>{"void RegisterRenderers(Renderer[] renderers)"}</code> | Adds renderers that sit in the layer's vertical band to `AllStaticRenderers`. Does nothing on a headless server. |
| <Link id="m-registerterrainrenderer" /><code>{"void RegisterTerrainRenderer(Renderer renderer)"}</code> | Stores the layer's terrain renderer and sets its visibility and Android material. |
| <Link id="m-setentrance" /><code>{"void SetEntrance(float depth, Vector2 entrance, Vector2 direction)"}</code> | Moves the layer to the given depth and entrance and recentres its bounds. |
| <Link id="m-setgeneratorchunk" /><code>{"void SetGeneratorChunk()"}</code> | Puts the spawned layer content into this layer's chunk. |
| <Link id="m-toggleterrain" /><code>{"void ToggleTerrain(bool isToRenderTerrain)"}</code> | Shows or hides the terrain renderer; always shown while the local player is in the chunk. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-finishpositionportal" /><code>{"private void FinishPositionPortal()"}</code> |  |
| <Link id="m-handlelocalplayer" /><code>{"private void HandleLocalPlayer()"}</code> |  |
| <Link id="m-loaddynamic" /><code>{"private async Task Alta.Chunks.IProceduralGenerationStreamer.LoadDynamic(bool hasGenerated)"}</code> |  |
| <Link id="m-loadstatic" /><code>{"private Task Alta.Chunks.IProceduralGenerationStreamer.LoadStatic(CancellationToken cancellationToken)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-positionportal" /><code>{"private void PositionPortal()"}</code> |  |
| <Link id="m-recenterbounds" /><code>{"private void RecenterBounds(Vector3 boundsCenter)"}</code> |  |
| <Link id="m-synclayer-2" /><code>{"private void SyncLayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-synclayersetup-2" /><code>{"private void SyncLayerSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 position)"}</code> |  |
| <Link id="m-togglelocalplayer" /><code>{"private void ToggleLocalPlayer(bool hasLocalPlayer)"}</code> |  |
| <Link id="m-unloaddynamic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadDynamic()"}</code> |  |
| <Link id="m-unloaded" /><code>{"private void Unloaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-unloadstatic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadStatic()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CaveLayerStreamer`:

[`GenerationBase.LayerStreamer`](/game-api/types/alta-world-generation/generationbase#m-layerstreamer), [`GenerationBase.SetupLayer`](/game-api/types/alta-world-generation/generationbase#m-setuplayer), [`IGenerator.LayerStreamer`](/game-api/types/alta-world-generation/igenerator#m-layerstreamer), [`CaveLayerStaticObject.streamer`](/game-api/types/alta-world/cavelayerstaticobject#m-streamer), [`CaveLayerStaticObject.TryGetCaveLayerStreamer`](/game-api/types/alta-world/cavelayerstaticobject#m-trygetcavelayerstreamer), [`Ecosystem.streamer`](/game-api/types/alta-world-generation/ecosystem#m-streamer), [`CullingPortal.backStreamer`](/game-api/types/global-c-d/cullingportal#m-backstreamer), [`CullingPortal.frontStreamer`](/game-api/types/global-c-d/cullingportal#m-frontstreamer), [`CullingPortal.SetChunk`](/game-api/types/global-c-d/cullingportal#m-setchunk), [`CullingPortal.SetupChunkReference`](/game-api/types/global-c-d/cullingportal#m-setupchunkreference), [`CullingPortal.CullingSide.CullingSide`](/game-api/types/global-c-d/cullingportal-cullingside#m-ctor), [`CullingPortal.CullingSide.streamer`](/game-api/types/global-c-d/cullingportal-cullingside#m-streamer), [`InGameInspector.MineStairsPointer.currentStreamer`](/game-api/types/global-i-l/ingameinspector-minestairspointer#m-currentstreamer).

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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CaveLayerStreamerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<CaveLayerStreamerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ICaveLayer`](/mod/game-api/types/alta-world/icavelayer), [`IPortalApplier`](/mod/game-api/types/alta-world/iportalapplier), [`IProceduralGenerationStreamer`](/mod/game-api/types/alta-world/iproceduralgenerationstreamer)
- **Derived types** [`CaveLayerStreamerSaveData`](/mod/game-api/types/alta-world/cavelayerstreamersavedata)
- **Documented in** [Caves](/mod/game-api/world/caves#cavelayerstreamer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerStreamer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxnumberoflayers" /><code>{"const int MaxNumberOfLayers"}</code> | Upper bound used when syncing the layer number. |

<details>
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidterrainmaterial" /><code>{"private Material androidTerrainMaterial"}</code> | Terrain material used on Android while the local player is in the layer. |
| <Link id="m-androidterrainmateriallod1" /><code>{"private Material androidTerrainMaterialLOD1"}</code> | Cheaper terrain material used on Android while the local player is elsewhere. |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | Backing field for `Chunk`. |
| <Link id="m-chunkboundsextents" /><code>{"private Vector3 chunkBoundsExtents"}</code> | Half size of the layer chunk's bounds, which sit below the layer's position. 200 by 7.5 by 200 by default. |
| <Link id="m-ecosystem" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" ecosystem"}</code> | Backing field for `Ecosystem`. |
| <Link id="m-entrancedirection" /><code>{"private Vector2 entranceDirection"}</code> | Backing field for `EntranceDirection`. |
| <Link id="m-generator" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" generator"}</code> | Cache for `Generator`. |
| <Link id="m-isconnect" /><code>{"private bool isConnect"}</code> | True only while sending the setup to a joining player. |
| <Link id="m-isgenerated" /><code>{"private bool isGenerated"}</code> | Whether the layer has been generated before. Saved; first generation sets `IsGeneratingDynamic` on the server. |
| <Link id="m-layer" /><code>{"private int layer"}</code> | Backing field for `LayerIdentifier`. |
| <Link id="m-layercontentoffset" /><code>{"private float layerContentOffset"}</code> | Local Y of the spawned layer content. -7.5 by default. |
| <Link id="m-layerentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" layerEntity"}</code> | The spawned layer content entity (not saved). Null when unloaded. |
| <Link id="m-loaded" /><code>{"private bool loaded"}</code> | True once `Generate` has spawned the content, so it runs only once per load. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-navgraph" /><code>{"private RecastGraph navGraph"}</code> | The A* recast graph for this layer. Null until `GeneratePathfinding` builds it. |
| <Link id="m-needsmatrix" /><code>{"private bool needsMatrix"}</code> | Always true, so the world to local matrix is worked out on every renderer register call. |
| <Link id="m-neighborstreamer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" neighborStreamer"}</code> | The cave layer in front of the portal (the one above). |
| <Link id="m-portal" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal"}</code> | The culling portal between this layer and the one above. Backs `PortalTransform`. |
| <Link id="m-synclayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLayer"}</code> | Method sync for the manager and layer number, sent to joining players. |
| <Link id="m-synclayersetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Vector3> syncLayerSetup"}</code> | Method sync for the layer position and portal pose. Sent on generate and to joining players. |
| <Link id="m-terrainrenderer" /><code>{"private Renderer terrainRenderer"}</code> | The layer's terrain renderer, set by `RegisterTerrainRenderer`. |
| <Link id="m-worldtolocal" /><code>{"private Matrix4x4 worldToLocal"}</code> | The streamer's world to local matrix, used to pick renderers in the layer's height band. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allstaticrenderers" /><code>{"Dictionary<Renderer, Vector3> AllStaticRenderers { get; }"}</code> | Static renderers in the layer's band, with their positions. Clients only; shown only while the local player is in the chunk. |
| <Link id="m-bounds" /><code>{"Bounds Bounds { get; set; }"}</code> | Bounds used for the layer's pathfinding graph. |
| <Link id="m-chunk-2" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> | The location chunk on the same object. |
| <Link id="m-depth" /><code>{"float Depth { get; set; }"}</code> | Depth of the layer below the manager. Set with `SetEntrance`. |
| <Link id="m-ecosystem-2" /><code><Link to="/mod/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" { get; }"}</code> | Ecosystem asset for this layer. |
| <Link id="m-entrance" /><code>{"Vector2 Entrance { get; set; }"}</code> | Horizontal position of the layer's entrance. |
| <Link id="m-entrancedirection-2" /><code>{"Vector2 EntranceDirection { get; }"}</code> | Horizontal direction the entrance faces. |
| <Link id="m-generator-2" /><code><Link to="/mod/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" Generator { get; }"}</code> | The generation component in the spawned layer content, or null before `Generate`. |
| <Link id="m-isgeneratingdynamic" /><code>{"bool IsGeneratingDynamic { get; private set; }"}</code> | True on the server when the layer is being generated for the first time. |
| <Link id="m-layeridentifier" /><code>{"int LayerIdentifier { get; }"}</code> | The layer number. |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Manager { get; private set; }"}</code> | The cave layer manager that owns this layer. |
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
| <Link id="m-initializecavelayer" /><code>{"void InitializeCaveLayer("}<Link to="/mod/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager, int layerId)"}</code> | Links the streamer to its manager and layer number and sets the chunk's bounds and identifier. |
| <Link id="m-onclientloadingfinished" /><code>{"void OnClientLoadingFinished()"}</code> | Raises `ClientLoadingFinished`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the layer number and layout to a joining player. |
| <Link id="m-onexitready" /><code>{"void OnExitReady(Vector2 exit, Vector2 exitDirection)"}</code> | Called by the generator when the exit is placed; raises `ExitReady` for the layer below. |
| <Link id="m-registerportal" /><code>{"void RegisterPortal("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" other)"}</code> | Links the portal to the chunk in front of it and its cave layer. |
| <Link id="m-registerrenderers" /><code>{"void RegisterRenderers(Renderer[] renderers)"}</code> | Adds renderers that sit in the layer's vertical band to `AllStaticRenderers`. Does nothing on a headless server. |
| <Link id="m-registerterrainrenderer" /><code>{"void RegisterTerrainRenderer(Renderer renderer)"}</code> | Stores the layer's terrain renderer and sets its visibility and Android material. |
| <Link id="m-setentrance" /><code>{"void SetEntrance(float depth, Vector2 entrance, Vector2 direction)"}</code> | Moves the layer to the given depth and entrance and recentres its bounds. |
| <Link id="m-setgeneratorchunk" /><code>{"void SetGeneratorChunk()"}</code> | Puts the spawned layer content into this layer's chunk. |
| <Link id="m-toggleterrain" /><code>{"void ToggleTerrain(bool isToRenderTerrain)"}</code> | Shows or hides the terrain renderer; always shown while the local player is in the chunk. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the `LocationChunk` on the same object and caches the portal's transform. |
| <Link id="m-finishpositionportal" /><code>{"private void FinishPositionPortal()"}</code> | Finds the chunk in front of the portal and makes this layer (and that neighbour) the chunks' portal applier. |
| <Link id="m-handlelocalplayer" /><code>{"private void HandleLocalPlayer()"}</code> | Clients: hooks the chunk's local player and fully unloaded events. Called one frame after `Initialize`. |
| <Link id="m-loaddynamic" /><code>{"private async Task Alta.Chunks.IProceduralGenerationStreamer.LoadDynamic(bool hasGenerated)"}</code> | Marks the layer generated, waits for its entrance from the manager, then runs `Generate`. First generation only spawns dynamic content on the server. |
| <Link id="m-loadstatic" /><code>{"private Task Alta.Chunks.IProceduralGenerationStreamer.LoadStatic(CancellationToken cancellationToken)"}</code> | Does nothing; the layer has no static stage. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: draws the entrance direction and the portal's up from the portal. |
| <Link id="m-positionportal" /><code>{"private void PositionPortal()"}</code> | Moves the portal to the entrance, facing down and along the entrance direction. |
| <Link id="m-recenterbounds" /><code>{"private void RecenterBounds(Vector3 boundsCenter)"}</code> | Moves the chunk's bounds to a new centre. |
| <Link id="m-synclayer-2" /><code>{"private void SyncLayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler for the manager and layer number. Clients run `InitializeCaveLayer` and register in the manager. |
| <Link id="m-synclayersetup-2" /><code>{"private void SyncLayerSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 position)"}</code> | Method sync handler for the layer position, entrance direction and portal pose. Clients set up bounds and the portal from it. |
| <Link id="m-togglelocalplayer" /><code>{"private void ToggleLocalPlayer(bool hasLocalPlayer)"}</code> | Clients: shows the terrain and static renderers only while the local player is in the chunk, swapping Android LOD materials. |
| <Link id="m-unloaddynamic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadDynamic()"}</code> | Despawns the layer content through the manager and forgets the generator. |
| <Link id="m-unloaded" /><code>{"private void Unloaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Clears `AllStaticRenderers` when the chunk fully unloads. |
| <Link id="m-unloadstatic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadStatic()"}</code> | Clears `AllStaticRenderers`. |

</details>

## Used in

Members of other types that take, return or hold a `CaveLayerStreamer`:

[`GenerationBase.LayerStreamer`](/mod/game-api/types/alta-world-generation/generationbase#m-layerstreamer), [`GenerationBase.SetupLayer`](/mod/game-api/types/alta-world-generation/generationbase#m-setuplayer), [`IGenerator.LayerStreamer`](/mod/game-api/types/alta-world-generation/igenerator#m-layerstreamer), [`CaveLayerStaticObject.streamer`](/mod/game-api/types/alta-world/cavelayerstaticobject#m-streamer), [`CaveLayerStaticObject.TryGetCaveLayerStreamer`](/mod/game-api/types/alta-world/cavelayerstaticobject#m-trygetcavelayerstreamer), [`Ecosystem.streamer`](/mod/game-api/types/alta-world-generation/ecosystem#m-streamer), [`CullingPortal.backStreamer`](/mod/game-api/types/global-c-d/cullingportal#m-backstreamer), [`CullingPortal.frontStreamer`](/mod/game-api/types/global-c-d/cullingportal#m-frontstreamer), [`CullingPortal.SetChunk`](/mod/game-api/types/global-c-d/cullingportal#m-setchunk), [`CullingPortal.SetupChunkReference`](/mod/game-api/types/global-c-d/cullingportal#m-setupchunkreference), [`CullingPortal.CullingSide.CullingSide`](/mod/game-api/types/global-c-d/cullingportal-cullingside#m-ctor), [`CullingPortal.CullingSide.streamer`](/mod/game-api/types/global-c-d/cullingportal-cullingside#m-streamer), [`InGameInspector.MineStairsPointer.currentStreamer`](/mod/game-api/types/global-i-l/ingameinspector-minestairspointer#m-currentstreamer).

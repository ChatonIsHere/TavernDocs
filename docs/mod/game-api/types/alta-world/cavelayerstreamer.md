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
| <Link id="m-ctor" /><code>{"CaveLayerStreamer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxnumberoflayers" /><code>{"const int MaxNumberOfLayers"}</code> | <span className="api-desc">Upper bound used when syncing the layer number.</span> |

<details className="api-private">
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidterrainmaterial" /><code>{"private Material androidTerrainMaterial"}</code> | <span className="api-desc">Terrain material used on Android while the local player is in the layer.</span> |
| <Link id="m-androidterrainmateriallod1" /><code>{"private Material androidTerrainMaterialLOD1"}</code> | <span className="api-desc">Cheaper terrain material used on Android while the local player is elsewhere.</span> |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | <span className="api-desc">Backing field for `Chunk`.</span> |
| <Link id="m-chunkboundsextents" /><code>{"private Vector3 chunkBoundsExtents"}</code> | <span className="api-desc">Half size of the layer chunk's bounds, which sit below the layer's position. 200 by 7.5 by 200 by default.</span> |
| <Link id="m-ecosystem" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" ecosystem"}</code> | <span className="api-desc">Backing field for `Ecosystem`.</span> |
| <Link id="m-entrancedirection" /><code>{"private Vector2 entranceDirection"}</code> | <span className="api-desc">Backing field for `EntranceDirection`.</span> |
| <Link id="m-generator" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" generator"}</code> | <span className="api-desc">Cache for `Generator`.</span> |
| <Link id="m-isconnect" /><code>{"private bool isConnect"}</code> | <span className="api-desc">True only while sending the setup to a joining player.</span> |
| <Link id="m-isgenerated" /><code>{"private bool isGenerated"}</code> | <span className="api-desc">Whether the layer has been generated before. Saved; first generation sets `IsGeneratingDynamic` on the server.</span> |
| <Link id="m-layer" /><code>{"private int layer"}</code> | <span className="api-desc">Backing field for `LayerIdentifier`.</span> |
| <Link id="m-layercontentoffset" /><code>{"private float layerContentOffset"}</code> | <span className="api-desc">Local Y of the spawned layer content. -7.5 by default.</span> |
| <Link id="m-layerentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" layerEntity"}</code> | <span className="api-desc">The spawned layer content entity (not saved). Null when unloaded.</span> |
| <Link id="m-loaded" /><code>{"private bool loaded"}</code> | <span className="api-desc">True once `Generate` has spawned the content, so it runs only once per load.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-navgraph" /><code>{"private RecastGraph navGraph"}</code> | <span className="api-desc">The A* recast graph for this layer. Null until `GeneratePathfinding` builds it.</span> |
| <Link id="m-needsmatrix" /><code>{"private bool needsMatrix"}</code> | <span className="api-desc">Always true, so the world to local matrix is worked out on every renderer register call.</span> |
| <Link id="m-neighborstreamer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" neighborStreamer"}</code> | <span className="api-desc">The cave layer in front of the portal (the one above).</span> |
| <Link id="m-portal" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal"}</code> | <span className="api-desc">The culling portal between this layer and the one above. Backs `PortalTransform`.</span> |
| <Link id="m-synclayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLayer"}</code> | <span className="api-desc">Method sync for the manager and layer number, sent to joining players.</span> |
| <Link id="m-synclayersetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Vector3> syncLayerSetup"}</code> | <span className="api-desc">Method sync for the layer position and portal pose. Sent on generate and to joining players.</span> |
| <Link id="m-terrainrenderer" /><code>{"private Renderer terrainRenderer"}</code> | <span className="api-desc">The layer's terrain renderer, set by `RegisterTerrainRenderer`.</span> |
| <Link id="m-worldtolocal" /><code>{"private Matrix4x4 worldToLocal"}</code> | <span className="api-desc">The streamer's world to local matrix, used to pick renderers in the layer's height band.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allstaticrenderers" /><code>{"Dictionary<Renderer, Vector3> AllStaticRenderers { get; }"}</code> | <span className="api-desc">Static renderers in the layer's band, with their positions. Clients only; shown only while the local player is in the chunk.</span> |
| <Link id="m-bounds" /><code>{"Bounds Bounds { get; set; }"}</code> | <span className="api-desc">Bounds used for the layer's pathfinding graph.</span> |
| <Link id="m-chunk-2" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> | <span className="api-desc">The location chunk on the same object.</span> |
| <Link id="m-depth" /><code>{"float Depth { get; set; }"}</code> | <span className="api-desc">Depth of the layer below the manager. Set with `SetEntrance`.</span> |
| <Link id="m-ecosystem-2" /><code><Link to="/mod/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" { get; }"}</code> | <span className="api-desc">Ecosystem asset for this layer.</span> |
| <Link id="m-entrance" /><code>{"Vector2 Entrance { get; set; }"}</code> | <span className="api-desc">Horizontal position of the layer's entrance.</span> |
| <Link id="m-entrancedirection-2" /><code>{"Vector2 EntranceDirection { get; }"}</code> | <span className="api-desc">Horizontal direction the entrance faces.</span> |
| <Link id="m-generator-2" /><code><Link to="/mod/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" Generator { get; }"}</code> | <span className="api-desc">The generation component in the spawned layer content, or null before `Generate`.</span> |
| <Link id="m-isgeneratingdynamic" /><code>{"bool IsGeneratingDynamic { get; private set; }"}</code> | <span className="api-desc">True on the server when the layer is being generated for the first time.</span> |
| <Link id="m-layeridentifier" /><code>{"int LayerIdentifier { get; }"}</code> | <span className="api-desc">The layer number.</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Manager { get; private set; }"}</code> | <span className="api-desc">The cave layer manager that owns this layer.</span> |
| <Link id="m-needtogeneratepathfinding" /><code>{"bool NeedToGeneratePathFinding { get; }"}</code> | <span className="api-desc">True until the pathfinding graph has been built.</span> |
| <Link id="m-portaltransform" /><code>{"Transform PortalTransform { get; private set; }"}</code> | <span className="api-desc">Transform of the culling portal between this layer and the one above.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadingfinished" /><code>{"event Action ClientLoadingFinished"}</code> | <span className="api-desc">Raised by `OnClientLoadingFinished`.</span> |
| <Link id="m-exitready" /><code>{"event Action<int, float, Vector2, Vector2> ExitReady"}</code> | <span className="api-desc">Raised with the layer, the next layer's depth, and the exit position and direction when the exit is placed.</span> |
| <Link id="m-hasmodifiedrenderers" /><code>{"event Action hasModifiedRenderers"}</code> | <span className="api-desc">Raised when the set of static renderers changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterrenderers" /><code>{"void DeregisterRenderers(Renderer[] renderers)"}</code> | <span className="api-desc">Removes renderers from `AllStaticRenderers`. Does nothing on a headless server.</span> |
| <Link id="m-generate" /><code>{"async Task Generate()"}</code> | <span className="api-desc">Spawns the layer content prefab once, positions the portal, syncs setup to clients and runs the generator.</span> |
| <Link id="m-generatepathfinding" /><code>{"IEnumerator GeneratePathfinding() (iterator)"}</code> | <span className="api-desc">Coroutine that scans an A* graph over the layer's bounds, if not already built.</span> |
| <Link id="m-getidentifier" /><code>{"string GetIdentifier(int layer)"}</code> | <span className="api-desc">Returns the chunk identifier for a layer number, such as "Cave Layer 2".</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network messages for the layer number and layout.</span> |
| <Link id="m-initializecavelayer" /><code>{"void InitializeCaveLayer("}<Link to="/mod/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager, int layerId)"}</code> | <span className="api-desc">Links the streamer to its manager and layer number and sets the chunk's bounds and identifier.</span> |
| <Link id="m-onclientloadingfinished" /><code>{"void OnClientLoadingFinished()"}</code> | <span className="api-desc">Raises `ClientLoadingFinished`.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the layer number and layout to a joining player.</span> |
| <Link id="m-onexitready" /><code>{"void OnExitReady(Vector2 exit, Vector2 exitDirection)"}</code> | <span className="api-desc">Called by the generator when the exit is placed; raises `ExitReady` for the layer below.</span> |
| <Link id="m-registerportal" /><code>{"void RegisterPortal("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" other)"}</code> | <span className="api-desc">Links the portal to the chunk in front of it and its cave layer.</span> |
| <Link id="m-registerrenderers" /><code>{"void RegisterRenderers(Renderer[] renderers)"}</code> | <span className="api-desc">Adds renderers that sit in the layer's vertical band to `AllStaticRenderers`. Does nothing on a headless server.</span> |
| <Link id="m-registerterrainrenderer" /><code>{"void RegisterTerrainRenderer(Renderer renderer)"}</code> | <span className="api-desc">Stores the layer's terrain renderer and sets its visibility and Android material.</span> |
| <Link id="m-setentrance" /><code>{"void SetEntrance(float depth, Vector2 entrance, Vector2 direction)"}</code> | <span className="api-desc">Moves the layer to the given depth and entrance and recentres its bounds.</span> |
| <Link id="m-setgeneratorchunk" /><code>{"void SetGeneratorChunk()"}</code> | <span className="api-desc">Puts the spawned layer content into this layer's chunk.</span> |
| <Link id="m-toggleterrain" /><code>{"void ToggleTerrain(bool isToRenderTerrain)"}</code> | <span className="api-desc">Shows or hides the terrain renderer; always shown while the local player is in the chunk.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the `LocationChunk` on the same object and caches the portal's transform.</span> |
| <Link id="m-finishpositionportal" /><code>{"private void FinishPositionPortal()"}</code> | <span className="api-desc">Finds the chunk in front of the portal and makes this layer (and that neighbour) the chunks' portal applier.</span> |
| <Link id="m-handlelocalplayer" /><code>{"private void HandleLocalPlayer()"}</code> | <span className="api-desc">Clients: hooks the chunk's local player and fully unloaded events. Called one frame after `Initialize`.</span> |
| <Link id="m-loaddynamic" /><code>{"private async Task Alta.Chunks.IProceduralGenerationStreamer.LoadDynamic(bool hasGenerated)"}</code> | <span className="api-desc">Marks the layer generated, waits for its entrance from the manager, then runs `Generate`. First generation only spawns dynamic content on the server.</span> |
| <Link id="m-loadstatic" /><code>{"private Task Alta.Chunks.IProceduralGenerationStreamer.LoadStatic(CancellationToken cancellationToken)"}</code> | <span className="api-desc">Does nothing; the layer has no static stage.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws the entrance direction and the portal's up from the portal.</span> |
| <Link id="m-positionportal" /><code>{"private void PositionPortal()"}</code> | <span className="api-desc">Moves the portal to the entrance, facing down and along the entrance direction.</span> |
| <Link id="m-recenterbounds" /><code>{"private void RecenterBounds(Vector3 boundsCenter)"}</code> | <span className="api-desc">Moves the chunk's bounds to a new centre.</span> |
| <Link id="m-synclayer-2" /><code>{"private void SyncLayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler for the manager and layer number. Clients run `InitializeCaveLayer` and register in the manager.</span> |
| <Link id="m-synclayersetup-2" /><code>{"private void SyncLayerSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 position)"}</code> | <span className="api-desc">Method sync handler for the layer position, entrance direction and portal pose. Clients set up bounds and the portal from it.</span> |
| <Link id="m-togglelocalplayer" /><code>{"private void ToggleLocalPlayer(bool hasLocalPlayer)"}</code> | <span className="api-desc">Clients: shows the terrain and static renderers only while the local player is in the chunk, swapping Android LOD materials.</span> |
| <Link id="m-unloaddynamic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadDynamic()"}</code> | <span className="api-desc">Despawns the layer content through the manager and forgets the generator.</span> |
| <Link id="m-unloaded" /><code>{"private void Unloaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Clears `AllStaticRenderers` when the chunk fully unloads.</span> |
| <Link id="m-unloadstatic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadStatic()"}</code> | <span className="api-desc">Clears `AllStaticRenderers`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CaveLayerStreamer`:

<div className="api-used-in">

[`GenerationBase.LayerStreamer`](/mod/game-api/types/alta-world-generation/generationbase#m-layerstreamer), [`GenerationBase.SetupLayer`](/mod/game-api/types/alta-world-generation/generationbase#m-setuplayer), [`IGenerator.LayerStreamer`](/mod/game-api/types/alta-world-generation/igenerator#m-layerstreamer), [`CaveLayerStaticObject.streamer`](/mod/game-api/types/alta-world/cavelayerstaticobject#m-streamer), [`CaveLayerStaticObject.TryGetCaveLayerStreamer`](/mod/game-api/types/alta-world/cavelayerstaticobject#m-trygetcavelayerstreamer), [`Ecosystem.streamer`](/mod/game-api/types/alta-world-generation/ecosystem#m-streamer), [`CullingPortal.backStreamer`](/mod/game-api/types/global-c-d/cullingportal#m-backstreamer), [`CullingPortal.frontStreamer`](/mod/game-api/types/global-c-d/cullingportal#m-frontstreamer), [`CullingPortal.SetChunk`](/mod/game-api/types/global-c-d/cullingportal#m-setchunk), [`CullingPortal.SetupChunkReference`](/mod/game-api/types/global-c-d/cullingportal#m-setupchunkreference), [`CullingPortal.CullingSide.CullingSide`](/mod/game-api/types/global-c-d/cullingportal-cullingside#m-ctor), [`CullingPortal.CullingSide.streamer`](/mod/game-api/types/global-c-d/cullingportal-cullingside#m-streamer), [`InGameInspector.MineStairsPointer.currentStreamer`](/mod/game-api/types/global-i-l/ingameinspector-minestairspointer#m-currentstreamer).

</div>

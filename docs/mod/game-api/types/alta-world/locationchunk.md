---
title: "LocationChunk"
description: "A Chunk that is a place in the world, with bounds, neighbours, an environment and static scene content."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocationChunk

A **class** in `Root.Township`, `Alta.Chunks`.

A `Chunk` that is a place in the world, with bounds, neighbours, an environment and static scene content. Overworld tiles, caves and forest chunks are location chunks. Both sides; on clients `ChunkWithLocalPlayer` is the one you are standing in.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`Chunk`](/mod/game-api/types/alta-world/chunk)
- **Derived types** [`CaveLayerChunk`](/mod/game-api/types/alta-world/cavelayerchunk), [`OverworldChunk`](/mod/game-api/types/alta-world/overworldchunk)
- **Documented in** [Chunks](/mod/game-api/world/chunks#locationchunk)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocationChunk()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunkeffects" /><code><Link to="/mod/game-api/types/alta-world/chunkeffect">{"ChunkEffect"}</Link>{"[] chunkEffects"}</code> | <span className="api-desc">Effects applied on clients when the local player enters or leaves the chunk.</span> |
| <Link id="m-onchunkwithlocalplayerchanged" /><code>{"static Action<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> OnChunkWithLocalPlayerChanged"}</code> | <span className="api-desc">Static callback run when the local player moves to another location chunk (null when cleared).</span> |

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alllocationchunks" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> allLocationChunks"}</code> | <span className="api-desc">Static set behind `AllLocationChunks`; chunks add themselves on `Initialize` and remove themselves on destroy.</span> |
| <Link id="m-androidnormalpointer" /><code>{"private List<string> androidNormalPointer"}</code> | <span className="api-desc">Content pointers loaded instead of `normalPointer` on Android.</span> |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | <span className="api-desc">Backing field for `Bounds`, the area the chunk covers.</span> |
| <Link id="m-bufferbounds" /><code>{"private Bounds bufferBounds"}</code> | <span className="api-desc">`Bounds` grown by `BufferSize`; backing field for `BufferBounds`.</span> |
| <Link id="m-bufferboundsmax" /><code>{"private Vector3 bufferBoundsMax"}</code> | <span className="api-desc">Top corner of `bufferBounds`; the upper limit when positions are serialized for this chunk.</span> |
| <Link id="m-bufferboundsmin" /><code>{"private Vector3 bufferBoundsMin"}</code> | <span className="api-desc">Bottom corner of `bufferBounds`; the lower limit when positions are serialized for this chunk.</span> |
| <Link id="m-buffersize" /><code>{"private const float BufferSize"}</code> | <span className="api-desc">How much (10 units) `BufferBounds` is larger than `Bounds` in total size.</span> |
| <Link id="m-chunkregion" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" chunkRegion"}</code> | <span className="api-desc">Which region the chunk belongs to (overworld by default); can be changed with `SetLocationDestination`.</span> |
| <Link id="m-collideronlypointer" /><code>{"private List<string> colliderOnlyPointer"}</code> | <span className="api-desc">Content pointers loaded on a headless server instead of the normal ones, probably the collider-only version of the static content.</span> |
| <Link id="m-connections" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunkconnections">{"ChunkConnections"}</Link>{" connections"}</code> | <span className="api-desc">Backing field for `Connections`: the chunk's links to its neighbours.</span> |
| <Link id="m-ecosystem" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/basicecosystem">{"BasicEcosystem"}</Link>{" ecosystem"}</code> | <span className="api-desc">The `BasicEcosystem` on the same object, passed to the environment in `Initialize`.</span> |
| <Link id="m-environment" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunkenvironment">{"ChunkEnvironment"}</Link>{" environment"}</code> | <span className="api-desc">Backing field for `Environment`; also supplies the chunk's `SpawnData`.</span> |
| <Link id="m-hassetlocationchunks" /><code>{"private static bool hasSetLocationChunks"}</code> | <span className="api-desc">Set once `GetLocationChunksInPlayMode` has filled its cache.</span> |
| <Link id="m-isoverridingsafeposition" /><code>{"private bool isOverridingSafePosition"}</code> | <span className="api-desc">When set, the chunk the local player is in changes how the player's safe position is tracked; read through the static `IsOverridingSafePosition`.</span> |
| <Link id="m-isskippingstaticcontent" /><code>{"private bool isSkippingStaticContent"}</code> | <span className="api-desc">Backing field for `IsSkippingStaticContent`.</span> |
| <Link id="m-isusingcustomloaddistance" /><code>{"private bool isUsingCustomLoadDistance"}</code> | <span className="api-desc">When set, `loadDistance` replaces the streaming settings' load radius for this chunk.</span> |
| <Link id="m-loaddistance" /><code>{"private float loadDistance"}</code> | <span className="api-desc">Custom load radius (default 3) used when `isUsingCustomLoadDistance` is set.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-normalpointer" /><code>{"private List<string> normalPointer"}</code> | <span className="api-desc">Content pointers for the chunk's static content on non-Android clients.</span> |
| <Link id="m-positions" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunkpositions">{"ChunkPositions"}</Link>{" positions"}</code> | <span className="api-desc">Backing field for `Positions`; chunks with surfaces are also added to `ContentLocationChunks`.</span> |
| <Link id="m-priority" /><code>{"private int priority"}</code> | <span className="api-desc">Backing field for `Priority`; when chunks overlap, the chunk lookup picks the one with the highest priority.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alllocationchunks-2" /><code>{"static HashSet<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> AllLocationChunks { get; }"}</code> | <span className="api-desc">Static set of every location chunk that has initialised.</span> |
| <Link id="m-bounds-2" /><code>{"Bounds Bounds { get; set; }"}</code> | <span className="api-desc">The chunk's world space bounds. Setting it also updates `BufferBounds`.</span> |
| <Link id="m-bufferbounds-2" /><code>{"Bounds BufferBounds { get; }"}</code> | <span className="api-desc">`Bounds` grown by 10 units in size. Positions in this chunk are sent quantised to these bounds.</span> |
| <Link id="m-chunkregion-2" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" "}<Link to="/mod/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" { get; }"}</code> | <span className="api-desc">Which region the chunk belongs to (overworld by default).</span> |
| <Link id="m-chunkwithlocalplayer" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" ChunkWithLocalPlayer { get; private set; }"}</code> | <span className="api-desc">Client: static, the location chunk the local player is currently in.</span> |
| <Link id="m-collideronlypointer-2" /><code>{"List<string> ColliderOnlyPointer { get; }"}</code> | <span className="api-desc">Static content to load on a headless server: colliders only, no visuals.</span> |
| <Link id="m-connections-2" /><code><Link to="/mod/game-api/types/alta-world/chunkconnections">{"ChunkConnections"}</Link>{" Connections { get; }"}</code> | <span className="api-desc">Adjacent chunks and connection costs, used to decide which neighbours load around a player.</span> |
| <Link id="m-contentlocationchunks" /><code>{"static HashSet<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> ContentLocationChunks { get; }"}</code> | <span className="api-desc">Static set of location chunks with spawn surfaces, used when picking a random chunk to spawn things in.</span> |
| <Link id="m-dynamicloadstrength" /><code>{"float DynamicLoadStrength { get; }"}</code> | <span className="api-desc">Load budget for dynamic content around this chunk: its custom load distance or the streaming default, times the dynamic multiplier.</span> |
| <Link id="m-environment-2" /><code><Link to="/mod/game-api/types/alta-world/chunkenvironment">{"ChunkEnvironment"}</Link>{" Environment { get; }"}</code> | <span className="api-desc">The chunk's environment settings, which also supply its `SpawnData`.</span> |
| <Link id="m-haslocalplayer" /><code>{"bool HasLocalPlayer { get; private set; }"}</code> | <span className="api-desc">Client: true while the local player is inside this chunk.</span> |
| <Link id="m-isoverridingsafeposition-2" /><code>{"static bool IsOverridingSafePosition { get; }"}</code> | <span className="api-desc">Static, true when the local player's chunk has the override safe position flag. Then fall-recovery safe positions come from safe position setters instead of normal movement.</span> |
| <Link id="m-isrecheckingchunks" /><code>{"static bool IsRecheckingChunks { get; set; }"}</code> | <span className="api-desc">Editor only: whether `AllLocationChunks` searches the scene again each time in edit mode.</span> |
| <Link id="m-isskippingstaticcontent-2" /><code>{"override bool IsSkippingStaticContent { get; }"}</code> | <span className="api-desc">Set on the prefab. When true the server skips this chunk's static content.</span> |
| <Link id="m-normalpointer-2" /><code>{"List<string> NormalPointer { get; }"}</code> | <span className="api-desc">Static content to load on clients. A separate list is used on Android.</span> |
| <Link id="m-offsetmatrix" /><code><Link to="/mod/game-api/types/alta-world/chunkmatrix">{"ChunkMatrix"}</Link>{" OffsetMatrix { get; set; }"}</code> | <span className="api-desc">Transform from the prefab's original placement to where this chunk actually sits. Set by placed cave chunks and applied by the dynamic content manager.</span> |
| <Link id="m-portalapplier" /><code><Link to="/mod/game-api/types/alta-world/iportalapplier">{"IPortalApplier"}</Link>{" PortalApplier { get; set; }"}</code> | <span className="api-desc">Cave portal handler that toggles terrain visibility for this chunk, if it is part of a cave.</span> |
| <Link id="m-positions-2" /><code><Link to="/mod/game-api/types/alta-world/chunkpositions">{"ChunkPositions"}</Link>{" Positions { get; }"}</code> | <span className="api-desc">Spawn surface definitions used to pick random spawn points in the chunk.</span> |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> | <span className="api-desc">When several chunks contain a point, the one with the highest priority wins.</span> |
| <Link id="m-spawndata" /><code>{"override "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> | <span className="api-desc">Spawn data from the chunk's environment, so spawned content knows its biome.</span> |
| <Link id="m-staticloadstrength" /><code>{"float StaticLoadStrength { get; }"}</code> | <span className="api-desc">Load budget for static content: custom load distance or the streaming default, times the static multiplier.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-haslocalplayerchanged" /><code>{"event Action<bool> HasLocalPlayerChanged"}</code> | <span className="api-desc">Raised when the local player enters or leaves this chunk. Chunk effects hook it on clients.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearchunkwithlocalplayer" /><code>{"static void ClearChunkWithLocalPlayer()"}</code> | <span className="api-desc">Client: clears `ChunkWithLocalPlayer` and tells that chunk the player left.</span> |
| <Link id="m-getneighboursforloading" /><code>{"virtual void GetNeighboursForLoading(float remainingLoadBudget, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> | <span className="api-desc">Adds the neighbours that fit in the remaining load budget (minus each connection's cost) to the result set.</span> |
| <Link id="m-getneighboursforlookup" /><code>{"virtual IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetNeighboursForLookup()"}</code> | <span className="api-desc">The forced adjacent chunks, used when searching nearby chunks.</span> |
| <Link id="m-getoverrideloaddistance" /><code>{"void GetOverrideLoadDistance(out bool isUsingCustomLoadDistance, out float overrideLoadingDistance)"}</code> | <span className="api-desc">Reads whether a custom load distance is used and its value.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up environment and connections, hooks chunk effects on clients and adds itself to the static sets.</span> |
| <Link id="m-onlocalplayerchange" /><code>{"void OnLocalPlayerChange(bool isContained)"}</code> | <span className="api-desc">Client: updates `HasLocalPlayer` and `ChunkWithLocalPlayer`, and raises the change events.</span> |
| <Link id="m-playerenteredchunk" /><code>{"virtual void PlayerEnteredChunk("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Hook run when a player moves into this chunk. Empty here; cave layer chunks override it.</span> |
| <Link id="m-serializeposition" /><code>{"override void SerializePosition("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 position, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> | <span className="api-desc">Sends a position quantised to `BufferBounds` at 1 mm precision, so it must lie inside them.</span> |
| <Link id="m-setlocationdestination" /><code>{"void SetLocationDestination("}<Link to="/mod/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" newDestination)"}</code> | <span className="api-desc">Changes the chunk's `ChunkRegion`.</span> |
| <Link id="m-setoverrideloaddistance" /><code>{"void SetOverrideLoadDistance(float overrideLoadingDistance, bool isOverriding = true)"}</code> | <span className="api-desc">Turns on a custom load distance for this chunk with the given value. The second argument is ignored.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Removes the chunk from the static sets.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getlocationchunksineditmode" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetLocationChunksInEditMode()"}</code> | <span className="api-desc">Editor only: refills `allLocationChunks` with every `LocationChunk` in the scene when `IsRecheckingChunks` is set.</span> |
| <Link id="m-getlocationchunksinplaymode" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetLocationChunksInPlayMode()"}</code> | <span className="api-desc">Editor play mode: finds every `LocationChunk` once and caches the set.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LocationChunk`:

<div className="api-used-in">

[`CaveLayerManager.entranceChunk`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-entrancechunk), [`CaveLayerChunk.GetNeighboursForLookup`](/mod/game-api/types/alta-world/cavelayerchunk#m-getneighboursforlookup), [`CaveLayerStaticObject.TryGetCaveLayerStreamer`](/mod/game-api/types/alta-world/cavelayerstaticobject#m-trygetcavelayerstreamer), [`CaveLayerStreamer.chunk`](/mod/game-api/types/alta-world/cavelayerstreamer#m-chunk), [`CaveLayerStreamer.Chunk`](/mod/game-api/types/alta-world/cavelayerstreamer#m-chunk-2), [`CaveLayerStreamer.RegisterPortal`](/mod/game-api/types/alta-world/cavelayerstreamer#m-registerportal), [`ChunkAdjacencyConfiguration.chunk`](/mod/game-api/types/alta-world/chunkadjacencyconfiguration#m-chunk), [`ChunkAdjacencyConfiguration.Chunk`](/mod/game-api/types/alta-world/chunkadjacencyconfiguration#m-chunk-2), [`ChunkAdjacencyConfiguration.ChunkAdjacencyConfiguration`](/mod/game-api/types/alta-world/chunkadjacencyconfiguration#m-ctor), [`ChunkConnections.AddAdjacent`](/mod/game-api/types/alta-world/chunkconnections#m-addadjacent), [`ChunkConnections.Chunk`](/mod/game-api/types/alta-world/chunkconnections#m-chunk), [`ChunkConnections.ConnectTwoWay`](/mod/game-api/types/alta-world/chunkconnections#m-connecttwoway), [`ChunkConnections.Initialize`](/mod/game-api/types/alta-world/chunkconnections#m-initialize), [`ChunkEnvironment.Initialize`](/mod/game-api/types/alta-world/chunkenvironment#m-initialize), [`FastChunkLookup.DeregisterOtherChunk`](/mod/game-api/types/alta-world/fastchunklookup#m-deregisterotherchunk), [`FastChunkLookup.FastChunkLookup`](/mod/game-api/types/alta-world/fastchunklookup#m-ctor), [`FastChunkLookup.GetAllChunksByIndex`](/mod/game-api/types/alta-world/fastchunklookup#m-getallchunksbyindex), [`FastChunkLookup.GetAllChunksContainingPosition`](/mod/game-api/types/alta-world/fastchunklookup#m-getallchunkscontainingposition), [`FastChunkLookup.GetAllChunksIntersectingBounds`](/mod/game-api/types/alta-world/fastchunklookup#m-getallchunksintersectingbounds), [`FastChunkLookup.GetBestChunk`](/mod/game-api/types/alta-world/fastchunklookup#m-getbestchunk), [`FastChunkLookup.GetBestChunkContainingPosition`](/mod/game-api/types/alta-world/fastchunklookup#m-getbestchunkcontainingposition), [`FastChunkLookup.GetBestChunkIntersectingBounds`](/mod/game-api/types/alta-world/fastchunklookup#m-getbestchunkintersectingbounds), [`FastChunkLookup.otherChunks`](/mod/game-api/types/alta-world/fastchunklookup#m-otherchunks), [`FastChunkLookup.RegisterOtherChunk`](/mod/game-api/types/alta-world/fastchunklookup#m-registerotherchunk), [`FastChunkLookup.RemoveOtherChunk`](/mod/game-api/types/alta-world/fastchunklookup#m-removeotherchunk), [`ICaveLayer.Chunk`](/mod/game-api/types/alta-world/icavelayer#m-chunk), [`ICaveLayer.RegisterPortal`](/mod/game-api/types/alta-world/icavelayer#m-registerportal), [`LocationChunkHelper.DeregisterOtherChunk`](/mod/game-api/types/alta-world/locationchunkhelper#m-deregisterotherchunk), [`LocationChunkHelper.GetAllContaining`](/mod/game-api/types/alta-world/locationchunkhelper#m-getallcontaining), [`LocationChunkHelper.GetBestContaining`](/mod/game-api/types/alta-world/locationchunkhelper#m-getbestcontaining), [`LocationChunkHelper.GetChunksToLoad`](/mod/game-api/types/alta-world/locationchunkhelper#m-getchunkstoload), [`LocationChunkHelper.GetChunkWeightingsForPosition`](/mod/game-api/types/alta-world/locationchunkhelper#m-getchunkweightingsforposition), [`LocationChunkHelper.GetRandomChunkForPosition`](/mod/game-api/types/alta-world/locationchunkhelper#m-getrandomchunkforposition), [`LocationChunkHelper.RegisterOtherChunk`](/mod/game-api/types/alta-world/locationchunkhelper#m-registerotherchunk), [`LocationChunkHelper.RemoveOtherChunk`](/mod/game-api/types/alta-world/locationchunkhelper#m-removeotherchunk), [`LocationChunkHelper.SetupChunkLookup`](/mod/game-api/types/alta-world/locationchunkhelper#m-setupchunklookup), [`StaticCaveChunk.chunk`](/mod/game-api/types/alta-world/staticcavechunk#m-chunk), [`StaticCaveChunk.Chunk`](/mod/game-api/types/alta-world/staticcavechunk#m-chunk-2), [`StaticCaveChunk.RegisterPortal`](/mod/game-api/types/alta-world/staticcavechunk#m-registerportal), [`AtmosphereManager.EnsureAtmosphere`](/mod/game-api/types/alta-world/atmospheremanager#m-ensureatmosphere), [`BorderDefinedAtmosphere.allChunks`](/mod/game-api/types/alta-world/borderdefinedatmosphere#m-allchunks), [`CliffFill.GenerateInternal`](/mod/game-api/types/alta-world-generation/clifffill#m-generateinternal), [`CutoutPathEdgeFill.GenerateInternal`](/mod/game-api/types/alta-world-generation/cutoutpathedgefill#m-generateinternal), [`ForestBridges.ClearDynamic`](/mod/game-api/types/alta-world-generation/forestbridges#m-cleardynamic), [`ForestBridges.ClearStatic`](/mod/game-api/types/alta-world-generation/forestbridges#m-clearstatic), [`ForestBridges.GenerateDynamic`](/mod/game-api/types/alta-world-generation/forestbridges#m-generatedynamic), [`ForestBridges.GenerateStatic`](/mod/game-api/types/alta-world-generation/forestbridges#m-generatestatic), [`ForestEncounters.ClearDynamic`](/mod/game-api/types/alta-world-generation/forestencounters#m-cleardynamic), [`ForestEncounters.ClearStatic`](/mod/game-api/types/alta-world-generation/forestencounters#m-clearstatic), [`ForestEncounters.GenerateDynamic`](/mod/game-api/types/alta-world-generation/forestencounters#m-generatedynamic), [`ForestEncounters.GenerateStatic`](/mod/game-api/types/alta-world-generation/forestencounters#m-generatestatic), [`ForestFill.GenerateInternal`](/mod/game-api/types/alta-world-generation/forestfill#m-generateinternal), [`ForestFillCore.ClearDynamic`](/mod/game-api/types/alta-world-generation/forestfillcore#m-cleardynamic), [`ForestFillCore.ClearStatic`](/mod/game-api/types/alta-world-generation/forestfillcore#m-clearstatic), [`ForestFillCore.GenerateDynamic`](/mod/game-api/types/alta-world-generation/forestfillcore#m-generatedynamic), [`ForestFillCore.GenerateInternal`](/mod/game-api/types/alta-world-generation/forestfillcore#m-generateinternal), [`ForestFillCore.GenerateStatic`](/mod/game-api/types/alta-world-generation/forestfillcore#m-generatestatic), [`ForestGeneration.chunkEdges`](/mod/game-api/types/alta-world-generation/forestgeneration#m-chunkedges), [`ForestGeneration.chunkNodes`](/mod/game-api/types/alta-world-generation/forestgeneration#m-chunknodes), [`ForestGeneration.GetEdgesWithinChunk`](/mod/game-api/types/alta-world-generation/forestgeneration#m-getedgeswithinchunk) and 84 more.

</div>

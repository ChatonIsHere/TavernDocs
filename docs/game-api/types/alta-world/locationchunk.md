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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`Chunk`](/game-api/types/alta-world/chunk)
- **Derived types** [`CaveLayerChunk`](/game-api/types/alta-world/cavelayerchunk), [`OverworldChunk`](/game-api/types/alta-world/overworldchunk)
- **Documented in** [Chunks](/game-api/world/chunks#locationchunk)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocationChunk()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunkeffects" /><code><Link to="/game-api/types/alta-world/chunkeffect">{"ChunkEffect"}</Link>{"[] chunkEffects"}</code> | Effects applied on clients when the local player enters or leaves the chunk. |
| <Link id="m-onchunkwithlocalplayerchanged" /><code>{"static Action<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> OnChunkWithLocalPlayerChanged"}</code> | Static callback run when the local player moves to another location chunk (null when cleared). |
| <Link id="m-alllocationchunks" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> allLocationChunks"}</code> |  |
| <Link id="m-androidnormalpointer" /><code>{"private List<string> androidNormalPointer"}</code> |  |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> |  |
| <Link id="m-bufferbounds" /><code>{"private Bounds bufferBounds"}</code> |  |
| <Link id="m-bufferboundsmax" /><code>{"private Vector3 bufferBoundsMax"}</code> |  |
| <Link id="m-bufferboundsmin" /><code>{"private Vector3 bufferBoundsMin"}</code> |  |
| <Link id="m-buffersize" /><code>{"private const float BufferSize"}</code> |  |
| <Link id="m-chunkregion" /><code>{"private "}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" chunkRegion"}</code> |  |
| <Link id="m-collideronlypointer" /><code>{"private List<string> colliderOnlyPointer"}</code> |  |
| <Link id="m-connections" /><code>{"private "}<Link to="/game-api/types/alta-world/chunkconnections">{"ChunkConnections"}</Link>{" connections"}</code> |  |
| <Link id="m-ecosystem" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/basicecosystem">{"BasicEcosystem"}</Link>{" ecosystem"}</code> |  |
| <Link id="m-environment" /><code>{"private "}<Link to="/game-api/types/alta-world/chunkenvironment">{"ChunkEnvironment"}</Link>{" environment"}</code> |  |
| <Link id="m-hassetlocationchunks" /><code>{"private static bool hasSetLocationChunks"}</code> |  |
| <Link id="m-isoverridingsafeposition" /><code>{"private bool isOverridingSafePosition"}</code> |  |
| <Link id="m-isskippingstaticcontent" /><code>{"private bool isSkippingStaticContent"}</code> |  |
| <Link id="m-isusingcustomloaddistance" /><code>{"private bool isUsingCustomLoadDistance"}</code> |  |
| <Link id="m-loaddistance" /><code>{"private float loadDistance"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-normalpointer" /><code>{"private List<string> normalPointer"}</code> |  |
| <Link id="m-positions" /><code>{"private "}<Link to="/game-api/types/alta-world/chunkpositions">{"ChunkPositions"}</Link>{" positions"}</code> |  |
| <Link id="m-priority" /><code>{"private int priority"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alllocationchunks-2" /><code>{"static HashSet<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> AllLocationChunks { get; }"}</code> | Static set of every location chunk that has initialised. |
| <Link id="m-bounds-2" /><code>{"Bounds Bounds { get; set; }"}</code> | The chunk's world space bounds. Setting it also updates `BufferBounds`. |
| <Link id="m-bufferbounds-2" /><code>{"Bounds BufferBounds { get; }"}</code> | `Bounds` grown by 10 units in size. Positions in this chunk are sent quantised to these bounds. |
| <Link id="m-chunkregion-2" /><code>{"virtual "}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" "}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" { get; }"}</code> | Which region the chunk belongs to (overworld by default). |
| <Link id="m-chunkwithlocalplayer" /><code>{"static "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" ChunkWithLocalPlayer { get; private set; }"}</code> | Client: static, the location chunk the local player is currently in. |
| <Link id="m-collideronlypointer-2" /><code>{"List<string> ColliderOnlyPointer { get; }"}</code> | Static content to load on a headless server: colliders only, no visuals. |
| <Link id="m-connections-2" /><code><Link to="/game-api/types/alta-world/chunkconnections">{"ChunkConnections"}</Link>{" Connections { get; }"}</code> | Adjacent chunks and connection costs, used to decide which neighbours load around a player. |
| <Link id="m-contentlocationchunks" /><code>{"static HashSet<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> ContentLocationChunks { get; }"}</code> | Static set of location chunks with spawn surfaces, used when picking a random chunk to spawn things in. |
| <Link id="m-dynamicloadstrength" /><code>{"float DynamicLoadStrength { get; }"}</code> | Load budget for dynamic content around this chunk: its custom load distance or the streaming default, times the dynamic multiplier. |
| <Link id="m-environment-2" /><code><Link to="/game-api/types/alta-world/chunkenvironment">{"ChunkEnvironment"}</Link>{" Environment { get; }"}</code> | The chunk's environment settings, which also supply its `SpawnData`. |
| <Link id="m-haslocalplayer" /><code>{"bool HasLocalPlayer { get; private set; }"}</code> | Client: true while the local player is inside this chunk. |
| <Link id="m-isoverridingsafeposition-2" /><code>{"static bool IsOverridingSafePosition { get; }"}</code> | Static, true when the local player's chunk has the override safe position flag. Then fall-recovery safe positions come from safe position setters instead of normal movement. |
| <Link id="m-isrecheckingchunks" /><code>{"static bool IsRecheckingChunks { get; set; }"}</code> | Editor only: whether `AllLocationChunks` searches the scene again each time in edit mode. |
| <Link id="m-isskippingstaticcontent-2" /><code>{"override bool IsSkippingStaticContent { get; }"}</code> | Set on the prefab. When true the server skips this chunk's static content. |
| <Link id="m-normalpointer-2" /><code>{"List<string> NormalPointer { get; }"}</code> | Static content to load on clients. A separate list is used on Android. |
| <Link id="m-offsetmatrix" /><code><Link to="/game-api/types/alta-world/chunkmatrix">{"ChunkMatrix"}</Link>{" OffsetMatrix { get; set; }"}</code> | Transform from the prefab's original placement to where this chunk actually sits. Set by placed cave chunks and applied by the dynamic content manager. |
| <Link id="m-portalapplier" /><code><Link to="/game-api/types/alta-world/iportalapplier">{"IPortalApplier"}</Link>{" PortalApplier { get; set; }"}</code> | Cave portal handler that toggles terrain visibility for this chunk, if it is part of a cave. |
| <Link id="m-positions-2" /><code><Link to="/game-api/types/alta-world/chunkpositions">{"ChunkPositions"}</Link>{" Positions { get; }"}</code> | Spawn surface definitions used to pick random spawn points in the chunk. |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> | When several chunks contain a point, the one with the highest priority wins. |
| <Link id="m-spawndata" /><code>{"override "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> | Spawn data from the chunk's environment, so spawned content knows its biome. |
| <Link id="m-staticloadstrength" /><code>{"float StaticLoadStrength { get; }"}</code> | Load budget for static content: custom load distance or the streaming default, times the static multiplier. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-haslocalplayerchanged" /><code>{"event Action<bool> HasLocalPlayerChanged"}</code> | Raised when the local player enters or leaves this chunk. Chunk effects hook it on clients. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearchunkwithlocalplayer" /><code>{"static void ClearChunkWithLocalPlayer()"}</code> | Client: clears `ChunkWithLocalPlayer` and tells that chunk the player left. |
| <Link id="m-getneighboursforloading" /><code>{"virtual void GetNeighboursForLoading(float remainingLoadBudget, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> | Adds the neighbours that fit in the remaining load budget (minus each connection's cost) to the result set. |
| <Link id="m-getneighboursforlookup" /><code>{"virtual IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetNeighboursForLookup()"}</code> | The forced adjacent chunks, used when searching nearby chunks. |
| <Link id="m-getoverrideloaddistance" /><code>{"void GetOverrideLoadDistance(out bool isUsingCustomLoadDistance, out float overrideLoadingDistance)"}</code> | Reads whether a custom load distance is used and its value. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up environment and connections, hooks chunk effects on clients and adds itself to the static sets. |
| <Link id="m-onlocalplayerchange" /><code>{"void OnLocalPlayerChange(bool isContained)"}</code> | Client: updates `HasLocalPlayer` and `ChunkWithLocalPlayer`, and raises the change events. |
| <Link id="m-playerenteredchunk" /><code>{"virtual void PlayerEnteredChunk("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Hook run when a player moves into this chunk. Empty here; cave layer chunks override it. |
| <Link id="m-serializeposition" /><code>{"override void SerializePosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 position, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> | Sends a position quantised to `BufferBounds` at 1 mm precision, so it must lie inside them. |
| <Link id="m-setlocationdestination" /><code>{"void SetLocationDestination("}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" newDestination)"}</code> | Changes the chunk's `ChunkRegion`. |
| <Link id="m-setoverrideloaddistance" /><code>{"void SetOverrideLoadDistance(float overrideLoadingDistance, bool isOverriding = true)"}</code> | Turns on a custom load distance for this chunk with the given value. The second argument is ignored. |
| <Link id="m-getlocationchunksineditmode" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetLocationChunksInEditMode()"}</code> |  |
| <Link id="m-getlocationchunksinplaymode" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetLocationChunksInPlayMode()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Removes the chunk from the static sets. |

## Used in

Members of other types that take, return or hold a `LocationChunk`:

[`CaveLayerManager.entranceChunk`](/game-api/types/alta-world-generation/cavelayermanager#m-entrancechunk), [`CaveLayerChunk.GetNeighboursForLookup`](/game-api/types/alta-world/cavelayerchunk#m-getneighboursforlookup), [`CaveLayerStaticObject.TryGetCaveLayerStreamer`](/game-api/types/alta-world/cavelayerstaticobject#m-trygetcavelayerstreamer), [`CaveLayerStreamer.chunk`](/game-api/types/alta-world/cavelayerstreamer#m-chunk), [`CaveLayerStreamer.Chunk`](/game-api/types/alta-world/cavelayerstreamer#m-chunk-2), [`CaveLayerStreamer.RegisterPortal`](/game-api/types/alta-world/cavelayerstreamer#m-registerportal), [`ChunkAdjacencyConfiguration.chunk`](/game-api/types/alta-world/chunkadjacencyconfiguration#m-chunk), [`ChunkAdjacencyConfiguration.Chunk`](/game-api/types/alta-world/chunkadjacencyconfiguration#m-chunk-2), [`ChunkAdjacencyConfiguration.ChunkAdjacencyConfiguration`](/game-api/types/alta-world/chunkadjacencyconfiguration#m-ctor), [`ChunkConnections.AddAdjacent`](/game-api/types/alta-world/chunkconnections#m-addadjacent), [`ChunkConnections.Chunk`](/game-api/types/alta-world/chunkconnections#m-chunk), [`ChunkConnections.ConnectTwoWay`](/game-api/types/alta-world/chunkconnections#m-connecttwoway), [`ChunkConnections.Initialize`](/game-api/types/alta-world/chunkconnections#m-initialize), [`ChunkEnvironment.Initialize`](/game-api/types/alta-world/chunkenvironment#m-initialize), [`FastChunkLookup.DeregisterOtherChunk`](/game-api/types/alta-world/fastchunklookup#m-deregisterotherchunk), [`FastChunkLookup.FastChunkLookup`](/game-api/types/alta-world/fastchunklookup#m-ctor), [`FastChunkLookup.GetAllChunksByIndex`](/game-api/types/alta-world/fastchunklookup#m-getallchunksbyindex), [`FastChunkLookup.GetAllChunksContainingPosition`](/game-api/types/alta-world/fastchunklookup#m-getallchunkscontainingposition), [`FastChunkLookup.GetAllChunksIntersectingBounds`](/game-api/types/alta-world/fastchunklookup#m-getallchunksintersectingbounds), [`FastChunkLookup.GetBestChunk`](/game-api/types/alta-world/fastchunklookup#m-getbestchunk), [`FastChunkLookup.GetBestChunkContainingPosition`](/game-api/types/alta-world/fastchunklookup#m-getbestchunkcontainingposition), [`FastChunkLookup.GetBestChunkIntersectingBounds`](/game-api/types/alta-world/fastchunklookup#m-getbestchunkintersectingbounds), [`FastChunkLookup.otherChunks`](/game-api/types/alta-world/fastchunklookup#m-otherchunks), [`FastChunkLookup.RegisterOtherChunk`](/game-api/types/alta-world/fastchunklookup#m-registerotherchunk), [`FastChunkLookup.RemoveOtherChunk`](/game-api/types/alta-world/fastchunklookup#m-removeotherchunk), [`ICaveLayer.Chunk`](/game-api/types/alta-world/icavelayer#m-chunk), [`ICaveLayer.RegisterPortal`](/game-api/types/alta-world/icavelayer#m-registerportal), [`LocationChunkHelper.DeregisterOtherChunk`](/game-api/types/alta-world/locationchunkhelper#m-deregisterotherchunk), [`LocationChunkHelper.GetAllContaining`](/game-api/types/alta-world/locationchunkhelper#m-getallcontaining), [`LocationChunkHelper.GetBestContaining`](/game-api/types/alta-world/locationchunkhelper#m-getbestcontaining), [`LocationChunkHelper.GetChunksToLoad`](/game-api/types/alta-world/locationchunkhelper#m-getchunkstoload), [`LocationChunkHelper.GetChunkWeightingsForPosition`](/game-api/types/alta-world/locationchunkhelper#m-getchunkweightingsforposition), [`LocationChunkHelper.GetRandomChunkForPosition`](/game-api/types/alta-world/locationchunkhelper#m-getrandomchunkforposition), [`LocationChunkHelper.RegisterOtherChunk`](/game-api/types/alta-world/locationchunkhelper#m-registerotherchunk), [`LocationChunkHelper.RemoveOtherChunk`](/game-api/types/alta-world/locationchunkhelper#m-removeotherchunk), [`LocationChunkHelper.SetupChunkLookup`](/game-api/types/alta-world/locationchunkhelper#m-setupchunklookup), [`StaticCaveChunk.chunk`](/game-api/types/alta-world/staticcavechunk#m-chunk), [`StaticCaveChunk.Chunk`](/game-api/types/alta-world/staticcavechunk#m-chunk-2), [`StaticCaveChunk.RegisterPortal`](/game-api/types/alta-world/staticcavechunk#m-registerportal), [`AtmosphereManager.EnsureAtmosphere`](/game-api/types/alta-world/atmospheremanager#m-ensureatmosphere), [`BorderDefinedAtmosphere.allChunks`](/game-api/types/alta-world/borderdefinedatmosphere#m-allchunks), [`CliffFill.GenerateInternal`](/game-api/types/alta-world-generation/clifffill#m-generateinternal), [`CutoutPathEdgeFill.GenerateInternal`](/game-api/types/alta-world-generation/cutoutpathedgefill#m-generateinternal), [`ForestBridges.ClearDynamic`](/game-api/types/alta-world-generation/forestbridges#m-cleardynamic), [`ForestBridges.ClearStatic`](/game-api/types/alta-world-generation/forestbridges#m-clearstatic), [`ForestBridges.GenerateDynamic`](/game-api/types/alta-world-generation/forestbridges#m-generatedynamic), [`ForestBridges.GenerateStatic`](/game-api/types/alta-world-generation/forestbridges#m-generatestatic), [`ForestEncounters.ClearDynamic`](/game-api/types/alta-world-generation/forestencounters#m-cleardynamic), [`ForestEncounters.ClearStatic`](/game-api/types/alta-world-generation/forestencounters#m-clearstatic), [`ForestEncounters.GenerateDynamic`](/game-api/types/alta-world-generation/forestencounters#m-generatedynamic), [`ForestEncounters.GenerateStatic`](/game-api/types/alta-world-generation/forestencounters#m-generatestatic), [`ForestFill.GenerateInternal`](/game-api/types/alta-world-generation/forestfill#m-generateinternal), [`ForestFillCore.ClearDynamic`](/game-api/types/alta-world-generation/forestfillcore#m-cleardynamic), [`ForestFillCore.ClearStatic`](/game-api/types/alta-world-generation/forestfillcore#m-clearstatic), [`ForestFillCore.GenerateDynamic`](/game-api/types/alta-world-generation/forestfillcore#m-generatedynamic), [`ForestFillCore.GenerateInternal`](/game-api/types/alta-world-generation/forestfillcore#m-generateinternal), [`ForestFillCore.GenerateStatic`](/game-api/types/alta-world-generation/forestfillcore#m-generatestatic), [`ForestGeneration.chunkEdges`](/game-api/types/alta-world-generation/forestgeneration#m-chunkedges), [`ForestGeneration.chunkNodes`](/game-api/types/alta-world-generation/forestgeneration#m-chunknodes), [`ForestGeneration.GetEdgesWithinChunk`](/game-api/types/alta-world-generation/forestgeneration#m-getedgeswithinchunk) and 84 more.

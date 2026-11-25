---
title: "StaticCaveChunk"
description: "class StaticCaveChunk in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticCaveChunk

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ICaveLayer`](/game-api/types/alta-world/icavelayer), [`IPortalApplier`](/game-api/types/alta-world/iportalapplier), [`IProceduralGenerationStreamer`](/game-api/types/alta-world/iproceduralgenerationstreamer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticCaveChunk()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-entrance" /><code>{"private Transform entrance"}</code> |  |
| <Link id="m-exit" /><code>{"private Transform exit"}</code> |  |
| <Link id="m-height" /><code>{"private float height"}</code> |  |
| <Link id="m-isterrainenabled" /><code>{"private bool isTerrainEnabled"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-pathfindinggenerated" /><code>{"private TaskCompletionSource<bool> pathfindingGenerated"}</code> |  |
| <Link id="m-portal" /><code>{"private "}<Link to="/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal"}</code> |  |
| <Link id="m-staticrenderers" /><code>{"private List<Renderer> staticRenderers"}</code> |  |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> |  |
| <Link id="m-terrain" /><code>{"private List<Renderer> terrain"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allstaticrenderers" /><code>{"Dictionary<Renderer, Vector3> AllStaticRenderers { get; set; }"}</code> |  |
| <Link id="m-chunk-2" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> |  |
| <Link id="m-depth" /><code>{"float Depth { get; private set; }"}</code> |  |
| <Link id="m-entrance-2" /><code>{"Vector2 Entrance { get; private set; }"}</code> |  |
| <Link id="m-entrancedirection" /><code>{"Vector2 EntranceDirection { get; private set; }"}</code> |  |
| <Link id="m-layeridentifier" /><code>{"int LayerIdentifier { get; private set; }"}</code> |  |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Manager { get; private set; }"}</code> |  |
| <Link id="m-portaltransform" /><code>{"Transform PortalTransform { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadingfinished" /><code>{"event Action ClientLoadingFinished"}</code> |  |
| <Link id="m-exitready" /><code>{"event Action<int, float, Vector2, Vector2> ExitReady"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getidentifier" /><code>{"string GetIdentifier(int layer)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializecavelayer" /><code>{"void InitializeCaveLayer("}<Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager, int layer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-registerportal" /><code>{"void RegisterPortal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" other)"}</code> |  |
| <Link id="m-setentrance" /><code>{"void SetEntrance(float depth, Vector2 entrance, Vector2 direction)"}</code> |  |
| <Link id="m-toggleterrain" /><code>{"void ToggleTerrain(bool isEnabled)"}</code> |  |
| <Link id="m-activateportal" /><code>{"private void ActivatePortal()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-generatepathfinding" /><code>{"private IEnumerator GeneratePathfinding() (iterator)"}</code> |  |
| <Link id="m-handlelocalplayer" /><code>{"private void HandleLocalPlayer()"}</code> |  |
| <Link id="m-loaddynamic" /><code>{"private Task Alta.Chunks.IProceduralGenerationStreamer.LoadDynamic(bool hasGenerated)"}</code> |  |
| <Link id="m-loadstatic" /><code>{"private async Task Alta.Chunks.IProceduralGenerationStreamer.LoadStatic(CancellationToken cancellationToken)"}</code> |  |
| <Link id="m-recenterbounds" /><code>{"private void RecenterBounds()"}</code> |  |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-togglelocalplayer" /><code>{"private void ToggleLocalPlayer(bool hasLocalPlayer)"}</code> |  |
| <Link id="m-unloaddynamic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadDynamic()"}</code> |  |
| <Link id="m-unloadstatic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadStatic()"}</code> |  |

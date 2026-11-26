---
title: "StaticCaveChunk"
description: "A hand-built cave layer placed under a cave entrance by the CaveLayerManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticCaveChunk

A **class** in `Root.Township`, `Alta.Chunks`.

A hand-built cave layer placed under a cave entrance by the `CaveLayerManager`. Positions itself under the entrance, links its culling portal, and on the server builds its pathfinding graph before the chunk finishes loading. Both sides.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ICaveLayer`](/game-api/types/alta-world/icavelayer), [`IPortalApplier`](/game-api/types/alta-world/iportalapplier), [`IProceduralGenerationStreamer`](/game-api/types/alta-world/iproceduralgenerationstreamer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaticCaveChunk()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | The location chunk this cave layer fills. |
| <Link id="m-entrance" /><code>{"private Transform entrance"}</code> | Transform marking where the layer's entrance is. |
| <Link id="m-exit" /><code>{"private Transform exit"}</code> | Transform marking where the next layer joins on. |
| <Link id="m-height" /><code>{"private float height"}</code> | How deep the layer is. Default 15. |
| <Link id="m-isterrainenabled" /><code>{"private bool isTerrainEnabled"}</code> | Whether the terrain renderers are on. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-pathfindinggenerated" /><code>{"private TaskCompletionSource<bool> pathfindingGenerated"}</code> | Completes when the server finishes the A* scan. |
| <Link id="m-portal" /><code>{"private "}<Link to="/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal"}</code> | Culling portal between this layer and the one in front. |
| <Link id="m-staticrenderers" /><code>{"private List<Renderer> staticRenderers"}</code> | Renderers hidden while the local player isn't in the layer. |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | Method sync for `SyncSetup`, also sent to each player on connect. |
| <Link id="m-terrain" /><code>{"private List<Renderer> terrain"}</code> | Terrain renderers toggled with the local player. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allstaticrenderers" /><code>{"Dictionary<Renderer, Vector3> AllStaticRenderers { get; set; }"}</code> | Static renderers of the cave, with their positions. Client only; they are hidden while the local player is not in the chunk. |
| <Link id="m-chunk-2" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | The location chunk for this cave layer. |
| <Link id="m-depth" /><code>{"float Depth { get; private set; }"}</code> | How deep below the surface this layer sits, set by `SetEntrance`. |
| <Link id="m-entrance-2" /><code>{"Vector2 Entrance { get; private set; }"}</code> | The 2D (XZ) entrance point set by `SetEntrance`. |
| <Link id="m-entrancedirection" /><code>{"Vector2 EntranceDirection { get; private set; }"}</code> | The 2D (XZ) direction of the entrance. |
| <Link id="m-layeridentifier" /><code>{"int LayerIdentifier { get; private set; }"}</code> | This layer's number in the cave layer manager. |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Manager { get; private set; }"}</code> | The cave layer manager that placed this layer. |
| <Link id="m-portaltransform" /><code>{"Transform PortalTransform { get; }"}</code> | Transform of the cave's culling portal. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadingfinished" /><code>{"event Action ClientLoadingFinished"}</code> | Client: raised when the chunk's static content load step runs. |
| <Link id="m-exitready" /><code>{"event Action<int, float, Vector2, Vector2> ExitReady"}</code> | Raised after `SetEntrance` with the layer ID, the next layer's depth, and the exit position and direction. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getidentifier" /><code>{"string GetIdentifier(int layer)"}</code> | Returns the chunk's identifier, whatever layer is asked for. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the setup sync and, on clients, hides the cave's renderers until the local player is in the chunk. |
| <Link id="m-initializecavelayer" /><code>{"void InitializeCaveLayer("}<Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager, int layer)"}</code> | Stores the manager and layer number. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends this layer's position, rotation and layer number to the joining player. |
| <Link id="m-registerportal" /><code>{"void RegisterPortal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" other)"}</code> | Points the culling portal's front at the given chunk. |
| <Link id="m-setentrance" /><code>{"void SetEntrance(float depth, Vector2 entrance, Vector2 direction)"}</code> | Server: moves and rotates the layer so its entrance lines up, syncs it to clients, raises `ExitReady` and starts building pathfinding. |
| <Link id="m-toggleterrain" /><code>{"void ToggleTerrain(bool isEnabled)"}</code> | Shows or hides the cave terrain renderers. Always shown while the local player is in the chunk. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activateportal" /><code>{"private void ActivatePortal()"}</code> | Makes this layer the chunk's portal applier, and the layer in front of its portal that one's applier. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Drops null entries from the static renderer list. |
| <Link id="m-generatepathfinding" /><code>{"private IEnumerator GeneratePathfinding() (iterator)"}</code> | Server: coroutine that scans the cave A* graph over the chunk's bounds, then lets the chunk load go on. |
| <Link id="m-handlelocalplayer" /><code>{"private void HandleLocalPlayer()"}</code> | Client: records the static renderers and hides them and the terrain until the local player is in the chunk. |
| <Link id="m-loaddynamic" /><code>{"private Task Alta.Chunks.IProceduralGenerationStreamer.LoadDynamic(bool hasGenerated)"}</code> | Does nothing. |
| <Link id="m-loadstatic" /><code>{"private async Task Alta.Chunks.IProceduralGenerationStreamer.LoadStatic(CancellationToken cancellationToken)"}</code> | Server: waits until the pathfinding is generated. Client: raises `ClientLoadingFinished` straight away. |
| <Link id="m-recenterbounds" /><code>{"private void RecenterBounds()"}</code> | Moves the chunk's bounds to sit under this layer, `height` deep. |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the layer index, manager and pose to clients, which then place the layer and register its portal. |
| <Link id="m-togglelocalplayer" /><code>{"private void ToggleLocalPlayer(bool hasLocalPlayer)"}</code> | Shows or hides the terrain and static renderers as the local player enters or leaves. |
| <Link id="m-unloaddynamic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadDynamic()"}</code> | Does nothing. |
| <Link id="m-unloadstatic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadStatic()"}</code> | Does nothing. |

</details>

---
title: "NetworkScene"
description: "The networked scene: holds the entity manager, global and void chunks, the spawner and the connections, and sends entity sync each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkScene

A **class** in `Root.Township`, `Alta.Networking`.

The networked scene: holds the entity manager, global and void chunks, the spawner and the connections, and sends entity sync each frame. One per loaded scene, reached through `NetworkSceneManager.Current`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityParent`](/mod/game-api/types/alta-networking/networkentityparent), [`INetworkSceneInternal`](/mod/game-api/types/alta-networking/inetworksceneinternal), [`INetworkScene`](/mod/game-api/types/alta-networking/inetworkscene), [`IEntityManager`](/mod/game-api/types/alta-networking/ientitymanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkScene()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positionmax" /><code>{"static readonly Vector3 PositionMax"}</code> | <span className="api-desc">Upper bound for synced positions (2000 on each axis).</span> |
| <Link id="m-positionmin" /><code>{"static readonly Vector3 PositionMin"}</code> | <span className="api-desc">Lower bound for synced positions (-2000 on each axis).</span> |
| <Link id="m-positionprecision" /><code>{"const float PositionPrecision"}</code> | <span className="api-desc">Precision for synced positions (1 mm).</span> |

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-astar" /><code>{"private AstarPath aStar"}</code> | <span className="api-desc">A* pathfinding prefab spawned on the server if none is active yet.</span> |
| <Link id="m-chunksyncchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" chunkSyncChannel"}</code> | <span className="api-desc">Backing field for `ChunkSyncChannel`, the connection channel for chunk and spawn sync.</span> |
| <Link id="m-clientsocket" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" clientSocket"}</code> | <span className="api-desc">The client socket, when this scene runs as a client.</span> |
| <Link id="m-entitymanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitymanager">{"EntityManager"}</Link>{" entityManager"}</code> | <span className="api-desc">Holds and registers every network entity in the scene. Made in `FirstInitialize`, disposed in `OnDisable`.</span> |
| <Link id="m-globalchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" globalChunk"}</code> | <span className="api-desc">Backing field for `GlobalChunk`, the chunk for entities that belong everywhere. Force-loaded on server start.</span> |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | <span className="api-desc">Set once `FirstInitialize` has run.</span> |
| <Link id="m-respawnpoint" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" respawnPoint"}</code> | <span className="api-desc">Backing field for the `RespawnPoint` spawn area.</span> |
| <Link id="m-scenelogger" /><code>{"private static Logger sceneLogger"}</code> | <span className="api-desc">NLog logger for the scene.</span> |
| <Link id="m-sceneserializer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" sceneSerializer"}</code> | <span className="api-desc">Batches and sends entity serialization. Made in `FirstInitialize`.</span> |
| <Link id="m-serializationchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" serializationChannel"}</code> | <span className="api-desc">Connection channel entity updates are sent on.</span> |
| <Link id="m-serializationinterval" /><code>{"private int serializationInterval"}</code> | <span className="api-desc">Used as a bit mask on the frame counter, so it should be a power of two. Default 2.</span> |
| <Link id="m-serializestep" /><code>{"private int serializeStep"}</code> | <span className="api-desc">Frame counter that `Update` uses to pick when to send.</span> |
| <Link id="m-serversocket" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" serverSocket"}</code> | <span className="api-desc">The server socket, when this scene runs as a server.</span> |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | <span className="api-desc">Backing field for `SpawnPoint`.</span> |
| <Link id="m-voidchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" voidChunk"}</code> | <span className="api-desc">Backing field for `VoidChunk`. Force-loaded on server start if set.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunksyncchannel-2" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" ChunkSyncChannel { get; }"}</code> | <span className="api-desc">The connection channel used to sync chunks.</span> |
| <Link id="m-connections" /><code>{"HashSet<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | <span className="api-desc">Every player connection to this scene.</span> |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; }"}</code> | <span className="api-desc">The server setting's decay multiplier.</span> |
| <Link id="m-globalchunk-2" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GlobalChunk { get; }"}</code> | <span className="api-desc">The chunk loaded at all times. Force-loaded when the server starts.</span> |
| <Link id="m-hassavefiles" /><code>{"bool HasSaveFiles { get; }"}</code> | <span className="api-desc">True if the running server's settings have saving turned on.</span> |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; }"}</code> | <span className="api-desc">The server setting for whether customization is allowed.</span> |
| <Link id="m-issimpleserver" /><code>{"bool IsSimpleServer { get; set; }"}</code> | <span className="api-desc">True when the server target has the simple server flag. Set at server start.</span> |
| <Link id="m-loadingcount" /><code>{"int LoadingCount { get; set; }"}</code> | <span className="api-desc">Count of things still loading, raised and lowered by cave generation.</span> |
| <Link id="m-playerfolder" /><code>{"Transform PlayerFolder { get; private set; }"}</code> | <span className="api-desc">The transform players are put under.</span> |
| <Link id="m-spawner" /><code><Link to="/mod/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; private set; }"}</code> | <span className="api-desc">The spawn manager: the server or client version depending on the side.</span> |
| <Link id="m-spawnpoint-2" /><code>{"Transform SpawnPoint { get; }"}</code> | <span className="api-desc">Default spawn transform set in the scene.</span> |
| <Link id="m-spawnratemultiplier" /><code>{"float SpawnRateMultiplier { get; }"}</code> | <span className="api-desc">The server setting's spawning rate multiplier.</span> |
| <Link id="m-voidchunk-2" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" VoidChunk { get; }"}</code> | <span className="api-desc">A second always-loaded chunk, if the scene has one.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkscene-respawnpoint" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" Alta.Networking.INetworkScene.RespawnPoint { get; }"}</code> | <span className="api-desc">The spawn area players respawn at.</span> |
| <Link id="m-alta-networking-inetworksceneinternal-sceneserializer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" Alta.Networking.INetworkSceneInternal.SceneSerializer { get; }"}</code> | <span className="api-desc">The scene's serializer, which batches entity updates and sends them.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-serverstarted" /><code>{"event Action ServerStarted"}</code> | <span className="api-desc">Raised once the server side of the scene has finished starting.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | <span className="api-desc">Looks up a network entity by identifier.</span> |
| <Link id="m-initialize" /><code>{"async Task Initialize("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, Action<string> statusCallback)"}</code> | <span className="api-desc">Sets up the scene for the socket: server side loads the global and void chunks and raises `ServerStarted`.</span> |
| <Link id="m-printallenititynames" /><code>{"void PrintAllEnitityNames(Logger logger)"}</code> | <span className="api-desc">Writes a CSV of every entity to `entity-details.csv` in the persistent data folder.</span> |
| <Link id="m-printhealth" /><code>{"void PrintHealth(Logger logger)"}</code> | <span className="api-desc">Logs the entity manager's health check.</span> |
| <Link id="m-printprefabscount" /><code>{"void PrintPrefabsCount(Logger logger)"}</code> | <span className="api-desc">Writes a count of root entities per prefab to `prefabs count.txt` in the persistent data folder.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addconnection" /><code>{"private void Alta.Networking.INetworkSceneInternal.AddConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Adds a connection to `Connections` and removes it again when it disconnects.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Only logs that the scene woke up.</span> |
| <Link id="m-firstinitialize" /><code>{"private void FirstInitialize(bool isServer)"}</code> | <span className="api-desc">Runs once: builds the chunk lookup from embedded location chunks, makes the entity manager and serializer, creates the Players folder and turns off embedded prefab components.</span> |
| <Link id="m-forceregisterentity" /><code>{"private uint Alta.Networking.INetworkSceneInternal.ForceRegisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Registers an entity with the entity manager, with a new identifier or a given one.</span> |
| <Link id="m-forceregisterentity-2" /><code>{"private void Alta.Networking.INetworkSceneInternal.ForceRegisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> | <span className="api-desc">Registers an entity with the entity manager, with a new identifier or a given one.</span> |
| <Link id="m-handlesync" /><code>{"private void Alta.Networking.INetworkSceneInternal.HandleSync(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> | <span className="api-desc">Client: syncs one embedded scene entity's identifier. After the last one, tells `NetworkSceneManager` the scene sync is done.</span> |
| <Link id="m-initializeasclient" /><code>{"private void InitializeAsClient()"}</code> | <span className="api-desc">Client: makes the client spawn manager.</span> |
| <Link id="m-initializeasserver" /><code>{"private async Task InitializeAsServer()"}</code> | <span className="api-desc">Server: makes the spawn manager and A* graph, force-loads the global and void chunks, registers and chunks embedded entities, then raises `ServerStarted`.</span> |
| <Link id="m-markserialized" /><code>{"private void Alta.Networking.Internal.IEntityManager.MarkSerialized("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | <span className="api-desc">Hands an entity and its serializer to the entity manager to mark it as needing a sync.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Clears `NetworkSceneManager.Current` if it's this scene, resets the scene load wait and disposes the entity manager.</span> |
| <Link id="m-removeconnection" /><code>{"private void RemoveConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Removes a disconnected connection from `Connections`.</span> |
| <Link id="m-sendserialized" /><code>{"private void SendSerialized("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | <span className="api-desc">Sends the batched entity updates on a socket through the scene serializer.</span> |
| <Link id="m-serializeasclient" /><code>{"private void Alta.Networking.Internal.IEntityManager.SerializeAsClient("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Asks the entity manager to send a client-side update for an entity.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Alternates frames between sending server and client entity updates, using `serializationInterval` as a bit mask.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NetworkScene`:

<div className="api-used-in">

[`ClientSpawnManager.ClientSpawnManager`](/mod/game-api/types/alta-networking/clientspawnmanager#m-ctor), [`ServerSpawnManager.ServerSpawnManager`](/mod/game-api/types/alta-networking/serverspawnmanager#m-ctor), [`SpawningTimer.scene`](/mod/game-api/types/global-s/spawningtimer#m-scene).

</div>

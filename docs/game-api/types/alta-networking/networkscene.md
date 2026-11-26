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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityParent`](/game-api/types/alta-networking/networkentityparent), [`INetworkSceneInternal`](/game-api/types/alta-networking/inetworksceneinternal), [`INetworkScene`](/game-api/types/alta-networking/inetworkscene), [`IEntityManager`](/game-api/types/alta-networking/ientitymanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkScene()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positionmax" /><code>{"static readonly Vector3 PositionMax"}</code> | Upper bound for synced positions (2000 on each axis). |
| <Link id="m-positionmin" /><code>{"static readonly Vector3 PositionMin"}</code> | Lower bound for synced positions (-2000 on each axis). |
| <Link id="m-positionprecision" /><code>{"const float PositionPrecision"}</code> | Precision for synced positions (1 mm). |

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-astar" /><code>{"private AstarPath aStar"}</code> | A* pathfinding prefab spawned on the server if none is active yet. |
| <Link id="m-chunksyncchannel" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" chunkSyncChannel"}</code> | Backing field for `ChunkSyncChannel`, the connection channel for chunk and spawn sync. |
| <Link id="m-clientsocket" /><code>{"private "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" clientSocket"}</code> | The client socket, when this scene runs as a client. |
| <Link id="m-entitymanager" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymanager">{"EntityManager"}</Link>{" entityManager"}</code> | Holds and registers every network entity in the scene. Made in `FirstInitialize`, disposed in `OnDisable`. |
| <Link id="m-globalchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" globalChunk"}</code> | Backing field for `GlobalChunk`, the chunk for entities that belong everywhere. Force-loaded on server start. |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | Set once `FirstInitialize` has run. |
| <Link id="m-respawnpoint" /><code>{"private "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" respawnPoint"}</code> | Backing field for the `RespawnPoint` spawn area. |
| <Link id="m-scenelogger" /><code>{"private static Logger sceneLogger"}</code> | NLog logger for the scene. |
| <Link id="m-sceneserializer" /><code>{"private "}<Link to="/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" sceneSerializer"}</code> | Batches and sends entity serialization. Made in `FirstInitialize`. |
| <Link id="m-serializationchannel" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" serializationChannel"}</code> | Connection channel entity updates are sent on. |
| <Link id="m-serializationinterval" /><code>{"private int serializationInterval"}</code> | Used as a bit mask on the frame counter, so it should be a power of two. Default 2. |
| <Link id="m-serializestep" /><code>{"private int serializeStep"}</code> | Frame counter that `Update` uses to pick when to send. |
| <Link id="m-serversocket" /><code>{"private "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" serverSocket"}</code> | The server socket, when this scene runs as a server. |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | Backing field for `SpawnPoint`. |
| <Link id="m-voidchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" voidChunk"}</code> | Backing field for `VoidChunk`. Force-loaded on server start if set. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunksyncchannel-2" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" ChunkSyncChannel { get; }"}</code> | The connection channel used to sync chunks. |
| <Link id="m-connections" /><code>{"HashSet<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | Every player connection to this scene. |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; }"}</code> | The server setting's decay multiplier. |
| <Link id="m-globalchunk-2" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GlobalChunk { get; }"}</code> | The chunk loaded at all times. Force-loaded when the server starts. |
| <Link id="m-hassavefiles" /><code>{"bool HasSaveFiles { get; }"}</code> | True if the running server's settings have saving turned on. |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; }"}</code> | The server setting for whether customization is allowed. |
| <Link id="m-issimpleserver" /><code>{"bool IsSimpleServer { get; set; }"}</code> | True when the server target has the simple server flag. Set at server start. |
| <Link id="m-loadingcount" /><code>{"int LoadingCount { get; set; }"}</code> | Count of things still loading, raised and lowered by cave generation. |
| <Link id="m-playerfolder" /><code>{"Transform PlayerFolder { get; private set; }"}</code> | The transform players are put under. |
| <Link id="m-spawner" /><code><Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; private set; }"}</code> | The spawn manager: the server or client version depending on the side. |
| <Link id="m-spawnpoint-2" /><code>{"Transform SpawnPoint { get; }"}</code> | Default spawn transform set in the scene. |
| <Link id="m-spawnratemultiplier" /><code>{"float SpawnRateMultiplier { get; }"}</code> | The server setting's spawning rate multiplier. |
| <Link id="m-voidchunk-2" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" VoidChunk { get; }"}</code> | A second always-loaded chunk, if the scene has one. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkscene-respawnpoint" /><code>{"private "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" Alta.Networking.INetworkScene.RespawnPoint { get; }"}</code> | The spawn area players respawn at. |
| <Link id="m-alta-networking-inetworksceneinternal-sceneserializer" /><code>{"private "}<Link to="/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" Alta.Networking.INetworkSceneInternal.SceneSerializer { get; }"}</code> | The scene's serializer, which batches entity updates and sends them. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-serverstarted" /><code>{"event Action ServerStarted"}</code> | Raised once the server side of the scene has finished starting. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | Looks up a network entity by identifier. |
| <Link id="m-initialize" /><code>{"async Task Initialize("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, Action<string> statusCallback)"}</code> | Sets up the scene for the socket: server side loads the global and void chunks and raises `ServerStarted`. |
| <Link id="m-printallenititynames" /><code>{"void PrintAllEnitityNames(Logger logger)"}</code> | Writes a CSV of every entity to `entity-details.csv` in the persistent data folder. |
| <Link id="m-printhealth" /><code>{"void PrintHealth(Logger logger)"}</code> | Logs the entity manager's health check. |
| <Link id="m-printprefabscount" /><code>{"void PrintPrefabsCount(Logger logger)"}</code> | Writes a count of root entities per prefab to `prefabs count.txt` in the persistent data folder. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addconnection" /><code>{"private void Alta.Networking.INetworkSceneInternal.AddConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Adds a connection to `Connections` and removes it again when it disconnects. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Only logs that the scene woke up. |
| <Link id="m-firstinitialize" /><code>{"private void FirstInitialize(bool isServer)"}</code> | Runs once: builds the chunk lookup from embedded location chunks, makes the entity manager and serializer, creates the Players folder and turns off embedded prefab components. |
| <Link id="m-forceregisterentity" /><code>{"private uint Alta.Networking.INetworkSceneInternal.ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Registers an entity with the entity manager, with a new identifier or a given one. |
| <Link id="m-forceregisterentity-2" /><code>{"private void Alta.Networking.INetworkSceneInternal.ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> | Registers an entity with the entity manager, with a new identifier or a given one. |
| <Link id="m-handlesync" /><code>{"private void Alta.Networking.INetworkSceneInternal.HandleSync(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> | Client: syncs one embedded scene entity's identifier. After the last one, tells `NetworkSceneManager` the scene sync is done. |
| <Link id="m-initializeasclient" /><code>{"private void InitializeAsClient()"}</code> | Client: makes the client spawn manager. |
| <Link id="m-initializeasserver" /><code>{"private async Task InitializeAsServer()"}</code> | Server: makes the spawn manager and A* graph, force-loads the global and void chunks, registers and chunks embedded entities, then raises `ServerStarted`. |
| <Link id="m-markserialized" /><code>{"private void Alta.Networking.Internal.IEntityManager.MarkSerialized("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | Hands an entity and its serializer to the entity manager to mark it as needing a sync. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Clears `NetworkSceneManager.Current` if it's this scene, resets the scene load wait and disposes the entity manager. |
| <Link id="m-removeconnection" /><code>{"private void RemoveConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Removes a disconnected connection from `Connections`. |
| <Link id="m-sendserialized" /><code>{"private void SendSerialized("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | Sends the batched entity updates on a socket through the scene serializer. |
| <Link id="m-serializeasclient" /><code>{"private void Alta.Networking.Internal.IEntityManager.SerializeAsClient("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Asks the entity manager to send a client-side update for an entity. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Alternates frames between sending server and client entity updates, using `serializationInterval` as a bit mask. |

</details>

## Used in

Members of other types that take, return or hold a `NetworkScene`:

[`ClientSpawnManager.ClientSpawnManager`](/game-api/types/alta-networking/clientspawnmanager#m-ctor), [`ServerSpawnManager.ServerSpawnManager`](/game-api/types/alta-networking/serverspawnmanager#m-ctor), [`SpawningTimer.scene`](/game-api/types/global-s/spawningtimer#m-scene).

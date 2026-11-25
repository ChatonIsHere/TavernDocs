---
title: "NetworkScene"
description: "class NetworkScene in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkScene

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityParent`](/game-api/types/alta-networking/networkentityparent), [`INetworkSceneInternal`](/game-api/types/alta-networking/inetworksceneinternal), [`INetworkScene`](/game-api/types/alta-networking/inetworkscene), [`IEntityManager`](/game-api/types/alta-networking/ientitymanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkScene()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positionmax" /><code>{"static readonly Vector3 PositionMax"}</code> |  |
| <Link id="m-positionmin" /><code>{"static readonly Vector3 PositionMin"}</code> |  |
| <Link id="m-positionprecision" /><code>{"const float PositionPrecision"}</code> |  |
| <Link id="m-astar" /><code>{"private AstarPath aStar"}</code> |  |
| <Link id="m-chunksyncchannel" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" chunkSyncChannel"}</code> |  |
| <Link id="m-clientsocket" /><code>{"private "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" clientSocket"}</code> |  |
| <Link id="m-entitymanager" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymanager">{"EntityManager"}</Link>{" entityManager"}</code> |  |
| <Link id="m-globalchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" globalChunk"}</code> |  |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> |  |
| <Link id="m-respawnpoint" /><code>{"private "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" respawnPoint"}</code> |  |
| <Link id="m-scenelogger" /><code>{"private static Logger sceneLogger"}</code> |  |
| <Link id="m-sceneserializer" /><code>{"private "}<Link to="/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" sceneSerializer"}</code> |  |
| <Link id="m-serializationchannel" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" serializationChannel"}</code> |  |
| <Link id="m-serializationinterval" /><code>{"private int serializationInterval"}</code> |  |
| <Link id="m-serializestep" /><code>{"private int serializeStep"}</code> |  |
| <Link id="m-serversocket" /><code>{"private "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" serverSocket"}</code> |  |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> |  |
| <Link id="m-voidchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" voidChunk"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunksyncchannel-2" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" ChunkSyncChannel { get; }"}</code> |  |
| <Link id="m-connections" /><code>{"HashSet<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> |  |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; }"}</code> |  |
| <Link id="m-globalchunk-2" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GlobalChunk { get; }"}</code> |  |
| <Link id="m-hassavefiles" /><code>{"bool HasSaveFiles { get; }"}</code> |  |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; }"}</code> |  |
| <Link id="m-issimpleserver" /><code>{"bool IsSimpleServer { get; set; }"}</code> |  |
| <Link id="m-loadingcount" /><code>{"int LoadingCount { get; set; }"}</code> |  |
| <Link id="m-playerfolder" /><code>{"Transform PlayerFolder { get; private set; }"}</code> |  |
| <Link id="m-spawner" /><code><Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; private set; }"}</code> |  |
| <Link id="m-spawnpoint-2" /><code>{"Transform SpawnPoint { get; }"}</code> |  |
| <Link id="m-spawnratemultiplier" /><code>{"float SpawnRateMultiplier { get; }"}</code> |  |
| <Link id="m-voidchunk-2" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" VoidChunk { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkscene-respawnpoint" /><code>{"private "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" Alta.Networking.INetworkScene.RespawnPoint { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworksceneinternal-sceneserializer" /><code>{"private "}<Link to="/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" Alta.Networking.INetworkSceneInternal.SceneSerializer { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-serverstarted" /><code>{"event Action ServerStarted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> |  |
| <Link id="m-initialize" /><code>{"async Task Initialize("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, Action<string> statusCallback)"}</code> |  |
| <Link id="m-printallenititynames" /><code>{"void PrintAllEnitityNames(Logger logger)"}</code> |  |
| <Link id="m-printhealth" /><code>{"void PrintHealth(Logger logger)"}</code> |  |
| <Link id="m-printprefabscount" /><code>{"void PrintPrefabsCount(Logger logger)"}</code> |  |
| <Link id="m-addconnection" /><code>{"private void Alta.Networking.INetworkSceneInternal.AddConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-firstinitialize" /><code>{"private void FirstInitialize(bool isServer)"}</code> |  |
| <Link id="m-forceregisterentity" /><code>{"private uint Alta.Networking.INetworkSceneInternal.ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-forceregisterentity-2" /><code>{"private void Alta.Networking.INetworkSceneInternal.ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> |  |
| <Link id="m-handlesync" /><code>{"private void Alta.Networking.INetworkSceneInternal.HandleSync(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> |  |
| <Link id="m-initializeasclient" /><code>{"private void InitializeAsClient()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"private async Task InitializeAsServer()"}</code> |  |
| <Link id="m-markserialized" /><code>{"private void Alta.Networking.Internal.IEntityManager.MarkSerialized("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-removeconnection" /><code>{"private void RemoveConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-sendserialized" /><code>{"private void SendSerialized("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> |  |
| <Link id="m-serializeasclient" /><code>{"private void Alta.Networking.Internal.IEntityManager.SerializeAsClient("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `NetworkScene`:

[`ClientSpawnManager.ClientSpawnManager`](/game-api/types/alta-networking/clientspawnmanager#m-ctor), [`ServerSpawnManager.ServerSpawnManager`](/game-api/types/alta-networking/serverspawnmanager#m-ctor), [`SpawningTimer.scene`](/game-api/types/global-s/spawningtimer#m-scene).

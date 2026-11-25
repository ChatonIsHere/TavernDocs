---
title: "LocalNetworkScene"
description: "class LocalNetworkScene in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalNetworkScene

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`INetworkScene`](/game-api/types/alta-networking/inetworkscene), [`INetworkSceneInternal`](/game-api/types/alta-networking/inetworksceneinternal), [`IEntityManager`](/game-api/types/alta-networking/ientitymanager)
- **Nested types** [`InitializeOnAwake`](/game-api/types/global-i-l/localnetworkscene-initializeonawake)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalNetworkScene()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-spawnarea" /><code>{"private "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" spawnArea"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunksyncchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" ChunkSyncChannel { get; }"}</code> |  |
| <Link id="m-connections" /><code>{"HashSet<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> |  |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; }"}</code> |  |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Embedded { get; }"}</code> |  |
| <Link id="m-globalchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GlobalChunk { get; }"}</code> |  |
| <Link id="m-hassavefiles" /><code>{"bool HasSaveFiles { get; }"}</code> |  |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; }"}</code> |  |
| <Link id="m-isserver" /><code>{"bool IsServer { get; }"}</code> |  |
| <Link id="m-issimpleserver" /><code>{"bool IsSimpleServer { get; set; }"}</code> |  |
| <Link id="m-loadingcount" /><code>{"int LoadingCount { get; set; }"}</code> |  |
| <Link id="m-playerfolder" /><code>{"Transform PlayerFolder { get; }"}</code> |  |
| <Link id="m-respawnpoint" /><code><Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" RespawnPoint { get; }"}</code> |  |
| <Link id="m-spawner" /><code><Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; private set; }"}</code> |  |
| <Link id="m-spawnpoint" /><code>{"Transform SpawnPoint { get; }"}</code> |  |
| <Link id="m-spawnratemultiplier" /><code>{"float SpawnRateMultiplier { get; }"}</code> |  |
| <Link id="m-voidchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" VoidChunk { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworksceneinternal-sceneserializer" /><code>{"private "}<Link to="/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" Alta.Networking.INetworkSceneInternal.SceneSerializer { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-serverstarted" /><code>{"event Action ServerStarted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addconnection" /><code>{"void AddConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-destroyallentities" /><code>{"void DestroyAllEntities()"}</code> |  |
| <Link id="m-forceregisterentity" /><code>{"uint ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-forceregisterentity-2" /><code>{"void ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> |  |
| <Link id="m-getentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> |  |
| <Link id="m-handlesync" /><code>{"void HandleSync(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> |  |
| <Link id="m-initialize" /><code>{"Task Initialize("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, Action<string> statusCallback)"}</code> |  |
| <Link id="m-initializeentity" /><code>{"void InitializeEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isSettingOwned)"}</code> |  |
| <Link id="m-initialsyncentities" /><code>{"void InitialSyncEntities("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> |  |
| <Link id="m-markserialized" /><code>{"void MarkSerialized("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> |  |
| <Link id="m-prepareserializeentities" /><code>{"void PrepareSerializeEntities()"}</code> |  |
| <Link id="m-sendserialized" /><code>{"void SendSerialized("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, ref int startIndex)"}</code> |  |
| <Link id="m-serializeasclient" /><code>{"void SerializeAsClient("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-serializeasclient-2" /><code>{"void SerializeAsClient("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isAdding = true)"}</code> |  |
| <Link id="m-serializeentity" /><code>{"void SerializeEntity("}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" entitySerializer, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSendingAll)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-setallitemstonotnetwork" /><code>{"private void SetAllItemsToNotNetwork()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LocalNetworkScene`:

[`MainMenuControllerSpawner.scene`](/game-api/types/global-m-o/mainmenucontrollerspawner#m-scene), [`VrMainMenu.localScene`](/game-api/types/global-t-x/vrmainmenu#m-localscene).

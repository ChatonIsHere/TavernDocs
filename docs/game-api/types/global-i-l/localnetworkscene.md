---
title: "LocalNetworkScene"
description: "An offline stand-in network scene for the main menu: it pretends to be the server, starts a dummy local server and a fake socket, and initializes every..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalNetworkScene

A **class** in `Root.Township`, no namespace.

An offline stand-in network scene for the main menu: it pretends to be the server, starts a dummy local server and a fake socket, and initializes every entity under it locally. Most networking members throw `NotImplementedException`.

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
| <Link id="m-chunksyncchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" ChunkSyncChannel { get; }"}</code> | Always null. |
| <Link id="m-connections" /><code>{"HashSet<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | Always null; there are no connections. |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; }"}</code> | Always 1. |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Embedded { get; }"}</code> | List of embedded entities; not filled by this class. |
| <Link id="m-globalchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GlobalChunk { get; }"}</code> | Always null. |
| <Link id="m-hassavefiles" /><code>{"bool HasSaveFiles { get; }"}</code> | Always false. |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; }"}</code> | Always false. |
| <Link id="m-isserver" /><code>{"bool IsServer { get; }"}</code> | Always true. |
| <Link id="m-issimpleserver" /><code>{"bool IsSimpleServer { get; set; }"}</code> | Settable flag. |
| <Link id="m-loadingcount" /><code>{"int LoadingCount { get; set; }"}</code> | Count of things still loading. |
| <Link id="m-playerfolder" /><code>{"Transform PlayerFolder { get; }"}</code> | Always null. |
| <Link id="m-respawnpoint" /><code><Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" RespawnPoint { get; }"}</code> | The spawn area set in the inspector. |
| <Link id="m-spawner" /><code><Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; private set; }"}</code> | A `LocalSpawnManager`, created on `Awake`. |
| <Link id="m-spawnpoint" /><code>{"Transform SpawnPoint { get; }"}</code> | Always null. |
| <Link id="m-spawnratemultiplier" /><code>{"float SpawnRateMultiplier { get; }"}</code> | Always 1. |
| <Link id="m-voidchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" VoidChunk { get; }"}</code> | Always null. |
| <Link id="m-alta-networking-inetworksceneinternal-sceneserializer" /><code>{"private "}<Link to="/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" Alta.Networking.INetworkSceneInternal.SceneSerializer { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-serverstarted" /><code>{"event Action ServerStarted"}</code> | Raised once every entity under the scene has been initialized on `Start`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addconnection" /><code>{"void AddConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Not supported; throws. |
| <Link id="m-destroyallentities" /><code>{"void DestroyAllEntities()"}</code> | Destroys every network entity under the scene through the spawner. |
| <Link id="m-forceregisterentity" /><code>{"uint ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Returns 0 without registering; the overload with an identifier throws. |
| <Link id="m-forceregisterentity-2" /><code>{"void ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> | Returns 0 without registering; the overload with an identifier throws. |
| <Link id="m-getentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | Not supported; throws. |
| <Link id="m-handlesync" /><code>{"void HandleSync(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> | Not supported; throws. |
| <Link id="m-initialize" /><code>{"Task Initialize("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, Action<string> statusCallback)"}</code> | Not supported; throws. |
| <Link id="m-initializeentity" /><code>{"void InitializeEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isSettingOwned)"}</code> | Initializes an entity and its children as server, or waits until its object is active. |
| <Link id="m-initialsyncentities" /><code>{"void InitialSyncEntities("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | Not supported; throws. |
| <Link id="m-markserialized" /><code>{"void MarkSerialized("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | Does nothing. |
| <Link id="m-prepareserializeentities" /><code>{"void PrepareSerializeEntities()"}</code> | Not supported; throws. |
| <Link id="m-sendserialized" /><code>{"void SendSerialized("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | Not supported; throws. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, ref int startIndex)"}</code> | Not supported; throws. |
| <Link id="m-serializeasclient" /><code>{"void SerializeAsClient("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | The one-argument version does nothing; the two-argument one throws. |
| <Link id="m-serializeasclient-2" /><code>{"void SerializeAsClient("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isAdding = true)"}</code> | The one-argument version does nothing; the two-argument one throws. |
| <Link id="m-serializeentity" /><code>{"void SerializeEntity("}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" entitySerializer, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSendingAll)"}</code> | Not supported; throws. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-setallitemstonotnetwork" /><code>{"private void SetAllItemsToNotNetwork()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LocalNetworkScene`:

[`MainMenuControllerSpawner.scene`](/game-api/types/global-m-o/mainmenucontrollerspawner#m-scene), [`VrMainMenu.localScene`](/game-api/types/global-t-x/vrmainmenu#m-localscene).

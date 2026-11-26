---
title: "LocalNetworkScene"
description: "An offline stand-in network scene for the main menu: it pretends to be the server, starts a dummy local server and a fake socket, and initializes every..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalNetworkScene

A **class** in `Root.Township`, the global namespace.

An offline stand-in network scene for the main menu: it pretends to be the server, starts a dummy local server and a fake socket, and initializes every entity under it locally. Most networking members throw `NotImplementedException`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`INetworkScene`](/mod/game-api/types/alta-networking/inetworkscene), [`INetworkSceneInternal`](/mod/game-api/types/alta-networking/inetworksceneinternal), [`IEntityManager`](/mod/game-api/types/alta-networking/ientitymanager)
- **Nested types** [`InitializeOnAwake`](/mod/game-api/types/global-i-l/localnetworkscene-initializeonawake)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalNetworkScene()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; logs entities that fail to initialize.</span> |
| <Link id="m-spawnarea" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" spawnArea"}</code> | <span className="api-desc">Spawn area returned as `RespawnPoint`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunksyncchannel" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" ChunkSyncChannel { get; }"}</code> | <span className="api-desc">Always null.</span> |
| <Link id="m-connections" /><code>{"HashSet<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | <span className="api-desc">Always null; there are no connections.</span> |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; }"}</code> | <span className="api-desc">Always 1.</span> |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Embedded { get; }"}</code> | <span className="api-desc">List of embedded entities; not filled by this class.</span> |
| <Link id="m-globalchunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GlobalChunk { get; }"}</code> | <span className="api-desc">Always null.</span> |
| <Link id="m-hassavefiles" /><code>{"bool HasSaveFiles { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-isserver" /><code>{"bool IsServer { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-issimpleserver" /><code>{"bool IsSimpleServer { get; set; }"}</code> | <span className="api-desc">Settable flag.</span> |
| <Link id="m-loadingcount" /><code>{"int LoadingCount { get; set; }"}</code> | <span className="api-desc">Count of things still loading.</span> |
| <Link id="m-playerfolder" /><code>{"Transform PlayerFolder { get; }"}</code> | <span className="api-desc">Always null.</span> |
| <Link id="m-respawnpoint" /><code><Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" RespawnPoint { get; }"}</code> | <span className="api-desc">The spawn area set in the inspector.</span> |
| <Link id="m-spawner" /><code><Link to="/mod/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; private set; }"}</code> | <span className="api-desc">A `LocalSpawnManager`, created on `Awake`.</span> |
| <Link id="m-spawnpoint" /><code>{"Transform SpawnPoint { get; }"}</code> | <span className="api-desc">Always null.</span> |
| <Link id="m-spawnratemultiplier" /><code>{"float SpawnRateMultiplier { get; }"}</code> | <span className="api-desc">Always 1.</span> |
| <Link id="m-voidchunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" VoidChunk { get; }"}</code> | <span className="api-desc">Always null.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworksceneinternal-sceneserializer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" Alta.Networking.INetworkSceneInternal.SceneSerializer { get; }"}</code> | <span className="api-desc">Always null; a local scene has no serializer.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-serverstarted" /><code>{"event Action ServerStarted"}</code> | <span className="api-desc">Raised once every entity under the scene has been initialized on `Start`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addconnection" /><code>{"void AddConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Not supported; throws.</span> |
| <Link id="m-destroyallentities" /><code>{"void DestroyAllEntities()"}</code> | <span className="api-desc">Destroys every network entity under the scene through the spawner.</span> |
| <Link id="m-forceregisterentity" /><code>{"uint ForceRegisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Returns 0 without registering; the overload with an identifier throws.</span> |
| <Link id="m-forceregisterentity-2" /><code>{"void ForceRegisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> | <span className="api-desc">Returns 0 without registering; the overload with an identifier throws.</span> |
| <Link id="m-getentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | <span className="api-desc">Not supported; throws.</span> |
| <Link id="m-handlesync" /><code>{"void HandleSync(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> | <span className="api-desc">Not supported; throws.</span> |
| <Link id="m-initialize" /><code>{"Task Initialize("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, Action<string> statusCallback)"}</code> | <span className="api-desc">Not supported; throws.</span> |
| <Link id="m-initializeentity" /><code>{"void InitializeEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isSettingOwned)"}</code> | <span className="api-desc">Initializes an entity and its children as server, or waits until its object is active.</span> |
| <Link id="m-initialsyncentities" /><code>{"void InitialSyncEntities("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | <span className="api-desc">Not supported; throws.</span> |
| <Link id="m-markserialized" /><code>{"void MarkSerialized("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-prepareserializeentities" /><code>{"void PrepareSerializeEntities()"}</code> | <span className="api-desc">Not supported; throws.</span> |
| <Link id="m-sendserialized" /><code>{"void SendSerialized("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | <span className="api-desc">Not supported; throws.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, ref int startIndex)"}</code> | <span className="api-desc">Not supported; throws.</span> |
| <Link id="m-serializeasclient" /><code>{"void SerializeAsClient("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">The one-argument version does nothing; the two-argument one throws.</span> |
| <Link id="m-serializeasclient-2" /><code>{"void SerializeAsClient("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isAdding = true)"}</code> | <span className="api-desc">The one-argument version does nothing; the two-argument one throws.</span> |
| <Link id="m-serializeentity" /><code>{"void SerializeEntity("}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" entitySerializer, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSendingAll)"}</code> | <span className="api-desc">Not supported; throws.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes this the current scene, marks it as server, starts a dummy local server and sets a fake socket.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the dummy local server.</span> |
| <Link id="m-setallitemstonotnetwork" /><code>{"private void SetAllItemsToNotNetwork()"}</code> | <span className="api-desc">Turns networking off on every child interactable, initializes every child entity as owned, then raises `ServerStarted`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Calls `SetAllItemsToNotNetwork`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LocalNetworkScene`:

<div className="api-used-in">

[`MainMenuControllerSpawner.scene`](/mod/game-api/types/global-m-o/mainmenucontrollerspawner#m-scene), [`VrMainMenu.localScene`](/mod/game-api/types/global-t-x/vrmainmenu#m-localscene).

</div>

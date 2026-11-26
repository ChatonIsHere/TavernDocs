---
title: "NetworkEntity"
description: "A networked object: anything the server spawns, saves and syncs to players, including embedded parts of a prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntity

A **class** in `Root.Township`, `Alta.Networking`.

A networked object: anything the server spawns, saves and syncs to players, including embedded parts of a prefab. Both sides; the server owns it. Get one from a component with `GetComponent<NetworkEntity>()` or a behaviour's `Entity`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IChunkedEntity`](/game-api/types/alta-networking/ichunkedentity), [`IEntitySerialized`](/game-api/types/alta-networking/ientityserialized), [`INetworkEntity`](/game-api/types/alta-networking/inetworkentity)
- **Derived types** [`NetworkEntityModifiers`](/game-api/types/global-m-o/networkentitymodifiers), [`Player`](/game-api/types/global-p/player), [`PositionedNetworkPrefab`](/game-api/types/global-p/positionednetworkprefab)
- **Nested types** [`SyncPriorityModifiers`](/game-api/types/alta-networking/networkentity-syncprioritymodifiers)
- **Attributes** `DisallowMultipleComponent`
- **Documented in** [NetworkEntity](/game-api/world/network-entity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkEntity()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-initializationfinished" /><code><Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{"> InitializationFinished"}</code> | A one-time event raised after `Initialize`. Handlers added later run straight away. |

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached `transform`, filled on first use by `Transform` and `FramePosition`. |
| <Link id="m-chunker" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" chunker"}</code> | Backing field for `Chunker`, created in the constructor. |
| <Link id="m-commonimpacttool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" commonImpactTool"}</code> | The `ImpactTool` on the same object, found in the editor; backing field for `CommonImpactTool`. |
| <Link id="m-commoninteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" commonInteractable"}</code> | The `Interactable` on the same object, found in the editor; backing field for `CommonInteractable`. |
| <Link id="m-commonpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" commonPickup"}</code> | The `Pickup` on the same object, found in the editor; backing field for `CommonPickup`. |
| <Link id="m-embeddedid" /><code>{"private int embeddedId"}</code> | Backing field for `EmbeddedId`: the entity's index among the embedded child entities of its prefab. |
| <Link id="m-getpositionchunk" /><code>{"private Func<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> getPositionChunk"}</code> | Function behind `PositionChunk`. By default it walks up the chunking parents and uses the top one's chunk. |
| <Link id="m-hash" /><code>{"private int hash"}</code> | Backing field for `Hash`, validated in `OnValidate`. |
| <Link id="m-hasnetworkbehaviours" /><code>{"private bool hasNetworkBehaviours"}</code> | Set in the editor when the object has any `INetworkEntityBehaviour`; `InitializeAsServer` skips the behaviours when false. |
| <Link id="m-isinitializedasserver" /><code>{"private bool isInitializedAsServer"}</code> | Stops `InitializeAsServer` from running twice. |
| <Link id="m-issendingmessages" /><code>{"private bool isSendingMessages"}</code> | Backing field for `IsSendingMessages`. |
| <Link id="m-lastframe" /><code>{"private int lastFrame"}</code> | Frame number when `lastFramePosition` was last read; lets `FramePosition` read the transform once per frame. |
| <Link id="m-lastframeposition" /><code>{"private Vector3 lastFramePosition"}</code> | Position cached for the current frame by `FramePosition`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-messagehandler" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagehandler">{"EntityMessageHandler"}</Link>{" messageHandler"}</code> | Backing field for `MessageHandler`, created on first use. |
| <Link id="m-moveentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" moveEntity"}</code> | Method sync for `MoveEntity` messages, used by `ForcePositionSync` to send the position to the entity's chunks. |
| <Link id="m-networkentitybehaviours" /><code>{"private MonoBehaviour[] networkEntityBehaviours"}</code> | Every `INetworkEntityBehaviour` on the object, found in the editor; these get the initialize, connect and disconnect calls. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | The `NetworkPrefab` on the same object; backing field for `Prefab`. |
| <Link id="m-serializedbehaviours" /><code>{"private static readonly List<"}<Link to="/game-api/types/alta-networking/inetworkserialized">{"INetworkSerialized"}</Link>{"> serializedBehaviours"}</code> | Static scratch list used by `CreateSerializer` while it collects the serialized behaviours. |
| <Link id="m-serializer" /><code>{"private "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer"}</code> | Backing field for `Serializer`; null when no behaviour is serialized. |
| <Link id="m-syncpriority" /><code>{"private int syncPriority"}</code> | Base sync priority (default 10). `SyncPriority` lowers it by 5 while any priority modifier, such as docked or interacted, is set. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"int ChildCount { get; }"}</code> | How many entities have this one as their `ChunkingParent`. |
| <Link id="m-children" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Children { get; }"}</code> | Entities that have this one as their `ChunkingParent`, such as docked items and a bag's contents. |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; set; }"}</code> | The chunk the entity is in. Setting it moves it there; on the server this is ignored while it has a `ChunkingParent`. |
| <Link id="m-chunkingparent" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ChunkingParent { get; set; }"}</code> | The entity this one rides with (a dock's owner, a part's structure). It takes that parent's chunk. |
| <Link id="m-commonimpacttool-2" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" CommonImpactTool { get; }"}</code> | The `ImpactTool` on the same object, cached at bake time, or null. |
| <Link id="m-commoninteractable-2" /><code><Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CommonInteractable { get; }"}</code> | The `Interactable` on the same object, cached at bake time, or null. |
| <Link id="m-commonpickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" CommonPickup { get; }"}</code> | The `Pickup` on the same object, cached at bake time, or null. |
| <Link id="m-currentprioritymodifiers" /><code><Link to="/game-api/types/alta-networking/networkentity-syncprioritymodifiers">{"NetworkEntity.SyncPriorityModifiers"}</Link>{" CurrentPriorityModifiers { get; set; }"}</code> | Flags that raise sync priority. `DockedOrInteracted` is set while held or docked and lowers `SyncPriority` by 5. |
| <Link id="m-editorsafescene" /><code><Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" EditorSafeScene { get; }"}</code> | The entity's scene, or in the editor outside play mode, the first `NetworkScene` found. |
| <Link id="m-embeddedid-2" /><code>{"int EmbeddedId { get; set; }"}</code> | Its index in its prefab's embedded entity list. |
| <Link id="m-frameposition" /><code>{"Vector3 FramePosition { get; }"}</code> | `transform.position`, cached once per frame. Cheap in hot loops. |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | The entity's own hash inside its prefab, set in the editor. Used to match embedded entities when a save loads. |
| <Link id="m-identifier" /><code>{"uint Identifier { get; private set; }"}</code> | The runtime id used by messages and commands. Changes on every spawn or chunk load, so never save it. |
| <Link id="m-isbeingdestroyed" /><code>{"bool IsBeingDestroyed { get; set; }"}</code> | True once a destroy or unload has started. Check it in delayed callbacks. |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> | True after `Initialize` has run. |
| <Link id="m-isonclientorlocaltest" /><code>{"bool IsOnClientOrLocalTest { get; }"}</code> | True on a client once initialized, or in a local test. False on a dedicated server. |
| <Link id="m-issendingmessages-2" /><code>{"bool IsSendingMessages { get; set; }"}</code> | When false, messages from this entity are dropped with a warning. |
| <Link id="m-isserialized" /><code>{"bool IsSerialized { get; }"}</code> | True if the entity has any `INetworkSerialized` behaviours and so a `Serializer`. |
| <Link id="m-isserializerauthoritative" /><code>{"bool IsSerializerAuthoritative { get; }"}</code> | Whether this side owns the entity's serialized state. Throws if there's no serializer. |
| <Link id="m-messagehandler-2" /><code><Link to="/game-api/types/alta-networking/entitymessagehandler">{"EntityMessageHandler"}</Link>{" MessageHandler { get; }"}</code> | Sends this entity's messages to its players or to the server. Created on first use. |
| <Link id="m-originalname" /><code>{"string OriginalName { get; set; }"}</code> | The object's name before `Initialize` prefixed it with the id. |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Parent { get; private set; }"}</code> | For an embedded entity, the prefab entity it's part of. Null otherwise. Not the same as `ChunkingParent`. |
| <Link id="m-playersspawnedfor" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayersSpawnedFor { get; }"}</code> | Server: the players whose game currently has this entity. |
| <Link id="m-playersspawnedforcount" /><code>{"int PlayersSpawnedForCount { get; }"}</code> | Server: how many players currently have this entity. |
| <Link id="m-positionchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" PositionChunk { get; }"}</code> | The chunk its position is written against: the chunking parent's, or its own. Populations can override how it's found. |
| <Link id="m-prefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> | The `NetworkPrefab` on the same object. Null for embedded entities. |
| <Link id="m-prefabroot" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" PrefabRoot { get; private set; }"}</code> | The top entity of the prefab this belongs to. Itself for a prefab, the prefab entity for an embedded part. |
| <Link id="m-safename" /><code>{"string SafeName { get; }"}</code> | `id - OriginalName`, handy for logs. |
| <Link id="m-scene" /><code><Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" Scene { get; protected set; }"}</code> | The network scene the entity belongs to. |
| <Link id="m-serializer-2" /><code><Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" Serializer { get; }"}</code> | The state sync for its `INetworkSerialized` behaviours, or null if it has none. |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> | Static. Live `NetworkEntity` components in the process, embedded parts included. |
| <Link id="m-spawner" /><code><Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; private set; }"}</code> | The scene's spawn manager, used to spawn and destroy entities. |
| <Link id="m-spawnindex" /><code><Link to="/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" "}<Link to="/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" { get; }"}</code> | A spawn counter used to ignore stale destroy messages for an id that has been reused. |
| <Link id="m-syncchannel" /><code>{"static "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" SyncChannel { get; set; }"}</code> | Static. The connection channel entity messages go on; swapped temporarily while chunks are synced. |
| <Link id="m-syncpriority-2" /><code>{"int SyncPriority { get; }"}</code> | Lower syncs first when a chunk is sent to a player. Set per prefab (10 by default), 5 less while held or docked. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The entity's transform, cached. |
| <Link id="m-chunker-2" /><code>{"protected "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" { get; }"}</code> | Protected. The helper that tracks this entity's chunk, chunking parent, children and the players it's spawned for. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-ichunkedentity-chunker" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" Alta.Networking.IChunkedEntity.Chunker { get; }"}</code> | Exposes the entity's `Chunker` (the object that tracks its chunk, parent and children) to the chunk system. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addedtochunk" /><code>{"event "}<Link to="/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" AddedToChunk"}</code> | Raised when the entity enters a chunk. |
| <Link id="m-childadded" /><code>{"event "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" ChildAdded"}</code> | Raised when another entity takes this one as its `ChunkingParent`. |
| <Link id="m-childremoved" /><code>{"event "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" ChildRemoved"}</code> | Raised when a child entity stops riding on this one. |
| <Link id="m-destroyedbyscene" /><code>{"event "}<Link to="/game-api/types/alta-networking/entitydespawnedhandler">{"EntityDespawnedHandler"}</Link>{" DestroyedByScene"}</code> | Raised when the spawner destroys or unloads the entity, with whether it was an unload. Cleared after it fires. |
| <Link id="m-parentchanged" /><code>{"event "}<Link to="/game-api/types/alta-networking/parentchangedhandler">{"ParentChangedHandler"}</Link>{" ParentChanged"}</code> | Raised when the `ChunkingParent` changes, with the old and new parent. |
| <Link id="m-removedfromchunk" /><code>{"event "}<Link to="/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" RemovedFromChunk"}</code> | Raised when the entity leaves a chunk. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delayedscenedestroy" /><code>{"void DelayedSceneDestroy()"}</code> | Calls `SceneDestroy` 0.1 seconds later. |
| <Link id="m-editorevaluatechunk" /><code>{"void EditorEvaluateChunk("}<Link to="/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" chunkLookup)"}</code> | Editor tool: puts the entity in a chunk using a prebuilt chunk lookup. |
| <Link id="m-embededdedinitialize" /><code>{"void EmbededdedInitialize("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> | Sets the parent prefab entity for an embedded entity and makes that parent its `ChunkingParent` and `PrefabRoot`. |
| <Link id="m-evaluatechunk" /><code>{"void EvaluateChunk(bool isLoggingOnFailure = true)"}</code> | Server: moves the entity to the chunk that holds its position. Can destroy it if no chunk does. |
| <Link id="m-forcepositionsync" /><code>{"void ForcePositionSync()"}</code> | Server: re-evaluates its chunk and sends its position and rotation to every player who has it. Use after moving it. |
| <Link id="m-forcesetisinitialized" /><code>{"void ForceSetIsInitialized()"}</code> | Marks the entity initialized without running `Initialize`. |
| <Link id="m-getcomponentonentity" /><code>{"T GetComponentOnEntity<T>()"}</code> | The first component of that type in the entity's behaviour list. Faster than `GetComponent` but only finds network behaviours. |
| <Link id="m-getcomponentsonentity" /><code>{"IEnumerable<T> GetComponentsOnEntity<T>() (iterator)"}</code> | Every component of that type in the entity's behaviour list. |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, uint identifier, uint[] embeddedIdentifiers, bool isInitializingBehaviours)"}</code> | Gives the entity its scene and id, renames it to `id - name`, builds its serializer and initializes embedded entities and behaviours. |
| <Link id="m-initializeasplayer" /><code>{"void InitializeAsPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Hands sync authority for this entity to a player's body. Called when a `PlayerController` links to its player. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: makes the server authoritative and calls `InitializeAsServer` on every behaviour. Runs once; later calls return early. |
| <Link id="m-initializebehaviours" /><code>{"void InitializeBehaviours()"}</code> | Calls `Initialize` on every behaviour in the entity's list, logging any exception. |
| <Link id="m-initializewithchildrenasserver" /><code>{"void InitializeWithChildrenAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: runs `InitializeAsServer` on this entity and then on every child, recursively. |
| <Link id="m-isspawnedfor" /><code>{"bool IsSpawnedFor("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: whether that player's game currently has this entity. |
| <Link id="m-onconnected" /><code>{"virtual void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: calls `OnConnected` on every behaviour when the entity is sent to a player. |
| <Link id="m-ondestroyedbyscene" /><code>{"void OnDestroyedByScene(bool isUnload)"}</code> | Called by the spawner on destroy or unload: frees the serializer and raises `DestroyedByScene`. |
| <Link id="m-ondisconnected" /><code>{"virtual void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: calls `OnDisconnected` on every behaviour when a player loses the entity. |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> | Editor: makes sure the entity has a hash. |
| <Link id="m-ownassingleplayer" /><code>{"void OwnAsSinglePlayer()"}</code> | Not implemented; throws. |
| <Link id="m-preparefordestroy" /><code>{"void PrepareForDestroy()"}</code> | Server: frees the entity's id link before destroy. Logs an error instead for a child still attached to a parent in a chunk. |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags = 0)"}</code> | Copies this entity's position, chunk and component state (through `IEntityReplaceHandler`s) onto another entity. Flags skip position or chunk. |
| <Link id="m-scenedestroy" /><code>{"void SceneDestroy()"}</code> | Server: destroys the entity properly, on every client too. Does nothing on clients. |
| <Link id="m-setupgetpositionchunk" /><code>{"void SetupGetPositionChunk(Func<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> newMethod)"}</code> | Sets how `PositionChunk` is worked out. With no argument, uses the chunking parent's chunk or its own. |
| <Link id="m-setupgetpositionchunk-2" /><code>{"void SetupGetPositionChunk()"}</code> | Sets how `PositionChunk` is worked out. With no argument, uses the chunking parent's chunk or its own. |
| <Link id="m-spawnandreplacewith" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnAndReplaceWith("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, bool isDestroying = true)"}</code> | Server: spawns another prefab in its place with this one's position, state, chunk and chunking parent, then destroys this one by default. |
| <Link id="m-spawnandreplacewith-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnAndReplaceWith(uint prefabHash, bool isDestroying = true)"}</code> | Server: spawns another prefab in its place with this one's position, state, chunk and chunking parent, then destroys this one by default. |
| <Link id="m-startcoroutine" /><code><Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" StartCoroutine(IEnumerator enumerator)"}</code> | Starts an `AltaCoroutine` that stops when the entity is destroyed by the scene. Hides the Unity method. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Sets `PrefabRoot` to itself until initialized and counts the entity in `SpawnedCount`. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkfornetworkbehaviour" /><code>{"private bool CheckForNetworkBehaviour()"}</code> | Editor validation check that sets `hasNetworkBehaviours`: true if the object has any `INetworkEntityBehaviour`. |
| <Link id="m-createserializer" /><code>{"private void CreateSerializer(MonoBehaviour[] behaviours)"}</code> | Called from `Initialize`: builds an `EntitySerializer` from the behaviours that implement `INetworkSerialized` and registers it with the scene. |
| <Link id="m-onchildadded" /><code>{"private void OnChildAdded("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | Raises `ChildAdded` when another entity starts using this one as its chunking parent. |
| <Link id="m-onchildremoved" /><code>{"private void OnChildRemoved("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | Raises `ChildRemoved` when another entity stops using this one as its chunking parent. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Lowers `SpawnedCount`, unlinks the entity from its spawner if it wasn't destroyed through the scene, and releases the serializer arrays. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Logs an error if the entity is disabled while still active in the hierarchy and not marked `IsBeingDestroyed`. |
| <Link id="m-oninitialize" /><code>{"private void OnInitialize()"}</code> | Runs at the end of the first `Initialize` and sets up the `moveEntity` method sync. |
| <Link id="m-onparentchanged" /><code>{"private void Alta.Networking.IChunkedEntity.OnParentChanged("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> | Called by the chunker when the chunking parent changes: raises `ParentChanged`, then `ChildRemoved` on the old parent and `ChildAdded` on the new one. |
| <Link id="m-serializemove" /><code>{"private void SerializeMove("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the entity's position (chunk-relative) and compressed rotation for a move message, then calls `Moved` on every `IUpdateOnMove`. |

</details>

## Used in

Members of other types that take, return or hold a `NetworkEntity`:

[`EffectHandler.entity`](/game-api/types/alta-stats-effects/effecthandler#m-entity), [`EffectHandler.Entity`](/game-api/types/alta-stats-effects/effecthandler#m-entity-2), [`PlayerEffectController.Initialize`](/game-api/types/alta-stats-effects/playereffectcontroller#m-initialize), [`ForgedPoint.Entity`](/game-api/types/alta-crafting/forgedpoint#m-entity), [`ForgedPointCollection.Alta.Networking.IEntityReplaceHandler.Entity`](/game-api/types/alta-crafting/forgedpointcollection#m-alta-networking-ientityreplacehandler-entity), [`ForgedPointCollection.ReplacedWith`](/game-api/types/alta-crafting/forgedpointcollection#m-replacedwith), [`MeltingModel.SceneDestroy`](/game-api/types/alta-crafting/meltingmodel#m-scenedestroy), [`Recycler.affecting`](/game-api/types/alta-crafting/recycler#m-affecting), [`Smelter.ReleaseSmoke`](/game-api/types/alta-crafting/smelter#m-releasesmoke), [`ClusterGenerator.PositionChild`](/game-api/types/alta-world-generation/clustergenerator#m-positionchild), [`StaticClusterGenerator.Generate`](/game-api/types/alta-world-generation/staticclustergenerator#m-generate), [`HandTargetHandler.entity`](/game-api/types/alta-player/handtargethandler#m-entity), [`CaveLayerStaticObject.RemoveRenderers`](/game-api/types/alta-world/cavelayerstaticobject#m-removerenderers), [`CaveLayerStreamer.layerEntity`](/game-api/types/alta-world/cavelayerstreamer#m-layerentity), [`Chunk.SerializeChunkAndPosition`](/game-api/types/alta-world/chunk#m-serializechunkandposition), [`Chunk.SerializePosition`](/game-api/types/alta-world/chunk#m-serializeposition), [`ChunkConnections.RemoveAdjacent`](/game-api/types/alta-world/chunkconnections#m-removeadjacent), [`ChunkEntityManager.Add`](/game-api/types/alta-world/chunkentitymanager#m-add), [`ChunkEntityManager.Added`](/game-api/types/alta-world/chunkentitymanager#m-added), [`ChunkEntityManager.Cache`](/game-api/types/alta-world/chunkentitymanager#m-cache), [`ChunkEntityManager.CompareEntitiesPosition`](/game-api/types/alta-world/chunkentitymanager#m-compareentitiesposition), [`ChunkEntityManager.CompareFeet`](/game-api/types/alta-world/chunkentitymanager#m-comparefeet), [`ChunkEntityManager.Contains`](/game-api/types/alta-world/chunkentitymanager#m-contains), [`ChunkEntityManager.EnteredWhileUnloaded`](/game-api/types/alta-world/chunkentitymanager#m-enteredwhileunloaded), [`ChunkEntityManager.entities`](/game-api/types/alta-world/chunkentitymanager#m-entities), [`ChunkEntityManager.Entities`](/game-api/types/alta-world/chunkentitymanager#m-entities-2), [`ChunkEntityManager.HandleChunkNotLoaded`](/game-api/types/alta-world/chunkentitymanager#m-handlechunknotloaded), [`ChunkEntityManager.OnAdded`](/game-api/types/alta-world/chunkentitymanager#m-onadded), [`ChunkEntityManager.OnRemoved`](/game-api/types/alta-world/chunkentitymanager#m-onremoved), [`ChunkEntityManager.Remove`](/game-api/types/alta-world/chunkentitymanager#m-remove), [`ChunkEntityManager.Removed`](/game-api/types/alta-world/chunkentitymanager#m-removed), [`ChunkEntityManager.Sort`](/game-api/types/alta-world/chunkentitymanager#m-sort), [`ChunkEntityManager.tempSort`](/game-api/types/alta-world/chunkentitymanager#m-tempsort), [`ChunkEntityManager.tempSortMap`](/game-api/types/alta-world/chunkentitymanager#m-tempsortmap), [`ChunkPositionSurface.Destroyed`](/game-api/types/alta-world/chunkpositionsurface#m-destroyed), [`ChunkSync.cachedEntities`](/game-api/types/alta-world/chunksync#m-cachedentities), [`DynamicChunkContentManager.GetEmbeddedSave`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-getembeddedsave), [`DynamicChunkContentManager.LoadSerializeEntity`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeentity), [`DynamicChunkContentManager.UnloadSingle`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-unloadsingle), [`ICaveLayer.Entity`](/game-api/types/alta-world/icavelayer#m-entity), [`LocationChunk.SerializePosition`](/game-api/types/alta-world/locationchunk#m-serializeposition), [`SavableSavedDynamicObject.Spawn`](/game-api/types/alta-world/savablesaveddynamicobject#m-spawn), [`SavableSavedDynamicObject.SpawnOwned`](/game-api/types/alta-world/savablesaveddynamicobject#m-spawnowned), [`SavedDynamicObject.GetPositionlessSaveOf`](/game-api/types/alta-world/saveddynamicobject#m-getpositionlesssaveof), [`SavedDynamicObject.GetSaveOf`](/game-api/types/alta-world/saveddynamicobject#m-getsaveof), [`SavedDynamicObject.Spawn`](/game-api/types/alta-world/saveddynamicobject#m-spawn), [`SavedDynamicObject.SpawnOwned`](/game-api/types/alta-world/saveddynamicobject#m-spawnowned), [`StreamerHelper.DelayDestroy`](/game-api/types/alta-world/streamerhelper#m-delaydestroy), [`StreamerHelper.LoadSetupRecursive`](/game-api/types/alta-world/streamerhelper#m-loadsetuprecursive), [`StreamerHelper.PostToPlayer`](/game-api/types/alta-world/streamerhelper#m-posttoplayer), [`StreamerHelper.SerializePrefab`](/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`AltaSelection.Current`](/game-api/types/alta-console/altaselection#m-current), [`EntityInfo.op_Implicit`](/game-api/types/alta-console/entityinfo#m-op-implicit), [`Inventory.AddChildren`](/game-api/types/alta-console/inventory#m-addchildren), [`NetworkEntityInfo.op_Implicit`](/game-api/types/alta-console/networkentityinfo#m-op-implicit), [`PrefabInfoDump.NetworkEntityInfoDump.op_Implicit`](/game-api/types/alta-console/prefabinfodump-networkentityinfodump#m-op-implicit), [`SpawnCommandModule.Spawn`](/game-api/types/alta-console/spawncommandmodule#m-spawn), [`SpawnCommandModule.SpawnFull`](/game-api/types/alta-console/spawncommandmodule#m-spawnfull), [`WackyCommandModule.ReplaceEntity`](/game-api/types/alta-console/wackycommandmodule#m-replaceentity) and 537 more.

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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IChunkedEntity`](/mod/game-api/types/alta-networking/ichunkedentity), [`IEntitySerialized`](/mod/game-api/types/alta-networking/ientityserialized), [`INetworkEntity`](/mod/game-api/types/alta-networking/inetworkentity)
- **Derived types** [`NetworkEntityModifiers`](/mod/game-api/types/global-m-o/networkentitymodifiers), [`Player`](/mod/game-api/types/global-p/player), [`PositionedNetworkPrefab`](/mod/game-api/types/global-p/positionednetworkprefab)
- **Nested types** [`SyncPriorityModifiers`](/mod/game-api/types/alta-networking/networkentity-syncprioritymodifiers)
- **Attributes** `DisallowMultipleComponent`
- **Documented in** [NetworkEntity](/mod/game-api/world/network-entity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkEntity()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-initializationfinished" /><code><Link to="/mod/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<"}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{"> InitializationFinished"}</code> | <span className="api-desc">A one-time event raised after `Initialize`. Handlers added later run straight away.</span> |

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached `transform`, filled on first use by `Transform` and `FramePosition`.</span> |
| <Link id="m-chunker" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" chunker"}</code> | <span className="api-desc">Backing field for `Chunker`, created in the constructor.</span> |
| <Link id="m-commonimpacttool" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" commonImpactTool"}</code> | <span className="api-desc">The `ImpactTool` on the same object, found in the editor; backing field for `CommonImpactTool`.</span> |
| <Link id="m-commoninteractable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" commonInteractable"}</code> | <span className="api-desc">The `Interactable` on the same object, found in the editor; backing field for `CommonInteractable`.</span> |
| <Link id="m-commonpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" commonPickup"}</code> | <span className="api-desc">The `Pickup` on the same object, found in the editor; backing field for `CommonPickup`.</span> |
| <Link id="m-embeddedid" /><code>{"private int embeddedId"}</code> | <span className="api-desc">Backing field for `EmbeddedId`: the entity's index among the embedded child entities of its prefab.</span> |
| <Link id="m-getpositionchunk" /><code>{"private Func<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> getPositionChunk"}</code> | <span className="api-desc">Function behind `PositionChunk`. By default it walks up the chunking parents and uses the top one's chunk.</span> |
| <Link id="m-hash" /><code>{"private int hash"}</code> | <span className="api-desc">Backing field for `Hash`, validated in `OnValidate`.</span> |
| <Link id="m-hasnetworkbehaviours" /><code>{"private bool hasNetworkBehaviours"}</code> | <span className="api-desc">Set in the editor when the object has any `INetworkEntityBehaviour`; `InitializeAsServer` skips the behaviours when false.</span> |
| <Link id="m-isinitializedasserver" /><code>{"private bool isInitializedAsServer"}</code> | <span className="api-desc">Stops `InitializeAsServer` from running twice.</span> |
| <Link id="m-issendingmessages" /><code>{"private bool isSendingMessages"}</code> | <span className="api-desc">Backing field for `IsSendingMessages`.</span> |
| <Link id="m-lastframe" /><code>{"private int lastFrame"}</code> | <span className="api-desc">Frame number when `lastFramePosition` was last read; lets `FramePosition` read the transform once per frame.</span> |
| <Link id="m-lastframeposition" /><code>{"private Vector3 lastFramePosition"}</code> | <span className="api-desc">Position cached for the current frame by `FramePosition`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-messagehandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitymessagehandler">{"EntityMessageHandler"}</Link>{" messageHandler"}</code> | <span className="api-desc">Backing field for `MessageHandler`, created on first use.</span> |
| <Link id="m-moveentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" moveEntity"}</code> | <span className="api-desc">Method sync for `MoveEntity` messages, used by `ForcePositionSync` to send the position to the entity's chunks.</span> |
| <Link id="m-networkentitybehaviours" /><code>{"private MonoBehaviour[] networkEntityBehaviours"}</code> | <span className="api-desc">Every `INetworkEntityBehaviour` on the object, found in the editor; these get the initialize, connect and disconnect calls.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">The `NetworkPrefab` on the same object; backing field for `Prefab`.</span> |
| <Link id="m-serializedbehaviours" /><code>{"private static readonly List<"}<Link to="/mod/game-api/types/alta-networking/inetworkserialized">{"INetworkSerialized"}</Link>{"> serializedBehaviours"}</code> | <span className="api-desc">Static scratch list used by `CreateSerializer` while it collects the serialized behaviours.</span> |
| <Link id="m-serializer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer"}</code> | <span className="api-desc">Backing field for `Serializer`; null when no behaviour is serialized.</span> |
| <Link id="m-syncpriority" /><code>{"private int syncPriority"}</code> | <span className="api-desc">Base sync priority (default 10). `SyncPriority` lowers it by 5 while any priority modifier, such as docked or interacted, is set.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"int ChildCount { get; }"}</code> | <span className="api-desc">How many entities have this one as their `ChunkingParent`.</span> |
| <Link id="m-children" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Children { get; }"}</code> | <span className="api-desc">Entities that have this one as their `ChunkingParent`, such as docked items and a bag's contents.</span> |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The chunk the entity is in. Setting it moves it there; on the server this is ignored while it has a `ChunkingParent`.</span> |
| <Link id="m-chunkingparent" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ChunkingParent { get; set; }"}</code> | <span className="api-desc">The entity this one rides with (a dock's owner, a part's structure). It takes that parent's chunk.</span> |
| <Link id="m-commonimpacttool-2" /><code><Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" CommonImpactTool { get; }"}</code> | <span className="api-desc">The `ImpactTool` on the same object, cached at bake time, or null.</span> |
| <Link id="m-commoninteractable-2" /><code><Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CommonInteractable { get; }"}</code> | <span className="api-desc">The `Interactable` on the same object, cached at bake time, or null.</span> |
| <Link id="m-commonpickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" CommonPickup { get; }"}</code> | <span className="api-desc">The `Pickup` on the same object, cached at bake time, or null.</span> |
| <Link id="m-currentprioritymodifiers" /><code><Link to="/mod/game-api/types/alta-networking/networkentity-syncprioritymodifiers">{"NetworkEntity.SyncPriorityModifiers"}</Link>{" CurrentPriorityModifiers { get; set; }"}</code> | <span className="api-desc">Flags that raise sync priority. `DockedOrInteracted` is set while held or docked and lowers `SyncPriority` by 5.</span> |
| <Link id="m-editorsafescene" /><code><Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" EditorSafeScene { get; }"}</code> | <span className="api-desc">The entity's scene, or in the editor outside play mode, the first `NetworkScene` found.</span> |
| <Link id="m-embeddedid-2" /><code>{"int EmbeddedId { get; set; }"}</code> | <span className="api-desc">Its index in its prefab's embedded entity list.</span> |
| <Link id="m-frameposition" /><code>{"Vector3 FramePosition { get; }"}</code> | <span className="api-desc">`transform.position`, cached once per frame. Cheap in hot loops.</span> |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">The entity's own hash inside its prefab, set in the editor. Used to match embedded entities when a save loads.</span> |
| <Link id="m-identifier" /><code>{"uint Identifier { get; private set; }"}</code> | <span className="api-desc">The runtime id used by messages and commands. Changes on every spawn or chunk load, so never save it.</span> |
| <Link id="m-isbeingdestroyed" /><code>{"bool IsBeingDestroyed { get; set; }"}</code> | <span className="api-desc">True once a destroy or unload has started. Check it in delayed callbacks.</span> |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> | <span className="api-desc">True after `Initialize` has run.</span> |
| <Link id="m-isonclientorlocaltest" /><code>{"bool IsOnClientOrLocalTest { get; }"}</code> | <span className="api-desc">True on a client once initialized, or in a local test. False on a dedicated server.</span> |
| <Link id="m-issendingmessages-2" /><code>{"bool IsSendingMessages { get; set; }"}</code> | <span className="api-desc">When false, messages from this entity are dropped with a warning.</span> |
| <Link id="m-isserialized" /><code>{"bool IsSerialized { get; }"}</code> | <span className="api-desc">True if the entity has any `INetworkSerialized` behaviours and so a `Serializer`.</span> |
| <Link id="m-isserializerauthoritative" /><code>{"bool IsSerializerAuthoritative { get; }"}</code> | <span className="api-desc">Whether this side owns the entity's serialized state. Throws if there's no serializer.</span> |
| <Link id="m-messagehandler-2" /><code><Link to="/mod/game-api/types/alta-networking/entitymessagehandler">{"EntityMessageHandler"}</Link>{" MessageHandler { get; }"}</code> | <span className="api-desc">Sends this entity's messages to its players or to the server. Created on first use.</span> |
| <Link id="m-originalname" /><code>{"string OriginalName { get; set; }"}</code> | <span className="api-desc">The object's name before `Initialize` prefixed it with the id.</span> |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Parent { get; private set; }"}</code> | <span className="api-desc">For an embedded entity, the prefab entity it's part of. Null otherwise. Not the same as `ChunkingParent`.</span> |
| <Link id="m-playersspawnedfor" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayersSpawnedFor { get; }"}</code> | <span className="api-desc">Server: the players whose game currently has this entity.</span> |
| <Link id="m-playersspawnedforcount" /><code>{"int PlayersSpawnedForCount { get; }"}</code> | <span className="api-desc">Server: how many players currently have this entity.</span> |
| <Link id="m-positionchunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" PositionChunk { get; }"}</code> | <span className="api-desc">The chunk its position is written against: the chunking parent's, or its own. Populations can override how it's found.</span> |
| <Link id="m-prefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> | <span className="api-desc">The `NetworkPrefab` on the same object. Null for embedded entities.</span> |
| <Link id="m-prefabroot" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" PrefabRoot { get; private set; }"}</code> | <span className="api-desc">The top entity of the prefab this belongs to. Itself for a prefab, the prefab entity for an embedded part.</span> |
| <Link id="m-safename" /><code>{"string SafeName { get; }"}</code> | <span className="api-desc">`id - OriginalName`, handy for logs.</span> |
| <Link id="m-scene" /><code><Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" Scene { get; protected set; }"}</code> | <span className="api-desc">The network scene the entity belongs to.</span> |
| <Link id="m-serializer-2" /><code><Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" Serializer { get; }"}</code> | <span className="api-desc">The state sync for its `INetworkSerialized` behaviours, or null if it has none.</span> |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> | <span className="api-desc">Static. Live `NetworkEntity` components in the process, embedded parts included.</span> |
| <Link id="m-spawner" /><code><Link to="/mod/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; private set; }"}</code> | <span className="api-desc">The scene's spawn manager, used to spawn and destroy entities.</span> |
| <Link id="m-spawnindex" /><code><Link to="/mod/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" { get; }"}</code> | <span className="api-desc">A spawn counter used to ignore stale destroy messages for an id that has been reused.</span> |
| <Link id="m-syncchannel" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" SyncChannel { get; set; }"}</code> | <span className="api-desc">Static. The connection channel entity messages go on; swapped temporarily while chunks are synced.</span> |
| <Link id="m-syncpriority-2" /><code>{"int SyncPriority { get; }"}</code> | <span className="api-desc">Lower syncs first when a chunk is sent to a player. Set per prefab (10 by default), 5 less while held or docked.</span> |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The entity's transform, cached.</span> |
| <Link id="m-chunker-2" /><code>{"protected "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" { get; }"}</code> | <span className="api-desc">Protected. The helper that tracks this entity's chunk, chunking parent, children and the players it's spawned for.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-ichunkedentity-chunker" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" Alta.Networking.IChunkedEntity.Chunker { get; }"}</code> | <span className="api-desc">Exposes the entity's `Chunker` (the object that tracks its chunk, parent and children) to the chunk system.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addedtochunk" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" AddedToChunk"}</code> | <span className="api-desc">Raised when the entity enters a chunk.</span> |
| <Link id="m-childadded" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" ChildAdded"}</code> | <span className="api-desc">Raised when another entity takes this one as its `ChunkingParent`.</span> |
| <Link id="m-childremoved" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" ChildRemoved"}</code> | <span className="api-desc">Raised when a child entity stops riding on this one.</span> |
| <Link id="m-destroyedbyscene" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/entitydespawnedhandler">{"EntityDespawnedHandler"}</Link>{" DestroyedByScene"}</code> | <span className="api-desc">Raised when the spawner destroys or unloads the entity, with whether it was an unload. Cleared after it fires.</span> |
| <Link id="m-parentchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/parentchangedhandler">{"ParentChangedHandler"}</Link>{" ParentChanged"}</code> | <span className="api-desc">Raised when the `ChunkingParent` changes, with the old and new parent.</span> |
| <Link id="m-removedfromchunk" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" RemovedFromChunk"}</code> | <span className="api-desc">Raised when the entity leaves a chunk.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delayedscenedestroy" /><code>{"void DelayedSceneDestroy()"}</code> | <span className="api-desc">Calls `SceneDestroy` 0.1 seconds later.</span> |
| <Link id="m-editorevaluatechunk" /><code>{"void EditorEvaluateChunk("}<Link to="/mod/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" chunkLookup)"}</code> | <span className="api-desc">Editor tool: puts the entity in a chunk using a prebuilt chunk lookup.</span> |
| <Link id="m-embededdedinitialize" /><code>{"void EmbededdedInitialize("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> | <span className="api-desc">Sets the parent prefab entity for an embedded entity and makes that parent its `ChunkingParent` and `PrefabRoot`.</span> |
| <Link id="m-evaluatechunk" /><code>{"void EvaluateChunk(bool isLoggingOnFailure = true)"}</code> | <span className="api-desc">Server: moves the entity to the chunk that holds its position. Can destroy it if no chunk does.</span> |
| <Link id="m-forcepositionsync" /><code>{"void ForcePositionSync()"}</code> | <span className="api-desc">Server: re-evaluates its chunk and sends its position and rotation to every player who has it. Use after moving it.</span> |
| <Link id="m-forcesetisinitialized" /><code>{"void ForceSetIsInitialized()"}</code> | <span className="api-desc">Marks the entity initialized without running `Initialize`.</span> |
| <Link id="m-getcomponentonentity" /><code>{"T GetComponentOnEntity<T>()"}</code> | <span className="api-desc">The first component of that type in the entity's behaviour list. Faster than `GetComponent` but only finds network behaviours.</span> |
| <Link id="m-getcomponentsonentity" /><code>{"IEnumerable<T> GetComponentsOnEntity<T>() (iterator)"}</code> | <span className="api-desc">Every component of that type in the entity's behaviour list.</span> |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, uint identifier, uint[] embeddedIdentifiers, bool isInitializingBehaviours)"}</code> | <span className="api-desc">Gives the entity its scene and id, renames it to `id - name`, builds its serializer and initializes embedded entities and behaviours.</span> |
| <Link id="m-initializeasplayer" /><code>{"void InitializeAsPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Hands sync authority for this entity to a player's body. Called when a `PlayerController` links to its player.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: makes the server authoritative and calls `InitializeAsServer` on every behaviour. Runs once; later calls return early.</span> |
| <Link id="m-initializebehaviours" /><code>{"void InitializeBehaviours()"}</code> | <span className="api-desc">Calls `Initialize` on every behaviour in the entity's list, logging any exception.</span> |
| <Link id="m-initializewithchildrenasserver" /><code>{"void InitializeWithChildrenAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: runs `InitializeAsServer` on this entity and then on every child, recursively.</span> |
| <Link id="m-isspawnedfor" /><code>{"bool IsSpawnedFor("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: whether that player's game currently has this entity.</span> |
| <Link id="m-onconnected" /><code>{"virtual void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: calls `OnConnected` on every behaviour when the entity is sent to a player.</span> |
| <Link id="m-ondestroyedbyscene" /><code>{"void OnDestroyedByScene(bool isUnload)"}</code> | <span className="api-desc">Called by the spawner on destroy or unload: frees the serializer and raises `DestroyedByScene`.</span> |
| <Link id="m-ondisconnected" /><code>{"virtual void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: calls `OnDisconnected` on every behaviour when a player loses the entity.</span> |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> | <span className="api-desc">Editor: makes sure the entity has a hash.</span> |
| <Link id="m-ownassingleplayer" /><code>{"void OwnAsSinglePlayer()"}</code> | <span className="api-desc">Not implemented; throws.</span> |
| <Link id="m-preparefordestroy" /><code>{"void PrepareForDestroy()"}</code> | <span className="api-desc">Server: frees the entity's id link before destroy. Logs an error instead for a child still attached to a parent in a chunk.</span> |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags = 0)"}</code> | <span className="api-desc">Copies this entity's position, chunk and component state (through `IEntityReplaceHandler`s) onto another entity. Flags skip position or chunk.</span> |
| <Link id="m-scenedestroy" /><code>{"void SceneDestroy()"}</code> | <span className="api-desc">Server: destroys the entity properly, on every client too. Does nothing on clients.</span> |
| <Link id="m-setupgetpositionchunk" /><code>{"void SetupGetPositionChunk(Func<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> newMethod)"}</code> | <span className="api-desc">Sets how `PositionChunk` is worked out. With no argument, uses the chunking parent's chunk or its own.</span> |
| <Link id="m-setupgetpositionchunk-2" /><code>{"void SetupGetPositionChunk()"}</code> | <span className="api-desc">Sets how `PositionChunk` is worked out. With no argument, uses the chunking parent's chunk or its own.</span> |
| <Link id="m-spawnandreplacewith" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnAndReplaceWith("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, bool isDestroying = true)"}</code> | <span className="api-desc">Server: spawns another prefab in its place with this one's position, state, chunk and chunking parent, then destroys this one by default.</span> |
| <Link id="m-spawnandreplacewith-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnAndReplaceWith(uint prefabHash, bool isDestroying = true)"}</code> | <span className="api-desc">Server: spawns another prefab in its place with this one's position, state, chunk and chunking parent, then destroys this one by default.</span> |
| <Link id="m-startcoroutine" /><code><Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" StartCoroutine(IEnumerator enumerator)"}</code> | <span className="api-desc">Starts an `AltaCoroutine` that stops when the entity is destroyed by the scene. Hides the Unity method.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Sets `PrefabRoot` to itself until initialized and counts the entity in `SpawnedCount`.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkfornetworkbehaviour" /><code>{"private bool CheckForNetworkBehaviour()"}</code> | <span className="api-desc">Editor validation check that sets `hasNetworkBehaviours`: true if the object has any `INetworkEntityBehaviour`.</span> |
| <Link id="m-createserializer" /><code>{"private void CreateSerializer(MonoBehaviour[] behaviours)"}</code> | <span className="api-desc">Called from `Initialize`: builds an `EntitySerializer` from the behaviours that implement `INetworkSerialized` and registers it with the scene.</span> |
| <Link id="m-onchildadded" /><code>{"private void OnChildAdded("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | <span className="api-desc">Raises `ChildAdded` when another entity starts using this one as its chunking parent.</span> |
| <Link id="m-onchildremoved" /><code>{"private void OnChildRemoved("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | <span className="api-desc">Raises `ChildRemoved` when another entity stops using this one as its chunking parent.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Lowers `SpawnedCount`, unlinks the entity from its spawner if it wasn't destroyed through the scene, and releases the serializer arrays.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Logs an error if the entity is disabled while still active in the hierarchy and not marked `IsBeingDestroyed`.</span> |
| <Link id="m-oninitialize" /><code>{"private void OnInitialize()"}</code> | <span className="api-desc">Runs at the end of the first `Initialize` and sets up the `moveEntity` method sync.</span> |
| <Link id="m-onparentchanged" /><code>{"private void Alta.Networking.IChunkedEntity.OnParentChanged("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> | <span className="api-desc">Called by the chunker when the chunking parent changes: raises `ParentChanged`, then `ChildRemoved` on the old parent and `ChildAdded` on the new one.</span> |
| <Link id="m-serializemove" /><code>{"private void SerializeMove("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the entity's position (chunk-relative) and compressed rotation for a move message, then calls `Moved` on every `IUpdateOnMove`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NetworkEntity`:

<div className="api-used-in">

[`EffectHandler.entity`](/mod/game-api/types/alta-stats-effects/effecthandler#m-entity), [`EffectHandler.Entity`](/mod/game-api/types/alta-stats-effects/effecthandler#m-entity-2), [`PlayerEffectController.Initialize`](/mod/game-api/types/alta-stats-effects/playereffectcontroller#m-initialize), [`ForgedPoint.Entity`](/mod/game-api/types/alta-crafting/forgedpoint#m-entity), [`ForgedPointCollection.Alta.Networking.IEntityReplaceHandler.Entity`](/mod/game-api/types/alta-crafting/forgedpointcollection#m-alta-networking-ientityreplacehandler-entity), [`ForgedPointCollection.ReplacedWith`](/mod/game-api/types/alta-crafting/forgedpointcollection#m-replacedwith), [`MeltingModel.SceneDestroy`](/mod/game-api/types/alta-crafting/meltingmodel#m-scenedestroy), [`Recycler.affecting`](/mod/game-api/types/alta-crafting/recycler#m-affecting), [`Smelter.ReleaseSmoke`](/mod/game-api/types/alta-crafting/smelter#m-releasesmoke), [`ClusterGenerator.PositionChild`](/mod/game-api/types/alta-world-generation/clustergenerator#m-positionchild), [`StaticClusterGenerator.Generate`](/mod/game-api/types/alta-world-generation/staticclustergenerator#m-generate), [`HandTargetHandler.entity`](/mod/game-api/types/alta-player/handtargethandler#m-entity), [`CaveLayerStaticObject.RemoveRenderers`](/mod/game-api/types/alta-world/cavelayerstaticobject#m-removerenderers), [`CaveLayerStreamer.layerEntity`](/mod/game-api/types/alta-world/cavelayerstreamer#m-layerentity), [`Chunk.SerializeChunkAndPosition`](/mod/game-api/types/alta-world/chunk#m-serializechunkandposition), [`Chunk.SerializePosition`](/mod/game-api/types/alta-world/chunk#m-serializeposition), [`ChunkConnections.RemoveAdjacent`](/mod/game-api/types/alta-world/chunkconnections#m-removeadjacent), [`ChunkEntityManager.Add`](/mod/game-api/types/alta-world/chunkentitymanager#m-add), [`ChunkEntityManager.Added`](/mod/game-api/types/alta-world/chunkentitymanager#m-added), [`ChunkEntityManager.Cache`](/mod/game-api/types/alta-world/chunkentitymanager#m-cache), [`ChunkEntityManager.CompareEntitiesPosition`](/mod/game-api/types/alta-world/chunkentitymanager#m-compareentitiesposition), [`ChunkEntityManager.CompareFeet`](/mod/game-api/types/alta-world/chunkentitymanager#m-comparefeet), [`ChunkEntityManager.Contains`](/mod/game-api/types/alta-world/chunkentitymanager#m-contains), [`ChunkEntityManager.EnteredWhileUnloaded`](/mod/game-api/types/alta-world/chunkentitymanager#m-enteredwhileunloaded), [`ChunkEntityManager.entities`](/mod/game-api/types/alta-world/chunkentitymanager#m-entities), [`ChunkEntityManager.Entities`](/mod/game-api/types/alta-world/chunkentitymanager#m-entities-2), [`ChunkEntityManager.HandleChunkNotLoaded`](/mod/game-api/types/alta-world/chunkentitymanager#m-handlechunknotloaded), [`ChunkEntityManager.OnAdded`](/mod/game-api/types/alta-world/chunkentitymanager#m-onadded), [`ChunkEntityManager.OnRemoved`](/mod/game-api/types/alta-world/chunkentitymanager#m-onremoved), [`ChunkEntityManager.Remove`](/mod/game-api/types/alta-world/chunkentitymanager#m-remove), [`ChunkEntityManager.Removed`](/mod/game-api/types/alta-world/chunkentitymanager#m-removed), [`ChunkEntityManager.Sort`](/mod/game-api/types/alta-world/chunkentitymanager#m-sort), [`ChunkEntityManager.tempSort`](/mod/game-api/types/alta-world/chunkentitymanager#m-tempsort), [`ChunkEntityManager.tempSortMap`](/mod/game-api/types/alta-world/chunkentitymanager#m-tempsortmap), [`ChunkPositionSurface.Destroyed`](/mod/game-api/types/alta-world/chunkpositionsurface#m-destroyed), [`ChunkSync.cachedEntities`](/mod/game-api/types/alta-world/chunksync#m-cachedentities), [`DynamicChunkContentManager.GetEmbeddedSave`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-getembeddedsave), [`DynamicChunkContentManager.LoadSerializeEntity`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeentity), [`DynamicChunkContentManager.UnloadSingle`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-unloadsingle), [`ICaveLayer.Entity`](/mod/game-api/types/alta-world/icavelayer#m-entity), [`LocationChunk.SerializePosition`](/mod/game-api/types/alta-world/locationchunk#m-serializeposition), [`SavableSavedDynamicObject.Spawn`](/mod/game-api/types/alta-world/savablesaveddynamicobject#m-spawn), [`SavableSavedDynamicObject.SpawnOwned`](/mod/game-api/types/alta-world/savablesaveddynamicobject#m-spawnowned), [`SavedDynamicObject.GetPositionlessSaveOf`](/mod/game-api/types/alta-world/saveddynamicobject#m-getpositionlesssaveof), [`SavedDynamicObject.GetSaveOf`](/mod/game-api/types/alta-world/saveddynamicobject#m-getsaveof), [`SavedDynamicObject.Spawn`](/mod/game-api/types/alta-world/saveddynamicobject#m-spawn), [`SavedDynamicObject.SpawnOwned`](/mod/game-api/types/alta-world/saveddynamicobject#m-spawnowned), [`StreamerHelper.DelayDestroy`](/mod/game-api/types/alta-world/streamerhelper#m-delaydestroy), [`StreamerHelper.LoadSetupRecursive`](/mod/game-api/types/alta-world/streamerhelper#m-loadsetuprecursive), [`StreamerHelper.PostToPlayer`](/mod/game-api/types/alta-world/streamerhelper#m-posttoplayer), [`StreamerHelper.SerializePrefab`](/mod/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/mod/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`AltaSelection.Current`](/mod/game-api/types/alta-console/altaselection#m-current), [`EntityInfo.op_Implicit`](/mod/game-api/types/alta-console/entityinfo#m-op-implicit), [`Inventory.AddChildren`](/mod/game-api/types/alta-console/inventory#m-addchildren), [`NetworkEntityInfo.op_Implicit`](/mod/game-api/types/alta-console/networkentityinfo#m-op-implicit), [`PrefabInfoDump.NetworkEntityInfoDump.op_Implicit`](/mod/game-api/types/alta-console/prefabinfodump-networkentityinfodump#m-op-implicit), [`SpawnCommandModule.Spawn`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawn), [`SpawnCommandModule.SpawnFull`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnfull), [`WackyCommandModule.ReplaceEntity`](/mod/game-api/types/alta-console/wackycommandmodule#m-replaceentity) and 537 more.

</div>

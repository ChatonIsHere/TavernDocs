---
title: "NetworkEntity"
description: "Runs on server and clients."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntity

A **class** in `Root.Township`, `Alta.Networking`.

Runs on server and clients.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IChunkedEntity`](/game-api/types/alta-networking/ichunkedentity), [`IEntitySerialized`](/game-api/types/alta-networking/ientityserialized), [`INetworkEntity`](/game-api/types/alta-networking/inetworkentity)
- **Derived types** [`NetworkEntityModifiers`](/game-api/types/global-m-o/networkentitymodifiers), [`Player`](/game-api/types/global-p/player), [`PositionedNetworkPrefab`](/game-api/types/global-p/positionednetworkprefab)
- **Nested types** [`SyncPriorityModifiers`](/game-api/types/alta-networking/networkentity-syncprioritymodifiers)
- **Attributes** `DisallowMultipleComponent`
- **Documented in** [NetworkEntity](/game-api/world/network-entity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkEntity()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-initializationfinished" /><code><Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{"> InitializationFinished"}</code> |  |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-chunker" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" chunker"}</code> |  |
| <Link id="m-commonimpacttool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" commonImpactTool"}</code> |  |
| <Link id="m-commoninteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" commonInteractable"}</code> |  |
| <Link id="m-commonpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" commonPickup"}</code> |  |
| <Link id="m-embeddedid" /><code>{"private int embeddedId"}</code> |  |
| <Link id="m-getpositionchunk" /><code>{"private Func<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> getPositionChunk"}</code> |  |
| <Link id="m-hash" /><code>{"private int hash"}</code> |  |
| <Link id="m-hasnetworkbehaviours" /><code>{"private bool hasNetworkBehaviours"}</code> |  |
| <Link id="m-isinitializedasserver" /><code>{"private bool isInitializedAsServer"}</code> |  |
| <Link id="m-issendingmessages" /><code>{"private bool isSendingMessages"}</code> |  |
| <Link id="m-lastframe" /><code>{"private int lastFrame"}</code> |  |
| <Link id="m-lastframeposition" /><code>{"private Vector3 lastFramePosition"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-messagehandler" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagehandler">{"EntityMessageHandler"}</Link>{" messageHandler"}</code> |  |
| <Link id="m-moveentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" moveEntity"}</code> |  |
| <Link id="m-networkentitybehaviours" /><code>{"private MonoBehaviour[] networkEntityBehaviours"}</code> |  |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> |  |
| <Link id="m-serializedbehaviours" /><code>{"private static readonly List<"}<Link to="/game-api/types/alta-networking/inetworkserialized">{"INetworkSerialized"}</Link>{"> serializedBehaviours"}</code> |  |
| <Link id="m-serializer" /><code>{"private "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer"}</code> |  |
| <Link id="m-syncpriority" /><code>{"private int syncPriority"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"int ChildCount { get; }"}</code> |  |
| <Link id="m-children" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Children { get; }"}</code> |  |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-chunkingparent" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ChunkingParent { get; set; }"}</code> |  |
| <Link id="m-commonimpacttool-2" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" CommonImpactTool { get; }"}</code> |  |
| <Link id="m-commoninteractable-2" /><code><Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CommonInteractable { get; }"}</code> |  |
| <Link id="m-commonpickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" CommonPickup { get; }"}</code> |  |
| <Link id="m-currentprioritymodifiers" /><code><Link to="/game-api/types/alta-networking/networkentity-syncprioritymodifiers">{"NetworkEntity.SyncPriorityModifiers"}</Link>{" CurrentPriorityModifiers { get; set; }"}</code> |  |
| <Link id="m-editorsafescene" /><code><Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" EditorSafeScene { get; }"}</code> |  |
| <Link id="m-embeddedid-2" /><code>{"int EmbeddedId { get; set; }"}</code> |  |
| <Link id="m-frameposition" /><code>{"Vector3 FramePosition { get; }"}</code> |  |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> |  |
| <Link id="m-identifier" /><code>{"uint Identifier { get; private set; }"}</code> |  |
| <Link id="m-isbeingdestroyed" /><code>{"bool IsBeingDestroyed { get; set; }"}</code> |  |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> |  |
| <Link id="m-isonclientorlocaltest" /><code>{"bool IsOnClientOrLocalTest { get; }"}</code> |  |
| <Link id="m-issendingmessages-2" /><code>{"bool IsSendingMessages { get; set; }"}</code> |  |
| <Link id="m-isserialized" /><code>{"bool IsSerialized { get; }"}</code> |  |
| <Link id="m-isserializerauthoritative" /><code>{"bool IsSerializerAuthoritative { get; }"}</code> |  |
| <Link id="m-messagehandler-2" /><code><Link to="/game-api/types/alta-networking/entitymessagehandler">{"EntityMessageHandler"}</Link>{" MessageHandler { get; }"}</code> |  |
| <Link id="m-originalname" /><code>{"string OriginalName { get; set; }"}</code> |  |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Parent { get; private set; }"}</code> |  |
| <Link id="m-playersspawnedfor" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayersSpawnedFor { get; }"}</code> |  |
| <Link id="m-playersspawnedforcount" /><code>{"int PlayersSpawnedForCount { get; }"}</code> |  |
| <Link id="m-positionchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" PositionChunk { get; }"}</code> |  |
| <Link id="m-prefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> |  |
| <Link id="m-prefabroot" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" PrefabRoot { get; private set; }"}</code> |  |
| <Link id="m-safename" /><code>{"string SafeName { get; }"}</code> |  |
| <Link id="m-scene" /><code><Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" Scene { get; protected set; }"}</code> |  |
| <Link id="m-serializer-2" /><code><Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" Serializer { get; }"}</code> |  |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> |  |
| <Link id="m-spawner" /><code><Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; private set; }"}</code> |  |
| <Link id="m-spawnindex" /><code><Link to="/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" "}<Link to="/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" { get; }"}</code> |  |
| <Link id="m-syncchannel" /><code>{"static "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" SyncChannel { get; set; }"}</code> |  |
| <Link id="m-syncpriority-2" /><code>{"int SyncPriority { get; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |
| <Link id="m-alta-networking-ichunkedentity-chunker" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" Alta.Networking.IChunkedEntity.Chunker { get; }"}</code> |  |
| <Link id="m-chunker-2" /><code>{"protected "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addedtochunk" /><code>{"event "}<Link to="/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" AddedToChunk"}</code> |  |
| <Link id="m-childadded" /><code>{"event "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" ChildAdded"}</code> |  |
| <Link id="m-childremoved" /><code>{"event "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" ChildRemoved"}</code> |  |
| <Link id="m-destroyedbyscene" /><code>{"event "}<Link to="/game-api/types/alta-networking/entitydespawnedhandler">{"EntityDespawnedHandler"}</Link>{" DestroyedByScene"}</code> |  |
| <Link id="m-parentchanged" /><code>{"event "}<Link to="/game-api/types/alta-networking/parentchangedhandler">{"ParentChangedHandler"}</Link>{" ParentChanged"}</code> |  |
| <Link id="m-removedfromchunk" /><code>{"event "}<Link to="/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" RemovedFromChunk"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delayedscenedestroy" /><code>{"void DelayedSceneDestroy()"}</code> |  |
| <Link id="m-editorevaluatechunk" /><code>{"void EditorEvaluateChunk("}<Link to="/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" chunkLookup)"}</code> |  |
| <Link id="m-embededdedinitialize" /><code>{"void EmbededdedInitialize("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> |  |
| <Link id="m-evaluatechunk" /><code>{"void EvaluateChunk(bool isLoggingOnFailure = true)"}</code> |  |
| <Link id="m-forcepositionsync" /><code>{"void ForcePositionSync()"}</code> |  |
| <Link id="m-forcesetisinitialized" /><code>{"void ForceSetIsInitialized()"}</code> |  |
| <Link id="m-getcomponentonentity" /><code>{"T GetComponentOnEntity<T>()"}</code> |  |
| <Link id="m-getcomponentsonentity" /><code>{"IEnumerable<T> GetComponentsOnEntity<T>() (iterator)"}</code> |  |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, uint identifier, uint[] embeddedIdentifiers, bool isInitializingBehaviours)"}</code> |  |
| <Link id="m-initializeasplayer" /><code>{"void InitializeAsPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-initializebehaviours" /><code>{"void InitializeBehaviours()"}</code> |  |
| <Link id="m-initializewithchildrenasserver" /><code>{"void InitializeWithChildrenAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-isspawnedfor" /><code>{"bool IsSpawnedFor("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-onconnected" /><code>{"virtual void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ondestroyedbyscene" /><code>{"void OnDestroyedByScene(bool isUnload)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"virtual void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> |  |
| <Link id="m-ownassingleplayer" /><code>{"void OwnAsSinglePlayer()"}</code> |  |
| <Link id="m-preparefordestroy" /><code>{"void PrepareForDestroy()"}</code> |  |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags = 0)"}</code> |  |
| <Link id="m-scenedestroy" /><code>{"void SceneDestroy()"}</code> |  |
| <Link id="m-setupgetpositionchunk" /><code>{"void SetupGetPositionChunk(Func<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> newMethod)"}</code> |  |
| <Link id="m-setupgetpositionchunk-2" /><code>{"void SetupGetPositionChunk()"}</code> |  |
| <Link id="m-spawnandreplacewith" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnAndReplaceWith("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, bool isDestroying = true)"}</code> |  |
| <Link id="m-spawnandreplacewith-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnAndReplaceWith(uint prefabHash, bool isDestroying = true)"}</code> |  |
| <Link id="m-startcoroutine" /><code><Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" StartCoroutine(IEnumerator enumerator)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-checkfornetworkbehaviour" /><code>{"private bool CheckForNetworkBehaviour()"}</code> |  |
| <Link id="m-createserializer" /><code>{"private void CreateSerializer(MonoBehaviour[] behaviours)"}</code> |  |
| <Link id="m-onchildadded" /><code>{"private void OnChildAdded("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> |  |
| <Link id="m-onchildremoved" /><code>{"private void OnChildRemoved("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-oninitialize" /><code>{"private void OnInitialize()"}</code> |  |
| <Link id="m-onparentchanged" /><code>{"private void Alta.Networking.IChunkedEntity.OnParentChanged("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> |  |
| <Link id="m-serializemove" /><code>{"private void SerializeMove("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `NetworkEntity`:

[`EffectHandler.entity`](/game-api/types/alta-stats-effects/effecthandler#m-entity), [`EffectHandler.Entity`](/game-api/types/alta-stats-effects/effecthandler#m-entity-2), [`PlayerEffectController.Initialize`](/game-api/types/alta-stats-effects/playereffectcontroller#m-initialize), [`ForgedPoint.Entity`](/game-api/types/alta-crafting/forgedpoint#m-entity), [`ForgedPointCollection.Alta.Networking.IEntityReplaceHandler.Entity`](/game-api/types/alta-crafting/forgedpointcollection#m-alta-networking-ientityreplacehandler-entity), [`ForgedPointCollection.ReplacedWith`](/game-api/types/alta-crafting/forgedpointcollection#m-replacedwith), [`MeltingModel.SceneDestroy`](/game-api/types/alta-crafting/meltingmodel#m-scenedestroy), [`Recycler.affecting`](/game-api/types/alta-crafting/recycler#m-affecting), [`Smelter.ReleaseSmoke`](/game-api/types/alta-crafting/smelter#m-releasesmoke), [`ClusterGenerator.PositionChild`](/game-api/types/alta-world-generation/clustergenerator#m-positionchild), [`StaticClusterGenerator.Generate`](/game-api/types/alta-world-generation/staticclustergenerator#m-generate), [`HandTargetHandler.entity`](/game-api/types/alta-player/handtargethandler#m-entity), [`CaveLayerStaticObject.RemoveRenderers`](/game-api/types/alta-world/cavelayerstaticobject#m-removerenderers), [`CaveLayerStreamer.layerEntity`](/game-api/types/alta-world/cavelayerstreamer#m-layerentity), [`Chunk.SerializeChunkAndPosition`](/game-api/types/alta-world/chunk#m-serializechunkandposition), [`Chunk.SerializePosition`](/game-api/types/alta-world/chunk#m-serializeposition), [`ChunkConnections.RemoveAdjacent`](/game-api/types/alta-world/chunkconnections#m-removeadjacent), [`ChunkEntityManager.Add`](/game-api/types/alta-world/chunkentitymanager#m-add), [`ChunkEntityManager.Added`](/game-api/types/alta-world/chunkentitymanager#m-added), [`ChunkEntityManager.Cache`](/game-api/types/alta-world/chunkentitymanager#m-cache), [`ChunkEntityManager.CompareEntitiesPosition`](/game-api/types/alta-world/chunkentitymanager#m-compareentitiesposition), [`ChunkEntityManager.CompareFeet`](/game-api/types/alta-world/chunkentitymanager#m-comparefeet), [`ChunkEntityManager.Contains`](/game-api/types/alta-world/chunkentitymanager#m-contains), [`ChunkEntityManager.EnteredWhileUnloaded`](/game-api/types/alta-world/chunkentitymanager#m-enteredwhileunloaded), [`ChunkEntityManager.entities`](/game-api/types/alta-world/chunkentitymanager#m-entities), [`ChunkEntityManager.Entities`](/game-api/types/alta-world/chunkentitymanager#m-entities-2), [`ChunkEntityManager.HandleChunkNotLoaded`](/game-api/types/alta-world/chunkentitymanager#m-handlechunknotloaded), [`ChunkEntityManager.OnAdded`](/game-api/types/alta-world/chunkentitymanager#m-onadded), [`ChunkEntityManager.OnRemoved`](/game-api/types/alta-world/chunkentitymanager#m-onremoved), [`ChunkEntityManager.Remove`](/game-api/types/alta-world/chunkentitymanager#m-remove), [`ChunkEntityManager.Removed`](/game-api/types/alta-world/chunkentitymanager#m-removed), [`ChunkEntityManager.Sort`](/game-api/types/alta-world/chunkentitymanager#m-sort), [`ChunkEntityManager.tempSort`](/game-api/types/alta-world/chunkentitymanager#m-tempsort), [`ChunkEntityManager.tempSortMap`](/game-api/types/alta-world/chunkentitymanager#m-tempsortmap), [`ChunkPositionSurface.Destroyed`](/game-api/types/alta-world/chunkpositionsurface#m-destroyed), [`ChunkSync.cachedEntities`](/game-api/types/alta-world/chunksync#m-cachedentities), [`DynamicChunkContentManager.GetEmbeddedSave`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-getembeddedsave), [`DynamicChunkContentManager.LoadSerializeEntity`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeentity), [`DynamicChunkContentManager.UnloadSingle`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-unloadsingle), [`ICaveLayer.Entity`](/game-api/types/alta-world/icavelayer#m-entity), [`LocationChunk.SerializePosition`](/game-api/types/alta-world/locationchunk#m-serializeposition), [`SavableSavedDynamicObject.Spawn`](/game-api/types/alta-world/savablesaveddynamicobject#m-spawn), [`SavableSavedDynamicObject.SpawnOwned`](/game-api/types/alta-world/savablesaveddynamicobject#m-spawnowned), [`SavedDynamicObject.GetPositionlessSaveOf`](/game-api/types/alta-world/saveddynamicobject#m-getpositionlesssaveof), [`SavedDynamicObject.GetSaveOf`](/game-api/types/alta-world/saveddynamicobject#m-getsaveof), [`SavedDynamicObject.Spawn`](/game-api/types/alta-world/saveddynamicobject#m-spawn), [`SavedDynamicObject.SpawnOwned`](/game-api/types/alta-world/saveddynamicobject#m-spawnowned), [`StreamerHelper.DelayDestroy`](/game-api/types/alta-world/streamerhelper#m-delaydestroy), [`StreamerHelper.LoadSetupRecursive`](/game-api/types/alta-world/streamerhelper#m-loadsetuprecursive), [`StreamerHelper.PostToPlayer`](/game-api/types/alta-world/streamerhelper#m-posttoplayer), [`StreamerHelper.SerializePrefab`](/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`AltaSelection.Current`](/game-api/types/alta-console/altaselection#m-current), [`EntityInfo.op_Implicit`](/game-api/types/alta-console/entityinfo#m-op-implicit), [`Inventory.AddChildren`](/game-api/types/alta-console/inventory#m-addchildren), [`NetworkEntityInfo.op_Implicit`](/game-api/types/alta-console/networkentityinfo#m-op-implicit), [`PrefabInfoDump.NetworkEntityInfoDump.op_Implicit`](/game-api/types/alta-console/prefabinfodump-networkentityinfodump#m-op-implicit), [`SpawnCommandModule.Spawn`](/game-api/types/alta-console/spawncommandmodule#m-spawn), [`SpawnCommandModule.SpawnFull`](/game-api/types/alta-console/spawncommandmodule#m-spawnfull), [`WackyCommandModule.ReplaceEntity`](/game-api/types/alta-console/wackycommandmodule#m-replaceentity) and 537 more.

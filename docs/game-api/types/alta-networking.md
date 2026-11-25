---
title: Networking and servers
description: "Types in Alta.Networking and the other server, streaming and voice namespaces of Root.Township."
sidebar_position: 2
---

# Networking and servers

Types in Alta.Networking and the other server, streaming and voice namespaces of Root.Township. 201 types, 31 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Meta.Servers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ServersManager`](/game-api/types/alta-networking/serversmanager) | class | `LoggedInTool` | 1 |  |

## Alta.Networking

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AccumulativeAverageCount`](/game-api/types/alta-networking/accumulativeaveragecount) | class |  | 5 |  |
| [`AccumulativeAverageNumber`](/game-api/types/alta-networking/accumulativeaveragenumber) | class |  | 5 |  |
| [`BaseSync`](/game-api/types/alta-networking/basesync) | abstract class |  | 1 |  |
| [`ChunksChanged`](/game-api/types/alta-networking/chunkschanged) | delegate |  | 0 |  |
| [`ClientOnly`](/game-api/types/alta-networking/clientonly) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 0 | [Entity sync](../networking/entity-sync.md#clientonly): `Alta.Networking.ClientOnly` is a component that lists behaviours to switch off on a real server (renderers, audio, effects) and on everywhere else. It runs in `Awake`. |
| [`ClientPacketReceiver`](/game-api/types/alta-networking/clientpacketreceiver) | class | `IPacketReceiver`, `IPacketProcessor` | 2 |  |
| [`ClientSpawnManager`](/game-api/types/alta-networking/clientspawnmanager) | class | `SpawnManager` | 5 | [Spawning](../world/spawning.md) |
| [`ClientSync`](/game-api/types/alta-networking/clientsync) | class | `BaseSync`, `ISync` | 8 |  |
| [`ConfirmJoinMessage`](/game-api/types/alta-networking/confirmjoinmessage) | internal struct |  | 8 |  |
| [`Connection`](/game-api/types/alta-networking/connection) | class | `IConnection` | 30 | [Sockets and connections](../networking/connections.md#connection): One per peer. On a server, a player's is `player.ConnectionToRemotePlayer`. |
| [`ConnectionChannel`](/game-api/types/alta-networking/connectionchannel) | class | `ScriptableObject` | 7 | [Sockets and connections](../networking/connections.md#connectionchannel): The channels come from `GlobalSettings<NetworkingSettings>.Instance.Channels`; each connection has one outgoing queue per channel. |
| [`ConnectionChannel.Create`](/game-api/types/alta-networking/connectionchannel-create) | class | `AltaMenuItemBase.Assets.Create.Township.Networking.ScriptableObject<ConnectionChannel>` | 0 |  |
| [`ConnectionEventHandler`](/game-api/types/alta-networking/connectioneventhandler) | delegate |  | 0 |  |
| [`ControlledWriteSync`](/game-api/types/alta-networking/controlledwritesync) | class |  | 3 |  |
| [`DestroyableStaticObject`](/game-api/types/alta-networking/destroyablestaticobject) | class | `ModifiableStaticObject` | 0 | [Static objects](../world/static-objects.md#destroyablestaticobject): `Alta.Networking.DestroyableStaticObject` derives from `ModifiableStaticObject` and adds health. On the server it listens to its `ImpactDetector`s. |
| [`DestroyMessage`](/game-api/types/alta-networking/destroymessage) | static class |  | 2 |  |
| [`EntityDespawnedHandler`](/game-api/types/alta-networking/entitydespawnedhandler) | delegate |  | 0 |  |
| [`EntityMessageHandler`](/game-api/types/alta-networking/entitymessagehandler) | class |  | 7 | [Entity sync](../networking/entity-sync.md#entitymessagehandler): If an entity message arrives on a client before that entity has spawned there, the game keeps a copy and handles it when it spawns (`Spawner.WaitForSpawn`). |
| [`EntityMessageType`](/game-api/types/alta-networking/entitymessagetype) | enum |  | 120 | [Entity sync](../networking/entity-sync.md#entitymessagetype): `Alta.Networking.EntityMessageType` is written as 8 bits, so 0 to 255. |
| [`EntitySerializationMessage`](/game-api/types/alta-networking/entityserializationmessage) | static class |  | 2 |  |
| [`EntitySerializer`](/game-api/types/alta-networking/entityserializer) | class |  | 19 |  |
| [`EntitySpawnedHandler`](/game-api/types/alta-networking/entityspawnedhandler) | delegate |  | 0 |  |
| [`EntityStreamerData`](/game-api/types/alta-networking/entitystreamerdata) | class |  | 3 |  |
| [`EntitySyncMessage`](/game-api/types/alta-networking/entitysyncmessage) | static class |  | 2 |  |
| [`ExampleBehaviour`](/game-api/types/alta-networking/examplebehaviour) | class |  | 0 |  |
| [`FakeSocket`](/game-api/types/alta-networking/fakesocket) | class | `ISocket`, `IDisposable` | 20 |  |
| [`GeneralGameEvents`](/game-api/types/alta-networking/generalgameevents) | static class |  | 6 |  |
| [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour) | abstract class | `NetworkEntityBehaviour` | 1 |  |
| [`IChunkedEntity`](/game-api/types/alta-networking/ichunkedentity) | interface |  | 2 |  |
| [`ICustomTypeReplace`](/game-api/types/alta-networking/icustomtypereplace) | interface | `IEntityReplaceHandler` | 1 |  |
| [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler) | interface |  | 2 |  |
| [`IEntitySerialized`](/game-api/types/alta-networking/ientityserialized) | interface |  | 1 |  |
| [`INetworkEntity`](/game-api/types/alta-networking/inetworkentity) | interface |  | 13 |  |
| [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour) | interface |  | 5 |  |
| [`INetworkScene`](/game-api/types/alta-networking/inetworkscene) | interface |  | 15 |  |
| [`INetworkSceneInternal`](/game-api/types/alta-networking/inetworksceneinternal) | interface | `INetworkScene`, `IEntityManager` | 8 |  |
| [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized) | interface |  | 5 |  |
| [`InternalMessage`](/game-api/types/alta-networking/internalmessage) | static class |  | 3 |  |
| [`IPacketReceiver`](/game-api/types/alta-networking/ipacketreceiver) | interface |  | 1 |  |
| [`ISerializeChildren`](/game-api/types/alta-networking/iserializechildren) | interface |  | 7 |  |
| [`ISocket`](/game-api/types/alta-networking/isocket) | interface | `IDisposable` | 17 |  |
| [`ISync`](/game-api/types/alta-networking/isync) | interface |  | 8 |  |
| [`JoinedServerInfo`](/game-api/types/alta-networking/joinedserverinfo) | class |  | 9 | [Joining a server](../networking/joining.md), [Server settings](../networking/server-settings.md): The server you're on: `static Current`, `Identifier`, `Name`, `ConnectionInfo`, `IsLocalServer` (id `-1`). Set on the client at the first acceptance. |
| [`MessageType`](/game-api/types/alta-networking/messagetype) | enum |  | 23 | [Connection messages](../networking/messages.md#messagetype): Free below 32: 3, 5, 8, 14, 16, 19, 27, 31. |
| [`MethodSync`](/game-api/types/alta-networking/methodsync) | class | `Sync` | 2 | [Entity sync](../networking/entity-sync.md#methodsync-and-friends): These wrap a type and a handler, register the handler on the entity in their constructor, and give you `SendToChunks` and `SendToPlayer`. All in `Alta.Networking`: |
| [`MethodSyncClass<T>`](/game-api/types/alta-networking/methodsyncclass-t) | class | `Sync<T>` | 2 |  |
| [`MethodSyncStruct<T>`](/game-api/types/alta-networking/methodsyncstruct-t) | class | `Sync<T>` | 2 |  |
| [`ModifiableStaticEvent`](/game-api/types/alta-networking/modifiablestaticevent) | class | `AltaEvent<ModifiableStaticObject, ModifiableStaticUnityEvent>` | 0 |  |
| [`ModifiableStaticManager`](/game-api/types/alta-networking/modifiablestaticmanager) | class | `NetworkEntityBehaviour`, `ISavable<ModifiableStaticManagerSaveData>`, `ISavableSave<ModifiableStaticManagerSaveData>`, +1 more | 11 |  |
| [`ModifiableStaticManagerSaveData`](/game-api/types/alta-networking/modifiablestaticmanagersavedata) | internal class | `NewSaveData<ModifiableStaticManager, ModifiableStaticManagerSaveData>` | 1 |  |
| [`ModifiableStaticObject`](/game-api/types/alta-networking/modifiablestaticobject) | class | `MonoBehaviour`, `IChangeWithChunking`, `IIgnoreForStaticFlatten`, +2 more | 5 |  |
| [`ModifiableStaticUnityEvent`](/game-api/types/alta-networking/modifiablestaticunityevent) | class | `UnityEvent<ModifiableStaticObject>` | 0 |  |
| [`ModificationArguments`](/game-api/types/alta-networking/modificationarguments) | struct |  | 4 |  |
| [`MoveMessage`](/game-api/types/alta-networking/movemessage) | static class |  | 2 |  |
| [`NetworkAxisPosition`](/game-api/types/alta-networking/networkaxisposition) | class | `NetworkAxisValue` | 0 |  |
| [`NetworkAxisRotation`](/game-api/types/alta-networking/networkaxisrotation) | class | `NetworkAxisValue` | 1 |  |
| [`NetworkAxisValue`](/game-api/types/alta-networking/networkaxisvalue) | abstract class | `NetworkEntityBehaviour`, `INetworkSerialized` | 7 |  |
| [`NetworkColliderGroup`](/game-api/types/alta-networking/networkcollidergroup) | class | `ColliderGroup`, `INetworkEntityBehaviour` | 6 |  |
| [`NetworkEntity`](/game-api/types/alta-networking/networkentity) | class | `MonoBehaviour`, `IChunkedEntity`, `IEntitySerialized`, +1 more | 70 | [NetworkEntity](../world/network-entity.md): Runs on server and clients. |
| [`NetworkEntity.SyncPriorityModifiers`](/game-api/types/alta-networking/networkentity-syncprioritymodifiers) | enum |  | 1 |  |
| [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour) | abstract class | `MonoBehaviour`, `INetworkEntityBehaviour` | 5 | [Entity sync](../networking/entity-sync.md#networkentitybehaviour): The base class for networked components. `Entity` gets the `NetworkEntity`. Overridable: |
| [`NetworkEntityComponentController`](/game-api/types/alta-networking/networkentitycomponentcontroller) | class | `MonoBehaviour`, `IInitializeAsLocalPlayer`, `IInitializeAsRemotePlayer` | 0 |  |
| [`NetworkEntityHandler`](/game-api/types/alta-networking/networkentityhandler) | delegate |  | 0 |  |
| [`NetworkEntityLink`](/game-api/types/alta-networking/networkentitylink) | class |  | 21 |  |
| [`NetworkEntityParent`](/game-api/types/alta-networking/networkentityparent) | class | `MonoBehaviour` | 4 |  |
| [`NetworkGravity`](/game-api/types/alta-networking/networkgravity) | class | `NetworkEntityBehaviour` | 5 |  |
| [`NetworkHash128`](/game-api/types/alta-networking/networkhash128) | struct |  | 20 |  |
| [`NetworkingSettings`](/game-api/types/alta-networking/networkingsettings) | class | `GlobalSettings<NetworkingSettings>` | 13 |  |
| [`NetworkingSettings.Create`](/game-api/types/alta-networking/networkingsettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<NetworkingSettings>` | 0 |  |
| [`NetworkManager`](/game-api/types/alta-networking/networkmanager) | static class |  | 21 | [Sockets and connections](../networking/connections.md#networkmanager), [Update modules](../console-and-utilities/update-modules.md) |
| [`NetworkPrefab`](/game-api/types/alta-networking/networkprefab) | class | `NetworkEntityParent`, `INetworkEntityBehaviour`, `ISerializeChildren` | 25 | [Prefabs and prefab hashes](../world/prefabs.md#networkprefab), [Arguments and results](../console-and-utilities/arguments-and-results.md): A `MonoBehaviour` next to the prefab's `NetworkEntity`. |
| [`NetworkPrefab.ChildPrefab`](/game-api/types/alta-networking/networkprefab-childprefab) | class |  | 3 |  |
| [`NetworkPrefabChildEventHandler`](/game-api/types/alta-networking/networkprefabchildeventhandler) | delegate |  | 0 |  |
| [`NetworkPrefabConverter`](/game-api/types/alta-networking/networkprefabconverter) | class | `TypeConverter` | 2 |  |
| [`NetworkPrefabEventHandler`](/game-api/types/alta-networking/networkprefabeventhandler) | delegate |  | 0 |  |
| [`NetworkRigidbody`](/game-api/types/alta-networking/networkrigidbody) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `ISavableFull<NetworkRigidbodySaveData>`, +6 more | 21 |  |
| [`NetworkRigidbodySaveData`](/game-api/types/alta-networking/networkrigidbodysavedata) | internal class | `NewSaveData<NetworkRigidbody, NetworkRigidbodySaveData>` | 6 |  |
| [`NetworkRotation`](/game-api/types/alta-networking/networkrotation) | class | `NetworkEntityBehaviour` | 3 |  |
| [`NetworkScene`](/game-api/types/alta-networking/networkscene) | class | `NetworkEntityParent`, `INetworkSceneInternal`, `INetworkScene`, +1 more | 22 |  |
| [`NetworkSerializedProfiler`](/game-api/types/alta-networking/networkserializedprofiler) | static class |  | 3 |  |
| [`NetworkTransform`](/game-api/types/alta-networking/networktransform) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IInitializeAsLocalPlayer` | 8 |  |
| [`PacketSentHandler`](/game-api/types/alta-networking/packetsenthandler) | delegate |  | 0 |  |
| [`ParentChangedHandler`](/game-api/types/alta-networking/parentchangedhandler) | delegate |  | 0 |  |
| [`PhysicsSerializationSettings`](/game-api/types/alta-networking/physicsserializationsettings) | static class |  | 10 |  |
| [`PingMessage`](/game-api/types/alta-networking/pingmessage) | static class |  | 6 |  |
| [`PlayerComponentController`](/game-api/types/alta-networking/playercomponentcontroller) | class | `MonoBehaviour`, `IInitializeAsLocalPlayer` | 0 |  |
| [`PositionSyncBlocker`](/game-api/types/alta-networking/positionsyncblocker) | enum |  | 1 |  |
| [`PrefabManager`](/game-api/types/alta-networking/prefabmanager) | static class |  | 5 | [Prefabs and prefab hashes](../world/prefabs.md#prefabmanager): It loads every `NetworkPrefab` under `Resources/Network Prefabs` the first time anything asks, into a private `Dictionary<uint, NetworkPrefab>`. |
| [`PrefabNameMap`](/game-api/types/alta-networking/prefabnamemap) | class | `GlobalSettings<PrefabNameMap>`, `ISerializationCallbackReceiver` | 1 |  |
| [`ProfileNetworkSerializedAttribute`](/game-api/types/alta-networking/profilenetworkserializedattribute) | class | `Attribute` | 0 |  |
| [`RecreateArgumentMode`](/game-api/types/alta-networking/recreateargumentmode) | enum |  | 3 |  |
| [`ReplaceAvoidFlags`](/game-api/types/alta-networking/replaceavoidflags) | enum |  | 8 |  |
| [`RequestJoinMessage`](/game-api/types/alta-networking/requestjoinmessage) | internal class |  | 8 |  |
| [`RequestServerDiagnosticsMessage`](/game-api/types/alta-networking/requestserverdiagnosticsmessage) | static class |  | 2 |  |
| [`SceneEntityMessage`](/game-api/types/alta-networking/sceneentitymessage) | static class |  | 4 |  |
| [`SceneSerializationMessage`](/game-api/types/alta-networking/sceneserializationmessage) | class |  | 1 |  |
| [`SerializeConnectionMethod`](/game-api/types/alta-networking/serializeconnectionmethod) | delegate |  | 0 |  |
| [`SerializedEntityHandler`](/game-api/types/alta-networking/serializedentityhandler) | delegate |  | 0 |  |
| [`SerializeMethod`](/game-api/types/alta-networking/serializemethod) | delegate |  | 0 |  |
| [`SerializeMethod<T>`](/game-api/types/alta-networking/serializemethod-t) | delegate |  | 0 |  |
| [`ServerDiagnosticsMessage`](/game-api/types/alta-networking/serverdiagnosticsmessage) | static class |  | 5 |  |
| [`ServerMessageReceiverPerConnection`](/game-api/types/alta-networking/servermessagereceiverperconnection) | class |  | 5 |  |
| [`ServerPacketReceiver`](/game-api/types/alta-networking/serverpacketreceiver) | class | `IPacketReceiver`, `IPacketProcessor` | 8 |  |
| [`ServerSpawnManager`](/game-api/types/alta-networking/serverspawnmanager) | class | `SpawnManager` | 6 | [Spawning](../world/spawning.md) |
| [`ServerSync`](/game-api/types/alta-networking/serversync) | class | `BaseSync`, `ISync` | 8 |  |
| [`Socket`](/game-api/types/alta-networking/socket) | class | `ISocket`, `IDisposable` | 22 | [Sockets and connections](../networking/connections.md#socket): Get the current one from `Socket.Current` (a static `ISocket`, the last socket made). |
| [`SocketEventHandler`](/game-api/types/alta-networking/socketeventhandler) | delegate |  | 0 |  |
| [`SpawnIndex`](/game-api/types/alta-networking/spawnindex) | class |  | 4 |  |
| [`SpawnManager`](/game-api/types/alta-networking/spawnmanager) | abstract class |  | 13 | [Spawning](../world/spawning.md#spawnmanager): Get it from `NetworkSceneManager.Current.Spawner`, `entity.Spawner` or `SpawnHelper.Manager`. |
| [`SpawnMessage`](/game-api/types/alta-networking/spawnmessage) | static class |  | 2 |  |
| [`StaticChangeEvent`](/game-api/types/alta-networking/staticchangeevent) | delegate |  | 0 |  |
| [`StaticPlatformSupport`](/game-api/types/alta-networking/staticplatformsupport) | class | `NetworkEntityBehaviour` | 2 |  |
| [`StreamAuthorityHelper`](/game-api/types/alta-networking/streamauthorityhelper) | static class |  | 2 |  |
| [`StreamEntityExtensions`](/game-api/types/alta-networking/streamentityextensions) | static class |  | 7 |  |
| [`StreamMethod`](/game-api/types/alta-networking/streammethod) | delegate |  | 0 |  |
| [`Sync`](/game-api/types/alta-networking/sync) | abstract class |  | 5 |  |
| [`Sync<T>`](/game-api/types/alta-networking/sync-t) | abstract class |  | 5 |  |
| [`SyncFactory`](/game-api/types/alta-networking/syncfactory) | static class |  | 1 |  |
| [`TemporaryUint256`](/game-api/types/alta-networking/temporaryuint256) | static class |  | 1 |  |
| [`ThrottledMethodSync`](/game-api/types/alta-networking/throttledmethodsync) | class |  | 3 |  |
| [`TransportSystem`](/game-api/types/alta-networking/transportsystem) | enum |  | 1 |  |

## Alta.Networking.Animation

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AnimatedBool`](/game-api/types/alta-networking/animatedbool) | class | `AnimatedValue<bool>` | 5 |  |
| [`AnimatedBoolAccess`](/game-api/types/alta-networking/animatedboolaccess) | class | `MonoBehaviour` | 1 |  |
| [`AnimatedFloat`](/game-api/types/alta-networking/animatedfloat) | class | `AnimatedValue<float>` | 3 |  |
| [`AnimatedFloatLerp`](/game-api/types/alta-networking/animatedfloatlerp) | class | `AnimatedFloat` | 3 |  |
| [`AnimatedInt`](/game-api/types/alta-networking/animatedint) | class | `AnimatedValue<int>` | 2 |  |
| [`AnimatedLayerWeight`](/game-api/types/alta-networking/animatedlayerweight) | class | `AnimatedValue<float>` | 2 |  |
| [`AnimatedLayerWeightLerp`](/game-api/types/alta-networking/animatedlayerweightlerp) | class | `AnimatedLayerWeight` | 6 |  |
| [`AnimatedTrigger`](/game-api/types/alta-networking/animatedtrigger) | class | `AnimatedValue<bool>` | 5 |  |
| [`AnimatedValue<T>`](/game-api/types/alta-networking/animatedvalue-t) | abstract class | `INameable` | 11 |  |
| [`AnimationBasedSound`](/game-api/types/alta-networking/animationbasedsound) | class | `MonoBehaviour` | 1 |  |
| [`AnimatorBoolAccess`](/game-api/types/alta-networking/animatorboolaccess) | class | `MonoBehaviour` | 1 |  |
| [`INameable`](/game-api/types/alta-networking/inameable) | interface |  | 1 |  |
| [`NetworkAnimator`](/game-api/types/alta-networking/networkanimator) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IBuildRendererPostBake`, +1 more | 16 |  |
| [`NetworkAnimator.FloatParameterType`](/game-api/types/alta-networking/networkanimator-floatparametertype) | enum |  | 4 |  |

## Alta.Networking.Internal

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ClientSerializedEnumerable`](/game-api/types/alta-networking/clientserializedenumerable) | class | `SerializedEnumerable` | 3 |  |
| [`ConnectionReceiver`](/game-api/types/alta-networking/connectionreceiver) | abstract class | `IDisposable` | 3 |  |
| [`ConnectionReceiverType`](/game-api/types/alta-networking/connectionreceivertype) | enum |  | 3 |  |
| [`ConnectionReceiveSettings`](/game-api/types/alta-networking/connectionreceivesettings) | class | `GlobalSettings<ConnectionReceiveSettings>` | 6 |  |
| [`ConnectionReceiveSettings.Create`](/game-api/types/alta-networking/connectionreceivesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Networking.ScriptableObject<ConnectionReceiveSettings>` | 0 |  |
| [`CountedQueuedConnectionReceiver`](/game-api/types/alta-networking/countedqueuedconnectionreceiver) | class | `QueuedConnectionReceiver` | 1 |  |
| [`EntityManager`](/game-api/types/alta-networking/entitymanager) | class | `ILinkProvider`, `IEntityManager`, `IDisposable` | 19 | [Finding entities](../world/finding-entities.md#every-entity-entitymanager): One per scene, in a private field of `NetworkScene`. |
| [`IEntityManager`](/game-api/types/alta-networking/ientitymanager) | interface |  | 2 |  |
| [`ILinkProvider`](/game-api/types/alta-networking/ilinkprovider) | interface |  | 5 |  |
| [`MessageProcessor`](/game-api/types/alta-networking/messageprocessor) | static class |  | 2 |  |
| [`NormalConnectionReceiver`](/game-api/types/alta-networking/normalconnectionreceiver) | class | `ConnectionReceiver` | 3 |  |
| [`OutgoingPacketManager`](/game-api/types/alta-networking/outgoingpacketmanager) | class | `IDisposable` | 13 |  |
| [`Packet`](/game-api/types/alta-networking/packet) | class |  | 8 |  |
| [`PooledDataQueueItem`](/game-api/types/alta-networking/pooleddataqueueitem) | class |  | 3 |  |
| [`QueuedConnectionHelper`](/game-api/types/alta-networking/queuedconnectionhelper) | static class |  | 4 |  |
| [`QueuedConnectionReceiver`](/game-api/types/alta-networking/queuedconnectionreceiver) | abstract class | `ConnectionReceiver` | 5 |  |
| [`SceneSerializer`](/game-api/types/alta-networking/sceneserializer) | class |  | 11 |  |
| [`SerializedEnumerable`](/game-api/types/alta-networking/serializedenumerable) | class | `IEnumerable<EntitySerializer>`, `IEnumerable`, `IEnumerator<EntitySerializer>`, +2 more | 7 |  |
| [`SerializingEntityHandler`](/game-api/types/alta-networking/serializingentityhandler) | delegate |  | 0 |  |
| [`TimedQueuedConnectionReceiver`](/game-api/types/alta-networking/timedqueuedconnectionreceiver) | class | `QueuedConnectionReceiver` | 2 |  |

## Alta.Networking.Scripts.Player

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`IPlayer`](/game-api/types/alta-networking/iplayer) | interface | `INetworkEntity` | 25 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |

## Alta.Networking.Servers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ConnectToServerUtility`](/game-api/types/alta-networking/connecttoserverutility) | static class |  | 2 | [Joining a server](../networking/joining.md): Owns the client socket and the current pipeline. `StopCurrentConnectionAttempt()`. Registers the in-game message handlers once a join succeeds. |
| [`JoinResult`](/game-api/types/alta-networking/joinresult) | class |  | 9 |  |
| [`PlayerJoinLeaveData`](/game-api/types/alta-networking/playerjoinleavedata) | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| [`ServerHandler`](/game-api/types/alta-networking/serverhandler) | class |  | 29 | [ServerHandler](../networking/server-handler.md): There's one per running server. |
| [`ServerHandler.BootupStep`](/game-api/types/alta-networking/serverhandler-bootupstep) | delegate |  | 0 |  |
| [`ServerHandler.ConnectionStep`](/game-api/types/alta-networking/serverhandler-connectionstep) | delegate |  | 0 |  |
| [`ServerJoinLock`](/game-api/types/alta-networking/serverjoinlock) | struct |  | 5 | [Server lifecycle](../networking/server-lifecycle.md) |
| [`ServerLifetimePipeline`](/game-api/types/alta-networking/serverlifetimepipeline) | static class |  | 6 | [Server lifecycle](../networking/server-lifecycle.md): Opens the server socket and makes the handler. `GetServerRegion()`, `GetServerFleet()`. |
| [`ServerLockCollection`](/game-api/types/alta-networking/serverlockcollection) | class | `IEnumerable<ServerJoinLock>`, `IEnumerable` | 4 | [Server lifecycle](../networking/server-lifecycle.md) |
| [`ServerPlayerConnectionHandlerOld`](/game-api/types/alta-networking/serverplayerconnectionhandlerold) | class |  | 6 |  |
| [`ServerPlayerConnectionHandlerOld.ApiServerJoinResult`](/game-api/types/alta-networking/serverplayerconnectionhandlerold-apiserverjoinresult) | struct |  | 2 |  |

## Alta.Networking.Voice

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`VoiceChatMouthController`](/game-api/types/alta-networking/voicechatmouthcontroller) | class | `MonoBehaviour` | 0 |  |

## Alta.Profiling.Networking

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ConnectionSimulatorConfiguration`](/game-api/types/alta-networking/connectionsimulatorconfiguration) | class |  | 5 |  |
| [`DuplicateKeyComparer<TKey>`](/game-api/types/alta-networking/duplicatekeycomparer-tkey) | internal class | `IComparer<TKey>` | 1 |  |
| [`EntityMessageStatistics`](/game-api/types/alta-networking/entitymessagestatistics) | class | `IndexedStatisticList<EntityMessageTypeStatistic, EntityMessageType>` | 1 |  |
| [`EntityMessageTypeStatistic`](/game-api/types/alta-networking/entitymessagetypestatistic) | class | `NetworkingStatistic` | 3 |  |
| [`EntityStatistic`](/game-api/types/alta-networking/entitystatistic) | class | `NetworkingStatistic` | 10 |  |
| [`EntityStatistics`](/game-api/types/alta-networking/entitystatistics) | class | `NetworkingStatisticsListNonSerialized<EntityStatistic>` | 7 |  |
| [`IndexedStatisticList<TStatistic, TStatType>`](/game-api/types/alta-networking/indexedstatisticlist-tstatistic-tstattype) | abstract class | `NetworkingStatisticsList<TStatistic>` | 0 |  |
| [`MessageStatistics`](/game-api/types/alta-networking/messagestatistics) | class | `NetworkingStatisticsList<MessageTypeStatistic, KeyValuePair<MessageType, MessageTypeStatistic>>` | 1 |  |
| [`MessageTypeStatistic`](/game-api/types/alta-networking/messagetypestatistic) | class | `NetworkingStatistic` | 2 |  |
| [`SerializedBehaviourStatistic`](/game-api/types/alta-networking/serializedbehaviourstatistic) | class | `NetworkingStatistic` | 3 |  |
| [`SerializedBehaviourStatistics`](/game-api/types/alta-networking/serializedbehaviourstatistics) | class | `IndexedStatisticList<SerializedBehaviourStatistic, string>` | 1 |  |

## Alta.Streaming

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`IForcedPresenceOnServer`](/game-api/types/alta-networking/iforcedpresenceonserver) | interface |  | 0 |  |
| [`IForcePresenceOnAndroidClient`](/game-api/types/alta-networking/iforcepresenceonandroidclient) | interface |  | 0 |  |
| [`ScriptAssignedStaticBatchingMarker`](/game-api/types/alta-networking/scriptassignedstaticbatchingmarker) | class | `MonoBehaviour`, `IForcePresenceOnAndroidClient` | 0 |  |

## Alta.Voice

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`IVivoxMutedPlayerStore`](/game-api/types/alta-networking/ivivoxmutedplayerstore) | internal interface |  | 3 |  |
| [`IVivoxVoiceUpdatable`](/game-api/types/alta-networking/ivivoxvoiceupdatable) | interface |  | 1 |  |
| [`IVoiceChat`](/game-api/types/alta-networking/ivoicechat) | interface |  | 4 |  |
| [`VivoxChannel`](/game-api/types/alta-networking/vivoxchannel) | class |  | 5 |  |
| [`VivoxClient`](/game-api/types/alta-networking/vivoxclient) | class |  | 27 |  |
| [`VivoxConfiguration`](/game-api/types/alta-networking/vivoxconfiguration) | class |  | 6 |  |
| [`VivoxManager`](/game-api/types/alta-networking/vivoxmanager) | class | `SingletonBehaviour<VivoxManager>` | 5 |  |
| [`VivoxPlayerPrefsMutedPlayerStore`](/game-api/types/alta-networking/vivoxplayerprefsmutedplayerstore) | internal class | `IVivoxMutedPlayerStore` | 3 |  |
| [`VivoxSession`](/game-api/types/alta-networking/vivoxsession) | class |  | 12 |  |
| [`VivoxText`](/game-api/types/alta-networking/vivoxtext) | class |  | 4 |  |
| [`VivoxUtility`](/game-api/types/alta-networking/vivoxutility) | static class |  | 7 | [Startup and app state](../console-and-utilities/startup-and-app-state.md) |
| [`VivoxVoice`](/game-api/types/alta-networking/vivoxvoice) | class | `IVivoxVoiceUpdatable` | 3 |  |
| [`VoiceChat`](/game-api/types/alta-networking/voicechat) | class | `IVoiceChat` | 5 | [Connection messages](../networking/messages.md) |
| [`VoiceChatScope`](/game-api/types/alta-networking/voicechatscope) | enum |  | 3 |  |

## Alta.WebServer

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AltaConsoleModule`](/game-api/types/alta-networking/altaconsolemodule) | class | `WebModuleBase` | 2 | [Remote console](../console-and-utilities/remote-console.md): the game's web server, path `/console` |
| [`AltaFolderModule`](/game-api/types/alta-networking/altafoldermodule) | class | `WebModuleBase`, `IDisposable` | 4 | [Remote console](../console-and-utilities/remote-console.md) |
| [`OutputFolderModule`](/game-api/types/alta-networking/outputfoldermodule) | class | `WebModuleBase`, `IDisposable` | 3 | [Remote console](../console-and-utilities/remote-console.md) |
| [`WebServerThread`](/game-api/types/alta-networking/webserverthread) | class | `IDisposable` | 4 |  |

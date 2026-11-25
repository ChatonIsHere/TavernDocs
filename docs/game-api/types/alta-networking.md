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
| `ServersManager` | class | `LoggedInTool` | 1 |  |

## Alta.Networking

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AccumulativeAverageCount` | class |  | 5 |  |
| `AccumulativeAverageNumber` | class |  | 5 |  |
| `BaseSync` | abstract class |  | 1 |  |
| `ChunksChanged` | delegate |  | 0 |  |
| `ClientOnly` | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 0 | [Entity sync](../networking/entity-sync.md#clientonly): `Alta.Networking.ClientOnly` is a component that lists behaviours to switch off on a real server (renderers, audio, effects) and on everywhere else. It runs in `Awake`. |
| `ClientPacketReceiver` | class | `IPacketReceiver`, `IPacketProcessor` | 2 |  |
| `ClientSpawnManager` | class | `SpawnManager(networkScene, linkProvider)` | 5 | [Spawning](../world/spawning.md) |
| `ClientSync` | class | `BaseSync`, `ISync` | 8 |  |
| `ConfirmJoinMessage` | internal struct |  | 8 |  |
| `Connection` | class | `IConnection` | 30 | [Sockets and connections](../networking/connections.md#connection): One per peer. On a server, a player's is `player.ConnectionToRemotePlayer`. |
| `ConnectionChannel` | class | `ScriptableObject` | 7 | [Sockets and connections](../networking/connections.md#connectionchannel): The channels come from `GlobalSettings<NetworkingSettings>.Instance.Channels`; each connection has one outgoing queue per channel. |
| `ConnectionChannel.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Networking.ScriptableObject<ConnectionChannel>` | 0 |  |
| `ConnectionEventHandler` | delegate |  | 0 |  |
| `ControlledWriteSync` | class |  | 3 |  |
| `DestroyableStaticObject` | class | `ModifiableStaticObject` | 0 | [Static objects](../world/static-objects.md#destroyablestaticobject): `Alta.Networking.DestroyableStaticObject` derives from `ModifiableStaticObject` and adds health. On the server it listens to its `ImpactDetector`s. |
| `DestroyMessage` | static class |  | 2 |  |
| `EntityDespawnedHandler` | delegate |  | 0 |  |
| `EntityMessageHandler` | class |  | 7 | [Entity sync](../networking/entity-sync.md#entitymessagehandler): If an entity message arrives on a client before that entity has spawned there, the game keeps a copy and handles it when it spawns (`Spawner.WaitForSpawn`). |
| `EntityMessageType` | enum |  | 120 | [Entity sync](../networking/entity-sync.md#entitymessagetype): `Alta.Networking.EntityMessageType` is written as 8 bits, so 0 to 255. |
| `EntitySerializationMessage` | static class |  | 2 |  |
| `EntitySerializer` | class |  | 19 |  |
| `EntitySpawnedHandler` | delegate |  | 0 |  |
| `EntityStreamerData` | class |  | 3 |  |
| `EntitySyncMessage` | static class |  | 2 |  |
| `ExampleBehaviour` | class |  | 0 |  |
| `FakeSocket` | class | `ISocket`, `IDisposable` | 20 |  |
| `GeneralGameEvents` | static class |  | 6 |  |
| `GeneratedNetworkEntityBehaviour` | abstract class | `NetworkEntityBehaviour` | 1 |  |
| `IChunkedEntity` | interface |  | 2 |  |
| `ICustomTypeReplace` | interface | `IEntityReplaceHandler` | 1 |  |
| `IEntityReplaceHandler` | interface |  | 2 |  |
| `IEntitySerialized` | interface |  | 1 |  |
| `INetworkEntity` | interface |  | 13 |  |
| `INetworkEntityBehaviour` | interface |  | 5 |  |
| `INetworkScene` | interface |  | 15 |  |
| `INetworkSceneInternal` | interface | `INetworkScene`, `IEntityManager` | 8 |  |
| `INetworkSerialized` | interface |  | 5 |  |
| `InternalMessage` | static class |  | 3 |  |
| `IPacketReceiver` | interface |  | 1 |  |
| `ISerializeChildren` | interface |  | 7 |  |
| `ISocket` | interface | `IDisposable` | 17 |  |
| `ISync` | interface |  | 8 |  |
| `JoinedServerInfo` | class |  | 9 | [Joining a server](../networking/joining.md), [Server settings](../networking/server-settings.md): The server you're on: `static Current`, `Identifier`, `Name`, `ConnectionInfo`, `IsLocalServer` (id `-1`). Set on the client at the first acceptance. |
| `MessageType` | enum |  | 23 | [Connection messages](../networking/messages.md#messagetype): Free below 32: 3, 5, 8, 14, 16, 19, 27, 31. |
| `MethodSync` | class | `Sync` | 2 | [Entity sync](../networking/entity-sync.md#methodsync-and-friends): These wrap a type and a handler, register the handler on the entity in their constructor, and give you `SendToChunks` and `SendToPlayer`. All in `Alta.Networking`: |
| `MethodSyncClass<T>` | class | `Sync<T>` | 2 |  |
| `MethodSyncStruct<T>` | class | `Sync<T>` | 2 |  |
| `ModifiableStaticEvent` | class | `AltaEvent<ModifiableStaticObject, ModifiableStaticUnityEvent>` | 0 |  |
| `ModifiableStaticManager` | class | `NetworkEntityBehaviour`, `ISavable<ModifiableStaticManagerSaveData>`, `ISavableSave<ModifiableStaticManagerSaveData>`, +1 more | 11 |  |
| `ModifiableStaticManagerSaveData` | internal class | `NewSaveData<ModifiableStaticManager, ModifiableStaticManagerSaveData>` | 1 |  |
| `ModifiableStaticObject` | class | `MonoBehaviour`, `IChangeWithChunking`, `IIgnoreForStaticFlatten`, +2 more | 5 |  |
| `ModifiableStaticUnityEvent` | class | `UnityEvent<ModifiableStaticObject>` | 0 |  |
| `ModificationArguments` | struct |  | 4 |  |
| `MoveMessage` | static class |  | 2 |  |
| `NetworkAxisPosition` | class | `NetworkAxisValue` | 0 |  |
| `NetworkAxisRotation` | class | `NetworkAxisValue` | 1 |  |
| `NetworkAxisValue` | abstract class | `NetworkEntityBehaviour`, `INetworkSerialized` | 7 |  |
| `NetworkColliderGroup` | class | `ColliderGroup`, `INetworkEntityBehaviour` | 6 |  |
| `NetworkEntity` | class | `MonoBehaviour`, `IChunkedEntity`, `IEntitySerialized`, +1 more | 70 | [NetworkEntity](../world/network-entity.md): Runs on server and clients. |
| `NetworkEntity.SyncPriorityModifiers` | enum |  | 1 |  |
| `NetworkEntityBehaviour` | abstract class | `MonoBehaviour`, `INetworkEntityBehaviour` | 5 | [Entity sync](../networking/entity-sync.md#networkentitybehaviour): The base class for networked components. `Entity` gets the `NetworkEntity`. Overridable: |
| `NetworkEntityComponentController` | class | `MonoBehaviour`, `IInitializeAsLocalPlayer`, `IInitializeAsRemotePlayer` | 0 |  |
| `NetworkEntityHandler` | delegate |  | 0 |  |
| `NetworkEntityLink` | class |  | 21 |  |
| `NetworkEntityParent` | class | `MonoBehaviour` | 4 |  |
| `NetworkGravity` | class | `NetworkEntityBehaviour` | 5 |  |
| `NetworkHash128` | struct |  | 20 |  |
| `NetworkingSettings` | class | `GlobalSettings<NetworkingSettings>` | 13 |  |
| `NetworkingSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<NetworkingSettings>` | 0 |  |
| `NetworkManager` | static class |  | 21 | [Sockets and connections](../networking/connections.md#networkmanager), [Update modules](../console-and-utilities/update-modules.md) |
| `NetworkPrefab` | class | `NetworkEntityParent`, `INetworkEntityBehaviour`, `ISerializeChildren` | 25 | [Prefabs and prefab hashes](../world/prefabs.md#networkprefab), [Arguments and results](../console-and-utilities/arguments-and-results.md): A `MonoBehaviour` next to the prefab's `NetworkEntity`. |
| `NetworkPrefab.ChildPrefab` | class |  | 3 |  |
| `NetworkPrefabChildEventHandler` | delegate |  | 0 |  |
| `NetworkPrefabConverter` | class | `TypeConverter` | 2 |  |
| `NetworkPrefabEventHandler` | delegate |  | 0 |  |
| `NetworkRigidbody` | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `ISavableFull<NetworkRigidbodySaveData>`, +6 more | 21 |  |
| `NetworkRigidbodySaveData` | internal class | `NewSaveData<NetworkRigidbody, NetworkRigidbodySaveData>` | 6 |  |
| `NetworkRotation` | class | `NetworkEntityBehaviour` | 3 |  |
| `NetworkScene` | class | `NetworkEntityParent`, `INetworkSceneInternal`, `INetworkScene`, +1 more | 22 |  |
| `NetworkSerializedProfiler` | static class |  | 3 |  |
| `NetworkTransform` | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IInitializeAsLocalPlayer` | 8 |  |
| `PacketSentHandler` | delegate |  | 0 |  |
| `ParentChangedHandler` | delegate |  | 0 |  |
| `PhysicsSerializationSettings` | static class |  | 10 |  |
| `PingMessage` | static class |  | 6 |  |
| `PlayerComponentController` | class | `MonoBehaviour`, `IInitializeAsLocalPlayer` | 0 |  |
| `PositionSyncBlocker` | enum |  | 1 |  |
| `PrefabManager` | static class |  | 5 | [Prefabs and prefab hashes](../world/prefabs.md#prefabmanager): It loads every `NetworkPrefab` under `Resources/Network Prefabs` the first time anything asks, into a private `Dictionary<uint, NetworkPrefab>`. |
| `PrefabNameMap` | class | `GlobalSettings<PrefabNameMap>`, `ISerializationCallbackReceiver` | 1 |  |
| `ProfileNetworkSerializedAttribute` | class | `Attribute` | 0 |  |
| `RecreateArgumentMode` | enum |  | 3 |  |
| `ReplaceAvoidFlags` | enum |  | 8 |  |
| `RequestJoinMessage` | internal class |  | 8 |  |
| `RequestServerDiagnosticsMessage` | static class |  | 2 |  |
| `SceneEntityMessage` | static class |  | 4 |  |
| `SceneSerializationMessage` | class |  | 1 |  |
| `SerializeConnectionMethod` | delegate |  | 0 |  |
| `SerializedEntityHandler` | delegate |  | 0 |  |
| `SerializeMethod` | delegate |  | 0 |  |
| `SerializeMethod<T>` | delegate |  | 0 |  |
| `ServerDiagnosticsMessage` | static class |  | 5 |  |
| `ServerMessageReceiverPerConnection` | class |  | 5 |  |
| `ServerPacketReceiver` | class | `IPacketReceiver`, `IPacketProcessor` | 8 |  |
| `ServerSpawnManager` | class | `SpawnManager` | 6 | [Spawning](../world/spawning.md) |
| `ServerSync` | class | `BaseSync`, `ISync` | 8 |  |
| `Socket` | class | `ISocket`, `IDisposable` | 22 | [Sockets and connections](../networking/connections.md#socket): Get the current one from `Socket.Current` (a static `ISocket`, the last socket made). |
| `SocketEventHandler` | delegate |  | 0 |  |
| `SpawnIndex` | class |  | 4 |  |
| `SpawnManager` | abstract class |  | 13 | [Spawning](../world/spawning.md#spawnmanager): Get it from `NetworkSceneManager.Current.Spawner`, `entity.Spawner` or `SpawnHelper.Manager`. |
| `SpawnMessage` | static class |  | 2 |  |
| `StaticChangeEvent` | delegate |  | 0 |  |
| `StaticPlatformSupport` | class | `NetworkEntityBehaviour` | 2 |  |
| `StreamAuthorityHelper` | static class |  | 2 |  |
| `StreamEntityExtensions` | static class |  | 7 |  |
| `StreamMethod` | delegate |  | 0 |  |
| `Sync` | abstract class |  | 5 |  |
| `Sync<T>` | abstract class |  | 5 |  |
| `SyncFactory` | static class |  | 1 |  |
| `TemporaryUint256` | static class |  | 1 |  |
| `ThrottledMethodSync` | class |  | 3 |  |
| `TransportSystem` | enum |  | 1 |  |

## Alta.Networking.Animation

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AnimatedBool` | class | `AnimatedValue<bool>` | 5 |  |
| `AnimatedBoolAccess` | class | `MonoBehaviour` | 1 |  |
| `AnimatedFloat` | class | `AnimatedValue<float>` | 3 |  |
| `AnimatedFloatLerp` | class | `AnimatedFloat` | 3 |  |
| `AnimatedInt` | class | `AnimatedValue<int>` | 2 |  |
| `AnimatedLayerWeight` | class | `AnimatedValue<float>` | 2 |  |
| `AnimatedLayerWeightLerp` | class | `AnimatedLayerWeight` | 6 |  |
| `AnimatedTrigger` | class | `AnimatedValue<bool>` | 5 |  |
| `AnimatedValue<T>` | abstract class | `INameable` | 11 |  |
| `AnimationBasedSound` | class | `MonoBehaviour` | 1 |  |
| `AnimatorBoolAccess` | class | `MonoBehaviour` | 1 |  |
| `INameable` | interface |  | 1 |  |
| `NetworkAnimator` | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IBuildRendererPostBake`, +1 more | 16 |  |
| `NetworkAnimator.FloatParameterType` | enum |  | 4 |  |

## Alta.Networking.Internal

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ClientSerializedEnumerable` | class | `SerializedEnumerable` | 3 |  |
| `ConnectionReceiver` | abstract class | `IDisposable` | 3 |  |
| `ConnectionReceiverType` | enum |  | 3 |  |
| `ConnectionReceiveSettings` | class | `GlobalSettings<ConnectionReceiveSettings>` | 6 |  |
| `ConnectionReceiveSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Networking.ScriptableObject<ConnectionReceiveSettings>` | 0 |  |
| `CountedQueuedConnectionReceiver` | class | `QueuedConnectionReceiver` | 1 |  |
| `EntityManager` | class | `ILinkProvider`, `IEntityManager`, `IDisposable` | 19 | [Finding entities](../world/finding-entities.md#every-entity-entitymanager): One per scene, in a private field of `NetworkScene`. |
| `IEntityManager` | interface |  | 2 |  |
| `ILinkProvider` | interface |  | 5 |  |
| `MessageProcessor` | static class |  | 2 |  |
| `NormalConnectionReceiver` | class | `ConnectionReceiver` | 3 |  |
| `OutgoingPacketManager` | class | `IDisposable` | 13 |  |
| `Packet` | class |  | 8 |  |
| `PooledDataQueueItem` | class |  | 3 |  |
| `QueuedConnectionHelper` | static class |  | 4 |  |
| `QueuedConnectionReceiver` | abstract class | `ConnectionReceiver` | 5 |  |
| `SceneSerializer` | class |  | 11 |  |
| `SerializedEnumerable` | class | `IEnumerable<EntitySerializer>`, `IEnumerable`, `IEnumerator<EntitySerializer>`, +2 more | 7 |  |
| `SerializingEntityHandler` | delegate |  | 0 |  |
| `TimedQueuedConnectionReceiver` | class | `QueuedConnectionReceiver` | 2 |  |

## Alta.Networking.Scripts.Player

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IPlayer` | interface | `INetworkEntity` | 25 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |

## Alta.Networking.Servers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ConnectToServerUtility` | static class |  | 2 | [Joining a server](../networking/joining.md): Owns the client socket and the current pipeline. `StopCurrentConnectionAttempt()`. Registers the in-game message handlers once a join succeeds. |
| `JoinResult` | class |  | 9 |  |
| `PlayerJoinLeaveData` | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| `ServerHandler` | class |  | 29 | [ServerHandler](../networking/server-handler.md): There's one per running server. |
| `ServerHandler.BootupStep` | delegate |  | 0 |  |
| `ServerHandler.ConnectionStep` | delegate |  | 0 |  |
| `ServerJoinLock` | struct |  | 5 | [Server lifecycle](../networking/server-lifecycle.md) |
| `ServerLifetimePipeline` | static class |  | 6 | [Server lifecycle](../networking/server-lifecycle.md): Opens the server socket and makes the handler. `GetServerRegion()`, `GetServerFleet()`. |
| `ServerLockCollection` | class | `IEnumerable<ServerJoinLock>`, `IEnumerable` | 4 | [Server lifecycle](../networking/server-lifecycle.md) |
| `ServerPlayerConnectionHandlerOld` | class |  | 6 |  |
| `ServerPlayerConnectionHandlerOld.ApiServerJoinResult` | struct |  | 2 |  |

## Alta.Networking.Voice

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `VoiceChatMouthController` | class | `MonoBehaviour` | 0 |  |

## Alta.Profiling.Networking

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ConnectionSimulatorConfiguration` | class |  | 5 |  |
| `DuplicateKeyComparer<TKey>` | internal class | `IComparer<TKey>` | 1 |  |
| `EntityMessageStatistics` | class | `IndexedStatisticList<EntityMessageTypeStatistic, EntityMessageType>` | 1 |  |
| `EntityMessageTypeStatistic` | class | `NetworkingStatistic` | 3 |  |
| `EntityStatistic` | class | `NetworkingStatistic` | 10 |  |
| `EntityStatistics` | class | `NetworkingStatisticsListNonSerialized<EntityStatistic>` | 7 |  |
| `IndexedStatisticList<TStatistic, TStatType>` | abstract class | `NetworkingStatisticsList<TStatistic>` | 0 |  |
| `MessageStatistics` | class | `NetworkingStatisticsList<MessageTypeStatistic, KeyValuePair<MessageType, MessageTypeStatistic>>` | 1 |  |
| `MessageTypeStatistic` | class | `NetworkingStatistic` | 2 |  |
| `SerializedBehaviourStatistic` | class | `NetworkingStatistic` | 3 |  |
| `SerializedBehaviourStatistics` | class | `IndexedStatisticList<SerializedBehaviourStatistic, string>` | 1 |  |

## Alta.Streaming

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IForcedPresenceOnServer` | interface |  | 0 |  |
| `IForcePresenceOnAndroidClient` | interface |  | 0 |  |
| `ScriptAssignedStaticBatchingMarker` | class | `MonoBehaviour`, `IForcePresenceOnAndroidClient` | 0 |  |

## Alta.Voice

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IVivoxMutedPlayerStore` | internal interface |  | 3 |  |
| `IVivoxVoiceUpdatable` | interface |  | 1 |  |
| `IVoiceChat` | interface |  | 4 |  |
| `VivoxChannel` | class |  | 5 |  |
| `VivoxClient` | class |  | 27 |  |
| `VivoxConfiguration` | class |  | 6 |  |
| `VivoxManager` | class | `SingletonBehaviour<VivoxManager>` | 5 |  |
| `VivoxPlayerPrefsMutedPlayerStore` | internal class | `IVivoxMutedPlayerStore` | 3 |  |
| `VivoxSession` | class |  | 12 |  |
| `VivoxText` | class |  | 4 |  |
| `VivoxUtility` | static class |  | 7 | [Startup and app state](../console-and-utilities/startup-and-app-state.md) |
| `VivoxVoice` | class | `IVivoxVoiceUpdatable` | 3 |  |
| `VoiceChat` | class | `IVoiceChat` | 5 | [Connection messages](../networking/messages.md) |
| `VoiceChatScope` | enum |  | 3 |  |

## Alta.WebServer

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaConsoleModule` | class | `WebModuleBase` | 2 | [Remote console](../console-and-utilities/remote-console.md): the game's web server, path `/console` |
| `AltaFolderModule` | class | `WebModuleBase`, `IDisposable` | 4 | [Remote console](../console-and-utilities/remote-console.md) |
| `OutputFolderModule` | class | `WebModuleBase`, `IDisposable` | 3 | [Remote console](../console-and-utilities/remote-console.md) |
| `WebServerThread` | class | `IDisposable` | 4 |  |

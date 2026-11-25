---
title: Networking and servers
description: "Types in Alta.Networking and the other server, streaming and voice namespaces of Root.Township."
sidebar_position: 2
---

# Networking and servers

Types in Alta.Networking and the other server, streaming and voice namespaces of Root.Township. 201 types, 31 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Meta.Servers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ServersManager`](/game-api/types/alta-networking/serversmanager) | class | `LoggedInTool` | 1 |  |

## Alta.Networking

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccumulativeAverageCount`](/game-api/types/alta-networking/accumulativeaveragecount) | class |  | 5 | A counter that keeps a running average of how many times something happened per period. Used for networking stats such as per-type serialize counts. |
| [`AccumulativeAverageNumber`](/game-api/types/alta-networking/accumulativeaveragenumber) | class |  | 5 |  |
| [`BaseSync`](/game-api/types/alta-networking/basesync) | abstract class |  | 1 | Base of the `MethodSync` family. Registers a handler for one entity message type and sends that message to everyone in the entity's chunks. |
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
| [`EntitySerializer`](/game-api/types/alta-networking/entityserializer) | class |  | 19 | Writes and reads an entity's streamed state: the combined bits of all its `INetworkSerialized` behaviours. The side that owns the state writes it when something changed and resends it a limited number of times. Get it from `NetworkEntity.Serializer`. |
| [`EntitySpawnedHandler`](/game-api/types/alta-networking/entityspawnedhandler) | delegate |  | 0 |  |
| [`EntityStreamerData`](/game-api/types/alta-networking/entitystreamerdata) | class |  | 3 |  |
| [`EntitySyncMessage`](/game-api/types/alta-networking/entitysyncmessage) | static class |  | 2 |  |
| [`ExampleBehaviour`](/game-api/types/alta-networking/examplebehaviour) | class |  | 0 |  |
| [`FakeSocket`](/game-api/types/alta-networking/fakesocket) | class | `ISocket`, `IDisposable` | 20 | A do-nothing socket for running without a network. Sends report success and go nowhere; most other calls log an error. |
| [`GeneralGameEvents`](/game-api/types/alta-networking/generalgameevents) | static class |  | 6 |  |
| [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour) | abstract class | `NetworkEntityBehaviour` | 1 | Base for an entity behaviour that builds its content procedurally when it first spawns on the server, rather than loading it. |
| [`IChunkedEntity`](/game-api/types/alta-networking/ichunkedentity) | interface |  | 2 |  |
| [`ICustomTypeReplace`](/game-api/types/alta-networking/icustomtypereplace) | interface | `IEntityReplaceHandler` | 1 |  |
| [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler) | interface |  | 2 | A component that carries its state over when its entity is replaced by another (for example an item turning into its cooked version). |
| [`IEntitySerialized`](/game-api/types/alta-networking/ientityserialized) | interface |  | 1 |  |
| [`INetworkEntity`](/game-api/types/alta-networking/inetworkentity) | interface |  | 13 | The core of a networked entity as seen by the networking code. `NetworkEntity` implements it. |
| [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour) | interface |  | 5 | Implement on a component of a `NetworkEntity` prefab to get the entity's network lifecycle calls (initialise, server spawn, player connect and disconnect). |
| [`INetworkScene`](/game-api/types/alta-networking/inetworkscene) | interface |  | 15 | The networked scene: the spawner, the special chunks and a few server settings everyone can read. `NetworkSceneManager.Current` is the one in use. |
| [`INetworkSceneInternal`](/game-api/types/alta-networking/inetworksceneinternal) | interface | `INetworkScene`, `IEntityManager` | 8 | Internal side of the network scene used by the networking code: connections, the scene serializer and forced entity registration. `NetworkScene` implements it; get it from `NetworkSceneManager.CurrentInternal`. |
| [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized) | interface |  | 5 | Implement on a component of a `NetworkEntity` to have its state sent by the entity's serializer on each sync. The owning side writes, others read. |
| [`InternalMessage`](/game-api/types/alta-networking/internalmessage) | static class |  | 3 |  |
| [`IPacketReceiver`](/game-api/types/alta-networking/ipacketreceiver) | interface |  | 1 |  |
| [`ISerializeChildren`](/game-api/types/alta-networking/iserializechildren) | interface |  | 7 | Passed to `ISavable` load and save methods so a component can save and restore the child prefabs spawned under its entity. |
| [`ISocket`](/game-api/types/alta-networking/isocket) | interface | `IDisposable` | 17 | The game's network socket: owns the list of `Connection`s and sends messages over the transport. The live one is `Socket.Current` (a `FakeSocket` when offline); on a server it holds one connection per player. |
| [`ISync`](/game-api/types/alta-networking/isync) | interface |  | 8 | Fluent helper for one entity message type, with separate server and client read and write methods. Made by `SyncFactory.Create`; only `ExampleBehaviour` uses it in this build. The server and client versions ignore the other side's methods. |
| [`JoinedServerInfo`](/game-api/types/alta-networking/joinedserverinfo) | class |  | 9 | [Joining a server](../networking/joining.md), [Server settings](../networking/server-settings.md): The server you're on: `static Current`, `Identifier`, `Name`, `ConnectionInfo`, `IsLocalServer` (id `-1`). Set on the client at the first acceptance. |
| [`MessageType`](/game-api/types/alta-networking/messagetype) | enum |  | 23 | [Connection messages](../networking/messages.md#messagetype): Free below 32: 3, 5, 8, 14, 16, 19, 27, 31. |
| [`MethodSync`](/game-api/types/alta-networking/methodsync) | class | `Sync` | 2 | [Entity sync](../networking/entity-sync.md#methodsync-and-friends): These wrap a type and a handler, register the handler on the entity in their constructor, and give you `SendToChunks` and `SendToPlayer`. All in `Alta.Networking`: |
| [`MethodSyncClass<T>`](/game-api/types/alta-networking/methodsyncclass-t) | class | `Sync<T>` | 2 | An entity network method whose handler gets a class instance to read into or write from, as well as the stream. It can make a fresh instance when reading. |
| [`MethodSyncStruct<T>`](/game-api/types/alta-networking/methodsyncstruct-t) | class | `Sync<T>` | 2 | A `Sync` for struct values that hands the read or write to a method you pass in. Optionally resets the value to a new struct before each read. |
| [`ModifiableStaticEvent`](/game-api/types/alta-networking/modifiablestaticevent) | class | `AltaEvent<ModifiableStaticObject, ModifiableStaticUnityEvent>` | 0 |  |
| [`ModifiableStaticManager`](/game-api/types/alta-networking/modifiablestaticmanager) | class | `NetworkEntityBehaviour`, `ISavable<ModifiableStaticManagerSaveData>`, `ISavableSave<ModifiableStaticManagerSaveData>`, +1 more | 11 | Tracks which static (baked) scene objects have been modified, such as buildings finished by a `RepairBox`, by hash. A single instance on the server saves and syncs the map to every client. |
| [`ModifiableStaticManagerSaveData`](/game-api/types/alta-networking/modifiablestaticmanagersavedata) | internal class | `NewSaveData<ModifiableStaticManager, ModifiableStaticManagerSaveData>` | 1 |  |
| [`ModifiableStaticObject`](/game-api/types/alta-networking/modifiablestaticobject) | class | `MonoBehaviour`, `IChangeWithChunking`, `IIgnoreForStaticFlatten`, +2 more | 5 | Part of the static world that can be swapped between an original and a modified look (a cleared rock, opened passage and so on). Its state comes from `ModifiableStaticManager` by hash. |
| [`ModifiableStaticUnityEvent`](/game-api/types/alta-networking/modifiablestaticunityevent) | class | `UnityEvent<ModifiableStaticObject>` | 0 |  |
| [`ModificationArguments`](/game-api/types/alta-networking/modificationarguments) | struct |  | 4 |  |
| [`MoveMessage`](/game-api/types/alta-networking/movemessage) | static class |  | 2 |  |
| [`NetworkAxisPosition`](/game-api/types/alta-networking/networkaxisposition) | class | `NetworkAxisValue` | 0 |  |
| [`NetworkAxisRotation`](/game-api/types/alta-networking/networkaxisrotation) | class | `NetworkAxisValue` | 1 |  |
| [`NetworkAxisValue`](/game-api/types/alta-networking/networkaxisvalue) | abstract class | `NetworkEntityBehaviour`, `INetworkSerialized` | 7 | Base for a networked value along one axis (a slider, lever or hinge position). The server sends it compressed in a range; clients lerp to it, or snap when it's far off. |
| [`NetworkColliderGroup`](/game-api/types/alta-networking/networkcollidergroup) | class | `ColliderGroup`, `INetworkEntityBehaviour` | 6 |  |
| [`NetworkEntity`](/game-api/types/alta-networking/networkentity) | class | `MonoBehaviour`, `IChunkedEntity`, `IEntitySerialized`, +1 more | 70 | [NetworkEntity](../world/network-entity.md): Runs on server and clients. |
| [`NetworkEntity.SyncPriorityModifiers`](/game-api/types/alta-networking/networkentity-syncprioritymodifiers) | enum |  | 1 |  |
| [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour) | abstract class | `MonoBehaviour`, `INetworkEntityBehaviour` | 5 | [Entity sync](../networking/entity-sync.md#networkentitybehaviour): The base class for networked components. `Entity` gets the `NetworkEntity`. Overridable: |
| [`NetworkEntityComponentController`](/game-api/types/alta-networking/networkentitycomponentcontroller) | class | `MonoBehaviour`, `IInitializeAsLocalPlayer`, `IInitializeAsRemotePlayer` | 0 |  |
| [`NetworkEntityHandler`](/game-api/types/alta-networking/networkentityhandler) | delegate |  | 0 | Callback that takes a `NetworkEntity`. Used by events such as `Cookable.SwappedToCookedVersion` and an entity's `InitializationFinished`. |
| [`NetworkEntityLink`](/game-api/types/alta-networking/networkentitylink) | class |  | 21 | One slot in the entity manager's fixed table of 100,000 entity identifiers. On the server, slots are also chained into linked lists of empty, full and serialized slots so free identifiers and synced entities can be walked quickly. |
| [`NetworkEntityParent`](/game-api/types/alta-networking/networkentityparent) | class | `MonoBehaviour` | 4 | Base of `NetworkPrefab` and `NetworkScene`. Holds the list of child network entities embedded in it, and gives each an `EmbeddedId` equal to its index. |
| [`NetworkGravity`](/game-api/types/alta-networking/networkgravity) | class | `NetworkEntityBehaviour` | 5 |  |
| [`NetworkHash128`](/game-api/types/alta-networking/networkhash128) | struct |  | 20 | A 128-bit ID stored as 16 bytes, written and read as a 32 character hex string. |
| [`NetworkingSettings`](/game-api/types/alta-networking/networkingsettings) | class | `GlobalSettings<NetworkingSettings>` | 13 | Global networking settings: transport (KCP) settings, channels and send and receive limits. |
| [`NetworkingSettings.Create`](/game-api/types/alta-networking/networkingsettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<NetworkingSettings>` | 0 |  |
| [`NetworkManager`](/game-api/types/alta-networking/networkmanager) | static class |  | 21 | [Sockets and connections](../networking/connections.md#networkmanager), [Update modules](../console-and-utilities/update-modules.md) |
| [`NetworkPrefab`](/game-api/types/alta-networking/networkprefab) | class | `NetworkEntityParent`, `INetworkEntityBehaviour`, `ISerializeChildren` | 25 | [Prefabs and prefab hashes](../world/prefabs.md#networkprefab), [Arguments and results](../console-and-utilities/arguments-and-results.md): A `MonoBehaviour` next to the prefab's `NetworkEntity`. |
| [`NetworkPrefab.ChildPrefab`](/game-api/types/alta-networking/networkprefab-childprefab) | class |  | 3 |  |
| [`NetworkPrefabChildEventHandler`](/game-api/types/alta-networking/networkprefabchildeventhandler) | delegate |  | 0 |  |
| [`NetworkPrefabConverter`](/game-api/types/alta-networking/networkprefabconverter) | class | `TypeConverter` | 2 |  |
| [`NetworkPrefabEventHandler`](/game-api/types/alta-networking/networkprefabeventhandler) | delegate |  | 0 |  |
| [`NetworkRigidbody`](/game-api/types/alta-networking/networkrigidbody) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `ISavableFull<NetworkRigidbodySaveData>`, +6 more | 21 | Syncs a physics object's position, rotation, velocity, kinematic and sleep state from the server to clients, and saves them. On clients it eases the local rigidbody towards the server's values and sleeps it when updates stop. On almost every physics prefab. |
| [`NetworkRigidbodySaveData`](/game-api/types/alta-networking/networkrigidbodysavedata) | internal class | `NewSaveData<NetworkRigidbody, NetworkRigidbodySaveData>` | 6 |  |
| [`NetworkRotation`](/game-api/types/alta-networking/networkrotation) | class | `NetworkEntityBehaviour` | 3 |  |
| [`NetworkScene`](/game-api/types/alta-networking/networkscene) | class | `NetworkEntityParent`, `INetworkSceneInternal`, `INetworkScene`, +1 more | 22 | The networked scene: holds the entity manager, global and void chunks, the spawner and the connections, and sends entity sync each frame. One per loaded scene, reached through `NetworkSceneManager.Current`. |
| [`NetworkSerializedProfiler`](/game-api/types/alta-networking/networkserializedprofiler) | static class |  | 3 |  |
| [`NetworkTransform`](/game-api/types/alta-networking/networktransform) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IInitializeAsLocalPlayer` | 8 | Syncs a transform's local position, rotation and optional scale from the authoritative side. Remote copies lerp toward it each fixed update, or snap when far off. |
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
| [`ReplaceAvoidFlags`](/game-api/types/alta-networking/replaceavoidflags) | enum |  | 8 | Flags for what to leave alone when one entity replaces another (for example `CraftingPart` and `Fire` check them): position, relation, internal state, charge, stats, health or chunk. |
| [`RequestJoinMessage`](/game-api/types/alta-networking/requestjoinmessage) | internal class |  | 8 |  |
| [`RequestServerDiagnosticsMessage`](/game-api/types/alta-networking/requestserverdiagnosticsmessage) | static class |  | 2 |  |
| [`SceneEntityMessage`](/game-api/types/alta-networking/sceneentitymessage) | static class |  | 4 |  |
| [`SceneSerializationMessage`](/game-api/types/alta-networking/sceneserializationmessage) | class |  | 1 |  |
| [`SerializeConnectionMethod`](/game-api/types/alta-networking/serializeconnectionmethod) | delegate |  | 0 | A method that writes (or reads) a message body for one connection on a stream. Passed to `Connection` and `OutgoingPacketManager` send methods. |
| [`SerializedEntityHandler`](/game-api/types/alta-networking/serializedentityhandler) | delegate |  | 0 |  |
| [`SerializeMethod`](/game-api/types/alta-networking/serializemethod) | delegate |  | 0 | Handler for a network message: gets the sending or receiving player and the stream, and both reads and writes the message with the same calls. The generic version also gets a typed argument. |
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

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AnimatedBool`](/game-api/types/alta-networking/animatedbool) | class | `AnimatedValue<bool>` | 5 | A synced bool parameter on a `NetworkAnimator`. Setting it updates the Unity animator and marks it to be sent to clients for the next few syncs. |
| [`AnimatedBoolAccess`](/game-api/types/alta-networking/animatedboolaccess) | class | `MonoBehaviour` | 1 |  |
| [`AnimatedFloat`](/game-api/types/alta-networking/animatedfloat) | class | `AnimatedValue<float>` | 3 | A synced float parameter on a `NetworkAnimator`, sent compressed within a range and precision. |
| [`AnimatedFloatLerp`](/game-api/types/alta-networking/animatedfloatlerp) | class | `AnimatedFloat` | 3 |  |
| [`AnimatedInt`](/game-api/types/alta-networking/animatedint) | class | `AnimatedValue<int>` | 2 |  |
| [`AnimatedLayerWeight`](/game-api/types/alta-networking/animatedlayerweight) | class | `AnimatedValue<float>` | 2 |  |
| [`AnimatedLayerWeightLerp`](/game-api/types/alta-networking/animatedlayerweightlerp) | class | `AnimatedLayerWeight` | 6 |  |
| [`AnimatedTrigger`](/game-api/types/alta-networking/animatedtrigger) | class | `AnimatedValue<bool>` | 5 |  |
| [`AnimatedValue<T>`](/game-api/types/alta-networking/animatedvalue-t) | abstract class | `INameable` | 11 | Base for one synced animator parameter (bool, float, trigger) on a `NetworkAnimator`. A change is resent in the next several syncs so it gets through. Get one from the animator with `GetBool`, `GetFloat` or `GetTrigger`. |
| [`AnimationBasedSound`](/game-api/types/alta-networking/animationbasedsound) | class | `MonoBehaviour` | 1 |  |
| [`AnimatorBoolAccess`](/game-api/types/alta-networking/animatorboolaccess) | class | `MonoBehaviour` | 1 |  |
| [`INameable`](/game-api/types/alta-networking/inameable) | interface |  | 1 |  |
| [`NetworkAnimator`](/game-api/types/alta-networking/networkanimator) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IBuildRendererPostBake`, +1 more | 16 | Syncs chosen Animator parameters (floats, ints, bools, triggers, layer weights) from the server to clients as streamed state, and sends the current animation states to joining players. Set values through the `Get` methods' objects on the server. |
| [`NetworkAnimator.FloatParameterType`](/game-api/types/alta-networking/networkanimator-floatparametertype) | enum |  | 4 |  |

## Alta.Networking.Internal

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ClientSerializedEnumerable`](/game-api/types/alta-networking/clientserializedenumerable) | class | `SerializedEnumerable` | 3 |  |
| [`ConnectionReceiver`](/game-api/types/alta-networking/connectionreceiver) | abstract class | `IDisposable` | 3 | Takes received packets for one connection channel and processes them now or queues them. The channel picks normal, timed or counted; servers always use normal. |
| [`ConnectionReceiverType`](/game-api/types/alta-networking/connectionreceivertype) | enum |  | 3 |  |
| [`ConnectionReceiveSettings`](/game-api/types/alta-networking/connectionreceivesettings) | class | `GlobalSettings<ConnectionReceiveSettings>` | 6 | Global settings for how a client spreads processing of received reliable messages over frames. Servers always process straight away. |
| [`ConnectionReceiveSettings.Create`](/game-api/types/alta-networking/connectionreceivesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Networking.ScriptableObject<ConnectionReceiveSettings>` | 0 |  |
| [`CountedQueuedConnectionReceiver`](/game-api/types/alta-networking/countedqueuedconnectionreceiver) | class | `QueuedConnectionReceiver` | 1 |  |
| [`EntityManager`](/game-api/types/alta-networking/entitymanager) | class | `ILinkProvider`, `IEntityManager`, `IDisposable` | 19 | [Finding entities](../world/finding-entities.md#every-entity-entitymanager): One per scene, in a private field of `NetworkScene`. |
| [`IEntityManager`](/game-api/types/alta-networking/ientitymanager) | interface |  | 2 | Part of the network scene that tracks which entities have serialized (streamed) state. `NetworkScene` implements it. |
| [`ILinkProvider`](/game-api/types/alta-networking/ilinkprovider) | interface |  | 5 | Hands out and tracks network entity links (identifier slots). `EntityManager` is the main implementation; `LocalLinkProvider` is another. |
| [`MessageProcessor`](/game-api/types/alta-networking/messageprocessor) | static class |  | 2 |  |
| [`NormalConnectionReceiver`](/game-api/types/alta-networking/normalconnectionreceiver) | class | `ConnectionReceiver` | 3 |  |
| [`OutgoingPacketManager`](/game-api/types/alta-networking/outgoingpacketmanager) | class | `IDisposable` | 13 | Batches outgoing messages for one connection channel into packets and sends them. Reliable channels keep up to 64 unsent packets and disconnect the player when that fills up. Each `Connection` has one per channel. |
| [`Packet`](/game-api/types/alta-networking/packet) | class |  | 8 | An outgoing packet buffer that several messages are written into, each with a 2-byte length, before it is sent on a connection. |
| [`PooledDataQueueItem`](/game-api/types/alta-networking/pooleddataqueueitem) | class |  | 3 |  |
| [`QueuedConnectionHelper`](/game-api/types/alta-networking/queuedconnectionhelper) | static class |  | 4 |  |
| [`QueuedConnectionReceiver`](/game-api/types/alta-networking/queuedconnectionreceiver) | abstract class | `ConnectionReceiver` | 5 | A connection receiver that can hold packets back and process them later, so incoming messages can be spread over frames. Subclasses decide when to queue. |
| [`SceneSerializer`](/game-api/types/alta-networking/sceneserializer) | class |  | 11 | Sends and reads the regular state updates of every `EntitySerializer` in a network scene, packing as many as fit into each `SceneSerialize` message. The server writes per connection. |
| [`SerializedEnumerable`](/game-api/types/alta-networking/serializedenumerable) | class | `IEnumerable<EntitySerializer>`, `IEnumerable`, `IEnumerator<EntitySerializer>`, +2 more | 7 | Walks the linked list of serialized entities from a start index, returning each entity's serializer. Used by `EntityManager`; skips placeholder links. |
| [`SerializingEntityHandler`](/game-api/types/alta-networking/serializingentityhandler) | delegate |  | 0 |  |
| [`TimedQueuedConnectionReceiver`](/game-api/types/alta-networking/timedqueuedconnectionreceiver) | class | `QueuedConnectionReceiver` | 2 |  |

## Alta.Networking.Scripts.Player

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IPlayer`](/game-api/types/alta-networking/iplayer) | interface | `INetworkEntity` | 25 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |

## Alta.Networking.Servers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ConnectToServerUtility`](/game-api/types/alta-networking/connecttoserverutility) | static class |  | 2 | [Joining a server](../networking/joining.md): Owns the client socket and the current pipeline. `StopCurrentConnectionAttempt()`. Registers the in-game message handlers once a join succeeds. |
| [`JoinResult`](/game-api/types/alta-networking/joinresult) | class |  | 9 | Client: the outcome of trying to join a server, with a player-facing message for each failure. |
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

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`VoiceChatMouthController`](/game-api/types/alta-networking/voicechatmouthcontroller) | class | `MonoBehaviour` | 0 |  |

## Alta.Profiling.Networking

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ConnectionSimulatorConfiguration`](/game-api/types/alta-networking/connectionsimulatorconfiguration) | class |  | 5 |  |
| [`DuplicateKeyComparer<TKey>`](/game-api/types/alta-networking/duplicatekeycomparer-tkey) | internal class | `IComparer<TKey>` | 1 |  |
| [`EntityMessageStatistics`](/game-api/types/alta-networking/entitymessagestatistics) | class | `IndexedStatisticList<EntityMessageTypeStatistic, EntityMessageType>` | 1 |  |
| [`EntityMessageTypeStatistic`](/game-api/types/alta-networking/entitymessagetypestatistic) | class | `NetworkingStatistic` | 3 |  |
| [`EntityStatistic`](/game-api/types/alta-networking/entitystatistic) | class | `NetworkingStatistic` | 10 | Network profiling stats for one entity: bytes sent, split by entity message type and by behaviour. Used by the networking profiler. |
| [`EntityStatistics`](/game-api/types/alta-networking/entitystatistics) | class | `NetworkingStatisticsListNonSerialized<EntityStatistic>` | 7 |  |
| [`IndexedStatisticList<TStatistic, TStatType>`](/game-api/types/alta-networking/indexedstatisticlist-tstatistic-tstattype) | abstract class | `NetworkingStatisticsList<TStatistic>` | 0 |  |
| [`MessageStatistics`](/game-api/types/alta-networking/messagestatistics) | class | `NetworkingStatisticsList<MessageTypeStatistic, KeyValuePair<MessageType, MessageTypeStatistic>>` | 1 |  |
| [`MessageTypeStatistic`](/game-api/types/alta-networking/messagetypestatistic) | class | `NetworkingStatistic` | 2 |  |
| [`SerializedBehaviourStatistic`](/game-api/types/alta-networking/serializedbehaviourstatistic) | class | `NetworkingStatistic` | 3 |  |
| [`SerializedBehaviourStatistics`](/game-api/types/alta-networking/serializedbehaviourstatistics) | class | `IndexedStatisticList<SerializedBehaviourStatistic, string>` | 1 |  |

## Alta.Streaming

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IForcedPresenceOnServer`](/game-api/types/alta-networking/iforcedpresenceonserver) | interface |  | 0 |  |
| [`IForcePresenceOnAndroidClient`](/game-api/types/alta-networking/iforcepresenceonandroidclient) | interface |  | 0 |  |
| [`ScriptAssignedStaticBatchingMarker`](/game-api/types/alta-networking/scriptassignedstaticbatchingmarker) | class | `MonoBehaviour`, `IForcePresenceOnAndroidClient` | 0 |  |

## Alta.Voice

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IVivoxMutedPlayerStore`](/game-api/types/alta-networking/ivivoxmutedplayerstore) | internal interface |  | 3 |  |
| [`IVivoxVoiceUpdatable`](/game-api/types/alta-networking/ivivoxvoiceupdatable) | interface |  | 1 |  |
| [`IVoiceChat`](/game-api/types/alta-networking/ivoicechat) | interface |  | 4 | The voice chat service, implemented by `VoiceChat`: who you can hear and per-player mutes. |
| [`VivoxChannel`](/game-api/types/alta-networking/vivoxchannel) | class |  | 5 |  |
| [`VivoxClient`](/game-api/types/alta-networking/vivoxclient) | class |  | 27 | Wrapper around the Vivox voice and text chat client: login, audio devices, channels and muting. Client only; one is made by `VivoxManager` and reached through `VivoxManager.Instance.Client`. |
| [`VivoxConfiguration`](/game-api/types/alta-networking/vivoxconfiguration) | class |  | 6 |  |
| [`VivoxManager`](/game-api/types/alta-networking/vivoxmanager) | class | `SingletonBehaviour<VivoxManager>` | 5 |  |
| [`VivoxPlayerPrefsMutedPlayerStore`](/game-api/types/alta-networking/vivoxplayerprefsmutedplayerstore) | internal class | `IVivoxMutedPlayerStore` | 3 |  |
| [`VivoxSession`](/game-api/types/alta-networking/vivoxsession) | class |  | 12 | One joined Vivox voice or text channel. Connects with a token from the API and pairs each participant with the matching in-game player. Client side. |
| [`VivoxText`](/game-api/types/alta-networking/vivoxtext) | class |  | 4 |  |
| [`VivoxUtility`](/game-api/types/alta-networking/vivoxutility) | static class |  | 7 | [Startup and app state](../console-and-utilities/startup-and-app-state.md) |
| [`VivoxVoice`](/game-api/types/alta-networking/vivoxvoice) | class | `IVivoxVoiceUpdatable` | 3 |  |
| [`VoiceChat`](/game-api/types/alta-networking/voicechat) | class | `IVoiceChat` | 5 | [Connection messages](../networking/messages.md) |
| [`VoiceChatScope`](/game-api/types/alta-networking/voicechatscope) | enum |  | 3 |  |

## Alta.WebServer

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaConsoleModule`](/game-api/types/alta-networking/altaconsolemodule) | class | `WebModuleBase` | 2 | [Remote console](../console-and-utilities/remote-console.md): the game's web server, path `/console` |
| [`AltaFolderModule`](/game-api/types/alta-networking/altafoldermodule) | class | `WebModuleBase`, `IDisposable` | 4 | [Remote console](../console-and-utilities/remote-console.md) |
| [`OutputFolderModule`](/game-api/types/alta-networking/outputfoldermodule) | class | `WebModuleBase`, `IDisposable` | 3 | [Remote console](../console-and-utilities/remote-console.md) |
| [`WebServerThread`](/game-api/types/alta-networking/webserverthread) | class | `IDisposable` | 4 |  |

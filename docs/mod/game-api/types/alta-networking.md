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
| [`ServersManager`](/mod/game-api/types/alta-networking/serversmanager) | class | `LoggedInTool` | 1 | Client meta tool that, on login, fetches the servers the player can control from the Alta API. Mostly a stub: the other handlers are empty. |

## Alta.Networking

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccumulativeAverageCount`](/mod/game-api/types/alta-networking/accumulativeaveragecount) | class |  | 5 | A counter that keeps a running average of how many times something happened per period. Used for networking stats such as per-type serialize counts. |
| [`AccumulativeAverageNumber`](/mod/game-api/types/alta-networking/accumulativeaveragenumber) | class |  | 5 | Profiling helper: adds up numbers over one period, then records the total into a running average. `EntitySerializer` uses two of these for prepare and serialization time. |
| [`BaseSync`](/mod/game-api/types/alta-networking/basesync) | abstract class |  | 1 | Base of the `MethodSync` family. Registers a handler for one entity message type and sends that message to everyone in the entity's chunks. |
| [`ChunksChanged`](/mod/game-api/types/alta-networking/chunkschanged) | delegate |  | 0 | Callback for a change of chunks: the chunks that were left and the chunk that was joined. |
| [`ClientOnly`](/mod/game-api/types/alta-networking/clientonly) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 0 | [Entity sync](../networking/entity-sync.md#clientonly): `Alta.Networking.ClientOnly` is a component that lists behaviours to switch off on a real server (renderers, audio, effects) and on everywhere else. It runs in `Awake`. |
| [`ClientPacketReceiver`](/mod/game-api/types/alta-networking/clientpacketreceiver) | class | `IPacketReceiver`, `IPacketProcessor` | 2 | The client's packet receiver: creates or approves the server connection when the transport approves it, and passes incoming packets to that connection. Created by `Socket` on the client. |
| [`ClientSpawnManager`](/mod/game-api/types/alta-networking/clientspawnmanager) | class | `SpawnManager` | 5 | [Spawning](../world/spawning.md) |
| [`ClientSync`](/mod/game-api/types/alta-networking/clientsync) | class | `BaseSync`, `ISync` | 8 | The client side `ISync` that `SyncFactory.Create` makes when not on the server. Only the client read and write handlers are kept; the server calls do nothing. |
| [`ConfirmJoinMessage`](/mod/game-api/types/alta-networking/confirmjoinmessage) | internal struct |  | 8 | Internal message the server sends back to a client's join request: allowed or not, whether prerequisites are running, a join result and an error text. Server writes, client reads. |
| [`Connection`](/mod/game-api/types/alta-networking/connection) | class | `IConnection` | 30 | [Sockets and connections](../networking/connections.md#connection): One per peer. On a server, a player's is `player.ConnectionToRemotePlayer`. |
| [`ConnectionChannel`](/mod/game-api/types/alta-networking/connectionchannel) | class | `ScriptableObject` | 7 | [Sockets and connections](../networking/connections.md#connectionchannel): The channels come from `GlobalSettings<NetworkingSettings>.Instance.Channels`; each connection has one outgoing queue per channel. |
| [`ConnectionChannel.Create`](/mod/game-api/types/alta-networking/connectionchannel-create) | class | `AltaMenuItemBase.Assets.Create.Township.Networking.ScriptableObject<ConnectionChannel>` | 0 | Editor menu item for creating a `ConnectionChannel` asset. |
| [`ConnectionEventHandler`](/mod/game-api/types/alta-networking/connectioneventhandler) | delegate |  | 0 | Handler for events about a network `Connection`, such as a player connecting or disconnecting. |
| [`ControlledWriteSync`](/mod/game-api/types/alta-networking/controlledwritesync) | class |  | 3 | An entity message channel where each send passes its own write method, unlike `MethodSync` which uses a fixed one. Registers the read handler when created. |
| [`DestroyableStaticObject`](/mod/game-api/types/alta-networking/destroyablestaticobject) | class | `ModifiableStaticObject` | 0 | [Static objects](../world/static-objects.md#destroyablestaticobject): `Alta.Networking.DestroyableStaticObject` derives from `ModifiableStaticObject` and adds health. On the server it listens to its `ImpactDetector`s. |
| [`DestroyMessage`](/mod/game-api/types/alta-networking/destroymessage) | static class |  | 2 | The network message that tells clients to destroy or unload an entity. Static fields hold one message's data between `Set` and `Serialize`. |
| [`EntityDespawnedHandler`](/mod/game-api/types/alta-networking/entitydespawnedhandler) | delegate |  | 0 | Handler for an entity being removed by the scene, with `isUnload` telling whether it was unloaded rather than destroyed. Used by `NetworkEntity.DestroyedByScene`. |
| [`EntityMessageHandler`](/mod/game-api/types/alta-networking/entitymessagehandler) | class |  | 7 | [Entity sync](../networking/entity-sync.md#entitymessagehandler): If an entity message arrives on a client before that entity has spawned there, the game keeps a copy and handles it when it spawns (`Spawner.WaitForSpawn`). |
| [`EntityMessageType`](/mod/game-api/types/alta-networking/entitymessagetype) | enum |  | 120 | [Entity sync](../networking/entity-sync.md#entitymessagetype): `Alta.Networking.EntityMessageType` is written as 8 bits, so 0 to 255. |
| [`EntitySerializationMessage`](/mod/game-api/types/alta-networking/entityserializationmessage) | static class |  | 2 | Network message that carries an entity's full serialized data (its `EntitySerializer`). |
| [`EntitySerializer`](/mod/game-api/types/alta-networking/entityserializer) | class |  | 19 | Writes and reads an entity's streamed state: the combined bits of all its `INetworkSerialized` behaviours. The side that owns the state writes it when something changed and resends it a limited number of times. Get it from `NetworkEntity.Serializer`. |
| [`EntitySpawnedHandler`](/mod/game-api/types/alta-networking/entityspawnedhandler) | delegate |  | 0 | Callback given a `NetworkEntity` once it has spawned. Used with `WaitForSpawn` to act on an entity as soon as it exists on the client. |
| [`EntityStreamerData`](/mod/game-api/types/alta-networking/entitystreamerdata) | class |  | 3 | An `EntitySerializer`'s last written state data for one entity. |
| [`EntitySyncMessage`](/mod/game-api/types/alta-networking/entitysyncmessage) | static class |  | 2 | Network message that syncs a scene entity's identifier, embedded id and, for prefabs, the identifiers of its embedded entities. On read the scene manager matches them up. |
| [`ExampleBehaviour`](/mod/game-api/types/alta-networking/examplebehaviour) | class |  | 0 | Example code showing how to set up syncs with `SyncFactory`. Not a component and not used by the game. |
| [`FakeSocket`](/mod/game-api/types/alta-networking/fakesocket) | class | `ISocket`, `IDisposable` | 20 | A do-nothing socket for running without a network. Sends report success and go nowhere; most other calls log an error. |
| [`GeneralGameEvents`](/mod/game-api/types/alta-networking/generalgameevents) | static class |  | 6 | Static events for when a client connects to a server and when a server starts or ends. Exceptions from handlers are logged, not thrown. |
| [`GeneratedNetworkEntityBehaviour`](/mod/game-api/types/alta-networking/generatednetworkentitybehaviour) | abstract class | `NetworkEntityBehaviour` | 1 | Base for an entity behaviour that builds its content procedurally when it first spawns on the server, rather than loading it. |
| [`IChunkedEntity`](/mod/game-api/types/alta-networking/ichunkedentity) | interface |  | 2 | What `Chunker` needs from the object it tracks. `NetworkEntity` is the only implementation. |
| [`ICustomTypeReplace`](/mod/game-api/types/alta-networking/icustomtypereplace) | interface | `IEntityReplaceHandler` | 1 | An `IEntityReplaceHandler` that names which component type to look for on the new entity when `NetworkEntity.ReplaceWith` runs, instead of its own type. |
| [`IEntityReplaceHandler`](/mod/game-api/types/alta-networking/ientityreplacehandler) | interface |  | 2 | A component that carries its state over when its entity is replaced by another (for example an item turning into its cooked version). |
| [`IEntitySerialized`](/mod/game-api/types/alta-networking/ientityserialized) | interface |  | 1 | Something that has an `EntitySerializer` for its full network data. Implemented by `NetworkEntity`. |
| [`INetworkEntity`](/mod/game-api/types/alta-networking/inetworkentity) | interface |  | 13 | The core of a networked entity as seen by the networking code. `NetworkEntity` implements it. |
| [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour) | interface |  | 5 | Implement on a component of a `NetworkEntity` prefab to get the entity's network lifecycle calls (initialise, server spawn, player connect and disconnect). |
| [`INetworkScene`](/mod/game-api/types/alta-networking/inetworkscene) | interface |  | 15 | The networked scene: the spawner, the special chunks and a few server settings everyone can read. `NetworkSceneManager.Current` is the one in use. |
| [`INetworkSceneInternal`](/mod/game-api/types/alta-networking/inetworksceneinternal) | interface | `INetworkScene`, `IEntityManager` | 8 | Internal side of the network scene used by the networking code: connections, the scene serializer and forced entity registration. `NetworkScene` implements it; get it from `NetworkSceneManager.CurrentInternal`. |
| [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized) | interface |  | 5 | Implement on a component of a `NetworkEntity` to have its state sent by the entity's serializer on each sync. The owning side writes, others read. |
| [`InternalMessage`](/mod/game-api/types/alta-networking/internalmessage) | static class |  | 3 | Network message for an entity's own message types (`EntityMessageType`), used by syncs to send data to an entity's handler on the other side. |
| [`IPacketReceiver`](/mod/game-api/types/alta-networking/ipacketreceiver) | interface |  | 1 | Something that pulls incoming packets off the transport each frame. `ServerPacketReceiver` and `ClientPacketReceiver` implement it, and `Socket` holds one. |
| [`ISerializeChildren`](/mod/game-api/types/alta-networking/iserializechildren) | interface |  | 7 | Passed to `ISavable` load and save methods so a component can save and restore the child prefabs spawned under its entity. |
| [`ISocket`](/mod/game-api/types/alta-networking/isocket) | interface | `IDisposable` | 17 | The game's network socket: owns the list of `Connection`s and sends messages over the transport. The live one is `Socket.Current` (a `FakeSocket` when offline); on a server it holds one connection per player. |
| [`ISync`](/mod/game-api/types/alta-networking/isync) | interface |  | 8 | Fluent helper for one entity message type, with separate server and client read and write methods. Made by `SyncFactory.Create`; only `ExampleBehaviour` uses it in this build. The server and client versions ignore the other side's methods. |
| [`JoinedServerInfo`](/mod/game-api/types/alta-networking/joinedserverinfo) | class |  | 9 | [Joining a server](../networking/joining.md), [Server settings](../networking/server-settings.md): The server you're on: `static Current`, `Identifier`, `Name`, `ConnectionInfo`, `IsLocalServer` (id `-1`). Set on the client at the first acceptance. |
| [`MessageType`](/mod/game-api/types/alta-networking/messagetype) | enum |  | 23 | [Connection messages](../networking/messages.md#messagetype): Free below 32: 3, 5, 8, 14, 16, 19, 27, 31. |
| [`MethodSync`](/mod/game-api/types/alta-networking/methodsync) | class | `Sync` | 2 | [Entity sync](../networking/entity-sync.md#methodsync-and-friends): These wrap a type and a handler, register the handler on the entity in their constructor, and give you `SendToChunks` and `SendToPlayer`. All in `Alta.Networking`: |
| [`MethodSyncClass<T>`](/mod/game-api/types/alta-networking/methodsyncclass-t) | class | `Sync<T>` | 2 | An entity network method whose handler gets a class instance to read into or write from, as well as the stream. It can make a fresh instance when reading. |
| [`MethodSyncStruct<T>`](/mod/game-api/types/alta-networking/methodsyncstruct-t) | class | `Sync<T>` | 2 | A `Sync` for struct values that hands the read or write to a method you pass in. Optionally resets the value to a new struct before each read. |
| [`ModifiableStaticEvent`](/mod/game-api/types/alta-networking/modifiablestaticevent) | class | `AltaEvent<ModifiableStaticObject, ModifiableStaticUnityEvent>` | 0 | A serializable event that passes a `ModifiableStaticObject`, wired up in the inspector. |
| [`ModifiableStaticManager`](/mod/game-api/types/alta-networking/modifiablestaticmanager) | class | `NetworkEntityBehaviour`, `ISavable<ModifiableStaticManagerSaveData>`, `ISavableSave<ModifiableStaticManagerSaveData>`, +1 more | 11 | Tracks which static (baked) scene objects have been modified, such as buildings finished by a `RepairBox`, by hash. A single instance on the server saves and syncs the map to every client. |
| [`ModifiableStaticManagerSaveData`](/mod/game-api/types/alta-networking/modifiablestaticmanagersavedata) | internal class | `NewSaveData<ModifiableStaticManager, ModifiableStaticManagerSaveData>` | 1 | Save data for `ModifiableStaticManager`: which static objects (by hash) are modified. |
| [`ModifiableStaticObject`](/mod/game-api/types/alta-networking/modifiablestaticobject) | class | `MonoBehaviour`, `IChangeWithChunking`, `IIgnoreForStaticFlatten`, +2 more | 5 | Part of the static world that can be swapped between an original and a modified look (a cleared rock, opened passage and so on). Its state comes from `ModifiableStaticManager` by hash. |
| [`ModifiableStaticUnityEvent`](/mod/game-api/types/alta-networking/modifiablestaticunityevent) | class | `UnityEvent<ModifiableStaticObject>` | 0 | A serializable UnityEvent that passes a `ModifiableStaticObject`. |
| [`ModificationArguments`](/mod/game-api/types/alta-networking/modificationarguments) | struct |  | 4 | Message payload `ModifiableStaticManager` sends to chunks when a static scene object's modified state changes: the object's hash and whether it is modified. |
| [`MoveMessage`](/mod/game-api/types/alta-networking/movemessage) | static class |  | 2 | Network message that sets an entity's position and rotation on clients. |
| [`NetworkAxisPosition`](/mod/game-api/types/alta-networking/networkaxisposition) | class | `NetworkAxisValue` | 0 | A `NetworkAxisValue` that syncs a transform's local position along one axis, between a minimum and maximum. |
| [`NetworkAxisRotation`](/mod/game-api/types/alta-networking/networkaxisrotation) | class | `NetworkAxisValue` | 1 | A `NetworkAxisValue` that syncs a rotation around one local axis, in degrees from 0 to 360, with wrap-around. |
| [`NetworkAxisValue`](/mod/game-api/types/alta-networking/networkaxisvalue) | abstract class | `NetworkEntityBehaviour`, `INetworkSerialized` | 7 | Base for a networked value along one axis (a slider, lever or hinge position). The server sends it compressed in a range; clients lerp to it, or snap when it's far off. |
| [`NetworkColliderGroup`](/mod/game-api/types/alta-networking/networkcollidergroup) | class | `ColliderGroup`, `INetworkEntityBehaviour` | 6 | A `ColliderGroup` on a network entity that syncs whether its colliders are on and which other entities it ignores collision with. The server sets them; clients follow. |
| [`NetworkEntity`](/mod/game-api/types/alta-networking/networkentity) | class | `MonoBehaviour`, `IChunkedEntity`, `IEntitySerialized`, +1 more | 70 | [NetworkEntity](../world/network-entity.md): Runs on server and clients. |
| [`NetworkEntity.SyncPriorityModifiers`](/mod/game-api/types/alta-networking/networkentity-syncprioritymodifiers) | enum |  | 1 | Flags on `NetworkEntity.CurrentPriorityModifiers` that change sync priority. `DockedOrInteracted` is set while a pickup is docked or an interactable is in use. |
| [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour) | abstract class | `MonoBehaviour`, `INetworkEntityBehaviour` | 5 | [Entity sync](../networking/entity-sync.md#networkentitybehaviour): The base class for networked components. `Entity` gets the `NetworkEntity`. Overridable: |
| [`NetworkEntityComponentController`](/mod/game-api/types/alta-networking/networkentitycomponentcontroller) | class | `MonoBehaviour`, `IInitializeAsLocalPlayer`, `IInitializeAsRemotePlayer` | 0 | Turns lists of components on or off depending on whether this is the server or a client, and whether the player entity is the local player or a remote one. |
| [`NetworkEntityHandler`](/mod/game-api/types/alta-networking/networkentityhandler) | delegate |  | 0 | Callback that takes a `NetworkEntity`. Used by events such as `Cookable.SwappedToCookedVersion` and an entity's `InitializationFinished`. |
| [`NetworkEntityLink`](/mod/game-api/types/alta-networking/networkentitylink) | class |  | 21 | One slot in the entity manager's fixed table of 100,000 entity identifiers. On the server, slots are also chained into linked lists of empty, full and serialized slots so free identifiers and synced entities can be walked quickly. |
| [`NetworkEntityParent`](/mod/game-api/types/alta-networking/networkentityparent) | class | `MonoBehaviour` | 4 | Base of `NetworkPrefab` and `NetworkScene`. Holds the list of child network entities embedded in it, and gives each an `EmbeddedId` equal to its index. |
| [`NetworkGravity`](/mod/game-api/types/alta-networking/networkgravity) | class | `NetworkEntityBehaviour` | 5 | Replaces Unity gravity on a rigidbody with a `ConstantForce`, so gravity and drag can be changed per object and synced to clients. |
| [`NetworkHash128`](/mod/game-api/types/alta-networking/networkhash128) | struct |  | 20 | A 128-bit ID stored as 16 bytes, written and read as a 32 character hex string. |
| [`NetworkingSettings`](/mod/game-api/types/alta-networking/networkingsettings) | class | `GlobalSettings<NetworkingSettings>` | 13 | Global networking settings: transport (KCP) settings, channels and send and receive limits. |
| [`NetworkingSettings.Create`](/mod/game-api/types/alta-networking/networkingsettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<NetworkingSettings>` | 0 | Editor menu item for creating a `NetworkingSettings` asset. |
| [`NetworkManager`](/mod/game-api/types/alta-networking/networkmanager) | static class |  | 21 | [Sockets and connections](../networking/connections.md#networkmanager), [Update modules](../console-and-utilities/update-modules.md) |
| [`NetworkPrefab`](/mod/game-api/types/alta-networking/networkprefab) | class | `NetworkEntityParent`, `INetworkEntityBehaviour`, `ISerializeChildren` | 25 | [Prefabs and prefab hashes](../world/prefabs.md#networkprefab), [Arguments and results](../console-and-utilities/arguments-and-results.md): A `MonoBehaviour` next to the prefab's `NetworkEntity`. |
| [`NetworkPrefab.ChildPrefab`](/mod/game-api/types/alta-networking/networkprefab-childprefab) | class |  | 3 | Pairs a child network prefab with the entity it sits under, for saving and spawning nested prefabs. |
| [`NetworkPrefabChildEventHandler`](/mod/game-api/types/alta-networking/networkprefabchildeventhandler) | delegate |  | 0 | Callback for when a saved child of a prefab has spawned, given the child prefab, its parent entity and the child index. Used with `ISerializeChildren.GetSpawnedChildren`. |
| [`NetworkPrefabConverter`](/mod/game-api/types/alta-networking/networkprefabconverter) | class | `TypeConverter` | 2 | Type converter that turns a string (a prefab hash or name) into a `NetworkPrefab`, for console command arguments. |
| [`NetworkPrefabEventHandler`](/mod/game-api/types/alta-networking/networkprefabeventhandler) | delegate |  | 0 | Callback with a `NetworkPrefab`, used by `NetworkPrefab.PreDestroyed`. |
| [`NetworkRigidbody`](/mod/game-api/types/alta-networking/networkrigidbody) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `ISavableFull<NetworkRigidbodySaveData>`, +6 more | 21 | Syncs a physics object's position, rotation, velocity, kinematic and sleep state from the server to clients, and saves them. On clients it eases the local rigidbody towards the server's values and sleeps it when updates stop. On almost every physics prefab. |
| [`NetworkRigidbodySaveData`](/mod/game-api/types/alta-networking/networkrigidbodysavedata) | internal class | `NewSaveData<NetworkRigidbody, NetworkRigidbodySaveData>` | 6 | Save data for a `NetworkRigidbody`: its transform, motion and sleep state. |
| [`NetworkRotation`](/mod/game-api/types/alta-networking/networkrotation) | class | `NetworkEntityBehaviour` | 3 | Syncs an interactable's local rotation around one axis (for example a wheel or handle a player turns). The turning player's client sends the angle when the interaction ends; others lerp to it. |
| [`NetworkScene`](/mod/game-api/types/alta-networking/networkscene) | class | `NetworkEntityParent`, `INetworkSceneInternal`, `INetworkScene`, +1 more | 22 | The networked scene: holds the entity manager, global and void chunks, the spawner and the connections, and sends entity sync each frame. One per loaded scene, reached through `NetworkSceneManager.Current`. |
| [`NetworkSerializedProfiler`](/mod/game-api/types/alta-networking/networkserializedprofiler) | static class |  | 3 | Collects the shared serialize timers of every `INetworkSerialized` type marked with `ProfileNetworkSerializedAttribute`, for performance stats. |
| [`NetworkTransform`](/mod/game-api/types/alta-networking/networktransform) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IInitializeAsLocalPlayer` | 8 | Syncs a transform's local position, rotation and optional scale from the authoritative side. Remote copies lerp toward it each fixed update, or snap when far off. |
| [`PacketSentHandler`](/mod/game-api/types/alta-networking/packetsenthandler) | delegate |  | 0 | Callback for `Connection.PacketSent`, with the connection, the bytes sent, their count, the channel and the transport result. |
| [`ParentChangedHandler`](/mod/game-api/types/alta-networking/parentchangedhandler) | delegate |  | 0 | Callback for when a network entity's parent changes, with the entity, its old parent and its new parent. |
| [`PhysicsSerializationSettings`](/mod/game-api/types/alta-networking/physicsserializationsettings) | static class |  | 10 | Limits and precision used when packing physics values (velocity, angular velocity, scale) into network messages. |
| [`PingMessage`](/mod/game-api/types/alta-networking/pingmessage) | static class |  | 6 | The ping network message. The client sends a timestamp, the server echoes it back, and the client works out the round trip time. |
| [`PlayerComponentController`](/mod/game-api/types/alta-networking/playercomponentcontroller) | class | `MonoBehaviour`, `IInitializeAsLocalPlayer` | 0 | Turns lists of components on or off for a player entity: server-only, client-only, and local player versus remote player. Starts every player as remote until it becomes the local player. |
| [`PositionSyncBlocker`](/mod/game-api/types/alta-networking/positionsyncblocker) | enum |  | 1 | Flags for why an entity's position sync is paused, passed to `LockPositionSync` and `UnlockPositionSync` on its prefab. The only reason is `Docked`, set while a pickup sits in a dock. |
| [`PrefabManager`](/mod/game-api/types/alta-networking/prefabmanager) | static class |  | 5 | [Prefabs and prefab hashes](../world/prefabs.md#prefabmanager): It loads every `NetworkPrefab` under `Resources/Network Prefabs` the first time anything asks, into a private `Dictionary<uint, NetworkPrefab>`. |
| [`PrefabNameMap`](/mod/game-api/types/alta-networking/prefabnamemap) | class | `GlobalSettings<PrefabNameMap>`, `ISerializationCallbackReceiver` | 1 | Global settings asset that maps prefab hashes to their asset paths. Get it with `PrefabNameMap.Instance`. |
| [`ProfileNetworkSerializedAttribute`](/mod/game-api/types/alta-networking/profilenetworkserializedattribute) | class | `Attribute` | 0 | Marks an `INetworkSerialized` type so `NetworkSerializedProfiler` picks up its static `serializeTimer` and `prepareForWriteTimer` fields. |
| [`RecreateArgumentMode`](/mod/game-api/types/alta-networking/recreateargumentmode) | enum |  | 3 | When a `MethodSyncClass` makes a new argument object while reading a message: only if its value is null, always, or never (reuse the existing one). |
| [`ReplaceAvoidFlags`](/mod/game-api/types/alta-networking/replaceavoidflags) | enum |  | 8 | Flags for what to leave alone when one entity replaces another (for example `CraftingPart` and `Fire` check them): position, relation, internal state, charge, stats, health or chunk. |
| [`RequestJoinMessage`](/mod/game-api/types/alta-networking/requestjoinmessage) | internal class |  | 8 | The message a client sends to ask to join a server: player id, credentials, player mode, platform and game version. Built by `JoinServerPipeline` and read by the server's connection handler. |
| [`RequestServerDiagnosticsMessage`](/mod/game-api/types/alta-networking/requestserverdiagnosticsmessage) | static class |  | 2 | Message a client sends to turn server diagnostics on or off for itself. |
| [`SceneEntityMessage`](/mod/game-api/types/alta-networking/sceneentitymessage) | static class |  | 4 | Writes or reads which entity a message is about, by identifier. Other messages such as `MoveMessage` and `DestroyMessage` start with it. |
| [`SceneSerializationMessage`](/mod/game-api/types/alta-networking/sceneserializationmessage) | class |  | 1 | Receives scene serialization data and passes it to the current network scene's scene serializer. |
| [`SerializeConnectionMethod`](/mod/game-api/types/alta-networking/serializeconnectionmethod) | delegate |  | 0 | A method that writes (or reads) a message body for one connection on a stream. Passed to `Connection` and `OutgoingPacketManager` send methods. |
| [`SerializedEntityHandler`](/mod/game-api/types/alta-networking/serializedentityhandler) | delegate |  | 0 | Handler for the `EntitySerializer.WroteEntity` and `ReadEntity` events, given the serializer, the entity and its raw serialized bits. |
| [`SerializeMethod`](/mod/game-api/types/alta-networking/serializemethod) | delegate |  | 0 | Handler for a network message: gets the sending or receiving player and the stream, and both reads and writes the message with the same calls. The generic version also gets a typed argument. |
| [`SerializeMethod<T>`](/mod/game-api/types/alta-networking/serializemethod-t) | delegate |  | 0 | Callback that reads or writes data for one player on a stream, with an extra argument of type `T`. A non-generic version without the argument sits in the same file. |
| [`ServerDiagnosticsMessage`](/mod/game-api/types/alta-networking/serverdiagnosticsmessage) | static class |  | 5 | Message the server sends to clients that asked for diagnostics: its frame rate and a text message. |
| [`ServerMessageReceiverPerConnection`](/mod/game-api/types/alta-networking/servermessagereceiverperconnection) | class |  | 5 | Server: per-connection receiver that holds incoming unreliable packets until the frame's processing step and handles connect and disconnect events. Made by `ServerPacketReceiver`. |
| [`ServerPacketReceiver`](/mod/game-api/types/alta-networking/serverpacketreceiver) | class | `IPacketReceiver`, `IPacketProcessor` | 8 | The server's packet receiver. Each frame it takes packets from the transport, handles unreliable ones per connection, then handles buffered reliable ones, and records timing stats. Server only. |
| [`ServerSpawnManager`](/mod/game-api/types/alta-networking/serverspawnmanager) | class | `SpawnManager` | 6 | [Spawning](../world/spawning.md) |
| [`ServerSync`](/mod/game-api/types/alta-networking/serversync) | class | `BaseSync`, `ISync` | 8 | The server side `ISync` that `SyncFactory.Create` makes on the server. Keeps the server read and write handlers and can limit incoming messages to one owner player. |
| [`Socket`](/mod/game-api/types/alta-networking/socket) | class | `ISocket`, `IDisposable` | 22 | [Sockets and connections](../networking/connections.md#socket): Get the current one from `Socket.Current` (a static `ISocket`, the last socket made). |
| [`SocketEventHandler`](/mod/game-api/types/alta-networking/socketeventhandler) | delegate |  | 0 | Callback that receives an `ISocket`, for socket events. |
| [`SpawnIndex`](/mod/game-api/types/alta-networking/spawnindex) | class |  | 4 | Per-entity counter that orders spawns and despawns, so clients drop destroy messages that are older than the entity's latest spawn. |
| [`SpawnManager`](/mod/game-api/types/alta-networking/spawnmanager) | abstract class |  | 13 | [Spawning](../world/spawning.md#spawnmanager): Get it from `NetworkSceneManager.Current.Spawner`, `entity.Spawner` or `SpawnHelper.Manager`. |
| [`SpawnMessage`](/mod/game-api/types/alta-networking/spawnmessage) | static class |  | 2 | The network message that spawns a prefab on clients: prefab hash, entity and embedded ids, spawn index, and optionally chunk, position, rotation and scale. |
| [`StaticChangeEvent`](/mod/game-api/types/alta-networking/staticchangeevent) | delegate |  | 0 | Callback for `ModifiableStaticManager.ObjectChanged`, with a static object's hash and whether it is now modified. |
| [`StaticPlatformSupport`](/mod/game-api/types/alta-networking/staticplatformsupport) | class | `NetworkEntityBehaviour` | 2 | Network behaviour meant to sync a placed object's position through a `PositionSerializer` with a movement context. Not used anywhere, and its serializer is never created, so it would probably throw if used. |
| [`StreamAuthorityHelper`](/mod/game-api/types/alta-networking/streamauthorityhelper) | static class |  | 2 | Checks whether a connection may send data for an entity, and logs when it may not. |
| [`StreamEntityExtensions`](/mod/game-api/types/alta-networking/streamentityextensions) | static class |  | 7 | Extension methods on `Stream` for checking which side is reading or writing, and for sending entities, entity ids and chunks. |
| [`StreamMethod`](/mod/game-api/types/alta-networking/streammethod) | delegate |  | 0 | A method that reads or writes something on a serialization stream. Used as the handler for `Sync` and `MethodSync`. |
| [`Sync`](/mod/game-api/types/alta-networking/sync) | abstract class |  | 5 | Base for an entity sync with one handler method that both writes and reads. Registers the handler with the entity's message handler for one message type. |
| [`Sync<T>`](/mod/game-api/types/alta-networking/sync-t) | abstract class |  | 5 | Base for an entity sync that sends a value of type `T`. Registers its handler with the entity's message handler for one message type. |
| [`SyncFactory`](/mod/game-api/types/alta-networking/syncfactory) | static class |  | 1 | Makes the right `ISync` for the side you are on. |
| [`TemporaryUint256`](/mod/game-api/types/alta-networking/temporaryuint256) | static class |  | 1 | A shared scratch array of 256 uints, used by spawn and sync messages to hold embedded entity ids. |
| [`ThrottledMethodSync`](/mod/game-api/types/alta-networking/throttledmethodsync) | class |  | 3 | Wraps an entity message so it is sent at most once per set interval; extra sends inside the interval are dropped, not delayed. |
| [`TransportSystem`](/mod/game-api/types/alta-networking/transportsystem) | enum |  | 1 | Which network transport to use. KCP is the only option and the default. |

## Alta.Networking.Animation

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AnimatedBool`](/mod/game-api/types/alta-networking/animatedbool) | class | `AnimatedValue<bool>` | 5 | A synced bool parameter on a `NetworkAnimator`. Setting it updates the Unity animator and marks it to be sent to clients for the next few syncs. |
| [`AnimatedBoolAccess`](/mod/game-api/types/alta-networking/animatedboolaccess) | class | `MonoBehaviour` | 1 | Small helper that exposes one named bool of a `NetworkAnimator` as a `Set` method, so a UnityEvent can drive a networked animator bool. |
| [`AnimatedFloat`](/mod/game-api/types/alta-networking/animatedfloat) | class | `AnimatedValue<float>` | 3 | A synced float parameter on a `NetworkAnimator`, sent compressed within a range and precision. |
| [`AnimatedFloatLerp`](/mod/game-api/types/alta-networking/animatedfloatlerp) | class | `AnimatedFloat` | 3 | A synced animator float that clients ease towards the received value instead of jumping to it. Big changes past `snapThreshold` snap straight away. |
| [`AnimatedInt`](/mod/game-api/types/alta-networking/animatedint) | class | `AnimatedValue<int>` | 2 | A synced integer animator parameter. The server sets it and clients write the received value to their animator. |
| [`AnimatedLayerWeight`](/mod/game-api/types/alta-networking/animatedlayerweight) | class | `AnimatedValue<float>` | 2 | A networked `Animator` layer weight, synced as a 0 to 1 float. Set up by `NetworkAnimator`. |
| [`AnimatedLayerWeightLerp`](/mod/game-api/types/alta-networking/animatedlayerweightlerp) | class | `AnimatedLayerWeight` | 6 | A networked layer weight that eases towards a new value instead of jumping. Big changes past `snapThreshold` jump at once. |
| [`AnimatedTrigger`](/mod/game-api/types/alta-networking/animatedtrigger) | class | `AnimatedValue<bool>` | 5 | A networked animator trigger: the server sets it and clients fire the same trigger on their animator. |
| [`AnimatedValue<T>`](/mod/game-api/types/alta-networking/animatedvalue-t) | abstract class | `INameable` | 11 | Base for one synced animator parameter (bool, float, trigger) on a `NetworkAnimator`. A change is resent in the next several syncs so it gets through. Get one from the animator with `GetBool`, `GetFloat` or `GetTrigger`. |
| [`AnimationBasedSound`](/mod/game-api/types/alta-networking/animationbasedsound) | class | `MonoBehaviour` | 1 | Plays sound effects from animation events. Sits next to an `Animator`; an animation event calls `PlaySound` with a clip index. |
| [`AnimatorBoolAccess`](/mod/game-api/types/alta-networking/animatorboolaccess) | class | `MonoBehaviour` | 1 | Small helper that sets one bool on a plain Unity `Animator`, so a UnityEvent can drive it. Local only, not networked. |
| [`INameable`](/mod/game-api/types/alta-networking/inameable) | interface |  | 1 | Something with a display name for debug GUI. Implemented by `AnimatedValue<T>`. |
| [`NetworkAnimator`](/mod/game-api/types/alta-networking/networkanimator) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IBuildRendererPostBake`, +1 more | 16 | Syncs chosen Animator parameters (floats, ints, bools, triggers, layer weights) from the server to clients as streamed state, and sends the current animation states to joining players. Set values through the `Get` methods' objects on the server. |
| [`NetworkAnimator.FloatParameterType`](/mod/game-api/types/alta-networking/networkanimator-floatparametertype) | enum |  | 4 | Kinds of float parameter a `NetworkAnimator` could sync: a plain float, a layer weight, or either with lerping. Probably unused, as nothing else in the code refers to it. |

## Alta.Networking.Internal

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ClientSerializedEnumerable`](/mod/game-api/types/alta-networking/clientserializedenumerable) | class | `SerializedEnumerable` | 3 | Client-side enumerator over the entities the client serializes, in identifier order from a sorted list. `EntityManager.GetClientSerialized` returns its single instance. |
| [`ConnectionReceiver`](/mod/game-api/types/alta-networking/connectionreceiver) | abstract class | `IDisposable` | 3 | Takes received packets for one connection channel and processes them now or queues them. The channel picks normal, timed or counted; servers always use normal. |
| [`ConnectionReceiverType`](/mod/game-api/types/alta-networking/connectionreceivertype) | enum |  | 3 | How a client connection channel processes incoming reliable packets: Normal (all at once), Timed (by time budget) or Counted (by message count). The server always uses Normal. |
| [`ConnectionReceiveSettings`](/mod/game-api/types/alta-networking/connectionreceivesettings) | class | `GlobalSettings<ConnectionReceiveSettings>` | 6 | Global settings for how a client spreads processing of received reliable messages over frames. Servers always process straight away. |
| [`ConnectionReceiveSettings.Create`](/mod/game-api/types/alta-networking/connectionreceivesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Networking.ScriptableObject<ConnectionReceiveSettings>` | 0 | Editor menu item for creating a `ConnectionReceiveSettings` asset. |
| [`CountedQueuedConnectionReceiver`](/mod/game-api/types/alta-networking/countedqueuedconnectionreceiver) | class | `QueuedConnectionReceiver` | 1 | Client connection receiver that handles a set number of messages per frame and queues the rest. Chosen by a `ConnectionChannel` with the Counted receiver type. |
| [`EntityManager`](/mod/game-api/types/alta-networking/entitymanager) | class | `ILinkProvider`, `IEntityManager`, `IDisposable` | 19 | [Finding entities](../world/finding-entities.md#every-entity-entitymanager): One per scene, in a private field of `NetworkScene`. |
| [`IEntityManager`](/mod/game-api/types/alta-networking/ientitymanager) | interface |  | 2 | Part of the network scene that tracks which entities have serialized (streamed) state. `NetworkScene` implements it. |
| [`ILinkProvider`](/mod/game-api/types/alta-networking/ilinkprovider) | interface |  | 5 | Hands out and tracks network entity links (identifier slots). `EntityManager` is the main implementation; `LocalLinkProvider` is another. |
| [`MessageProcessor`](/mod/game-api/types/alta-networking/messageprocessor) | static class |  | 2 | Reads single messages out of received packet data and runs the connection's handler for each message type. Used by the connection receivers on both sides. |
| [`NormalConnectionReceiver`](/mod/game-api/types/alta-networking/normalconnectionreceiver) | class | `ConnectionReceiver` | 3 | Connection receiver that handles every message in a packet straight away, with no queueing. Always used on the server, and on clients for channels set to Normal. |
| [`OutgoingPacketManager`](/mod/game-api/types/alta-networking/outgoingpacketmanager) | class | `IDisposable` | 13 | Batches outgoing messages for one connection channel into packets and sends them. Reliable channels keep up to 64 unsent packets and disconnect the player when that fills up. Each `Connection` has one per channel. |
| [`Packet`](/mod/game-api/types/alta-networking/packet) | class |  | 8 | An outgoing packet buffer that several messages are written into, each with a 2-byte length, before it is sent on a connection. |
| [`PooledDataQueueItem`](/mod/game-api/types/alta-networking/pooleddataqueueitem) | class |  | 3 | A pooled wrapper around a received packet's bytes, used by `QueuedConnectionReceiver` to queue packets for later frames. |
| [`QueuedConnectionHelper`](/mod/game-api/types/alta-networking/queuedconnectionhelper) | static class |  | 4 | Tracks all queued connection receivers so code can tell when every queued message has been handled. |
| [`QueuedConnectionReceiver`](/mod/game-api/types/alta-networking/queuedconnectionreceiver) | abstract class | `ConnectionReceiver` | 5 | A connection receiver that can hold packets back and process them later, so incoming messages can be spread over frames. Subclasses decide when to queue. |
| [`SceneSerializer`](/mod/game-api/types/alta-networking/sceneserializer) | class |  | 11 | Sends and reads the regular state updates of every `EntitySerializer` in a network scene, packing as many as fit into each `SceneSerialize` message. The server writes per connection. |
| [`SerializedEnumerable`](/mod/game-api/types/alta-networking/serializedenumerable) | class | `IEnumerable<EntitySerializer>`, `IEnumerable`, `IEnumerator<EntitySerializer>`, +2 more | 7 | Walks the linked list of serialized entities from a start index, returning each entity's serializer. Used by `EntityManager`; skips placeholder links. |
| [`SerializingEntityHandler`](/mod/game-api/types/alta-networking/serializingentityhandler) | delegate |  | 0 | Callback for `SceneSerializer.WritingEntity`, raised before each entity's data is written into a sync stream, with its index, serializer, bit size and stream. |
| [`TimedQueuedConnectionReceiver`](/mod/game-api/types/alta-networking/timedqueuedconnectionreceiver) | class | `QueuedConnectionReceiver` | 2 | Client connection receiver that spends a time budget per frame on messages and queues the rest, to keep the frame rate up. Queues everything until the local player is set. |

## Alta.Networking.Scripts.Player

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IPlayer`](/mod/game-api/types/alta-networking/iplayer) | interface | `INetworkEntity` | 25 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |

## Alta.Networking.Servers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ConnectToServerUtility`](/mod/game-api/types/alta-networking/connecttoserverutility) | static class |  | 2 | [Joining a server](../networking/joining.md): Owns the client socket and the current pipeline. `StopCurrentConnectionAttempt()`. Registers the in-game message handlers once a join succeeds. |
| [`JoinResult`](/mod/game-api/types/alta-networking/joinresult) | class |  | 9 | Client: the outcome of trying to join a server, with a player-facing message for each failure. |
| [`PlayerJoinLeaveData`](/mod/game-api/types/alta-networking/playerjoinleavedata) | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| [`ServerHandler`](/mod/game-api/types/alta-networking/serverhandler) | class |  | 29 | [ServerHandler](../networking/server-handler.md): There's one per running server. |
| [`ServerHandler.BootupStep`](/mod/game-api/types/alta-networking/serverhandler-bootupstep) | delegate |  | 0 | An async step run while the server boots, added with `ServerHandler.AddBootupStep`. It can report progress text through the callback. |
| [`ServerHandler.ConnectionStep`](/mod/game-api/types/alta-networking/serverhandler-connectionstep) | delegate |  | 0 | An async step run for each connecting player, added with `ServerHandler.AddConnectionStep`. Gets the connection and a progress text callback. |
| [`ServerJoinLock`](/mod/game-api/types/alta-networking/serverjoinlock) | struct |  | 5 | [Server lifecycle](../networking/server-lifecycle.md) |
| [`ServerLifetimePipeline`](/mod/game-api/types/alta-networking/serverlifetimepipeline) | static class |  | 6 | [Server lifecycle](../networking/server-lifecycle.md): Opens the server socket and makes the handler. `GetServerRegion()`, `GetServerFleet()`. |
| [`ServerLockCollection`](/mod/game-api/types/alta-networking/serverlockcollection) | class | `IEnumerable<ServerJoinLock>`, `IEnumerable` | 4 | [Server lifecycle](../networking/server-lifecycle.md) |
| [`ServerPlayerConnectionHandlerOld`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold) | class |  | 6 | Server: checks join requests and accepts or refuses players. Despite the name, `ServerHandler` still creates and uses it. |
| [`ServerPlayerConnectionHandlerOld.ApiServerJoinResult`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold-apiserverjoinresult) | struct |  | 2 | Result of a join check with the web API: whether it passed and an error message. Not used anywhere in this build. |

## Alta.Networking.Voice

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`VoiceChatMouthController`](/mod/game-api/types/alta-networking/voicechatmouthcontroller) | class | `MonoBehaviour` | 0 | Animates a player's mouth from their voice chat volume: sets the Speaking layer weight and picks random mouth shapes. Client only; turns itself on once linked to a player, never when headless. |

## Alta.Profiling.Networking

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ConnectionSimulatorConfiguration`](/mod/game-api/types/alta-networking/connectionsimulatorconfiguration) | class |  | 5 | Settings for simulating a bad connection: send and receive delays in ms and a packet loss chance. Held by `NetworkingProfiler`. |
| [`DuplicateKeyComparer<TKey>`](/mod/game-api/types/alta-networking/duplicatekeycomparer-tkey) | internal class | `IComparer<TKey>` | 1 | Internal comparer that never reports two keys as equal, so a sorted list can hold duplicate keys. `EntityStatistics` uses it to sort by float values. |
| [`EntityMessageStatistics`](/mod/game-api/types/alta-networking/entitymessagestatistics) | class | `IndexedStatisticList<EntityMessageTypeStatistic, EntityMessageType>` | 1 | Profiling list of bytes sent, one statistic per entity message type. |
| [`EntityMessageTypeStatistic`](/mod/game-api/types/alta-networking/entitymessagetypestatistic) | class | `NetworkingStatistic` | 3 | Network traffic statistic for one entity message type. |
| [`EntityStatistic`](/mod/game-api/types/alta-networking/entitystatistic) | class | `NetworkingStatistic` | 10 | Network profiling stats for one entity: bytes sent, split by entity message type and by behaviour. Used by the networking profiler. |
| [`EntityStatistics`](/mod/game-api/types/alta-networking/entitystatistics) | class | `NetworkingStatisticsListNonSerialized<EntityStatistic>` | 7 | Network profiling list of bytes sent per entity, indexed by entity identifier, with inspector buttons to search, track chosen entities and list the top senders. |
| [`IndexedStatisticList<TStatistic, TStatType>`](/mod/game-api/types/alta-networking/indexedstatisticlist-tstatistic-tstattype) | abstract class | `NetworkingStatisticsList<TStatistic>` | 0 | Base for network profiling lists that give each statistic type (such as a message type) a fixed index in the list. |
| [`MessageStatistics`](/mod/game-api/types/alta-networking/messagestatistics) | class | `NetworkingStatisticsList<MessageTypeStatistic, KeyValuePair<MessageType, MessageTypeStatistic>>` | 1 | Network profiling list named "Messages" that shows the per message type statistics from a dictionary. |
| [`MessageTypeStatistic`](/mod/game-api/types/alta-networking/messagetypestatistic) | class | `NetworkingStatistic` | 2 | Network traffic statistic for one top-level `MessageType`. |
| [`SerializedBehaviourStatistic`](/mod/game-api/types/alta-networking/serializedbehaviourstatistic) | class | `NetworkingStatistic` | 3 | Network traffic statistic for one serialized behaviour, by name. |
| [`SerializedBehaviourStatistics`](/mod/game-api/types/alta-networking/serializedbehaviourstatistics) | class | `IndexedStatisticList<SerializedBehaviourStatistic, string>` | 1 | Profiling list of bytes sent, one statistic per serialized behaviour name. |

## Alta.Streaming

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IForcedPresenceOnServer`](/mod/game-api/types/alta-networking/iforcedpresenceonserver) | interface |  | 0 | Marker interface for components that must stay in the scene on the server. Nothing in this build checks it, so the check is probably in the build tools. |
| [`IForcePresenceOnAndroidClient`](/mod/game-api/types/alta-networking/iforcepresenceonandroidclient) | interface |  | 0 | Marker interface for components that must stay in the scene on Android clients. Nothing in this build checks it, so the check is probably in the build tools. |
| [`ScriptAssignedStaticBatchingMarker`](/mod/game-api/types/alta-networking/scriptassignedstaticbatchingmarker) | class | `MonoBehaviour`, `IForcePresenceOnAndroidClient` | 0 | Hidden marker component that `AdditionalStaticContent` adds to objects it assigns for static batching. Kept on Android clients. |

## Alta.Voice

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IVivoxMutedPlayerStore`](/mod/game-api/types/alta-networking/ivivoxmutedplayerstore) | internal interface |  | 3 | Internal store of user IDs the local player has muted. `VoiceChat` uses the PlayerPrefs version, which saves on every change. |
| [`IVivoxVoiceUpdatable`](/mod/game-api/types/alta-networking/ivivoxvoiceupdatable) | interface |  | 1 | Positional voice that `VivoxClient` updates each frame. `VivoxVoice` implements it. |
| [`IVoiceChat`](/mod/game-api/types/alta-networking/ivoicechat) | interface |  | 4 | The voice chat service, implemented by `VoiceChat`: who you can hear and per-player mutes. |
| [`VivoxChannel`](/mod/game-api/types/alta-networking/vivoxchannel) | class |  | 5 | Settings for one Vivox voice or text channel; `VivoxManager` makes one for the server and `VivoxSession` joins it. Client side. |
| [`VivoxClient`](/mod/game-api/types/alta-networking/vivoxclient) | class |  | 27 | Wrapper around the Vivox voice and text chat client: login, audio devices, channels and muting. Client only; one is made by `VivoxManager` and reached through `VivoxManager.Instance.Client`. |
| [`VivoxConfiguration`](/mod/game-api/types/alta-networking/vivoxconfiguration) | class |  | 6 | Client: Vivox voice settings (issuer, domain, endpoint) and how to get login and channel tokens, either from the Alta API or signed locally with the sandbox key. |
| [`VivoxManager`](/mod/game-api/types/alta-networking/vivoxmanager) | class | `SingletonBehaviour<VivoxManager>` | 5 | Client singleton that logs in to Vivox voice chat with the player's Alta account and joins a positional voice channel for the current server. Disabled on headless servers. |
| [`VivoxPlayerPrefsMutedPlayerStore`](/mod/game-api/types/alta-networking/vivoxplayerprefsmutedplayerstore) | internal class | `IVivoxMutedPlayerStore` | 3 | Client store of muted player IDs, saved as JSON in Unity `PlayerPrefs` under `MutedPlayersKey`. Loads on first use. |
| [`VivoxSession`](/mod/game-api/types/alta-networking/vivoxsession) | class |  | 12 | One joined Vivox voice or text channel. Connects with a token from the API and pairs each participant with the matching in-game player. Client side. |
| [`VivoxText`](/mod/game-api/types/alta-networking/vivoxtext) | class |  | 4 | Client: wraps text messaging on a Vivox channel session, raising an event for each received message. |
| [`VivoxUtility`](/mod/game-api/types/alta-networking/vivoxutility) | static class |  | 7 | [Startup and app state](../console-and-utilities/startup-and-app-state.md) |
| [`VivoxVoice`](/mod/game-api/types/alta-networking/vivoxvoice) | class | `IVivoxVoiceUpdatable` | 3 | Client: positional Vivox voice for one channel session. Connects the audio and sends the head's position to Vivox while active. Made by `VivoxSession`. |
| [`VoiceChat`](/mod/game-api/types/alta-networking/voicechat) | class | `IVoiceChat` | 5 | [Connection messages](../networking/messages.md) |
| [`VoiceChatScope`](/mod/game-api/types/alta-networking/voicechatscope) | enum |  | 3 | Whose voices the local player can hear (`VoiceChat.AudibleScope`): no one, friends only, or everyone. Toggled by the mute non-friends quick action. |

## Alta.WebServer

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaConsoleModule`](/mod/game-api/types/alta-networking/altaconsolemodule) | class | `WebModuleBase` | 2 | [Remote console](../console-and-utilities/remote-console.md): the game's web server, path `/console` |
| [`AltaFolderModule`](/mod/game-api/types/alta-networking/altafoldermodule) | class | `WebModuleBase`, `IDisposable` | 4 | [Remote console](../console-and-utilities/remote-console.md) |
| [`OutputFolderModule`](/mod/game-api/types/alta-networking/outputfoldermodule) | class | `WebModuleBase`, `IDisposable` | 3 | [Remote console](../console-and-utilities/remote-console.md) |
| [`WebServerThread`](/mod/game-api/types/alta-networking/webserverthread) | class | `IDisposable` | 4 | Server: small HTTP server on its own thread that serves the save cache at `/cache`, output files at `/output` and the console at `/console`, with CORS open. `ServerHandler` starts it. |

---
title: Entity sync
description: Entity messages and MethodSync, who may send what, how per-frame state is serialized, and the spawn managers.
sidebar_position: 7
---

# Entity sync

Both sides. Everything networked in the world is a `NetworkEntity` (`Alta.Networking`, in `Root.Township`), with `NetworkEntityBehaviour` components on it. There are two ways its state crosses the network:

- **Entity messages**: one-off calls addressed to one entity, like "this player teleported" or "this stat changed". They travel inside the `EntityInternal` [connection message](messages.md). This is what you'd use from a mod.
- **Serialized state**: each frame, behaviours that implement `INetworkSerialized` write their state (positions, rotations) into the `SceneSerialize` connection message, for entities that changed.

What entities are and how they're spawned and chunked is covered more in the world area. This page is about the networking side.

## Who owns what

- The **server** is authoritative for every entity, with one exception: the entities that make up **a player's own body** (the `PlayerController` prefab and its embedded parts). `NetworkEntity.InitializeAsPlayer` gives those an `AuthorityPlayer`, and on the owner's client `Serializer.IsAuthoritative` is `true`, so the client writes their state and the server reads it.
- When the server reads serialized state, `StreamAuthorityHelper.CheckReadPermission` only lets the `AuthorityPlayer`'s own connection write it.
- **Entity messages have no such check built in.** Each handler has to check the sender itself. The game's handlers do it like this: `if (NetworkSceneManager.IsServer && player != PlayerController.NetworkPlayer) StreamAuthorityHelper.LogUnauthorizedMessage(player);`. Some don't check at all: `ServerSettingsSync` let any player change the server's settings until TavernLib patched it.

## Entity messages

Each `NetworkEntity` (and `Player`, which is one) has an `EntityMessageHandler` at `entity.MessageHandler`: a table from `EntityMessageType` to a handler.

```csharp
public delegate void SerializeMethod(IPlayer player, Stream stream);
public delegate void SerializeMethod<T>(IPlayer player, Stream stream, T arguments);
```

As with connection messages, one method writes and reads. The `player` argument is:

- **reading on the server**: the player who sent it (from the connection). Check it.
- **reading on a client**: `null`. Clients' connections never get a `Player`.
- **writing**: the recipient, but when one message goes to several players it's written once, with the first recipient (or `null`). Don't write per-player data.

### EntityMessageHandler

| Member | What it does | Notes |
| --- | --- | --- |
| `void SetHandler(EntityMessageType type, SerializeMethod handler)` | Handle a type on this entity. | **Silently replaces** an existing handler for that type. |
| `SerializeMethod ClearHandler(EntityMessageType type)` | Remove it, and get the old one back. | Player states use this to swap in and restore handlers. |
| `void SendToChunks(EntityMessageType type, SerializeMethod handler, ConnectionChannel channel = null, params IPlayer[] except)` | From a client: to the server. From the server: to every player the entity is spawned for, minus `except`. | |
| `void SendToPlayer(IPlayer player, EntityMessageType type, SerializeMethod handler, ConnectionChannel channel = null)` | To one player. | Server to client. |
| `void HandleMessage(EntityMessageType type, IPlayer player, Stream stream)` | Dispatch an incoming message. | "Unsupported message type on ..." if there's no handler. |

If an entity message arrives on a client before that entity has spawned there, the game keeps a copy and handles it when it spawns (`Spawner.WaitForSpawn`).

**The server doesn't pass messages on.** A client's `SendToChunks` reaches the server only. If others should see it, the server's handler sends it again, as `LocomotionController` does with a player's moves (`syncMovement.SendToChunks(arguments, player)`, leaving out the sender).

### MethodSync and friends

These wrap a type and a handler, register the handler on the entity in their constructor, and give you `SendToChunks` and `SendToPlayer`. All in `Alta.Networking`:

| Type | Handler | Use |
| --- | --- | --- |
| `MethodSync(INetworkEntity entity, EntityMessageType type, SerializeMethod method)` | `(IPlayer, Stream)` | A message that writes its own data. |
| `MethodSync(INetworkEntity entity, EntityMessageType type, StreamMethod handler)` | `(Stream)` | Same, without the player. |
| `MethodSyncStruct<T>(NetworkEntity entity, EntityMessageType type, SerializeMethod<T> method, bool isAlwaysRecreating = false)` | `(IPlayer, Stream, T)` | Pass a struct to `SendToChunks(value)`; the handler gets it when writing, and `default` (or the last value) when reading. |
| `MethodSyncClass<T>(NetworkEntity entity, EntityMessageType type, SerializeMethod<T> method, RecreateArgumentMode mode = IfNull)` | `(IPlayer, Stream, T)` | The same for a class with a parameterless constructor. |
| `ThrottledMethodSync(NetworkEntity entity, EntityMessageType type, SerializeMethod handler, float throttleFrequencyInSeconds)` | `(IPlayer, Stream)` | At most one send per interval. |

`Sync.SendToChunks(params IPlayer[] except)`, `Sync.SendToPlayer(IPlayer)`, and for the generic ones `SendToChunks(T value, params IPlayer[] except)` and `SendToPlayer(IPlayer, T value)`. They all use `NetworkEntity.SyncChannel`.

### EntityMessageType

`Alta.Networking.EntityMessageType` is written as 8 bits, so 0 to 255. The names are reused: each entity has its own table, so `SyncE` means "last safe position" on a `Player` and "fall distance" on a body. 120 values are named. Some that the game never uses on anything: 17, 22, 35, 37, 39, 41, 43 to 47, 51, 54 to 60, 62, 63, 70, 72 to 75, 83, 84, 86 to 89, 94, 97, 98, 102 to 106.

:::warning[Pick a type nothing on that entity uses]

Every behaviour on an entity shares its table, and `SetHandler` replaces without a word. A mod that registers a type already used on that entity breaks the game's message there, and the game's next `new MethodSync` for that type breaks yours. Use a value from the unused list above, and register it on both sides.

:::

### Your own entity message

This adds a "wave" message to every `Player` entity. Both sides make the same `MethodSyncStruct` as each `Player` appears; the client sends it, the server checks the sender and passes it on.

```csharp
using System.Collections.Generic;
using Alta.Networking;
using Alta.Networking.Scripts.Player;
using Alta.Serialization;
using MelonLoader;
using UnityEngine;

public static class Wave
{
    // The game doesn't use 17 on any entity. Check no other mod uses it on Player either.
    private const EntityMessageType Type = (EntityMessageType)17;

    private static readonly Dictionary<Player, MethodSyncStruct<Vector3>> Syncs = new Dictionary<Player, MethodSyncStruct<Vector3>>();

    public static void Start()
    {
        // Both sides make the same MethodSync on every Player entity as it spawns.
        Player.OnPlayerAdded += player =>
            Syncs[player] = new MethodSyncStruct<Vector3>(player, Type, (sender, stream, where) => OnWave(player, sender, stream, where));
        Player.OnPlayerRemoved += player => Syncs.Remove(player);
    }

    // Client: tell the server, which tells everyone near us.
    public static void SendWave(Vector3 where)
    {
        if (Player.Current is Player local && Syncs.TryGetValue(local, out var sync))
            sync.SendToChunks(where);
    }

    private static void OnWave(Player owner, IPlayer sender, Stream stream, Vector3 where)
    {
        stream.SerializeVector3(ref where);
        if (!stream.IsReading) return;

        if (stream.IsReadingOnServer())
        {
            // Only the player who owns this entity may wave with it.
            if (sender != owner)
            {
                StreamAuthorityHelper.LogUnauthorizedMessage(sender);
                return;
            }
            // The server doesn't pass it on by itself: send it to everyone else who has this player spawned.
            Syncs[owner].SendToChunks(where, sender);
            return;
        }

        MelonLogger.Msg($"{owner.UserInfo.Username} waved at {where}");
    }
}
```

This follows the game's own pattern (`LocomotionController.SyncMovement`) and compiles against the game, but we haven't run it in game. A client without your mod logs "Unsupported message type on ..." for each one and carries on.

## Stream helpers for side checks

`Alta.Networking.StreamEntityExtensions`, extension methods on `Stream`:

| Method | True when |
| --- | --- |
| `IsReadingOnServer()` | Reading, on the server. |
| `IsReadingOnServerNonLocalTest()` | Reading, on a real server. |
| `IsReadingOnRemoteClient()` | Reading, on a client. |
| `IsServerToClient()` | Writing on a real server, or reading on a client. |
| `SerializeEntityIdentifier(ref uint id)` | Writes an entity id (0 to 100000). |
| `SerializeNetworkEntity(ref NetworkEntity entity, INetworkScene scene)` | Writes an entity as its id; reading looks it up (or `null`). |
| `SerializeChunk(ref Chunk chunk)` | Writes a chunk as its 13-bit index. |

`NetworkSceneManager.ServerSendOnly(this Stream stream)` turns reading off on a real server (not local test), so the server ignores what a client sends in that message.

## Serialized state

Behaviours that implement `INetworkSerialized` (`PrepareForWrite(bool isWriteFull)`, `Serialize(Stream stream, bool isWriteFull)`, `MaximumBits`) are written by the entity's `EntitySerializer` when something changed. `LocomotionController`, `NetworkTransform` and `NetworkRigidbody` are examples.

| `EntitySerializer` member | What it is |
| --- | --- |
| `bool IsAuthoritative` | This side writes the state. |
| `Player AuthorityPlayer` | The player who owns it (their body), or `null`. |
| `void MarkDataAsChanged()` | Send this entity's state next time. |
| `static event SerializedEntityHandler WroteEntity`, `ReadEntity` | Raised for every entity written or read. Called very often. |

Adding `INetworkSerialized` to an existing prefab from a mod isn't practical: both sides would need the same component in the same place. Use entity messages.

## ClientOnly

`Alta.Networking.ClientOnly` is a component that lists behaviours to switch off on a real server (renderers, audio, effects) and on everywhere else. It runs in `Awake`. If something works on a client but is dead on the server, look for one.

## NetworkEntityBehaviour

The base class for networked components. `Entity` gets the `NetworkEntity`. Overridable:

| Method | When |
| --- | --- |
| `Initialize()` | Both sides, as the entity is set up. Make your `MethodSync`s here. |
| `InitializeAsServer(SpawnData spawnData)` | Server, after the entity is spawned there. |
| `OnConnected(Player player)` | Server, when the entity is spawned for a player. Send that player the state they need (`sync.SendToPlayer(player)`). |
| `OnDisconnected(Player player)` | Server, when it's despawned for them. |

## Spawning

`NetworkSceneManager.Current.Spawner` is a `SpawnManager`: a `ServerSpawnManager` on the server, a `ClientSpawnManager` on a client.

| Member | What it does | Notes |
| --- | --- | --- |
| `NetworkEntity Spawn(NetworkPrefab prefab)`, `NetworkEntity SpawnInternal(uint prefabHash)` | Spawn a prefab. | Server only. A client logs "Cant spawn as client" and returns `null`. |
| `void Destroy(NetworkEntity entity, bool isUnload = false)` | Destroy it everywhere. | |
| `bool WaitForSpawn(uint entityIdentifier, EntitySpawnedHandler handler)`, `Task<NetworkEntity> WaitForSpawnAsync(uint id)` | Run something once an entity id exists. | Mostly for clients. |

`NetworkSceneManager.Current.GetEntity(uint id)` finds an entity by id. Spawning items, where they go and how they're set up is covered in the items and world areas.

## See also

- [Connection messages](messages.md)
- [Stream](stream.md)
- [Locomotion](locomotion.md)

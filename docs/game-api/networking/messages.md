---
title: Connection messages
description: MessageType, how messages are framed, sent and handled, adding your own message type, and the size limit.
sidebar_position: 6
---

# Connection messages

Both sides. A connection message goes from one `Connection` to the other: a join request, a spawn, a batch of entity updates. Each has a `MessageType` and a handler on the receiving connection. This is the simplest way for a mod to send its own data, and the way SyncLib, TavernLib and TavernEssentials do it.

For messages aimed at one networked object, see [Entity sync](entity-sync.md). Those travel inside the `EntityInternal` connection message.

## On the wire

Each packet holds one or more messages, each written as a 2-byte length then that many bytes of bits. The first bits of a message are its type:

- **Vanilla:** 5 bits, so types 0 to 31.
- **With TavernLib:** 8 bits, so 0 to 255. TavernLib replaces `MessageProcessor.ProcessSingleMessageFromData` (reading) and `OutgoingPacketManager.StartSerialize` (writing) with prefixes that return `false`.

So both ends must agree: a client and server where only one has TavernLib's patch misread every message. Rover saw a server log "Unsupported message type: Debug" from exactly that. Types above 31 only work when both ends run TavernLib.

After the type comes whatever the message's handler wrote. Nothing marks where it ends except the length.

## MessageType

`Alta.Networking.MessageType`:

| Value | Name | Handled by |
| --- | --- | --- |
| 1 | `Debug` | nothing in the game |
| 2 | `Error` | nothing in the game |
| 4 | `ServerDiagnostics` | both (`RequestServerDiagnosticsMessage` on the server, `ServerDiagnosticsMessage` on the client) |
| 6 | `Ping` | both |
| 7 | `ServerStatus` | client, while joining |
| 9 | `RequestJoin` | server |
| 10 | `RequestJoinResponse` | client, while joining |
| 11 | `ClientIsReadyToSpawn` | server, once per join |
| 12, 13, 15 | `RequestServerControl`, `ConfirmServerControl`, `ServerControlMessage` | nothing we found |
| 17 | `ConnectionPauseRequest` | server |
| 20 | `SpawnEntity` | client |
| 21 | `EntityDestroyed` | client |
| 22 | `EntityMissing` | nothing we found |
| 23 | `EntityMoved` | client |
| 24 | `EntityInternal` | both: carries entity messages |
| 25 | `SceneEntitySync` | client |
| 26 | `FileCacheRequest` | both |
| 28 | `SceneSerialize` | both: the per-frame entity state |
| 29 | `InitialEntitySerialize` | client |
| 30 | `VoiceChat` | nothing (Vivox is gone) |

Free below 32: 3, 5, 8, 14, 16, 19, 27, 31. Mods we know of use **18** (SyncLib), **32** and **33** (TavernLib's `ReceiveRoles` and `ReceiveSceneIndex`) and **35** (TavernEssentials). Pick something else, and say which one in your mod's docs.

A message with no handler on the receiving connection logs "Unsupported message type: ..." and is skipped; the rest of the packet still gets read.

## Handlers

```csharp
public delegate void SerializeConnectionMethod(Connection connection, Stream stream);
```

The same delegate type writes and reads. When sending, the game calls it with a `StreamWriter` (`stream.IsWriting`); when receiving, with a `StreamReader` (`stream.IsReading`). The game's messages use one method for both, calling `stream.SerializeX(ref value)` in the same order each way. See [Stream](stream.md).

- **Sending** calls your handler straight away, on the calling thread, to write the message into a buffer shared by that connection, then queues it. Call it from the main thread.
- **Receiving** calls your handler on the main thread during the network receive pass. The `Stream` is a shared reader that's reused for the next message, so read everything before you return. To keep it for later (after an `await`, say), take a copy first with `stream.Clone() as Stream`, as TavernLib does.
- Exceptions in a receive handler are logged ("Message Handler: ... encountered an error") and the next message is read normally.
- `Socket.SendToAll` passes `null` as the connection; `Socket.SendToPlayers` passes the first player's. Don't rely on `connection` when writing.

## Your own message type

You need a handler on the receiving `Connection`, on whichever side receives. Register it as the connection is made:

- **Client, the connection to the server**: postfix `Socket.CreateConnection(string, int)`.
- **Server, every player's connection**: postfix `ServerHandler.ConnectionCreated(Connection)` (private), or subscribe to `Socket.Current.ConnectionCreated`.

This sends a message of the day from the server when each player joins:

```csharp
using System;
using Alta.Networking;
using Alta.Networking.Servers;
using Alta.Serialization;
using HarmonyLib;
using MelonLoader;

public static class Motd
{
    // Pick a value no other mod uses. Above 31 needs TavernLib's 8-bit patch on both ends.
    public const MessageType Type = (MessageType)40;

    // Server: the handler runs once, to write the message.
    public static bool SendTo(Player player, string text)
    {
        return player.ConnectionToRemotePlayer.Send(null, Type, (connection, stream) => Serialize(stream, ref text));
    }

    // Client: runs when the message arrives, on the main thread.
    internal static void Receive(Connection connection, Stream stream)
    {
        string text = null;
        Serialize(stream, ref text);
        MelonLogger.Msg($"Server says: {text}");
    }

    // One method for both directions, like the game's own messages.
    private static void Serialize(Stream stream, ref string text)
    {
        stream.SerializeString(ref text, Stream.StringEncoding.UTF8);
    }
}

// Client: register the handler on the connection to the server as soon as it exists.
[HarmonyPatch(typeof(Socket), nameof(Socket.CreateConnection), new[] { typeof(string), typeof(int) })]
static class RegisterMotd
{
    static void Postfix(Connection __result)
    {
        __result?.SetHandler(Motd.Type, Motd.Receive);
    }
}

// Server: send it when a player has joined.
public static class MotdServer
{
    public static void Start()
    {
        ServerHandler.Initialized += server =>
        {
            if (server == null || server.IsDummyLocalServer) return;
            server.PlayerJoined += player =>
            {
                try { Motd.SendTo(player, "Welcome to the Tavern"); }
                catch (Exception e) { MelonLogger.Error(e); }
            };
        };
    }
}
```

Things to get right:

- **A client without your mod** logs "Unsupported message type" for each message and carries on. That's harmless, but if your mod needs the client half, set `parity_required` so they can't join without it (see [Client, server or both](../../mod/tavernlib/client-server-or-both.md#parity)).
- **Don't trust the client.** On the server, `connection` tells you who sent it: `connection.UserInfo` (set once their join passed) and `connection.Player` (once spawned). Any client can send any type with any content, so check who they are, and check roles with TavernLib's `Roles.HasRole(connection, ...)`.
- **When the client can receive**: the client's game-world handlers (spawns, entity messages) are set once the join succeeds. Messages that arrive earlier with no handler are dropped. Your own handler, set at `CreateConnection`, catches anything from the start. SyncLib sends from the server's `Connection.Approved`, before the join request has even arrived.
- **Handlers stay** on the client's connection after the join: the join pipeline only clears `RequestJoinResponse`, `ServerStatus` and `FileCacheRequest`.

## Size

A message can be at most the packet size less 100 bytes the game keeps, less the 2-byte length and the transport's own offset. The packet size is 1200 bytes for kcp2k, so a message tops out at a little under 1100 bytes. A bigger one logs "Message too large. Maximum packet size is ..." and `Send` returns `false`; nothing is sent. Don't count on that, though: the buffer messages are written into is only packet-sized, and the bit writer, when it runs off the end of a fixed buffer, logs "Provided buffer length not long enough. Writing over data. Will be corrupt." and starts again from the beginning. A message much bigger than the limit can go out corrupted instead of being refused. Keep yours well under 1 KB. Strings carry a 16-bit length, then their bytes.

For more, split it. TavernEssentials sends frames of at most 1097 bytes with a message id, a sequence number and a "final" flag, and joins them on the other side. TavernLib moved its mod list out of the join token because it outgrew the join message.

## See also

- [Stream](stream.md)
- [Entity sync](entity-sync.md)
- [Sockets and connections](connections.md)

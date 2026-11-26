---
title: Network messages
description: How TavernLib widens the game's message type, the numbers it uses, and sending your own.
sidebar_position: 6
---

# Network messages

`TavernLib.Backend.TavernMessages` and `TavernLib.Patches.MessageExpanderPatch` in `TavernLib.dll`. Both sides.

The game sends everything between server and players as messages, each starting with a `MessageType` number. TavernLib changes how that number is written so there's room for more, and uses two of the new numbers itself. Your mod can use others.

## The 8-bit message type

The game writes a message's type in 5 bits (0 to 31). Its own `Alta.Networking.MessageType` enum goes up to `VoiceChat = 30`. TavernLib's `MessageExpanderPatch` replaces `MessageProcessor.ProcessSingleMessageFromData` (reading) and `OutgoingPacketManager.StartSerialize` (writing) with prefixes that return `false`, so the type is read and written in 8 bits (0 to 255) and the originals never run.

This changes the wire format: a server and a client only understand each other if both have TavernLib, which every Tavern install does. [Connection messages](../game-api/networking/messages.md#on-the-wire) has the wire layout and the full `MessageType` list.

## TavernLib's numbers

`public enum TavernMessages`

| Value | Number | Direction | What it is |
| --- | --- | --- | --- |
| `ReceiveRoles` | 32 | Server to client | The player's roles: an integer count, then each role as a string. Handled by [`EntranceMessageHandler`](roles.md#on-the-client). |
| `ReceiveSceneIndex` | 33 | | Reserved. Nothing sends or handles it. |

Cast them to the game's type to use them: `(MessageType)TavernMessages.ReceiveRoles`.

Don't use 0 to 31 (the game's, though a few are unused) or 32 and 33. Other mods we know of use 18 (SyncLib) and 35 (TavernEssentials); [Connection messages](../game-api/networking/messages.md#messagetype) keeps the list. There's no registry, so pick a number, and say which one on your mod's page so other authors can avoid it.

## Sending your own

Messages are per connection. The game's `Connection` (in `Alta.Networking`, `Root.Township`) has what you need:

| Member | What it does |
| --- | --- |
| `void SetHandler(MessageType message, SerializeConnectionMethod handler)` | Sets this connection's handler for a type. Replaces any handler already set, with a warning in the log. |
| `bool Send(ConnectionChannel channel, MessageType type, SerializeConnectionMethod handler)` | Queues a message. `handler` writes the body. `null` for `channel` means the connection's default channel. |

`SerializeConnectionMethod` is `delegate void SerializeConnectionMethod(Connection connection, Stream stream)`, where `Stream` is `Alta.Serialization.Stream`. The same delegate reads and writes: `stream.SerializeString(ref text)` writes `text` when sending and fills it when receiving.

Set handlers in [`TavernEvents.SocketCreated`](events.md#socketcreated), on each new connection, the way TavernLib does for roles:

```csharp
using Alta.Networking;
using Alta.Serialization;
using MelonLoader;
using TavernLib.Utils;

public static class Toast
{
    // Not the game's (0 to 30) or TavernLib's (32, 33). Pick a number and say it on your mod's page.
    private const MessageType ToastMessage = (MessageType)120;

    public static void Start(bool isServer)
    {
        if (isServer) return;
        TavernEvents.SocketCreated.Subscribe(socket =>
            socket.ConnectionCreated += connection => connection.SetHandler(ToastMessage, OnToast));
    }

    // Client side: runs on the main thread, from the game's receive loop.
    private static void OnToast(Connection connection, Stream stream)
    {
        string text = "";
        stream.SerializeString(ref text);
        MelonLogger.Msg($"Server says: {text}");
    }

    // Server side: only send it to players who have your mod, or their game logs "Unsupported message type".
    public static void Send(Player player, string text)
    {
        player.ConnectionToRemotePlayer?.Send(null, ToastMessage, (_, stream) => stream.SerializeString(ref text));
    }
}
```

## Behaviour and gotchas

- **Threading.** The game receives in an update loop it registers with its `UpdateModule`, so handlers run on the main thread.
- **A type with no handler** is logged as an error (`Unsupported message type: 120`) and skipped. The rest of the packet still reads, since each message carries its length. So a player without your mod gets an error line, not a crash. Make your mod `parity_required` if both sides must have it (see [Parity](../tavernlib/client-server-or-both.md#parity)).
- **A handler that throws** is caught and logged by the game.
- **Size.** Keep messages small. One game message tops out a little under 1100 bytes (see [Size](../game-api/networking/messages.md#size)), which is why TavernLib caps its mod refusal text at 700 bytes.
- **The server's handlers.** TavernLib replaces the server's `RequestJoin` handler on each connection to run its join checks. Don't set a handler for the game's own types unless you mean to replace the game's.

## See also

- [Connection messages](../game-api/networking/messages.md) for the game's side: handlers, `Stream`, size limits
- [Events](events.md)
- [Roles](roles.md)

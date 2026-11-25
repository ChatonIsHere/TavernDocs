---
title: Events
description: TavernEvents.SocketCreated and the TavernEvent type.
sidebar_position: 5
---

# Events

`TavernLib.Utils.TavernEvents` in `TavernLib.dll`. Both sides.

TavernLib's events, as `TavernEvent<T>` objects you subscribe to. There are two: `TavernEvents.SocketCreated` here, and [`Roles.RolesChanged`](roles.md).

## TavernEvent

`public sealed class TavernEvents.TavernEvent<T>` (nested in `TavernEvents`)

| Member | What it does |
| --- | --- |
| `void Subscribe(Action<T> handler)` | Adds a handler. |
| `void Unsubscribe(Action<T> handler)` | Removes it. Pass the same delegate you subscribed. |

Raising it is `internal`, so only TavernLib can. You can't make your own working `TavernEvent<T>`; use a normal C# `event` for your mod's events.

To unsubscribe later, subscribe a method or a stored delegate, not an inline lambda. A second identical lambda is a different delegate.

## SocketCreated

`public static readonly TavernEvent<ISocket> SocketCreated`

Raised each time the game makes its network socket (`Alta.Networking.Socket`), with that socket. TavernLib raises it from a Harmony postfix on the `Socket` constructor, after the constructor has set `Socket.Current` to the new socket.

- **Client:** the first time you join a server, from `ConnectToServerUtility.ConnectToServer`. The game keeps that socket for later joins until it's destroyed, then makes a new one.
- **Server:** once, when it starts hosting. `ServerLifetimePipeline.StartServerHandler` makes the socket on the game port, then sets `NetworkSceneManager.IsServer` and creates the `ServerHandler`. So when your handler runs, `ServerHandler.Current` isn't the new server yet.
- **Threading:** it runs inside `NetworkManager.CreateSocket`, on whatever thread called that. Both callers are `async` game methods in the game's own start-up and join flow, so as far as we can tell that's the main thread.

It's mostly useful for its `ConnectionCreated` event, which fires for each new `Connection` on that socket. That's where you set handlers for your own [network messages](network-messages.md), the way TavernLib sets up its roles message.

:::danger[Don't throw from a SocketCreated handler]

Nothing catches it. An exception goes up through the `Socket` constructor, so the game fails to make its socket and can't host or join. Wrap your handler's body in a `try`.

:::

Subscribe in `OnInitializeMelon`. Sockets are made long after mods load, so you won't miss the first one.

## Example

```csharp
using Alta.Networking;
using MelonLoader;
using TavernLib.Utils;

public class SocketWatcher : MelonMod
{
    public override void OnInitializeMelon()
    {
        TavernEvents.SocketCreated.Subscribe(OnSocket);
    }

    public override void OnDeinitializeMelon()
    {
        TavernEvents.SocketCreated.Unsubscribe(OnSocket);
    }

    private void OnSocket(ISocket socket)
    {
        LoggerInstance.Msg("The game made a socket");
        socket.ConnectionCreated += connection => LoggerInstance.Msg($"New connection {connection.Identifier}");
    }
}
```

## See also

- [Events and services](../mod/tavernlib/events-and-services.md) (how-to)
- [Network messages](network-messages.md)

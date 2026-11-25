---
title: Events and services
description: TavernLib's events, and the services you can look up from your mod.
---

# Events and services

## Events

TavernLib's events are `TavernEvent<T>`s. Subscribe with a handler, and unsubscribe the same way:

```csharp
using TavernLib.Utils;

TavernEvents.SocketCreated.Subscribe(OnSocket);
TavernEvents.SocketCreated.Unsubscribe(OnSocket);

void OnSocket(Alta.Networking.ISocket socket) { /* ... */ }
```

| Event | Raised when |
| --- | --- |
| `TavernEvents.SocketCreated` | The game makes its network socket. You get the `ISocket`. |
| `Roles.RolesChanged` | A player's roles change on the server. See [Roles](roles.md#when-roles-change). |

## Services

TavernLib keeps its main parts as services you can look up by type:

```csharp
using TavernLib.Services;
using TavernLib.Backend.Api;

var manager = TavernServices.GetService<TavernManager>();
var settings = manager.ServerConfig.LastRead;   // server_settings.json as last read
LoggerInstance.Msg($"Server name: {settings.Name}, up to {settings.PlayerLimit} players");
```

`TavernManager` only exists on a server. On a client `GetService` returns `null` and logs an error, so check [which side you're on](client-server-or-both.md#telling-them-apart-in-code) first.

You can add your own service so other mods can find yours:

```csharp
public class MyService : IService { /* ... */ }

TavernServices.AddService(new MyService());
```

There's one of each type. Adding a second one of the same type is ignored, with a warning in the log.

:::note

Most of what's under `TavernLib.Backend` is TavernLib's own inner workings and can change between versions. Read from it if it helps, but don't count on it staying the same.

:::

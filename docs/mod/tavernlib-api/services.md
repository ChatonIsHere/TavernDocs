---
title: Services
description: TavernServices, IService, the services TavernLib registers, and TavernMessageHandler.
sidebar_position: 4
---

# Services

`TavernLib.Services` in `TavernLib.dll`. Both sides.

A tiny registry of objects, one per type. TavernLib puts its main parts in it, and your mod can add its own so other mods can find it. The how-to is [Events and services](../tavernlib/events-and-services.md#services).

## TavernServices

`public static class TavernServices`

| Member | What it does |
| --- | --- |
| `static void AddService<T>(T instance) where T : IService` | Registers `instance` under the type `T`. If something is already registered under `T`, logs a warning and does nothing. |
| `static T GetService<T>() where T : class, IService` | The instance registered under exactly `T`, or `null`. When there's none, it also logs an error: `Service of type T was not found!` |

There's no way to remove or replace a service.

### Keyed by the type you name

The key is the generic `T`, not the object's real type:

- `AddService(new ScoreService())` registers under `ScoreService` (the compiler infers `T`).
- `AddService<IService>(new ScoreService())` registers under `IService`, and `GetService<ScoreService>()` won't find it.
- `GetService` doesn't look at base classes or interfaces. Ask for the exact type it was added as.

### Threading

It's a plain `Dictionary` with no lock. Add your services from the main thread when your mod starts (`OnInitializeMelon`). Reading from other threads after that is fine in practice, as long as nobody is adding.

### The error log

`GetService` logs an error every time it finds nothing. On a client, `GetService<TavernManager>()` always does. Check [which side you're on](command-line.md#checking-for-a-server) first, rather than calling it and checking for `null`, or your mod fills the log with errors.

## IService

`public interface IService { }`

An empty marker. Put it on any class you want to register. It has nothing to implement.

## What TavernLib registers

All of these are added in TavernLib's `OnEarlyInitializeMelon`, so they're there before your mod's `OnInitializeMelon`.

| Type | Side | What it is |
| --- | --- | --- |
| `TavernLib.Backend.Api.TavernManager` | Server | The config files. See [TavernManager](config/tavern-manager.md). Also there with `/launcherauth`. |
| `TavernLib.Backend.EntranceMessageHandler` | Both | Receives the roles message on a client. See [On the client](roles.md#on-the-client). |
| `TavernLib.Debugging.DebugHelper` | Both | Only with `/debug_helper` on the command line. Copies the game's NLog output into MelonLoader's log and draws on-screen toggles for each log level. Nothing for mods to call. |

## Example

```csharp
using System.Collections.Generic;
using TavernLib.Backend.Api;
using TavernLib.Services;

public class ScoreService : IService
{
    private readonly Dictionary<string, int> _scores = new();

    public int Get(string username) => _scores.TryGetValue(username, out var s) ? s : 0;
    public void Add(string username, int points) => _scores[username] = Get(username) + points;
}

public static class Setup
{
    public static void OnInitialize()
    {
        TavernServices.AddService(new ScoreService());
    }

    public static string ServerName(bool isServer)
    {
        if (!isServer) return null;   // GetService logs an error when there's none
        return TavernServices.GetService<TavernManager>()?.ServerConfig.LastRead.Name;
    }
}
```

Another mod that references yours can then look it up:

```csharp
using TavernLib.Services;

public static class FromAnotherMod
{
    public static int ScoreOf(string username) =>
        TavernServices.GetService<ScoreService>()?.Get(username) ?? 0;
}
```

Load order matters: MelonLoader decides which mod starts first. If another mod looks up your service in its own `OnInitializeMelon`, yours may not be added yet. Look it up later (on first use), or register in `OnEarlyInitializeMelon`.

## TavernMessageHandler

`public class TavernMessageHandler` in `TavernLib.Services`.

| Member | |
| --- | --- |
| `EntranceMessageHandler ServerEntranceHandler { get; }` | A new `EntranceMessageHandler`, made with the object. |

It isn't an `IService` and TavernLib never creates or registers one. It looks like a leftover from before the service registry.

:::danger[Don't create one]

Creating a `TavernMessageHandler`, or an `EntranceMessageHandler` yourself, makes a second roles handler. It hooks every new connection and sets its own handler for the roles message, which replaces the registered one (the game logs "Overriding existing message handler"). From then on, the registered service's `LocalUser.Roles` stops updating, and so does everything that reads it, like TavernEssentials' settings bubble.

:::

## See also

- [Events and services](../tavernlib/events-and-services.md) (how-to)
- [Events](events.md)

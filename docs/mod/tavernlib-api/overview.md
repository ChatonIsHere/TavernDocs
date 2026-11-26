---
title: TavernLib API
description: What a mod can use from TavernLib, how to reference it, and which parts are stable.
sidebar_position: 1
---

# TavernLib API

TavernLib is the MelonLoader plugin every Tavern client and server has. Besides keeping servers working without Alta, it has a small API for mods: players' roles, a place to share services between mods, an event for the game's network socket, its folder paths, and read access to its config files and mod manager.

These pages are the reference. For how-tos, see the TavernLib guides: [What TavernLib does](../tavernlib/what-tavernlib-does.md), [Roles](../tavernlib/roles.md), [Events and services](../tavernlib/events-and-services.md), [Console commands](../tavernlib/console-commands.md) and [Folders and files](../tavernlib/folders-and-files.md).

They're written from TavernLib 1.5.4's source, with the mod manager, SRV record, server settings and incompatible-mods work included. If a member here is missing from your `TavernLib.dll`, you have an older build.

## Referencing TavernLib

The launcher's Setup installs it at `Plugins\TavernLib.dll` in the game folder. Add it to your `.csproj` next to your game references:

```xml
<Reference Include="TavernLib" HintPath="$(GameDir)\Plugins\TavernLib.dll" Private="false" />
```

`Private="false"` stops your build copying TavernLib next to your DLL. Never ship a copy with your mod. Players already have it, at the version their launcher installed.

Some types need more references:

| You use | Also reference (from `A Township Tale_Data\Managed`) |
| --- | --- |
| Config types, or your own `ServerConfigFile<T>` | `Newtonsoft.Json` |
| `CommandLineArguments` (the game's argument reader) | `Alta.CommandLine` |
| `Connection`, `ISocket`, console types | `Root.Township` (you already have it) |

On GitHub Actions, TavernLib isn't in att-stubs, so download it first. See [Depending on TavernLib](../game-mods/building-on-github.md#depending-on-tavernlib).

## When it's ready

TavernLib is a plugin, so MelonLoader starts it before any mod. It sets itself up in `OnEarlyInitializeMelon`:

1. On a server, it loads console tokens and runs the `/modlist` reconcile if there is one.
2. On both sides, it tells MelonLoader which mod build folders to load (`.server` or `.client_windows`). A client also sets up its Quick join preference.
3. On a server, it creates `TavernManager` (which reads the config files), starts the roles poll and, unless the launcher runs the server, the log archive and backup timers.
4. On both sides, it registers `EntranceMessageHandler`.

So by your mod's `OnInitializeMelon`, the services are there. Its Harmony patches are applied with the plugin too, except a handful of game command fixes that wait for `OnLateInitializeMelon` (see [Internals](internals.md#patching-from-a-plugin)).

## Stable API and internals

TavernLib has a lot of `public` types, because it was simpler to write that way. Most of them aren't meant for mods. This is how to read them:

| Area | Namespace | Status |
| --- | --- | --- |
| [Roles](roles.md), [the TavernMod attribute](mod-side.md) | `TavernLib.ModdingApi` | Made for mods. Expect it to stay. |
| [Services](services.md) | `TavernLib.Services` | Made for mods. |
| [Events](events.md) | `TavernLib.Utils` | Made for mods. |
| [Folders](directories.md), [command-line names](command-line.md) | `TavernLib` | Made for mods. |
| [Config files](config/tavern-manager.md) | `TavernLib.Backend.Api`, `TavernLib.Backend.Server.Configs` | Fine to read. Shapes can change. |
| [Client roles](roles.md#on-the-client), [network messages](network-messages.md) | `TavernLib.Backend` | Fine to use. Can change. |
| [Console answer types](console.md) | `TavernLib.ModulePorts` | `Lines<T>` is fine to use. The modules are TavernLib's. |
| [Mod manager](mod-manager/installed-mods.md) | `TavernLib.Backend.Mods`, `TavernLib.Backend.Auth` | Fine to read. Mirrors the launcher's Python, changes with it. |
| [Everything else](internals.md) | `TavernLib.Patches`, `TavernLib.Debugging`, the rest of `TavernLib.Backend` | TavernLib's inner workings. Don't build on them. |

Anything `internal` (the logger, the login server, console token checks) isn't reachable without reflection, and can change in any release. Pages say so where it matters.

:::warning[Internals do change]

`ModHandshake.Snapshot` returned `(hash, count, mods)` in TavernLib 1.4 and `(Hash, Mods, Untracked)` now. Canary reads it by reflection and handles both. If you build on a backend type, expect to do the same.

:::

## If TavernLib might be missing or older

Setup always installs TavernLib, so a hard reference is normal. If your mod must still load without it (or with a TavernLib from before an API existed), don't reference it. Look it up by name instead, like TavernEssentials does:

```csharp
using HarmonyLib;

public static class SoftTavernLib
{
    // For a mod that should still load if TavernLib is missing or older.
    public static bool HasRolesApi => AccessTools.TypeByName("TavernLib.ModdingApi.Roles") != null;
}
```

A hard reference to a member that isn't there fails when the method that uses it is first compiled (`MissingMethodException` or `TypeLoadException`), not when your mod loads.

## Which TavernLib is running

`TavernLib.Tavern.Version` is a `const`, so the compiler copies its value into your DLL. It tells you the version you built against, not the one running. Ask MelonLoader instead:

```csharp
using System.Linq;
using MelonLoader;

public static class RunningTavernLib
{
    // The version that's actually loaded, not the one you built against.
    public static string Version =>
        MelonBase.RegisteredMelons.FirstOrDefault(m => m.Info.Name == "TavernLib")?.Info.Version;
}
```

The same goes for every other `const` in TavernLib, like `ServerSettings.DefaultMaxPlayers` and the `TavernArgs` names.

## Server, client or both

Most of the API only does something on a server. A quick map:

| | Server | Client |
| --- | --- | --- |
| `Roles` | Reads `users.json`, raises `RolesChanged` | Always empty |
| `EntranceMessageHandler.LocalUser` | Unused | Your roles on the server you're on |
| `TavernManager` and its configs | Yes | Not registered: `GetService` returns `null` |
| `TavernEvents.SocketCreated` | Yes | Yes |
| `TavernDirectories` | Yes | Yes |
| Mod manager reads | Yes | Yes (your own `Mods` folder) |

To check which side you're on, see [Command-line arguments](command-line.md#checking-for-a-server).

## Pages

| Page | What's on it |
| --- | --- |
| [Roles](roles.md) | `Roles`, `RolesChange`, and your roles on the client |
| [TavernMod attribute](mod-side.md) | `TavernModAttribute`, `ModSide`, `GetModSide` |
| [Services](services.md) | `TavernServices`, `IService`, what TavernLib registers, `TavernMessageHandler` |
| [Events](events.md) | `TavernEvents`, `TavernEvent<T>` |
| [Network messages](network-messages.md) | The 8-bit message type, TavernLib's message numbers, sending your own |
| [Folders](directories.md) | `TavernDirectories` |
| [Config files](config/tavern-manager.md) | `TavernManager`, `ServerConfigFile<T>` and each file's class |
| [Console](console.md) | What TavernLib changes about commands, named token paths, `Lines<T>` |
| [Mod manager](mod-manager/installed-mods.md) | Reading installed mods, versions, parity, mod sources |
| [Command-line arguments](command-line.md) | Every argument TavernLib reads |
| [Files](files.md) | Every file TavernLib reads or writes |
| [Internals](internals.md) | The other public types, and TavernLib's own logger |

---
title: Client, server or both
description: Make your mod run on the server, the client, or both.
---

# Client, server or both

The game and the server are the same program, so the same mod can load in both. There are two parts to getting it right: which builds you publish, and what your code does once it's running.

## What gets installed where

Your [manifest](../publishing/manifest-reference.md#targets) lists which **targets** each build is for:

| Target | Where it runs |
| --- | --- |
| `client_windows` | The game on Windows: SteamVR, Quest over Link, or Fly |
| `server` | A server, from the launcher or headless |
| `client_android` | The standalone Quest. Accepted, but nothing installs it yet |

A mod with only a `server` build is never installed on players' games, and players don't need it to join. A mod with a `client_windows` build is installed on players' games when a server runs it. One DLL can serve several targets.

## Telling them apart in code

If one DLL does both, check where it's running. Servers always start with `/start_server` on the command line:

```csharp
using System;
using System.Linq;

public static bool IsServer { get; } =
    Environment.GetCommandLineArgs().Any(a => string.Equals(a, "/start_server", StringComparison.OrdinalIgnoreCase));
```

Then do only the right half:

```csharp
public override void OnInitializeMelon()
{
    if (IsServer) StartServerSide();
    else StartClientSide();
}
```

The command line is there from the first line of your mod. Other checks that look right aren't:

- `PlatformProvider.IsServer()` only means "running on Linux". A Windows server fails it.
- `NetworkSceneManager.IsServer` is `false` while mods load, even on a server, and `true` in a client's main menu.
- `ServerHandler.Current` isn't null in a client's main menu either: it's a dummy server there (`IsDummyLocalServer`).
- `ApplicationManager.IsHeadless` means no graphics. Headless clients exist (load-test bots, for example).

Once the game is running, `NetworkSceneManager.IsServer` is the usual check inside a patch, to make the server's copy act and not the client's. See [Which side am I on?](../game-api/networking/overview.md#which-side-am-i-on) and [Checking for a server](../tavernlib-api/command-line.md#checking-for-a-server).

## The TavernMod attribute

TavernLib has an attribute for saying which side your mod is for:

```csharp
using TavernLib.ModdingApi;

[TavernMod(ModSide.Server)]
public class HelloTavernMod : MelonMod { }
```

`ModSide` is `Server`, `Client`, `Both` or `None`, and `melonMod.GetModSide()` reads it back. For now it's only a label. TavernLib doesn't act on it, so it doesn't stop your mod loading anywhere. Use the targets and the check above for that. See [TavernMod attribute](../tavernlib-api/mod-side.md).

## Parity

`parity_required` in your manifest says whether players need **your exact version** to join a server running your mod. Keep it `true` if your client and server code talk to each other or must agree. Set it `false` for a mod that's fine either way, like a client-side visual change. It only matters for a mod with a `client_windows` build: a server-only mod never stops anyone joining. See [Manifest reference](../publishing/manifest-reference.md#fields) and [Versions and parity](../tavernlib-api/mod-manager/versions-and-parity.md#modparity).

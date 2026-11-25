---
title: Versions and parity
description: ModVersion, the server's mod handshake, and the join check against a player's mods.
sidebar_position: 2
---

# Versions and parity

`TavernLib.Backend.Mods.ModVersion`, `ModHandshake` and `TavernLib.Backend.Auth.ModParity` in `TavernLib.dll`.

How TavernLib compares versions, what a server tells joining players about its mods, and how it decides a player's mods don't match. Internal and mirrored from the launcher, like the rest of the [mod manager](installed-mods.md).

## ModVersion

`public readonly struct ModVersion(int major, int minor, int patch) : IComparable<ModVersion>`. Both sides.

| Member | What it does |
| --- | --- |
| `int Major`, `int Minor`, `int Patch` | |
| `static ModVersion Parse(string v)` | Exactly three dot-separated runs of ASCII digits, after trimming spaces. Anything else throws `ModManagerException`. No `-beta`, no `+build`, no `v` prefix, no fourth part. |
| `static bool TryParse(string v, out ModVersion result)` | The same, without throwing. |
| `int CompareTo(ModVersion other)` | By major, then minor, then patch. |
| `<`, `>`, `<=`, `>=` | |
| `string ToString()` | `1.2.3` |

There's no `==` operator. Use `a.Equals(b)` or `a.CompareTo(b) == 0`.

It's strict on purpose, so ordering never guesses. `1.0` doesn't parse. Use `TryParse` on versions from records or player lists, since nothing checks those for you.

```csharp
using System.Linq;
using MelonLoader.Utils;
using TavernLib.Backend.Mods;

public static class ModCheck
{
    public static bool HasAtLeast(string modId, string version)
    {
        var (installed, _) = ModInstaller.ScanMods(MelonEnvironment.GameRootDirectory);
        var mod = installed.FirstOrDefault(m => m.Enabled && m.Record.Id == modId);
        return mod != null
            && ModVersion.TryParse(mod.Record.Version, out var have)
            && have >= ModVersion.Parse(version);
    }
}
```

## ModHandshake

`public static class ModHandshake`. Server.

What the server tells joining players' launchers about its mods: on every ping, every mod list request and every join.

| Member | What it does |
| --- | --- |
| `static (string Hash, List<Entry> Mods, List<UntrackedMod> Untracked) Snapshot(string gameDir)` | The enabled mods installed for the `server` target, sorted by id, the enabled untracked mods, and a hash of both. |

`ModHandshake.Entry`: `Id`, `Version`, `ParityRequired`, `SourceRepo`, `List<string> Targets` (the targets the mod has builds for), `SortedDictionary<string, string> TargetSha256` and `List<string> Scenes`.

- **Cached for 5 seconds** per `gameDir`, under a lock, so it's cheap to call and safe from any thread. A change on disk shows within 5 seconds.
- **The hash** is SHA-256 over one line per mod (`id@version@req` or `@opt`) and one per untracked mod (its name and last-write time). It changes when a version, a parity flag or a loose DLL changes. The launcher computes the same hash, byte for byte.
- It only lists mods installed for `server`, so on a client it's usually empty.
- **Its return type has changed before**: TavernLib 1.4's was `(hash, count, mods)`. Canary reads it by reflection and handles both.

```csharp
using MelonLoader.Utils;
using TavernLib.Backend.Mods;

public static class ServerMods
{
    // What a joining client is checked against: the server's enabled mods.
    public static string Hash()
    {
        var (hash, mods, _) = ModHandshake.Snapshot(MelonEnvironment.GameRootDirectory);
        return $"{mods.Count} mods, hash {hash}";
    }
}
```

## ModParity

`public static class ModParity` in `TavernLib.Backend.Auth`.

The join check. The launcher checks a player's mods before they join; this is TavernLib checking again on the server, for direct connects and old launchers.

| Member | Side | What it does |
| --- | --- | --- |
| `static List<RequiredMod> CheckJoin(List<ModHandshake.Entry> serverMods, Dictionary<string, string> clientMods)` | Server | The server mods the player is missing or has the wrong version of. |
| `static bool BlocksClaimless(ModHandshake.Entry mod)` | Server | Whether a mod refuses a player who sent no mod list: it's `parity_required` and has a client build. |
| `static string RefusalReason(List<RequiredMod> mismatches)` | Server | The refusal text: `Mod mismatch: ` then a JSON list of the mods, cut to fit 700 bytes (always at least one mod). |
| `static string LocalMods(string gameDir)` | Client | JSON `id` to `version` of the enabled mods installed for `client_windows`. What the launcher sends as the player's mod list. |
| `const string MismatchReasonPrefix = "Mod mismatch: "` | | The client recognises a mod refusal by this. |
| `const int MaxReasonBytes = 700` | | |

`ModParity.RequiredMod` has public fields (not properties) `Id`, `Version` and `SourceRepo`.

How `CheckJoin` decides:

- **The player sent a list** (`clientMods` isn't `null`): a server mod fails if it's `parity_required`, has a `client_windows` build, and the player doesn't have it at exactly the same version. A server mod with no version always fails.
- **The player sent no list** (the Quest app, a direct connect): a server mod fails if `BlocksClaimless` says so.
- Mods that aren't `parity_required` never fail. Extra mods the player has never fail.

Where the player's list comes from: their launcher sends it to the auth port just before joining (`set_mods`), and TavernLib saves it in their `users.json` entry as `mods` (see [User config](../config/user-config.md#userconfiguser)). The join then checks against that.

`LocalMods` is public for in-game joins: TavernEssentials' server board calls it by reflection, so a join from the board sends the same list the launcher would.

## When a join is refused

On the client, TavernLib records a mod refusal in `last_rejection.json` for the launcher to install what's missing and rejoin, and shows the reason in the game instead of the game's fixed "Please contact support". With Quick join on, it quits the game for the launcher straight away. That's `TavernLib.Patches.JoinRejectionRecorder`, which is TavernLib's own. Its private methods have been renamed before: the file is now written by `Save`, and an older `WriteRejectionFile` that Rover skips with a prefix is gone. A mod that patches these by name needs checking after each TavernLib update.

Quick join is also a MelonPreferences entry on the client: category `TavernLib`, entry `QuickJoin`. It's set from the `quick_join` file at start, and changing it creates or deletes the file, so a settings mod can switch it in the game.

## See also

- [Parity](../../mod/tavernlib/client-server-or-both.md#parity)
- [Manifest reference](../../mod/publishing/manifest-reference.md#fields)

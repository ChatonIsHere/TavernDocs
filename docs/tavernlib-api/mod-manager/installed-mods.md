---
title: Installed mods
description: Reading what's in the Mods folder with ModInstaller.ScanMods, ModRecord and ModPaths.
sidebar_position: 1
---

# Installed mods

`TavernLib.Backend.Mods` in `TavernLib.dll`. Both sides.

TavernLib's mod manager installs mods from mod sources into the game's `Mods` folder, the same way the launcher does. Its C# is a twin of the launcher's Python (`tavern_shared`), and the file layout is a contract between them. These pages cover what a mod can **read**: what's installed, which versions, and what a server will ask of a player. Installing, enabling and reconciling are TavernLib's and the launcher's job.

:::note[Internal, mirrored]

All of this is under `TavernLib.Backend`. It changes when the launcher's side changes. Read it if it helps, and expect to adjust.

:::

## The layout

```
Mods/
  Author.Repo/                  one folder per installed mod, named by its id
    manifest.json               TavernLib's record: the mod is on
    manifest.disabled.json      the same record, renamed: the mod is off
    .client_windows/            the build for the game (MelonLoader skips dot folders)
    .server/                    the build for a server
  Loose.dll                     a mod you dropped in: untracked
  Old.dll.disabled              a loose mod turned off
UserLibs/
  SomeLibrary.dll               libraries mods need, shared
  SomeLibrary.dll.meta.json     which build of it is installed
```

TavernLib tells MelonLoader which build folder to load at start: `.server` on a server, `.client_windows` in the game. See [How mods are loaded](../../mod/tavernlib/what-tavernlib-does.md#how-mods-are-loaded).

`gameDir` in every method below is the game folder, `MelonEnvironment.GameRootDirectory`.

## ModInstaller.ScanMods

`public static (List<InstalledModInfo> Installed, List<UntrackedMod> Untracked) ScanMods(string gameDir)` on `public static class ModInstaller`.

Lists everything in `Mods`, the way the launcher's Mod Manager does:

- A folder is **installed** (ours) if it has a `manifest.json` or `manifest.disabled.json` whose `id` is the folder's name and whose `parity_required` is a boolean.
- A folder with a `manifest.json` or `manifest.disabled.json` that isn't ours, a `.dll`, or a `.dll.disabled` is **untracked** (off when it's the `.disabled` one).
- Names starting with `.` or `~` are skipped.
- No `Mods` folder gives two empty lists.

It reads the disk each call, so don't call it every frame.

| `InstalledModInfo` | |
| --- | --- |
| `ModRecord Record` | The parsed record. |
| `bool Enabled` | The record is `manifest.json`, not `manifest.disabled.json`. |

| `UntrackedMod` | |
| --- | --- |
| `string Name` | The file or folder name. For a disabled loose DLL, the name without `.disabled`. |
| `string Kind` | `UntrackedMod.KindFile` (`"file"`) or `UntrackedMod.KindFolder` (`"folder"`). |
| `bool Enabled` | |

An installed mod's folder may hold builds for targets this side doesn't load. On a client, `Record.Lists(ModManagerConstants.TargetClientWindows)` tells you if it's installed for the game.

## ModRecord

`public class ModRecord`: TavernLib's record of an installed mod.

| Member | JSON key | What it is |
| --- | --- | --- |
| `string Id` | `id` | `Author.Repo` |
| `string Name` | `name` | |
| `string Version` | `version` | `MAJOR.MINOR.PATCH`. See [ModVersion](versions-and-parity.md#modversion). |
| `bool ParityRequired` | `parity_required` | Players need this exact version to join. |
| `List<string> Scenes` | `scenes` | Scenes it works in. `null` means all. |
| `Dictionary<string, string> Dependencies` | `dependencies` | Id to version constraint. |
| `JArray Artifacts` | `artifacts` | The builds, as in the manifest. Raw JSON. |
| `string SourceRepo` | `source_repo` | The mod source it came from. |
| `Dictionary<string, InstalledTarget> Installed` | `installed` | What's installed, by target. |
| `InstalledTarget InstalledFor(string target)` | | `null` if not installed for it. |
| `bool Lists(string target)` | | Installed for that target. |
| `SortedDictionary<string, string> ArtifactTargets()` | | Each known target with a usable build, to its SHA-256. |
| `IEnumerable<LibraryDependency> InstalledLibraries(string target)` | | Libraries installed for that target. |
| `static ModRecord Read(string gameDir, string modId, out bool enabled)` | | One mod's record, or `null` if the folder isn't ours. |

`InstalledTarget` has `List<string> Libraries` and `Dictionary<string, string> Files` (path in the build folder to SHA-256).

`ModRecord.Build` and `ModRecord.InstalledEntry` make records for writing. They're for TavernLib.

### Checking files

| Member | What it does |
| --- | --- |
| `static bool? ModInstaller.VerifyTarget(string gameDir, ModRecord record, string target)` | Hashes the installed files against the record. `null` when there's nothing to check. Slow: it reads every file. |
| `static bool? ModInstaller.VerifyLibrary(string gameDir, string filename, string wantSha256 = null)` | The same for one `UserLibs` file. |

`modmanager list` uses `VerifyTarget` to show `[DAMAGED]`.

## Constants and paths

`public static class ModManagerConstants`

| Member | Value |
| --- | --- |
| `const string DefaultRepo` | `https://raw.githubusercontent.com/ModdingTavern/TavernMods/main` |
| `const string TargetClientWindows` | `client_windows` |
| `const string TargetServer` | `server` |
| `const string TargetClientAndroid` | `client_android` |
| `static readonly string[] KnownTargets` | The three above. Other target names are ignored. |
| `const string RecordName` | `manifest.json` |
| `const string DisabledRecordName` | `manifest.disabled.json` |
| `const string DisabledDllSuffix` | `.disabled` |
| `static string NormalizeUrl(string url)` | Trims a trailing `/`. |
| `static bool IsDefaultRepo(string url)` | |

`public static class ModPaths` builds the paths above: `ModsBase(gameDir)`, `ModDirPath(gameDir, modId)`, `TargetDirPath(gameDir, modId, target)`, `ModRecordPath`, `DisabledRecordPath`, `UserLibsDir(gameDir)` and `LibrarySidecarPath(gameDir, filename)`. `SafeBasename(name)` throws `ModManagerException` for anything that isn't a plain file name (path separators, `..`, a colon, a trailing dot or space).

`UserLibsDir` and `LibrarySidecarPath` create `UserLibs` if it's missing.

## Example

```csharp
using System.Linq;
using MelonLoader;
using MelonLoader.Utils;
using TavernLib.Backend.Mods;

public static class InstalledMods
{
    public static void Log(MelonLogger.Instance log)
    {
        var (installed, untracked) = ModInstaller.ScanMods(MelonEnvironment.GameRootDirectory);

        foreach (var mod in installed.Where(m => m.Enabled))
            log.Msg($"{mod.Record.Id} {mod.Record.Version} for {string.Join(", ", mod.Record.Installed?.Keys ?? Enumerable.Empty<string>())}");

        foreach (var loose in untracked)
            log.Msg($"{loose.Name} ({loose.Kind}, {(loose.Enabled ? "on" : "off")})");
    }
}
```

## Gotchas

- **What's on disk isn't always what's loaded.** MelonLoader lists mod folders once, before any mod starts. A mod enabled or installed after that loads next start.
- **Don't write records.** Renaming `manifest.json` yourself works, but the launcher and a server's `/modlist` reconcile have their own idea of what should be on, and can undo it. `ModInstaller.SetEnabled`, `InstallMod` and the other writers are for TavernLib.
- **A record with no usable `parity_required` is treated as not installed**, with one warning, until reconcile rewrites it.
- `ModManagerException` is what everything here throws for a bad id, path, version or download. `ModManagerException.Describe(e)` adds the inner exceptions' messages.

## See also

- [Versions and parity](versions-and-parity.md)
- [Sources and reconcile](sources-and-reconcile.md)
- [Manifest reference](../../mod/publishing/manifest-reference.md)

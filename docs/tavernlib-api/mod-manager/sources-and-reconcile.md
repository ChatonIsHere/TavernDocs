---
title: Sources and reconcile
description: Mod sources, manifests, the merged index, and the server's modlist reconcile.
sidebar_position: 3
---

# Sources and reconcile

`TavernLib.Backend.Mods` in `TavernLib.dll`. Server, mostly.

How TavernLib reads mod sources and keeps a headless server's mods matching its modlist. A mod rarely needs any of this: it's here so you know what's going on, and what not to call. Internal and mirrored from the launcher, like the rest of the [mod manager](installed-mods.md).

## Manifests and the index

A mod source (like TavernMods) serves an index of every mod and version, and a manifest per version. See [Your own source](../../mod/publishing/your-own-source.md) and the [manifest reference](../../mod/publishing/manifest-reference.md).

| Type | What it is |
| --- | --- |
| `ModManifest` | One version of one mod: `Id`, `Name`, `Version`, `Author`, `Description`, `ParityRequired`, `Dependencies`, `List<ModArtifact> Artifacts`, `SourceRepo`, `Scenes` (`null` means every scene). `ArtifactFor(target)` picks the build for a target. `static FromJson(JObject d, string sourceRepo)` parses one, giving `null` for an unsupported manifest version and throwing for a broken one. |
| `static bool ModManifest.RunsIn(List<string> scenes, string scene)` | `true` if `scenes` is `null`, `scene` is `null`, or the list has it. |
| `ModArtifact` | One build: `Targets`, `DownloadUrl`, `Sha256`, `Package` (`dll` or `zip`), `LibraryDependencies`. `Usable` is `true` for those two packages; `Builds(target)` is usable and lists the target. |
| `LibraryDependency` | A library a build needs in `UserLibs`: `Name`, `DownloadUrl`, `Sha256`, `Filename`. |
| `ModSummary` | One mod's index entry for one major version: `Id`, `Versions`, `SourceRepo`, `ModVersion Highest`, `int Major`. |
| `ModIndex : List<ModSummary>` | Every source's index merged. Also `Replaced`, `Incompatible` and `Withdrawn`. |

### ModIndex

| Member | What it does |
| --- | --- |
| `List<ModReplacement> Replaced` | Mods a source says are replaced by another: `OldId`, `By`, `Note`, `SourceRepo`. |
| `List<ModIncompatibility> Incompatible` | Pairs of mods that don't work together: `Below` (each id to the version that fixes it, or `null` for every version), `Note`, `SourceRepo`. |
| `List<ModWithdrawal> Withdrawn` | Versions pulled from a source: `ModId`, `Version`, `Reason`, `SourceRepo`. |
| `ModWithdrawal WithdrawalOf(string modId, string version)` | Whether that exact version was withdrawn. The default source's entry wins. |
| `List<ModIncompatibility> Clashes(IReadOnlyDictionary<string, string> versions)` | Which incompatible pairs apply to a set of `id` to `version`. A version that doesn't parse counts as below every fix. |
| `static ModReplacement ReplacementOfUnlisted(IReadOnlyList<ModSummary> index, string modId)` | The replacement for an id no source lists any more, if a source lists its replacement. |

When two sources list the same mod and major version, the default TavernMods source wins, then the higher version.

## ModRepoClient

`public class ModRepoClient(NativeHttp http, List<string> repos, DateTime? deadlineUtc = null)`

| Member | What it does |
| --- | --- |
| `ModIndex FetchIndexes()` | Downloads every source's index and merges them. |
| `ModManifest FetchManifest(string modId, string version, string preferRepo)` | One version's manifest, trying `preferRepo` first if it's trusted. |
| `ModManifest FetchLatest(string modId, string preferRepo)` | The latest manifest. |
| `static void ValidateRepoIndex(string url)` | Throws `ModManagerException` unless the URL serves a real index. Used by `modmanager addrepo`. |
| `static List<ModIncompatibility> IncompatibilitiesFrom(JObject index, string baseUrl)`, `WithdrawalsFrom`, `ReplacementsFrom` | Parse those sections of one index. |

:::warning[Blocking network calls]

`ModRepoClient` uses TavernLib's `NativeHttp`, which blocks until the download finishes or times out. Never call it on the main thread: the game freezes for as long as the network takes. If you must, run it on a background thread.

:::

`ModDependencyResolver.ResolveDependencies(ModManifest root, IReadOnlyList<ModSummary> index, Func<string, string, string, ModManifest> fetchManifest, string target)` works out the manifests a mod needs, up to 5 levels deep, for one target. It's what install uses.

## ModReconciler

`public static class ModReconciler`

| Member | What it does |
| --- | --- |
| `static void ReconcileModList(string modsListPathArg)` | What `/modlist` runs. Reads the modlist (relative to `TheModdingTavern` unless the path is rooted) and `mod_repos.json`, then reconciles. Never throws: a failure is logged and the server boots with `Mods` as it was. |
| `static void Reconcile(string gameDir, ModsList modsList, List<string> repos, string scene)` | The pass itself. |

What a pass does, on a headless server started with `/modlist` (not with `/launcherauth`):

1. Runs in TavernLib's `OnEarlyInitializeMelon`, before MelonLoader loads any mod, so what it leaves on disk is what loads.
2. For each listed mod, installs or updates it (and its dependencies) for the `server` target from the trusted sources. A pinned version that was withdrawn is swapped for that major version's latest, with a warning. A mod a source has replaced becomes its replacement.
3. Re-enables listed mods that were turned off, and **disables** (never deletes) mods installed for `server` that aren't listed or needed.
4. Warns about listed mods that are incompatible with each other, but keeps both: that's the host's call.
5. Gives up after 300 seconds, leaving what's left as it was on disk.

A missing modlist file is treated as a typo, not an empty list, so nothing is disabled.

Don't call these from a mod. By the time your mod runs, MelonLoader has already decided what to load, so a reconcile then only changes the next start. And it blocks on the network.

## See also

- [Mods on your server](../../host/mods-on-your-server.md)
- [Command-line arguments](../command-line.md)

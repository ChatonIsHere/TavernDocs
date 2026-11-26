---
title: "ModReconciler.Pass"
description: "Private: one reconcile pass, with its deadline, the fetched index and per-pass verify results."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModReconciler.Pass

A **private class** in `TavernLib`, `TavernLib.Backend.Mods`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: one reconcile pass, with its deadline, the fetched index and per-pass verify results.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Nested in** [`ModReconciler`](/mod/tavernlib-api/types/backend-mods/modreconciler)
- **Documented in** [ModReconciler.Pass](/mod/tavernlib-api/types/backend-mods/modreconciler-pass)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Pass(string gameDir, "}<Link to="/mod/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, List<string> repos, string scene)"}</code> | Sets up a pass over the given game folder, repos and scene. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code>{"private readonly "}<Link to="/mod/tavernlib-api/types/backend-mods/modrepoclient">{"ModRepoClient"}</Link>{" _client"}</code> | The repo client used for index and manifest fetches, bounded by the same deadline. |
| <Link id="m-deadline" /><code>{"private readonly DateTime _deadline"}</code> | When the pass runs out of time. |
| <Link id="m-index" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" _index"}</code> | The merged repo index, fetched the first time it is needed. |
| <Link id="m-installed" /><code>{"private Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-mods/installedmodinfo">{"InstalledModInfo"}</Link>{"> _installed"}</code> | The installed mods found at the start of the pass, by id, updated as installs happen. |
| <Link id="m-libverified" /><code>{"private readonly Dictionary<string, bool?> _libVerified"}</code> | Per-pass cache of whether each library file still matches its record. |
| <Link id="m-modverified" /><code>{"private readonly Dictionary<string, bool?> _modVerified"}</code> | Per-pass cache of whether each mod's files still match what was installed. |
| <Link id="m-skipped" /><code>{"private readonly Dictionary<string, string> _skipped"}</code> | Mod ids that were listed but left out, with the reason, for the disable step to log. |

</details>

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index-2" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" Index { get; }"}</code> | The repo index, fetched on first use. |
| <Link id="m-scenereason" /><code>{"private string SceneReason { get; }"}</code> | Text saying a mod doesn't work in the scene this server runs. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"void Run("}<Link to="/mod/tavernlib-api/types/backend-server-configs/modslist">{"ModsList"}</Link>{" modsList)"}</code> | Reconciles each entry, re-enables what's kept and disables every other enabled server mod. Entries not reached in time keep what's installed. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addinstalledclosure" /><code>{"private void AddInstalledClosure(string modId, HashSet<string> into)"}</code> | Adds a mod and its installed dependencies to a set, reading only the local records. |
| <Link id="m-fetchindex" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" FetchIndex()"}</code> | Fetches the repo indexes; returns an empty index and warns if that fails. |
| <Link id="m-finddamage" /><code>{"private string FindDamage(string rootId)"}</code> | Returns a message for the first damaged mod or library in a mod's installed closure, or null if none. |
| <Link id="m-installclosure" /><code>{"private void InstallClosure("}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" target, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{"> deps, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> libs)"}</code> | Installs missing dependencies and libraries, then the root mod last, and refreshes the cached state afterwards. |
| <Link id="m-installedclosure" /><code>{"private HashSet<string> InstalledClosure(string rootId)"}</code> | Returns a mod and its installed dependencies as a set. |
| <Link id="m-intact" /><code>{"private bool Intact("}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" m)"}</code> | Returns whether a mod is installed at the manifest's version with files that still verify. |
| <Link id="m-memo" /><code>{"private static bool? Memo(Dictionary<string, bool?> memo, string key, Func<bool?> verify)"}</code> | Runs a check once per key and reuses the answer. |
| <Link id="m-preferredrepo" /><code>{"private string PreferredRepo(ValueTuple<string, string> entry)"}</code> | Returns the repo the index lists for the entry, favouring the highest version. |
| <Link id="m-reconcileone" /><code>{"private HashSet<string> ReconcileOne(ValueTuple<string, string> listed)"}</code> | Resolves, installs or keeps one modlist entry; returns the mod ids it accounts for, and on failure keeps what is installed. |
| <Link id="m-replace" /><code>{"private ValueTuple<string, string> Replace(ValueTuple<string, string> entry)"}</code> | Swaps a modlist entry for its replacement mod at latest version when its source has replaced it. |
| <Link id="m-runshere" /><code>{"private bool RunsHere(string id)"}</code> | Returns whether the mod is installed with a build for the server target. |

</details>

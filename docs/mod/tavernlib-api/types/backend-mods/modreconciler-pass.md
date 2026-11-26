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

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Pass(string gameDir, "}<Link to="/mod/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, List<string> repos, string scene)"}</code> | <span className="api-desc">Sets up a pass over the given game folder, repos and scene.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code>{"private readonly "}<Link to="/mod/tavernlib-api/types/backend-mods/modrepoclient">{"ModRepoClient"}</Link>{" _client"}</code> | <span className="api-desc">The repo client used for index and manifest fetches, bounded by the same deadline.</span> |
| <Link id="m-deadline" /><code>{"private readonly DateTime _deadline"}</code> | <span className="api-desc">When the pass runs out of time.</span> |
| <Link id="m-index" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" _index"}</code> | <span className="api-desc">The merged repo index, fetched the first time it is needed.</span> |
| <Link id="m-installed" /><code>{"private Dictionary<string, "}<Link to="/mod/tavernlib-api/types/backend-mods/installedmodinfo">{"InstalledModInfo"}</Link>{"> _installed"}</code> | <span className="api-desc">The installed mods found at the start of the pass, by id, updated as installs happen.</span> |
| <Link id="m-libverified" /><code>{"private readonly Dictionary<string, bool?> _libVerified"}</code> | <span className="api-desc">Per-pass cache of whether each library file still matches its record.</span> |
| <Link id="m-modverified" /><code>{"private readonly Dictionary<string, bool?> _modVerified"}</code> | <span className="api-desc">Per-pass cache of whether each mod's files still match what was installed.</span> |
| <Link id="m-skipped" /><code>{"private readonly Dictionary<string, string> _skipped"}</code> | <span className="api-desc">Mod ids that were listed but left out, with the reason, for the disable step to log.</span> |

</details>

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index-2" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" Index { get; }"}</code> | <span className="api-desc">The repo index, fetched on first use.</span> |
| <Link id="m-scenereason" /><code>{"private string SceneReason { get; }"}</code> | <span className="api-desc">Text saying a mod doesn't work in the scene this server runs.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"void Run("}<Link to="/mod/tavernlib-api/types/backend-server-configs/modslist">{"ModsList"}</Link>{" modsList)"}</code> | <span className="api-desc">Reconciles each entry, re-enables what's kept and disables every other enabled server mod. Entries not reached in time keep what's installed.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addinstalledclosure" /><code>{"private void AddInstalledClosure(string modId, HashSet<string> into)"}</code> | <span className="api-desc">Adds a mod and its installed dependencies to a set, reading only the local records.</span> |
| <Link id="m-fetchindex" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" FetchIndex()"}</code> | <span className="api-desc">Fetches the repo indexes; returns an empty index and warns if that fails.</span> |
| <Link id="m-finddamage" /><code>{"private string FindDamage(string rootId)"}</code> | <span className="api-desc">Returns a message for the first damaged mod or library in a mod's installed closure, or null if none.</span> |
| <Link id="m-installclosure" /><code>{"private void InstallClosure("}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" target, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{"> deps, List<"}<Link to="/mod/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> libs)"}</code> | <span className="api-desc">Installs missing dependencies and libraries, then the root mod last, and refreshes the cached state afterwards.</span> |
| <Link id="m-installedclosure" /><code>{"private HashSet<string> InstalledClosure(string rootId)"}</code> | <span className="api-desc">Returns a mod and its installed dependencies as a set.</span> |
| <Link id="m-intact" /><code>{"private bool Intact("}<Link to="/mod/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" m)"}</code> | <span className="api-desc">Returns whether a mod is installed at the manifest's version with files that still verify.</span> |
| <Link id="m-memo" /><code>{"private static bool? Memo(Dictionary<string, bool?> memo, string key, Func<bool?> verify)"}</code> | <span className="api-desc">Runs a check once per key and reuses the answer.</span> |
| <Link id="m-preferredrepo" /><code>{"private string PreferredRepo(ValueTuple<string, string> entry)"}</code> | <span className="api-desc">Returns the repo the index lists for the entry, favouring the highest version.</span> |
| <Link id="m-reconcileone" /><code>{"private HashSet<string> ReconcileOne(ValueTuple<string, string> listed)"}</code> | <span className="api-desc">Resolves, installs or keeps one modlist entry; returns the mod ids it accounts for, and on failure keeps what is installed.</span> |
| <Link id="m-replace" /><code>{"private ValueTuple<string, string> Replace(ValueTuple<string, string> entry)"}</code> | <span className="api-desc">Swaps a modlist entry for its replacement mod at latest version when its source has replaced it.</span> |
| <Link id="m-runshere" /><code>{"private bool RunsHere(string id)"}</code> | <span className="api-desc">Returns whether the mod is installed with a build for the server target.</span> |
| <Link id="m-unwithdraw" /><code>{"private ValueTuple<string, string> Unwithdraw(ValueTuple<string, string> entry)"}</code> | <span className="api-desc">Swaps a pin on a withdrawn version for the latest version in the same major (or the mod's latest if the pin isn't a readable version), and logs a warning with the reason.</span> |

</details>

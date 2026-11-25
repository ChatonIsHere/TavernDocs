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

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Nested in** [`ModReconciler`](/tavernlib-api/types/backend-mods/modreconciler)
- **Documented in** [ModReconciler.Pass](/tavernlib-api/types/backend-mods/modreconciler-pass)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Pass(string gameDir, "}<Link to="/tavernlib-api/types/backend/nativehttp">{"NativeHttp"}</Link>{" http, List<string> repos, string scene)"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-client" /><code>{"private readonly "}<Link to="/tavernlib-api/types/backend-mods/modrepoclient">{"ModRepoClient"}</Link>{" _client"}</code> |
| <Link id="m-deadline" /><code>{"private readonly DateTime _deadline"}</code> |
| <Link id="m-index" /><code>{"private "}<Link to="/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" _index"}</code> |
| <Link id="m-installed" /><code>{"private Dictionary<string, "}<Link to="/tavernlib-api/types/backend-mods/installedmodinfo">{"InstalledModInfo"}</Link>{"> _installed"}</code> |
| <Link id="m-libverified" /><code>{"private readonly Dictionary<string, bool?> _libVerified"}</code> |
| <Link id="m-modverified" /><code>{"private readonly Dictionary<string, bool?> _modVerified"}</code> |
| <Link id="m-skipped" /><code>{"private readonly Dictionary<string, string> _skipped"}</code> |

</details>

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-index-2" /><code>{"private "}<Link to="/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" Index { get; }"}</code> |
| <Link id="m-scenereason" /><code>{"private string SceneReason { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"void Run("}<Link to="/tavernlib-api/types/backend-server-configs/modslist">{"ModsList"}</Link>{" modsList)"}</code> | Reconciles each entry, re-enables what's kept and disables every other enabled server mod. Entries not reached in time keep what's installed. |

<details>
<summary>11 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addinstalledclosure" /><code>{"private void AddInstalledClosure(string modId, HashSet<string> into)"}</code> |
| <Link id="m-fetchindex" /><code>{"private "}<Link to="/tavernlib-api/types/backend-mods/modindex">{"ModIndex"}</Link>{" FetchIndex()"}</code> |
| <Link id="m-finddamage" /><code>{"private string FindDamage(string rootId)"}</code> |
| <Link id="m-installclosure" /><code>{"private void InstallClosure("}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" target, List<"}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{"> deps, List<"}<Link to="/tavernlib-api/types/backend-mods/librarydependency">{"LibraryDependency"}</Link>{"> libs)"}</code> |
| <Link id="m-installedclosure" /><code>{"private HashSet<string> InstalledClosure(string rootId)"}</code> |
| <Link id="m-intact" /><code>{"private bool Intact("}<Link to="/tavernlib-api/types/backend-mods/modmanifest">{"ModManifest"}</Link>{" m)"}</code> |
| <Link id="m-memo" /><code>{"private static bool? Memo(Dictionary<string, bool?> memo, string key, Func<bool?> verify)"}</code> |
| <Link id="m-preferredrepo" /><code>{"private string PreferredRepo(ValueTuple<string, string> entry)"}</code> |
| <Link id="m-reconcileone" /><code>{"private HashSet<string> ReconcileOne(ValueTuple<string, string> listed)"}</code> |
| <Link id="m-replace" /><code>{"private ValueTuple<string, string> Replace(ValueTuple<string, string> entry)"}</code> |
| <Link id="m-runshere" /><code>{"private bool RunsHere(string id)"}</code> |

</details>

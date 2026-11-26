---
title: "PackageManager"
description: "Static lookup of DebugPackage assets (from Resources/Items/Packages/) and the code behind the package drop console command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PackageManager

A **static class** in `Root.Township`, `Alta.Loot`.

Static lookup of `DebugPackage` assets (from `Resources/Items/Packages/`) and the code behind the `package drop` console command. Server only.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-packagemap" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/alta-world-generation/debugpackage">{"DebugPackage"}</Link>{"> packageMap"}</code> | <span className="api-desc">Backing field for `PackageMap`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-packagemap-2" /><code>{"static Dictionary<string, "}<Link to="/mod/game-api/types/alta-world-generation/debugpackage">{"DebugPackage"}</Link>{"> PackageMap { get; }"}</code> | <span className="api-desc">Packages by lower-case name with spaces removed. Loaded on first access.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-droppackage" /><code>{"static bool DropPackage(string packageName, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player = null, params string[] arguments)"}</code> | <span className="api-desc">Server: spawns the named package 2 m in front of the player's head, or at the original spawn point if no player. Name match ignores case and spaces.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyarguments" /><code>{"private static void ApplyArguments("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, string[] arguments)"}</code> | <span className="api-desc">Passes spawn arguments to every `ISpawnArguments` component on an entity. Private and never called.</span> |
| <Link id="m-delayedspawn" /><code>{"private static IEnumerator DelayedSpawn("}<Link to="/mod/game-api/types/alta-world-generation/debugpackage">{"DebugPackage"}</Link>{" package, Func<Vector3> getPosition, string[] arguments) (iterator)"}</code> | <span className="api-desc">Coroutine that spawns each prefab in a package. Stackables spawn as one pouch; others spawn one at a time 0.1 s apart, without the arguments.</span> |
| <Link id="m-setuppackages" /><code>{"private static void SetupPackages()"}</code> | <span className="api-desc">Loads every `DebugPackage` from `Resources/Items/Packages/` into `packageMap`.</span> |

</details>

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

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-packagemap" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/alta-world-generation/debugpackage">{"DebugPackage"}</Link>{"> packageMap"}</code> | Backing field for `PackageMap`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-packagemap-2" /><code>{"static Dictionary<string, "}<Link to="/mod/game-api/types/alta-world-generation/debugpackage">{"DebugPackage"}</Link>{"> PackageMap { get; }"}</code> | Packages by lower-case name with spaces removed. Loaded on first access. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-droppackage" /><code>{"static bool DropPackage(string packageName, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player = null, params string[] arguments)"}</code> | Server: spawns the named package 2 m in front of the player's head, or at the original spawn point if no player. Name match ignores case and spaces. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyarguments" /><code>{"private static void ApplyArguments("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, string[] arguments)"}</code> | Passes spawn arguments to every `ISpawnArguments` component on an entity. Private and never called. |
| <Link id="m-delayedspawn" /><code>{"private static IEnumerator DelayedSpawn("}<Link to="/mod/game-api/types/alta-world-generation/debugpackage">{"DebugPackage"}</Link>{" package, Func<Vector3> getPosition, string[] arguments) (iterator)"}</code> | Coroutine that spawns each prefab in a package. Stackables spawn as one pouch; others spawn one at a time 0.1 s apart, without the arguments. |
| <Link id="m-setuppackages" /><code>{"private static void SetupPackages()"}</code> | Loads every `DebugPackage` from `Resources/Items/Packages/` into `packageMap`. |

</details>

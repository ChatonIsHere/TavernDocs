---
title: "DebugPackage"
description: "A named set of prefabs and quantities that the server spawns with PackageManager.DropPackage, in front of a player or at the spawn point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugPackage

A **class** in `Root.Township`, `Alta.Loot`.

A named set of prefabs and quantities that the server spawns with `PackageManager.DropPackage`, in front of a player or at the spawn point. Loaded from `Resources/Items/Packages/`, looked up by lowercase name without spaces.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DebugPackage.Create`](/mod/game-api/types/alta-world-generation/debugpackage-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/debugpackage-create), [`PrefabQuantity`](/mod/game-api/types/alta-world-generation/debugpackage-prefabquantity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DebugPackage()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-package" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/debugpackage-prefabquantity">{"DebugPackage.PrefabQuantity"}</Link>{"> package"}</code> | <span className="api-desc">Backing field for `Package`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-package-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/debugpackage-prefabquantity">{"DebugPackage.PrefabQuantity"}</Link>{"> Package { get; }"}</code> | <span className="api-desc">The prefabs in the package, each with a quantity.</span> |

## Used in

Members of other types that take, return or hold a `DebugPackage`:

<div className="api-used-in">

[`PackageManager.DelayedSpawn`](/mod/game-api/types/alta-world-generation/packagemanager#m-delayedspawn), [`PackageManager.packageMap`](/mod/game-api/types/alta-world-generation/packagemanager#m-packagemap), [`PackageManager.PackageMap`](/mod/game-api/types/alta-world-generation/packagemanager#m-packagemap-2).

</div>

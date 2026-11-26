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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DebugPackage.Create`](/game-api/types/alta-world-generation/debugpackage-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/debugpackage-create), [`PrefabQuantity`](/game-api/types/alta-world-generation/debugpackage-prefabquantity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DebugPackage()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-package" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/debugpackage-prefabquantity">{"DebugPackage.PrefabQuantity"}</Link>{"> package"}</code> | Backing field for `Package`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-package-2" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/debugpackage-prefabquantity">{"DebugPackage.PrefabQuantity"}</Link>{"> Package { get; }"}</code> | The prefabs in the package, each with a quantity. |

## Used in

Members of other types that take, return or hold a `DebugPackage`:

[`PackageManager.DelayedSpawn`](/game-api/types/alta-world-generation/packagemanager#m-delayedspawn), [`PackageManager.packageMap`](/game-api/types/alta-world-generation/packagemanager#m-packagemap), [`PackageManager.PackageMap`](/game-api/types/alta-world-generation/packagemanager#m-packagemap-2).

---
title: "DebugPackage.PrefabQuantity"
description: "One entry in a debug package: a network prefab and how many to give."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugPackage.PrefabQuantity

A **class** in `Root.Township`, `Alta.Loot`.

One entry in a debug package: a network prefab and how many to give.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`DebugPackage`](/game-api/types/alta-world-generation/debugpackage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabQuantity("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Creates a `DebugPackage.PrefabQuantity` from `prefab`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Backing field for `Prefab`. |
| <Link id="m-quantity" /><code>{"private int quantity"}</code> | Backing field for `Quantity`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | Hash of the prefab. |
| <Link id="m-prefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> | The network prefab to spawn. |
| <Link id="m-quantity-2" /><code>{"int Quantity { get; }"}</code> | How many to spawn (default 1). |

## Used in

Members of other types that take, return or hold a `PrefabQuantity`:

[`DebugPackage.package`](/game-api/types/alta-world-generation/debugpackage#m-package), [`DebugPackage.Package`](/game-api/types/alta-world-generation/debugpackage#m-package-2).

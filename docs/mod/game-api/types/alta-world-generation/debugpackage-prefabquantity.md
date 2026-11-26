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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`DebugPackage`](/mod/game-api/types/alta-world-generation/debugpackage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabQuantity("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Creates a `DebugPackage.PrefabQuantity` from `prefab`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Backing field for `Prefab`.</span> |
| <Link id="m-quantity" /><code>{"private int quantity"}</code> | <span className="api-desc">Backing field for `Quantity`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">Hash of the prefab.</span> |
| <Link id="m-prefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> | <span className="api-desc">The network prefab to spawn.</span> |
| <Link id="m-quantity-2" /><code>{"int Quantity { get; }"}</code> | <span className="api-desc">How many to spawn (default 1).</span> |

## Used in

Members of other types that take, return or hold a `PrefabQuantity`:

<div className="api-used-in">

[`DebugPackage.package`](/mod/game-api/types/alta-world-generation/debugpackage#m-package), [`DebugPackage.Package`](/mod/game-api/types/alta-world-generation/debugpackage#m-package-2).

</div>

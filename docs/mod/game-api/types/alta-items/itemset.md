---
title: "ItemSet"
description: "ScriptableObject holding a list of item definitions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemSet

A **class** in `Root.Township`, `Alta.Inventory`.

ScriptableObject holding a list of item definitions.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ItemSet.Create`](/mod/game-api/types/alta-items/itemset-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/itemset-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"> items"}</code> | <span className="api-desc">Backing field for `Items`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-items-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"> Items { get; }"}</code> | <span className="api-desc">The items in the set.</span> |

## Used in

Members of other types that take, return or hold a `ItemSet`:

<div className="api-used-in">

[`MouldDefinition.allowedMaterials`](/mod/game-api/types/global-m-o/moulddefinition#m-allowedmaterials), [`MouldDefinition.AllowedMaterials`](/mod/game-api/types/global-m-o/moulddefinition#m-allowedmaterials-2).

</div>

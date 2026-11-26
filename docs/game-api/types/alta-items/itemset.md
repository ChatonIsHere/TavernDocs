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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ItemSet.Create`](/game-api/types/alta-items/itemset-create)
- **Nested types** [`Create`](/game-api/types/alta-items/itemset-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ItemSet()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private List<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"> items"}</code> | Backing field for `Items`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-items-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"> Items { get; }"}</code> | The items in the set. |

## Used in

Members of other types that take, return or hold a `ItemSet`:

[`MouldDefinition.allowedMaterials`](/game-api/types/global-m-o/moulddefinition#m-allowedmaterials), [`MouldDefinition.AllowedMaterials`](/game-api/types/global-m-o/moulddefinition#m-allowedmaterials-2).

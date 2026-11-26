---
title: "CookableCategoryDefinition"
description: "A stew ingredient that matches any cookable item in a category, rather than one item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookableCategoryDefinition

A **class** in `Root.Township`, `Alta.Cooking`.

A stew ingredient that matches any cookable item in a category, rather than one item.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`StewIngredientBase`](/mod/game-api/types/alta-crafting/stewingredientbase)
- **Derived types** [`CookableCategoryDefinition.Create`](/mod/game-api/types/alta-crafting/cookablecategorydefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/cookablecategorydefinition-create)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookableCategoryDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allcookableitems" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/cookablecategorydefinition">{"CookableCategoryDefinition"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{">> allCookableItems"}</code> | <span className="api-desc">Backing field for `AllCookableItems`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allcookableitems-2" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/cookablecategorydefinition">{"CookableCategoryDefinition"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{">> AllCookableItems { get; }"}</code> | <span className="api-desc">Every `CookableItem` grouped by its category, built from all items on first use.</span> |
| <Link id="m-cookables" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Cookables { get; }"}</code> | <span className="api-desc">The cookable items in this category.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-containscookable" /><code>{"override bool ContainsCookable("}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookable, out int score)"}</code> | <span className="api-desc">True, with score 1, if the item's category is this one.</span> |

## Used in

Members of other types that take, return or hold a `CookableCategoryDefinition`:

<div className="api-used-in">

[`CookableItem.category`](/mod/game-api/types/alta-crafting/cookableitem#m-category), [`CookableItem.Category`](/mod/game-api/types/alta-crafting/cookableitem#m-category-2).

</div>

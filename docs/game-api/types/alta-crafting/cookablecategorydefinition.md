---
title: "CookableCategoryDefinition"
description: "class CookableCategoryDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookableCategoryDefinition

A **class** in `Root.Township`, `Alta.Cooking`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`StewIngredientBase`](/game-api/types/alta-crafting/stewingredientbase)
- **Derived types** [`CookableCategoryDefinition.Create`](/game-api/types/alta-crafting/cookablecategorydefinition-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/cookablecategorydefinition-create)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CookableCategoryDefinition()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-allcookableitems" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-crafting/cookablecategorydefinition">{"CookableCategoryDefinition"}</Link>{", List<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{">> allCookableItems"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-allcookableitems-2" /><code>{"static Dictionary<"}<Link to="/game-api/types/alta-crafting/cookablecategorydefinition">{"CookableCategoryDefinition"}</Link>{", List<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{">> AllCookableItems { get; }"}</code> |
| <Link id="m-cookables" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Cookables { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-containscookable" /><code>{"override bool ContainsCookable("}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookable, out int score)"}</code> |

## Used in

Members of other types that take, return or hold a `CookableCategoryDefinition`:

[`CookableItem.category`](/game-api/types/alta-crafting/cookableitem#m-category), [`CookableItem.Category`](/game-api/types/alta-crafting/cookableitem#m-category-2).

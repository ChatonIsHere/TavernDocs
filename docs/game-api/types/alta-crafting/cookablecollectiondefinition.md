---
title: "CookableCollectionDefinition"
description: "A stew ingredient slot that accepts any cookable from a fixed list."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookableCollectionDefinition

A **class** in `Root.Township`, `Alta.Cooking`.

A stew ingredient slot that accepts any cookable from a fixed list.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`StewIngredientBase`](/game-api/types/alta-crafting/stewingredientbase)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CookableCollectionDefinition()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cookablelookup" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> cookableLookup"}</code> | Set built from `cookables` on first check. |
| <Link id="m-cookables" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> cookables"}</code> | Serialized list of accepted cookables. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cookables-2" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Cookables { get; }"}</code> | The cookables this ingredient accepts. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-containscookable" /><code>{"override bool ContainsCookable("}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookable, out int score)"}</code> | True if the cookable is in the list. A match scores 2. |

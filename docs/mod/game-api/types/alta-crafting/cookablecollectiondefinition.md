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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`StewIngredientBase`](/mod/game-api/types/alta-crafting/stewingredientbase)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookableCollectionDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cookablelookup" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> cookableLookup"}</code> | <span className="api-desc">Set built from `cookables` on first check.</span> |
| <Link id="m-cookables" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> cookables"}</code> | <span className="api-desc">Serialized list of accepted cookables.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cookables-2" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Cookables { get; }"}</code> | <span className="api-desc">The cookables this ingredient accepts.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-containscookable" /><code>{"override bool ContainsCookable("}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookable, out int score)"}</code> | <span className="api-desc">True if the cookable is in the list. A match scores 2.</span> |

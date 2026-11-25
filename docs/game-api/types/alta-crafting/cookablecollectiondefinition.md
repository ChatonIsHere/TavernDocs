---
title: "CookableCollectionDefinition"
description: "class CookableCollectionDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookableCollectionDefinition

A **class** in `Root.Township`, `Alta.Cooking`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`StewIngredientBase`](/game-api/types/alta-crafting/stewingredientbase)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookableCollectionDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cookablelookup" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> cookableLookup"}</code> |  |
| <Link id="m-cookables" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> cookables"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cookables-2" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Cookables { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-containscookable" /><code>{"override bool ContainsCookable("}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookable, out int score)"}</code> |  |

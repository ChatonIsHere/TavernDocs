---
title: "ICookingGarnishMarker"
description: "Marks a garnish that a cooking pot can take in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICookingGarnishMarker

An **interface** in `Root.Township`, `Alta.Cooking`.

Marks a garnish that a cooking pot can take in. `CookingPot` looks for it on items that enter and passes it to the stew; `CookingGarnishComponent` implements it.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`CookingGarnishComponent`](/game-api/types/alta-crafting/cookinggarnishcomponent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cookingplayer" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" CookingPlayer { get; }"}</code> | The player who added the garnish. The built-in implementation uses the last player who held the pickup. |
| <Link id="m-garnishitem" /><code><Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{" GarnishItem { get; }"}</code> | The garnish definition this item adds to the stew. |

## Used in

Members of other types that take, return or hold a `ICookingGarnishMarker`:

[`CookingPot.containedGarnishes`](/game-api/types/alta-crafting/cookingpot#m-containedgarnishes), [`CookingPot.GarnishAdded`](/game-api/types/alta-crafting/cookingpot#m-garnishadded), [`StewManager.AddGarnishToStew`](/game-api/types/alta-crafting/stewmanager#m-addgarnishtostew).

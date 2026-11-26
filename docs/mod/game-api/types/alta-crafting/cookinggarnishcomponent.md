---
title: "CookingGarnishComponent"
description: "Marks a pickup as a garnish for cooking pots."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingGarnishComponent

A **class** in `Root.Township`, `Alta.Cooking`.

Marks a pickup as a garnish for cooking pots. Hands the pot the item's `CookingGarnish` and the player who last held it.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ICookingGarnishMarker`](/mod/game-api/types/alta-crafting/icookinggarnishmarker)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingGarnishComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-garnishitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{" garnishItem"}</code> | <span className="api-desc">Cached `CookingGarnish` behind `GarnishItem`.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The garnish pickup.</span> |

</details>

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-cooking-icookinggarnishmarker-cookingplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" Alta.Cooking.ICookingGarnishMarker.CookingPlayer { get; }"}</code> | <span className="api-desc">The player who last interacted with the pickup.</span> |
| <Link id="m-alta-cooking-icookinggarnishmarker-garnishitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{" Alta.Cooking.ICookingGarnishMarker.GarnishItem { get; }"}</code> | <span className="api-desc">The `CookingGarnish` on the pickup's item, looked up once. Logs an error if it's missing.</span> |

</details>

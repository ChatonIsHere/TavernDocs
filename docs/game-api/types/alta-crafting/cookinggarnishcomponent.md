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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ICookingGarnishMarker`](/game-api/types/alta-crafting/icookinggarnishmarker)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingGarnishComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-garnishitem" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{" garnishItem"}</code> | Cached `CookingGarnish` behind `GarnishItem`. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The garnish pickup. |

</details>

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-cooking-icookinggarnishmarker-cookingplayer" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" Alta.Cooking.ICookingGarnishMarker.CookingPlayer { get; }"}</code> | The player who last interacted with the pickup. |
| <Link id="m-alta-cooking-icookinggarnishmarker-garnishitem" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{" Alta.Cooking.ICookingGarnishMarker.GarnishItem { get; }"}</code> | The `CookingGarnish` on the pickup's item, looked up once. Logs an error if it's missing. |

</details>

---
title: "CookingStage.Stage"
description: "How cooked a food item is: burnt, cooked, ripe or unripe."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingStage.Stage

An **enum** in `Root.Township`, `Alta.Cooking`.

How cooked a food item is: burnt, cooked, ripe or unripe. Held in `CookingStage.stage` and read by the edible page provider.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`CookingStage`](/game-api/types/alta-crafting/cookingstage)

## Values

| Member |
| --- |
| <Link id="m-burnt" /><code>{"Burnt = 0"}</code> |
| <Link id="m-cooked" /><code>{"Cooked = 1"}</code> |
| <Link id="m-ripe" /><code>{"Ripe = 2"}</code> |
| <Link id="m-unripe" /><code>{"Unripe = 3"}</code> |

## Used in

Members of other types that take, return or hold a `Stage`:

[`CookingStage.stage`](/game-api/types/alta-crafting/cookingstage#m-stage).

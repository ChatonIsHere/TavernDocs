---
title: "ICookableSettings"
description: "Internal settings shared by cookables and cooking points: whether the item can burn and its cooking temperatures."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICookableSettings

An **internal interface** in `Root.Township`, `Alta.Cooking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal settings shared by cookables and cooking points: whether the item can burn and its cooking temperatures.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`Cookable`](/game-api/types/alta-crafting/cookable), [`CookingPointSettings`](/game-api/types/alta-crafting/cookingpointsettings)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cookingtemperatures" /><code><Link to="/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" "}<Link to="/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" { get; }"}</code> | The temperatures the item cooks and burns at. |
| <Link id="m-isburnable" /><code>{"bool IsBurnable { get; }"}</code> | Whether the item can burn. |

## Used in

Members of other types that take, return or hold a `ICookableSettings`:

[`CookingPoint.cookable`](/game-api/types/alta-crafting/cookingpoint#m-cookable).

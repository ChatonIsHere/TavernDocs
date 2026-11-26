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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`Cookable`](/mod/game-api/types/alta-crafting/cookable), [`CookingPointSettings`](/mod/game-api/types/alta-crafting/cookingpointsettings)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cookingtemperatures" /><code><Link to="/mod/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" { get; }"}</code> | <span className="api-desc">The temperatures the item cooks and burns at.</span> |
| <Link id="m-isburnable" /><code>{"bool IsBurnable { get; }"}</code> | <span className="api-desc">Whether the item can burn.</span> |

## Used in

Members of other types that take, return or hold a `ICookableSettings`:

<div className="api-used-in">

[`CookingPoint.cookable`](/mod/game-api/types/alta-crafting/cookingpoint#m-cookable).

</div>

---
title: "CookingTemperatureDuration"
description: "A temperature and the time food must spend at it, used for the weak, optimal and burning thresholds in CookingTemperatures."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingTemperatureDuration

A **class** in `Root.Township`, `Alta.Cooking`.

A temperature and the time food must spend at it, used for the weak, optimal and burning thresholds in `CookingTemperatures`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingTemperatureDuration(float temperature, float duration)"}</code> | <span className="api-desc">Creates a `CookingTemperatureDuration` from `temperature` and `duration`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">Backing field for `Duration`.</span> |
| <Link id="m-temperature" /><code>{"private float temperature"}</code> | <span className="api-desc">Backing field for `Temperature`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | <span className="api-desc">Seconds needed at this temperature.</span> |
| <Link id="m-temperature-2" /><code>{"float Temperature { get; }"}</code> | <span className="api-desc">The temperature threshold.</span> |

## Used in

Members of other types that take, return or hold a `CookingTemperatureDuration`:

<div className="api-used-in">

[`CookingTemperatures.burningCooking`](/mod/game-api/types/alta-crafting/cookingtemperatures#m-burningcooking), [`CookingTemperatures.BurningCooking`](/mod/game-api/types/alta-crafting/cookingtemperatures#m-burningcooking-2), [`CookingTemperatures.optimalCooking`](/mod/game-api/types/alta-crafting/cookingtemperatures#m-optimalcooking), [`CookingTemperatures.OptimalCooking`](/mod/game-api/types/alta-crafting/cookingtemperatures#m-optimalcooking-2), [`CookingTemperatures.weakCooking`](/mod/game-api/types/alta-crafting/cookingtemperatures#m-weakcooking), [`CookingTemperatures.WeakCooking`](/mod/game-api/types/alta-crafting/cookingtemperatures#m-weakcooking-2).

</div>

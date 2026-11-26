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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingTemperatureDuration(float temperature, float duration)"}</code> | Creates a `CookingTemperatureDuration` from `temperature` and `duration`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Backing field for `Duration`. |
| <Link id="m-temperature" /><code>{"private float temperature"}</code> | Backing field for `Temperature`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | Seconds needed at this temperature. |
| <Link id="m-temperature-2" /><code>{"float Temperature { get; }"}</code> | The temperature threshold. |

## Used in

Members of other types that take, return or hold a `CookingTemperatureDuration`:

[`CookingTemperatures.burningCooking`](/game-api/types/alta-crafting/cookingtemperatures#m-burningcooking), [`CookingTemperatures.BurningCooking`](/game-api/types/alta-crafting/cookingtemperatures#m-burningcooking-2), [`CookingTemperatures.optimalCooking`](/game-api/types/alta-crafting/cookingtemperatures#m-optimalcooking), [`CookingTemperatures.OptimalCooking`](/game-api/types/alta-crafting/cookingtemperatures#m-optimalcooking-2), [`CookingTemperatures.weakCooking`](/game-api/types/alta-crafting/cookingtemperatures#m-weakcooking), [`CookingTemperatures.WeakCooking`](/game-api/types/alta-crafting/cookingtemperatures#m-weakcooking-2).

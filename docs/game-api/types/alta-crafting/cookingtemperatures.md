---
title: "CookingTemperatures"
description: "Temperature bands and times for cooking food: weak, optimal and burning, plus an instant burn point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingTemperatures

A **class** in `Root.Township`, `Alta.Cooking`.

Temperature bands and times for cooking food: weak, optimal and burning, plus an instant burn point.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingTemperatures()"}</code> | Creates a `CookingTemperatures` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burningcooking" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" burningCooking"}</code> | Backing field for `BurningCooking`. |
| <Link id="m-instantburntemperature" /><code>{"private float instantBurnTemperature"}</code> | Backing field for `InstantBurnTemperature`. |
| <Link id="m-optimalcooking" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" optimalCooking"}</code> | Backing field for `OptimalCooking`. |
| <Link id="m-weakcooking" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" weakCooking"}</code> | Backing field for `WeakCooking`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-burningcooking-2" /><code><Link to="/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" BurningCooking { get; }"}</code> | Temperature and time at which food burns. Default 200 for 10. |
| <Link id="m-instantburntemperature-2" /><code>{"float InstantBurnTemperature { get; }"}</code> | Temperature at which food burns straight away. Default 220. |
| <Link id="m-optimalcooking-2" /><code><Link to="/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" OptimalCooking { get; }"}</code> | Temperature and time for the best cooking. Default 180 for 30. |
| <Link id="m-weakcooking-2" /><code><Link to="/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" WeakCooking { get; }"}</code> | Lowest temperature that cooks, and how long it takes. Default 80 for 60. |

## Used in

Members of other types that take, return or hold a `CookingTemperatures`:

[`Cookable.cookingTemperatures`](/game-api/types/alta-crafting/cookable#m-cookingtemperatures), [`Cookable.CookingTemperatures`](/game-api/types/alta-crafting/cookable#m-cookingtemperatures-2), [`CookingPointSettings.cookingTemperatures`](/game-api/types/alta-crafting/cookingpointsettings#m-cookingtemperatures), [`CookingPointSettings.CookingTemperatures`](/game-api/types/alta-crafting/cookingpointsettings#m-cookingtemperatures-2), [`ICookableSettings.CookingTemperatures`](/game-api/types/alta-crafting/icookablesettings#m-cookingtemperatures).

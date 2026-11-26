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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingTemperatures()"}</code> | <span className="api-desc">Creates a `CookingTemperatures` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burningcooking" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" burningCooking"}</code> | <span className="api-desc">Backing field for `BurningCooking`.</span> |
| <Link id="m-instantburntemperature" /><code>{"private float instantBurnTemperature"}</code> | <span className="api-desc">Backing field for `InstantBurnTemperature`.</span> |
| <Link id="m-optimalcooking" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" optimalCooking"}</code> | <span className="api-desc">Backing field for `OptimalCooking`.</span> |
| <Link id="m-weakcooking" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" weakCooking"}</code> | <span className="api-desc">Backing field for `WeakCooking`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-burningcooking-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" BurningCooking { get; }"}</code> | <span className="api-desc">Temperature and time at which food burns. Default 200 for 10.</span> |
| <Link id="m-instantburntemperature-2" /><code>{"float InstantBurnTemperature { get; }"}</code> | <span className="api-desc">Temperature at which food burns straight away. Default 220.</span> |
| <Link id="m-optimalcooking-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" OptimalCooking { get; }"}</code> | <span className="api-desc">Temperature and time for the best cooking. Default 180 for 30.</span> |
| <Link id="m-weakcooking-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookingtemperatureduration">{"CookingTemperatureDuration"}</Link>{" WeakCooking { get; }"}</code> | <span className="api-desc">Lowest temperature that cooks, and how long it takes. Default 80 for 60.</span> |

## Used in

Members of other types that take, return or hold a `CookingTemperatures`:

<div className="api-used-in">

[`Cookable.cookingTemperatures`](/mod/game-api/types/alta-crafting/cookable#m-cookingtemperatures), [`Cookable.CookingTemperatures`](/mod/game-api/types/alta-crafting/cookable#m-cookingtemperatures-2), [`CookingPointSettings.cookingTemperatures`](/mod/game-api/types/alta-crafting/cookingpointsettings#m-cookingtemperatures), [`CookingPointSettings.CookingTemperatures`](/mod/game-api/types/alta-crafting/cookingpointsettings#m-cookingtemperatures-2), [`ICookableSettings.CookingTemperatures`](/mod/game-api/types/alta-crafting/icookablesettings#m-cookingtemperatures).

</div>

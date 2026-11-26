---
title: "CookingPointSettings"
description: "ICookableSettings component that gives an object its cooking temperatures and whether it can burn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingPointSettings

A **class** in `Root.Township`, `Alta.Cooking`.

`ICookableSettings` component that gives an object its cooking temperatures and whether it can burn.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`ICookableSettings`](/game-api/types/alta-crafting/icookablesettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingPointSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cookingtemperatures" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" cookingTemperatures"}</code> | Backing field for `CookingTemperatures`. |
| <Link id="m-isburnable" /><code>{"private bool isBurnable"}</code> | Backing field for `IsBurnable`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cookingtemperatures-2" /><code><Link to="/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" "}<Link to="/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" { get; }"}</code> | The temperature settings used to cook this object. |
| <Link id="m-isburnable-2" /><code>{"bool IsBurnable { get; }"}</code> | Whether this object can burn after it is cooked. |

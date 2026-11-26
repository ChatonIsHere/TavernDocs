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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`ICookableSettings`](/mod/game-api/types/alta-crafting/icookablesettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingPointSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cookingtemperatures" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" cookingTemperatures"}</code> | <span className="api-desc">Backing field for `CookingTemperatures`.</span> |
| <Link id="m-isburnable" /><code>{"private bool isBurnable"}</code> | <span className="api-desc">Backing field for `IsBurnable`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cookingtemperatures-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/cookingtemperatures">{"CookingTemperatures"}</Link>{" { get; }"}</code> | <span className="api-desc">The temperature settings used to cook this object.</span> |
| <Link id="m-isburnable-2" /><code>{"bool IsBurnable { get; }"}</code> | <span className="api-desc">Whether this object can burn after it is cooked.</span> |

---
title: "CookingGarnish"
description: "Item data for a garnish added to a stew."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingGarnish

A **class** in `Root.Township`, `Alta.Cooking`.

Item data for a garnish added to a stew. Its own effects are added to the stew, and its effect multipliers then scale matching effects already in it.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`CookableItem`](/game-api/types/alta-crafting/cookableitem)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CookingGarnish()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectmultipliers" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effectMultipliers"}</code> | Backing field for `EffectMultipliers`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effectmultipliers-2" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] EffectMultipliers { get; }"}</code> | Effects this garnish scales, each with a strength multiplier, applied after all stew effects are combined. |

## Used in

Members of other types that take, return or hold a `CookingGarnish`:

[`CookingGarnishComponent.Alta.Cooking.ICookingGarnishMarker.GarnishItem`](/game-api/types/alta-crafting/cookinggarnishcomponent#m-alta-cooking-icookinggarnishmarker-garnishitem), [`CookingGarnishComponent.garnishItem`](/game-api/types/alta-crafting/cookinggarnishcomponent#m-garnishitem), [`ICookingGarnishMarker.GarnishItem`](/game-api/types/alta-crafting/icookinggarnishmarker#m-garnishitem), [`StewContentArguments.Garnishes`](/game-api/types/alta-crafting/stewcontentarguments#m-garnishes), [`StewManager.AddGarnish`](/game-api/types/alta-crafting/stewmanager#m-addgarnish), [`StewManager.garnishes`](/game-api/types/alta-crafting/stewmanager#m-garnishes), [`StewManager.Garnishes`](/game-api/types/alta-crafting/stewmanager#m-garnishes-2), [`StewRecipe.HandleGarnishModifiers`](/game-api/types/alta-crafting/stewrecipe#m-handlegarnishmodifiers).

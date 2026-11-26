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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`CookableItem`](/mod/game-api/types/alta-crafting/cookableitem)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingGarnish()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectmultipliers" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effectMultipliers"}</code> | Backing field for `EffectMultipliers`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effectmultipliers-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] EffectMultipliers { get; }"}</code> | Effects this garnish scales, each with a strength multiplier, applied after all stew effects are combined. |

## Used in

Members of other types that take, return or hold a `CookingGarnish`:

[`CookingGarnishComponent.Alta.Cooking.ICookingGarnishMarker.GarnishItem`](/mod/game-api/types/alta-crafting/cookinggarnishcomponent#m-alta-cooking-icookinggarnishmarker-garnishitem), [`CookingGarnishComponent.garnishItem`](/mod/game-api/types/alta-crafting/cookinggarnishcomponent#m-garnishitem), [`ICookingGarnishMarker.GarnishItem`](/mod/game-api/types/alta-crafting/icookinggarnishmarker#m-garnishitem), [`StewContentArguments.Garnishes`](/mod/game-api/types/alta-crafting/stewcontentarguments#m-garnishes), [`StewManager.AddGarnish`](/mod/game-api/types/alta-crafting/stewmanager#m-addgarnish), [`StewManager.garnishes`](/mod/game-api/types/alta-crafting/stewmanager#m-garnishes), [`StewManager.Garnishes`](/mod/game-api/types/alta-crafting/stewmanager#m-garnishes-2), [`StewRecipe.HandleGarnishModifiers`](/mod/game-api/types/alta-crafting/stewrecipe#m-handlegarnishmodifiers).

---
title: "StewContentArguments"
description: "What is in a stew, passed to StewRecipe.GetStewEffects to work out the stew's effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewContentArguments

A **struct** in `Root.Township`, `Alta.Cooking`.

What is in a stew, passed to `StewRecipe.GetStewEffects` to work out the stew's effects.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentrecipe" /><code><Link to="/mod/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" CurrentRecipe { get; set; }"}</code> | The stew recipe that matched. |
| <Link id="m-garnishes" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> Garnishes { get; set; }"}</code> | Garnishes added to the stew. |
| <Link id="m-ingredients" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Ingredients { get; set; }"}</code> | The cookable items in the stew. |
| <Link id="m-liquidbase" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" LiquidBase { get; set; }"}</code> | The liquid the stew is made with. |
| <Link id="m-stew" /><code><Link to="/mod/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" Stew { get; set; }"}</code> | The stew component itself. |

## Used in

Members of other types that take, return or hold a `StewContentArguments`:

[`StewRecipe.GetStewEffects`](/mod/game-api/types/alta-crafting/stewrecipe#m-getsteweffects).

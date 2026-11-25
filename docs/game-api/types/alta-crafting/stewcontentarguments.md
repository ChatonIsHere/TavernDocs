---
title: "StewContentArguments"
description: "struct StewContentArguments in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewContentArguments

A **struct** in `Root.Township`, `Alta.Cooking`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Properties

| Member |
| --- |
| <Link id="m-currentrecipe" /><code><Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" CurrentRecipe { get; set; }"}</code> |
| <Link id="m-garnishes" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> Garnishes { get; set; }"}</code> |
| <Link id="m-ingredients" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Ingredients { get; set; }"}</code> |
| <Link id="m-liquidbase" /><code><Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" LiquidBase { get; set; }"}</code> |
| <Link id="m-stew" /><code><Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" Stew { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `StewContentArguments`:

[`StewRecipe.GetStewEffects`](/game-api/types/alta-crafting/stewrecipe#m-getsteweffects).

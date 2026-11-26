---
title: "SpecificSpawnItemTask.RecipeFilter"
description: "Flags for which kinds of item creation count towards a spawn-item task: followed or unfollowed recipe, smelting or generic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificSpawnItemTask.RecipeFilter

An **enum** in `Root.Township`, the global namespace.

Flags for which kinds of item creation count towards a spawn-item task: followed or unfollowed recipe, smelting or generic. All flags are on by default.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SpecificSpawnItemTask`](/mod/game-api/types/global-s/specificspawnitemtask)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-followed" /><code>{"Followed = 1"}</code> |
| <Link id="m-generic" /><code>{"Generic = 8"}</code> |
| <Link id="m-notfollowed" /><code>{"NotFollowed = 2"}</code> |
| <Link id="m-smelt" /><code>{"Smelt = 4"}</code> |

## Used in

Members of other types that take, return or hold a `RecipeFilter`:

<div className="api-used-in">

[`SpecificSpawnItemTask.recipeFilter`](/mod/game-api/types/global-s/specificspawnitemtask#m-recipefilter), [`SpecificSpawnItemTaskArgument.FollowedRecipe`](/mod/game-api/types/global-s/specificspawnitemtaskargument#m-followedrecipe), [`SpecificSpawnItemTaskArgument.SpecificSpawnItemTaskArgument`](/mod/game-api/types/global-s/specificspawnitemtaskargument#m-ctor).

</div>

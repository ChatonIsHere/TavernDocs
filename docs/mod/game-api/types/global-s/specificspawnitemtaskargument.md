---
title: "SpecificSpawnItemTaskArgument"
description: "Game task action argument sent when a player produces an item, by smelting, carving timber or finishing a crafting project."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificSpawnItemTaskArgument

A **class** in `Root.Township`, the global namespace.

Game task action argument sent when a player produces an item, by smelting, carving timber or finishing a crafting project. Server.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GameTaskActionArgument`](/mod/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`SpecificSpawnItemTask`](/mod/game-api/types/global-s/specificspawnitemtask)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecificSpawnItemTaskArgument(uint producedHash, "}<Link to="/mod/game-api/types/global-s/specificspawnitemtask-recipefilter">{"SpecificSpawnItemTask.RecipeFilter"}</Link>{" filter)"}</code> | <span className="api-desc">Creates a `SpecificSpawnItemTaskArgument` from `producedHash` and `followedRecipe`.</span> |
| <Link id="m-ctor-2" /><code>{"SpecificSpawnItemTaskArgument(uint producedHash, bool followedRecipe)"}</code> | <span className="api-desc">Creates a `SpecificSpawnItemTaskArgument` from `producedHash` and `followedRecipe`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Always `GameActionChannel.SpawnItem`.</span> |
| <Link id="m-followedrecipe" /><code><Link to="/mod/game-api/types/global-s/specificspawnitemtask-recipefilter">{"SpecificSpawnItemTask.RecipeFilter"}</Link>{" FollowedRecipe { get; }"}</code> | <span className="api-desc">How the item was made, as a `SpecificSpawnItemTask.RecipeFilter` (smelt, generic, followed or not followed recipe).</span> |
| <Link id="m-producedhash" /><code>{"uint ProducedHash { get; }"}</code> | <span className="api-desc">Prefab hash of the item produced.</span> |

## Used in

Members of other types that take, return or hold a `SpecificSpawnItemTaskArgument`:

<div className="api-used-in">

[`SpecificSpawnItemTask.IsValid`](/mod/game-api/types/global-s/specificspawnitemtask#m-isvalid).

</div>

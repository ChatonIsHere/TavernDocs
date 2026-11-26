---
title: "SpecificSpawnItemTaskArgument"
description: "Game task action argument sent when a player produces an item, by smelting, carving timber or finishing a crafting project."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificSpawnItemTaskArgument

A **class** in `Root.Township`, no namespace.

Game task action argument sent when a player produces an item, by smelting, carving timber or finishing a crafting project. Server.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GameTaskActionArgument`](/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`SpecificSpawnItemTask`](/game-api/types/global-s/specificspawnitemtask)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecificSpawnItemTaskArgument(uint producedHash, "}<Link to="/game-api/types/global-s/specificspawnitemtask-recipefilter">{"SpecificSpawnItemTask.RecipeFilter"}</Link>{" filter)"}</code> | Creates a `SpecificSpawnItemTaskArgument` from `producedHash` and `followedRecipe`. |
| <Link id="m-ctor-2" /><code>{"SpecificSpawnItemTaskArgument(uint producedHash, bool followedRecipe)"}</code> | Creates a `SpecificSpawnItemTaskArgument` from `producedHash` and `followedRecipe`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.SpawnItem`. |
| <Link id="m-followedrecipe" /><code><Link to="/game-api/types/global-s/specificspawnitemtask-recipefilter">{"SpecificSpawnItemTask.RecipeFilter"}</Link>{" FollowedRecipe { get; }"}</code> | How the item was made, as a `SpecificSpawnItemTask.RecipeFilter` (smelt, generic, followed or not followed recipe). |
| <Link id="m-producedhash" /><code>{"uint ProducedHash { get; }"}</code> | Prefab hash of the item produced. |

## Used in

Members of other types that take, return or hold a `SpecificSpawnItemTaskArgument`:

[`SpecificSpawnItemTask.IsValid`](/game-api/types/global-s/specificspawnitemtask#m-isvalid).

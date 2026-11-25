---
title: "SpecificSpawnItemTaskArgument"
description: "Smelter (filter Smelt), GenericCraftingProject (filter Generic), TimberBlock (chiselling)"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificSpawnItemTaskArgument

A **class** in `Root.Township`, no namespace.

`Smelter` (filter `Smelt`), `GenericCraftingProject` (filter `Generic`), `TimberBlock` (chiselling)

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GameTaskActionArgument`](/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`SpecificSpawnItemTask`](/game-api/types/global-s/specificspawnitemtask)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpecificSpawnItemTaskArgument(uint producedHash, "}<Link to="/game-api/types/global-s/specificspawnitemtask-recipefilter">{"SpecificSpawnItemTask.RecipeFilter"}</Link>{" filter)"}</code> |
| <Link id="m-ctor-2" /><code>{"SpecificSpawnItemTaskArgument(uint producedHash, bool followedRecipe)"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> |
| <Link id="m-followedrecipe" /><code><Link to="/game-api/types/global-s/specificspawnitemtask-recipefilter">{"SpecificSpawnItemTask.RecipeFilter"}</Link>{" FollowedRecipe { get; }"}</code> |
| <Link id="m-producedhash" /><code>{"uint ProducedHash { get; }"}</code> |

## Used in

Members of other types that take, return or hold a `SpecificSpawnItemTaskArgument`:

[`SpecificSpawnItemTask.IsValid`](/game-api/types/global-s/specificspawnitemtask#m-isvalid).

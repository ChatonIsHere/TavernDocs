---
title: "SpecificCraftTaskArgument"
description: "Game task action argument sent when a player joins one crafting part into another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificCraftTaskArgument

A **class** in `Root.Township`, the global namespace.

Game task action argument sent when a player joins one crafting part into another. Server.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GameTaskActionArgument`](/mod/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`SpecificCraftTask`](/mod/game-api/types/global-s/specificcrafttask)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecificCraftTaskArgument("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" slot, "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insert)"}</code> | <span className="api-desc">Creates a `SpecificCraftTaskArgument` from `slot` and `insert`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Always `GameActionChannel.CraftItem`.</span> |
| <Link id="m-insert" /><code><Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" Insert { get; }"}</code> | <span className="api-desc">The part that was inserted.</span> |
| <Link id="m-slot" /><code><Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" Slot { get; }"}</code> | <span className="api-desc">The top-level part it was inserted into.</span> |

## Used in

Members of other types that take, return or hold a `SpecificCraftTaskArgument`:

<div className="api-used-in">

[`SpecificCraftTask.IsValid`](/mod/game-api/types/global-s/specificcrafttask#m-isvalid).

</div>

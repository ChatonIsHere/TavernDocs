---
title: "SpecificCraftTaskArgument"
description: "Game task action argument sent when a player joins one crafting part into another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificCraftTaskArgument

A **class** in `Root.Township`, no namespace.

Game task action argument sent when a player joins one crafting part into another. Server.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GameTaskActionArgument`](/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`SpecificCraftTask`](/game-api/types/global-s/specificcrafttask)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpecificCraftTaskArgument("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" slot, "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insert)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.CraftItem`. |
| <Link id="m-insert" /><code><Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" Insert { get; }"}</code> | The part that was inserted. |
| <Link id="m-slot" /><code><Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" Slot { get; }"}</code> | The top-level part it was inserted into. |

## Used in

Members of other types that take, return or hold a `SpecificCraftTaskArgument`:

[`SpecificCraftTask.IsValid`](/game-api/types/global-s/specificcrafttask#m-isvalid).

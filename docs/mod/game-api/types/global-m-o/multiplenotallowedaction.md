---
title: "MultipleNotAllowedAction"
description: "What an Interactable does when a new grab isn't allowed alongside current ones: Replace (drop the old one) or Block (refuse the new one)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultipleNotAllowedAction

An **enum** in `Root.Township`, the global namespace.

What an `Interactable` does when a new grab isn't allowed alongside current ones: Replace (drop the old one) or Block (refuse the new one). NotSet uses the type's default: Replace for pickups, Block otherwise.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)

## Values

| Member |
| --- |
| <Link id="m-block" /><code>{"Block = 2"}</code> |
| <Link id="m-notset" /><code>{"NotSet = 0"}</code> |
| <Link id="m-replace" /><code>{"Replace = 1"}</code> |

## Used in

Members of other types that take, return or hold a `MultipleNotAllowedAction`:

<div className="api-used-in">

[`Interactable.DefaultMultipleBlockedAction`](/mod/game-api/types/global-i-l/interactable#m-defaultmultipleblockedaction), [`Interactable.multipleNotAllowedAction`](/mod/game-api/types/global-i-l/interactable#m-multiplenotallowedaction), [`Pickup.DefaultMultipleBlockedAction`](/mod/game-api/types/global-p/pickup#m-defaultmultipleblockedaction), [`PickupContainer.DefaultMultipleBlockedAction`](/mod/game-api/types/global-p/pickupcontainer#m-defaultmultipleblockedaction).

</div>

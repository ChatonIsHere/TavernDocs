---
title: "InventoryType"
description: "Whether an inventory change in the pickup event stream log was in a world dock or a dock the player owns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InventoryType

An **enum** in `Root.Township`, `ATT.PlayerStates`.

Whether an inventory change in the pickup event stream log was in a world dock or a dock the player owns.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Values

| Member |
| --- |
| <Link id="m-player" /><code>{"Player = 1"}</code> |
| <Link id="m-world" /><code>{"World = 0"}</code> |

## Used in

Members of other types that take, return or hold a `InventoryType`:

[`PickupActionData.InventoryType`](/mod/game-api/types/alta-items/pickupactiondata#m-inventorytype), [`InventoryChangeData.InventoryType`](/mod/game-api/types/game-other-namespaces/inventorychangedata#m-inventorytype).

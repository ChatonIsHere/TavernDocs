---
title: "IPointTowards"
description: "Something that can be turned to face a point, such as DrawBridgeRangeLogic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPointTowards

An **interface** in `Root.Township`, the global namespace.

Something that can be turned to face a point, such as `DrawBridgeRangeLogic`. `PointTowardsEachotherPart` points two spawned objects at each other.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`DrawBridgeRangeLogic`](/mod/game-api/types/global-c-d/drawbridgerangelogic)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-origin" /><code>{"Vector3 Origin { get; }"}</code> | The point it turns around. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pointtowards" /><code>{"void PointTowards(Vector3 target)"}</code> | Turns it to face the target position. |

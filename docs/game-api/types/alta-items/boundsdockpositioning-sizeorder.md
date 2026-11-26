---
title: "BoundsDockPositioning.SizeOrder"
description: "Order of an item's bounds axes from largest to smallest, used by BoundsDockPositioning to pick a rotation that lays the item's longest side along X."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoundsDockPositioning.SizeOrder

An **private enum** in `Root.Township`, `Alta.Inventory`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Order of an item's bounds axes from largest to smallest, used by `BoundsDockPositioning` to pick a rotation that lays the item's longest side along X.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`BoundsDockPositioning`](/game-api/types/alta-items/boundsdockpositioning)

## Values

| Member |
| --- |
| <Link id="m-xyz" /><code>{"XYZ = 0"}</code> |
| <Link id="m-xzy" /><code>{"XZY = 1"}</code> |
| <Link id="m-yxz" /><code>{"YXZ = 2"}</code> |
| <Link id="m-yzx" /><code>{"YZX = 3"}</code> |
| <Link id="m-zxy" /><code>{"ZXY = 4"}</code> |
| <Link id="m-zyx" /><code>{"ZYX = 5"}</code> |

## Used in

Members of other types that take, return or hold a `SizeOrder`:

[`BoundsDockPositioning.GetRotation`](/game-api/types/alta-items/boundsdockpositioning#m-getrotation).

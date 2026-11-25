---
title: "BoundsDockPositioning"
description: "class BoundsDockPositioning in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoundsDockPositioning

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`SizeOrder`](/game-api/types/alta-items/boundsdockpositioning-sizeorder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoundsDockPositioning()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |  |
| <Link id="m-limits" /><code>{"private Bounds limits"}</code> |  |
| <Link id="m-xyratioweight" /><code>{"private float xyRatioWeight"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-getrotation" /><code>{"private Quaternion GetRotation("}<Link to="/game-api/types/alta-items/boundsdockpositioning-sizeorder">{"BoundsDockPositioning.SizeOrder"}</Link>{" sizeOrder)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-position" /><code>{"private bool Position("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling, out Vector3 position, out Quaternion rotation, out Vector3 scale)"}</code> |  |
| <Link id="m-test" /><code>{"private void Test()"}</code> |  |

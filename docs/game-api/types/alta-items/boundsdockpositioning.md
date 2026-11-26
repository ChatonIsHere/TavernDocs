---
title: "BoundsDockPositioning"
description: "Overrides a dock's item placement: turns each docked pickup so its longest side lines up with the X axis and shrinks it to fit limits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoundsDockPositioning

A **class** in `Root.Township`, `Alta.Inventory`.

Overrides a dock's item placement: turns each docked pickup so its longest side lines up with the X axis and shrinks it to fit `limits`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`SizeOrder`](/game-api/types/alta-items/boundsdockpositioning-sizeorder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoundsDockPositioning()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock this overrides. Found automatically. |
| <Link id="m-limits" /><code>{"private Bounds limits"}</code> | Box the item must fit in. Its size should be X larger than Y larger than Z. |
| <Link id="m-xyratioweight" /><code>{"private float xyRatioWeight"}</code> | How much longer Y must be than X (times this) before the item is stood upright. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets itself as the dock's `OverridePositioning`. |
| <Link id="m-getrotation" /><code>{"private Quaternion GetRotation("}<Link to="/game-api/types/alta-items/boundsdockpositioning-sizeorder">{"BoundsDockPositioning.SizeOrder"}</Link>{" sizeOrder)"}</code> | Maps a size order (which axis is longest) to the rotation that lines it up. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws the `limits` box in the editor. |
| <Link id="m-position" /><code>{"private bool Position("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling, out Vector3 position, out Quaternion rotation, out Vector3 scale)"}</code> | Works out rotation, scale (never above 1) and position for a pickup from its bounds. Returns false with no pickup. |
| <Link id="m-test" /><code>{"private void Test()"}</code> | Editor context menu: lays out every child pickup as if docked. |

</details>

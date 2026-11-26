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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`SizeOrder`](/mod/game-api/types/alta-items/boundsdockpositioning-sizeorder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoundsDockPositioning()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">The dock this overrides. Found automatically.</span> |
| <Link id="m-limits" /><code>{"private Bounds limits"}</code> | <span className="api-desc">Box the item must fit in. Its size should be X larger than Y larger than Z.</span> |
| <Link id="m-xyratioweight" /><code>{"private float xyRatioWeight"}</code> | <span className="api-desc">How much longer Y must be than X (times this) before the item is stood upright.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets itself as the dock's `OverridePositioning`.</span> |
| <Link id="m-getrotation" /><code>{"private Quaternion GetRotation("}<Link to="/mod/game-api/types/alta-items/boundsdockpositioning-sizeorder">{"BoundsDockPositioning.SizeOrder"}</Link>{" sizeOrder)"}</code> | <span className="api-desc">Maps a size order (which axis is longest) to the rotation that lines it up.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the `limits` box in the editor.</span> |
| <Link id="m-position" /><code>{"private bool Position("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling, out Vector3 position, out Quaternion rotation, out Vector3 scale)"}</code> | <span className="api-desc">Works out rotation, scale (never above 1) and position for a pickup from its bounds. Returns false with no pickup.</span> |
| <Link id="m-test" /><code>{"private void Test()"}</code> | <span className="api-desc">Editor context menu: lays out every child pickup as if docked.</span> |

</details>

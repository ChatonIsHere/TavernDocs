---
title: "AccessibleDocks.DockSetup"
description: "One body dock handled by AccessibleDocks: its normal position and the position it moves to in accessible mode, plus a number label that turns to face the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccessibleDocks.DockSetup

A **private class** in `Root.Township`, `Alta.Character`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One body dock handled by `AccessibleDocks`: its normal position and the position it moves to in accessible mode, plus a number label that turns to face the centre.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`AccessibleDocks`](/game-api/types/alta-player/accessibledocks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DockSetup()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accessiblenumberrotation" /><code>{"Quaternion accessibleNumberRotation"}</code> | Local rotation of the number label in accessible mode, facing the centre. |
| <Link id="m-accessibleposition" /><code>{"Vector3 accessiblePosition"}</code> | Local position of the dock in accessible mode. |
| <Link id="m-dock" /><code>{"Transform dock"}</code> | The dock transform that is moved. |
| <Link id="m-number" /><code>{"Transform number"}</code> | The number label transform that is turned. |
| <Link id="m-originalnumberrotation" /><code>{"Quaternion originalNumberRotation"}</code> | The number label's normal local rotation. |
| <Link id="m-originalposition" /><code>{"Vector3 originalPosition"}</code> | The dock's normal local position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupnumber" /><code>{"void SetupNumber(Vector3 centerPosition)"}</code> | Saves the dock's current position and number rotation as the originals, and aims the number at the given centre for accessible mode. |
| <Link id="m-update" /><code>{"void Update(bool isAccessible, float lerp, float rotationLerp)"}</code> | Moves the dock and turns its number towards the target for the mode. With speeds given it steps towards them, without it snaps. |
| <Link id="m-update-2" /><code>{"void Update(bool isAccessible)"}</code> | Moves the dock and turns its number towards the target for the mode. With speeds given it steps towards them, without it snaps. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettargetposition" /><code>{"private void GetTargetPosition(bool isAccessible, out Vector3 targetPosition, out Quaternion targetNumberRotation)"}</code> | Picks the dock position and number rotation for accessible or normal mode. |

</details>

## Used in

Members of other types that take, return or hold a `DockSetup`:

[`AccessibleDocks.docksSetup`](/game-api/types/alta-player/accessibledocks#m-dockssetup).

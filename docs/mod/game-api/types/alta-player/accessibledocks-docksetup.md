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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`AccessibleDocks`](/mod/game-api/types/alta-player/accessibledocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockSetup()"}</code> | <span className="api-desc">Creates an `AccessibleDocks.DockSetup` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accessiblenumberrotation" /><code>{"Quaternion accessibleNumberRotation"}</code> | <span className="api-desc">Local rotation of the number label in accessible mode, facing the centre.</span> |
| <Link id="m-accessibleposition" /><code>{"Vector3 accessiblePosition"}</code> | <span className="api-desc">Local position of the dock in accessible mode.</span> |
| <Link id="m-dock" /><code>{"Transform dock"}</code> | <span className="api-desc">The dock transform that is moved.</span> |
| <Link id="m-number" /><code>{"Transform number"}</code> | <span className="api-desc">The number label transform that is turned.</span> |
| <Link id="m-originalnumberrotation" /><code>{"Quaternion originalNumberRotation"}</code> | <span className="api-desc">The number label's normal local rotation.</span> |
| <Link id="m-originalposition" /><code>{"Vector3 originalPosition"}</code> | <span className="api-desc">The dock's normal local position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupnumber" /><code>{"void SetupNumber(Vector3 centerPosition)"}</code> | <span className="api-desc">Saves the dock's current position and number rotation as the originals, and aims the number at the given centre for accessible mode.</span> |
| <Link id="m-update" /><code>{"void Update(bool isAccessible, float lerp, float rotationLerp)"}</code> | <span className="api-desc">Moves the dock and turns its number towards the target for the mode. With speeds given it steps towards them, without it snaps.</span> |
| <Link id="m-update-2" /><code>{"void Update(bool isAccessible)"}</code> | <span className="api-desc">Moves the dock and turns its number towards the target for the mode. With speeds given it steps towards them, without it snaps.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettargetposition" /><code>{"private void GetTargetPosition(bool isAccessible, out Vector3 targetPosition, out Quaternion targetNumberRotation)"}</code> | <span className="api-desc">Picks the dock position and number rotation for accessible or normal mode.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DockSetup`:

<div className="api-used-in">

[`AccessibleDocks.docksSetup`](/mod/game-api/types/alta-player/accessibledocks#m-dockssetup).

</div>

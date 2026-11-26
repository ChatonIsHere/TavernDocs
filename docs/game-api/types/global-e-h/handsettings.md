---
title: "HandSettings"
description: "Settings asset for player hands, read by Hand from the player controller's settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandSettings

A **class** in `Root.Township`, no namespace.

Settings asset for player hands, read by `Hand` from the player controller's settings.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`HandSettings.Create`](/game-api/types/global-e-h/handsettings-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/handsettings-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandSettings()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armlength" /><code>{"private float armLength"}</code> | Arm reach (default 0.3). The hand joints clamp the held point to this distance from the shoulder. |
| <Link id="m-isalwaysrenderingpickupatikhand" /><code>{"private bool isAlwaysRenderingPickupAtIKHand"}</code> | Default for `Hand.IsAlwaysRenderingPickupAtIKHand`, copied when the hand is set up. On by default. |
| <Link id="m-isdebugging" /><code>{"private bool isDebugging"}</code> |  |
| <Link id="m-isfixingikhandtopickups" /><code>{"private bool isFixingIKHandToPickups"}</code> | When on, the hand calls `Detach` when an interaction ends. Off by default. |
| <Link id="m-ismovingcenterofmasstogrippoint" /><code>{"private bool isMovingCenterOfMassToGripPoint"}</code> | When on, grabbing an item moves its centre of mass to the grip point and letting go resets it. On by default. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armlength-2" /><code>{"float ArmLength { get; }"}</code> | Arm length (default 0.3). Limits how far a held item's joint target can be from the shoulder. |
| <Link id="m-isalwaysrenderingpickupatikhand-2" /><code>{"bool IsAlwaysRenderingPickupAtIKHand { get; }"}</code> | Draws held items at the IK hand. |
| <Link id="m-isdebugging-2" /><code>{"bool IsDebugging { get; }"}</code> | Debug flag. |
| <Link id="m-isfixingikhandtopickups-2" /><code>{"bool IsFixingIKHandToPickups { get; }"}</code> | Fixes the IK hand to held items. |
| <Link id="m-ismovingcenterofmasstogrippoint-2" /><code>{"bool IsMovingCenterOfMassToGripPoint { get; }"}</code> | Moves a held item's centre of mass to the grip point. |

## Used in

Members of other types that take, return or hold a `HandSettings`:

[`Hand.Settings`](/game-api/types/alta-player/hand#m-settings), [`PlayerControllerSettings.controllerSettings`](/game-api/types/alta-player/playercontrollersettings#m-controllersettings), [`PlayerControllerSettings.ControllerSettings`](/game-api/types/alta-player/playercontrollersettings#m-controllersettings-2), [`PlayerControllerSettings.handSettings`](/game-api/types/alta-player/playercontrollersettings#m-handsettings), [`PlayerControllerSettings.HandSettings`](/game-api/types/alta-player/playercontrollersettings#m-handsettings-2).

---
title: "HandSettings"
description: "Settings asset for player hands, read by Hand from the player controller's settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandSettings

A **class** in `Root.Township`, the global namespace.

Settings asset for player hands, read by `Hand` from the player controller's settings.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`HandSettings.Create`](/mod/game-api/types/global-e-h/handsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/handsettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armlength" /><code>{"private float armLength"}</code> | <span className="api-desc">Arm reach (default 0.3). The hand joints clamp the held point to this distance from the shoulder.</span> |
| <Link id="m-isalwaysrenderingpickupatikhand" /><code>{"private bool isAlwaysRenderingPickupAtIKHand"}</code> | <span className="api-desc">Default for `Hand.IsAlwaysRenderingPickupAtIKHand`, copied when the hand is set up. On by default.</span> |
| <Link id="m-isdebugging" /><code>{"private bool isDebugging"}</code> | <span className="api-desc">Backing field for `IsDebugging`.</span> |
| <Link id="m-isfixingikhandtopickups" /><code>{"private bool isFixingIKHandToPickups"}</code> | <span className="api-desc">When on, the hand calls `Detach` when an interaction ends. Off by default.</span> |
| <Link id="m-ismovingcenterofmasstogrippoint" /><code>{"private bool isMovingCenterOfMassToGripPoint"}</code> | <span className="api-desc">When on, grabbing an item moves its centre of mass to the grip point and letting go resets it. On by default.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armlength-2" /><code>{"float ArmLength { get; }"}</code> | <span className="api-desc">Arm length (default 0.3). Limits how far a held item's joint target can be from the shoulder.</span> |
| <Link id="m-isalwaysrenderingpickupatikhand-2" /><code>{"bool IsAlwaysRenderingPickupAtIKHand { get; }"}</code> | <span className="api-desc">Draws held items at the IK hand.</span> |
| <Link id="m-isdebugging-2" /><code>{"bool IsDebugging { get; }"}</code> | <span className="api-desc">Debug flag.</span> |
| <Link id="m-isfixingikhandtopickups-2" /><code>{"bool IsFixingIKHandToPickups { get; }"}</code> | <span className="api-desc">Fixes the IK hand to held items.</span> |
| <Link id="m-ismovingcenterofmasstogrippoint-2" /><code>{"bool IsMovingCenterOfMassToGripPoint { get; }"}</code> | <span className="api-desc">Moves a held item's centre of mass to the grip point.</span> |

## Used in

Members of other types that take, return or hold a `HandSettings`:

<div className="api-used-in">

[`Hand.Settings`](/mod/game-api/types/alta-player/hand#m-settings), [`PlayerControllerSettings.controllerSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-controllersettings), [`PlayerControllerSettings.ControllerSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-controllersettings-2), [`PlayerControllerSettings.handSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-handsettings), [`PlayerControllerSettings.HandSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-handsettings-2).

</div>

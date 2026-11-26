---
title: "IKControllSettings"
description: "Options passed to CharacterIKController.EnableIKControl and DisableIKControl, for example when the player leaves their body."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IKControllSettings

A **class** in `Root.Township`, the global namespace.

Options passed to `CharacterIKController.EnableIKControl` and `DisableIKControl`, for example when the player leaves their body.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IKControllSettings()"}</code> | Creates an `IKControllSettings` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controllermodestoenable" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"[] controllerModesToEnable"}</code> | Backing field for `ControllerModesToEnable`. |
| <Link id="m-isdisablingikcompletely" /><code>{"private bool isDisablingIKCompletely"}</code> | Backing field for `IsDisablingIKCompletely`. |
| <Link id="m-ismovingextensions" /><code>{"private bool isMovingExtensions"}</code> | Backing field for `IsMovingExtensions`. |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | Backing field for `IsNetworked`. |
| <Link id="m-isshowingghosthands" /><code>{"private bool isShowingGhostHands"}</code> | Backing field for `IsShowingGhostHands`. |
| <Link id="m-outofbodymessage" /><code>{"private string outOfBodyMessage"}</code> | Backing field for `OutOfBodyMessage`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controllermodestoenable-2" /><code><Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"[] ControllerModesToEnable { get; set; }"}</code> | Controller modes to turn on with the change. |
| <Link id="m-isdisablingikcompletely-2" /><code>{"bool IsDisablingIKCompletely { get; set; }"}</code> | When disabling, also turns off the IK component controllers. |
| <Link id="m-ismovingextensions-2" /><code>{"bool IsMovingExtensions { get; set; }"}</code> | Moves controller extension objects between the master hand and the body hand. On by default. |
| <Link id="m-isnetworked-2" /><code>{"bool IsNetworked { get; set; }"}</code> | Sends the change to other players when this is the local player. |
| <Link id="m-isshowingghosthands-2" /><code>{"bool IsShowingGhostHands { get; set; }"}</code> | When disabling, shows ghost hands at full alpha. On by default. |
| <Link id="m-outofbodymessage-2" /><code>{"string OutOfBodyMessage { get; set; }"}</code> | Message sent with a networked disable. |

## Used in

Members of other types that take, return or hold a `IKControllSettings`:

[`CharacterIKController.DisableIKControl`](/mod/game-api/types/global-c-d/characterikcontroller#m-disableikcontrol), [`CharacterIKController.EnableIKControl`](/mod/game-api/types/global-c-d/characterikcontroller#m-enableikcontrol).

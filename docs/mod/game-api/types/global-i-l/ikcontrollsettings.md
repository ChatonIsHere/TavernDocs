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
| <Link id="m-ctor" /><code>{"IKControllSettings()"}</code> | <span className="api-desc">Creates an `IKControllSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controllermodestoenable" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"[] controllerModesToEnable"}</code> | <span className="api-desc">Backing field for `ControllerModesToEnable`.</span> |
| <Link id="m-isdisablingikcompletely" /><code>{"private bool isDisablingIKCompletely"}</code> | <span className="api-desc">Backing field for `IsDisablingIKCompletely`.</span> |
| <Link id="m-ismovingextensions" /><code>{"private bool isMovingExtensions"}</code> | <span className="api-desc">Backing field for `IsMovingExtensions`.</span> |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | <span className="api-desc">Backing field for `IsNetworked`.</span> |
| <Link id="m-isshowingghosthands" /><code>{"private bool isShowingGhostHands"}</code> | <span className="api-desc">Backing field for `IsShowingGhostHands`.</span> |
| <Link id="m-outofbodymessage" /><code>{"private string outOfBodyMessage"}</code> | <span className="api-desc">Backing field for `OutOfBodyMessage`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controllermodestoenable-2" /><code><Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"[] ControllerModesToEnable { get; set; }"}</code> | <span className="api-desc">Controller modes to turn on with the change.</span> |
| <Link id="m-isdisablingikcompletely-2" /><code>{"bool IsDisablingIKCompletely { get; set; }"}</code> | <span className="api-desc">When disabling, also turns off the IK component controllers.</span> |
| <Link id="m-ismovingextensions-2" /><code>{"bool IsMovingExtensions { get; set; }"}</code> | <span className="api-desc">Moves controller extension objects between the master hand and the body hand. On by default.</span> |
| <Link id="m-isnetworked-2" /><code>{"bool IsNetworked { get; set; }"}</code> | <span className="api-desc">Sends the change to other players when this is the local player.</span> |
| <Link id="m-isshowingghosthands-2" /><code>{"bool IsShowingGhostHands { get; set; }"}</code> | <span className="api-desc">When disabling, shows ghost hands at full alpha. On by default.</span> |
| <Link id="m-outofbodymessage-2" /><code>{"string OutOfBodyMessage { get; set; }"}</code> | <span className="api-desc">Message sent with a networked disable.</span> |

## Used in

Members of other types that take, return or hold a `IKControllSettings`:

<div className="api-used-in">

[`CharacterIKController.DisableIKControl`](/mod/game-api/types/global-c-d/characterikcontroller#m-disableikcontrol), [`CharacterIKController.EnableIKControl`](/mod/game-api/types/global-c-d/characterikcontroller#m-enableikcontrol).

</div>

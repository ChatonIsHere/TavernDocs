---
title: "BooleanInput"
description: "An on or off controller input value (a button), usable directly as a bool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BooleanInput

A **class** in `Root.Township`, the global namespace.

An on or off controller input value (a button), usable directly as a `bool`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`InputSource`](/mod/game-api/types/global-i-l/inputsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BooleanInput()"}</code> | <span className="api-desc">Creates a `BooleanInput` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-explicit" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" op_Explicit(bool value)"}</code> | <span className="api-desc">Makes a `BooleanInput` with the given state.</span> |
| <Link id="m-op-implicit" /><code>{"static bool op_Implicit("}<Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" input)"}</code> | <span className="api-desc">Converts to `bool`: the current state.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the state as one bool.</span> |

## Used in

Members of other types that take, return or hold a `BooleanInput`:

<div className="api-used-in">

[`ControllerInput.GetButton`](/mod/game-api/types/global-c-d/controllerinput#m-getbutton), [`ControllerInput.Grab`](/mod/game-api/types/global-c-d/controllerinput#m-grab), [`ControllerInput.GrabAssist`](/mod/game-api/types/global-c-d/controllerinput#m-grabassist), [`ControllerInput.HardGrab`](/mod/game-api/types/global-c-d/controllerinput#m-hardgrab), [`ControllerInput.LockForGestures`](/mod/game-api/types/global-c-d/controllerinput#m-lockforgestures), [`ControllerInput.LongPhoto`](/mod/game-api/types/global-c-d/controllerinput#m-longphoto), [`ControllerInput.MetaMenu`](/mod/game-api/types/global-c-d/controllerinput#m-metamenu), [`ControllerInput.ReleaseToggleGrab`](/mod/game-api/types/global-c-d/controllerinput#m-releasetogglegrab), [`ControllerInput.SendItemLeft`](/mod/game-api/types/global-c-d/controllerinput#m-senditemleft), [`ControllerInput.SendItemRight`](/mod/game-api/types/global-c-d/controllerinput#m-senditemright), [`ControllerInput.SnapTurnLeft`](/mod/game-api/types/global-c-d/controllerinput#m-snapturnleft), [`ControllerInput.SnapTurnRight`](/mod/game-api/types/global-c-d/controllerinput#m-snapturnright), [`ControllerInput.SwipeTouch`](/mod/game-api/types/global-c-d/controllerinput#m-swipetouch), [`ControllerInput.TakePhoto`](/mod/game-api/types/global-c-d/controllerinput#m-takephoto), [`ControllerInput.Teleport`](/mod/game-api/types/global-c-d/controllerinput#m-teleport), [`ControllerInput.ToggleGrab`](/mod/game-api/types/global-c-d/controllerinput#m-togglegrab), [`ControllerInput.ToggleMetaMenu`](/mod/game-api/types/global-c-d/controllerinput#m-togglemetamenu), [`ControllerInput.ToggleRun`](/mod/game-api/types/global-c-d/controllerinput#m-togglerun), [`LongHoldInteractable.GripTimer`](/mod/game-api/types/global-i-l/longholdinteractable#m-griptimer), [`LongHoldInteractable.GripTimerPouch`](/mod/game-api/types/global-i-l/longholdinteractable#m-griptimerpouch), [`PickupContainer.GripTimer`](/mod/game-api/types/global-p/pickupcontainer#m-griptimer), [`PickupContainer.GripTimerPouch`](/mod/game-api/types/global-p/pickupcontainer#m-griptimerpouch).

</div>

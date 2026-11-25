---
title: "ControllerDPad"
description: "Turns a hand's touchpad and thumbstick input into numbered directions and four-way swipes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerDPad

A **class** in `Root.Township`, no namespace.

Turns a hand's touchpad and thumbstick input into numbered directions and four-way swipes. Made by `PlayerInput`; call `OnEnable` and `Update` to drive it. Client side.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerDPad("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-broaderdirectionsensitivity" /><code>{"private float broaderDirectionSensitivity"}</code> |  |
| <Link id="m-buttoncount" /><code>{"private int buttonCount"}</code> |  |
| <Link id="m-currenttouchpad" /><code>{"private Vector2 currentTouchPad"}</code> |  |
| <Link id="m-debugvector" /><code>{"private Vector2 debugVector"}</code> |  |
| <Link id="m-innerradius" /><code>{"private float innerRadius"}</code> |  |
| <Link id="m-input" /><code>{"private "}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input"}</code> |  |
| <Link id="m-isclockwiseforrighthand" /><code>{"private bool isClockwiseForRightHand"}</code> |  |
| <Link id="m-oldtouchpaddirection" /><code>{"private int oldTouchPadDirection"}</code> |  |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> |  |
| <Link id="m-rotationoffset" /><code>{"private float rotationOffset"}</code> |  |
| <Link id="m-swipesensitivity" /><code>{"private float swipeSensitivity"}</code> |  |
| <Link id="m-swipesentivitylevels" /><code>{"private float[] swipeSentivityLevels"}</code> |  |
| <Link id="m-touchstart" /><code>{"private Vector2 touchStart"}</code> |  |
| <Link id="m-usedebugvector" /><code>{"private bool useDebugVector"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentdpaddirection" /><code>{"int CurrentDpadDirection { get; private set; }"}</code> | Touchpad sector (1 to 12), 0 when touched near the centre, -1 when not touched. Mirrored for the right hand. |
| <Link id="m-currentswipedirection" /><code>{"int CurrentSwipeDirection { get; private set; }"}</code> | Direction of the last swipe: 0 right, 1 up, 2 left, 3 down. |
| <Link id="m-currentswipemovement" /><code>{"Vector2 CurrentSwipeMovement { get; }"}</code> | How far the touch has moved since the touchpad was pressed. |
| <Link id="m-currentthumbstickbroaddirection" /><code>{"int CurrentThumbStickBroadDirection { get; private set; }"}</code> | Declared but never set in this build; stays -1. |
| <Link id="m-currentthumbstickdirection" /><code>{"int CurrentThumbStickDirection { get; private set; }"}</code> | Thumbstick sector (1 to 12), or -1 inside the dead zone. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-swipeexecuted" /><code>{"event Action<int> SwipeExecuted"}</code> | Raised when the touchpad is released, with the swipe direction or -1 if the movement was too short. |
| <Link id="m-touchchanged" /><code>{"event Action<int> TouchChanged"}</code> | Raised when `CurrentDpadDirection` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"void OnDisable()"}</code> | Stops listening for touchpad press and release. |
| <Link id="m-onenable" /><code>{"void OnEnable()"}</code> | Starts listening for touchpad press and release and reads the swipe sensitivity setting. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Recalculates the touchpad and thumbstick directions. |
| <Link id="m-calculategesturedirection" /><code>{"private void CalculateGestureDirection()"}</code> |  |
| <Link id="m-calculateswipe" /><code>{"private void CalculateSwipe("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |  |
| <Link id="m-calculateswipedirection" /><code>{"private void CalculateSwipeDirection()"}</code> |  |
| <Link id="m-checkforswipesensitivitylevelinsettings" /><code>{"private void CheckForSwipeSensitivityLevelInSettings("}<Link to="/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Unhooks the swipe sensitivity settings listener. |
| <Link id="m-padtouched" /><code>{"private void PadTouched("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ControllerDPad`:

[`PlayerInput.DPad`](/game-api/types/global-p/playerinput#m-dpad).

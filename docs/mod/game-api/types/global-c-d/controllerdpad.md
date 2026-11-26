---
title: "ControllerDPad"
description: "Turns a hand's touchpad and thumbstick input into numbered directions and four-way swipes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerDPad

A **class** in `Root.Township`, the global namespace.

Turns a hand's touchpad and thumbstick input into numbered directions and four-way swipes. Made by `PlayerInput`; call `OnEnable` and `Update` to drive it. Client side.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerDPad("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Creates a `ControllerDPad` from `playerInput`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-broaderdirectionsensitivity" /><code>{"private float broaderDirectionSensitivity"}</code> | Squared half of the swipe sensitivity. |
| <Link id="m-buttoncount" /><code>{"private int buttonCount"}</code> | Number of direction sectors around the pad. 12. |
| <Link id="m-currenttouchpad" /><code>{"private Vector2 currentTouchPad"}</code> | Last touchpad position read. |
| <Link id="m-debugvector" /><code>{"private Vector2 debugVector"}</code> | Test input used instead of the touchpad when `useDebugVector` is on. |
| <Link id="m-innerradius" /><code>{"private float innerRadius"}</code> | Squared radius of the centre zone. |
| <Link id="m-input" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input"}</code> | The raw controller input it reads. |
| <Link id="m-isclockwiseforrighthand" /><code>{"private bool isClockwiseForRightHand"}</code> | Mirrors the angle for the right hand so directions run the same way on both hands. |
| <Link id="m-oldtouchpaddirection" /><code>{"private int oldTouchPadDirection"}</code> | Direction from the previous check, to detect changes. |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> | The hand's `PlayerInput`. |
| <Link id="m-rotationoffset" /><code>{"private float rotationOffset"}</code> | Angle offset in degrees applied before splitting into sectors. -90. |
| <Link id="m-swipesensitivity" /><code>{"private float swipeSensitivity"}</code> | Squared minimum swipe length. |
| <Link id="m-swipesentivitylevels" /><code>{"private float[] swipeSentivityLevels"}</code> | Swipe lengths for each settings level: 1.5, 1 and 0.5. |
| <Link id="m-touchstart" /><code>{"private Vector2 touchStart"}</code> | Touchpad position when the touch began. |
| <Link id="m-usedebugvector" /><code>{"private bool useDebugVector"}</code> | Use `debugVector` instead of the real touchpad. |

</details>

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
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Unhooks the swipe sensitivity settings listener. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculategesturedirection" /><code>{"private void CalculateGestureDirection()"}</code> | Sets `CurrentThumbStickDirection` from the thumbstick angle, split into `buttonCount` sectors. |
| <Link id="m-calculateswipe" /><code>{"private void CalculateSwipe("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | On touch release, works out the swipe direction (0 right, 1 up, 2 left, 3 down) and raises `SwipeExecuted`, or -1 if too short. |
| <Link id="m-calculateswipedirection" /><code>{"private void CalculateSwipeDirection()"}</code> | Sets `CurrentDpadDirection` from the touchpad position and raises `TouchChanged` when it changes. 0 is the centre. |
| <Link id="m-checkforswipesensitivitylevelinsettings" /><code>{"private void CheckForSwipeSensitivityLevelInSettings("}<Link to="/mod/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{" settings)"}</code> | Reads the swipe sensitivity level from game settings and squares it for distance checks. |
| <Link id="m-padtouched" /><code>{"private void PadTouched("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | On touch start, stores the start point and updates the direction. |

</details>

## Used in

Members of other types that take, return or hold a `ControllerDPad`:

[`PlayerInput.DPad`](/mod/game-api/types/global-p/playerinput#m-dpad).

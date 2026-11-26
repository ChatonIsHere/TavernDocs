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
| <Link id="m-ctor" /><code>{"ControllerDPad("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">Creates a `ControllerDPad` from `playerInput`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-broaderdirectionsensitivity" /><code>{"private float broaderDirectionSensitivity"}</code> | <span className="api-desc">Squared half of the swipe sensitivity.</span> |
| <Link id="m-buttoncount" /><code>{"private int buttonCount"}</code> | <span className="api-desc">Number of direction sectors around the pad. 12.</span> |
| <Link id="m-currenttouchpad" /><code>{"private Vector2 currentTouchPad"}</code> | <span className="api-desc">Last touchpad position read.</span> |
| <Link id="m-debugvector" /><code>{"private Vector2 debugVector"}</code> | <span className="api-desc">Test input used instead of the touchpad when `useDebugVector` is on.</span> |
| <Link id="m-innerradius" /><code>{"private float innerRadius"}</code> | <span className="api-desc">Squared radius of the centre zone.</span> |
| <Link id="m-input" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input"}</code> | <span className="api-desc">The raw controller input it reads.</span> |
| <Link id="m-isclockwiseforrighthand" /><code>{"private bool isClockwiseForRightHand"}</code> | <span className="api-desc">Mirrors the angle for the right hand so directions run the same way on both hands.</span> |
| <Link id="m-oldtouchpaddirection" /><code>{"private int oldTouchPadDirection"}</code> | <span className="api-desc">Direction from the previous check, to detect changes.</span> |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> | <span className="api-desc">The hand's `PlayerInput`.</span> |
| <Link id="m-rotationoffset" /><code>{"private float rotationOffset"}</code> | <span className="api-desc">Angle offset in degrees applied before splitting into sectors. -90.</span> |
| <Link id="m-swipesensitivity" /><code>{"private float swipeSensitivity"}</code> | <span className="api-desc">Squared minimum swipe length.</span> |
| <Link id="m-swipesentivitylevels" /><code>{"private float[] swipeSentivityLevels"}</code> | <span className="api-desc">Swipe lengths for each settings level: 1.5, 1 and 0.5.</span> |
| <Link id="m-touchstart" /><code>{"private Vector2 touchStart"}</code> | <span className="api-desc">Touchpad position when the touch began.</span> |
| <Link id="m-usedebugvector" /><code>{"private bool useDebugVector"}</code> | <span className="api-desc">Use `debugVector` instead of the real touchpad.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentdpaddirection" /><code>{"int CurrentDpadDirection { get; private set; }"}</code> | <span className="api-desc">Touchpad sector (1 to 12), 0 when touched near the centre, -1 when not touched. Mirrored for the right hand.</span> |
| <Link id="m-currentswipedirection" /><code>{"int CurrentSwipeDirection { get; private set; }"}</code> | <span className="api-desc">Direction of the last swipe: 0 right, 1 up, 2 left, 3 down.</span> |
| <Link id="m-currentswipemovement" /><code>{"Vector2 CurrentSwipeMovement { get; }"}</code> | <span className="api-desc">How far the touch has moved since the touchpad was pressed.</span> |
| <Link id="m-currentthumbstickbroaddirection" /><code>{"int CurrentThumbStickBroadDirection { get; private set; }"}</code> | <span className="api-desc">Declared but never set in this build; stays -1.</span> |
| <Link id="m-currentthumbstickdirection" /><code>{"int CurrentThumbStickDirection { get; private set; }"}</code> | <span className="api-desc">Thumbstick sector (1 to 12), or -1 inside the dead zone.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-swipeexecuted" /><code>{"event Action<int> SwipeExecuted"}</code> | <span className="api-desc">Raised when the touchpad is released, with the swipe direction or -1 if the movement was too short.</span> |
| <Link id="m-touchchanged" /><code>{"event Action<int> TouchChanged"}</code> | <span className="api-desc">Raised when `CurrentDpadDirection` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"void OnDisable()"}</code> | <span className="api-desc">Stops listening for touchpad press and release.</span> |
| <Link id="m-onenable" /><code>{"void OnEnable()"}</code> | <span className="api-desc">Starts listening for touchpad press and release and reads the swipe sensitivity setting.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Recalculates the touchpad and thumbstick directions.</span> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">Unhooks the swipe sensitivity settings listener.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculategesturedirection" /><code>{"private void CalculateGestureDirection()"}</code> | <span className="api-desc">Sets `CurrentThumbStickDirection` from the thumbstick angle, split into `buttonCount` sectors.</span> |
| <Link id="m-calculateswipe" /><code>{"private void CalculateSwipe("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">On touch release, works out the swipe direction (0 right, 1 up, 2 left, 3 down) and raises `SwipeExecuted`, or -1 if too short.</span> |
| <Link id="m-calculateswipedirection" /><code>{"private void CalculateSwipeDirection()"}</code> | <span className="api-desc">Sets `CurrentDpadDirection` from the touchpad position and raises `TouchChanged` when it changes. 0 is the centre.</span> |
| <Link id="m-checkforswipesensitivitylevelinsettings" /><code>{"private void CheckForSwipeSensitivityLevelInSettings("}<Link to="/mod/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Reads the swipe sensitivity level from game settings and squares it for distance checks.</span> |
| <Link id="m-padtouched" /><code>{"private void PadTouched("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">On touch start, stores the start point and updates the direction.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ControllerDPad`:

<div className="api-used-in">

[`PlayerInput.DPad`](/mod/game-api/types/global-p/playerinput#m-dpad).

</div>

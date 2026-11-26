---
title: "TouchScreenMenuBase.TouchInput"
description: "Tracks one fingertip against a touch screen menu: whether it is close, touching, and whether it swiped."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenMenuBase.TouchInput

A **protected class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Tracks one fingertip against a touch screen menu: whether it is close, touching, and whether it swiped. Client side, one per finger.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TouchScreenMenuBase`](/mod/game-api/types/global-t-x/touchscreenmenubase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchInput(Transform fingerTip, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, float touchThreshold, float touchReleaseThreshold)"}</code> | Creates a `TouchScreenMenuBase.TouchInput` from `fingerTip`, `interactor`, `touchThreshold`, `touchReleaseThreshold` and `minDistanceToRenderSquared`. |
| <Link id="m-ctor-2" /><code>{"TouchInput(Transform fingerTip, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, float touchThreshold, float touchReleaseThreshold, float minDistanceToRenderSquared)"}</code> | Creates a `TouchScreenMenuBase.TouchInput` from `fingerTip`, `interactor`, `touchThreshold`, `touchReleaseThreshold` and `minDistanceToRenderSquared`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fingertip" /><code>{"private Transform fingerTip"}</code> | Transform of the fingertip being tracked. |
| <Link id="m-hastouchedbutton" /><code>{"private bool hasTouchedButton"}</code> | Set by `ButtonTouched`; stops the current touch from also counting as a swipe. |
| <Link id="m-mindistancetorendersquared" /><code>{"private float minDistanceToRenderSquared"}</code> | Squared distance from the canvas beyond which the finger counts as not close. |
| <Link id="m-touchreleasethreshold" /><code>{"private float touchReleaseThreshold"}</code> | Depth the finger must come back past before a touch is released. |
| <Link id="m-touchstartposition" /><code>{"private Vector2 touchStartPosition"}</code> | Screen position where the current touch began, used to work out the swipe. |
| <Link id="m-touchthreshold" /><code>{"private float touchThreshold"}</code> | Depth into the screen at which a touch starts. |
| <Link id="m-waslastabovescreen" /><code>{"private bool wasLastAboveScreen"}</code> | Whether the finger was behind the screen plane last update, so a touch only starts when pressing in from the front. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-begantouch" /><code>{"bool BeganTouch { get; private set; }"}</code> | True only on the update where the finger first crossed the touch threshold. |
| <Link id="m-distance" /><code>{"float Distance { get; private set; }"}</code> | How far the fingertip is behind the screen plane, in screen space; 0 when in front. |
| <Link id="m-fingertipposition" /><code>{"Vector3 FingerTipPosition { get; private set; }"}</code> | World position of the fingertip at the last update. |
| <Link id="m-interactor" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> | The hand interactor this finger belongs to. |
| <Link id="m-isclose" /><code>{"bool IsClose { get; private set; }"}</code> | True when the fingertip is within render distance of the screen. |
| <Link id="m-istouching" /><code>{"bool IsTouching { get; private set; }"}</code> | True while the finger is pressed into the screen past the touch threshold. |
| <Link id="m-swipe" /><code>{"Vector2? Swipe { get; private set; }"}</code> | Set for one update when a touch ends without hitting a button: the drag from start to end position. Otherwise null. |
| <Link id="m-touchposition" /><code>{"Vector2 TouchPosition { get; private set; }"}</code> | Fingertip position in the screen's local space. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-buttontouched" /><code>{"void ButtonTouched()"}</code> | Marks that this touch hit a button, so releasing it doesn't count as a swipe. |
| <Link id="m-updatetouch" /><code>{"void UpdateTouch(Vector3 canvasPosition, Matrix4x4 matrix)"}</code> | Updates position, closeness, touching state and swipe from the fingertip, the canvas position and the screen's matrix. |

## Used in

Members of other types that take, return or hold a `TouchInput`:

[`TouchScreenKeyboard.UpdateTouchWithButtons`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-updatetouchwithbuttons), [`TouchScreenMenuBase.IsButtonValid`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-isbuttonvalid), [`TouchScreenMenuBase.IsFirstPressInBounds`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-isfirstpressinbounds), [`TouchScreenMenuBase.ProcessButtonPress`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-processbuttonpress), [`TouchScreenMenuBase.touchInputs`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-touchinputs), [`TouchScreenMenuBase.UpdateTouchWithButtons`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-updatetouchwithbuttons).

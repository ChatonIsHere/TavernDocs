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
| <Link id="m-ctor" /><code>{"TouchInput(Transform fingerTip, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, float touchThreshold, float touchReleaseThreshold)"}</code> | <span className="api-desc">Creates a `TouchScreenMenuBase.TouchInput` from `fingerTip`, `interactor`, `touchThreshold`, `touchReleaseThreshold` and `minDistanceToRenderSquared`.</span> |
| <Link id="m-ctor-2" /><code>{"TouchInput(Transform fingerTip, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, float touchThreshold, float touchReleaseThreshold, float minDistanceToRenderSquared)"}</code> | <span className="api-desc">Creates a `TouchScreenMenuBase.TouchInput` from `fingerTip`, `interactor`, `touchThreshold`, `touchReleaseThreshold` and `minDistanceToRenderSquared`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fingertip" /><code>{"private Transform fingerTip"}</code> | <span className="api-desc">Transform of the fingertip being tracked.</span> |
| <Link id="m-hastouchedbutton" /><code>{"private bool hasTouchedButton"}</code> | <span className="api-desc">Set by `ButtonTouched`; stops the current touch from also counting as a swipe.</span> |
| <Link id="m-mindistancetorendersquared" /><code>{"private float minDistanceToRenderSquared"}</code> | <span className="api-desc">Squared distance from the canvas beyond which the finger counts as not close.</span> |
| <Link id="m-touchreleasethreshold" /><code>{"private float touchReleaseThreshold"}</code> | <span className="api-desc">Depth the finger must come back past before a touch is released.</span> |
| <Link id="m-touchstartposition" /><code>{"private Vector2 touchStartPosition"}</code> | <span className="api-desc">Screen position where the current touch began, used to work out the swipe.</span> |
| <Link id="m-touchthreshold" /><code>{"private float touchThreshold"}</code> | <span className="api-desc">Depth into the screen at which a touch starts.</span> |
| <Link id="m-waslastabovescreen" /><code>{"private bool wasLastAboveScreen"}</code> | <span className="api-desc">Whether the finger was behind the screen plane last update, so a touch only starts when pressing in from the front.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-begantouch" /><code>{"bool BeganTouch { get; private set; }"}</code> | <span className="api-desc">True only on the update where the finger first crossed the touch threshold.</span> |
| <Link id="m-distance" /><code>{"float Distance { get; private set; }"}</code> | <span className="api-desc">How far the fingertip is behind the screen plane, in screen space; 0 when in front.</span> |
| <Link id="m-fingertipposition" /><code>{"Vector3 FingerTipPosition { get; private set; }"}</code> | <span className="api-desc">World position of the fingertip at the last update.</span> |
| <Link id="m-interactor" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> | <span className="api-desc">The hand interactor this finger belongs to.</span> |
| <Link id="m-isclose" /><code>{"bool IsClose { get; private set; }"}</code> | <span className="api-desc">True when the fingertip is within render distance of the screen.</span> |
| <Link id="m-istouching" /><code>{"bool IsTouching { get; private set; }"}</code> | <span className="api-desc">True while the finger is pressed into the screen past the touch threshold.</span> |
| <Link id="m-swipe" /><code>{"Vector2? Swipe { get; private set; }"}</code> | <span className="api-desc">Set for one update when a touch ends without hitting a button: the drag from start to end position. Otherwise null.</span> |
| <Link id="m-touchposition" /><code>{"Vector2 TouchPosition { get; private set; }"}</code> | <span className="api-desc">Fingertip position in the screen's local space.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-buttontouched" /><code>{"void ButtonTouched()"}</code> | <span className="api-desc">Marks that this touch hit a button, so releasing it doesn't count as a swipe.</span> |
| <Link id="m-updatetouch" /><code>{"void UpdateTouch(Vector3 canvasPosition, Matrix4x4 matrix)"}</code> | <span className="api-desc">Updates position, closeness, touching state and swipe from the fingertip, the canvas position and the screen's matrix.</span> |

## Used in

Members of other types that take, return or hold a `TouchInput`:

<div className="api-used-in">

[`TouchScreenKeyboard.UpdateTouchWithButtons`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-updatetouchwithbuttons), [`TouchScreenMenuBase.IsButtonValid`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-isbuttonvalid), [`TouchScreenMenuBase.IsFirstPressInBounds`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-isfirstpressinbounds), [`TouchScreenMenuBase.ProcessButtonPress`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-processbuttonpress), [`TouchScreenMenuBase.touchInputs`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-touchinputs), [`TouchScreenMenuBase.UpdateTouchWithButtons`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-updatetouchwithbuttons).

</div>

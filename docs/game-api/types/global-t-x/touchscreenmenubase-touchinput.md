---
title: "TouchScreenMenuBase.TouchInput"
description: "class TouchScreenMenuBase.TouchInput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenMenuBase.TouchInput

A **protected class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TouchScreenMenuBase`](/game-api/types/global-t-x/touchscreenmenubase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchInput(Transform fingerTip, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, float touchThreshold, float touchReleaseThreshold)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"TouchInput(Transform fingerTip, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, float touchThreshold, float touchReleaseThreshold, float minDistanceToRenderSquared)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fingertip" /><code>{"private Transform fingerTip"}</code> |  |
| <Link id="m-hastouchedbutton" /><code>{"private bool hasTouchedButton"}</code> |  |
| <Link id="m-mindistancetorendersquared" /><code>{"private float minDistanceToRenderSquared"}</code> |  |
| <Link id="m-touchreleasethreshold" /><code>{"private float touchReleaseThreshold"}</code> |  |
| <Link id="m-touchstartposition" /><code>{"private Vector2 touchStartPosition"}</code> |  |
| <Link id="m-touchthreshold" /><code>{"private float touchThreshold"}</code> |  |
| <Link id="m-waslastabovescreen" /><code>{"private bool wasLastAboveScreen"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-begantouch" /><code>{"bool BeganTouch { get; private set; }"}</code> |  |
| <Link id="m-distance" /><code>{"float Distance { get; private set; }"}</code> |  |
| <Link id="m-fingertipposition" /><code>{"Vector3 FingerTipPosition { get; private set; }"}</code> |  |
| <Link id="m-interactor" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isclose" /><code>{"bool IsClose { get; private set; }"}</code> |  |
| <Link id="m-istouching" /><code>{"bool IsTouching { get; private set; }"}</code> |  |
| <Link id="m-swipe" /><code>{"Vector2? Swipe { get; private set; }"}</code> |  |
| <Link id="m-touchposition" /><code>{"Vector2 TouchPosition { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-buttontouched" /><code>{"void ButtonTouched()"}</code> |  |
| <Link id="m-updatetouch" /><code>{"void UpdateTouch(Vector3 canvasPosition, Matrix4x4 matrix)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TouchInput`:

[`TouchScreenKeyboard.UpdateTouchWithButtons`](/game-api/types/global-t-x/touchscreenkeyboard#m-updatetouchwithbuttons), [`TouchScreenMenuBase.IsButtonValid`](/game-api/types/global-t-x/touchscreenmenubase#m-isbuttonvalid), [`TouchScreenMenuBase.IsFirstPressInBounds`](/game-api/types/global-t-x/touchscreenmenubase#m-isfirstpressinbounds), [`TouchScreenMenuBase.ProcessButtonPress`](/game-api/types/global-t-x/touchscreenmenubase#m-processbuttonpress), [`TouchScreenMenuBase.touchInputs`](/game-api/types/global-t-x/touchscreenmenubase#m-touchinputs), [`TouchScreenMenuBase.UpdateTouchWithButtons`](/game-api/types/global-t-x/touchscreenmenubase#m-updatetouchwithbuttons).

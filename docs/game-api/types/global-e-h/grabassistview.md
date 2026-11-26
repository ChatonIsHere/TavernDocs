---
title: "GrabAssistView"
description: "Client: draws the grab assist path and target marker for one hand, using meshes and materials from GrabAssistSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabAssistView

A **class** in `Root.Township`, no namespace.

Client: draws the grab assist path and target marker for one hand, using meshes and materials from `GrabAssistSettings`. Created with a `GrabAssistController` and hooked to its events.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabAssistView("}<Link to="/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" controller, bool isRightHand)"}</code> | Creates a `GrabAssistView` from `controller` and `isRightHand`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidpathshadercolorproperty" /><code>{"private const string androidPathShaderColorProperty"}</code> | Colour property name on Android (`_Color`). |
| <Link id="m-assistpathmaterial" /><code>{"private readonly Material assistPathMaterial"}</code> | Material copy for the path dots. |
| <Link id="m-assisttargetmaterial" /><code>{"private readonly Material assistTargetMaterial"}</code> | Material copy for a found target. |
| <Link id="m-assisttargetnotfoundmaterial" /><code>{"private readonly Material assistTargetNotFoundMaterial"}</code> | Material copy when no target is found. |
| <Link id="m-lastfinalpathpositionindicator" /><code>{"private Vector3 lastFinalPathPositionIndicator"}</code> | Where the path ended last frame, so a missed path bends smoothly. |
| <Link id="m-materialcolorid" /><code>{"private static readonly int materialColorId"}</code> | Shader ID of the colour property for the platform. |
| <Link id="m-pathindicatorpoints" /><code>{"private readonly Matrix4x4[] pathIndicatorPoints"}</code> | Matrices for each path dot, sized from assist length and interval. |
| <Link id="m-pcpathshadercolorproperty" /><code>{"private const string pcPathShaderColorProperty"}</code> | Colour property name on PC (`_TintColor`). |
| <Link id="m-targetindicatorscale" /><code>{"private readonly Vector3 targetIndicatorScale"}</code> | Target marker scale, mirrored on x for the right hand. |

</details>

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code>{"private static Camera Camera { get; }"}</code> | The local player's camera, which the indicators are drawn for. |
| <Link id="m-settings" /><code>{"private static "}<Link to="/game-api/types/global-e-h/grabassistsettings">{"GrabAssistSettings"}</Link>{" Settings { get; }"}</code> | The global `GrabAssistSettings`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable("}<Link to="/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" controller)"}</code> | Unhooks from the controller's events and destroys the material copies. |
| <Link id="m-enable" /><code>{"void Enable("}<Link to="/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" controller)"}</code> | Hooks the controller's grab assist started, ended and updated events. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getlerpedposition" /><code>{"private Vector3 GetLerpedPosition(Vector3 origin, Vector3 midPoint, float linePoint, Vector3 pointPosition)"}</code> | Gives a path point on a curve to the last end point, smoothed, used when no target is found. |
| <Link id="m-getsectionpoint" /><code>{"private static Vector3 GetSectionPoint(Vector3 start, Vector3 end, float t)"}</code> | Point a fraction of the way from start to end. |
| <Link id="m-indicatepath" /><code>{"private void IndicatePath("}<Link to="/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{" data)"}</code> | Draws the dotted path from origin to target, coloured by whether a target was found. |
| <Link id="m-indicatetarget" /><code>{"private void IndicateTarget("}<Link to="/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{" data)"}</code> | Draws the target marker facing the camera, scaled by distance, with a found or not found material. |
| <Link id="m-onendgrabassist" /><code>{"private void OnEndGrabAssist()"}</code> | Empty. |
| <Link id="m-onstartgrabassist" /><code>{"private void OnStartGrabAssist()"}</code> | Resets the last path end point. |
| <Link id="m-onupdategrabassist" /><code>{"private void OnUpdateGrabAssist("}<Link to="/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{" data)"}</code> | Draws the path and target for this frame. |

</details>

## Used in

Members of other types that take, return or hold a `GrabAssistView`:

[`GrabAssistController.view`](/game-api/types/global-e-h/grabassistcontroller#m-view).

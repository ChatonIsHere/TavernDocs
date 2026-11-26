---
title: "GrabAssistView"
description: "Client: draws the grab assist path and target marker for one hand, using meshes and materials from GrabAssistSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabAssistView

A **class** in `Root.Township`, the global namespace.

Client: draws the grab assist path and target marker for one hand, using meshes and materials from `GrabAssistSettings`. Created with a `GrabAssistController` and hooked to its events.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabAssistView("}<Link to="/mod/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" controller, bool isRightHand)"}</code> | <span className="api-desc">Creates a `GrabAssistView` from `controller` and `isRightHand`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidpathshadercolorproperty" /><code>{"private const string androidPathShaderColorProperty"}</code> | <span className="api-desc">Colour property name on Android (`_Color`).</span> |
| <Link id="m-assistpathmaterial" /><code>{"private readonly Material assistPathMaterial"}</code> | <span className="api-desc">Material copy for the path dots.</span> |
| <Link id="m-assisttargetmaterial" /><code>{"private readonly Material assistTargetMaterial"}</code> | <span className="api-desc">Material copy for a found target.</span> |
| <Link id="m-assisttargetnotfoundmaterial" /><code>{"private readonly Material assistTargetNotFoundMaterial"}</code> | <span className="api-desc">Material copy when no target is found.</span> |
| <Link id="m-lastfinalpathpositionindicator" /><code>{"private Vector3 lastFinalPathPositionIndicator"}</code> | <span className="api-desc">Where the path ended last frame, so a missed path bends smoothly.</span> |
| <Link id="m-materialcolorid" /><code>{"private static readonly int materialColorId"}</code> | <span className="api-desc">Shader ID of the colour property for the platform.</span> |
| <Link id="m-pathindicatorpoints" /><code>{"private readonly Matrix4x4[] pathIndicatorPoints"}</code> | <span className="api-desc">Matrices for each path dot, sized from assist length and interval.</span> |
| <Link id="m-pcpathshadercolorproperty" /><code>{"private const string pcPathShaderColorProperty"}</code> | <span className="api-desc">Colour property name on PC (`_TintColor`).</span> |
| <Link id="m-targetindicatorscale" /><code>{"private readonly Vector3 targetIndicatorScale"}</code> | <span className="api-desc">Target marker scale, mirrored on x for the right hand.</span> |

</details>

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code>{"private static Camera Camera { get; }"}</code> | <span className="api-desc">The local player's camera, which the indicators are drawn for.</span> |
| <Link id="m-settings" /><code>{"private static "}<Link to="/mod/game-api/types/global-e-h/grabassistsettings">{"GrabAssistSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The global `GrabAssistSettings`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable("}<Link to="/mod/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" controller)"}</code> | <span className="api-desc">Unhooks from the controller's events and destroys the material copies.</span> |
| <Link id="m-enable" /><code>{"void Enable("}<Link to="/mod/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" controller)"}</code> | <span className="api-desc">Hooks the controller's grab assist started, ended and updated events.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getlerpedposition" /><code>{"private Vector3 GetLerpedPosition(Vector3 origin, Vector3 midPoint, float linePoint, Vector3 pointPosition)"}</code> | <span className="api-desc">Gives a path point on a curve to the last end point, smoothed, used when no target is found.</span> |
| <Link id="m-getsectionpoint" /><code>{"private static Vector3 GetSectionPoint(Vector3 start, Vector3 end, float t)"}</code> | <span className="api-desc">Point a fraction of the way from start to end.</span> |
| <Link id="m-indicatepath" /><code>{"private void IndicatePath("}<Link to="/mod/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{" data)"}</code> | <span className="api-desc">Draws the dotted path from origin to target, coloured by whether a target was found.</span> |
| <Link id="m-indicatetarget" /><code>{"private void IndicateTarget("}<Link to="/mod/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{" data)"}</code> | <span className="api-desc">Draws the target marker facing the camera, scaled by distance, with a found or not found material.</span> |
| <Link id="m-onendgrabassist" /><code>{"private void OnEndGrabAssist()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-onstartgrabassist" /><code>{"private void OnStartGrabAssist()"}</code> | <span className="api-desc">Resets the last path end point.</span> |
| <Link id="m-onupdategrabassist" /><code>{"private void OnUpdateGrabAssist("}<Link to="/mod/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{" data)"}</code> | <span className="api-desc">Draws the path and target for this frame.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GrabAssistView`:

<div className="api-used-in">

[`GrabAssistController.view`](/mod/game-api/types/global-e-h/grabassistcontroller#m-view).

</div>

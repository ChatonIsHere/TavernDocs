---
title: "GrabAssistView"
description: "class GrabAssistView in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabAssistView

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabAssistView("}<Link to="/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" controller, bool isRightHand)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androidpathshadercolorproperty" /><code>{"private const string androidPathShaderColorProperty"}</code> |  |
| <Link id="m-assistpathmaterial" /><code>{"private readonly Material assistPathMaterial"}</code> |  |
| <Link id="m-assisttargetmaterial" /><code>{"private readonly Material assistTargetMaterial"}</code> |  |
| <Link id="m-assisttargetnotfoundmaterial" /><code>{"private readonly Material assistTargetNotFoundMaterial"}</code> |  |
| <Link id="m-lastfinalpathpositionindicator" /><code>{"private Vector3 lastFinalPathPositionIndicator"}</code> |  |
| <Link id="m-materialcolorid" /><code>{"private static readonly int materialColorId"}</code> |  |
| <Link id="m-pathindicatorpoints" /><code>{"private readonly Matrix4x4[] pathIndicatorPoints"}</code> |  |
| <Link id="m-pcpathshadercolorproperty" /><code>{"private const string pcPathShaderColorProperty"}</code> |  |
| <Link id="m-targetindicatorscale" /><code>{"private readonly Vector3 targetIndicatorScale"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code>{"private static Camera Camera { get; }"}</code> |  |
| <Link id="m-settings" /><code>{"private static "}<Link to="/game-api/types/global-e-h/grabassistsettings">{"GrabAssistSettings"}</Link>{" Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable("}<Link to="/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" controller)"}</code> |  |
| <Link id="m-enable" /><code>{"void Enable("}<Link to="/game-api/types/global-e-h/grabassistcontroller">{"GrabAssistController"}</Link>{" controller)"}</code> |  |
| <Link id="m-getlerpedposition" /><code>{"private Vector3 GetLerpedPosition(Vector3 origin, Vector3 midPoint, float linePoint, Vector3 pointPosition)"}</code> |  |
| <Link id="m-getsectionpoint" /><code>{"private static Vector3 GetSectionPoint(Vector3 start, Vector3 end, float t)"}</code> |  |
| <Link id="m-indicatepath" /><code>{"private void IndicatePath("}<Link to="/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{" data)"}</code> |  |
| <Link id="m-indicatetarget" /><code>{"private void IndicateTarget("}<Link to="/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{" data)"}</code> |  |
| <Link id="m-onendgrabassist" /><code>{"private void OnEndGrabAssist()"}</code> |  |
| <Link id="m-onstartgrabassist" /><code>{"private void OnStartGrabAssist()"}</code> |  |
| <Link id="m-onupdategrabassist" /><code>{"private void OnUpdateGrabAssist("}<Link to="/game-api/types/global-e-h/grabassisteventdata">{"GrabAssistEventData"}</Link>{" data)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GrabAssistView`:

[`GrabAssistController.view`](/game-api/types/global-e-h/grabassistcontroller#m-view).

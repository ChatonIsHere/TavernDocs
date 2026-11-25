---
title: "FocusPuller"
description: "class FocusPuller in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FocusPuller

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`FocusMode`](/game-api/types/alta-customization/focuspuller-focusmode), [`FocusPoint`](/game-api/types/alta-customization/focuspuller-focuspoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FocusPuller()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cameradepthtexture" /><code>{"private static readonly int _CameraDepthTexture"}</code> |  |
| <Link id="m-depthtexture" /><code>{"private static readonly int _DepthTexture"}</code> |  |
| <Link id="m-height" /><code>{"private static readonly int _Height"}</code> |  |
| <Link id="m-width" /><code>{"private static readonly int _Width"}</code> |  |
| <Link id="m-autofocusreadjustmentcurve" /><code>{"private AnimationCurve autoFocusReadjustmentCurve"}</code> |  |
| <Link id="m-autoreadjustment" /><code>{"private Coroutine autoReadjustment"}</code> |  |
| <Link id="m-basecamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" baseCamera"}</code> |  |
| <Link id="m-computeshader" /><code>{"private ComputeShader computeShader"}</code> |  |
| <Link id="m-depthoffield" /><code>{"private DepthOfField depthOfField"}</code> |  |
| <Link id="m-focallength" /><code>{"private float focalLength"}</code> |  |
| <Link id="m-focuscorrection" /><code>{"private float focusCorrection"}</code> |  |
| <Link id="m-focuspoints" /><code>{"private "}<Link to="/game-api/types/alta-customization/focuspuller-focuspoint">{"FocusPuller.FocusPoint"}</Link>{"[] focusPoints"}</code> |  |
| <Link id="m-infocusalpha" /><code>{"private float inFocusAlpha"}</code> |  |
| <Link id="m-infocusmaterial" /><code>{"private Material inFocusMaterial"}</code> |  |
| <Link id="m-interactingpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactingPickup"}</code> |  |
| <Link id="m-kernel" /><code>{"private int kernel"}</code> |  |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> |  |
| <Link id="m-mindistance" /><code>{"private float minDistance"}</code> |  |
| <Link id="m-outtafocusalpha" /><code>{"private float outtaFocusAlpha"}</code> |  |
| <Link id="m-outtafocusmaterial" /><code>{"private Material outtaFocusMaterial"}</code> |  |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> |  |
| <Link id="m-readjustmentduration" /><code>{"private float readjustmentDuration"}</code> |  |
| <Link id="m-readpositionsbuffer" /><code>{"private ComputeBuffer readPositionsBuffer"}</code> |  |
| <Link id="m-results" /><code>{"private float[] results"}</code> |  |
| <Link id="m-resultsbuffer" /><code>{"private ComputeBuffer resultsBuffer"}</code> |  |
| <Link id="m-sensitivity" /><code>{"private float sensitivity"}</code> |  |
| <Link id="m-totalfocusweight" /><code>{"private int totalFocusWeight"}</code> |  |
| <Link id="m-viewsize" /><code>{"private Vector2 viewSize"}</code> |  |
| <Link id="m-volume" /><code>{"private PostProcessVolume volume"}</code> |  |
| <Link id="m-willcalculate" /><code>{"private bool willCalculate"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfocus" /><code><Link to="/game-api/types/alta-customization/focuspuller-focusmode">{"FocusPuller.FocusMode"}</Link>{" CurrentFocus { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onfocusmodechanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/focuspuller-focusmode">{"FocusPuller.FocusMode"}</Link>{"> OnFocusModeChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggleactive" /><code>{"void ToggleActive()"}</code> |  |
| <Link id="m-autoreadjustment-2" /><code>{"private IEnumerator AutoReadjustment(float targetDistance) (iterator)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-calculateautofocus" /><code>{"private void CalculateAutoFocus()"}</code> |  |
| <Link id="m-checkautofocus" /><code>{"private void CheckAutoFocus()"}</code> |  |
| <Link id="m-checkowner" /><code>{"private void CheckOwner(bool isOwned)"}</code> |  |
| <Link id="m-distancecheck" /><code>{"private IEnumerator DistanceCheck("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |  |
| <Link id="m-finishedrender" /><code>{"private void FinishedRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-preparetorender" /><code>{"private void PrepareToRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |  |
| <Link id="m-returnpoints" /><code>{"private IEnumerator ReturnPoints() (iterator)"}</code> |  |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |

## Used in

Members of other types that take, return or hold a `FocusPuller`:

[`FocusButton.focusPuller`](/game-api/types/alta-customization/focusbutton#m-focuspuller).

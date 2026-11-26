---
title: "FocusPuller"
description: "Depth of field control on the hand camera with three modes (perfect, auto and manual)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FocusPuller

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Depth of field control on the hand camera with three modes (perfect, auto and manual). Auto focus reads depth at weighted focus points with a compute shader; manual focus turns a dial as you twist your hand. Runs for the camera's owner only.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`FocusMode`](/mod/game-api/types/alta-customization/focuspuller-focusmode), [`FocusPoint`](/mod/game-api/types/alta-customization/focuspuller-focuspoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FocusPuller()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameradepthtexture" /><code>{"private static readonly int _CameraDepthTexture"}</code> | Shader property ID for the global camera depth texture. |
| <Link id="m-depthtexture" /><code>{"private static readonly int _DepthTexture"}</code> | Shader property ID of the depth texture input on the compute shader. |
| <Link id="m-height" /><code>{"private static readonly int _Height"}</code> | Shader property ID for the render texture height. |
| <Link id="m-width" /><code>{"private static readonly int _Width"}</code> | Shader property ID for the render texture width. |
| <Link id="m-autofocusreadjustmentcurve" /><code>{"private AnimationCurve autoFocusReadjustmentCurve"}</code> | Easing curve used when auto focus moves to a new distance. |
| <Link id="m-autoreadjustment" /><code>{"private Coroutine autoReadjustment"}</code> | The running `AutoReadjustment` coroutine, if any. |
| <Link id="m-basecamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" baseCamera"}</code> | The hand camera this focus puller is on. |
| <Link id="m-computeshader" /><code>{"private ComputeShader computeShader"}</code> | Compute shader whose `Calculator` kernel samples depth at the focus points. |
| <Link id="m-depthoffield" /><code>{"private DepthOfField depthOfField"}</code> | Depth of field effect found on the volume's profile. |
| <Link id="m-focallength" /><code>{"private float focalLength"}</code> | Depth range around the focus distance where a point counts as in focus. |
| <Link id="m-focuscorrection" /><code>{"private float focusCorrection"}</code> | Distance added to the computed auto focus distance. |
| <Link id="m-focuspoints" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/focuspuller-focuspoint">{"FocusPuller.FocusPoint"}</Link>{"[] focusPoints"}</code> | Points on the viewfinder sampled for auto focus, each with a weight. |
| <Link id="m-infocusalpha" /><code>{"private float inFocusAlpha"}</code> | Alpha of focus point markers that are in focus. |
| <Link id="m-infocusmaterial" /><code>{"private Material inFocusMaterial"}</code> | Material for focus points that are in focus. |
| <Link id="m-interactingpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactingPickup"}</code> | Pickup the player grabs to adjust focus by hand. |
| <Link id="m-kernel" /><code>{"private int kernel"}</code> | Index of the compute shader kernel. |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> | Farthest focus distance allowed. |
| <Link id="m-mindistance" /><code>{"private float minDistance"}</code> | Nearest focus distance allowed. |
| <Link id="m-outtafocusalpha" /><code>{"private float outtaFocusAlpha"}</code> | Alpha of focus point markers that are out of focus. |
| <Link id="m-outtafocusmaterial" /><code>{"private Material outtaFocusMaterial"}</code> | Material for focus points that are out of focus. |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> | Dial transform turned during manual focus. |
| <Link id="m-readjustmentduration" /><code>{"private float readjustmentDuration"}</code> | Seconds the auto focus takes to ease to a new distance. |
| <Link id="m-readpositionsbuffer" /><code>{"private ComputeBuffer readPositionsBuffer"}</code> | Compute buffer of the focus points' normalised screen positions. |
| <Link id="m-results" /><code>{"private float[] results"}</code> | Depth readings per focus point from the last auto focus. |
| <Link id="m-resultsbuffer" /><code>{"private ComputeBuffer resultsBuffer"}</code> | Compute buffer the shader writes depth readings to. |
| <Link id="m-sensitivity" /><code>{"private float sensitivity"}</code> | How much focus distance changes per degree of hand twist in manual mode. |
| <Link id="m-totalfocusweight" /><code>{"private int totalFocusWeight"}</code> | Sum of the focus points' weights. |
| <Link id="m-viewsize" /><code>{"private Vector2 viewSize"}</code> | Size of the viewfinder area, used to normalise focus point positions. |
| <Link id="m-volume" /><code>{"private PostProcessVolume volume"}</code> | Post process volume holding the depth of field effect. |
| <Link id="m-willcalculate" /><code>{"private bool willCalculate"}</code> | Set when auto focus should run after the next camera render. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfocus" /><code><Link to="/mod/game-api/types/alta-customization/focuspuller-focusmode">{"FocusPuller.FocusMode"}</Link>{" CurrentFocus { get; private set; }"}</code> | Current focus mode. Changed only by `ToggleActive`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onfocusmodechanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-customization/focuspuller-focusmode">{"FocusPuller.FocusMode"}</Link>{"> OnFocusModeChanged"}</code> | Raised with the new mode after `ToggleActive`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggleactive" /><code>{"void ToggleActive()"}</code> | Cycles perfect, auto and manual focus. Turns depth of field and forced high res on for auto and manual, and shows points in auto. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoreadjustment-2" /><code>{"private IEnumerator AutoReadjustment(float targetDistance) (iterator)"}</code> | Coroutine that eases the depth of field focus distance to a target over `readjustmentDuration`. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's interaction filter to the camera and, off headless, waits for ownership and hides focus points. |
| <Link id="m-calculateautofocus" /><code>{"private void CalculateAutoFocus()"}</code> | Reads depth at each focus point, drops outliers, averages the rest and starts easing focus to that distance. Colours points in or out of focus. |
| <Link id="m-checkautofocus" /><code>{"private void CheckAutoFocus()"}</code> | On photo start in auto mode, flags auto focus to run after the next render. |
| <Link id="m-checkowner" /><code>{"private void CheckOwner(bool isOwned)"}</code> | When owned, hooks render and photo events, makes the in and out of focus materials, finds the depth of field effect and sets up the compute buffers. |
| <Link id="m-distancecheck" /><code>{"private IEnumerator DistanceCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Coroutine for manual mode: while the pickup is held, twisting the hand turns the pivot and changes the focus distance. |
| <Link id="m-finishedrender" /><code>{"private void FinishedRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | After the camera renders, runs a pending auto focus, and after a photo in auto mode hides the focus points until the screen is free. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | For the local owner, unhooks render events, cleans the materials and frees the compute buffers. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor gizmo for the view size and forward direction. |
| <Link id="m-preparetorender" /><code>{"private void PrepareToRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Pre-render hook. Does nothing useful in this build. |
| <Link id="m-returnpoints" /><code>{"private IEnumerator ReturnPoints() (iterator)"}</code> | Coroutine that shows the auto focus points again once the camera screen is free. |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the focus pickup is grabbed in manual mode, starts `DistanceCheck`. |

</details>

## Used in

Members of other types that take, return or hold a `FocusPuller`:

[`FocusButton.focusPuller`](/mod/game-api/types/alta-customization/focusbutton#m-focuspuller).

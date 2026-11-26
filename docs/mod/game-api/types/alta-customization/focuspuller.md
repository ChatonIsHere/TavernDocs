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
| <Link id="m-ctor" /><code>{"FocusPuller()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameradepthtexture" /><code>{"private static readonly int _CameraDepthTexture"}</code> | <span className="api-desc">Shader property ID for the global camera depth texture.</span> |
| <Link id="m-depthtexture" /><code>{"private static readonly int _DepthTexture"}</code> | <span className="api-desc">Shader property ID of the depth texture input on the compute shader.</span> |
| <Link id="m-height" /><code>{"private static readonly int _Height"}</code> | <span className="api-desc">Shader property ID for the render texture height.</span> |
| <Link id="m-width" /><code>{"private static readonly int _Width"}</code> | <span className="api-desc">Shader property ID for the render texture width.</span> |
| <Link id="m-autofocusreadjustmentcurve" /><code>{"private AnimationCurve autoFocusReadjustmentCurve"}</code> | <span className="api-desc">Easing curve used when auto focus moves to a new distance.</span> |
| <Link id="m-autoreadjustment" /><code>{"private Coroutine autoReadjustment"}</code> | <span className="api-desc">The running `AutoReadjustment` coroutine, if any.</span> |
| <Link id="m-basecamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" baseCamera"}</code> | <span className="api-desc">The hand camera this focus puller is on.</span> |
| <Link id="m-computeshader" /><code>{"private ComputeShader computeShader"}</code> | <span className="api-desc">Compute shader whose `Calculator` kernel samples depth at the focus points.</span> |
| <Link id="m-depthoffield" /><code>{"private DepthOfField depthOfField"}</code> | <span className="api-desc">Depth of field effect found on the volume's profile.</span> |
| <Link id="m-focallength" /><code>{"private float focalLength"}</code> | <span className="api-desc">Depth range around the focus distance where a point counts as in focus.</span> |
| <Link id="m-focuscorrection" /><code>{"private float focusCorrection"}</code> | <span className="api-desc">Distance added to the computed auto focus distance.</span> |
| <Link id="m-focuspoints" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/focuspuller-focuspoint">{"FocusPuller.FocusPoint"}</Link>{"[] focusPoints"}</code> | <span className="api-desc">Points on the viewfinder sampled for auto focus, each with a weight.</span> |
| <Link id="m-infocusalpha" /><code>{"private float inFocusAlpha"}</code> | <span className="api-desc">Alpha of focus point markers that are in focus.</span> |
| <Link id="m-infocusmaterial" /><code>{"private Material inFocusMaterial"}</code> | <span className="api-desc">Material for focus points that are in focus.</span> |
| <Link id="m-interactingpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactingPickup"}</code> | <span className="api-desc">Pickup the player grabs to adjust focus by hand.</span> |
| <Link id="m-kernel" /><code>{"private int kernel"}</code> | <span className="api-desc">Index of the compute shader kernel.</span> |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> | <span className="api-desc">Farthest focus distance allowed.</span> |
| <Link id="m-mindistance" /><code>{"private float minDistance"}</code> | <span className="api-desc">Nearest focus distance allowed.</span> |
| <Link id="m-outtafocusalpha" /><code>{"private float outtaFocusAlpha"}</code> | <span className="api-desc">Alpha of focus point markers that are out of focus.</span> |
| <Link id="m-outtafocusmaterial" /><code>{"private Material outtaFocusMaterial"}</code> | <span className="api-desc">Material for focus points that are out of focus.</span> |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> | <span className="api-desc">Dial transform turned during manual focus.</span> |
| <Link id="m-readjustmentduration" /><code>{"private float readjustmentDuration"}</code> | <span className="api-desc">Seconds the auto focus takes to ease to a new distance.</span> |
| <Link id="m-readpositionsbuffer" /><code>{"private ComputeBuffer readPositionsBuffer"}</code> | <span className="api-desc">Compute buffer of the focus points' normalised screen positions.</span> |
| <Link id="m-results" /><code>{"private float[] results"}</code> | <span className="api-desc">Depth readings per focus point from the last auto focus.</span> |
| <Link id="m-resultsbuffer" /><code>{"private ComputeBuffer resultsBuffer"}</code> | <span className="api-desc">Compute buffer the shader writes depth readings to.</span> |
| <Link id="m-sensitivity" /><code>{"private float sensitivity"}</code> | <span className="api-desc">How much focus distance changes per degree of hand twist in manual mode.</span> |
| <Link id="m-totalfocusweight" /><code>{"private int totalFocusWeight"}</code> | <span className="api-desc">Sum of the focus points' weights.</span> |
| <Link id="m-viewsize" /><code>{"private Vector2 viewSize"}</code> | <span className="api-desc">Size of the viewfinder area, used to normalise focus point positions.</span> |
| <Link id="m-volume" /><code>{"private PostProcessVolume volume"}</code> | <span className="api-desc">Post process volume holding the depth of field effect.</span> |
| <Link id="m-willcalculate" /><code>{"private bool willCalculate"}</code> | <span className="api-desc">Set when auto focus should run after the next camera render.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfocus" /><code><Link to="/mod/game-api/types/alta-customization/focuspuller-focusmode">{"FocusPuller.FocusMode"}</Link>{" CurrentFocus { get; private set; }"}</code> | <span className="api-desc">Current focus mode. Changed only by `ToggleActive`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onfocusmodechanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-customization/focuspuller-focusmode">{"FocusPuller.FocusMode"}</Link>{"> OnFocusModeChanged"}</code> | <span className="api-desc">Raised with the new mode after `ToggleActive`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggleactive" /><code>{"void ToggleActive()"}</code> | <span className="api-desc">Cycles perfect, auto and manual focus. Turns depth of field and forced high res on for auto and manual, and shows points in auto.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoreadjustment-2" /><code>{"private IEnumerator AutoReadjustment(float targetDistance) (iterator)"}</code> | <span className="api-desc">Coroutine that eases the depth of field focus distance to a target over `readjustmentDuration`.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup's interaction filter to the camera and, off headless, waits for ownership and hides focus points.</span> |
| <Link id="m-calculateautofocus" /><code>{"private void CalculateAutoFocus()"}</code> | <span className="api-desc">Reads depth at each focus point, drops outliers, averages the rest and starts easing focus to that distance. Colours points in or out of focus.</span> |
| <Link id="m-checkautofocus" /><code>{"private void CheckAutoFocus()"}</code> | <span className="api-desc">On photo start in auto mode, flags auto focus to run after the next render.</span> |
| <Link id="m-checkowner" /><code>{"private void CheckOwner(bool isOwned)"}</code> | <span className="api-desc">When owned, hooks render and photo events, makes the in and out of focus materials, finds the depth of field effect and sets up the compute buffers.</span> |
| <Link id="m-distancecheck" /><code>{"private IEnumerator DistanceCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Coroutine for manual mode: while the pickup is held, twisting the hand turns the pivot and changes the focus distance.</span> |
| <Link id="m-finishedrender" /><code>{"private void FinishedRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">After the camera renders, runs a pending auto focus, and after a photo in auto mode hides the focus points until the screen is free.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">For the local owner, unhooks render events, cleans the materials and frees the compute buffers.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor gizmo for the view size and forward direction.</span> |
| <Link id="m-preparetorender" /><code>{"private void PrepareToRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Pre-render hook. Does nothing useful in this build.</span> |
| <Link id="m-returnpoints" /><code>{"private IEnumerator ReturnPoints() (iterator)"}</code> | <span className="api-desc">Coroutine that shows the auto focus points again once the camera screen is free.</span> |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When the focus pickup is grabbed in manual mode, starts `DistanceCheck`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FocusPuller`:

<div className="api-used-in">

[`FocusButton.focusPuller`](/mod/game-api/types/alta-customization/focusbutton#m-focuspuller).

</div>

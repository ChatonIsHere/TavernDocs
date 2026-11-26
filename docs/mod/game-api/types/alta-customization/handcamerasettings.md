---
title: "HandCameraSettings"
description: "ScriptableObject with the hand camera's tuning: timer options, flash and fade timings, photo colours, antialiasing and the layers that block a shot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandCameraSettings

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

ScriptableObject with the hand camera's tuning: timer options, flash and fade timings, photo colours, antialiasing and the layers that block a shot.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCameraSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeantialiasing" /><code>{"private PostProcessLayer.Antialiasing activeAntialiasing"}</code> | <span className="api-desc">Backing field for `ActiveAntialiasing`.</span> |
| <Link id="m-blocklayermask" /><code>{"private LayerMask blockLayerMask"}</code> | <span className="api-desc">Backing field for `BlockLayerMask`.</span> |
| <Link id="m-capturealertduration" /><code>{"private float captureAlertDuration"}</code> | <span className="api-desc">Backing field for `CaptureAlertDuration`.</span> |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | <span className="api-desc">Backing field for `FadeDuration`.</span> |
| <Link id="m-photocolor" /><code>{"private Color photoColor"}</code> | <span className="api-desc">Backing field for `PhotoColor`.</span> |
| <Link id="m-photoreviewtime" /><code>{"private float photoReviewTime"}</code> | <span className="api-desc">Backing field for `PhotoReviewTime`.</span> |
| <Link id="m-timeroptions" /><code>{"private int[] timerOptions"}</code> | <span className="api-desc">Self-timer lengths in seconds, 0, 2, 5 and 10 by default. Read through `GetTimer`.</span> |
| <Link id="m-timertickcolor" /><code>{"private Color timerTickColor"}</code> | <span className="api-desc">Backing field for `TimerTickColor`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeantialiasing-2" /><code>{"PostProcessLayer.Antialiasing ActiveAntialiasing { get; }"}</code> | <span className="api-desc">Post-process antialiasing mode used while the camera is active. Defaults to FXAA.</span> |
| <Link id="m-blocklayermask-2" /><code>{"LayerMask BlockLayerMask { get; }"}</code> | <span className="api-desc">Layers that count as blocking the camera.</span> |
| <Link id="m-capturealertduration-2" /><code>{"float CaptureAlertDuration { get; }"}</code> | <span className="api-desc">How long the capture alert shows, in seconds. Defaults to 0.2.</span> |
| <Link id="m-fadeduration-2" /><code>{"float FadeDuration { get; }"}</code> | <span className="api-desc">Fade time in seconds. Defaults to 0.5.</span> |
| <Link id="m-photocolor-2" /><code>{"Color PhotoColor { get; }"}</code> | <span className="api-desc">Colour used for the photo. Defaults to white.</span> |
| <Link id="m-photoreviewtime-2" /><code>{"float PhotoReviewTime { get; }"}</code> | <span className="api-desc">How long a taken photo stays up for review, in seconds. Defaults to 4.</span> |
| <Link id="m-timeroptionslength" /><code>{"int TimerOptionsLength { get; }"}</code> | <span className="api-desc">Number of self-timer options, used to cycle through them.</span> |
| <Link id="m-timertickcolor-2" /><code>{"Color TimerTickColor { get; }"}</code> | <span className="api-desc">Colour shown on each self-timer tick. Defaults to red.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettimer" /><code>{"int GetTimer(int current)"}</code> | <span className="api-desc">Returns the self-timer length in seconds for the given option index.</span> |

## Used in

Members of other types that take, return or hold a `HandCameraSettings`:

<div className="api-used-in">

[`BlockableCamera.settings`](/mod/game-api/types/alta-customization/blockablecamera#m-settings), [`HandCamera.settings`](/mod/game-api/types/alta-customization/handcamera#m-settings).

</div>

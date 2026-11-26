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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCameraSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeantialiasing" /><code>{"private PostProcessLayer.Antialiasing activeAntialiasing"}</code> | Backing field for `ActiveAntialiasing`. |
| <Link id="m-blocklayermask" /><code>{"private LayerMask blockLayerMask"}</code> | Backing field for `BlockLayerMask`. |
| <Link id="m-capturealertduration" /><code>{"private float captureAlertDuration"}</code> | Backing field for `CaptureAlertDuration`. |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | Backing field for `FadeDuration`. |
| <Link id="m-photocolor" /><code>{"private Color photoColor"}</code> | Backing field for `PhotoColor`. |
| <Link id="m-photoreviewtime" /><code>{"private float photoReviewTime"}</code> | Backing field for `PhotoReviewTime`. |
| <Link id="m-timeroptions" /><code>{"private int[] timerOptions"}</code> | Self-timer lengths in seconds, 0, 2, 5 and 10 by default. Read through `GetTimer`. |
| <Link id="m-timertickcolor" /><code>{"private Color timerTickColor"}</code> | Backing field for `TimerTickColor`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeantialiasing-2" /><code>{"PostProcessLayer.Antialiasing ActiveAntialiasing { get; }"}</code> | Post-process antialiasing mode used while the camera is active. Defaults to FXAA. |
| <Link id="m-blocklayermask-2" /><code>{"LayerMask BlockLayerMask { get; }"}</code> | Layers that count as blocking the camera. |
| <Link id="m-capturealertduration-2" /><code>{"float CaptureAlertDuration { get; }"}</code> | How long the capture alert shows, in seconds. Defaults to 0.2. |
| <Link id="m-fadeduration-2" /><code>{"float FadeDuration { get; }"}</code> | Fade time in seconds. Defaults to 0.5. |
| <Link id="m-photocolor-2" /><code>{"Color PhotoColor { get; }"}</code> | Colour used for the photo. Defaults to white. |
| <Link id="m-photoreviewtime-2" /><code>{"float PhotoReviewTime { get; }"}</code> | How long a taken photo stays up for review, in seconds. Defaults to 4. |
| <Link id="m-timeroptionslength" /><code>{"int TimerOptionsLength { get; }"}</code> | Number of self-timer options, used to cycle through them. |
| <Link id="m-timertickcolor-2" /><code>{"Color TimerTickColor { get; }"}</code> | Colour shown on each self-timer tick. Defaults to red. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettimer" /><code>{"int GetTimer(int current)"}</code> | Returns the self-timer length in seconds for the given option index. |

## Used in

Members of other types that take, return or hold a `HandCameraSettings`:

[`BlockableCamera.settings`](/game-api/types/alta-customization/blockablecamera#m-settings), [`HandCamera.settings`](/game-api/types/alta-customization/handcamera#m-settings).

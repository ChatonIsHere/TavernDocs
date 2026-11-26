---
title: "HandCameraViewfinderResizerSettings.HandCameraViewfinderResizer"
description: "Keeps the hand camera viewfinder within a set distance of the local player's head by pulling it closer each late update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandCameraViewfinderResizerSettings.HandCameraViewfinderResizer

A **private class** in `Root.Township`, `Alta.ScreenshotCamera`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Keeps the hand camera viewfinder within a set distance of the local player's head by pulling it closer each late update. Client only.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`HandCameraViewfinderResizerSettings`](/game-api/types/alta-customization/handcameraviewfinderresizersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCameraViewfinderResizer(Transform targetTransform, "}<Link to="/game-api/types/alta-customization/handcameraviewfinderresizersettings">{"HandCameraViewfinderResizerSettings"}</Link>{" settings)"}</code> | Creates a `HandCameraViewfinderResizerSettings.HandCameraViewfinderResizer` from `targetTransform` and `settings`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | The viewfinder's original local position. |
| <Link id="m-parenttransform" /><code>{"private Transform parentTransform"}</code> | The viewfinder's parent, used to measure distance from the head. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcameraviewfinderresizersettings">{"HandCameraViewfinderResizerSettings"}</Link>{" settings"}</code> | Settings holding `clampDistance`. |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | The viewfinder transform being moved. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Late update registration. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Stops the late update loop. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateloop" /><code>{"private void UpdateLoop()"}</code> | Late update that runs `UpdateWithCameraPosition` with the local player's head position. |
| <Link id="m-updatewithcameraposition" /><code>{"private void UpdateWithCameraPosition(Vector3 cameraPosition)"}</code> | Leaves the viewfinder at its local position when close enough, otherwise places it `clampDistance` from the head towards the camera. |

</details>

## Used in

Members of other types that take, return or hold a `HandCameraViewfinderResizer`:

[`HandCameraViewfinderResizerSettings.currentResizer`](/game-api/types/alta-customization/handcameraviewfinderresizersettings#m-currentresizer).

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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`HandCameraViewfinderResizerSettings`](/mod/game-api/types/alta-customization/handcameraviewfinderresizersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCameraViewfinderResizer(Transform targetTransform, "}<Link to="/mod/game-api/types/alta-customization/handcameraviewfinderresizersettings">{"HandCameraViewfinderResizerSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Creates a `HandCameraViewfinderResizerSettings.HandCameraViewfinderResizer` from `targetTransform` and `settings`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | <span className="api-desc">The viewfinder's original local position.</span> |
| <Link id="m-parenttransform" /><code>{"private Transform parentTransform"}</code> | <span className="api-desc">The viewfinder's parent, used to measure distance from the head.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcameraviewfinderresizersettings">{"HandCameraViewfinderResizerSettings"}</Link>{" settings"}</code> | <span className="api-desc">Settings holding `clampDistance`.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">The viewfinder transform being moved.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Late update registration.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Stops the late update loop.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateloop" /><code>{"private void UpdateLoop()"}</code> | <span className="api-desc">Late update that runs `UpdateWithCameraPosition` with the local player's head position.</span> |
| <Link id="m-updatewithcameraposition" /><code>{"private void UpdateWithCameraPosition(Vector3 cameraPosition)"}</code> | <span className="api-desc">Leaves the viewfinder at its local position when close enough, otherwise places it `clampDistance` from the head towards the camera.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HandCameraViewfinderResizer`:

<div className="api-used-in">

[`HandCameraViewfinderResizerSettings.currentResizer`](/mod/game-api/types/alta-customization/handcameraviewfinderresizersettings#m-currentresizer).

</div>

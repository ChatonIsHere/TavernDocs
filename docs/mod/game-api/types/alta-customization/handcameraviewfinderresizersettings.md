---
title: "HandCameraViewfinderResizerSettings"
description: "Client: keeps the hand camera's viewfinder from going further than a set distance from the player's head, pulling it in along the line of sight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandCameraViewfinderResizerSettings

A **internal class** in `Root.Township`, `Alta.ScreenshotCamera`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client: keeps the hand camera's viewfinder from going further than a set distance from the player's head, pulling it in along the line of sight. Internal asset.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`HandCameraViewfinderResizer`](/mod/game-api/types/alta-customization/handcameraviewfinderresizersettings-handcameraviewfinderresizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCameraViewfinderResizerSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clampdistance" /><code>{"private float clampDistance"}</code> | <span className="api-desc">Furthest the viewfinder can be from the head. Default 3.</span> |
| <Link id="m-currentresizer" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcameraviewfinderresizersettings-handcameraviewfinderresizer">{"HandCameraViewfinderResizerSettings.HandCameraViewfinderResizer"}</Link>{" currentResizer"}</code> | <span className="api-desc">The resizer running for the current viewfinder, or null.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableresizing" /><code>{"void DisableResizing()"}</code> | <span className="api-desc">Stops the current resizer, if any.</span> |
| <Link id="m-enableresizingfortarget" /><code>{"void EnableResizingForTarget(Transform viewFinder)"}</code> | <span className="api-desc">Starts clamping a viewfinder transform each late update, replacing any resizer already running.</span> |

## Used in

Members of other types that take, return or hold a `HandCameraViewfinderResizerSettings`:

<div className="api-used-in">

[`HandCamera.viewfinderResizerSettings`](/mod/game-api/types/alta-customization/handcamera#m-viewfinderresizersettings), [`HandCameraViewfinderResizerSettings.HandCameraViewfinderResizer.HandCameraViewfinderResizer`](/mod/game-api/types/alta-customization/handcameraviewfinderresizersettings-handcameraviewfinderresizer#m-ctor), [`HandCameraViewfinderResizerSettings.HandCameraViewfinderResizer.settings`](/mod/game-api/types/alta-customization/handcameraviewfinderresizersettings-handcameraviewfinderresizer#m-settings).

</div>

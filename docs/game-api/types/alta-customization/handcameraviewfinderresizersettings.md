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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`HandCameraViewfinderResizer`](/game-api/types/alta-customization/handcameraviewfinderresizersettings-handcameraviewfinderresizer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandCameraViewfinderResizerSettings()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clampdistance" /><code>{"private float clampDistance"}</code> | Furthest the viewfinder can be from the head. Default 3. |
| <Link id="m-currentresizer" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcameraviewfinderresizersettings-handcameraviewfinderresizer">{"HandCameraViewfinderResizerSettings.HandCameraViewfinderResizer"}</Link>{" currentResizer"}</code> | The resizer running for the current viewfinder, or null. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableresizing" /><code>{"void DisableResizing()"}</code> | Stops the current resizer, if any. |
| <Link id="m-enableresizingfortarget" /><code>{"void EnableResizingForTarget(Transform viewFinder)"}</code> | Starts clamping a viewfinder transform each late update, replacing any resizer already running. |

## Used in

Members of other types that take, return or hold a `HandCameraViewfinderResizerSettings`:

[`HandCamera.viewfinderResizerSettings`](/game-api/types/alta-customization/handcamera#m-viewfinderresizersettings), [`HandCameraViewfinderResizerSettings.HandCameraViewfinderResizer.HandCameraViewfinderResizer`](/game-api/types/alta-customization/handcameraviewfinderresizersettings-handcameraviewfinderresizer#m-ctor), [`HandCameraViewfinderResizerSettings.HandCameraViewfinderResizer.settings`](/game-api/types/alta-customization/handcameraviewfinderresizersettings-handcameraviewfinderresizer#m-settings).

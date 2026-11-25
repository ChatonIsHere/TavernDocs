---
title: "BlockableCamera"
description: "Base for a hand camera view that switches its camera off while something is in the way (a sphere or capsule check, in the subclasses)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlockableCamera

An **abstract class** in `Root.Township`, `Alta.ScreenshotCamera`.

Base for a hand camera view that switches its camera off while something is in the way (a sphere or capsule check, in the subclasses). Client side.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CapsuleBlockableCamera`](/game-api/types/alta-customization/capsuleblockablecamera), [`SphereBlockableCamera`](/game-api/types/alta-customization/sphereblockablecamera)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected BlockableCamera()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-postprocesslayer" /><code>{"private PostProcessLayer postProcessLayer"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamerasettings">{"HandCameraSettings"}</Link>{" settings"}</code> |
| <Link id="m-targetcamera" /><code>{"private Camera targetCamera"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isblocked" /><code>{"bool IsBlocked { get; private set; }"}</code> | True while the camera is blocked and turned off. |
| <Link id="m-postprocesslayer-2" /><code>{"PostProcessLayer PostProcessLayer { get; }"}</code> | The camera's post processing layer. |
| <Link id="m-targetcamera-2" /><code>{"Camera TargetCamera { get; }"}</code> | The camera being switched. |
| <Link id="m-layermask" /><code>{"protected LayerMask LayerMask { get; }"}</code> | Layers that block the camera, from the hand camera settings. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | Turns the camera off, or on if nothing blocks it. |
| <Link id="m-updateblock" /><code>{"void UpdateBlock()"}</code> | Checks for blocking and turns the camera on or off when that changes. |
| <Link id="m-updateblockinternal" /><code>{"protected abstract bool UpdateBlockInternal()"}</code> | Returns true if something blocks the camera now. |

## Used in

Members of other types that take, return or hold a `BlockableCamera`:

[`HandCamera.ActiveCamera`](/game-api/types/alta-customization/handcamera#m-activecamera), [`HandCamera.frontCamera`](/game-api/types/alta-customization/handcamera#m-frontcamera), [`HandCamera.selfieCamera`](/game-api/types/alta-customization/handcamera#m-selfiecamera).

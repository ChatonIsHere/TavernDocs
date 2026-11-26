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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CapsuleBlockableCamera`](/mod/game-api/types/alta-customization/capsuleblockablecamera), [`SphereBlockableCamera`](/mod/game-api/types/alta-customization/sphereblockablecamera)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BlockableCamera()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postprocesslayer" /><code>{"private PostProcessLayer postProcessLayer"}</code> | <span className="api-desc">Backing field for `PostProcessLayer`.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamerasettings">{"HandCameraSettings"}</Link>{" settings"}</code> | <span className="api-desc">Hand camera settings. Supplies the layer mask used to test for blocking.</span> |
| <Link id="m-targetcamera" /><code>{"private Camera targetCamera"}</code> | <span className="api-desc">Backing field for `TargetCamera`, the camera turned off while blocked.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isblocked" /><code>{"bool IsBlocked { get; private set; }"}</code> | <span className="api-desc">True while the camera is blocked and turned off.</span> |
| <Link id="m-postprocesslayer-2" /><code>{"PostProcessLayer PostProcessLayer { get; }"}</code> | <span className="api-desc">The camera's post processing layer.</span> |
| <Link id="m-targetcamera-2" /><code>{"Camera TargetCamera { get; }"}</code> | <span className="api-desc">The camera being switched.</span> |
| <Link id="m-layermask" /><code>{"protected LayerMask LayerMask { get; }"}</code> | <span className="api-desc">Layers that block the camera, from the hand camera settings.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | <span className="api-desc">Turns the camera off, or on if nothing blocks it.</span> |
| <Link id="m-updateblock" /><code>{"void UpdateBlock()"}</code> | <span className="api-desc">Checks for blocking and turns the camera on or off when that changes.</span> |
| <Link id="m-updateblockinternal" /><code>{"protected abstract bool UpdateBlockInternal()"}</code> | <span className="api-desc">Returns true if something blocks the camera now.</span> |

## Used in

Members of other types that take, return or hold a `BlockableCamera`:

<div className="api-used-in">

[`HandCamera.ActiveCamera`](/mod/game-api/types/alta-customization/handcamera#m-activecamera), [`HandCamera.frontCamera`](/mod/game-api/types/alta-customization/handcamera#m-frontcamera), [`HandCamera.selfieCamera`](/mod/game-api/types/alta-customization/handcamera#m-selfiecamera).

</div>

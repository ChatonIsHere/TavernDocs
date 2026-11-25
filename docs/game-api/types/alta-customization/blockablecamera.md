---
title: "BlockableCamera"
description: "abstract class BlockableCamera in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlockableCamera

An **abstract class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CapsuleBlockableCamera`](/game-api/types/alta-customization/capsuleblockablecamera), [`SphereBlockableCamera`](/game-api/types/alta-customization/sphereblockablecamera)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BlockableCamera()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-postprocesslayer" /><code>{"private PostProcessLayer postProcessLayer"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamerasettings">{"HandCameraSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-targetcamera" /><code>{"private Camera targetCamera"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isblocked" /><code>{"bool IsBlocked { get; private set; }"}</code> |  |
| <Link id="m-postprocesslayer-2" /><code>{"PostProcessLayer PostProcessLayer { get; }"}</code> |  |
| <Link id="m-targetcamera-2" /><code>{"Camera TargetCamera { get; }"}</code> |  |
| <Link id="m-layermask" /><code>{"protected LayerMask LayerMask { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> |  |
| <Link id="m-updateblock" /><code>{"void UpdateBlock()"}</code> |  |
| <Link id="m-updateblockinternal" /><code>{"protected abstract bool UpdateBlockInternal()"}</code> |  |

## Used in

Members of other types that take, return or hold a `BlockableCamera`:

[`HandCamera.ActiveCamera`](/game-api/types/alta-customization/handcamera#m-activecamera), [`HandCamera.frontCamera`](/game-api/types/alta-customization/handcamera#m-frontcamera), [`HandCamera.selfieCamera`](/game-api/types/alta-customization/handcamera#m-selfiecamera).

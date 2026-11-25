---
title: "DeviceInputController"
description: "abstract class DeviceInputController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeviceInputController

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Derived types** [`FlyCamInputController`](/game-api/types/global-e-h/flycaminputcontroller), [`OpenXRInputController`](/game-api/types/global-m-o/openxrinputcontroller), [`SteamVRInputController`](/game-api/types/global-s/steamvrinputcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected DeviceInputController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-doubletapspeed" /><code>{"private const float DoubleTapSpeed"}</code> |  |
| <Link id="m-doubletaptarget" /><code>{"private float doubleTapTarget"}</code> |  |
| <Link id="m-input" /><code>{"private "}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input"}</code> |  |
| <Link id="m-phototime" /><code>{"private const float PhotoTime"}</code> |  |
| <Link id="m-targetphototime" /><code>{"private float targetPhotoTime"}</code> |  |
| <Link id="m-wastapping" /><code>{"private bool wasTapping"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playerinput" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" { get; }"}</code> |  |
| <Link id="m-input-2" /><code>{"protected virtual "}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" Input { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendinputto" /><code>{"void SendInputTo("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-triggerhaptics" /><code>{"abstract void TriggerHaptics(float strength, float frequency, float remainingTime)"}</code> |  |
| <Link id="m-updateposition" /><code>{"virtual void UpdatePosition()"}</code> |  |
| <Link id="m-calculatedoubletap" /><code>{"protected bool CalculateDoubleTap(bool isTapping)"}</code> |  |
| <Link id="m-calculatephoto" /><code>{"protected bool CalculatePhoto("}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input, bool photoAction)"}</code> |  |
| <Link id="m-populateinput" /><code>{"protected abstract void PopulateInput("}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DeviceInputController`:

[`AutoCamDeviceController.CreateController`](/game-api/types/global-a-b/autocamdevicecontroller#m-createcontroller), [`FlyCamDeviceController.CreateController`](/game-api/types/global-e-h/flycamdevicecontroller#m-createcontroller), [`IXrDeviceSdkController.CreateController`](/game-api/types/global-i-l/ixrdevicesdkcontroller#m-createcontroller), [`OpenXRDeviceController.CreateController`](/game-api/types/global-m-o/openxrdevicecontroller#m-createcontroller), [`PlayerInput.inputController`](/game-api/types/global-p/playerinput#m-inputcontroller), [`PlayerInput.InputController`](/game-api/types/global-p/playerinput#m-inputcontroller-2), [`PlayerInput.SetPlatformController`](/game-api/types/global-p/playerinput#m-setplatformcontroller), [`SteamVRDeviceController.CreateController`](/game-api/types/global-s/steamvrdevicecontroller#m-createcontroller), [`XrDeviceSdkController.CreateController`](/game-api/types/global-t-x/xrdevicesdkcontroller#m-createcontroller).

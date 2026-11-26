---
title: "DeviceInputController"
description: "Base for a VR device or fly cam input source (SteamVR, OpenXR, fly cam)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeviceInputController

An **abstract class** in `Root.Township`, the global namespace.

Base for a VR device or fly cam input source (SteamVR, OpenXR, fly cam). Fills a `ControllerInput` each update and pushes it into a `PlayerInput`. Client side.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Derived types** [`FlyCamInputController`](/mod/game-api/types/global-e-h/flycaminputcontroller), [`OpenXRInputController`](/mod/game-api/types/global-m-o/openxrinputcontroller), [`SteamVRInputController`](/mod/game-api/types/global-s/steamvrinputcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected DeviceInputController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Creates a `DeviceInputController` from `controller`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-doubletapspeed" /><code>{"private const float DoubleTapSpeed"}</code> | <span className="api-desc">Window in seconds (1) for a second tap to count as a double tap.</span> |
| <Link id="m-doubletaptarget" /><code>{"private float doubleTapTarget"}</code> | <span className="api-desc">Real time by which the second tap must land, or -1 when no tap is pending.</span> |
| <Link id="m-input" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input"}</code> | <span className="api-desc">Backing field for `Input`, created on first use.</span> |
| <Link id="m-phototime" /><code>{"private const float PhotoTime"}</code> | <span className="api-desc">Seconds (0.5) the photo action must be held to count as a long photo.</span> |
| <Link id="m-targetphototime" /><code>{"private float targetPhotoTime"}</code> | <span className="api-desc">Real time when the held photo action becomes a long photo, or -1.</span> |
| <Link id="m-wastapping" /><code>{"private bool wasTapping"}</code> | <span className="api-desc">Tap state from the last `CalculateDoubleTap` call, to detect new presses.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playerinput" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" { get; }"}</code> | <span className="api-desc">The `PlayerInput` (hand) this device feeds.</span> |
| <Link id="m-input-2" /><code>{"protected virtual "}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" Input { get; }"}</code> | <span className="api-desc">The reused `ControllerInput` this device fills each update.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendinputto" /><code>{"void SendInputTo("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Fills the input from the device and applies it to the given `PlayerInput`, firing its events.</span> |
| <Link id="m-triggerhaptics" /><code>{"abstract void TriggerHaptics(float strength, float frequency, float remainingTime)"}</code> | <span className="api-desc">Plays a vibration with the given strength, frequency and duration.</span> |
| <Link id="m-updateposition" /><code>{"virtual void UpdatePosition()"}</code> | <span className="api-desc">Per-device hook to update the tracked position. Does nothing in the base class.</span> |
| <Link id="m-calculatedoubletap" /><code>{"protected bool CalculateDoubleTap(bool isTapping)"}</code> | <span className="api-desc">Helper for subclasses: true on the second tap within one second.</span> |
| <Link id="m-calculatephoto" /><code>{"protected bool CalculatePhoto("}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input, bool photoAction)"}</code> | <span className="api-desc">Helper for subclasses: true once the photo action has been held for half a second.</span> |
| <Link id="m-populateinput" /><code>{"protected abstract void PopulateInput("}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> | <span className="api-desc">Implemented per device to read the hardware into the input.</span> |

## Used in

Members of other types that take, return or hold a `DeviceInputController`:

<div className="api-used-in">

[`AutoCamDeviceController.CreateController`](/mod/game-api/types/global-a-b/autocamdevicecontroller#m-createcontroller), [`FlyCamDeviceController.CreateController`](/mod/game-api/types/global-e-h/flycamdevicecontroller#m-createcontroller), [`IXrDeviceSdkController.CreateController`](/mod/game-api/types/global-i-l/ixrdevicesdkcontroller#m-createcontroller), [`OpenXRDeviceController.CreateController`](/mod/game-api/types/global-m-o/openxrdevicecontroller#m-createcontroller), [`PlayerInput.inputController`](/mod/game-api/types/global-p/playerinput#m-inputcontroller), [`PlayerInput.InputController`](/mod/game-api/types/global-p/playerinput#m-inputcontroller-2), [`PlayerInput.SetPlatformController`](/mod/game-api/types/global-p/playerinput#m-setplatformcontroller), [`SteamVRDeviceController.CreateController`](/mod/game-api/types/global-s/steamvrdevicecontroller#m-createcontroller), [`XrDeviceSdkController.CreateController`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller#m-createcontroller).

</div>

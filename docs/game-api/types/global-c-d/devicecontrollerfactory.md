---
title: "DeviceControllerFactory"
description: "Creates the XR device controller for a player mode (fly cam, auto cam, OpenXR, SteamVR)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeviceControllerFactory

A **static class** in `Root.Township`, no namespace.

Creates the XR device controller for a player mode (fly cam, auto cam, OpenXR, SteamVR). Called by `PlatformDriver` when the mode changes.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/game-api/types/global-i-l/ixrdevicesdkcontroller">{"IXrDeviceSdkController"}</Link>{" Create("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> | Returns the device controller for the mode; throws for an unknown mode. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getandroidcontroller" /><code>{"private static "}<Link to="/game-api/types/global-i-l/ixrdevicesdkcontroller">{"IXrDeviceSdkController"}</Link>{" GetAndroidController()"}</code> | Throws `NotSupportedException`; there is no Quest or Pico controller in this build. |
| <Link id="m-getsteamvrcontroller" /><code>{"private static "}<Link to="/game-api/types/global-i-l/ixrdevicesdkcontroller">{"IXrDeviceSdkController"}</Link>{" GetSteamVRController()"}</code> | Returns a new `SteamVRDeviceController`. |

</details>

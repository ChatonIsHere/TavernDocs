---
title: "DeviceControllerFactory"
description: "Creates the XR device controller for a player mode (fly cam, auto cam, OpenXR, SteamVR)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeviceControllerFactory

A **static class** in `Root.Township`, the global namespace.

Creates the XR device controller for a player mode (fly cam, auto cam, OpenXR, SteamVR). Called by `PlatformDriver` when the mode changes.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/ixrdevicesdkcontroller">{"IXrDeviceSdkController"}</Link>{" Create("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> | <span className="api-desc">Returns the device controller for the mode; throws for an unknown mode.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getandroidcontroller" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/ixrdevicesdkcontroller">{"IXrDeviceSdkController"}</Link>{" GetAndroidController()"}</code> | <span className="api-desc">Throws `NotSupportedException`; there is no Quest or Pico controller in this build.</span> |
| <Link id="m-getsteamvrcontroller" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/ixrdevicesdkcontroller">{"IXrDeviceSdkController"}</Link>{" GetSteamVRController()"}</code> | <span className="api-desc">Returns a new `SteamVRDeviceController`.</span> |

</details>

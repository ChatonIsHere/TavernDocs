---
title: "AutoCamDeviceLifecycle"
description: "Device lifecycle for AutoCam mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoCamDeviceLifecycle

A **class** in `Root.Township`, the global namespace.

Device lifecycle for AutoCam mode. Its only job is to show the mouse cursor while enabled and hide it when disabled.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`DeviceLifecycle`](/mod/game-api/types/global-c-d/devicelifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoCamDeviceLifecycle("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Creates an `AutoCamDeviceLifecycle` from `player` and `platformDevice`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablesdk" /><code>{"override void DisableSDK()"}</code> | Hides the cursor. |
| <Link id="m-enablesdk" /><code>{"override void EnableSDK()"}</code> | Shows the cursor. |

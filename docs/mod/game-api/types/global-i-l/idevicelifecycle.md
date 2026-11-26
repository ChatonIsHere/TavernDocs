---
title: "IDeviceLifecycle"
description: "A VR or input device platform: turns its SDK on and off and gets update calls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDeviceLifecycle

An **interface** in `Root.Township`, the global namespace.

A VR or input device platform: turns its SDK on and off and gets update calls. `DeviceLifecycle` is the base implementation.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`DeviceLifecycle`](/mod/game-api/types/global-c-d/devicelifecycle)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" Player { get; }"}</code> | The platform player this device drives. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablesdk" /><code>{"void DisableSDK()"}</code> | Shuts down the device SDK. |
| <Link id="m-enablesdk" /><code>{"void EnableSDK()"}</code> | Starts the device SDK. |
| <Link id="m-fixedupdate" /><code>{"void FixedUpdate()"}</code> | Called each physics step. |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> | Called each frame after updates. |
| <Link id="m-setdeviceplayer" /><code>{"void SetDevicePlayer("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" newPlayer)"}</code> | Sets the platform player the device drives. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Called each frame. |

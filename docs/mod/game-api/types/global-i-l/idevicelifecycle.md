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
| <Link id="m-player" /><code><Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" Player { get; }"}</code> | <span className="api-desc">The platform player this device drives.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablesdk" /><code>{"void DisableSDK()"}</code> | <span className="api-desc">Shuts down the device SDK.</span> |
| <Link id="m-enablesdk" /><code>{"void EnableSDK()"}</code> | <span className="api-desc">Starts the device SDK.</span> |
| <Link id="m-fixedupdate" /><code>{"void FixedUpdate()"}</code> | <span className="api-desc">Called each physics step.</span> |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> | <span className="api-desc">Called each frame after updates.</span> |
| <Link id="m-setdeviceplayer" /><code>{"void SetDevicePlayer("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" newPlayer)"}</code> | <span className="api-desc">Sets the platform player the device drives.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Called each frame.</span> |

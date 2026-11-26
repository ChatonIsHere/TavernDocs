---
title: "FlyCamDeviceController"
description: "Device controller for the fly cam (spectator) player mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamDeviceController

A **class** in `Root.Township`, the global namespace.

Device controller for the fly cam (spectator) player mode. Creates the fly cam's device lifecycle and keyboard/mouse/gamepad input controller.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`XrDeviceSdkController`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamDeviceController()"}</code> | <span className="api-desc">Creates a `FlyCamDeviceController` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprovidingposition" /><code>{"override bool IsProvidingPosition { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-mode" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | <span className="api-desc">`PlayerMode.Fly`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"override "}<Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Returns a `FlyCamInputController` for a hand.</span> |
| <Link id="m-createinterface" /><code>{"override "}<Link to="/mod/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | <span className="api-desc">Returns a plain `FlyCamDeviceLifecycle`.</span> |
| <Link id="m-start" /><code>{"protected override IEnumerator Start() (iterator)"}</code> | <span className="api-desc">Does nothing, unlike XR controllers that start an SDK.</span> |

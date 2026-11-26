---
title: "PlatformDriver"
description: "Singleton that starts and runs the active XR or flat device controller for the chosen player mode, and forwards Unity updates to it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformDriver

A **class** in `Root.Township`, the global namespace.

Singleton that starts and runs the active XR or flat device controller for the chosen player mode, and forwards Unity updates to it. Client-side.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`SingletonBehaviour<PlatformDriver>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`PlatformDriver`](/mod/game-api/types/global-p/platformdriver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformDriver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mode" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode"}</code> | Backing field for `Mode`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activedevice" /><code><Link to="/mod/game-api/types/global-i-l/ixrdevicesdkcontroller">{"IXrDeviceSdkController"}</Link>{" ActiveDevice { get; private set; }"}</code> | The device controller in use, or null before a platform starts. |
| <Link id="m-mode-2" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; set; }"}</code> | The current player mode. Setting it raises `PlatformSet` first. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-platformset" /><code>{"static event "}<Link to="/mod/game-api/types/global-p/platformmodehandler">{"PlatformModeHandler"}</Link>{" PlatformSet"}</code> | Static event raised when `Mode` is set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupplatform" /><code>{"IEnumerator SetupPlatform("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" newMode, "}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player) (iterator)"}</code> | Starts the platform for the mode if none is running, then gives the device its player. |
| <Link id="m-stopactiveplatform" /><code>{"void StopActivePlatform()"}</code> | Stops the active device and sets the mode back to unassigned. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Forwards `FixedUpdate` to the active device. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Forwards `LateUpdate` to the active device. |
| <Link id="m-startplatform" /><code>{"private Coroutine StartPlatform("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" newMode, "}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> | Starts `StartPlatformCoroutine` as a coroutine. |
| <Link id="m-startplatformcoroutine" /><code>{"private IEnumerator StartPlatformCoroutine("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" newMode, "}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player) (iterator)"}</code> | Creates the device controller for the mode, waits for the platform device, then starts it. Refuses to swap modes. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Forwards `Update` to the active device. |

</details>

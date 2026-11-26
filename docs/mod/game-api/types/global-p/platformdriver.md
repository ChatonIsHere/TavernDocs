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
| <Link id="m-ctor" /><code>{"PlatformDriver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mode" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode"}</code> | <span className="api-desc">Backing field for `Mode`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activedevice" /><code><Link to="/mod/game-api/types/global-i-l/ixrdevicesdkcontroller">{"IXrDeviceSdkController"}</Link>{" ActiveDevice { get; private set; }"}</code> | <span className="api-desc">The device controller in use, or null before a platform starts.</span> |
| <Link id="m-mode-2" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; set; }"}</code> | <span className="api-desc">The current player mode. Setting it raises `PlatformSet` first.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-platformset" /><code>{"static event "}<Link to="/mod/game-api/types/global-p/platformmodehandler">{"PlatformModeHandler"}</Link>{" PlatformSet"}</code> | <span className="api-desc">Static event raised when `Mode` is set.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupplatform" /><code>{"IEnumerator SetupPlatform("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" newMode, "}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player) (iterator)"}</code> | <span className="api-desc">Starts the platform for the mode if none is running, then gives the device its player.</span> |
| <Link id="m-stopactiveplatform" /><code>{"void StopActivePlatform()"}</code> | <span className="api-desc">Stops the active device and sets the mode back to unassigned.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Forwards `FixedUpdate` to the active device.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Forwards `LateUpdate` to the active device.</span> |
| <Link id="m-startplatform" /><code>{"private Coroutine StartPlatform("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" newMode, "}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Starts `StartPlatformCoroutine` as a coroutine.</span> |
| <Link id="m-startplatformcoroutine" /><code>{"private IEnumerator StartPlatformCoroutine("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" newMode, "}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player) (iterator)"}</code> | <span className="api-desc">Creates the device controller for the mode, waits for the platform device, then starts it. Refuses to swap modes.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Forwards `Update` to the active device.</span> |

</details>

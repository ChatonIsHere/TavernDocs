---
title: "VRPlayerController"
description: "Base player controller for VR."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VRPlayerController

An **abstract class** in `Root.Township`, the global namespace.

Base player controller for VR. When linked to the local player it adds vision comfort and HMD tracking.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`PlayerController`](/mod/game-api/types/global-p/playercontroller)
- **Derived types** [`LocomotionlessPlayerController`](/mod/game-api/types/global-i-l/locomotionlessplayercontroller), [`SmoothLocomotionPlayerController`](/mod/game-api/types/global-s/smoothlocomotionplayercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected VRPlayerController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-platformdevice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice"}</code> | <span className="api-desc">Injected platform device, passed to vision comfort.</span> |
| <Link id="m-visioncomfort" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playervisioncomfort">{"PlayerVisionComfort"}</Link>{" visionComfort"}</code> | <span className="api-desc">Vision comfort handler for the local player, or null.</span> |
| <Link id="m-vrtrackeddevice" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" vrTrackedDevice"}</code> | <span className="api-desc">HMD tracking on the camera for the local player, or null.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-injectplatformdevice" /><code>{"void InjectPlatformDevice("}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | <span className="api-desc">VContainer injection point for the platform device.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks the linked-to-local-player event.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Disposes the HMD tracking and vision comfort.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-linked" /><code>{"private void Linked()"}</code> | <span className="api-desc">For the local player, creates the vision comfort handler and starts HMD tracking on the camera.</span> |

</details>

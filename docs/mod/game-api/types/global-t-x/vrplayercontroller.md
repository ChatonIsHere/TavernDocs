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
| <Link id="m-ctor" /><code>{"protected VRPlayerController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-platformdevice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice"}</code> | Injected platform device, passed to vision comfort. |
| <Link id="m-visioncomfort" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playervisioncomfort">{"PlayerVisionComfort"}</Link>{" visionComfort"}</code> | Vision comfort handler for the local player, or null. |
| <Link id="m-vrtrackeddevice" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" vrTrackedDevice"}</code> | HMD tracking on the camera for the local player, or null. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-injectplatformdevice" /><code>{"void InjectPlatformDevice("}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | VContainer injection point for the platform device. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks the linked-to-local-player event. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Disposes the HMD tracking and vision comfort. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-linked" /><code>{"private void Linked()"}</code> | For the local player, creates the vision comfort handler and starts HMD tracking on the camera. |

</details>

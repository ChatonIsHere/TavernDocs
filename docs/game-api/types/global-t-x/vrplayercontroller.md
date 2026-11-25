---
title: "VRPlayerController"
description: "abstract class VRPlayerController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VRPlayerController

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`PlayerController`](/game-api/types/global-p/playercontroller)
- **Derived types** [`LocomotionlessPlayerController`](/game-api/types/global-i-l/locomotionlessplayercontroller), [`SmoothLocomotionPlayerController`](/game-api/types/global-s/smoothlocomotionplayercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected VRPlayerController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-platformdevice" /><code>{"private "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice"}</code> |  |
| <Link id="m-visioncomfort" /><code>{"private "}<Link to="/game-api/types/global-p/playervisioncomfort">{"PlayerVisionComfort"}</Link>{" visionComfort"}</code> |  |
| <Link id="m-vrtrackeddevice" /><code>{"private "}<Link to="/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" vrTrackedDevice"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-injectplatformdevice" /><code>{"void InjectPlatformDevice("}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-linked" /><code>{"private void Linked()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |

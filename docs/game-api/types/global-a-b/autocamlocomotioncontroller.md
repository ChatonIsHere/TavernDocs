---
title: "AutoCamLocomotionController"
description: "Locomotion for the AutoCam spectator camera: orbits slowly around a focused player and frames every player near them, with keyboard controls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoCamLocomotionController

A **class** in `Root.Township`, no namespace.

Locomotion for the AutoCam spectator camera: orbits slowly around a focused player and frames every player near them, with keyboard controls. Local player only.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`LocomotionController`](/game-api/types/global-i-l/locomotioncontroller)
- **Nested types** [`AutoCamTarget`](/game-api/types/global-a-b/autocamlocomotioncontroller-autocamtarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoCamLocomotionController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentrotation" /><code>{"private float currentRotation"}</code> | Current orbit angle in radians, increased by the rotation speed each frame. |
| <Link id="m-focus" /><code>{"private int focus"}</code> | Index of the player being followed. |
| <Link id="m-targets" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/autocamlocomotioncontroller-autocamtarget">{"AutoCamLocomotionController.AutoCamTarget"}</Link>{"> targets"}</code> | Player body transforms gathered this frame, with whether each is close enough to the focus to be framed. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-a-b/autocamplayer">{"AutoCamPlayer"}</Link>{" PlayerController { get; }"}</code> | The controller as an `AutoCamPlayer`, which holds the framing settings. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Collects all player bodies, handles keys (arrows change focus, PageUp/PageDown zoom, Home/End orbit speed, Backspace cursor) and lerps the camera to frame them. |

</details>

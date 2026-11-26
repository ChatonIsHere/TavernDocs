---
title: "AutoCamLocomotionController"
description: "Locomotion for the AutoCam spectator camera: orbits slowly around a focused player and frames every player near them, with keyboard controls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoCamLocomotionController

A **class** in `Root.Township`, the global namespace.

Locomotion for the AutoCam spectator camera: orbits slowly around a focused player and frames every player near them, with keyboard controls. Local player only.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`LocomotionController`](/mod/game-api/types/global-i-l/locomotioncontroller)
- **Nested types** [`AutoCamTarget`](/mod/game-api/types/global-a-b/autocamlocomotioncontroller-autocamtarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoCamLocomotionController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentrotation" /><code>{"private float currentRotation"}</code> | <span className="api-desc">Current orbit angle in radians, increased by the rotation speed each frame.</span> |
| <Link id="m-focus" /><code>{"private int focus"}</code> | <span className="api-desc">Index of the player being followed.</span> |
| <Link id="m-targets" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/autocamlocomotioncontroller-autocamtarget">{"AutoCamLocomotionController.AutoCamTarget"}</Link>{"> targets"}</code> | <span className="api-desc">Player body transforms gathered this frame, with whether each is close enough to the focus to be framed.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/autocamplayer">{"AutoCamPlayer"}</Link>{" PlayerController { get; }"}</code> | <span className="api-desc">The controller as an `AutoCamPlayer`, which holds the framing settings.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Collects all player bodies, handles keys (arrows change focus, PageUp/PageDown zoom, Home/End orbit speed, Backspace cursor) and lerps the camera to frame them.</span> |

</details>

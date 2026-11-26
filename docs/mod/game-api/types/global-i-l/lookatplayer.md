---
title: "LookAtPlayer"
description: "Client: turns its object to face the local player's head every frame, smoothly, with an optional height adjustment."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LookAtPlayer

A **class** in `Root.Township`, the global namespace.

Client: turns its object to face the local player's head every frame, smoothly, with an optional height adjustment.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LookAtPlayer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backwardoffset" /><code>{"private float backwardOffset"}</code> | Aims this far behind the head, along the head's forward. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | This object's transform. |
| <Link id="m-defaultlocal" /><code>{"private Vector3 defaultLocal"}</code> | Local position the object returns to each frame before adjusting. |
| <Link id="m-heightadjust" /><code>{"private float heightAdjust"}</code> | How much of the height gap to the head the object moves by; 0 turns it off. |
| <Link id="m-interpolation" /><code>{"private float interpolation"}</code> | Blend factor per frame toward the target rotation. |
| <Link id="m-maxheightadjust" /><code>{"private float maxHeightAdjust"}</code> | Largest upward height adjustment. |
| <Link id="m-minheightadjust" /><code>{"private float minHeightAdjust"}</code> | Largest downward height adjustment. |
| <Link id="m-oldrotation" /><code>{"private Quaternion oldRotation"}</code> | Rotation from the previous frame. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the transform, start local position and rotation. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Blends toward facing the local player by `interpolation`. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Snaps to face the local player, or disables itself if there is none. |
| <Link id="m-positionandgetrotation" /><code>{"private Quaternion PositionAndGetRotation("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Resets the local position, optionally moves it up or down toward head height, and returns the rotation facing the head. |

</details>

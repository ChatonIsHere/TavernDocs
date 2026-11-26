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
| <Link id="m-ctor" /><code>{"LookAtPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backwardoffset" /><code>{"private float backwardOffset"}</code> | <span className="api-desc">Aims this far behind the head, along the head's forward.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">This object's transform.</span> |
| <Link id="m-defaultlocal" /><code>{"private Vector3 defaultLocal"}</code> | <span className="api-desc">Local position the object returns to each frame before adjusting.</span> |
| <Link id="m-heightadjust" /><code>{"private float heightAdjust"}</code> | <span className="api-desc">How much of the height gap to the head the object moves by; 0 turns it off.</span> |
| <Link id="m-interpolation" /><code>{"private float interpolation"}</code> | <span className="api-desc">Blend factor per frame toward the target rotation.</span> |
| <Link id="m-maxheightadjust" /><code>{"private float maxHeightAdjust"}</code> | <span className="api-desc">Largest upward height adjustment.</span> |
| <Link id="m-minheightadjust" /><code>{"private float minHeightAdjust"}</code> | <span className="api-desc">Largest downward height adjustment.</span> |
| <Link id="m-oldrotation" /><code>{"private Quaternion oldRotation"}</code> | <span className="api-desc">Rotation from the previous frame.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the transform, start local position and rotation.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Blends toward facing the local player by `interpolation`.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Snaps to face the local player, or disables itself if there is none.</span> |
| <Link id="m-positionandgetrotation" /><code>{"private Quaternion PositionAndGetRotation("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | <span className="api-desc">Resets the local position, optionally moves it up or down toward head height, and returns the rotation facing the head.</span> |

</details>

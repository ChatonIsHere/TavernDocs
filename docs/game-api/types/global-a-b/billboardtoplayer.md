---
title: "BillboardToPlayer"
description: "Client component that turns an object to face the local player's head every late update, optionally smoothed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BillboardToPlayer

A **class** in `Root.Township`, no namespace.

Client component that turns an object to face the local player's head every late update, optionally smoothed. Removes itself on a headless server and pauses while the player is dead.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BillboardToPlayer()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | This object's transform. |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> | The player's camera transform. Stored but `LateUpdate` uses the head instead. |
| <Link id="m-hascamera" /><code>{"private bool hasCamera"}</code> | Whether a local player is set. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | Smoothing speed; 0 or less snaps instantly. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Smoothed rotation carried between frames. |
| <Link id="m-rotationoffset" /><code>{"private Quaternion rotationOffset"}</code> | Extra rotation applied after facing the player. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setrotationoffset" /><code>{"void SetRotationOffset(Quaternion offset)"}</code> | Sets the extra rotation applied after facing the player. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Destroys itself if headless; otherwise listens for the local player being set and starts tracking. |
| <Link id="m-deltatime" /><code>{"private float DeltaTime()"}</code> | Returns `Time.deltaTime`. |
| <Link id="m-getrotation" /><code>{"private Quaternion GetRotation(Transform cameraTransform)"}</code> | Rotation looking at the given transform with `rotationOffset`, lerped by `lerpSpeed` unless that's 0 or less. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Faces the current player's `Head`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unsubscribes from the player and death events. |
| <Link id="m-playerkilled" /><code>{"private void PlayerKilled("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" damageData)"}</code> | Turns the billboard off when the local player dies. |
| <Link id="m-updateplayer" /><code>{"private void UpdatePlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Enables the component and subscribes to the player's death when there is one, or disables it when null. |

</details>

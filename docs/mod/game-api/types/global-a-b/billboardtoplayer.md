---
title: "BillboardToPlayer"
description: "Client component that turns an object to face the local player's head every late update, optionally smoothed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BillboardToPlayer

A **class** in `Root.Township`, the global namespace.

Client component that turns an object to face the local player's head every late update, optionally smoothed. Removes itself on a headless server and pauses while the player is dead.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BillboardToPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">This object's transform.</span> |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> | <span className="api-desc">The player's camera transform. Stored but `LateUpdate` uses the head instead.</span> |
| <Link id="m-hascamera" /><code>{"private bool hasCamera"}</code> | <span className="api-desc">Whether a local player is set.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">Smoothing speed; 0 or less snaps instantly.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Smoothed rotation carried between frames.</span> |
| <Link id="m-rotationoffset" /><code>{"private Quaternion rotationOffset"}</code> | <span className="api-desc">Extra rotation applied after facing the player.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setrotationoffset" /><code>{"void SetRotationOffset(Quaternion offset)"}</code> | <span className="api-desc">Sets the extra rotation applied after facing the player.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Destroys itself if headless; otherwise listens for the local player being set and starts tracking.</span> |
| <Link id="m-deltatime" /><code>{"private float DeltaTime()"}</code> | <span className="api-desc">Returns `Time.deltaTime`.</span> |
| <Link id="m-getrotation" /><code>{"private Quaternion GetRotation(Transform cameraTransform)"}</code> | <span className="api-desc">Rotation looking at the given transform with `rotationOffset`, lerped by `lerpSpeed` unless that's 0 or less.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Faces the current player's `Head`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unsubscribes from the player and death events.</span> |
| <Link id="m-playerkilled" /><code>{"private void PlayerKilled("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" damageData)"}</code> | <span className="api-desc">Turns the billboard off when the local player dies.</span> |
| <Link id="m-updateplayer" /><code>{"private void UpdatePlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Enables the component and subscribes to the player's death when there is one, or disables it when null.</span> |

</details>

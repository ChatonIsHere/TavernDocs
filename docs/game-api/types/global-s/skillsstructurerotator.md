---
title: "SkillsStructureRotator"
description: "Client-side shrine part that swings between two rotations when the shrine's active player walks around to the other side of it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillsStructureRotator

A **class** in `Root.Township`, no namespace.

Client-side shrine part that swings between two rotations when the shrine's active player walks around to the other side of it. Destroyed on headless servers.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillsStructureRotator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignmentdirection" /><code>{"private Vector3 alignmentDirection"}</code> | Facing direction in the parent's space, kept flat. |
| <Link id="m-angletorotate" /><code>{"private float angleToRotate"}</code> | Dot product threshold (set as an angle) below which the part swings round. |
| <Link id="m-backwardposition" /><code>{"private Quaternion backwardPosition"}</code> | Local rotation when turned to the other side. |
| <Link id="m-isinstartposition" /><code>{"private bool isInStartPosition"}</code> | True while at `startingPosition`; flips after each swing. |
| <Link id="m-isrotating" /><code>{"private bool isRotating"}</code> | True while a swing is in progress. |
| <Link id="m-rotationduration" /><code>{"private float rotationDuration"}</code> | Seconds a swing takes. |
| <Link id="m-rotationprogress" /><code>{"private float rotationProgress"}</code> | 0 to 1 progress of the current swing. |
| <Link id="m-shrine" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> | The skill shrine whose player is tracked. |
| <Link id="m-startingposition" /><code>{"private Quaternion startingPosition"}</code> | Local rotation at the start side. |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer"}</code> | The shrine's current player. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle of the late update. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Late-update module the rotation runs in. |
| <Link id="m-worldalignementdirection" /><code>{"private Vector3 worldAlignementDirection"}</code> | Cached world-space alignment direction. |
| <Link id="m-worldposition" /><code>{"private Vector3 worldPosition"}</code> | Cached world position of the part. |

</details>

## Methods

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Destroys itself on headless builds; otherwise listens for the shrine's `UpdatedPlayer`. |
| <Link id="m-getrotation" /><code>{"private Quaternion GetRotation()"}</code> | Blends between the start and backward rotations by `rotationProgress`, in the current direction. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the facing direction and the angle limits that trigger a swing. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Flattens and normalizes `alignmentDirection`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Caches the world position and alignment direction. |
| <Link id="m-updateplayer" /><code>{"private void UpdatePlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Starts the update when the shrine gets a player and stops it when the player leaves, unless mid-swing. |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | Advances a running swing, or starts one when the player's feet move past `angleToRotate` from the facing side. |
| <Link id="m-updatevalues" /><code>{"private void UpdateValues()"}</code> | Caches the world position and the alignment direction in world space. |

</details>

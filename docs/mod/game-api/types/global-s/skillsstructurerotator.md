---
title: "SkillsStructureRotator"
description: "Client-side shrine part that swings between two rotations when the shrine's active player walks around to the other side of it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillsStructureRotator

A **class** in `Root.Township`, the global namespace.

Client-side shrine part that swings between two rotations when the shrine's active player walks around to the other side of it. Destroyed on headless servers.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillsStructureRotator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignmentdirection" /><code>{"private Vector3 alignmentDirection"}</code> | <span className="api-desc">Facing direction in the parent's space, kept flat.</span> |
| <Link id="m-angletorotate" /><code>{"private float angleToRotate"}</code> | <span className="api-desc">Dot product threshold (set as an angle) below which the part swings round.</span> |
| <Link id="m-backwardposition" /><code>{"private Quaternion backwardPosition"}</code> | <span className="api-desc">Local rotation when turned to the other side.</span> |
| <Link id="m-isinstartposition" /><code>{"private bool isInStartPosition"}</code> | <span className="api-desc">True while at `startingPosition`; flips after each swing.</span> |
| <Link id="m-isrotating" /><code>{"private bool isRotating"}</code> | <span className="api-desc">True while a swing is in progress.</span> |
| <Link id="m-rotationduration" /><code>{"private float rotationDuration"}</code> | <span className="api-desc">Seconds a swing takes.</span> |
| <Link id="m-rotationprogress" /><code>{"private float rotationProgress"}</code> | <span className="api-desc">0 to 1 progress of the current swing.</span> |
| <Link id="m-shrine" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> | <span className="api-desc">The skill shrine whose player is tracked.</span> |
| <Link id="m-startingposition" /><code>{"private Quaternion startingPosition"}</code> | <span className="api-desc">Local rotation at the start side.</span> |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer"}</code> | <span className="api-desc">The shrine's current player.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle of the late update.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Late-update module the rotation runs in.</span> |
| <Link id="m-worldalignementdirection" /><code>{"private Vector3 worldAlignementDirection"}</code> | <span className="api-desc">Cached world-space alignment direction.</span> |
| <Link id="m-worldposition" /><code>{"private Vector3 worldPosition"}</code> | <span className="api-desc">Cached world position of the part.</span> |

</details>

## Methods

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Destroys itself on headless builds; otherwise listens for the shrine's `UpdatedPlayer`.</span> |
| <Link id="m-getrotation" /><code>{"private Quaternion GetRotation()"}</code> | <span className="api-desc">Blends between the start and backward rotations by `rotationProgress`, in the current direction.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the facing direction and the angle limits that trigger a swing.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Flattens and normalizes `alignmentDirection`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Caches the world position and alignment direction.</span> |
| <Link id="m-updateplayer" /><code>{"private void UpdatePlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Starts the update when the shrine gets a player and stops it when the player leaves, unless mid-swing.</span> |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | <span className="api-desc">Advances a running swing, or starts one when the player's feet move past `angleToRotate` from the facing side.</span> |
| <Link id="m-updatevalues" /><code>{"private void UpdateValues()"}</code> | <span className="api-desc">Caches the world position and the alignment direction in world space.</span> |

</details>

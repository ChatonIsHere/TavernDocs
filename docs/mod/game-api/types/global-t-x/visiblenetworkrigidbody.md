---
title: "VisibleNetworkRigidbody"
description: "Client: turns off a group of NetworkRigidbody components (inactive and kinematic) while a bounding sphere is out of the local player's camera view, and back..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisibleNetworkRigidbody

A **class** in `Root.Township`, the global namespace.

Client: turns off a group of `NetworkRigidbody` components (inactive and kinematic) while a bounding sphere is out of the local player's camera view, and back on when it comes into view. Does nothing on a headless server.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`ComponentGroup<NetworkRigidbody>`](/mod/game-api/types/global-c-d/componentgroup-t), [`IUpdateOnMove`](/mod/game-api/types/global-i-l/iupdateonmove)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VisibleNetworkRigidbody()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-culling" /><code>{"private CullingGroup culling"}</code> | Unity `CullingGroup` on the local player's camera. |
| <Link id="m-spheres" /><code>{"private BoundingSphere[] spheres"}</code> | The single bounding sphere, at the start position plus `visibilityCenter`. |
| <Link id="m-visibilitycenter" /><code>{"private Vector3 visibilityCenter"}</code> | Offset of the visibility sphere from the object. |
| <Link id="m-visibilityradius" /><code>{"private float visibilityRadius"}</code> | Radius of the visibility sphere. |

</details>

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" current)"}</code> | Builds a culling group on the player's camera and starts with all the rigidbodies off and kinematic. |
| <Link id="m-moved" /><code>{"private void IUpdateOnMove.Moved()"}</code> | Rebuilds the culling group when the object moves. The sphere keeps the position set in `Start`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Disposes the culling group and unhooks `PlayerController.LocalPlayerSet`. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the visibility sphere in the editor. |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | Disposes the current culling group. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Client: makes the bounding sphere and initialises now or when the local player is set. |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(CullingGroupEvent sphere)"}</code> | Culling callback: turns the rigidbodies on and refreshes them when visible, off and kinematic when hidden. |

</details>

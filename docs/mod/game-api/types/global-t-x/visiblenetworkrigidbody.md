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
| <Link id="m-ctor" /><code>{"VisibleNetworkRigidbody()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-culling" /><code>{"private CullingGroup culling"}</code> | <span className="api-desc">Unity `CullingGroup` on the local player's camera.</span> |
| <Link id="m-spheres" /><code>{"private BoundingSphere[] spheres"}</code> | <span className="api-desc">The single bounding sphere, at the start position plus `visibilityCenter`.</span> |
| <Link id="m-visibilitycenter" /><code>{"private Vector3 visibilityCenter"}</code> | <span className="api-desc">Offset of the visibility sphere from the object.</span> |
| <Link id="m-visibilityradius" /><code>{"private float visibilityRadius"}</code> | <span className="api-desc">Radius of the visibility sphere.</span> |

</details>

## Methods

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" current)"}</code> | <span className="api-desc">Builds a culling group on the player's camera and starts with all the rigidbodies off and kinematic.</span> |
| <Link id="m-moved" /><code>{"private void IUpdateOnMove.Moved()"}</code> | <span className="api-desc">Rebuilds the culling group when the object moves. The sphere keeps the position set in `Start`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Disposes the culling group and unhooks `PlayerController.LocalPlayerSet`.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the visibility sphere in the editor.</span> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | <span className="api-desc">Disposes the current culling group.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Client: makes the bounding sphere and initialises now or when the local player is set.</span> |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(CullingGroupEvent sphere)"}</code> | <span className="api-desc">Culling callback: turns the rigidbodies on and refreshes them when visible, off and kinematic when hidden.</span> |

</details>

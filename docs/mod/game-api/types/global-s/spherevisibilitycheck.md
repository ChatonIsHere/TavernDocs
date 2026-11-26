---
title: "SphereVisibilityCheck"
description: "Client: registers a sphere with the culling group and raises events when it comes into or goes out of the camera's view."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SphereVisibilityCheck

A **class** in `Root.Township`, the global namespace.

Client: registers a sphere with the culling group and raises events when it comes into or goes out of the camera's view. Not used on headless servers.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SphereVisibilityCheck()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-becameinvisible" /><code>{"private UnityEvent becameInvisible"}</code> | Inspector event raised when the sphere leaves view. |
| <Link id="m-becamevisible" /><code>{"private UnityEvent becameVisible"}</code> | Inspector event raised when the sphere comes into view. |
| <Link id="m-cullingindex" /><code>{"private int cullingIndex"}</code> | Index of the registered sphere in `CullingGroupHandler`. |
| <Link id="m-visibilitycenter" /><code>{"private Vector3 visibilityCenter"}</code> | Offset of the sphere from the object. |
| <Link id="m-visibilityradius" /><code>{"private float visibilityRadius"}</code> | Radius of the sphere. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-becameinvisible-2" /><code>{"event Action BecameInvisible"}</code> | Raised when the sphere leaves view. |
| <Link id="m-becamevisible-2" /><code>{"event Action BecameVisible"}</code> | Raised when the sphere comes into view. |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the sphere from the culling group. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the sphere in blue. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Registers the sphere at its start position. It does not follow the object if it moves. |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(CullingGroupEvent sphere)"}</code> | Culling callback that raises the inspector and code events. |

</details>

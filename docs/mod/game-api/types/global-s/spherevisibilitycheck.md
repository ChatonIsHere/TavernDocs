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
| <Link id="m-ctor" /><code>{"SphereVisibilityCheck()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-becameinvisible" /><code>{"private UnityEvent becameInvisible"}</code> | <span className="api-desc">Inspector event raised when the sphere leaves view.</span> |
| <Link id="m-becamevisible" /><code>{"private UnityEvent becameVisible"}</code> | <span className="api-desc">Inspector event raised when the sphere comes into view.</span> |
| <Link id="m-cullingindex" /><code>{"private int cullingIndex"}</code> | <span className="api-desc">Index of the registered sphere in `CullingGroupHandler`.</span> |
| <Link id="m-visibilitycenter" /><code>{"private Vector3 visibilityCenter"}</code> | <span className="api-desc">Offset of the sphere from the object.</span> |
| <Link id="m-visibilityradius" /><code>{"private float visibilityRadius"}</code> | <span className="api-desc">Radius of the sphere.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-becameinvisible-2" /><code>{"event Action BecameInvisible"}</code> | <span className="api-desc">Raised when the sphere leaves view.</span> |
| <Link id="m-becamevisible-2" /><code>{"event Action BecameVisible"}</code> | <span className="api-desc">Raised when the sphere comes into view.</span> |

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the sphere from the culling group.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the sphere in blue.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Registers the sphere at its start position. It does not follow the object if it moves.</span> |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(CullingGroupEvent sphere)"}</code> | <span className="api-desc">Culling callback that raises the inspector and code events.</span> |

</details>

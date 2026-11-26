---
title: "DontGoThroughObjects"
description: "Anti-tunnelling component: each physics step it raycasts along the rigidbody's movement and pulls it back to the first solid hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DontGoThroughObjects

A **class** in `Root.Township`, no namespace.

Anti-tunnelling component: each physics step it raycasts along the rigidbody's movement and pulls it back to the first solid hit.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DontGoThroughObjects()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-layermask" /><code>{"LayerMask layerMask"}</code> | Layers the raycast checks. |
| <Link id="m-sendtriggermessage" /><code>{"bool sendTriggerMessage"}</code> | Not used by this code. |
| <Link id="m-skinwidth" /><code>{"float skinWidth"}</code> | Fraction of the minimum extent taken off when placing the body before a hit. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minimumextent" /><code>{"private float minimumExtent"}</code> | Smallest half-extent of the collider bounds. |
| <Link id="m-mycollider" /><code>{"private Collider myCollider"}</code> | Collider on the same object, found in `Start`. |
| <Link id="m-myrigidbody" /><code>{"private Rigidbody myRigidbody"}</code> | The rigidbody being guarded. |
| <Link id="m-partialextent" /><code>{"private float partialExtent"}</code> | How far before the hit point the body is placed, the minimum extent reduced by `skinWidth`. |
| <Link id="m-previousposition" /><code>{"private Vector3 previousPosition"}</code> | Rigidbody position at the end of the last physics step. |
| <Link id="m-sqrminimumextent" /><code>{"private float sqrMinimumExtent"}</code> | Square of `minimumExtent`, the movement threshold before a raycast runs. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | If the body moved further than its smallest extent, raycasts the path and moves it back in front of any non-trigger hit. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Caches the collider and works out the extents from its bounds. |

</details>

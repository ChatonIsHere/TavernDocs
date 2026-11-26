---
title: "DontGoThroughObjects"
description: "Anti-tunnelling component: each physics step it raycasts along the rigidbody's movement and pulls it back to the first solid hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DontGoThroughObjects

A **class** in `Root.Township`, the global namespace.

Anti-tunnelling component: each physics step it raycasts along the rigidbody's movement and pulls it back to the first solid hit.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DontGoThroughObjects()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-layermask" /><code>{"LayerMask layerMask"}</code> | <span className="api-desc">Layers the raycast checks.</span> |
| <Link id="m-sendtriggermessage" /><code>{"bool sendTriggerMessage"}</code> | <span className="api-desc">Not used by this code.</span> |
| <Link id="m-skinwidth" /><code>{"float skinWidth"}</code> | <span className="api-desc">Fraction of the minimum extent taken off when placing the body before a hit.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minimumextent" /><code>{"private float minimumExtent"}</code> | <span className="api-desc">Smallest half-extent of the collider bounds.</span> |
| <Link id="m-mycollider" /><code>{"private Collider myCollider"}</code> | <span className="api-desc">Collider on the same object, found in `Start`.</span> |
| <Link id="m-myrigidbody" /><code>{"private Rigidbody myRigidbody"}</code> | <span className="api-desc">The rigidbody being guarded.</span> |
| <Link id="m-partialextent" /><code>{"private float partialExtent"}</code> | <span className="api-desc">How far before the hit point the body is placed, the minimum extent reduced by `skinWidth`.</span> |
| <Link id="m-previousposition" /><code>{"private Vector3 previousPosition"}</code> | <span className="api-desc">Rigidbody position at the end of the last physics step.</span> |
| <Link id="m-sqrminimumextent" /><code>{"private float sqrMinimumExtent"}</code> | <span className="api-desc">Square of `minimumExtent`, the movement threshold before a raycast runs.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">If the body moved further than its smallest extent, raycasts the path and moves it back in front of any non-trigger hit.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Caches the collider and works out the extents from its bounds.</span> |

</details>

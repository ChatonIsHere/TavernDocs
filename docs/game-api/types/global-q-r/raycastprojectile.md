---
title: "RaycastProjectile"
description: "class RaycastProjectile in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastProjectile

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RaycastProjectile()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-collided" /><code>{"private "}<Link to="/game-api/types/global-c-d/collideraltaevent">{"ColliderAltaEvent"}</Link>{" collided"}</code> |
| <Link id="m-hitlayers" /><code>{"private LayerMask hitLayers"}</code> |
| <Link id="m-isonlyonserver" /><code>{"private bool isOnlyOnServer"}</code> |
| <Link id="m-isstoppingafterfirsthit" /><code>{"private bool isStoppingAfterFirstHit"}</code> |
| <Link id="m-raycastupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" raycastUpdate"}</code> |
| <Link id="m-size" /><code>{"private float size"}</code> |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-oncollided" /><code>{"event Action<RaycastHit> OnCollided"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-startraycasting" /><code>{"void StartRaycasting()"}</code> |
| <Link id="m-stopraycasting" /><code>{"void StopRaycasting()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-updateraycast" /><code>{"private void UpdateRaycast()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RaycastProjectile`:

[`EmbeddableRaycastProjectile.raycastProjectile`](/game-api/types/global-e-h/embeddableraycastprojectile#m-raycastprojectile).

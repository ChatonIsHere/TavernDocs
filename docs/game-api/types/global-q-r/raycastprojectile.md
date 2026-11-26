---
title: "RaycastProjectile"
description: "Projectile hit check that sphere-casts along the rigidbody's velocity each fixed update instead of relying on colliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastProjectile

A **class** in `Root.Township`, no namespace.

Projectile hit check that sphere-casts along the rigidbody's velocity each fixed update instead of relying on colliders. By default it only runs on the server.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RaycastProjectile()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collided" /><code>{"private "}<Link to="/game-api/types/global-c-d/collideraltaevent">{"ColliderAltaEvent"}</Link>{" collided"}</code> | Inspector event fired with the hit collider. |
| <Link id="m-hitlayers" /><code>{"private LayerMask hitLayers"}</code> | Layers the cast can hit. Triggers are ignored. |
| <Link id="m-isonlyonserver" /><code>{"private bool isOnlyOnServer"}</code> | When true (default), `StartRaycasting` only does anything on the server. |
| <Link id="m-isstoppingafterfirsthit" /><code>{"private bool isStoppingAfterFirstHit"}</code> | When true, stops casting after the first hit. |
| <Link id="m-raycastupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" raycastUpdate"}</code> | Handle for the registered fixed update method. |
| <Link id="m-size" /><code>{"private float size"}</code> | Radius of the sphere cast. |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> | Rigidbody whose velocity sets the cast direction and length. Hits on it are ignored. |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | Transform the cast starts from. Defaults to this object's transform. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-oncollided" /><code>{"event Action<RaycastHit> OnCollided"}</code> | Fires with the `RaycastHit` each time the cast hits something not on the projectile's own rigidbody. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startraycasting" /><code>{"void StartRaycasting()"}</code> | Registers the per-fixed-update cast. Does nothing on clients when `isOnlyOnServer` is set. |
| <Link id="m-stopraycasting" /><code>{"void StopRaycasting()"}</code> | Deregisters the per-fixed-update cast. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the raycast update. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: if `size` is unset, copies the radius of a child `SphereCollider`. |
| <Link id="m-updateraycast" /><code>{"private void UpdateRaycast()"}</code> | Sphere-casts over the last fixed step's movement; on a hit fires `collided` and `OnCollided`, and may stop. |

</details>

## Used in

Members of other types that take, return or hold a `RaycastProjectile`:

[`EmbeddableRaycastProjectile.raycastProjectile`](/game-api/types/global-e-h/embeddableraycastprojectile#m-raycastprojectile).

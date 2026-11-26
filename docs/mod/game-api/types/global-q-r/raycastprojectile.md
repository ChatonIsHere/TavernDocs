---
title: "RaycastProjectile"
description: "Projectile hit check that sphere-casts along the rigidbody's velocity each fixed update instead of relying on colliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastProjectile

A **class** in `Root.Township`, the global namespace.

Projectile hit check that sphere-casts along the rigidbody's velocity each fixed update instead of relying on colliders. By default it only runs on the server.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaycastProjectile()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collided" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collideraltaevent">{"ColliderAltaEvent"}</Link>{" collided"}</code> | <span className="api-desc">Inspector event fired with the hit collider.</span> |
| <Link id="m-hitlayers" /><code>{"private LayerMask hitLayers"}</code> | <span className="api-desc">Layers the cast can hit. Triggers are ignored.</span> |
| <Link id="m-isonlyonserver" /><code>{"private bool isOnlyOnServer"}</code> | <span className="api-desc">When true (default), `StartRaycasting` only does anything on the server.</span> |
| <Link id="m-isstoppingafterfirsthit" /><code>{"private bool isStoppingAfterFirstHit"}</code> | <span className="api-desc">When true, stops casting after the first hit.</span> |
| <Link id="m-raycastupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" raycastUpdate"}</code> | <span className="api-desc">Handle for the registered fixed update method.</span> |
| <Link id="m-size" /><code>{"private float size"}</code> | <span className="api-desc">Radius of the sphere cast.</span> |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> | <span className="api-desc">Rigidbody whose velocity sets the cast direction and length. Hits on it are ignored.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">Transform the cast starts from. Defaults to this object's transform.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-oncollided" /><code>{"event Action<RaycastHit> OnCollided"}</code> | <span className="api-desc">Fires with the `RaycastHit` each time the cast hits something not on the projectile's own rigidbody.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startraycasting" /><code>{"void StartRaycasting()"}</code> | <span className="api-desc">Registers the per-fixed-update cast. Does nothing on clients when `isOnlyOnServer` is set.</span> |
| <Link id="m-stopraycasting" /><code>{"void StopRaycasting()"}</code> | <span className="api-desc">Deregisters the per-fixed-update cast.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the raycast update.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: if `size` is unset, copies the radius of a child `SphereCollider`.</span> |
| <Link id="m-updateraycast" /><code>{"private void UpdateRaycast()"}</code> | <span className="api-desc">Sphere-casts over the last fixed step's movement; on a hit fires `collided` and `OnCollided`, and may stop.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RaycastProjectile`:

<div className="api-used-in">

[`EmbeddableRaycastProjectile.raycastProjectile`](/mod/game-api/types/global-e-h/embeddableraycastprojectile#m-raycastprojectile).

</div>

---
title: "SmallProjectile"
description: "Server-side sweep test for small fast projectiles: sphere casts along the rigidbody's velocity each physics step so thin hits aren't missed, and passes hits..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmallProjectile

A **class** in `Root.Township`, the global namespace.

Server-side sweep test for small fast projectiles: sphere casts along the rigidbody's velocity each physics step so thin hits aren't missed, and passes hits to a trigger impact tool.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmallProjectile()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform of the projectile.</span> |
| <Link id="m-hitlayers" /><code>{"private LayerMask hitLayers"}</code> | <span className="api-desc">Layers the sphere cast hits.</span> |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | <span className="api-desc">Network rigidbody whose velocity drives the cast.</span> |
| <Link id="m-size" /><code>{"private float size"}</code> | <span className="api-desc">Sphere cast radius.</span> |
| <Link id="m-triggerimpacttool" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/triggerimpacttool">{"TriggerImpactTool"}</Link>{" triggerImpactTool"}</code> | <span className="api-desc">Impact tool that handles the hit.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Removes the component if `size` is not set.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Sphere casts over the last step's travel and sends the first hit collider (not itself) to `triggerImpactTool`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: takes `size` from a child sphere collider's radius when unset.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Enables the component only on the server.</span> |

</details>

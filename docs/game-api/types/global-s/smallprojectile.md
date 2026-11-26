---
title: "SmallProjectile"
description: "Server-side sweep test for small fast projectiles: sphere casts along the rigidbody's velocity each physics step so thin hits aren't missed, and passes hits..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmallProjectile

A **class** in `Root.Township`, no namespace.

Server-side sweep test for small fast projectiles: sphere casts along the rigidbody's velocity each physics step so thin hits aren't missed, and passes hits to a trigger impact tool.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SmallProjectile()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform of the projectile. |
| <Link id="m-hitlayers" /><code>{"private LayerMask hitLayers"}</code> | Layers the sphere cast hits. |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | Network rigidbody whose velocity drives the cast. |
| <Link id="m-size" /><code>{"private float size"}</code> | Sphere cast radius. |
| <Link id="m-triggerimpacttool" /><code>{"private "}<Link to="/game-api/types/alta-items/triggerimpacttool">{"TriggerImpactTool"}</Link>{" triggerImpactTool"}</code> | Impact tool that handles the hit. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Removes the component if `size` is not set. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Sphere casts over the last step's travel and sends the first hit collider (not itself) to `triggerImpactTool`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: takes `size` from a child sphere collider's radius when unset. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Enables the component only on the server. |

</details>

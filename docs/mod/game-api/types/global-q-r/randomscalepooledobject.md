---
title: "RandomScalePooledObject"
description: "Gives a pooled object a random scale each time it's taken from the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomScalePooledObject

A **class** in `Root.Township`, the global namespace.

Gives a pooled object a random scale each time it's taken from the pool.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomScalePooledObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isuniform" /><code>{"private bool isUniform"}</code> | <span className="api-desc">Use one random value for all axes.</span> |
| <Link id="m-maximumscale" /><code>{"private float maximumScale"}</code> | <span className="api-desc">Largest scale.</span> |
| <Link id="m-minimumscale" /><code>{"private float minimumScale"}</code> | <span className="api-desc">Smallest scale.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pooled object's `Requested` event.</span> |
| <Link id="m-setscale" /><code>{"private void SetScale("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Sets a random local scale, uniform or per axis.</span> |

</details>

---
title: "RandomScalePooledObject"
description: "Gives a pooled object a random scale each time it's taken from the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomScalePooledObject

A **class** in `Root.Township`, no namespace.

Gives a pooled object a random scale each time it's taken from the pool.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomScalePooledObject()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isuniform" /><code>{"private bool isUniform"}</code> | Use one random value for all axes. |
| <Link id="m-maximumscale" /><code>{"private float maximumScale"}</code> | Largest scale. |
| <Link id="m-minimumscale" /><code>{"private float minimumScale"}</code> | Smallest scale. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pooled object's `Requested` event. |
| <Link id="m-setscale" /><code>{"private void SetScale("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Sets a random local scale, uniform or per axis. |

</details>

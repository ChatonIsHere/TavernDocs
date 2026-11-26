---
title: "TrailLerper"
description: "A pooled object holding a set of LerpFollow components."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrailLerper

A **class** in `Root.Township`, no namespace.

A pooled object holding a set of `LerpFollow` components. Its methods are empty in this build.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrailLerper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerpers" /><code>{"private "}<Link to="/game-api/types/global-i-l/lerpfollow">{"LerpFollow"}</Link>{"[] lerpers"}</code> | The `LerpFollow` components it was meant to drive. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-resettimer" /><code>{"private void ResetTimer()"}</code> | Empty in this build. |
| <Link id="m-setposition" /><code>{"private void SetPosition(Vector3 position)"}</code> | Empty in this build. |
| <Link id="m-settarget" /><code>{"private void SetTarget(Transform target)"}</code> | Empty in this build. |

</details>

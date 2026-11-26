---
title: "TrailLerper"
description: "A pooled object holding a set of LerpFollow components."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrailLerper

A **class** in `Root.Township`, the global namespace.

A pooled object holding a set of `LerpFollow` components. Its methods are empty in this build.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrailLerper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerpers" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lerpfollow">{"LerpFollow"}</Link>{"[] lerpers"}</code> | <span className="api-desc">The `LerpFollow` components it was meant to drive.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-resettimer" /><code>{"private void ResetTimer()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-setposition" /><code>{"private void SetPosition(Vector3 position)"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-settarget" /><code>{"private void SetTarget(Transform target)"}</code> | <span className="api-desc">Empty in this build.</span> |

</details>

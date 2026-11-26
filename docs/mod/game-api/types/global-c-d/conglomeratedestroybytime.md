---
title: "ConglomerateDestroyByTime"
description: "Pooled effect that merges with active copies nearby: it releases them and grows by a curve based on how many it absorbed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConglomerateDestroyByTime

A **class** in `Root.Township`, the global namespace.

Pooled effect that merges with active copies nearby: it releases them and grows by a curve based on how many it absorbed.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`DestroyByTime`](/mod/game-api/types/global-c-d/destroybytime)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConglomerateDestroyByTime()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-c-d/conglomeratedestroybytime">{"ConglomerateDestroyByTime"}</Link>{"> active"}</code> | <span className="api-desc">Every copy currently out of the pool.</span> |
| <Link id="m-currentcount" /><code>{"private int currentCount"}</code> | <span className="api-desc">How many effects this one stands for, itself included.</span> |
| <Link id="m-nearbyrangesquared" /><code>{"private float nearbyRangeSquared"}</code> | <span className="api-desc">Squared distance within which copies merge.</span> |
| <Link id="m-scaleonnearby" /><code>{"private AnimationCurve scaleOnNearby"}</code> | <span className="api-desc">Curve from the number of merged copies to scale.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Removes it from the active list and releases it.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks the pool request to `CheckNearby`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checknearby" /><code>{"private void CheckNearby("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Releases active copies in range, adds their counts to its own, and sets its scale from `scaleOnNearby`.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the merge range as a sphere.</span> |

</details>

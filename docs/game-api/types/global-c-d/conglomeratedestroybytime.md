---
title: "ConglomerateDestroyByTime"
description: "Pooled effect that merges with active copies nearby: it releases them and grows by a curve based on how many it absorbed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConglomerateDestroyByTime

A **class** in `Root.Township`, no namespace.

Pooled effect that merges with active copies nearby: it releases them and grows by a curve based on how many it absorbed.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`DestroyByTime`](/game-api/types/global-c-d/destroybytime)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConglomerateDestroyByTime()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private static List<"}<Link to="/game-api/types/global-c-d/conglomeratedestroybytime">{"ConglomerateDestroyByTime"}</Link>{"> active"}</code> | Every copy currently out of the pool. |
| <Link id="m-currentcount" /><code>{"private int currentCount"}</code> | How many effects this one stands for, itself included. |
| <Link id="m-nearbyrangesquared" /><code>{"private float nearbyRangeSquared"}</code> | Squared distance within which copies merge. |
| <Link id="m-scaleonnearby" /><code>{"private AnimationCurve scaleOnNearby"}</code> | Curve from the number of merged copies to scale. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Removes it from the active list and releases it. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks the pool request to `CheckNearby`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checknearby" /><code>{"private void CheckNearby("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Releases active copies in range, adds their counts to its own, and sets its scale from `scaleOnNearby`. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the merge range as a sphere. |

</details>

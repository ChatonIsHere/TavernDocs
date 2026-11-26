---
title: "CoroutineYields.FloatComparer"
description: "Private comparer that treats floats within 0.01 of each other as equal, so WaitForSeconds reuses cached yields for close times."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CoroutineYields.FloatComparer

A **private class** in `Alta.Coroutines`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private comparer that treats floats within 0.01 of each other as equal, so `WaitForSeconds` reuses cached yields for close times.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`CoroutineYields`](/mod/game-api/types/assembly-other/coroutineyields)
- **Inherits or implements** `IEqualityComparer<float>`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FloatComparer()"}</code> | <span className="api-desc">Creates a `CoroutineYields.FloatComparer` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private const float check"}</code> | <span className="api-desc">The 0.01 tolerance.</span> |

</details>

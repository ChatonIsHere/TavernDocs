---
title: "CoroutineYields"
description: "Static cache of coroutine yield objects, so coroutines can reuse them instead of allocating new ones each time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CoroutineYields

A **static class** in `Alta.Coroutines`, the global namespace.

Static cache of coroutine yield objects, so coroutines can reuse them instead of allocating new ones each time.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested types** [`FloatComparer`](/mod/game-api/types/assembly-other/coroutineyields-floatcomparer)
- **Documented in** [Threads, coroutines and the timeline](/mod/game-api/console-and-utilities/threads-coroutines-and-timeline#coroutineyields-and-taskyield)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-endofframe" /><code>{"private static WaitForEndOfFrame endOfFrame"}</code> | <span className="api-desc">Backing field for `EndOfFrame`.</span> |
| <Link id="m-fixedupdate" /><code>{"private static WaitForFixedUpdate fixedUpdate"}</code> | <span className="api-desc">Backing field for `FixedUpdate`.</span> |
| <Link id="m-timedyields" /><code>{"private static Dictionary<float, WaitForSeconds> timedYields"}</code> | <span className="api-desc">Cache of `WaitForSeconds` objects keyed by time, compared with a 0.01 second tolerance.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-endofframe-2" /><code>{"static WaitForEndOfFrame EndOfFrame { get; }"}</code> | <span className="api-desc">A shared `WaitForEndOfFrame`.</span> |
| <Link id="m-fixedupdate-2" /><code>{"static WaitForFixedUpdate FixedUpdate { get; }"}</code> | <span className="api-desc">A shared `WaitForFixedUpdate`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-waitforseconds" /><code>{"static WaitForSeconds WaitForSeconds(float seconds)"}</code> | <span className="api-desc">Returns a cached `WaitForSeconds` for the given time, creating it on first use. Times within 0.01 seconds count as the same.</span> |

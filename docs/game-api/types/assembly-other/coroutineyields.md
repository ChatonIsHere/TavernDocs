---
title: "CoroutineYields"
description: "Static cache of coroutine yield objects, so coroutines can reuse them instead of allocating new ones each time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CoroutineYields

A **static class** in `Alta.Coroutines`, no namespace.

Static cache of coroutine yield objects, so coroutines can reuse them instead of allocating new ones each time.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested types** [`FloatComparer`](/game-api/types/assembly-other/coroutineyields-floatcomparer)
- **Documented in** [Threads, coroutines and the timeline](/game-api/console-and-utilities/threads-coroutines-and-timeline#coroutineyields-and-taskyield)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-endofframe" /><code>{"private static WaitForEndOfFrame endOfFrame"}</code> | Backing field for `EndOfFrame`. |
| <Link id="m-fixedupdate" /><code>{"private static WaitForFixedUpdate fixedUpdate"}</code> | Backing field for `FixedUpdate`. |
| <Link id="m-timedyields" /><code>{"private static Dictionary<float, WaitForSeconds> timedYields"}</code> | Cache of `WaitForSeconds` objects keyed by time, compared with a 0.01 second tolerance. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-endofframe-2" /><code>{"static WaitForEndOfFrame EndOfFrame { get; }"}</code> | A shared `WaitForEndOfFrame`. |
| <Link id="m-fixedupdate-2" /><code>{"static WaitForFixedUpdate FixedUpdate { get; }"}</code> | A shared `WaitForFixedUpdate`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-waitforseconds" /><code>{"static WaitForSeconds WaitForSeconds(float seconds)"}</code> | Returns a cached `WaitForSeconds` for the given time, creating it on first use. Times within 0.01 seconds count as the same. |

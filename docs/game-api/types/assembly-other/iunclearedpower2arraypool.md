---
title: "IUnclearedPower2ArrayPool"
description: "Non-generic view of an UnclearedPower2ArrayPool so ArrayPoolManager.LogAllPools can list every pool's arrays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUnclearedPower2ArrayPool

An **interface** in `Alta.ArrayPools.Runtime`, `Alta.ArrayPools`.

Non-generic view of an `UnclearedPower2ArrayPool` so `ArrayPoolManager.LogAllPools` can list every pool's arrays.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`UnclearedPower2ArrayPool<T>`](/game-api/types/assembly-other/unclearedpower2arraypool-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buckets" /><code>{"IEnumerable<Array>[] Buckets { get; }"}</code> | The pooled arrays grouped by size bucket. Bucket `i` holds arrays of size 2 to the power `4 + i`. |

## Used in

Members of other types that take, return or hold a `IUnclearedPower2ArrayPool`:

[`ArrayPoolManager.AllPools`](/game-api/types/assembly-other/arraypoolmanager#m-allpools).

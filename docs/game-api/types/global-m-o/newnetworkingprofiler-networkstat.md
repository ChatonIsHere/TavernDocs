---
title: "NewNetworkingProfiler.NetworkStat"
description: "A per-second rate worked out from a running total, used by the obsolete NewNetworkingProfiler for bytes and packets sent and received."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NewNetworkingProfiler.NetworkStat

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A per-second rate worked out from a running total, used by the obsolete `NewNetworkingProfiler` for bytes and packets sent and received.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`NewNetworkingProfiler`](/game-api/types/global-m-o/newnetworkingprofiler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkStat()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrecordtime" /><code>{"private DateTime cachedRecordTime"}</code> | When the total was last read. |
| <Link id="m-cachedvalue" /><code>{"private float cachedValue"}</code> | The total at the last read. |
| <Link id="m-getvalue" /><code>{"private Func<int> getValue"}</code> | Reads the running total, such as the socket's outgoing byte count. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-output" /><code>{"float Output { get; private set; }"}</code> | The last rate worked out, per second. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cachestat" /><code>{"void CacheStat()"}</code> | Reads the total again and sets `Output` to the change per second since the last read. |
| <Link id="m-init" /><code>{"void Init(Func<int> getValue)"}</code> | Sets the function that reads the total and takes a first reading. |

## Used in

Members of other types that take, return or hold a `NetworkStat`:

[`NewNetworkingProfiler.stats`](/game-api/types/global-m-o/newnetworkingprofiler#m-stats).

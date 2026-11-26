---
title: "NewNetworkingProfiler.NetworkStat"
description: "A per-second rate worked out from a running total, used by the obsolete NewNetworkingProfiler for bytes and packets sent and received."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NewNetworkingProfiler.NetworkStat

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A per-second rate worked out from a running total, used by the obsolete `NewNetworkingProfiler` for bytes and packets sent and received.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`NewNetworkingProfiler`](/mod/game-api/types/global-m-o/newnetworkingprofiler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkStat()"}</code> | <span className="api-desc">Creates a `NewNetworkingProfiler.NetworkStat` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrecordtime" /><code>{"private DateTime cachedRecordTime"}</code> | <span className="api-desc">When the total was last read.</span> |
| <Link id="m-cachedvalue" /><code>{"private float cachedValue"}</code> | <span className="api-desc">The total at the last read.</span> |
| <Link id="m-getvalue" /><code>{"private Func<int> getValue"}</code> | <span className="api-desc">Reads the running total, such as the socket's outgoing byte count.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-output" /><code>{"float Output { get; private set; }"}</code> | <span className="api-desc">The last rate worked out, per second.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cachestat" /><code>{"void CacheStat()"}</code> | <span className="api-desc">Reads the total again and sets `Output` to the change per second since the last read.</span> |
| <Link id="m-init" /><code>{"void Init(Func<int> getValue)"}</code> | <span className="api-desc">Sets the function that reads the total and takes a first reading.</span> |

## Used in

Members of other types that take, return or hold a `NetworkStat`:

<div className="api-used-in">

[`NewNetworkingProfiler.stats`](/mod/game-api/types/global-m-o/newnetworkingprofiler#m-stats).

</div>

---
title: "NetworkingStatisticsList<T>"
description: "A named list of network traffic statistics with per-frame and per-second byte totals, for profiling and summary dumps."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkingStatisticsList&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

A named list of network traffic statistics with per-frame and per-second byte totals, for profiling and summary dumps.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatisticCollection`](/mod/game-api/types/alta-utilities/inetworkstatisticcollection)
- **Derived types** [`IndexedStatisticList<TStatistic, TStatType>`](/mod/game-api/types/alta-networking/indexedstatisticlist-tstatistic-tstattype), [`NetworkingStatisticsList<TStatistic, TInternalObject>`](/mod/game-api/types/alta-utilities/networkingstatisticslist-tstatistic-tinternalobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkingStatisticsList()"}</code> | <span className="api-desc">Creates a `NetworkingStatisticsList` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-statistics" /><code>{"protected List<T> statistics"}</code> | <span className="api-desc">The serialized list of statistics. May hold null gaps added by `EnsureStatisticsListCapacity`.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagebytesperframealltime" /><code>{"private float averageBytesPerFrameAllTime"}</code> | <span className="api-desc">Total bytes over total message count across the list, set by `UpdateTotalBytesPerFrame`.</span> |
| <Link id="m-totalbytesperlastsecond" /><code>{"private float totalBytesPerLastSecond"}</code> | <span className="api-desc">Sum of every statistic's last-second bytes, set by `UpdateTotalBytesPerLastSecond`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; protected set; }"}</code> | <span className="api-desc">Name shown in the summary.</span> |
| <Link id="m-statistics-2" /><code>{"IEnumerable<T> Statistics { get; }"}</code> | <span className="api-desc">The statistics. Entries can be null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"string CreateSummaryDump(float dumpDuration)"}</code> | <span className="api-desc">Text summary: list name, average bytes per frame, bytes in the last second, then each statistic.</span> |
| <Link id="m-resetall" /><code>{"void ResetAll()"}</code> | <span className="api-desc">Resets the totals of every statistic.</span> |
| <Link id="m-updatetotalbytesperframe" /><code>{"virtual void UpdateTotalBytesPerFrame()"}</code> | <span className="api-desc">Updates each statistic's per-frame value and the all-time average bytes per frame.</span> |
| <Link id="m-updatetotalbytesperlastsecond" /><code>{"virtual void UpdateTotalBytesPerLastSecond()"}</code> | <span className="api-desc">Updates each statistic's last-second value and the total.</span> |
| <Link id="m-ensurestatisticslistcapacity" /><code>{"protected void EnsureStatisticsListCapacity(int index)"}</code> | <span className="api-desc">Pads the list with nulls so the index exists.</span> |

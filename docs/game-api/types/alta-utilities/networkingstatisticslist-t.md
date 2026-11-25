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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatisticCollection`](/game-api/types/alta-utilities/inetworkstatisticcollection)
- **Derived types** [`IndexedStatisticList<TStatistic, TStatType>`](/game-api/types/alta-networking/indexedstatisticlist-tstatistic-tstattype), [`NetworkingStatisticsList<TStatistic, TInternalObject>`](/game-api/types/alta-utilities/networkingstatisticslist-tstatistic-tinternalobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkingStatisticsList()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-averagebytesperframealltime" /><code>{"private float averageBytesPerFrameAllTime"}</code> |  |
| <Link id="m-statistics" /><code>{"protected List<T> statistics"}</code> |  |
| <Link id="m-totalbytesperlastsecond" /><code>{"private float totalBytesPerLastSecond"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; protected set; }"}</code> | Name shown in the summary. |
| <Link id="m-statistics-2" /><code>{"IEnumerable<T> Statistics { get; }"}</code> | The statistics. Entries can be null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"string CreateSummaryDump(float dumpDuration)"}</code> | Text summary: list name, average bytes per frame, bytes in the last second, then each statistic. |
| <Link id="m-resetall" /><code>{"void ResetAll()"}</code> | Resets the totals of every statistic. |
| <Link id="m-updatetotalbytesperframe" /><code>{"virtual void UpdateTotalBytesPerFrame()"}</code> | Updates each statistic's per-frame value and the all-time average bytes per frame. |
| <Link id="m-updatetotalbytesperlastsecond" /><code>{"virtual void UpdateTotalBytesPerLastSecond()"}</code> | Updates each statistic's last-second value and the total. |
| <Link id="m-ensurestatisticslistcapacity" /><code>{"protected void EnsureStatisticsListCapacity(int index)"}</code> | Pads the list with nulls so the index exists. |

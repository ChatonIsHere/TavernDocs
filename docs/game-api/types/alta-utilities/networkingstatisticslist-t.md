---
title: "NetworkingStatisticsList<T>"
description: "abstract class NetworkingStatisticsList<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkingStatisticsList&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

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
| <Link id="m-name" /><code>{"string Name { get; protected set; }"}</code> |  |
| <Link id="m-statistics-2" /><code>{"IEnumerable<T> Statistics { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"string CreateSummaryDump(float dumpDuration)"}</code> |  |
| <Link id="m-resetall" /><code>{"void ResetAll()"}</code> |  |
| <Link id="m-updatetotalbytesperframe" /><code>{"virtual void UpdateTotalBytesPerFrame()"}</code> |  |
| <Link id="m-updatetotalbytesperlastsecond" /><code>{"virtual void UpdateTotalBytesPerLastSecond()"}</code> |  |
| <Link id="m-ensurestatisticslistcapacity" /><code>{"protected void EnsureStatisticsListCapacity(int index)"}</code> |  |

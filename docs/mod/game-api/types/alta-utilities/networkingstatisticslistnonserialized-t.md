---
title: "NetworkingStatisticsListNonSerialized<T>"
description: "Same as NetworkingStatisticsList<T> but the statistics list is not serialized, so it does not show in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkingStatisticsListNonSerialized&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

Same as `NetworkingStatisticsList<T>` but the statistics list is not serialized, so it does not show in the inspector.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatisticCollection`](/mod/game-api/types/alta-utilities/inetworkstatisticcollection)
- **Derived types** [`EntityStatistics`](/mod/game-api/types/alta-networking/entitystatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkingStatisticsListNonSerialized()"}</code> | Creates a `NetworkingStatisticsListNonSerialized` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-statistics" /><code>{"protected List<T> statistics"}</code> | The statistics, with possible null gaps. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagebytesperframealltime" /><code>{"private float averageBytesPerFrameAllTime"}</code> | Total bytes over total message count across the list. |
| <Link id="m-totalbytesperlastsecond" /><code>{"private float totalBytesPerLastSecond"}</code> | Sum of every statistic's last-second bytes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; protected set; }"}</code> | Display name used as the report heading. |
| <Link id="m-statistics-2" /><code>{"IEnumerable<T> Statistics { get; }"}</code> | The statistics in the list, read only. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"string CreateSummaryDump(float dumpDuration)"}</code> | Returns a text report: the list name, its byte totals, then one summary line per statistic. |
| <Link id="m-resetall" /><code>{"void ResetAll()"}</code> | Resets the totals of every statistic in the list. |
| <Link id="m-updatetotalbytesperframe" /><code>{"virtual void UpdateTotalBytesPerFrame()"}</code> | Updates each statistic's per-frame value and the list's average bytes per message. |
| <Link id="m-updatetotalbytesperlastsecond" /><code>{"virtual void UpdateTotalBytesPerLastSecond()"}</code> | Updates each statistic's last-second value and sums them. |
| <Link id="m-ensurestatisticslistcapacity" /><code>{"protected void EnsureStatisticsListCapacity(int index)"}</code> | Pads the list with nulls so the given index exists. |

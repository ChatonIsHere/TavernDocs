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
| <Link id="m-ctor" /><code>{"protected NetworkingStatisticsListNonSerialized()"}</code> | <span className="api-desc">Creates a `NetworkingStatisticsListNonSerialized` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-statistics" /><code>{"protected List<T> statistics"}</code> | <span className="api-desc">The statistics, with possible null gaps.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagebytesperframealltime" /><code>{"private float averageBytesPerFrameAllTime"}</code> | <span className="api-desc">Total bytes over total message count across the list.</span> |
| <Link id="m-totalbytesperlastsecond" /><code>{"private float totalBytesPerLastSecond"}</code> | <span className="api-desc">Sum of every statistic's last-second bytes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; protected set; }"}</code> | <span className="api-desc">Display name used as the report heading.</span> |
| <Link id="m-statistics-2" /><code>{"IEnumerable<T> Statistics { get; }"}</code> | <span className="api-desc">The statistics in the list, read only.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"string CreateSummaryDump(float dumpDuration)"}</code> | <span className="api-desc">Returns a text report: the list name, its byte totals, then one summary line per statistic.</span> |
| <Link id="m-resetall" /><code>{"void ResetAll()"}</code> | <span className="api-desc">Resets the totals of every statistic in the list.</span> |
| <Link id="m-updatetotalbytesperframe" /><code>{"virtual void UpdateTotalBytesPerFrame()"}</code> | <span className="api-desc">Updates each statistic's per-frame value and the list's average bytes per message.</span> |
| <Link id="m-updatetotalbytesperlastsecond" /><code>{"virtual void UpdateTotalBytesPerLastSecond()"}</code> | <span className="api-desc">Updates each statistic's last-second value and sums them.</span> |
| <Link id="m-ensurestatisticslistcapacity" /><code>{"protected void EnsureStatisticsListCapacity(int index)"}</code> | <span className="api-desc">Pads the list with nulls so the given index exists.</span> |

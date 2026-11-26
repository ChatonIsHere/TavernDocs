---
title: "INetworkStatisticCollection"
description: "A group of network statistics that can be updated, reset and dumped as one text report."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkStatisticCollection

An **interface** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

A group of network statistics that can be updated, reset and dumped as one text report.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Derived types** [`NetworkingStatisticsList<T>`](/game-api/types/alta-utilities/networkingstatisticslist-t), [`NetworkingStatisticsListNonSerialized<T>`](/game-api/types/alta-utilities/networkingstatisticslistnonserialized-t), [`NetworkTransportStatistic`](/game-api/types/alta-utilities/networktransportstatistic)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"string CreateSummaryDump(float dumpDuration)"}</code> | Returns a multi-line text report of every statistic, with rates over the given duration in seconds. |
| <Link id="m-resetall" /><code>{"void ResetAll()"}</code> | Resets every statistic in the group. |
| <Link id="m-updatetotalbytesperframe" /><code>{"void UpdateTotalBytesPerFrame()"}</code> | Updates the per-frame values of the group. |
| <Link id="m-updatetotalbytesperlastsecond" /><code>{"void UpdateTotalBytesPerLastSecond()"}</code> | Updates the last-second values of the group. |

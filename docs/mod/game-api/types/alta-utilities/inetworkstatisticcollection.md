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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Derived types** [`NetworkingStatisticsList<T>`](/mod/game-api/types/alta-utilities/networkingstatisticslist-t), [`NetworkingStatisticsListNonSerialized<T>`](/mod/game-api/types/alta-utilities/networkingstatisticslistnonserialized-t), [`NetworkTransportStatistic`](/mod/game-api/types/alta-utilities/networktransportstatistic)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"string CreateSummaryDump(float dumpDuration)"}</code> | <span className="api-desc">Returns a multi-line text report of every statistic, with rates over the given duration in seconds.</span> |
| <Link id="m-resetall" /><code>{"void ResetAll()"}</code> | <span className="api-desc">Resets every statistic in the group.</span> |
| <Link id="m-updatetotalbytesperframe" /><code>{"void UpdateTotalBytesPerFrame()"}</code> | <span className="api-desc">Updates the per-frame values of the group.</span> |
| <Link id="m-updatetotalbytesperlastsecond" /><code>{"void UpdateTotalBytesPerLastSecond()"}</code> | <span className="api-desc">Updates the last-second values of the group.</span> |

---
title: "NetworkingStatisticsList<TStatistic, TInternalObject>"
description: "A NetworkingStatisticsList filled once in the constructor by mapping each item of a source collection to a statistic, with a display name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkingStatisticsList&lt;TStatistic, TInternalObject&gt;

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

A `NetworkingStatisticsList` filled once in the constructor by mapping each item of a source collection to a statistic, with a display name.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkingStatisticsList<TStatistic>`](/mod/game-api/types/alta-utilities/networkingstatisticslist-t)
- **Derived types** [`MessageStatistics`](/mod/game-api/types/alta-networking/messagestatistics), [`ConnectionChannelStatistics`](/mod/game-api/types/alta-utilities/connectionchannelstatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkingStatisticsList(ICollection<TInternalObject> listToCreateFrom, Func<TInternalObject, TStatistic> createStatisticObject, string name)"}</code> | <span className="api-desc">Creates a `NetworkingStatisticsList` from `listToCreateFrom`, `createStatisticObject` and `name`.</span> |

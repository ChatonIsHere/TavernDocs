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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkingStatisticsList<TStatistic>`](/game-api/types/alta-utilities/networkingstatisticslist-t)
- **Derived types** [`MessageStatistics`](/game-api/types/alta-networking/messagestatistics), [`ConnectionChannelStatistics`](/game-api/types/alta-utilities/connectionchannelstatistics)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkingStatisticsList(ICollection<TInternalObject> listToCreateFrom, Func<TInternalObject, TStatistic> createStatisticObject, string name)"}</code> |

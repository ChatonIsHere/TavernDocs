---
title: "ConnectionChannelStatistics"
description: "Named \"Connection Channels\" list of ConnectionChannelStatistic entries, built from a dictionary of channels to statistics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionChannelStatistics

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

Named "Connection Channels" list of `ConnectionChannelStatistic` entries, built from a dictionary of channels to statistics. Used by the networking profiler.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkingStatisticsList<ConnectionChannelStatistic, KeyValuePair<ConnectionChannel, ConnectionChannelStatistic>>`](/mod/game-api/types/alta-utilities/networkingstatisticslist-tstatistic-tinternalobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionChannelStatistics(Dictionary<"}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{", "}<Link to="/mod/game-api/types/alta-utilities/connectionchannelstatistic">{"ConnectionChannelStatistic"}</Link>{"> messageDictionary)"}</code> | Creates a `ConnectionChannelStatistics` from `messageDictionary`. |

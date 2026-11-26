---
title: "ConnectionChannelStatistic"
description: "Network transport statistic for one connection channel, labelled with the channel's quality of service."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionChannelStatistic

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

Network transport statistic for one connection channel, labelled with the channel's quality of service.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkingStatistic`](/game-api/types/alta-utilities/networkingstatistic)
- **Derived types** [`ConnectionChannelStatistics`](/game-api/types/alta-utilities/connectionchannelstatistics)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConnectionChannelStatistic()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel"}</code> | Backing field for `Channel`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel-2" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" Channel { get; set; }"}</code> | The connection channel being measured. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"override string GetSummary(float statisticDuration)"}</code> | One line summary: the channel's quality of service followed by the base statistic summary. |

## Used in

Members of other types that take, return or hold a `ConnectionChannelStatistic`:

[`ConnectionChannelStatistics.ConnectionChannelStatistics`](/game-api/types/alta-utilities/connectionchannelstatistics#m-ctor).

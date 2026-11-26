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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkingStatistic`](/mod/game-api/types/alta-utilities/networkingstatistic)
- **Derived types** [`ConnectionChannelStatistics`](/mod/game-api/types/alta-utilities/connectionchannelstatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionChannelStatistic()"}</code> | <span className="api-desc">Creates a `ConnectionChannelStatistic` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel"}</code> | <span className="api-desc">Backing field for `Channel`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel-2" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" Channel { get; set; }"}</code> | <span className="api-desc">The connection channel being measured.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"override string GetSummary(float statisticDuration)"}</code> | <span className="api-desc">One line summary: the channel's quality of service followed by the base statistic summary.</span> |

## Used in

Members of other types that take, return or hold a `ConnectionChannelStatistic`:

<div className="api-used-in">

[`ConnectionChannelStatistics.ConnectionChannelStatistics`](/mod/game-api/types/alta-utilities/connectionchannelstatistics#m-ctor).

</div>

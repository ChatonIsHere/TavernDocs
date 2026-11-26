---
title: "NetworkTransportCountStatisticField"
description: "A network transport profiling statistic that counts events, such as packets, read from a value function."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportCountStatisticField

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

A network transport profiling statistic that counts events, such as packets, read from a value function.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkTransportStatisticField`](/mod/game-api/types/alta-utilities/networktransportstatisticfield)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportCountStatisticField(Func<int> getValueFunction)"}</code> | <span className="api-desc">Creates a `NetworkTransportCountStatisticField` from `getValueFunction`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"override string GetSummary(float statisticDuration)"}</code> | <span className="api-desc">Formats the total count and the count per second over the given duration.</span> |

## Used in

Members of other types that take, return or hold a `NetworkTransportCountStatisticField`:

<div className="api-used-in">

[`NetworkStatisticWithIncomingPackets.incomingPacketCountTotal`](/mod/game-api/types/alta-utilities/networkstatisticwithincomingpackets#m-incomingpacketcounttotal), [`NetworkStatisticWithIncomingPackets.incomingPacketsLostTotal`](/mod/game-api/types/alta-utilities/networkstatisticwithincomingpackets#m-incomingpacketslosttotal), [`NetworkTransportHostStatistic.incomingMessageQueueSize`](/mod/game-api/types/alta-utilities/networktransporthoststatistic#m-incomingmessagequeuesize), [`NetworkTransportHostStatistic.outgoingMessageQueueSize`](/mod/game-api/types/alta-utilities/networktransporthoststatistic#m-outgoingmessagequeuesize), [`NetworkTransportStatistic.outgoingMessageCountTotal`](/mod/game-api/types/alta-utilities/networktransportstatistic#m-outgoingmessagecounttotal), [`NetworkTransportStatistic.outgoingPacketCountTotal`](/mod/game-api/types/alta-utilities/networktransportstatistic#m-outgoingpacketcounttotal).

</div>

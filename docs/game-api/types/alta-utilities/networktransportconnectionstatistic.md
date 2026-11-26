---
title: "NetworkTransportConnectionStatistic"
description: "class NetworkTransportConnectionStatistic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportConnectionStatistic

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkStatisticWithIncomingPackets`](/game-api/types/alta-utilities/networkstatisticwithincomingpackets)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkTransportConnectionStatistic("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-ackbuffercount" /><code>{"protected int ackBufferCount"}</code> |
| <Link id="m-maxallowedbandwith" /><code>{"protected int maxAllowedBandwith"}</code> |
| <Link id="m-outgoingpacketnetworklosspercent" /><code>{"protected int outgoingPacketNetworkLossPercent"}</code> |
| <Link id="m-outgoingpacketoverflowlosspercent" /><code>{"protected int outgoingPacketOverflowLossPercent"}</code> |
| <Link id="m-returntriptime" /><code>{"protected int returnTripTime"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-connection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-createsummarydump" /><code>{"override string CreateSummaryDump(float statisticDuration)"}</code> |
| <Link id="m-updateallstatisticvalues" /><code>{"override void UpdateAllStatisticValues()"}</code> |
| <Link id="m-setupfields" /><code>{"protected override void SetupFields()"}</code> |

---
title: "NetworkTransportConnectionStatistic"
description: "Transport statistics for one Connection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportConnectionStatistic

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

Transport statistics for one `Connection`. Mostly a stub: `SetupFields` and `UpdateAllStatisticValues` are empty, so its fields are never filled.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkStatisticWithIncomingPackets`](/mod/game-api/types/alta-utilities/networkstatisticwithincomingpackets)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportConnectionStatistic("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Creates a `NetworkTransportConnectionStatistic` from `connection`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ackbuffercount" /><code>{"protected int ackBufferCount"}</code> | Size of the buffer holding packet acknowledgements. Never set. |
| <Link id="m-maxallowedbandwith" /><code>{"protected int maxAllowedBandwith"}</code> | Current bandwidth cap, which flow control can change. Never set. |
| <Link id="m-outgoingpacketnetworklosspercent" /><code>{"protected int outgoingPacketNetworkLossPercent"}</code> | Percent of outgoing packets lost in the network. Never set. |
| <Link id="m-outgoingpacketoverflowlosspercent" /><code>{"protected int outgoingPacketOverflowLossPercent"}</code> | Percent of outgoing packets lost to full buffers. Never set. |
| <Link id="m-returntriptime" /><code>{"protected int returnTripTime"}</code> | Round trip time in ms. Never set. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connection" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" { get; private set; }"}</code> | The connection these statistics are for, set in the constructor. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"override string CreateSummaryDump(float statisticDuration)"}</code> | Adds ack buffer, round trip, bandwidth and outgoing loss lines ahead of the base report. |
| <Link id="m-updateallstatisticvalues" /><code>{"override void UpdateAllStatisticValues()"}</code> | Empty. |
| <Link id="m-setupfields" /><code>{"protected override void SetupFields()"}</code> | Empty, so the inherited counter fields stay null. |

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
| <Link id="m-ctor" /><code>{"NetworkTransportConnectionStatistic("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Creates a `NetworkTransportConnectionStatistic` from `connection`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ackbuffercount" /><code>{"protected int ackBufferCount"}</code> | <span className="api-desc">Size of the buffer holding packet acknowledgements. Never set.</span> |
| <Link id="m-maxallowedbandwith" /><code>{"protected int maxAllowedBandwith"}</code> | <span className="api-desc">Current bandwidth cap, which flow control can change. Never set.</span> |
| <Link id="m-outgoingpacketnetworklosspercent" /><code>{"protected int outgoingPacketNetworkLossPercent"}</code> | <span className="api-desc">Percent of outgoing packets lost in the network. Never set.</span> |
| <Link id="m-outgoingpacketoverflowlosspercent" /><code>{"protected int outgoingPacketOverflowLossPercent"}</code> | <span className="api-desc">Percent of outgoing packets lost to full buffers. Never set.</span> |
| <Link id="m-returntriptime" /><code>{"protected int returnTripTime"}</code> | <span className="api-desc">Round trip time in ms. Never set.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connection" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The connection these statistics are for, set in the constructor.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"override string CreateSummaryDump(float statisticDuration)"}</code> | <span className="api-desc">Adds ack buffer, round trip, bandwidth and outgoing loss lines ahead of the base report.</span> |
| <Link id="m-updateallstatisticvalues" /><code>{"override void UpdateAllStatisticValues()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-setupfields" /><code>{"protected override void SetupFields()"}</code> | <span className="api-desc">Empty, so the inherited counter fields stay null.</span> |

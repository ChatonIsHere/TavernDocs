---
title: "NetworkStatisticWithIncomingPackets"
description: "Base for UNET transport statistics that also track incoming packets and incoming packets dropped, on top of the outgoing counters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStatisticWithIncomingPackets

An **abstract class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

Base for UNET transport statistics that also track incoming packets and incoming packets dropped, on top of the outgoing counters.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkTransportStatistic`](/game-api/types/alta-utilities/networktransportstatistic)
- **Derived types** [`NetworkTransportConnectionStatistic`](/game-api/types/alta-utilities/networktransportconnectionstatistic), [`NetworkTransportOverallStatistics`](/game-api/types/alta-utilities/networktransportoverallstatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkStatisticWithIncomingPackets()"}</code> | Creates a `NetworkStatisticWithIncomingPackets` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-incomingpacketcounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" incomingPacketCountTotal"}</code> | Counter of packets received. |
| <Link id="m-incomingpacketslosttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" incomingPacketsLostTotal"}</code> | Counter of incoming packets dropped because queues were full. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"override string CreateSummaryDump(float statisticDuration)"}</code> | Adds the incoming packet and lost packet lines ahead of the base outgoing report. |
| <Link id="m-resetall" /><code>{"override void ResetAll()"}</code> | Resets the outgoing counters and the two incoming counters. |
| <Link id="m-updatetotalbytesperlastsecondforextrafields" /><code>{"protected override void UpdateTotalBytesPerLastSecondForExtraFields()"}</code> | Updates the last-second values of the two incoming counters. |

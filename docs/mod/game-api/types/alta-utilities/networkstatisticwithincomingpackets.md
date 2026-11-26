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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkTransportStatistic`](/mod/game-api/types/alta-utilities/networktransportstatistic)
- **Derived types** [`NetworkTransportConnectionStatistic`](/mod/game-api/types/alta-utilities/networktransportconnectionstatistic), [`NetworkTransportOverallStatistics`](/mod/game-api/types/alta-utilities/networktransportoverallstatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkStatisticWithIncomingPackets()"}</code> | <span className="api-desc">Creates a `NetworkStatisticWithIncomingPackets` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-incomingpacketcounttotal" /><code>{"protected "}<Link to="/mod/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" incomingPacketCountTotal"}</code> | <span className="api-desc">Counter of packets received.</span> |
| <Link id="m-incomingpacketslosttotal" /><code>{"protected "}<Link to="/mod/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" incomingPacketsLostTotal"}</code> | <span className="api-desc">Counter of incoming packets dropped because queues were full.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"override string CreateSummaryDump(float statisticDuration)"}</code> | <span className="api-desc">Adds the incoming packet and lost packet lines ahead of the base outgoing report.</span> |
| <Link id="m-resetall" /><code>{"override void ResetAll()"}</code> | <span className="api-desc">Resets the outgoing counters and the two incoming counters.</span> |
| <Link id="m-updatetotalbytesperlastsecondforextrafields" /><code>{"protected override void UpdateTotalBytesPerLastSecondForExtraFields()"}</code> | <span className="api-desc">Updates the last-second values of the two incoming counters.</span> |

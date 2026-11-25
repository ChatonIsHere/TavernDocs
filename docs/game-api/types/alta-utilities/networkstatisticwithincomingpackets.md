---
title: "NetworkStatisticWithIncomingPackets"
description: "abstract class NetworkStatisticWithIncomingPackets in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStatisticWithIncomingPackets

An **abstract class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkTransportStatistic`](/game-api/types/alta-utilities/networktransportstatistic)
- **Derived types** [`NetworkTransportConnectionStatistic`](/game-api/types/alta-utilities/networktransportconnectionstatistic), [`NetworkTransportOverallStatistics`](/game-api/types/alta-utilities/networktransportoverallstatistics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkStatisticWithIncomingPackets()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-incomingpacketcounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" incomingPacketCountTotal"}</code> |  |
| <Link id="m-incomingpacketslosttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" incomingPacketsLostTotal"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"override string CreateSummaryDump(float statisticDuration)"}</code> |  |
| <Link id="m-resetall" /><code>{"override void ResetAll()"}</code> |  |
| <Link id="m-updatetotalbytesperlastsecondforextrafields" /><code>{"protected override void UpdateTotalBytesPerLastSecondForExtraFields()"}</code> |  |

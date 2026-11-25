---
title: "NetworkTransportStatistic"
description: "abstract class NetworkTransportStatistic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportStatistic

An **abstract class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatisticCollection`](/game-api/types/alta-utilities/inetworkstatisticcollection)
- **Derived types** [`NetworkStatisticWithIncomingPackets`](/game-api/types/alta-utilities/networkstatisticwithincomingpackets), [`NetworkTransportHostStatistic`](/game-api/types/alta-utilities/networktransporthoststatistic)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportStatistic()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-numberpadwidth" /><code>{"protected const int NumberPadWidth"}</code> |  |
| <Link id="m-outgoingfullbytescounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportstatisticfield">{"NetworkTransportStatisticField"}</Link>{" outgoingFullBytesCountTotal"}</code> |  |
| <Link id="m-outgoingmessagecounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" outgoingMessageCountTotal"}</code> |  |
| <Link id="m-outgoingpacketcounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" outgoingPacketCountTotal"}</code> |  |
| <Link id="m-outgoingsystembytescounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportstatisticfield">{"NetworkTransportStatisticField"}</Link>{" outgoingSystemBytesCountTotal"}</code> |  |
| <Link id="m-outgoinguserbytescounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportstatisticfield">{"NetworkTransportStatisticField"}</Link>{" outgoingUserBytesCountTotal"}</code> |  |
| <Link id="m-stringpadwidth" /><code>{"protected const int StringPadWidth"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"virtual string CreateSummaryDump(float statisticDuration)"}</code> |  |
| <Link id="m-resetall" /><code>{"virtual void ResetAll()"}</code> |  |
| <Link id="m-updateallstatisticvalues" /><code>{"abstract void UpdateAllStatisticValues()"}</code> |  |
| <Link id="m-updatetotalbytesperframe" /><code>{"void UpdateTotalBytesPerFrame()"}</code> |  |
| <Link id="m-updatetotalbytesperlastsecond" /><code>{"void UpdateTotalBytesPerLastSecond()"}</code> |  |
| <Link id="m-checkerror" /><code>{"protected void CheckError(byte error)"}</code> |  |
| <Link id="m-setupfields" /><code>{"protected abstract void SetupFields()"}</code> |  |
| <Link id="m-updatetotalbytesperlastsecondforextrafields" /><code>{"protected abstract void UpdateTotalBytesPerLastSecondForExtraFields()"}</code> |  |

---
title: "NetworkTransportStatistic"
description: "Base for a set of outgoing network transport stats (messages, packets, bytes) used by the networking profiler."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportStatistic

An **abstract class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

Base for a set of outgoing network transport stats (messages, packets, bytes) used by the networking profiler.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatisticCollection`](/game-api/types/alta-utilities/inetworkstatisticcollection)
- **Derived types** [`NetworkStatisticWithIncomingPackets`](/game-api/types/alta-utilities/networkstatisticwithincomingpackets), [`NetworkTransportHostStatistic`](/game-api/types/alta-utilities/networktransporthoststatistic)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkTransportStatistic()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-numberpadwidth" /><code>{"protected const int NumberPadWidth"}</code> | Column width for numbers in the summary text. |
| <Link id="m-outgoingfullbytescounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportstatisticfield">{"NetworkTransportStatisticField"}</Link>{" outgoingFullBytesCountTotal"}</code> | Outgoing bytes including UDP and ethernet headers. |
| <Link id="m-outgoingmessagecounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" outgoingMessageCountTotal"}</code> | Number of outgoing messages. |
| <Link id="m-outgoingpacketcounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" outgoingPacketCountTotal"}</code> | Number of outgoing packets (messages are packed into packets). |
| <Link id="m-outgoingsystembytescounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportstatisticfield">{"NetworkTransportStatisticField"}</Link>{" outgoingSystemBytesCountTotal"}</code> | Outgoing bytes including protocol headers and messages. |
| <Link id="m-outgoinguserbytescounttotal" /><code>{"protected "}<Link to="/game-api/types/alta-utilities/networktransportstatisticfield">{"NetworkTransportStatisticField"}</Link>{" outgoingUserBytesCountTotal"}</code> | Outgoing payload bytes only. |
| <Link id="m-stringpadwidth" /><code>{"protected const int StringPadWidth"}</code> | Column width for labels in the summary text. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"virtual string CreateSummaryDump(float statisticDuration)"}</code> | Text summary of all stats over a duration. |
| <Link id="m-resetall" /><code>{"virtual void ResetAll()"}</code> | Resets every stat's totals. |
| <Link id="m-updateallstatisticvalues" /><code>{"abstract void UpdateAllStatisticValues()"}</code> | Subclass: reads fresh values from the transport. |
| <Link id="m-updatetotalbytesperframe" /><code>{"void UpdateTotalBytesPerFrame()"}</code> | Does nothing. |
| <Link id="m-updatetotalbytesperlastsecond" /><code>{"void UpdateTotalBytesPerLastSecond()"}</code> | Refreshes values and updates each stat's per-second figure. |
| <Link id="m-checkerror" /><code>{"protected void CheckError(byte error)"}</code> | Logs a non-zero Unity network error code. |
| <Link id="m-setupfields" /><code>{"protected abstract void SetupFields()"}</code> | Subclass: creates the stat fields. |
| <Link id="m-updatetotalbytesperlastsecondforextrafields" /><code>{"protected abstract void UpdateTotalBytesPerLastSecondForExtraFields()"}</code> | Subclass: per-second update for extra fields. |

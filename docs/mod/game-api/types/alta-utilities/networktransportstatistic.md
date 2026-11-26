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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatisticCollection`](/mod/game-api/types/alta-utilities/inetworkstatisticcollection)
- **Derived types** [`NetworkStatisticWithIncomingPackets`](/mod/game-api/types/alta-utilities/networkstatisticwithincomingpackets), [`NetworkTransportHostStatistic`](/mod/game-api/types/alta-utilities/networktransporthoststatistic)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportStatistic()"}</code> | <span className="api-desc">Creates a `NetworkTransportStatistic` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-numberpadwidth" /><code>{"protected const int NumberPadWidth"}</code> | <span className="api-desc">Column width for numbers in the summary text.</span> |
| <Link id="m-outgoingfullbytescounttotal" /><code>{"protected "}<Link to="/mod/game-api/types/alta-utilities/networktransportstatisticfield">{"NetworkTransportStatisticField"}</Link>{" outgoingFullBytesCountTotal"}</code> | <span className="api-desc">Outgoing bytes including UDP and ethernet headers.</span> |
| <Link id="m-outgoingmessagecounttotal" /><code>{"protected "}<Link to="/mod/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" outgoingMessageCountTotal"}</code> | <span className="api-desc">Number of outgoing messages.</span> |
| <Link id="m-outgoingpacketcounttotal" /><code>{"protected "}<Link to="/mod/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" outgoingPacketCountTotal"}</code> | <span className="api-desc">Number of outgoing packets (messages are packed into packets).</span> |
| <Link id="m-outgoingsystembytescounttotal" /><code>{"protected "}<Link to="/mod/game-api/types/alta-utilities/networktransportstatisticfield">{"NetworkTransportStatisticField"}</Link>{" outgoingSystemBytesCountTotal"}</code> | <span className="api-desc">Outgoing bytes including protocol headers and messages.</span> |
| <Link id="m-outgoinguserbytescounttotal" /><code>{"protected "}<Link to="/mod/game-api/types/alta-utilities/networktransportstatisticfield">{"NetworkTransportStatisticField"}</Link>{" outgoingUserBytesCountTotal"}</code> | <span className="api-desc">Outgoing payload bytes only.</span> |
| <Link id="m-stringpadwidth" /><code>{"protected const int StringPadWidth"}</code> | <span className="api-desc">Column width for labels in the summary text.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"virtual string CreateSummaryDump(float statisticDuration)"}</code> | <span className="api-desc">Text summary of all stats over a duration.</span> |
| <Link id="m-resetall" /><code>{"virtual void ResetAll()"}</code> | <span className="api-desc">Resets every stat's totals.</span> |
| <Link id="m-updateallstatisticvalues" /><code>{"abstract void UpdateAllStatisticValues()"}</code> | <span className="api-desc">Subclass: reads fresh values from the transport.</span> |
| <Link id="m-updatetotalbytesperframe" /><code>{"void UpdateTotalBytesPerFrame()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-updatetotalbytesperlastsecond" /><code>{"void UpdateTotalBytesPerLastSecond()"}</code> | <span className="api-desc">Refreshes values and updates each stat's per-second figure.</span> |
| <Link id="m-checkerror" /><code>{"protected void CheckError(byte error)"}</code> | <span className="api-desc">Logs a non-zero Unity network error code.</span> |
| <Link id="m-setupfields" /><code>{"protected abstract void SetupFields()"}</code> | <span className="api-desc">Subclass: creates the stat fields.</span> |
| <Link id="m-updatetotalbytesperlastsecondforextrafields" /><code>{"protected abstract void UpdateTotalBytesPerLastSecondForExtraFields()"}</code> | <span className="api-desc">Subclass: per-second update for extra fields.</span> |

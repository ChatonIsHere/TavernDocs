---
title: "NetworkingStatistic"
description: "Counter for one kind of network message in the transport metrics: how many were sent and how many bytes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkingStatistic

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

Counter for one kind of network message in the transport metrics: how many were sent and how many bytes.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatistic`](/mod/game-api/types/alta-utilities/inetworkstatistic)
- **Derived types** [`EntityMessageTypeStatistic`](/mod/game-api/types/alta-networking/entitymessagetypestatistic), [`EntityStatistic`](/mod/game-api/types/alta-networking/entitystatistic), [`MessageTypeStatistic`](/mod/game-api/types/alta-networking/messagetypestatistic), [`SerializedBehaviourStatistic`](/mod/game-api/types/alta-networking/serializedbehaviourstatistic), [`ConnectionChannelStatistic`](/mod/game-api/types/alta-utilities/connectionchannelstatistic)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkingStatistic()"}</code> | <span className="api-desc">Creates a `NetworkingStatistic` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-numberpaddingwidth" /><code>{"protected const int NumberPaddingWidth"}</code> | <span className="api-desc">Column width for numbers in summaries (10).</span> |
| <Link id="m-stringpaddingwidth" /><code>{"protected const int StringPaddingWidth"}</code> | <span className="api-desc">Column width for names in summaries (30).</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bytesperframe" /><code>{"private float bytesPerFrame"}</code> | <span className="api-desc">Average bytes per message (total bytes over message count), despite the name. Backing field for `BytesPerFrame`.</span> |
| <Link id="m-bytesperlastsecond" /><code>{"private float bytesPerLastSecond"}</code> | <span className="api-desc">Bytes added since the previous per-second update. Backing field for `BytesPerLastSecond`.</span> |
| <Link id="m-count" /><code>{"private int count"}</code> | <span className="api-desc">Number of messages registered. Backing field for `Count`.</span> |
| <Link id="m-oldbytes" /><code>{"private int oldBytes"}</code> | <span className="api-desc">Total bytes at the previous per-second update, used to work out `bytesPerLastSecond`.</span> |
| <Link id="m-totalbytes" /><code>{"private int totalBytes"}</code> | <span className="api-desc">Bytes registered since the last reset. Backing field for `TotalBytes`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bytesperframe-2" /><code>{"float BytesPerFrame { get; }"}</code> | <span className="api-desc">Despite the name, average bytes per message (total bytes over count), as of the last update.</span> |
| <Link id="m-bytesperlastsecond-2" /><code>{"float BytesPerLastSecond { get; }"}</code> | <span className="api-desc">Bytes sent since the previous per-second update.</span> |
| <Link id="m-count-2" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Messages counted since the last reset.</span> |
| <Link id="m-totalbytes-2" /><code>{"int TotalBytes { get; }"}</code> | <span className="api-desc">Bytes counted since the last reset.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"virtual string GetSummary(float statisticDuration)"}</code> | <span className="api-desc">One padded text line with count, total bytes, average and bytes per second over the given duration.</span> |
| <Link id="m-registermessagesend" /><code>{"void RegisterMessageSend(int byteSize)"}</code> | <span className="api-desc">Counts one message of the given size.</span> |
| <Link id="m-resetstatistictotals" /><code>{"virtual void ResetStatisticTotals()"}</code> | <span className="api-desc">Zeroes the count and byte totals.</span> |
| <Link id="m-updatevalueperframe" /><code>{"virtual void UpdateValuePerFrame()"}</code> | <span className="api-desc">Recomputes `BytesPerFrame`.</span> |
| <Link id="m-updatevalueperlastsecond" /><code>{"virtual void UpdateValuePerLastSecond()"}</code> | <span className="api-desc">Recomputes `BytesPerLastSecond`. Meant to be called once a second.</span> |

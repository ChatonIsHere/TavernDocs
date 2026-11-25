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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatistic`](/game-api/types/alta-utilities/inetworkstatistic)
- **Derived types** [`EntityMessageTypeStatistic`](/game-api/types/alta-networking/entitymessagetypestatistic), [`EntityStatistic`](/game-api/types/alta-networking/entitystatistic), [`MessageTypeStatistic`](/game-api/types/alta-networking/messagetypestatistic), [`SerializedBehaviourStatistic`](/game-api/types/alta-networking/serializedbehaviourstatistic), [`ConnectionChannelStatistic`](/game-api/types/alta-utilities/connectionchannelstatistic)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkingStatistic()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-numberpaddingwidth" /><code>{"protected const int NumberPaddingWidth"}</code> | Column width for numbers in summaries (10). |
| <Link id="m-stringpaddingwidth" /><code>{"protected const int StringPaddingWidth"}</code> | Column width for names in summaries (30). |

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bytesperframe" /><code>{"private float bytesPerFrame"}</code> |
| <Link id="m-bytesperlastsecond" /><code>{"private float bytesPerLastSecond"}</code> |
| <Link id="m-count" /><code>{"private int count"}</code> |
| <Link id="m-oldbytes" /><code>{"private int oldBytes"}</code> |
| <Link id="m-totalbytes" /><code>{"private int totalBytes"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bytesperframe-2" /><code>{"float BytesPerFrame { get; }"}</code> | Despite the name, average bytes per message (total bytes over count), as of the last update. |
| <Link id="m-bytesperlastsecond-2" /><code>{"float BytesPerLastSecond { get; }"}</code> | Bytes sent since the previous per-second update. |
| <Link id="m-count-2" /><code>{"int Count { get; }"}</code> | Messages counted since the last reset. |
| <Link id="m-totalbytes-2" /><code>{"int TotalBytes { get; }"}</code> | Bytes counted since the last reset. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"virtual string GetSummary(float statisticDuration)"}</code> | One padded text line with count, total bytes, average and bytes per second over the given duration. |
| <Link id="m-registermessagesend" /><code>{"void RegisterMessageSend(int byteSize)"}</code> | Counts one message of the given size. |
| <Link id="m-resetstatistictotals" /><code>{"virtual void ResetStatisticTotals()"}</code> | Zeroes the count and byte totals. |
| <Link id="m-updatevalueperframe" /><code>{"virtual void UpdateValuePerFrame()"}</code> | Recomputes `BytesPerFrame`. |
| <Link id="m-updatevalueperlastsecond" /><code>{"virtual void UpdateValuePerLastSecond()"}</code> | Recomputes `BytesPerLastSecond`. Meant to be called once a second. |

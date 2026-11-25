---
title: "NetworkingStatistic"
description: "class NetworkingStatistic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkingStatistic

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatistic`](/game-api/types/alta-utilities/inetworkstatistic)
- **Derived types** [`EntityMessageTypeStatistic`](/game-api/types/alta-networking/entitymessagetypestatistic), [`EntityStatistic`](/game-api/types/alta-networking/entitystatistic), [`MessageTypeStatistic`](/game-api/types/alta-networking/messagetypestatistic), [`SerializedBehaviourStatistic`](/game-api/types/alta-networking/serializedbehaviourstatistic), [`ConnectionChannelStatistic`](/game-api/types/alta-utilities/connectionchannelstatistic)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkingStatistic()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bytesperframe" /><code>{"private float bytesPerFrame"}</code> |  |
| <Link id="m-bytesperlastsecond" /><code>{"private float bytesPerLastSecond"}</code> |  |
| <Link id="m-count" /><code>{"private int count"}</code> |  |
| <Link id="m-numberpaddingwidth" /><code>{"protected const int NumberPaddingWidth"}</code> |  |
| <Link id="m-oldbytes" /><code>{"private int oldBytes"}</code> |  |
| <Link id="m-stringpaddingwidth" /><code>{"protected const int StringPaddingWidth"}</code> |  |
| <Link id="m-totalbytes" /><code>{"private int totalBytes"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bytesperframe-2" /><code>{"float BytesPerFrame { get; }"}</code> |  |
| <Link id="m-bytesperlastsecond-2" /><code>{"float BytesPerLastSecond { get; }"}</code> |  |
| <Link id="m-count-2" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-totalbytes-2" /><code>{"int TotalBytes { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"virtual string GetSummary(float statisticDuration)"}</code> |  |
| <Link id="m-registermessagesend" /><code>{"void RegisterMessageSend(int byteSize)"}</code> |  |
| <Link id="m-resetstatistictotals" /><code>{"virtual void ResetStatisticTotals()"}</code> |  |
| <Link id="m-updatevalueperframe" /><code>{"virtual void UpdateValuePerFrame()"}</code> |  |
| <Link id="m-updatevalueperlastsecond" /><code>{"virtual void UpdateValuePerLastSecond()"}</code> |  |

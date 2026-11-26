---
title: "NetworkTransportStatisticField"
description: "One network traffic counter for the profiler."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportStatisticField

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

One network traffic counter for the profiler. Reads a running total from a function you pass in and reports it relative to the last reset.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatistic`](/game-api/types/alta-utilities/inetworkstatistic)
- **Derived types** [`NetworkTransportCountStatisticField`](/game-api/types/alta-utilities/networktransportcountstatisticfield)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkTransportStatisticField(Func<int> getValueFunction, "}<Link to="/game-api/types/alta-utilities/networktransportstatistictype">{"NetworkTransportStatisticType"}</Link>{" statisticType = 0)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-numberpaddingwidth" /><code>{"protected const int NumberPaddingWidth"}</code> | Column width (10) used to pad numbers in summaries. |
| <Link id="m-stringpaddingwidth" /><code>{"protected const int StringPaddingWidth"}</code> | Column width (30) used to pad labels in summaries. |

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private int currentValue"}</code> | The raw counter value read from `getValueFunction` on the last `UpdateValue`. |
| <Link id="m-getvaluefunction" /><code>{"private Func<int> getValueFunction"}</code> | The function that reads the underlying transport counter, passed to the constructor. |
| <Link id="m-oldbytevalue" /><code>{"private int oldByteValue"}</code> | `Value` at the last `UpdateValuePerLastSecond` call, used to work out the per-second change. |
| <Link id="m-startvalue" /><code>{"private int startValue"}</code> | The raw counter value when totals were last reset; `Value` counts up from here. |
| <Link id="m-statistictype" /><code>{"private "}<Link to="/game-api/types/alta-utilities/networktransportstatistictype">{"NetworkTransportStatisticType"}</Link>{" statisticType"}</code> | What the counter measures (bytes by default), shown in the inspector. |
| <Link id="m-value" /><code>{"private int value"}</code> | Backing field for `Value`: the counter's change since the last reset. |
| <Link id="m-valueperlastsecond" /><code>{"private float valuePerLastSecond"}</code> | Backing field for `ValuePerLastSecond`: how much `Value` grew between the last two per-second updates. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value-2" /><code>{"int Value { get; }"}</code> | Total counted since the last `ResetStatisticTotals`, as of the last `UpdateValue`. |
| <Link id="m-valueperlastsecond-2" /><code>{"float ValuePerLastSecond { get; }"}</code> | Growth of `Value` between the last two `UpdateValuePerLastSecond` calls. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"virtual string GetSummary(float statisticDuration)"}</code> | Text line with the total bytes and the bytes per second over the given duration. |
| <Link id="m-resetstatistictotals" /><code>{"void ResetStatisticTotals()"}</code> | Makes the current total the new zero point, so `Value` counts from now. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The current `Value` as text. |
| <Link id="m-updatevalue" /><code>{"void UpdateValue()"}</code> | Reads the source function and sets `Value` to the amount since the last reset. |
| <Link id="m-updatevalueperframe" /><code>{"void UpdateValuePerFrame()"}</code> | Not implemented. Throws `NotImplementedException`. |
| <Link id="m-updatevalueperlastsecond" /><code>{"void UpdateValuePerLastSecond()"}</code> | Sets `ValuePerLastSecond` to how much `Value` grew since the previous call. Meant to be called once a second. |

## Used in

Members of other types that take, return or hold a `NetworkTransportStatisticField`:

[`NetworkTransportStatistic.outgoingFullBytesCountTotal`](/game-api/types/alta-utilities/networktransportstatistic#m-outgoingfullbytescounttotal), [`NetworkTransportStatistic.outgoingSystemBytesCountTotal`](/game-api/types/alta-utilities/networktransportstatistic#m-outgoingsystembytescounttotal), [`NetworkTransportStatistic.outgoingUserBytesCountTotal`](/game-api/types/alta-utilities/networktransportstatistic#m-outgoinguserbytescounttotal).

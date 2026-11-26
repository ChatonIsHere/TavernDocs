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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatistic`](/mod/game-api/types/alta-utilities/inetworkstatistic)
- **Derived types** [`NetworkTransportCountStatisticField`](/mod/game-api/types/alta-utilities/networktransportcountstatisticfield)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportStatisticField(Func<int> getValueFunction, "}<Link to="/mod/game-api/types/alta-utilities/networktransportstatistictype">{"NetworkTransportStatisticType"}</Link>{" statisticType = 0)"}</code> | <span className="api-desc">Creates a `NetworkTransportStatisticField` from `getValueFunction` and `statisticType`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-numberpaddingwidth" /><code>{"protected const int NumberPaddingWidth"}</code> | <span className="api-desc">Column width (10) used to pad numbers in summaries.</span> |
| <Link id="m-stringpaddingwidth" /><code>{"protected const int StringPaddingWidth"}</code> | <span className="api-desc">Column width (30) used to pad labels in summaries.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private int currentValue"}</code> | <span className="api-desc">The raw counter value read from `getValueFunction` on the last `UpdateValue`.</span> |
| <Link id="m-getvaluefunction" /><code>{"private Func<int> getValueFunction"}</code> | <span className="api-desc">The function that reads the underlying transport counter, passed to the constructor.</span> |
| <Link id="m-oldbytevalue" /><code>{"private int oldByteValue"}</code> | <span className="api-desc">`Value` at the last `UpdateValuePerLastSecond` call, used to work out the per-second change.</span> |
| <Link id="m-startvalue" /><code>{"private int startValue"}</code> | <span className="api-desc">The raw counter value when totals were last reset; `Value` counts up from here.</span> |
| <Link id="m-statistictype" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/networktransportstatistictype">{"NetworkTransportStatisticType"}</Link>{" statisticType"}</code> | <span className="api-desc">What the counter measures (bytes by default), shown in the inspector.</span> |
| <Link id="m-value" /><code>{"private int value"}</code> | <span className="api-desc">Backing field for `Value`: the counter's change since the last reset.</span> |
| <Link id="m-valueperlastsecond" /><code>{"private float valuePerLastSecond"}</code> | <span className="api-desc">Backing field for `ValuePerLastSecond`: how much `Value` grew between the last two per-second updates.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value-2" /><code>{"int Value { get; }"}</code> | <span className="api-desc">Total counted since the last `ResetStatisticTotals`, as of the last `UpdateValue`.</span> |
| <Link id="m-valueperlastsecond-2" /><code>{"float ValuePerLastSecond { get; }"}</code> | <span className="api-desc">Growth of `Value` between the last two `UpdateValuePerLastSecond` calls.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"virtual string GetSummary(float statisticDuration)"}</code> | <span className="api-desc">Text line with the total bytes and the bytes per second over the given duration.</span> |
| <Link id="m-resetstatistictotals" /><code>{"void ResetStatisticTotals()"}</code> | <span className="api-desc">Makes the current total the new zero point, so `Value` counts from now.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The current `Value` as text.</span> |
| <Link id="m-updatevalue" /><code>{"void UpdateValue()"}</code> | <span className="api-desc">Reads the source function and sets `Value` to the amount since the last reset.</span> |
| <Link id="m-updatevalueperframe" /><code>{"void UpdateValuePerFrame()"}</code> | <span className="api-desc">Not implemented. Throws `NotImplementedException`.</span> |
| <Link id="m-updatevalueperlastsecond" /><code>{"void UpdateValuePerLastSecond()"}</code> | <span className="api-desc">Sets `ValuePerLastSecond` to how much `Value` grew since the previous call. Meant to be called once a second.</span> |

## Used in

Members of other types that take, return or hold a `NetworkTransportStatisticField`:

<div className="api-used-in">

[`NetworkTransportStatistic.outgoingFullBytesCountTotal`](/mod/game-api/types/alta-utilities/networktransportstatistic#m-outgoingfullbytescounttotal), [`NetworkTransportStatistic.outgoingSystemBytesCountTotal`](/mod/game-api/types/alta-utilities/networktransportstatistic#m-outgoingsystembytescounttotal), [`NetworkTransportStatistic.outgoingUserBytesCountTotal`](/mod/game-api/types/alta-utilities/networktransportstatistic#m-outgoinguserbytescounttotal).

</div>

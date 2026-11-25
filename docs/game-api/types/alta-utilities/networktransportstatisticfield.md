---
title: "NetworkTransportStatisticField"
description: "class NetworkTransportStatisticField in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportStatisticField

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`INetworkStatistic`](/game-api/types/alta-utilities/inetworkstatistic)
- **Derived types** [`NetworkTransportCountStatisticField`](/game-api/types/alta-utilities/networktransportcountstatisticfield)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportStatisticField(Func<int> getValueFunction, "}<Link to="/game-api/types/alta-utilities/networktransportstatistictype">{"NetworkTransportStatisticType"}</Link>{" statisticType = 0)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private int currentValue"}</code> |  |
| <Link id="m-getvaluefunction" /><code>{"private Func<int> getValueFunction"}</code> |  |
| <Link id="m-numberpaddingwidth" /><code>{"protected const int NumberPaddingWidth"}</code> |  |
| <Link id="m-oldbytevalue" /><code>{"private int oldByteValue"}</code> |  |
| <Link id="m-startvalue" /><code>{"private int startValue"}</code> |  |
| <Link id="m-statistictype" /><code>{"private "}<Link to="/game-api/types/alta-utilities/networktransportstatistictype">{"NetworkTransportStatisticType"}</Link>{" statisticType"}</code> |  |
| <Link id="m-stringpaddingwidth" /><code>{"protected const int StringPaddingWidth"}</code> |  |
| <Link id="m-value" /><code>{"private int value"}</code> |  |
| <Link id="m-valueperlastsecond" /><code>{"private float valuePerLastSecond"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value-2" /><code>{"int Value { get; }"}</code> |  |
| <Link id="m-valueperlastsecond-2" /><code>{"float ValuePerLastSecond { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"virtual string GetSummary(float statisticDuration)"}</code> |  |
| <Link id="m-resetstatistictotals" /><code>{"void ResetStatisticTotals()"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
| <Link id="m-updatevalue" /><code>{"void UpdateValue()"}</code> |  |
| <Link id="m-updatevalueperframe" /><code>{"void UpdateValuePerFrame()"}</code> |  |
| <Link id="m-updatevalueperlastsecond" /><code>{"void UpdateValuePerLastSecond()"}</code> |  |

## Used in

Members of other types that take, return or hold a `NetworkTransportStatisticField`:

[`NetworkTransportStatistic.outgoingFullBytesCountTotal`](/game-api/types/alta-utilities/networktransportstatistic#m-outgoingfullbytescounttotal), [`NetworkTransportStatistic.outgoingSystemBytesCountTotal`](/game-api/types/alta-utilities/networktransportstatistic#m-outgoingsystembytescounttotal), [`NetworkTransportStatistic.outgoingUserBytesCountTotal`](/game-api/types/alta-utilities/networktransportstatistic#m-outgoinguserbytescounttotal).

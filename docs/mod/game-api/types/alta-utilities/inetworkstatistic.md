---
title: "INetworkStatistic"
description: "A single network traffic counter that can be updated each frame and each second, reset, and summarised as text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkStatistic

An **interface** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

A single network traffic counter that can be updated each frame and each second, reset, and summarised as text.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Derived types** [`NetworkingStatistic`](/mod/game-api/types/alta-utilities/networkingstatistic), [`NetworkTransportStatisticField`](/mod/game-api/types/alta-utilities/networktransportstatisticfield)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsummary" /><code>{"string GetSummary(float statisticDuration)"}</code> | <span className="api-desc">Returns a one-line text summary, with rates worked out over the given duration in seconds.</span> |
| <Link id="m-resetstatistictotals" /><code>{"void ResetStatisticTotals()"}</code> | <span className="api-desc">Clears the running totals.</span> |
| <Link id="m-updatevalueperframe" /><code>{"void UpdateValuePerFrame()"}</code> | <span className="api-desc">Recalculates the per-frame value.</span> |
| <Link id="m-updatevalueperlastsecond" /><code>{"void UpdateValuePerLastSecond()"}</code> | <span className="api-desc">Recalculates the value for the last second from the change since the previous call.</span> |

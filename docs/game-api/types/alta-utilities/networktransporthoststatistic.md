---
title: "NetworkTransportHostStatistic"
description: "class NetworkTransportHostStatistic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportHostStatistic

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkTransportStatistic`](/game-api/types/alta-utilities/networktransportstatistic)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportHostStatistic(int hostIdentifier)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-incomingmessagequeuesize" /><code>{"private "}<Link to="/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" incomingMessageQueueSize"}</code> |  |
| <Link id="m-outgoingmessagequeuesize" /><code>{"private "}<Link to="/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" outgoingMessageQueueSize"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hostidentifier" /><code>{"int HostIdentifier { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"override string CreateSummaryDump(float statisticDuration)"}</code> |  |
| <Link id="m-resetall" /><code>{"override void ResetAll()"}</code> |  |
| <Link id="m-updateallstatisticvalues" /><code>{"override void UpdateAllStatisticValues()"}</code> |  |
| <Link id="m-setupfields" /><code>{"protected override void SetupFields()"}</code> |  |
| <Link id="m-updatetotalbytesperlastsecondforextrafields" /><code>{"protected override void UpdateTotalBytesPerLastSecondForExtraFields()"}</code> |  |

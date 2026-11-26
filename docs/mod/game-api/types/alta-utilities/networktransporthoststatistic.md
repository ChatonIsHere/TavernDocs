---
title: "NetworkTransportHostStatistic"
description: "UNET transport statistics for one host ID: message queue sizes plus outgoing message, packet and byte counts read from NetworkTransport."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportHostStatistic

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

UNET transport statistics for one host ID: message queue sizes plus outgoing message, packet and byte counts read from `NetworkTransport`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkTransportStatistic`](/mod/game-api/types/alta-utilities/networktransportstatistic)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportHostStatistic(int hostIdentifier)"}</code> | Creates a `NetworkTransportHostStatistic` from `hostIdentifier`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-incomingmessagequeuesize" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" incomingMessageQueueSize"}</code> | Counter for the queue of incoming messages waiting to be processed. |
| <Link id="m-outgoingmessagequeuesize" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" outgoingMessageQueueSize"}</code> | Counter for the queue of outgoing messages waiting to be sent. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hostidentifier" /><code>{"int HostIdentifier { get; private set; }"}</code> | The UNET host ID these statistics read from. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"override string CreateSummaryDump(float statisticDuration)"}</code> | Adds the incoming and outgoing queue size lines ahead of the base outgoing report. |
| <Link id="m-resetall" /><code>{"override void ResetAll()"}</code> | Resets the outgoing counters and both queue size counters. |
| <Link id="m-updateallstatisticvalues" /><code>{"override void UpdateAllStatisticValues()"}</code> | Reads the queue sizes and outgoing packet and byte counts. The outgoing message count is not refreshed here. |
| <Link id="m-setupfields" /><code>{"protected override void SetupFields()"}</code> | Creates each counter with a getter that calls the matching `NetworkTransport` host query. |
| <Link id="m-updatetotalbytesperlastsecondforextrafields" /><code>{"protected override void UpdateTotalBytesPerLastSecondForExtraFields()"}</code> | Updates the last-second values of the two queue size counters. |

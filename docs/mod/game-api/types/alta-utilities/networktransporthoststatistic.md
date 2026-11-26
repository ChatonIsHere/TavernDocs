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
| <Link id="m-ctor" /><code>{"NetworkTransportHostStatistic(int hostIdentifier)"}</code> | <span className="api-desc">Creates a `NetworkTransportHostStatistic` from `hostIdentifier`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-incomingmessagequeuesize" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" incomingMessageQueueSize"}</code> | <span className="api-desc">Counter for the queue of incoming messages waiting to be processed.</span> |
| <Link id="m-outgoingmessagequeuesize" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/networktransportcountstatisticfield">{"NetworkTransportCountStatisticField"}</Link>{" outgoingMessageQueueSize"}</code> | <span className="api-desc">Counter for the queue of outgoing messages waiting to be sent.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hostidentifier" /><code>{"int HostIdentifier { get; private set; }"}</code> | <span className="api-desc">The UNET host ID these statistics read from.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createsummarydump" /><code>{"override string CreateSummaryDump(float statisticDuration)"}</code> | <span className="api-desc">Adds the incoming and outgoing queue size lines ahead of the base outgoing report.</span> |
| <Link id="m-resetall" /><code>{"override void ResetAll()"}</code> | <span className="api-desc">Resets the outgoing counters and both queue size counters.</span> |
| <Link id="m-updateallstatisticvalues" /><code>{"override void UpdateAllStatisticValues()"}</code> | <span className="api-desc">Reads the queue sizes and outgoing packet and byte counts. The outgoing message count is not refreshed here.</span> |
| <Link id="m-setupfields" /><code>{"protected override void SetupFields()"}</code> | <span className="api-desc">Creates each counter with a getter that calls the matching `NetworkTransport` host query.</span> |
| <Link id="m-updatetotalbytesperlastsecondforextrafields" /><code>{"protected override void UpdateTotalBytesPerLastSecondForExtraFields()"}</code> | <span className="api-desc">Updates the last-second values of the two queue size counters.</span> |

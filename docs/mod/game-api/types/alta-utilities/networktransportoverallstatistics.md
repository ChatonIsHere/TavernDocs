---
title: "NetworkTransportOverallStatistics"
description: "UNET transport statistics across all hosts: incoming packets and drops plus outgoing message, packet and byte totals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportOverallStatistics

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

UNET transport statistics across all hosts: incoming packets and drops plus outgoing message, packet and byte totals.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkStatisticWithIncomingPackets`](/mod/game-api/types/alta-utilities/networkstatisticwithincomingpackets)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportOverallStatistics()"}</code> | <span className="api-desc">Creates a `NetworkTransportOverallStatistics` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updateallstatisticvalues" /><code>{"override void UpdateAllStatisticValues()"}</code> | <span className="api-desc">Reads the current value of every counter from `NetworkTransport`.</span> |
| <Link id="m-setupfields" /><code>{"protected override void SetupFields()"}</code> | <span className="api-desc">Creates each counter from the matching all-hosts `NetworkTransport` query.</span> |

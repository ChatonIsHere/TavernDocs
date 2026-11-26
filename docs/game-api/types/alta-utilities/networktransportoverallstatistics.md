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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`NetworkStatisticWithIncomingPackets`](/game-api/types/alta-utilities/networkstatisticwithincomingpackets)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportOverallStatistics()"}</code> | Creates a `NetworkTransportOverallStatistics` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updateallstatisticvalues" /><code>{"override void UpdateAllStatisticValues()"}</code> | Reads the current value of every counter from `NetworkTransport`. |
| <Link id="m-setupfields" /><code>{"protected override void SetupFields()"}</code> | Creates each counter from the matching all-hosts `NetworkTransport` query. |

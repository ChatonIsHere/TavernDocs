---
title: "ConnectionSimulatorConfiguration"
description: "Settings for simulating a bad connection: send and receive delays in ms and a packet loss chance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionSimulatorConfiguration

A **class** in `Root.Township`, `Alta.Profiling.Networking`.

Settings for simulating a bad connection: send and receive delays in ms and a packet loss chance. Held by `NetworkingProfiler`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionSimulatorConfiguration()"}</code> | Creates a `ConnectionSimulatorConfiguration` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inaveragedelay" /><code>{"int inAverageDelay"}</code> | Average delay on incoming packets, in ms. |
| <Link id="m-inmindelay" /><code>{"int inMinDelay"}</code> | Minimum delay on incoming packets, in ms. |
| <Link id="m-outaveragedelay" /><code>{"int outAverageDelay"}</code> | Average delay on outgoing packets, in ms. |
| <Link id="m-outmindelay" /><code>{"int outMinDelay"}</code> | Minimum delay on outgoing packets, in ms. |
| <Link id="m-packetloss" /><code>{"float packetLoss"}</code> | Chance from 0 to 1 that a packet is dropped. |

## Used in

Members of other types that take, return or hold a `ConnectionSimulatorConfiguration`:

[`NetworkingProfiler.connectionConfiguration`](/game-api/types/alta-utilities/networkingprofiler#m-connectionconfiguration).

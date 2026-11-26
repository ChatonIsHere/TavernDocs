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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionSimulatorConfiguration()"}</code> | <span className="api-desc">Creates a `ConnectionSimulatorConfiguration` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inaveragedelay" /><code>{"int inAverageDelay"}</code> | <span className="api-desc">Average delay on incoming packets, in ms.</span> |
| <Link id="m-inmindelay" /><code>{"int inMinDelay"}</code> | <span className="api-desc">Minimum delay on incoming packets, in ms.</span> |
| <Link id="m-outaveragedelay" /><code>{"int outAverageDelay"}</code> | <span className="api-desc">Average delay on outgoing packets, in ms.</span> |
| <Link id="m-outmindelay" /><code>{"int outMinDelay"}</code> | <span className="api-desc">Minimum delay on outgoing packets, in ms.</span> |
| <Link id="m-packetloss" /><code>{"float packetLoss"}</code> | <span className="api-desc">Chance from 0 to 1 that a packet is dropped.</span> |

## Used in

Members of other types that take, return or hold a `ConnectionSimulatorConfiguration`:

<div className="api-used-in">

[`NetworkingProfiler.connectionConfiguration`](/mod/game-api/types/alta-utilities/networkingprofiler#m-connectionconfiguration).

</div>

---
title: "LlapiMetric"
description: "Holds running averages of send and process timings for client and server transport loops."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LlapiMetric

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Parallel`.

Holds running averages of send and process timings for client and server transport loops. Nothing else in this build references it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LlapiMetric()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-processincomingclient" /><code>{"readonly "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessIncomingClient"}</code> | Running average of client incoming processing. |
| <Link id="m-processincomingserver" /><code>{"readonly "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessIncomingServer"}</code> | Running average of server incoming processing. |
| <Link id="m-processoutgoingclient" /><code>{"readonly "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessOutgoingClient"}</code> | Running average of client outgoing processing. |
| <Link id="m-processoutgoingserver" /><code>{"readonly "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessOutgoingServer"}</code> | Running average of server outgoing processing. |
| <Link id="m-sendaverage" /><code>{"readonly "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SendAverage"}</code> | Running average of send calls. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Formats all five averages, with min, max and cycle counts for the process timings, one per line. |

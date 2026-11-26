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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LlapiMetric()"}</code> | <span className="api-desc">Creates a `LlapiMetric` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-processincomingclient" /><code>{"readonly "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessIncomingClient"}</code> | <span className="api-desc">Running average of client incoming processing.</span> |
| <Link id="m-processincomingserver" /><code>{"readonly "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessIncomingServer"}</code> | <span className="api-desc">Running average of server incoming processing.</span> |
| <Link id="m-processoutgoingclient" /><code>{"readonly "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessOutgoingClient"}</code> | <span className="api-desc">Running average of client outgoing processing.</span> |
| <Link id="m-processoutgoingserver" /><code>{"readonly "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessOutgoingServer"}</code> | <span className="api-desc">Running average of server outgoing processing.</span> |
| <Link id="m-sendaverage" /><code>{"readonly "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" SendAverage"}</code> | <span className="api-desc">Running average of send calls.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Formats all five averages, with min, max and cycle counts for the process timings, one per line.</span> |

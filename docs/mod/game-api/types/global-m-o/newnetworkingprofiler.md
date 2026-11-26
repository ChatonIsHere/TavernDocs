---
title: "NewNetworkingProfiler"
description: "Obsolete static profiler that turns the transport socket's byte and packet totals into per second rates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NewNetworkingProfiler

A **static class** in `Root.Township`, the global namespace.

Obsolete static profiler that turns the transport socket's byte and packet totals into per second rates. Started by `ServerDiagnosticsManager`, read by `ServerProfilingData`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested types** [`NetworkStat`](/mod/game-api/types/global-m-o/newnetworkingprofiler-networkstat)
- **Attributes** `Obsolete`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stats" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/global-m-o/newnetworkingprofiler-networkstat">{"NewNetworkingProfiler.NetworkStat"}</Link>{"> stats"}</code> | <span className="api-desc">The stats, by name.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bytespersecond" /><code>{"static float BytesPerSecond { get; }"}</code> | <span className="api-desc">Outgoing bytes per second at the last `Cache`.</span> |
| <Link id="m-incomingpacketspersecond" /><code>{"static float IncomingPacketsPerSecond { get; }"}</code> | <span className="api-desc">Incoming packets per second at the last `Cache`.</span> |
| <Link id="m-outgoingpacketspersecond" /><code>{"static float OutgoingPacketsPerSecond { get; }"}</code> | <span className="api-desc">Outgoing packets per second at the last `Cache`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cache" /><code>{"static void Cache()"}</code> | <span className="api-desc">Samples each total and works out its rate since the last sample.</span> |
| <Link id="m-init" /><code>{"static void Init()"}</code> | <span className="api-desc">Sets up the three stats from the current socket's transport.</span> |

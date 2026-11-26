---
title: "NewNetworkingProfiler"
description: "Obsolete static profiler that turns the transport socket's byte and packet totals into per second rates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NewNetworkingProfiler

A **static class** in `Root.Township`, no namespace.

Obsolete static profiler that turns the transport socket's byte and packet totals into per second rates. Started by `ServerDiagnosticsManager`, read by `ServerProfilingData`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested types** [`NetworkStat`](/game-api/types/global-m-o/newnetworkingprofiler-networkstat)
- **Attributes** `Obsolete`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stats" /><code>{"private static Dictionary<string, "}<Link to="/game-api/types/global-m-o/newnetworkingprofiler-networkstat">{"NewNetworkingProfiler.NetworkStat"}</Link>{"> stats"}</code> | The stats, by name. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bytespersecond" /><code>{"static float BytesPerSecond { get; }"}</code> | Outgoing bytes per second at the last `Cache`. |
| <Link id="m-incomingpacketspersecond" /><code>{"static float IncomingPacketsPerSecond { get; }"}</code> | Incoming packets per second at the last `Cache`. |
| <Link id="m-outgoingpacketspersecond" /><code>{"static float OutgoingPacketsPerSecond { get; }"}</code> | Outgoing packets per second at the last `Cache`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cache" /><code>{"static void Cache()"}</code> | Samples each total and works out its rate since the last sample. |
| <Link id="m-init" /><code>{"static void Init()"}</code> | Sets up the three stats from the current socket's transport. |

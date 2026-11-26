---
title: "ProcessMetrics"
description: "Old CPU and RAM sampler for one Process, marked obsolete in favour of the new analytics system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProcessMetrics

A **class** in `Root.Township`, the global namespace.

Old CPU and RAM sampler for one `Process`, marked obsolete in favour of the new analytics system. Creating one starts a background thread that samples CPU once a second until `Stop`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested types** [`MemoryCounters`](/mod/game-api/types/global-p/processmetrics-memorycounters)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProcessMetrics(Process process)"}</code> | <span className="api-desc">Creates a `ProcessMetrics` from `process`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialprocessortime" /><code>{"private static TimeSpan initialProcessorTime"}</code> | <span className="api-desc">Processor time of the process when the sampler was made. Static, so a second instance overwrites it.</span> |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> | <span className="api-desc">Keeps the sampler thread looping. `Stop` clears it.</span> |
| <Link id="m-lastmonitortime" /><code>{"private long lastMonitorTime"}</code> | <span className="api-desc">Stopwatch time in milliseconds of the previous sample.</span> |
| <Link id="m-oldcputime" /><code>{"private static TimeSpan oldCPUTime"}</code> | <span className="api-desc">Processor time used at the previous sample. Static, shared by every instance.</span> |
| <Link id="m-process" /><code>{"private Process process"}</code> | <span className="api-desc">The process being measured.</span> |
| <Link id="m-processorcount" /><code>{"private int processorCount"}</code> | <span className="api-desc">Number of logical cores, used to scale `CPU` to a 0 to 1 range.</span> |
| <Link id="m-totalduration" /><code>{"private Stopwatch totalDuration"}</code> | <span className="api-desc">Stopwatch started when the sampler was made; gives the wall time between samples.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cpu" /><code>{"double CPU { get; private set; }"}</code> | <span className="api-desc">CPU use over the last sample, as a fraction of all processor cores (0 to 1). Updated once a second by the sampler thread.</span> |
| <Link id="m-ram" /><code>{"long RAM { get; }"}</code> | <span className="api-desc">Current working set of the process in bytes, read fresh from Windows each time you get it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Ends the sampler thread after its current one-second sleep.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getprocessmemoryinfo" /><code>{"private static bool GetProcessMemoryInfo(IntPtr processHandle, out "}<Link to="/mod/game-api/types/global-p/processmetrics-memorycounters">{"ProcessMetrics.MemoryCounters"}</Link>{" info, int Size)"}</code> | <span className="api-desc">Native `psapi.dll` call that fills a `MemoryCounters` for a process handle. Windows only; `RAM` uses it.</span> |
| <Link id="m-updatemetric" /><code>{"private void UpdateMetric()"}</code> | <span className="api-desc">Works out `CPU` from the processor time used since the last sample. Called by `UpdateMetricLoop`.</span> |
| <Link id="m-updatemetricloop" /><code>{"private void UpdateMetricLoop()"}</code> | <span className="api-desc">Body of the background thread: calls `UpdateMetric` every second while `isRunning` is true.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ProcessMetrics`:

<div className="api-used-in">

[`ServerProfilingData.processMetrics`](/mod/game-api/types/global-s/serverprofilingdata#m-processmetrics).

</div>

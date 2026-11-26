---
title: "ProcessMetrics"
description: "Old CPU and RAM sampler for one Process, marked obsolete in favour of the new analytics system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProcessMetrics

A **class** in `Root.Township`, no namespace.

Old CPU and RAM sampler for one `Process`, marked obsolete in favour of the new analytics system. Creating one starts a background thread that samples CPU once a second until `Stop`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested types** [`MemoryCounters`](/game-api/types/global-p/processmetrics-memorycounters)
- **Attributes** `Obsolete`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProcessMetrics(Process process)"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialprocessortime" /><code>{"private static TimeSpan initialProcessorTime"}</code> | Processor time of the process when the sampler was made. Static, so a second instance overwrites it. |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> | Keeps the sampler thread looping. `Stop` clears it. |
| <Link id="m-lastmonitortime" /><code>{"private long lastMonitorTime"}</code> | Stopwatch time in milliseconds of the previous sample. |
| <Link id="m-oldcputime" /><code>{"private static TimeSpan oldCPUTime"}</code> | Processor time used at the previous sample. Static, shared by every instance. |
| <Link id="m-process" /><code>{"private Process process"}</code> | The process being measured. |
| <Link id="m-processorcount" /><code>{"private int processorCount"}</code> | Number of logical cores, used to scale `CPU` to a 0 to 1 range. |
| <Link id="m-totalduration" /><code>{"private Stopwatch totalDuration"}</code> | Stopwatch started when the sampler was made; gives the wall time between samples. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cpu" /><code>{"double CPU { get; private set; }"}</code> | CPU use over the last sample, as a fraction of all processor cores (0 to 1). Updated once a second by the sampler thread. |
| <Link id="m-ram" /><code>{"long RAM { get; }"}</code> | Current working set of the process in bytes, read fresh from Windows each time you get it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Ends the sampler thread after its current one-second sleep. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getprocessmemoryinfo" /><code>{"private static bool GetProcessMemoryInfo(IntPtr processHandle, out "}<Link to="/game-api/types/global-p/processmetrics-memorycounters">{"ProcessMetrics.MemoryCounters"}</Link>{" info, int Size)"}</code> | Native `psapi.dll` call that fills a `MemoryCounters` for a process handle. Windows only; `RAM` uses it. |
| <Link id="m-updatemetric" /><code>{"private void UpdateMetric()"}</code> | Works out `CPU` from the processor time used since the last sample. Called by `UpdateMetricLoop`. |
| <Link id="m-updatemetricloop" /><code>{"private void UpdateMetricLoop()"}</code> | Body of the background thread: calls `UpdateMetric` every second while `isRunning` is true. |

</details>

## Used in

Members of other types that take, return or hold a `ProcessMetrics`:

[`ServerProfilingData.processMetrics`](/game-api/types/global-s/serverprofilingdata#m-processmetrics).

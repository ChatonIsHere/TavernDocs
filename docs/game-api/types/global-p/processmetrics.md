---
title: "ProcessMetrics"
description: "class ProcessMetrics in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProcessMetrics

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested types** [`MemoryCounters`](/game-api/types/global-p/processmetrics-memorycounters)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProcessMetrics(Process process)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-initialprocessortime" /><code>{"private static TimeSpan initialProcessorTime"}</code> |  |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> |  |
| <Link id="m-lastmonitortime" /><code>{"private long lastMonitorTime"}</code> |  |
| <Link id="m-oldcputime" /><code>{"private static TimeSpan oldCPUTime"}</code> |  |
| <Link id="m-process" /><code>{"private Process process"}</code> |  |
| <Link id="m-processorcount" /><code>{"private int processorCount"}</code> |  |
| <Link id="m-totalduration" /><code>{"private Stopwatch totalDuration"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cpu" /><code>{"double CPU { get; private set; }"}</code> |  |
| <Link id="m-ram" /><code>{"long RAM { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |  |
| <Link id="m-getprocessmemoryinfo" /><code>{"private static bool GetProcessMemoryInfo(IntPtr processHandle, out "}<Link to="/game-api/types/global-p/processmetrics-memorycounters">{"ProcessMetrics.MemoryCounters"}</Link>{" info, int Size)"}</code> |  |
| <Link id="m-updatemetric" /><code>{"private void UpdateMetric()"}</code> |  |
| <Link id="m-updatemetricloop" /><code>{"private void UpdateMetricLoop()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ProcessMetrics`:

[`ServerProfilingData.processMetrics`](/game-api/types/global-s/serverprofilingdata#m-processmetrics).

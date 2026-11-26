---
title: "ProcessDiagnostics"
description: "Obsolete: reads total CPU use and one process's memory."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProcessDiagnostics

A **class** in `Root.Township`, the global namespace.

Obsolete: reads total CPU use and one process's memory. Marked to be replaced by the new analytics system.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProcessDiagnostics(Process processToTrack)"}</code> | Creates a `ProcessDiagnostics` from `processToTrack`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cpucounter" /><code>{"private PerformanceCounter cpuCounter"}</code> | Performance counter for total processor time. |
| <Link id="m-processtotrack" /><code>{"private Process processToTrack"}</code> | Process whose memory is read. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cpupercentage" /><code>{"float CPUPercentage { get; }"}</code> | Total CPU use across all cores, from a performance counter. |
| <Link id="m-memorysizeinbytes" /><code>{"long MemorySizeInBytes { get; }"}</code> | Working set of the tracked process as of the last `UpdateValues`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalues" /><code>{"void UpdateValues()"}</code> | Refreshes the process info. |

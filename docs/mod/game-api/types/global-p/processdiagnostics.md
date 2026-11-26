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
| <Link id="m-ctor" /><code>{"ProcessDiagnostics(Process processToTrack)"}</code> | <span className="api-desc">Creates a `ProcessDiagnostics` from `processToTrack`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cpucounter" /><code>{"private PerformanceCounter cpuCounter"}</code> | <span className="api-desc">Performance counter for total processor time.</span> |
| <Link id="m-processtotrack" /><code>{"private Process processToTrack"}</code> | <span className="api-desc">Process whose memory is read.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cpupercentage" /><code>{"float CPUPercentage { get; }"}</code> | <span className="api-desc">Total CPU use across all cores, from a performance counter.</span> |
| <Link id="m-memorysizeinbytes" /><code>{"long MemorySizeInBytes { get; }"}</code> | <span className="api-desc">Working set of the tracked process as of the last `UpdateValues`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalues" /><code>{"void UpdateValues()"}</code> | <span className="api-desc">Refreshes the process info.</span> |

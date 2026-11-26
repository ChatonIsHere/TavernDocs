---
title: "ProcessMetrics.MemoryCounters"
description: "Mirror of the Windows PROCESS_MEMORY_COUNTERS struct, filled by GetProcessMemoryInfo."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProcessMetrics.MemoryCounters

A **struct** in `Root.Township`, no namespace.

Mirror of the Windows `PROCESS_MEMORY_COUNTERS` struct, filled by `GetProcessMemoryInfo`. Sizes are in bytes.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`ProcessMetrics`](/game-api/types/global-p/processmetrics)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cb" /><code>{"int cb"}</code> | Size of the struct in bytes, as Windows expects. `RAM` passes the size as a separate argument and leaves this at 0. |
| <Link id="m-pagefaultcount" /><code>{"int PageFaultCount"}</code> | Number of page faults the process has had. |
| <Link id="m-pagefileusage" /><code>{"IntPtr PagefileUsage"}</code> | Bytes of private memory committed for the process (pagefile usage). |
| <Link id="m-peakpagefileusage" /><code>{"IntPtr PeakPagefileUsage"}</code> | Highest `PagefileUsage` seen over the process's life. |
| <Link id="m-peakworkingsetsize" /><code>{"IntPtr PeakWorkingSetSize"}</code> | Highest working set size seen over the process's life. |
| <Link id="m-quotanonpagedpoolusage" /><code>{"IntPtr QuotaNonPagedPoolUsage"}</code> | Current non-paged pool usage. |
| <Link id="m-quotapagedpoolusage" /><code>{"IntPtr QuotaPagedPoolUsage"}</code> | Current paged pool usage. |
| <Link id="m-quotapeaknonpagedpoolusage" /><code>{"IntPtr QuotaPeakNonPagedPoolUsage"}</code> | Highest non-paged pool usage seen. |
| <Link id="m-quotapeakpagedpoolusage" /><code>{"IntPtr QuotaPeakPagedPoolUsage"}</code> | Highest paged pool usage seen. |
| <Link id="m-workingsetsize" /><code>{"IntPtr WorkingSetSize"}</code> | Current working set (physical memory in use). This is what `ProcessMetrics.RAM` returns. |

## Used in

Members of other types that take, return or hold a `MemoryCounters`:

[`ProcessMetrics.GetProcessMemoryInfo`](/game-api/types/global-p/processmetrics#m-getprocessmemoryinfo).

---
title: "ProcessMetrics.MemoryCounters"
description: "Mirror of the Windows PROCESS_MEMORY_COUNTERS struct, filled by GetProcessMemoryInfo."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProcessMetrics.MemoryCounters

A **struct** in `Root.Township`, the global namespace.

Mirror of the Windows `PROCESS_MEMORY_COUNTERS` struct, filled by `GetProcessMemoryInfo`. Sizes are in bytes.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`ProcessMetrics`](/mod/game-api/types/global-p/processmetrics)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cb" /><code>{"int cb"}</code> | <span className="api-desc">Size of the struct in bytes, as Windows expects. `RAM` passes the size as a separate argument and leaves this at 0.</span> |
| <Link id="m-pagefaultcount" /><code>{"int PageFaultCount"}</code> | <span className="api-desc">Number of page faults the process has had.</span> |
| <Link id="m-pagefileusage" /><code>{"IntPtr PagefileUsage"}</code> | <span className="api-desc">Bytes of private memory committed for the process (pagefile usage).</span> |
| <Link id="m-peakpagefileusage" /><code>{"IntPtr PeakPagefileUsage"}</code> | <span className="api-desc">Highest `PagefileUsage` seen over the process's life.</span> |
| <Link id="m-peakworkingsetsize" /><code>{"IntPtr PeakWorkingSetSize"}</code> | <span className="api-desc">Highest working set size seen over the process's life.</span> |
| <Link id="m-quotanonpagedpoolusage" /><code>{"IntPtr QuotaNonPagedPoolUsage"}</code> | <span className="api-desc">Current non-paged pool usage.</span> |
| <Link id="m-quotapagedpoolusage" /><code>{"IntPtr QuotaPagedPoolUsage"}</code> | <span className="api-desc">Current paged pool usage.</span> |
| <Link id="m-quotapeaknonpagedpoolusage" /><code>{"IntPtr QuotaPeakNonPagedPoolUsage"}</code> | <span className="api-desc">Highest non-paged pool usage seen.</span> |
| <Link id="m-quotapeakpagedpoolusage" /><code>{"IntPtr QuotaPeakPagedPoolUsage"}</code> | <span className="api-desc">Highest paged pool usage seen.</span> |
| <Link id="m-workingsetsize" /><code>{"IntPtr WorkingSetSize"}</code> | <span className="api-desc">Current working set (physical memory in use). This is what `ProcessMetrics.RAM` returns.</span> |

## Used in

Members of other types that take, return or hold a `MemoryCounters`:

<div className="api-used-in">

[`ProcessMetrics.GetProcessMemoryInfo`](/mod/game-api/types/global-p/processmetrics#m-getprocessmemoryinfo).

</div>

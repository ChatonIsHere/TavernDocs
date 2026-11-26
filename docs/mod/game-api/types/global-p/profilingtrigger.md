---
title: "ProfilingTrigger"
description: "Debug component: when triggered, takes nine profiler samples one after another through ProfilingCommandModule."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingTrigger

A **class** in `Root.Township`, the global namespace.

Debug component: when triggered, takes nine profiler samples one after another through `ProfilingCommandModule`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfilingTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-profiling" /><code>{"private int profiling"}</code> | <span className="api-desc">Number of the current sample.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-profile" /><code>{"void Profile()"}</code> | <span className="api-desc">Starts the sample run.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-advanceprofiler" /><code>{"private void AdvanceProfiler()"}</code> | <span className="api-desc">Starts the next 300-frame sample until nine have run.</span> |

</details>

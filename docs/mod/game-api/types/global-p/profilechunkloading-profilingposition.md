---
title: "ProfileChunkLoading.ProfilingPosition"
description: "A named world position that ProfileChunkLoading visits when profiling chunk load times."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfileChunkLoading.ProfilingPosition

A **class** in `Root.Township`, the global namespace.

A named world position that `ProfileChunkLoading` visits when profiling chunk load times.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`ProfileChunkLoading`](/mod/game-api/types/global-p/profilechunkloading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfilingPosition()"}</code> | <span className="api-desc">Creates a `ProfileChunkLoading.ProfilingPosition` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"private string name"}</code> | <span className="api-desc">Backing field for `Name`.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Label recorded with the results for this position.</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; set; }"}</code> | <span className="api-desc">World position to profile at.</span> |

## Used in

Members of other types that take, return or hold a `ProfilingPosition`:

<div className="api-used-in">

[`ProfileChunkLoading.positions`](/mod/game-api/types/global-p/profilechunkloading#m-positions), [`ProfileChunkLoading.Positions`](/mod/game-api/types/global-p/profilechunkloading#m-positions-2).

</div>

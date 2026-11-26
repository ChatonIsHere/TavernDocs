---
title: "ProfileChunkLoading.ProfilingPosition"
description: "A named world position that ProfileChunkLoading visits when profiling chunk load times."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfileChunkLoading.ProfilingPosition

A **class** in `Root.Township`, no namespace.

A named world position that `ProfileChunkLoading` visits when profiling chunk load times.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`ProfileChunkLoading`](/game-api/types/global-p/profilechunkloading)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProfilingPosition()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"private string name"}</code> | Backing field for `Name`. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | Label recorded with the results for this position. |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; set; }"}</code> | World position to profile at. |

## Used in

Members of other types that take, return or hold a `ProfilingPosition`:

[`ProfileChunkLoading.positions`](/game-api/types/global-p/profilechunkloading#m-positions), [`ProfileChunkLoading.Positions`](/game-api/types/global-p/profilechunkloading#m-positions-2).

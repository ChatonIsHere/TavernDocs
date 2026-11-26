---
title: "LODChange.LODLog"
description: "Debug record of an LOD group and its LOD values, kept in a LODChange asset for the in-game inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LODChange.LODLog

A **class** in `Root.Township`, no namespace.

Debug record of an LOD group and its LOD values, kept in a `LODChange` asset for the in-game inspector.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`LODChange`](/game-api/types/global-i-l/lodchange)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODLog(LODGroup group, float[] lods)"}</code> | Creates a `LODChange.LODLog` from `group` and `lods`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code>{"private LODGroup group"}</code> | Backing field for `Group`. |
| <Link id="m-lods" /><code>{"private float[] lods"}</code> | Backing field for `LODs`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group-2" /><code>{"LODGroup Group { get; }"}</code> | The logged LOD group. |
| <Link id="m-isexpanding" /><code>{"bool IsExpanding { get; set; }"}</code> | UI state: whether the entry is expanded. |
| <Link id="m-lods-2" /><code>{"float[] LODs { get; }"}</code> | Recorded LOD values for the group. |

## Used in

Members of other types that take, return or hold a `LODLog`:

[`LODChange.logs`](/game-api/types/global-i-l/lodchange#m-logs), [`LODChange.Logs`](/game-api/types/global-i-l/lodchange#m-logs-2).

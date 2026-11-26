---
title: "LODChange.LODLog"
description: "Debug record of an LOD group and its LOD values, kept in a LODChange asset for the in-game inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LODChange.LODLog

A **class** in `Root.Township`, the global namespace.

Debug record of an LOD group and its LOD values, kept in a `LODChange` asset for the in-game inspector.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LODChange`](/mod/game-api/types/global-i-l/lodchange)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODLog(LODGroup group, float[] lods)"}</code> | <span className="api-desc">Creates a `LODChange.LODLog` from `group` and `lods`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code>{"private LODGroup group"}</code> | <span className="api-desc">Backing field for `Group`.</span> |
| <Link id="m-lods" /><code>{"private float[] lods"}</code> | <span className="api-desc">Backing field for `LODs`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group-2" /><code>{"LODGroup Group { get; }"}</code> | <span className="api-desc">The logged LOD group.</span> |
| <Link id="m-isexpanding" /><code>{"bool IsExpanding { get; set; }"}</code> | <span className="api-desc">UI state: whether the entry is expanded.</span> |
| <Link id="m-lods-2" /><code>{"float[] LODs { get; }"}</code> | <span className="api-desc">Recorded LOD values for the group.</span> |

## Used in

Members of other types that take, return or hold a `LODLog`:

<div className="api-used-in">

[`LODChange.logs`](/mod/game-api/types/global-i-l/lodchange#m-logs), [`LODChange.Logs`](/mod/game-api/types/global-i-l/lodchange#m-logs-2).

</div>

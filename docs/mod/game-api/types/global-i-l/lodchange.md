---
title: "LODChange"
description: "Debug asset that holds a list of LOD group changes as LODLog entries."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LODChange

A **class** in `Root.Township`, the global namespace.

Debug asset that holds a list of LOD group changes as `LODLog` entries. The in-game inspector has a field for one but this build does not use it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`LODChange.Create`](/mod/game-api/types/global-i-l/lodchange-create)
- **Nested types** [`Create`](/mod/game-api/types/global-i-l/lodchange-create), [`LODLog`](/mod/game-api/types/global-i-l/lodchange-lodlog)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODChange()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logs" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/lodchange-lodlog">{"LODChange.LODLog"}</Link>{"> logs"}</code> | <span className="api-desc">Backing field for `Logs`.</span> |
| <Link id="m-namedgroups" /><code>{"private Dictionary<string, LODGroup> namedGroups"}</code> | <span className="api-desc">Not used in this file.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logs-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-i-l/lodchange-lodlog">{"LODChange.LODLog"}</Link>{"> Logs { get; }"}</code> | <span className="api-desc">The recorded LOD changes, each a group and its LOD values.</span> |

## Used in

Members of other types that take, return or hold a `LODChange`:

<div className="api-used-in">

[`InGameInspector.log`](/mod/game-api/types/global-i-l/ingameinspector#m-log).

</div>

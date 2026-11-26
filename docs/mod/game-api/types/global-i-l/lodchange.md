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
| <Link id="m-ctor" /><code>{"LODChange()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logs" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/lodchange-lodlog">{"LODChange.LODLog"}</Link>{"> logs"}</code> | Backing field for `Logs`. |
| <Link id="m-namedgroups" /><code>{"private Dictionary<string, LODGroup> namedGroups"}</code> | Not used in this file. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logs-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-i-l/lodchange-lodlog">{"LODChange.LODLog"}</Link>{"> Logs { get; }"}</code> | The recorded LOD changes, each a group and its LOD values. |

## Used in

Members of other types that take, return or hold a `LODChange`:

[`InGameInspector.log`](/mod/game-api/types/global-i-l/ingameinspector#m-log).

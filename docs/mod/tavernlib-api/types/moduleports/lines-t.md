---
title: "Lines<T>"
description: "A list for console answers: one item per line in a text console, and a JSON array in TavernKeeper."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Lines&lt;T&gt;

A **class** in `TavernLib`, `TavernLib.ModulePorts`.

A list for console answers: one item per line in a text console, and a JSON array in TavernKeeper. Return it instead of a plain `IEnumerable`.

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Inherits or implements** `List<T>`
- **Documented in** [Console](/mod/tavernlib-api/console#lines)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Lines(IEnumerable<T> items)"}</code> | <span className="api-desc">Copies the items into a list that a text console prints one per line.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Each item on its own line, or `None` when the list is empty.</span> |

## Used in

Members of other types that take, return or hold a `Lines&lt;T>`:

<div className="api-used-in">

[`PlayerCommandModule.ProgressionCommandModule.CheckAllXP`](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule#m-checkallxp), [`PlayerCommandModule.ProgressionCommandModule.List`](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule#m-list), [`PlayerCommandModule.ProgressionCommandModule.ShowAvailableSkills`](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule#m-showavailableskills).

</div>

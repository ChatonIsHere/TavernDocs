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

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Inherits or implements** `List<T>`
- **Documented in** [Console](/tavernlib-api/console#lines)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Lines(IEnumerable<T> items)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Each item on its own line, or `None` when the list is empty. |

## Used in

Members of other types that take, return or hold a `Lines&lt;T>`:

[`PlayerCommandModule.ProgressionCommandModule.CheckAllXP`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule#m-checkallxp), [`PlayerCommandModule.ProgressionCommandModule.List`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule#m-list), [`PlayerCommandModule.ProgressionCommandModule.ShowAvailableSkills`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule#m-showavailableskills).

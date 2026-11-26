---
title: "PlayerCommandModule.StatValue"
description: "The answer to player check-stat: one stat's definition, current value and base value."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommandModule.StatValue

A **class** in `TavernLib`, `TavernLib.ModulePorts`.

The answer to `player check-stat`: one stat's definition, current value and base value.

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule`](/tavernlib-api/types/moduleports/playercommandmodule)
- **Documented in** [PlayerCommandModule.StatValue](/tavernlib-api/types/moduleports/playercommandmodule-statvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatValue()"}</code> | Makes an empty stat value; the stat conversion fills it. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-base" /><code>{"float Base { get; set; }"}</code> | The stat's base value, before modifiers. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{" Definition { get; set; }"}</code> | The stat's definition, as hashed item info. |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | The stat's current value. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/tavernlib-api/types/moduleports/playercommandmodule-statvalue">{"PlayerCommandModule.StatValue"}</Link>{" op_Implicit("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Makes a `StatValue` from a game `Stat`. |

## Used in

Members of other types that take, return or hold a `StatValue`:

[`PlayerCommandModule.CheckStat`](/tavernlib-api/types/moduleports/playercommandmodule#m-checkstat-3).

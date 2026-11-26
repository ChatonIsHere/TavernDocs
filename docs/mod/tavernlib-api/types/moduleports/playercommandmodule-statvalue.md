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

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule`](/mod/tavernlib-api/types/moduleports/playercommandmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatValue()"}</code> | <span className="api-desc">Makes an empty stat value; the stat conversion fills it.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-base" /><code>{"float Base { get; set; }"}</code> | <span className="api-desc">The stat's base value, before modifiers.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{" Definition { get; set; }"}</code> | <span className="api-desc">The stat's definition, as hashed item info.</span> |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | <span className="api-desc">The stat's current value.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/tavernlib-api/types/moduleports/playercommandmodule-statvalue">{"PlayerCommandModule.StatValue"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Makes a `StatValue` from a game `Stat`.</span> |

## Used in

Members of other types that take, return or hold a `StatValue`:

<div className="api-used-in">

[`PlayerCommandModule.CheckStat`](/mod/tavernlib-api/types/moduleports/playercommandmodule#m-checkstat-3).

</div>

---
title: "PlayerCommandModule.StatDefinitionInfo"
description: "One row of player list-stats: a stat's name, limits and, for a player with a body, its current value."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommandModule.StatDefinitionInfo

A **class** in `TavernLib`, `TavernLib.ModulePorts`.

One row of `player list-stats`: a stat's name, limits and, for a player with a body, its current value.

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule`](/mod/tavernlib-api/types/moduleports/playercommandmodule)
- **Documented in** [PlayerCommandModule.StatDefinitionInfo](/mod/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatDefinitionInfo()"}</code> | <span className="api-desc">Makes an empty stat info; the stat conversions fill it.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"float Max { get; set; }"}</code> | <span className="api-desc">The stat's maximum: the player's own, or the definition's default maximum.</span> |
| <Link id="m-min" /><code>{"float Min { get; set; }"}</code> | <span className="api-desc">The stat's minimum: the player's own, or the definition's default minimum.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The stat definition's name.</span> |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | <span className="api-desc">The player's current value. Left at 0 when made from a definition rather than a player's stat.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo">{"PlayerCommandModule.StatDefinitionInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{" stat)"}</code> | <span className="api-desc">Makes one from a player's `Stat` (with its value) or from a `StatDefinitionApplication` (default limits only).</span> |
| <Link id="m-op-implicit-2" /><code>{"static "}<Link to="/mod/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo">{"PlayerCommandModule.StatDefinitionInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Makes one from a player's `Stat` (with its value) or from a `StatDefinitionApplication` (default limits only).</span> |

## Used in

Members of other types that take, return or hold a `StatDefinitionInfo`:

<div className="api-used-in">

[`PlayerCommandModule.ListStats`](/mod/tavernlib-api/types/moduleports/playercommandmodule#m-liststats).

</div>

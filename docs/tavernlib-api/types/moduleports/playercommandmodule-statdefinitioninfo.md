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

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule`](/tavernlib-api/types/moduleports/playercommandmodule)
- **Documented in** [PlayerCommandModule.StatDefinitionInfo](/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatDefinitionInfo()"}</code> | Makes an empty stat info; the stat conversions fill it. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"float Max { get; set; }"}</code> | The stat's maximum: the player's own, or the definition's default maximum. |
| <Link id="m-min" /><code>{"float Min { get; set; }"}</code> | The stat's minimum: the player's own, or the definition's default minimum. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The stat definition's name. |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | The player's current value. Left at 0 when made from a definition rather than a player's stat. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo">{"PlayerCommandModule.StatDefinitionInfo"}</Link>{" op_Implicit("}<Link to="/game-api/types/alta-stats-effects/statdefinitionapplication">{"StatDefinitionApplication"}</Link>{" stat)"}</code> | Makes one from a player's `Stat` (with its value) or from a `StatDefinitionApplication` (default limits only). |
| <Link id="m-op-implicit-2" /><code>{"static "}<Link to="/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo">{"PlayerCommandModule.StatDefinitionInfo"}</Link>{" op_Implicit("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Makes one from a player's `Stat` (with its value) or from a `StatDefinitionApplication` (default limits only). |

## Used in

Members of other types that take, return or hold a `StatDefinitionInfo`:

[`PlayerCommandModule.ListStats`](/tavernlib-api/types/moduleports/playercommandmodule#m-liststats).

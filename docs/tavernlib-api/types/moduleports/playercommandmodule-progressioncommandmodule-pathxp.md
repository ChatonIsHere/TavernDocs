---
title: "PlayerCommandModule.ProgressionCommandModule.PathXp"
description: "One row of player progression checkallxp: a player's level and experience on one path."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommandModule.ProgressionCommandModule.PathXp

A **class** in `TavernLib`, `TavernLib.ModulePorts`.

One row of `player progression checkallxp`: a player's level and experience on one path. Has JSON names for TavernKeeper and a text form.

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule.ProgressionCommandModule`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule)
- **Documented in** [PlayerCommandModule.ProgressionCommandModule.PathXp](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-pathxp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathXp()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-experience" /><code>{"uint Experience { get; set; }"}</code> | Experience on the path (JSON `xp`). 0 if the player has none there. |
| <Link id="m-level" /><code>{"uint Level { get; set; }"}</code> | The player's current level on the path. |
| <Link id="m-nextlevelat" /><code>{"uint NextLevelAt { get; set; }"}</code> | The experience the next level needs, from the game's `ProgressionSettings` (JSON `next_level_at`). |
| <Link id="m-path" /><code>{"string Path { get; set; }"}</code> | The progression path's name. |
| <Link id="m-player" /><code>{"string Player { get; set; }"}</code> | The player's username. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The row as one line of text for a text console. |

## Used in

Members of other types that take, return or hold a `PathXp`:

[`PlayerCommandModule.ProgressionCommandModule.CheckAllXP`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule#m-checkallxp).

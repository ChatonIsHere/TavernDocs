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

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule.ProgressionCommandModule`](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathXp()"}</code> | <span className="api-desc">Makes an empty row for `checkallxp`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-experience" /><code>{"uint Experience { get; set; }"}</code> | <span className="api-desc">Experience on the path (JSON `xp`). 0 if the player has none there.</span> |
| <Link id="m-level" /><code>{"uint Level { get; set; }"}</code> | <span className="api-desc">The player's current level on the path.</span> |
| <Link id="m-nextlevelat" /><code>{"uint NextLevelAt { get; set; }"}</code> | <span className="api-desc">The experience the next level needs, from the game's `ProgressionSettings` (JSON `next_level_at`).</span> |
| <Link id="m-path" /><code>{"string Path { get; set; }"}</code> | <span className="api-desc">The progression path's name.</span> |
| <Link id="m-player" /><code>{"string Player { get; set; }"}</code> | <span className="api-desc">The player's username.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The row as one line of text for a text console.</span> |

## Used in

Members of other types that take, return or hold a `PathXp`:

<div className="api-used-in">

[`PlayerCommandModule.ProgressionCommandModule.CheckAllXP`](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule#m-checkallxp).

</div>

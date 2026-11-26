---
title: "PlayerCommandModule.ProgressionCommandModule.SkillRow"
description: "One row of player progression showskills: a skill the player can buy now, numbered for buyskill."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommandModule.ProgressionCommandModule.SkillRow

A **class** in `TavernLib`, `TavernLib.ModulePorts`.

One row of `player progression showskills`: a skill the player can buy now, numbered for `buyskill`.

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule.ProgressionCommandModule`](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule)
- **Documented in** [PlayerCommandModule.ProgressionCommandModule.SkillRow](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-skillrow)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillRow()"}</code> | Makes an empty row for `showskills`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> | The number to pass to `buyskill`. Only valid until the next `showskills`. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The skill slot's name. |
| <Link id="m-path" /><code>{"string Path { get; set; }"}</code> | The progression path the skill is on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The row as one line of text. |

## Used in

Members of other types that take, return or hold a `SkillRow`:

[`PlayerCommandModule.ProgressionCommandModule.ShowAvailableSkills`](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule#m-showavailableskills).

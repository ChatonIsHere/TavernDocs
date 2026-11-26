---
title: "TimedActionComponent"
description: "Base for a creature action component that runs for a set duration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedActionComponent

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for a creature action component that runs for a set duration.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`AgentCircleRepositionSettings`](/mod/game-api/types/alta-intelligence/agentcirclerepositionsettings), [`WyrmCatchSettings`](/mod/game-api/types/alta-intelligence/wyrmcatchsettings), [`WyrmDigSettings`](/mod/game-api/types/alta-intelligence/wyrmdigsettings), [`WyrmDodgeSettings`](/mod/game-api/types/alta-intelligence/wyrmdodgesettings), [`WyrmEmergeSettings`](/mod/game-api/types/alta-intelligence/wyrmemergesettings), [`WyrmMeleeSettings`](/mod/game-api/types/alta-intelligence/wyrmmeleesettings), [`WyrmSpitSettings`](/mod/game-api/types/alta-intelligence/wyrmspitsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TimedActionComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Backing field for `Duration` (default 5 seconds). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | How long the action runs, in seconds probably. 5 by default. |

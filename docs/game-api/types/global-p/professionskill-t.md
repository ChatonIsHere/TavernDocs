---
title: "ProfessionSkill<T>"
description: "The ability itself. virtual void Unlock(PlayerProgressionManager) and Lock(...) run when a player gains or loses it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionSkill&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

The ability itself. `virtual void Unlock(PlayerProgressionManager)` and `Lock(...)` run when a player gains or loses it.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ProfessionSkill`](/game-api/types/global-p/professionskill)
- **Derived types** [`BlockingCharge`](/game-api/types/global-a-b/blockingcharge), [`Garnisher`](/game-api/types/global-e-h/garnisher), [`SureHands`](/game-api/types/global-s/surehands)
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProfessionSkill()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static T Instance { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playerlevel" /><code>{"static int PlayerLevel("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> |  |
| <Link id="m-playerlevel-2" /><code>{"static int PlayerLevel("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> |  |
| <Link id="m-playerunlocked" /><code>{"static bool PlayerUnlocked("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> |  |
| <Link id="m-playerunlocked-2" /><code>{"static bool PlayerUnlocked("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> |  |
| <Link id="m-unlock" /><code>{"override void Unlock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> |  |

---
title: "ProfessionSkill<T>"
description: "Base for a skill that is a single asset, giving static access to it through Instance and quick checks of whether a player has it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionSkill&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

Base for a skill that is a single asset, giving static access to it through `Instance` and quick checks of whether a player has it.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ProfessionSkill`](/game-api/types/global-p/professionskill)
- **Derived types** [`BlockingCharge`](/game-api/types/global-a-b/blockingcharge), [`Garnisher`](/game-api/types/global-e-h/garnisher), [`SureHands`](/game-api/types/global-s/surehands)
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProfessionSkill()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static T Instance { get; private set; }"}</code> | The skill asset, set the first time any player unlocks it. Null before then, so the checks return false or 0. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playerlevel" /><code>{"static int PlayerLevel("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> | The player's level in this skill, or 0 if `Instance` isn't set yet. |
| <Link id="m-playerlevel-2" /><code>{"static int PlayerLevel("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> | The player's level in this skill, or 0 if `Instance` isn't set yet. |
| <Link id="m-playerunlocked" /><code>{"static bool PlayerUnlocked("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> | Whether the player has this skill unlocked. False if `Instance` isn't set yet. |
| <Link id="m-playerunlocked-2" /><code>{"static bool PlayerUnlocked("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> | Whether the player has this skill unlocked. False if `Instance` isn't set yet. |
| <Link id="m-unlock" /><code>{"override void Unlock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> | Stores this asset as `Instance` and runs the base unlock. |

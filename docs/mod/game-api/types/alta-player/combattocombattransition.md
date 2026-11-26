---
title: "CombatToCombatTransition"
description: "Combat to Combat transition: a new hit while in combat keeps the player in the same combat state, and the caller then resets its timer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatToCombatTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Combat to Combat transition: a new hit while in combat keeps the player in the same combat state, and the caller then resets its timer.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ToCombatTransition<CombatState>`](/mod/game-api/types/alta-player/tocombattransition-tfrom)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatToCombatTransition()"}</code> | <span className="api-desc">Creates a `CombatToCombatTransition` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-transitiontodestinationstate" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" TransitionToDestinationState()"}</code> | <span className="api-desc">Does not change state; returns the current combat state.</span> |

## Used in

Members of other types that take, return or hold a `CombatToCombatTransition`:

<div className="api-used-in">

[`AllTransitions.combatToCombat`](/mod/game-api/types/alta-player/alltransitions#m-combattocombat), [`AllTransitions.CombatToCombatTransition`](/mod/game-api/types/alta-player/alltransitions#m-combattocombattransition).

</div>

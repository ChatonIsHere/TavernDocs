---
title: "PlayingToCombatTransition"
description: "Moves a player from Playing to Combat when they take a tool hit within range or cause combat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingToCombatTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Moves a player from Playing to Combat when they take a tool hit within range or cause combat. All logic is in `ToCombatTransition`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ToCombatTransition<PlayingState>`](/mod/game-api/types/alta-player/tocombattransition-tfrom)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingToCombatTransition()"}</code> | <span className="api-desc">Creates a `PlayingToCombatTransition` with default values.</span> |

## Used in

Members of other types that take, return or hold a `PlayingToCombatTransition`:

<div className="api-used-in">

[`AllTransitions.playingToCombat`](/mod/game-api/types/alta-player/alltransitions#m-playingtocombat), [`AllTransitions.PlayingToCombatTransition`](/mod/game-api/types/alta-player/alltransitions#m-playingtocombattransition).

</div>

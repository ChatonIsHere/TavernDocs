---
title: "DeadToPlayingTransition"
description: "Moves a player from Dead to Playing (respawn)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeadToPlayingTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Moves a player from Dead to Playing (respawn). `DeadState` triggers it.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<DeadState, PlayingState>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeadToPlayingTransition()"}</code> | <span className="api-desc">Creates a `DeadToPlayingTransition` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected override void DestinationPreActivationCallback("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" toBeActivatedState)"}</code> | <span className="api-desc">Marks the new Playing state as respawning before it activates.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Does nothing.</span> |

## Used in

Members of other types that take, return or hold a `DeadToPlayingTransition`:

<div className="api-used-in">

[`AllTransitions.deadToPlaying`](/mod/game-api/types/alta-player/alltransitions#m-deadtoplaying), [`AllTransitions.DeadToPlayingTransition`](/mod/game-api/types/alta-player/alltransitions#m-deadtoplayingtransition).

</div>

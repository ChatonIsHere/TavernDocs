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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<DeadState, PlayingState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DeadToPlayingTransition()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Does nothing. |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected override void DestinationPreActivationCallback("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" toBeActivatedState)"}</code> | Marks the new Playing state as respawning before it activates. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Does nothing. |

## Used in

Members of other types that take, return or hold a `DeadToPlayingTransition`:

[`AllTransitions.deadToPlaying`](/game-api/types/alta-player/alltransitions#m-deadtoplaying), [`AllTransitions.DeadToPlayingTransition`](/game-api/types/alta-player/alltransitions#m-deadtoplayingtransition).

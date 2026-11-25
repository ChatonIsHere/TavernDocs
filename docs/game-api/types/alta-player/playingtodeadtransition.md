---
title: "PlayingToDeadTransition"
description: "class PlayingToDeadTransition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingToDeadTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<PlayingState, DeadState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingToDeadTransition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code>{"private "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingImpact"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> |  |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected override void DestinationPreActivationCallback("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" activatedState)"}</code> |  |
| <Link id="m-handledeath" /><code>{"private void HandleDeath("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> |  |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayingToDeadTransition`:

[`AllTransitions.playingToDead`](/game-api/types/alta-player/alltransitions#m-playingtodead), [`AllTransitions.PlayingToDeadTransition`](/game-api/types/alta-player/alltransitions#m-playingtodeadtransition).

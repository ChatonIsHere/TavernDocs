---
title: "PlayingToDownedTransition"
description: "class PlayingToDownedTransition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingToDownedTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<PlayingState, DownedState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingToDownedTransition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code>{"private "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingImpact"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> |  |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected override void DestinationPreActivationCallback("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" activatedState)"}</code> |  |
| <Link id="m-handleplayerdowned" /><code>{"private void HandlePlayerDowned("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> |  |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayingToDownedTransition`:

[`AllTransitions.playingToDowned`](/game-api/types/alta-player/alltransitions#m-playingtodowned), [`AllTransitions.PlayingToDownedTransition`](/game-api/types/alta-player/alltransitions#m-playingtodownedtransition).

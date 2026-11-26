---
title: "FirstJoinToPlayingTransition"
description: "Moves a player from FirstJoin straight to Playing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FirstJoinToPlayingTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Moves a player from FirstJoin straight to Playing. `FirstJoinState` triggers it when customization is skipped.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<FirstJoinState, PlayingState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FirstJoinToPlayingTransition()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Does nothing. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Does nothing. |

## Used in

Members of other types that take, return or hold a `FirstJoinToPlayingTransition`:

[`AllTransitions.firstJoinToPlaying`](/game-api/types/alta-player/alltransitions#m-firstjointoplaying), [`AllTransitions.FirstJoinToPlayingTransition`](/game-api/types/alta-player/alltransitions#m-firstjointoplayingtransition).

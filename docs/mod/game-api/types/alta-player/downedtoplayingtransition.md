---
title: "DownedToPlayingTransition"
description: "Moves a downed player back to Playing when revived."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownedToPlayingTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Moves a downed player back to Playing when revived. `DownedState` calls `HandleRevive`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<DownedState, PlayingState>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DownedToPlayingTransition()"}</code> | Creates a `DownedToPlayingTransition` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlerevive" /><code>{"void HandleRevive()"}</code> | Switches the player back to Playing. |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Only logs; there is nothing to listen to. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Only logs. |

## Used in

Members of other types that take, return or hold a `DownedToPlayingTransition`:

[`AllTransitions.downedToPlaying`](/mod/game-api/types/alta-player/alltransitions#m-downedtoplaying), [`AllTransitions.DownedToPlayingTransition`](/mod/game-api/types/alta-player/alltransitions#m-downedtoplayingtransition).

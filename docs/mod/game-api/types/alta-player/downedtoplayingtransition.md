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
| <Link id="m-ctor" /><code>{"DownedToPlayingTransition()"}</code> | <span className="api-desc">Creates a `DownedToPlayingTransition` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlerevive" /><code>{"void HandleRevive()"}</code> | <span className="api-desc">Switches the player back to Playing.</span> |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Only logs; there is nothing to listen to.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Only logs.</span> |

## Used in

Members of other types that take, return or hold a `DownedToPlayingTransition`:

<div className="api-used-in">

[`AllTransitions.downedToPlaying`](/mod/game-api/types/alta-player/alltransitions#m-downedtoplaying), [`AllTransitions.DownedToPlayingTransition`](/mod/game-api/types/alta-player/alltransitions#m-downedtoplayingtransition).

</div>

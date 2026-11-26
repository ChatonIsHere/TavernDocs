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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<FirstJoinState, PlayingState>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FirstJoinToPlayingTransition()"}</code> | <span className="api-desc">Creates a `FirstJoinToPlayingTransition` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Does nothing.</span> |

## Used in

Members of other types that take, return or hold a `FirstJoinToPlayingTransition`:

<div className="api-used-in">

[`AllTransitions.firstJoinToPlaying`](/mod/game-api/types/alta-player/alltransitions#m-firstjointoplaying), [`AllTransitions.FirstJoinToPlayingTransition`](/mod/game-api/types/alta-player/alltransitions#m-firstjointoplayingtransition).

</div>

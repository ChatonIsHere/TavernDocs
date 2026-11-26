---
title: "PlayingToSpiritTransition"
description: "Moves a player from Playing to Spirit when their unlock manager gains a current unlock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingToSpiritTransition

A **class** in `Root.Township`, `Alta.PlayerStates`.

Moves a player from Playing to Spirit when their unlock manager gains a current unlock.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<PlayingState, SpiritState>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingToSpiritTransition()"}</code> | <span className="api-desc">Creates a `PlayingToSpiritTransition` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Listens for unlock manager changes.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Meant to stop listening, but it subscribes `Check` again instead of removing it.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private void Check()"}</code> | <span className="api-desc">Switches to Spirit if there is a current unlock and the player is not already a spirit.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayingToSpiritTransition`:

<div className="api-used-in">

[`AllTransitions.playingToSpirit`](/mod/game-api/types/alta-player/alltransitions#m-playingtospirit), [`AllTransitions.PlayingToSpiritTransition`](/mod/game-api/types/alta-player/alltransitions#m-playingtospirittransition).

</div>

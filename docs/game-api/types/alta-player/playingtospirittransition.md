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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<PlayingState, SpiritState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingToSpiritTransition()"}</code> | Creates a `PlayingToSpiritTransition` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Listens for unlock manager changes. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Meant to stop listening, but it subscribes `Check` again instead of removing it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private void Check()"}</code> | Switches to Spirit if there is a current unlock and the player is not already a spirit. |

</details>

## Used in

Members of other types that take, return or hold a `PlayingToSpiritTransition`:

[`AllTransitions.playingToSpirit`](/game-api/types/alta-player/alltransitions#m-playingtospirit), [`AllTransitions.PlayingToSpiritTransition`](/game-api/types/alta-player/alltransitions#m-playingtospirittransition).

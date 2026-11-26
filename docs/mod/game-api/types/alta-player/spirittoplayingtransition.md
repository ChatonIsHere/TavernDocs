---
title: "SpiritToPlayingTransition"
description: "Moves a player from Spirit back to Playing once their unlock manager has no current unlock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritToPlayingTransition

A **class** in `Root.Township`, `Alta.PlayerStates`.

Moves a player from Spirit back to Playing once their unlock manager has no current unlock.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<SpiritState, PlayingState>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpiritToPlayingTransition()"}</code> | <span className="api-desc">Creates a `SpiritToPlayingTransition` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Listens for unlock manager changes.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Meant to stop listening, but it subscribes `Check` again instead of removing it.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private void Check()"}</code> | <span className="api-desc">Switches to Playing when there is no current unlock.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SpiritToPlayingTransition`:

<div className="api-used-in">

[`AllTransitions.spiritToPlaying`](/mod/game-api/types/alta-player/alltransitions#m-spirittoplaying), [`AllTransitions.SpiritToPlayingTransition`](/mod/game-api/types/alta-player/alltransitions#m-spirittoplayingtransition).

</div>

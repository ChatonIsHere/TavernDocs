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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<SpiritState, PlayingState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpiritToPlayingTransition()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Listens for unlock manager changes. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Meant to stop listening, but it subscribes `Check` again instead of removing it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private void Check()"}</code> | Switches to Playing when there is no current unlock. |

</details>

## Used in

Members of other types that take, return or hold a `SpiritToPlayingTransition`:

[`AllTransitions.spiritToPlaying`](/game-api/types/alta-player/alltransitions#m-spirittoplaying), [`AllTransitions.SpiritToPlayingTransition`](/game-api/types/alta-player/alltransitions#m-spirittoplayingtransition).

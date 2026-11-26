---
title: "PlayingToDeadTransition"
description: "Playing to Dead transition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingToDeadTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Playing to Dead transition. Its listeners are empty and nothing adds it, so in this build death goes through Downed instead.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<PlayingState, DeadState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayingToDeadTransition()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code>{"private "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingImpact"}</code> | The damage that killed the player. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Does nothing. |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected override void DestinationPreActivationCallback("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" activatedState)"}</code> | Hands the killing damage to the new Dead state. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Does nothing. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handledeath" /><code>{"private void HandleDeath("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | Stores the killing damage and switches to Dead. Not hooked to anything. |

</details>

## Used in

Members of other types that take, return or hold a `PlayingToDeadTransition`:

[`AllTransitions.playingToDead`](/game-api/types/alta-player/alltransitions#m-playingtodead), [`AllTransitions.PlayingToDeadTransition`](/game-api/types/alta-player/alltransitions#m-playingtodeadtransition).

---
title: "DownedToDeadTransition"
description: "Moves a downed player to Dead when they are killed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownedToDeadTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Moves a downed player to Dead when they are killed.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<DownedState, DeadState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DownedToDeadTransition()"}</code> |

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
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Subscribes to the player's `Killed` event (and logs it). |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected override void DestinationPreActivationCallback("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" activatedState)"}</code> | Hands the killing damage to the new Dead state. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Unsubscribes from `Killed`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handledeath" /><code>{"private void HandleDeath("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | Stores the killing damage and switches to Dead. |

</details>

## Used in

Members of other types that take, return or hold a `DownedToDeadTransition`:

[`AllTransitions.downedToDead`](/game-api/types/alta-player/alltransitions#m-downedtodead), [`AllTransitions.DownedToDeadTransition`](/game-api/types/alta-player/alltransitions#m-downedtodeadtransition).

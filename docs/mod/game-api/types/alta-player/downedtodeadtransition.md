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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<DownedState, DeadState>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DownedToDeadTransition()"}</code> | <span className="api-desc">Creates a `DownedToDeadTransition` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingImpact"}</code> | <span className="api-desc">The damage that killed the player.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Subscribes to the player's `Killed` event (and logs it).</span> |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected override void DestinationPreActivationCallback("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" activatedState)"}</code> | <span className="api-desc">Hands the killing damage to the new Dead state.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Unsubscribes from `Killed`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handledeath" /><code>{"private void HandleDeath("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | <span className="api-desc">Stores the killing damage and switches to Dead.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DownedToDeadTransition`:

<div className="api-used-in">

[`AllTransitions.downedToDead`](/mod/game-api/types/alta-player/alltransitions#m-downedtodead), [`AllTransitions.DownedToDeadTransition`](/mod/game-api/types/alta-player/alltransitions#m-downedtodeadtransition).

</div>

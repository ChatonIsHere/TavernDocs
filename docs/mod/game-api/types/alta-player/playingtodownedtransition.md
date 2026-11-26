---
title: "PlayingToDownedTransition"
description: "Moves a playing player to Downed when their Downed event fires."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingToDownedTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Moves a playing player to Downed when their `Downed` event fires.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<PlayingState, DownedState>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingToDownedTransition()"}</code> | <span className="api-desc">Creates a `PlayingToDownedTransition` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingImpact"}</code> | <span className="api-desc">The damage that downed the player.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Subscribes to the player's `Downed` event (and logs it).</span> |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected override void DestinationPreActivationCallback("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" activatedState)"}</code> | <span className="api-desc">Hands the damage that downed the player to the new Downed state.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Unsubscribes from `Downed`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleplayerdowned" /><code>{"private void HandlePlayerDowned("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | <span className="api-desc">Stores the damage and switches to Downed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayingToDownedTransition`:

<div className="api-used-in">

[`AllTransitions.playingToDowned`](/mod/game-api/types/alta-player/alltransitions#m-playingtodowned), [`AllTransitions.PlayingToDownedTransition`](/mod/game-api/types/alta-player/alltransitions#m-playingtodownedtransition).

</div>

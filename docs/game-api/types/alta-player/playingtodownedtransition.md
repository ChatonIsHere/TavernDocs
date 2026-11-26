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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<PlayingState, DownedState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayingToDownedTransition()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code>{"private "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingImpact"}</code> | The damage that downed the player. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Subscribes to the player's `Downed` event (and logs it). |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected override void DestinationPreActivationCallback("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" activatedState)"}</code> | Hands the damage that downed the player to the new Downed state. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Unsubscribes from `Downed`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleplayerdowned" /><code>{"private void HandlePlayerDowned("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | Stores the damage and switches to Downed. |

</details>

## Used in

Members of other types that take, return or hold a `PlayingToDownedTransition`:

[`AllTransitions.playingToDowned`](/game-api/types/alta-player/alltransitions#m-playingtodowned), [`AllTransitions.PlayingToDownedTransition`](/game-api/types/alta-player/alltransitions#m-playingtodownedtransition).

---
title: "PlayingToCustomizationTransition"
description: "Sends a playing player back to the customization room."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingToCustomizationTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Sends a playing player back to the customization room. Fired from outside with `ExternalTrigger`, for example by `FromPlayingToCustomization`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<PlayingState, CustomizationState>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingToCustomizationTransition()"}</code> | Creates a `PlayingToCustomizationTransition` with default values. |

## Events

<details>
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"private static event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> trigger"}</code> | Static event every active instance listens on; `ExternalTrigger` raises it. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-externaltrigger" /><code>{"static void ExternalTrigger("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Static: runs the transition for the given player. |
| <Link id="m-triggertransition" /><code>{"void TriggerTransition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Runs the transition if the given player is this transition's player. |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Subscribes to the static trigger event. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Unsubscribes from the trigger event. |
| <Link id="m-transitiontodestinationstate" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" TransitionToDestinationState()"}</code> | Server: saves the player, sets their respawn spot to a finish-recustomization spawn and destroys their body, then switches state. |

## Used in

Members of other types that take, return or hold a `PlayingToCustomizationTransition`:

[`AllTransitions.playingToCustomization`](/mod/game-api/types/alta-player/alltransitions#m-playingtocustomization), [`AllTransitions.PlayingToCustomizationTransition`](/mod/game-api/types/alta-player/alltransitions#m-playingtocustomizationtransition).

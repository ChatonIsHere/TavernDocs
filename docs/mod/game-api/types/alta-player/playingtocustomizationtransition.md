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
| <Link id="m-ctor" /><code>{"PlayingToCustomizationTransition()"}</code> | <span className="api-desc">Creates a `PlayingToCustomizationTransition` with default values.</span> |

## Events

<details className="api-private">
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"private static event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> trigger"}</code> | <span className="api-desc">Static event every active instance listens on; `ExternalTrigger` raises it.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-externaltrigger" /><code>{"static void ExternalTrigger("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Static: runs the transition for the given player.</span> |
| <Link id="m-triggertransition" /><code>{"void TriggerTransition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Runs the transition if the given player is this transition's player.</span> |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Subscribes to the static trigger event.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Unsubscribes from the trigger event.</span> |
| <Link id="m-transitiontodestinationstate" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" TransitionToDestinationState()"}</code> | <span className="api-desc">Server: saves the player, sets their respawn spot to a finish-recustomization spawn and destroys their body, then switches state.</span> |

## Used in

Members of other types that take, return or hold a `PlayingToCustomizationTransition`:

<div className="api-used-in">

[`AllTransitions.playingToCustomization`](/mod/game-api/types/alta-player/alltransitions#m-playingtocustomization), [`AllTransitions.PlayingToCustomizationTransition`](/mod/game-api/types/alta-player/alltransitions#m-playingtocustomizationtransition).

</div>

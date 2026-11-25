---
title: "PlayingToCustomizationTransition"
description: "class PlayingToCustomizationTransition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingToCustomizationTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<PlayingState, CustomizationState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayingToCustomizationTransition()"}</code> |

## Events

<details>
<summary>1 private and internal event</summary>

| Member |
| --- |
| <Link id="m-trigger" /><code>{"private static event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> trigger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-externaltrigger" /><code>{"static void ExternalTrigger("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-triggertransition" /><code>{"void TriggerTransition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> |
| <Link id="m-transitiontodestinationstate" /><code>{"protected override "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" TransitionToDestinationState()"}</code> |

## Used in

Members of other types that take, return or hold a `PlayingToCustomizationTransition`:

[`AllTransitions.playingToCustomization`](/game-api/types/alta-player/alltransitions#m-playingtocustomization), [`AllTransitions.PlayingToCustomizationTransition`](/game-api/types/alta-player/alltransitions#m-playingtocustomizationtransition).

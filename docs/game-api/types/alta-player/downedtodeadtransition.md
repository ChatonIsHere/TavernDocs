---
title: "DownedToDeadTransition"
description: "class DownedToDeadTransition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownedToDeadTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<DownedState, DeadState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DownedToDeadTransition()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-killingimpact" /><code>{"private "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingImpact"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected override void DestinationPreActivationCallback("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" activatedState)"}</code> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-handledeath" /><code>{"private void HandleDeath("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `DownedToDeadTransition`:

[`AllTransitions.downedToDead`](/game-api/types/alta-player/alltransitions#m-downedtodead), [`AllTransitions.DownedToDeadTransition`](/game-api/types/alta-player/alltransitions#m-downedtodeadtransition).

---
title: "CustomizationToPlayingTransition"
description: "Moves a player from Customization to Playing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationToPlayingTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Moves a player from Customization to Playing. Has no listeners; `CustomizationState` triggers it when customization finishes.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<CustomizationState, PlayingState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationToPlayingTransition()"}</code> | Creates a `CustomizationToPlayingTransition` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Does nothing. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Does nothing. |

## Used in

Members of other types that take, return or hold a `CustomizationToPlayingTransition`:

[`AllTransitions.customizationToPlaying`](/game-api/types/alta-player/alltransitions#m-customizationtoplaying), [`AllTransitions.CustomizationToPlayingTransition`](/game-api/types/alta-player/alltransitions#m-customizationtoplayingtransition).

---
title: "FirstJoinToCustomizationTransition"
description: "Moves a new player from FirstJoin to Customization."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FirstJoinToCustomizationTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Moves a new player from FirstJoin to Customization. `FirstJoinState` triggers it when customization is enabled and not skipped for a normal player.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<FirstJoinState, CustomizationState>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FirstJoinToCustomizationTransition()"}</code> | Creates a `FirstJoinToCustomizationTransition` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Does nothing. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Does nothing. |

## Used in

Members of other types that take, return or hold a `FirstJoinToCustomizationTransition`:

[`AllTransitions.firstJoinToCustomization`](/game-api/types/alta-player/alltransitions#m-firstjointocustomization), [`AllTransitions.FirstJoinToCustomizationTransition`](/game-api/types/alta-player/alltransitions#m-firstjointocustomizationtransition).

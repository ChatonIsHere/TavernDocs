---
title: "PlayingToEquipmentTransition"
description: "Moves a player from Playing to equipment mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingToEquipmentTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Moves a player from Playing to equipment mode. Fired through the static `Trigger` by the equipment quick access action.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`EquipmentTransition<PlayingState, EquipmentState>`](/game-api/types/alta-player/equipmenttransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingToEquipmentTransition()"}</code> | Creates a `PlayingToEquipmentTransition` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"static void Trigger()"}</code> | Static: runs the transition for whichever equipment transition is currently active. |

## Used in

Members of other types that take, return or hold a `PlayingToEquipmentTransition`:

[`AllTransitions.playingToEquipment`](/game-api/types/alta-player/alltransitions#m-playingtoequipment), [`AllTransitions.PlayingToEquipmentTransition`](/game-api/types/alta-player/alltransitions#m-playingtoequipmenttransition).

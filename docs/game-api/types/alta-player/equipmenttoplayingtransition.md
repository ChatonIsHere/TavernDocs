---
title: "EquipmentToPlayingTransition"
description: "Leaves equipment mode back to Playing, either through the quick access menu or when the local player walks out of the customization room."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentToPlayingTransition

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Leaves equipment mode back to Playing, either through the quick access menu or when the local player walks out of the customization room.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`EquipmentTransition<EquipmentState, PlayingState>`](/game-api/types/alta-player/equipmenttransition-tfrom-tto)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EquipmentToPlayingTransition()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"static void Trigger()"}</code> | Static: runs the transition for whichever equipment transition is currently active. Called by the equipment quick access action. |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Sets up the static trigger, and for the local player listens for leaving the customization room boundary. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Clears the trigger and stops listening to the room boundary. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerleftboundary" /><code>{"private void PlayerLeftBoundary()"}</code> | Switches back to Playing when the player leaves the room boundary. |

</details>

## Used in

Members of other types that take, return or hold a `EquipmentToPlayingTransition`:

[`AllTransitions.equipmentToPlaying`](/game-api/types/alta-player/alltransitions#m-equipmenttoplaying), [`AllTransitions.EquipmentToPlayingTransition`](/game-api/types/alta-player/alltransitions#m-equipmenttoplayingtransition).

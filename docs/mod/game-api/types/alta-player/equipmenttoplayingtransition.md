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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`EquipmentTransition<EquipmentState, PlayingState>`](/mod/game-api/types/alta-player/equipmenttransition-tfrom-tto)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentToPlayingTransition()"}</code> | <span className="api-desc">Creates an `EquipmentToPlayingTransition` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"static void Trigger()"}</code> | <span className="api-desc">Static: runs the transition for whichever equipment transition is currently active. Called by the equipment quick access action.</span> |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Sets up the static trigger, and for the local player listens for leaving the customization room boundary.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Clears the trigger and stops listening to the room boundary.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerleftboundary" /><code>{"private void PlayerLeftBoundary()"}</code> | <span className="api-desc">Switches back to Playing when the player leaves the room boundary.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EquipmentToPlayingTransition`:

<div className="api-used-in">

[`AllTransitions.equipmentToPlaying`](/mod/game-api/types/alta-player/alltransitions#m-equipmenttoplaying), [`AllTransitions.EquipmentToPlayingTransition`](/mod/game-api/types/alta-player/alltransitions#m-equipmenttoplayingtransition).

</div>

---
title: "EquipmentTransition<TFrom, TTo>"
description: "Base for transitions into and out of the equipment state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentTransition&lt;TFrom, TTo&gt;

An **abstract class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Base for transitions into and out of the equipment state. They fire when something calls the subclass's static `Trigger`, not from a player event.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<TFrom, TTo>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)
- **Derived types** [`EquipmentToPlayingTransition`](/mod/game-api/types/alta-player/equipmenttoplayingtransition), [`PlayingToEquipmentTransition`](/mod/game-api/types/alta-player/playingtoequipmenttransition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentTransition("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType)"}</code> | <span className="api-desc">Creates an `EquipmentTransition` from `destinationType`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"protected static Action trigger"}</code> | <span className="api-desc">Static callback that `Trigger` calls. Shared by every instance of the same closed type, so only the last one turned on gets it.</span> |

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-equipmentsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/equipmentstatesettings">{"EquipmentStateSettings"}</Link>{" EquipmentSettings { get; }"}</code> | <span className="api-desc">The `EquipmentStateSettings` asset. Not read in this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Points the static `trigger` at this transition. Logs an error instead if the player is missing.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Clears the static `trigger`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-triggered" /><code>{"private void Triggered()"}</code> | <span className="api-desc">Runs the transition to the destination state.</span> |

</details>

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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<TFrom, TTo>`](/game-api/types/alta-player/statetransition-tfrom-tto)
- **Derived types** [`EquipmentToPlayingTransition`](/game-api/types/alta-player/equipmenttoplayingtransition), [`PlayingToEquipmentTransition`](/game-api/types/alta-player/playingtoequipmenttransition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentTransition("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType)"}</code> | Creates an `EquipmentTransition` from `destinationType`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"protected static Action trigger"}</code> | Static callback that `Trigger` calls. Shared by every instance of the same closed type, so only the last one turned on gets it. |

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-equipmentsettings" /><code>{"private "}<Link to="/game-api/types/alta-player/equipmentstatesettings">{"EquipmentStateSettings"}</Link>{" EquipmentSettings { get; }"}</code> | The `EquipmentStateSettings` asset. Not read in this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Points the static `trigger` at this transition. Logs an error instead if the player is missing. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Clears the static `trigger`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-triggered" /><code>{"private void Triggered()"}</code> | Runs the transition to the destination state. |

</details>

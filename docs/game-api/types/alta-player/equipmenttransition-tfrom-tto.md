---
title: "EquipmentTransition<TFrom, TTo>"
description: "abstract class EquipmentTransition<TFrom, TTo> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentTransition&lt;TFrom, TTo&gt;

An **abstract class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<TFrom, TTo>`](/game-api/types/alta-player/statetransition-tfrom-tto)
- **Derived types** [`EquipmentToPlayingTransition`](/game-api/types/alta-player/equipmenttoplayingtransition), [`PlayingToEquipmentTransition`](/game-api/types/alta-player/playingtoequipmenttransition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EquipmentTransition("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-trigger" /><code>{"protected static Action trigger"}</code> |

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-equipmentsettings" /><code>{"private "}<Link to="/game-api/types/alta-player/equipmentstatesettings">{"EquipmentStateSettings"}</Link>{" EquipmentSettings { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-triggered" /><code>{"private void Triggered()"}</code> |

</details>

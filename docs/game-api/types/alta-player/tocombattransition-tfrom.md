---
title: "ToCombatTransition<TFrom>"
description: "Transition into the combat state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToCombatTransition&lt;TFrom&gt;

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Transition into the combat state. Fires when the player is hurt by a tool within combat range, or when the player causes combat.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<TFrom, CombatState>`](/game-api/types/alta-player/statetransition-tfrom-tto)
- **Derived types** [`CombatToCombatTransition`](/game-api/types/alta-player/combattocombattransition), [`PlayingToCombatTransition`](/game-api/types/alta-player/playingtocombattransition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ToCombatTransition()"}</code> |

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-combatsettings" /><code>{"private "}<Link to="/game-api/types/alta-player/combatstatesettings">{"CombatStateSettings"}</Link>{" CombatSettings { get; }"}</code> | The `CombatStateSettings` asset, used for the max combat distance. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | Hooks the player's health changes and caused-combat events. |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | Unhooks the health and caused-combat events. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkentercombat" /><code>{"private void CheckEnterCombat("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float healthChange, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | On tool damage while still alive, enters combat if the attacker is in range, resets the combat timer and tells the attacker it caused combat. Ignores self-hits. |
| <Link id="m-handlecausedcombat" /><code>{"private void HandleCausedCombat("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" attacker, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceBetweenCombatantsSquared, float damage)"}</code> | Enters combat when this player attacks someone, resetting the combat timer by distance. |

</details>

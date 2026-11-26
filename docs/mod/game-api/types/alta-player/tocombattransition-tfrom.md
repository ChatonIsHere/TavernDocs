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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<TFrom, CombatState>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)
- **Derived types** [`CombatToCombatTransition`](/mod/game-api/types/alta-player/combattocombattransition), [`PlayingToCombatTransition`](/mod/game-api/types/alta-player/playingtocombattransition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToCombatTransition()"}</code> | <span className="api-desc">Creates a `ToCombatTransition` with default values.</span> |

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-combatsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/combatstatesettings">{"CombatStateSettings"}</Link>{" CombatSettings { get; }"}</code> | <span className="api-desc">The `CombatStateSettings` asset, used for the max combat distance.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> | <span className="api-desc">Hooks the player's health changes and caused-combat events.</span> |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> | <span className="api-desc">Unhooks the health and caused-combat events.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkentercombat" /><code>{"private void CheckEnterCombat("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float healthChange, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | <span className="api-desc">On tool damage while still alive, enters combat if the attacker is in range, resets the combat timer and tells the attacker it caused combat. Ignores self-hits.</span> |
| <Link id="m-handlecausedcombat" /><code>{"private void HandleCausedCombat("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" attacker, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceBetweenCombatantsSquared, float damage)"}</code> | <span className="api-desc">Enters combat when this player attacks someone, resetting the combat timer by distance.</span> |

</details>

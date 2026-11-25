---
title: "ToCombatTransition<TFrom>"
description: "class ToCombatTransition<TFrom> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToCombatTransition&lt;TFrom&gt;

A **class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransition<TFrom, CombatState>`](/game-api/types/alta-player/statetransition-tfrom-tto)
- **Derived types** [`CombatToCombatTransition`](/game-api/types/alta-player/combattocombattransition), [`PlayingToCombatTransition`](/game-api/types/alta-player/playingtocombattransition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToCombatTransition()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-combatsettings" /><code>{"private "}<Link to="/game-api/types/alta-player/combatstatesettings">{"CombatStateSettings"}</Link>{" CombatSettings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected override void AddListeners()"}</code> |  |
| <Link id="m-checkentercombat" /><code>{"private void CheckEnterCombat("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float healthChange, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> |  |
| <Link id="m-handlecausedcombat" /><code>{"private void HandleCausedCombat("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" attacker, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceBetweenCombatantsSquared, float damage)"}</code> |  |
| <Link id="m-removelisteners" /><code>{"protected override void RemoveListeners()"}</code> |  |

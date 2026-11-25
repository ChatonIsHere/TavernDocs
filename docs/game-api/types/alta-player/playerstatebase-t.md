---
title: "PlayerStateBase<T>"
description: "A player state that decorates a base state of type T, for example SpiritState on PlayingState."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateBase&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.PlayerStates`.

A player state that decorates a base state of type `T`, for example `SpiritState` on `PlayingState`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase`](/game-api/types/alta-player/playerstatebase)
- **Derived types** [`CombatState`](/game-api/types/alta-player/combatstate), [`DownedState`](/game-api/types/alta-player/downedstate), [`EquipmentState`](/game-api/types/alta-player/equipmentstate), [`SpiritState`](/game-api/types/alta-player/spiritstate)
- **Documented in** [Player states](/game-api/networking/player-states#playerstatebase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateBase(T baseState)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basestate" /><code>{"T BaseState { get; set; }"}</code> | The typed base state. Setting it in the constructor also sets the untyped one. |

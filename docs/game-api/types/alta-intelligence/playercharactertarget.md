---
title: "PlayerCharacterTarget"
description: "The Target for a player, on the player prefab, so creatures can sense, chase and attack players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCharacterTarget

A **class** in `Root.Township`, `Alta.Intelligence`.

The `Target` for a player, on the player prefab, so creatures can sense, chase and attack players. Its position is the head and its ground position the feet.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Target`](/game-api/types/alta-intelligence/target)
- **Documented in** [Targets and senses](/game-api/creatures/targets-and-senses#playercharactertarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCharacterTarget()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character"}</code> | Backing field for `Character`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-character-2" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Character { get; }"}</code> | The player's `PlayerController`. |
| <Link id="m-groundposition" /><code>{"override Vector3 GroundPosition { get; }"}</code> | The player's real feet position. |
| <Link id="m-isalive" /><code>{"override bool IsAlive { get; }"}</code> | True while the player is alive and not a spirit. |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | The player's head position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attacks" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{"> Attacks() (iterator)"}</code> | The current attack of every impact generator on the tools the player holds, so creatures can react to incoming swings. |

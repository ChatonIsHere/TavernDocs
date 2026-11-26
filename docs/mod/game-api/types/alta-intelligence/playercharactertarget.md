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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Target`](/mod/game-api/types/alta-intelligence/target)
- **Documented in** [Targets and senses](/mod/game-api/creatures/targets-and-senses#playercharactertarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCharacterTarget()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character"}</code> | <span className="api-desc">Backing field for `Character`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-character-2" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Character { get; }"}</code> | <span className="api-desc">The player's `PlayerController`.</span> |
| <Link id="m-groundposition" /><code>{"override Vector3 GroundPosition { get; }"}</code> | <span className="api-desc">The player's real feet position.</span> |
| <Link id="m-isalive" /><code>{"override bool IsAlive { get; }"}</code> | <span className="api-desc">True while the player is alive and not a spirit.</span> |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | <span className="api-desc">The player's head position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attacks" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{"> Attacks() (iterator)"}</code> | <span className="api-desc">The current attack of every impact generator on the tools the player holds, so creatures can react to incoming swings.</span> |

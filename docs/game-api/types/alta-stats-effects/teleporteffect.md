---
title: "TeleportEffect"
description: "Chance-based effect that teleports the target to a spawn area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

Chance-based effect that teleports the target to a spawn area. `Home` sends a player to their own respawn position.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`ChanceBasedEffectDefinition`](/game-api/types/alta-stats-effects/chancebasedeffectdefinition)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TeleportEffect()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-landingtarget" /><code>{"private "}<Link to="/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" landingTarget"}</code> | Spawn area to teleport to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Teleports to a random point in the landing area. Home uses the player's spawn point (not for spirits); missing areas fall back to `RespawnPoint`. |

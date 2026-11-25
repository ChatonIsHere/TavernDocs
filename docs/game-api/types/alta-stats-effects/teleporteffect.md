---
title: "TeleportEffect"
description: "A ChanceBasedEffectDefinition: with chance strength  chanceMultiplier, teleports the target home or to a spawn area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

A `ChanceBasedEffectDefinition`: with chance `strength * chanceMultiplier`, teleports the target home or to a spawn area.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`ChanceBasedEffectDefinition`](/game-api/types/alta-stats-effects/chancebasedeffectdefinition)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-landingtarget" /><code>{"private "}<Link to="/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" landingTarget"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> |  |

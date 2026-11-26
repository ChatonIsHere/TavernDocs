---
title: "PoisonEffect"
description: "Effect that poisons the target over time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PoisonEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

Effect that poisons the target over time. Only applies to targets with health.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PoisonEffect()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkapply" /><code>{"override void CheckApply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Applies only if the target has a `Health`. |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Calls the target's `PoisonOverTime` with the strength. |

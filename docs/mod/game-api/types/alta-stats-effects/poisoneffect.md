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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/mod/game-api/types/alta-stats-effects/effectdefinition)
- **Documented in** [Effects](/mod/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PoisonEffect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkapply" /><code>{"override void CheckApply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">Applies only if the target has a `Health`.</span> |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">Calls the target's `PoisonOverTime` with the strength.</span> |

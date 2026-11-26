---
title: "RevealEffect"
description: "Effect that calls Reveal on the target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RevealEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

Effect that calls `Reveal` on the target.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/mod/game-api/types/alta-stats-effects/effectdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Effects](/mod/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RevealEffect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">Calls the target's `Reveal`.</span> |

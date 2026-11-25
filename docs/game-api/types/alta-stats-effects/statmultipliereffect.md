---
title: "StatMultiplierEffect"
description: "Applies a timed StatModifier of its own modifierValue, lasting strength seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatMultiplierEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

Applies a timed `StatModifier` of its own `modifierValue`, lasting `strength` seconds.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition)
- **Derived types** [`StatMultiplierEffect.Create`](/game-api/types/alta-stats-effects/statmultipliereffect-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/statmultipliereffect-create)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatMultiplierEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ismultiplier" /><code>{"private bool isMultiplier"}</code> |  |
| <Link id="m-modifiervalue" /><code>{"private float modifierValue"}</code> |  |
| <Link id="m-stattoaffect" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statToAffect"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> |  |

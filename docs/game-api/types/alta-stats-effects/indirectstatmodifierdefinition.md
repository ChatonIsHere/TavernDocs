---
title: "IndirectStatModifierDefinition"
description: "class IndirectStatModifierDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndirectStatModifierDefinition

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition)
- **Derived types** [`IndirectStatModifierDefinition.Create`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition-create), [`StrengthUsage`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition-strengthusage)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IndirectStatModifierDefinition()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> |
| <Link id="m-curveoverduration" /><code>{"private "}<Link to="/game-api/types/global-c-d/curve">{"Curve"}</Link>{" curveOverDuration"}</code> |
| <Link id="m-duration" /><code>{"private uint duration"}</code> |
| <Link id="m-strengthaffects" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/indirectstatmodifierdefinition-strengthusage">{"IndirectStatModifierDefinition.StrengthUsage"}</Link>{" strengthAffects"}</code> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-targetstat-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" TargetStat { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> |

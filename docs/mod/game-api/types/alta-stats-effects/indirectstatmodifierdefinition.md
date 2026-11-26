---
title: "IndirectStatModifierDefinition"
description: "Effect asset that applies an indirect (over time) modifier to a stat, with a curve over its duration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndirectStatModifierDefinition

A **class** in `Root.Township`, `Alta.StatSystem`.

Effect asset that applies an indirect (over time) modifier to a stat, with a curve over its duration. Strength can scale the value, the duration or both.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/mod/game-api/types/alta-stats-effects/effectdefinition)
- **Derived types** [`IndirectStatModifierDefinition.Create`](/mod/game-api/types/alta-stats-effects/indirectstatmodifierdefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-stats-effects/indirectstatmodifierdefinition-create), [`StrengthUsage`](/mod/game-api/types/alta-stats-effects/indirectstatmodifierdefinition-strengthusage)
- **Documented in** [Effects](/mod/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IndirectStatModifierDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | Modifier value before strength. |
| <Link id="m-curveoverduration" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curve">{"Curve"}</Link>{" curveOverDuration"}</code> | How the effect is spread over the duration. |
| <Link id="m-duration" /><code>{"private uint duration"}</code> | Seconds the modifier lasts before strength. |
| <Link id="m-strengthaffects" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/indirectstatmodifierdefinition-strengthusage">{"IndirectStatModifierDefinition.StrengthUsage"}</Link>{" strengthAffects"}</code> | Flags for whether strength scales the duration, the value or both. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | Backing field for `TargetStat`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetstat-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" TargetStat { get; }"}</code> | The stat the modifier changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Applies an `IndirectModifier` to the target's stat, scaling value and duration by strength as `strengthAffects` says. |

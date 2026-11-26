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
| <Link id="m-ctor" /><code>{"IndirectStatModifierDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | <span className="api-desc">Modifier value before strength.</span> |
| <Link id="m-curveoverduration" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curve">{"Curve"}</Link>{" curveOverDuration"}</code> | <span className="api-desc">How the effect is spread over the duration.</span> |
| <Link id="m-duration" /><code>{"private uint duration"}</code> | <span className="api-desc">Seconds the modifier lasts before strength.</span> |
| <Link id="m-strengthaffects" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/indirectstatmodifierdefinition-strengthusage">{"IndirectStatModifierDefinition.StrengthUsage"}</Link>{" strengthAffects"}</code> | <span className="api-desc">Flags for whether strength scales the duration, the value or both.</span> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | <span className="api-desc">Backing field for `TargetStat`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetstat-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" TargetStat { get; }"}</code> | <span className="api-desc">The stat the modifier changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">Applies an `IndirectModifier` to the target's stat, scaling value and duration by strength as `strengthAffects` says.</span> |

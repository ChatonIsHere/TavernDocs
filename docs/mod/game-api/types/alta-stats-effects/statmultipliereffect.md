---
title: "StatMultiplierEffect"
description: "Effect that adds a timed modifier to one stat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatMultiplierEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

Effect that adds a timed modifier to one stat. The strength is passed as the modifier's duration.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/mod/game-api/types/alta-stats-effects/effectdefinition)
- **Derived types** [`StatMultiplierEffect.Create`](/mod/game-api/types/alta-stats-effects/statmultipliereffect-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-stats-effects/statmultipliereffect-create)
- **Documented in** [Effects](/mod/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatMultiplierEffect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ismultiplier" /><code>{"private bool isMultiplier"}</code> | <span className="api-desc">If true, the modifier multiplies the stat; otherwise it adds.</span> |
| <Link id="m-modifiervalue" /><code>{"private float modifierValue"}</code> | <span className="api-desc">Amount the modifier adds or multiplies by. Defaults to 3.</span> |
| <Link id="m-stattoaffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statToAffect"}</code> | <span className="api-desc">The stat the modifier applies to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">Applies a timed stat modifier with `modifierValue` to the target's stat, using the strength as the time.</span> |

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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition)
- **Derived types** [`StatMultiplierEffect.Create`](/game-api/types/alta-stats-effects/statmultipliereffect-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/statmultipliereffect-create)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatMultiplierEffect()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ismultiplier" /><code>{"private bool isMultiplier"}</code> | If true, the modifier multiplies the stat; otherwise it adds. |
| <Link id="m-modifiervalue" /><code>{"private float modifierValue"}</code> | Amount the modifier adds or multiplies by. Defaults to 3. |
| <Link id="m-stattoaffect" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statToAffect"}</code> | The stat the modifier applies to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Applies a timed stat modifier with `modifierValue` to the target's stat, using the strength as the time. |

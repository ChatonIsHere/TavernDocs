---
title: "EffectVolumeTrigger.Effect"
description: "One effect and strength that an EffectVolumeTrigger applies to handlers that enter it and takes off when they leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectVolumeTrigger.Effect

A **private class** in `Root.Township`, `Alta.Alchemy`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One effect and strength that an `EffectVolumeTrigger` applies to handlers that enter it and takes off when they leave.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`EffectVolumeTrigger`](/mod/game-api/types/alta-stats-effects/effectvolumetrigger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Effect()"}</code> | <span className="api-desc">Creates an `EffectVolumeTrigger.Effect` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effect" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effect"}</code> | <span className="api-desc">The effect definition to apply.</span> |
| <Link id="m-strength" /><code>{"private float strength"}</code> | <span className="api-desc">Strength the effect is applied at.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Applies the effect to the handler at `strength`.</span> |
| <Link id="m-unapply" /><code>{"void Unapply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Applies the effect at minus `strength`, undoing `Apply`.</span> |

## Used in

Members of other types that take, return or hold a `Effect`:

<div className="api-used-in">

[`EffectVolumeTrigger.effects`](/mod/game-api/types/alta-stats-effects/effectvolumetrigger#m-effects).

</div>

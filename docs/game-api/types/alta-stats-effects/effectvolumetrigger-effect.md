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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`EffectVolumeTrigger`](/game-api/types/alta-stats-effects/effectvolumetrigger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Effect()"}</code> | Creates an `EffectVolumeTrigger.Effect` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effect" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effect"}</code> | The effect definition to apply. |
| <Link id="m-strength" /><code>{"private float strength"}</code> | Strength the effect is applied at. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | Applies the effect to the handler at `strength`. |
| <Link id="m-unapply" /><code>{"void Unapply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | Applies the effect at minus `strength`, undoing `Apply`. |

## Used in

Members of other types that take, return or hold a `Effect`:

[`EffectVolumeTrigger.effects`](/game-api/types/alta-stats-effects/effectvolumetrigger#m-effects).

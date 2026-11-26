---
title: "EffectToggleColor.ParticleLifetimeColor"
description: "A particle system whose start colour and colour-over-lifetime gradient switch between on and off values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectToggleColor.ParticleLifetimeColor

A **class** in `Root.Township`, the global namespace.

A particle system whose start colour and colour-over-lifetime gradient switch between on and off values.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`EffectToggleColor`](/mod/game-api/types/global-e-h/effecttogglecolor)
- **Inherits or implements** [`EffectToggleColor.ParticleStartColor`](/mod/game-api/types/global-e-h/effecttogglecolor-particlestartcolor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleLifetimeColor(ParticleSystem system)"}</code> | Creates an `EffectToggleColor.ParticleLifetimeColor` from `system`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offgradient" /><code>{"private Gradient offGradient"}</code> | Colour-over-lifetime gradient when off. |
| <Link id="m-ongradient" /><code>{"private Gradient onGradient"}</code> | Colour-over-lifetime gradient when on. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settoggle" /><code>{"override void SetToggle(bool on)"}</code> | Sets the start colour and the lifetime gradient to the on or off values. |

## Used in

Members of other types that take, return or hold a `ParticleLifetimeColor`:

[`EffectToggleColor.lifetimeColorSystems`](/mod/game-api/types/global-e-h/effecttogglecolor#m-lifetimecolorsystems).

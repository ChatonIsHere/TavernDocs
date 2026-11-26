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
| <Link id="m-ctor" /><code>{"ParticleLifetimeColor(ParticleSystem system)"}</code> | <span className="api-desc">Creates an `EffectToggleColor.ParticleLifetimeColor` from `system`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offgradient" /><code>{"private Gradient offGradient"}</code> | <span className="api-desc">Colour-over-lifetime gradient when off.</span> |
| <Link id="m-ongradient" /><code>{"private Gradient onGradient"}</code> | <span className="api-desc">Colour-over-lifetime gradient when on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settoggle" /><code>{"override void SetToggle(bool on)"}</code> | <span className="api-desc">Sets the start colour and the lifetime gradient to the on or off values.</span> |

## Used in

Members of other types that take, return or hold a `ParticleLifetimeColor`:

<div className="api-used-in">

[`EffectToggleColor.lifetimeColorSystems`](/mod/game-api/types/global-e-h/effecttogglecolor#m-lifetimecolorsystems).

</div>

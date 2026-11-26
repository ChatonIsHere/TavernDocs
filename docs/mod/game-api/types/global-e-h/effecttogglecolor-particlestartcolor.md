---
title: "EffectToggleColor.ParticleStartColor"
description: "A particle system whose start colour switches between an on and an off colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectToggleColor.ParticleStartColor

A **class** in `Root.Township`, the global namespace.

A particle system whose start colour switches between an on and an off colour.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`EffectToggleColor`](/mod/game-api/types/global-e-h/effecttogglecolor)
- **Derived types** [`EffectToggleColor.ParticleLifetimeColor`](/mod/game-api/types/global-e-h/effecttogglecolor-particlelifetimecolor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleStartColor(ParticleSystem system)"}</code> | Creates an `EffectToggleColor.ParticleStartColor` from `system`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offcolor" /><code>{"private Color offColor"}</code> | Start colour when off. |
| <Link id="m-oncolor" /><code>{"private Color onColor"}</code> | Start colour when on. |
| <Link id="m-system" /><code>{"private ParticleSystem system"}</code> | Backing field for `System`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-system-2" /><code>{"ParticleSystem System { get; }"}</code> | The particle system. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settoggle" /><code>{"virtual void SetToggle(bool on)"}</code> | Sets the start colour to the on or off colour. |

## Used in

Members of other types that take, return or hold a `ParticleStartColor`:

[`EffectToggleColor.startColorSystems`](/mod/game-api/types/global-e-h/effecttogglecolor#m-startcolorsystems).

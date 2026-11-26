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
| <Link id="m-ctor" /><code>{"ParticleStartColor(ParticleSystem system)"}</code> | <span className="api-desc">Creates an `EffectToggleColor.ParticleStartColor` from `system`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offcolor" /><code>{"private Color offColor"}</code> | <span className="api-desc">Start colour when off.</span> |
| <Link id="m-oncolor" /><code>{"private Color onColor"}</code> | <span className="api-desc">Start colour when on.</span> |
| <Link id="m-system" /><code>{"private ParticleSystem system"}</code> | <span className="api-desc">Backing field for `System`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-system-2" /><code>{"ParticleSystem System { get; }"}</code> | <span className="api-desc">The particle system.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settoggle" /><code>{"virtual void SetToggle(bool on)"}</code> | <span className="api-desc">Sets the start colour to the on or off colour.</span> |

## Used in

Members of other types that take, return or hold a `ParticleStartColor`:

<div className="api-used-in">

[`EffectToggleColor.startColorSystems`](/mod/game-api/types/global-e-h/effecttogglecolor#m-startcolorsystems).

</div>

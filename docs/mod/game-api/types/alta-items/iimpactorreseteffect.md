---
title: "IImpactorResetEffect"
description: "An effect that is reset when its impactor resets after a hit or block."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IImpactorResetEffect

An **interface** in `Root.Township`, `Alta.Impact`.

An effect that is reset when its impactor resets after a hit or block. Added to `ImpactGenerator.EffectsOnReset`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Derived types** [`ContactProjectile`](/mod/game-api/types/alta-items/contactprojectile), [`Projectile`](/mod/game-api/types/global-p/projectile)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reseteffect" /><code>{"void ResetEffect()"}</code> | Called when the impactor resets. |

## Used in

Members of other types that take, return or hold a `IImpactorResetEffect`:

[`ImpactGenerator.EffectsOnReset`](/mod/game-api/types/alta-items/impactgenerator#m-effectsonreset).

---
title: "ImpactModifierStatAffect.HitValue"
description: "Which value of a hit drives the stat change: health damage, cripple damage or effectiveness."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactModifierStatAffect.HitValue

An **private enum** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Which value of a hit drives the stat change: health damage, cripple damage or effectiveness.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`ImpactModifierStatAffect`](/mod/game-api/types/alta-items/impactmodifierstataffect)

## Values

| Member |
| --- |
| <Link id="m-crippledamage" /><code>{"CrippleDamage = 1"}</code> |
| <Link id="m-damage" /><code>{"Damage = 0"}</code> |
| <Link id="m-effectiveness" /><code>{"Effectiveness = 2"}</code> |

## Used in

Members of other types that take, return or hold a `HitValue`:

[`ImpactModifierStatAffect.isBasedOn`](/mod/game-api/types/alta-items/impactmodifierstataffect#m-isbasedon).

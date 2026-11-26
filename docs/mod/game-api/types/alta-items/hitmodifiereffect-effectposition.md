---
title: "HitModifierEffect.EffectPosition"
description: "Where a hit modifier effect starts or ends: on this object, on the thing hit, or on the player wielding the tool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HitModifierEffect.EffectPosition

An **private enum** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Where a hit modifier effect starts or ends: on this object, on the thing hit, or on the player wielding the tool.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`HitModifierEffect`](/mod/game-api/types/alta-items/hitmodifiereffect)

## Values

| Member |
| --- |
| <Link id="m-hit" /><code>{"Hit = 1"}</code> |
| <Link id="m-this" /><code>{"This = 0"}</code> |
| <Link id="m-wielder" /><code>{"Wielder = 2"}</code> |

## Used in

Members of other types that take, return or hold a `EffectPosition`:

<div className="api-used-in">

[`HitModifierEffect.source`](/mod/game-api/types/alta-items/hitmodifiereffect#m-source), [`HitModifierEffect.target`](/mod/game-api/types/alta-items/hitmodifiereffect#m-target).

</div>

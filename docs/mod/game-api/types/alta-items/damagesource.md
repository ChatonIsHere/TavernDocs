---
title: "DamageSource"
description: "What caused a hit of damage (fall, impact, command, area of effect, poison, hunger, fire or unknown)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageSource

An **enum** in `Root.Township`, `Alta.Impact`.

What caused a hit of damage (fall, impact, command, area of effect, poison, hunger, fire or unknown). Carried in `DamageData`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Documented in** [Health and damage](/mod/game-api/items/health-and-damage#damagedata-and-damagesource)

## Values

| Member |
| --- |
| <Link id="m-areaofeffect" /><code>{"AreaOfEffect = 3"}</code> |
| <Link id="m-command" /><code>{"Command = 2"}</code> |
| <Link id="m-falldamage" /><code>{"FallDamage = 0"}</code> |
| <Link id="m-fire" /><code>{"Fire = 7"}</code> |
| <Link id="m-hunger" /><code>{"Hunger = 5"}</code> |
| <Link id="m-impact" /><code>{"Impact = 1"}</code> |
| <Link id="m-poison" /><code>{"Poison = 4"}</code> |
| <Link id="m-unknown" /><code>{"Unknown = 6"}</code> |

## Used in

Members of other types that take, return or hold a `DamageSource`:

[`DamageData.DamageData`](/mod/game-api/types/alta-items/damagedata#m-ctor), [`DamageData.Source`](/mod/game-api/types/alta-items/damagedata#m-source), [`KilledData.source`](/mod/game-api/types/alta-player/killeddata#m-source).

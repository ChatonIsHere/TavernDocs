---
title: "DamageMultiplierApplication"
description: "A DamageMultiplier effect active on one item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageMultiplierApplication

A **class** in `Root.Township`, `Alta.Enchantments`.

A `DamageMultiplier` effect active on one item. When its trigger fires with an `ImpactHit`, it multiplies the hit's damage (`HealthMultiplier`).

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`EnchantmentEffectApplication<DamageMultiplier>`](/mod/game-api/types/alta-crafting/enchantmenteffectapplication-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageMultiplierApplication("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment, "}<Link to="/mod/game-api/types/alta-crafting/damagemultiplier">{"DamageMultiplier"}</Link>{" settings)"}</code> | <span className="api-desc">Creates a `DamageMultiplierApplication` from `enchantment` and `settings`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; logs an error if the trigger passes something other than an `ImpactHit`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"override void Invoke(object data)"}</code> | <span className="api-desc">Multiplies the hit's damage by the enchantment's multiplier; logs an error if the data isn't an `ImpactHit`.</span> |

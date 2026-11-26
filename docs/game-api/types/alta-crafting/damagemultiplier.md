---
title: "DamageMultiplier"
description: "Enchantment effect asset that multiplies the damage of an impact hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageMultiplier

A **class** in `Root.Township`, `Alta.Enchantments`.

Enchantment effect asset that multiplies the damage of an impact hit.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`EnchantmentEffect`](/game-api/types/alta-crafting/enchantmenteffect)
- **Derived types** [`DamageMultiplier.Create`](/game-api/types/alta-crafting/damagemultiplier-create), [`DamageMultiplierApplication`](/game-api/types/alta-crafting/damagemultiplierapplication)
- **Nested types** [`Create`](/game-api/types/alta-crafting/damagemultiplier-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DamageMultiplier()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Backing field for `Multiplier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; }"}</code> | Factor the hit's health damage is multiplied by. Defaults to 1.2. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createnew" /><code>{"protected override "}<Link to="/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" CreateNew("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> | Creates the `DamageMultiplierApplication` that applies this effect to an enchanted item. |

## Used in

Members of other types that take, return or hold a `DamageMultiplier`:

[`DamageMultiplierApplication.DamageMultiplierApplication`](/game-api/types/alta-crafting/damagemultiplierapplication#m-ctor).

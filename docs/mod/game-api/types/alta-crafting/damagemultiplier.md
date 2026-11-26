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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`EnchantmentEffect`](/mod/game-api/types/alta-crafting/enchantmenteffect)
- **Derived types** [`DamageMultiplier.Create`](/mod/game-api/types/alta-crafting/damagemultiplier-create), [`DamageMultiplierApplication`](/mod/game-api/types/alta-crafting/damagemultiplierapplication)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/damagemultiplier-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageMultiplier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Backing field for `Multiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; }"}</code> | <span className="api-desc">Factor the hit's health damage is multiplied by. Defaults to 1.2.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createnew" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" CreateNew("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> | <span className="api-desc">Creates the `DamageMultiplierApplication` that applies this effect to an enchanted item.</span> |

## Used in

Members of other types that take, return or hold a `DamageMultiplier`:

<div className="api-used-in">

[`DamageMultiplierApplication.DamageMultiplierApplication`](/mod/game-api/types/alta-crafting/damagemultiplierapplication#m-ctor).

</div>

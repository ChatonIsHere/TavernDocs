---
title: "DurabilitySaveEnchantment"
description: "Enchantment effect asset that scales how much durability a tool loses on a hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilitySaveEnchantment

A **class** in `Root.Township`, `Alta.Enchantments`.

Enchantment effect asset that scales how much durability a tool loses on a hit.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`EnchantmentEffect`](/mod/game-api/types/alta-crafting/enchantmenteffect)
- **Derived types** [`DurabilitySaveEnchantment.Create`](/mod/game-api/types/alta-crafting/durabilitysaveenchantment-create), [`DurabilitySaveEnchantmentApplication`](/mod/game-api/types/alta-crafting/durabilitysaveenchantmentapplication)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/durabilitysaveenchantment-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilitySaveEnchantment()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-durabilitylostmultiplier" /><code>{"private float durabilityLostMultiplier"}</code> | <span className="api-desc">Backing field for `DurabilityLostMultiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-durabilitylostmultiplier-2" /><code>{"float DurabilityLostMultiplier { get; }"}</code> | <span className="api-desc">Factor the hit's durability loss is multiplied by.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createnew" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" CreateNew("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> | <span className="api-desc">Creates the `DurabilitySaveEnchantmentApplication` that applies this effect to an enchanted item.</span> |

## Used in

Members of other types that take, return or hold a `DurabilitySaveEnchantment`:

<div className="api-used-in">

[`DurabilitySaveEnchantmentApplication.DurabilitySaveEnchantmentApplication`](/mod/game-api/types/alta-crafting/durabilitysaveenchantmentapplication#m-ctor).

</div>

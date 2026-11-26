---
title: "DurabilitySaveEnchantmentApplication"
description: "A DurabilitySaveEnchantment effect active on one item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilitySaveEnchantmentApplication

A **class** in `Root.Township`, `Alta.Enchantments`.

A `DurabilitySaveEnchantment` effect active on one item. When its trigger fires with an `ImpactHitWithTool`, it scales how much durability the tool loses.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`EnchantmentEffectApplication<DurabilitySaveEnchantment>`](/game-api/types/alta-crafting/enchantmenteffectapplication-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilitySaveEnchantmentApplication("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment, "}<Link to="/game-api/types/alta-crafting/durabilitysaveenchantment">{"DurabilitySaveEnchantment"}</Link>{" settings)"}</code> | Creates a `DurabilitySaveEnchantmentApplication` from `enchantment` and `settings`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; logs an error if the trigger passes something other than an `ImpactHitWithTool`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"override void Invoke(object data)"}</code> | Scales how much durability the tool loses on this hit; logs an error if the data isn't an `ImpactHitWithTool`. |

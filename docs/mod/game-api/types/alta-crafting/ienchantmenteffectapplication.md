---
title: "IEnchantmentEffectApplication"
description: "Runtime part of an EnchantmentEffect on one item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IEnchantmentEffectApplication

An **interface** in `Root.Township`, `Alta.Enchantments`.

Runtime part of an `EnchantmentEffect` on one item. Run when the enchantment's trigger fires.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`EnchantmentEffectApplication<T>`](/mod/game-api/types/alta-crafting/enchantmenteffectapplication-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantmentapp" /><code><Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" EnchantmentApp { get; }"}</code> | The enchantment this effect belongs to. |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-crafting/enchantmenteffect">{"EnchantmentEffect"}</Link>{" Settings { get; }"}</code> | The effect asset. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke(object data)"}</code> | Runs the effect with the trigger's data. The base version plays and syncs hit effects for a tool hit. |
| <Link id="m-sendmessage" /><code>{"void SendMessage("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the effect's sync data, such as the hit position. |

## Used in

Members of other types that take, return or hold a `IEnchantmentEffectApplication`:

[`DamageMultiplier.CreateNew`](/mod/game-api/types/alta-crafting/damagemultiplier#m-createnew), [`DurabilitySaveEnchantment.CreateNew`](/mod/game-api/types/alta-crafting/durabilitysaveenchantment#m-createnew), [`Enchantable.effectApplication`](/mod/game-api/types/alta-crafting/enchantable#m-effectapplication), [`Enchantable.SendEffectMessage`](/mod/game-api/types/alta-crafting/enchantable#m-sendeffectmessage), [`EnchantmentApplication.allEffects`](/mod/game-api/types/alta-crafting/enchantmentapplication#m-alleffects), [`EnchantmentEffect.CreateApplication`](/mod/game-api/types/alta-crafting/enchantmenteffect#m-createapplication), [`EnchantmentEffect.CreateNew`](/mod/game-api/types/alta-crafting/enchantmenteffect#m-createnew).

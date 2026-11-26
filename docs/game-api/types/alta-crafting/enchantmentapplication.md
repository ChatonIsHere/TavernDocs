---
title: "EnchantmentApplication"
description: "An enchantment applied to one Enchantable: the live triggers and effects built from the enchantment's bindings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantmentApplication

A **class** in `Root.Township`, `Alta.Enchantments`.

An enchantment applied to one `Enchantable`: the live triggers and effects built from the enchantment's bindings. Each binding's triggers fire that binding's effects.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnchantmentApplication("}<Link to="/game-api/types/alta-crafting/enchantable">{"Enchantable"}</Link>{" enchantable, "}<Link to="/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{" enchantment)"}</code> | Creates an `EnchantmentApplication` from `enchantable` and `enchantment`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alleffects" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{"> allEffects"}</code> | The effect instances created from the bindings. |
| <Link id="m-alltriggers" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{"> allTriggers"}</code> | The trigger instances created from the bindings. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantable" /><code><Link to="/game-api/types/alta-crafting/enchantable">{"Enchantable"}</Link>{" "}<Link to="/game-api/types/alta-crafting/enchantable">{"Enchantable"}</Link>{" { get; }"}</code> | The object this enchantment is applied to. |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{" Settings { get; }"}</code> | The `Enchantment` asset this was built from. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-removed" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{"> Removed"}</code> | Raised once when the enchantment is removed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | Removes every trigger, raises `Removed` and clears its listeners. |

## Used in

Members of other types that take, return or hold a `EnchantmentApplication`:

[`DamageMultiplier.CreateNew`](/game-api/types/alta-crafting/damagemultiplier#m-createnew), [`DamageMultiplierApplication.DamageMultiplierApplication`](/game-api/types/alta-crafting/damagemultiplierapplication#m-ctor), [`DurabilitySaveEnchantment.CreateNew`](/game-api/types/alta-crafting/durabilitysaveenchantment#m-createnew), [`DurabilitySaveEnchantmentApplication.DurabilitySaveEnchantmentApplication`](/game-api/types/alta-crafting/durabilitysaveenchantmentapplication#m-ctor), [`Enchantable.Add`](/game-api/types/alta-crafting/enchantable#m-add), [`Enchantable.EnchantmentRemoved`](/game-api/types/alta-crafting/enchantable#m-enchantmentremoved), [`Enchantable.enchantments`](/game-api/types/alta-crafting/enchantable#m-enchantments), [`Enchantable.Get`](/game-api/types/alta-crafting/enchantable#m-get), [`EnchantmentEffect.CreateApplication`](/game-api/types/alta-crafting/enchantmenteffect#m-createapplication), [`EnchantmentEffect.CreateNew`](/game-api/types/alta-crafting/enchantmenteffect#m-createnew), [`EnchantmentEffectApplication<T>.EnchantmentApp`](/game-api/types/alta-crafting/enchantmenteffectapplication-t#m-enchantmentapp), [`EnchantmentEffectApplication<T>.EnchantmentEffectApplication<T>`](/game-api/types/alta-crafting/enchantmenteffectapplication-t#m-ctor), [`EnchantmentTrigger.CreateApplication`](/game-api/types/alta-crafting/enchantmenttrigger#m-createapplication), [`EnchantmentTrigger.CreateNew`](/game-api/types/alta-crafting/enchantmenttrigger#m-createnew), [`EnchantmentTriggerApplication<T>.EnchantmentApp`](/game-api/types/alta-crafting/enchantmenttriggerapplication-t#m-enchantmentapp), [`EnchantmentTriggerApplication<T>.EnchantmentTriggerApplication<T>`](/game-api/types/alta-crafting/enchantmenttriggerapplication-t#m-ctor), [`IEnchantmentEffectApplication.EnchantmentApp`](/game-api/types/alta-crafting/ienchantmenteffectapplication#m-enchantmentapp), [`IEnchantmentTriggerApplication.EnchantmentApp`](/game-api/types/alta-crafting/ienchantmenttriggerapplication#m-enchantmentapp), [`QuickDrawApplication.QuickDrawApplication`](/game-api/types/alta-crafting/quickdrawapplication#m-ctor), [`QuickDrawTrigger.CreateNew`](/game-api/types/alta-crafting/quickdrawtrigger#m-createnew).

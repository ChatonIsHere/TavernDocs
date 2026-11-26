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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnchantmentApplication("}<Link to="/mod/game-api/types/alta-crafting/enchantable">{"Enchantable"}</Link>{" enchantable, "}<Link to="/mod/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{" enchantment)"}</code> | <span className="api-desc">Creates an `EnchantmentApplication` from `enchantable` and `enchantment`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alleffects" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{"> allEffects"}</code> | <span className="api-desc">The effect instances created from the bindings.</span> |
| <Link id="m-alltriggers" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{"> allTriggers"}</code> | <span className="api-desc">The trigger instances created from the bindings.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantable" /><code><Link to="/mod/game-api/types/alta-crafting/enchantable">{"Enchantable"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/enchantable">{"Enchantable"}</Link>{" { get; }"}</code> | <span className="api-desc">The object this enchantment is applied to.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The `Enchantment` asset this was built from.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-removed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{"> Removed"}</code> | <span className="api-desc">Raised once when the enchantment is removed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | <span className="api-desc">Removes every trigger, raises `Removed` and clears its listeners.</span> |

## Used in

Members of other types that take, return or hold a `EnchantmentApplication`:

<div className="api-used-in">

[`DamageMultiplier.CreateNew`](/mod/game-api/types/alta-crafting/damagemultiplier#m-createnew), [`DamageMultiplierApplication.DamageMultiplierApplication`](/mod/game-api/types/alta-crafting/damagemultiplierapplication#m-ctor), [`DurabilitySaveEnchantment.CreateNew`](/mod/game-api/types/alta-crafting/durabilitysaveenchantment#m-createnew), [`DurabilitySaveEnchantmentApplication.DurabilitySaveEnchantmentApplication`](/mod/game-api/types/alta-crafting/durabilitysaveenchantmentapplication#m-ctor), [`Enchantable.Add`](/mod/game-api/types/alta-crafting/enchantable#m-add), [`Enchantable.EnchantmentRemoved`](/mod/game-api/types/alta-crafting/enchantable#m-enchantmentremoved), [`Enchantable.enchantments`](/mod/game-api/types/alta-crafting/enchantable#m-enchantments), [`Enchantable.Get`](/mod/game-api/types/alta-crafting/enchantable#m-get), [`EnchantmentEffect.CreateApplication`](/mod/game-api/types/alta-crafting/enchantmenteffect#m-createapplication), [`EnchantmentEffect.CreateNew`](/mod/game-api/types/alta-crafting/enchantmenteffect#m-createnew), [`EnchantmentEffectApplication<T>.EnchantmentApp`](/mod/game-api/types/alta-crafting/enchantmenteffectapplication-t#m-enchantmentapp), [`EnchantmentEffectApplication<T>.EnchantmentEffectApplication<T>`](/mod/game-api/types/alta-crafting/enchantmenteffectapplication-t#m-ctor), [`EnchantmentTrigger.CreateApplication`](/mod/game-api/types/alta-crafting/enchantmenttrigger#m-createapplication), [`EnchantmentTrigger.CreateNew`](/mod/game-api/types/alta-crafting/enchantmenttrigger#m-createnew), [`EnchantmentTriggerApplication<T>.EnchantmentApp`](/mod/game-api/types/alta-crafting/enchantmenttriggerapplication-t#m-enchantmentapp), [`EnchantmentTriggerApplication<T>.EnchantmentTriggerApplication<T>`](/mod/game-api/types/alta-crafting/enchantmenttriggerapplication-t#m-ctor), [`IEnchantmentEffectApplication.EnchantmentApp`](/mod/game-api/types/alta-crafting/ienchantmenteffectapplication#m-enchantmentapp), [`IEnchantmentTriggerApplication.EnchantmentApp`](/mod/game-api/types/alta-crafting/ienchantmenttriggerapplication#m-enchantmentapp), [`QuickDrawApplication.QuickDrawApplication`](/mod/game-api/types/alta-crafting/quickdrawapplication#m-ctor), [`QuickDrawTrigger.CreateNew`](/mod/game-api/types/alta-crafting/quickdrawtrigger#m-createnew).

</div>

---
title: "EnchantmentTrigger"
description: "When it fires. CreateApplication applies the trigger on the server only. QuickDrawTrigger is one (a fast, effective hit within timeToHit)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantmentTrigger

An **abstract class** in `Root.Township`, `Alta.Enchantments`.

When it fires. `CreateApplication` applies the trigger on the server only. `QuickDrawTrigger` is one (a fast, effective hit within `timeToHit`).

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`QuickDrawTrigger`](/game-api/types/alta-crafting/quickdrawtrigger)
- **Nested types** [`EffectType`](/game-api/types/alta-crafting/enchantmenttrigger-effecttype)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected EnchantmentTrigger()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onskillcanceledtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onSkillCanceledTransform"}</code> |  |
| <Link id="m-onskillchargedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onSkillChargedTransform"}</code> |  |
| <Link id="m-onskillexecutedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onSkillExecutedTransform"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-callevents" /><code>{"void CallEvents("}<Link to="/game-api/types/alta-crafting/enchantmenttrigger-effecttype">{"EnchantmentTrigger.EffectType"}</Link>{" effectType, Transform transform)"}</code> |  |
| <Link id="m-createapplication" /><code><Link to="/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{" CreateApplication("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> |  |
| <Link id="m-createnew" /><code>{"protected abstract "}<Link to="/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{" CreateNew("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EnchantmentTrigger`:

[`Enchantment.Binding.triggers`](/game-api/types/alta-crafting/enchantment-binding#m-triggers), [`Enchantment.Binding.Triggers`](/game-api/types/alta-crafting/enchantment-binding#m-triggers-2), [`EnchantmentTriggerApplication<T>.Alta.Enchantments.IEnchantmentTriggerApplication.Settings`](/game-api/types/alta-crafting/enchantmenttriggerapplication-t#m-alta-enchantments-ienchantmenttriggerapplication-settings), [`IEnchantmentTriggerApplication.Settings`](/game-api/types/alta-crafting/ienchantmenttriggerapplication#m-settings).

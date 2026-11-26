---
title: "EnchantmentTrigger"
description: "Base asset for what sets off an enchantment (such as a skill being charged or executed)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantmentTrigger

An **abstract class** in `Root.Township`, `Alta.Enchantments`.

Base asset for what sets off an enchantment (such as a skill being charged or executed). Subclasses create the per-item trigger application.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`QuickDrawTrigger`](/mod/game-api/types/alta-crafting/quickdrawtrigger)
- **Nested types** [`EffectType`](/mod/game-api/types/alta-crafting/enchantmenttrigger-effecttype)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected EnchantmentTrigger()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onskillcanceledtransform" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onSkillCanceledTransform"}</code> | Event played when the skill is cancelled. |
| <Link id="m-onskillchargedtransform" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onSkillChargedTransform"}</code> | Event played when the skill is charged. |
| <Link id="m-onskillexecutedtransform" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onSkillExecutedTransform"}</code> | Event played when the skill is executed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-callevents" /><code>{"void CallEvents("}<Link to="/mod/game-api/types/alta-crafting/enchantmenttrigger-effecttype">{"EnchantmentTrigger.EffectType"}</Link>{" effectType, Transform transform)"}</code> | Plays the charged, executed or cancelled event at a transform. |
| <Link id="m-createapplication" /><code><Link to="/mod/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{" CreateApplication("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> | Creates the trigger application for an enchantment, applying it straight away on the server. |
| <Link id="m-createnew" /><code>{"protected abstract "}<Link to="/mod/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{" CreateNew("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> | Subclasses return their trigger application for the enchantment. |

## Used in

Members of other types that take, return or hold a `EnchantmentTrigger`:

[`Enchantment.Binding.triggers`](/mod/game-api/types/alta-crafting/enchantment-binding#m-triggers), [`Enchantment.Binding.Triggers`](/mod/game-api/types/alta-crafting/enchantment-binding#m-triggers-2), [`EnchantmentTriggerApplication<T>.Alta.Enchantments.IEnchantmentTriggerApplication.Settings`](/mod/game-api/types/alta-crafting/enchantmenttriggerapplication-t#m-alta-enchantments-ienchantmenttriggerapplication-settings), [`IEnchantmentTriggerApplication.Settings`](/mod/game-api/types/alta-crafting/ienchantmenttriggerapplication#m-settings).

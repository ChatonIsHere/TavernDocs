---
title: "EnchantmentTrigger.EffectType"
description: "Which of a trigger's event sets EnchantmentTrigger.CallEvents fires: charged, executed or cancelled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantmentTrigger.EffectType

An **enum** in `Root.Township`, `Alta.Enchantments`.

Which of a trigger's event sets `EnchantmentTrigger.CallEvents` fires: charged, executed or cancelled.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`EnchantmentTrigger`](/mod/game-api/types/alta-crafting/enchantmenttrigger)

## Values

| Member |
| --- |
| <Link id="m-cancelled" /><code>{"Cancelled = 2"}</code> |
| <Link id="m-charged" /><code>{"Charged = 0"}</code> |
| <Link id="m-executed" /><code>{"Executed = 1"}</code> |

## Used in

Members of other types that take, return or hold a `EffectType`:

[`EnchantmentTrigger.CallEvents`](/mod/game-api/types/alta-crafting/enchantmenttrigger#m-callevents), [`EnchantmentTriggerApplication<T>.CallEvents`](/mod/game-api/types/alta-crafting/enchantmenttriggerapplication-t#m-callevents).

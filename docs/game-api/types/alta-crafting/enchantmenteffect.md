---
title: "EnchantmentEffect"
description: "What it does: DamageMultiplier (default 1.2x), DurabilitySaveEnchantment (less durability lost)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantmentEffect

An **abstract class** in `Root.Township`, `Alta.Enchantments`.

What it does: `DamageMultiplier` (default 1.2x), `DurabilitySaveEnchantment` (less durability lost).

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DamageMultiplier`](/game-api/types/alta-crafting/damagemultiplier), [`DurabilitySaveEnchantment`](/game-api/types/alta-crafting/durabilitysaveenchantment)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected EnchantmentEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onalignedhiteffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" onAlignedHitEffect"}</code> |  |
| <Link id="m-onhiteffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onHitEffect"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-callhiteffectevents" /><code>{"void CallHitEffectEvents(Vector3 hitPosition, Quaternion hitAlignment)"}</code> |  |
| <Link id="m-createapplication" /><code><Link to="/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" CreateApplication("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> |  |
| <Link id="m-createnew" /><code>{"protected abstract "}<Link to="/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" CreateNew("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EnchantmentEffect`:

[`Enchantment.Binding.effects`](/game-api/types/alta-crafting/enchantment-binding#m-effects), [`Enchantment.Binding.Effects`](/game-api/types/alta-crafting/enchantment-binding#m-effects-2), [`EnchantmentEffectApplication<T>.Alta.Enchantments.IEnchantmentEffectApplication.Settings`](/game-api/types/alta-crafting/enchantmenteffectapplication-t#m-alta-enchantments-ienchantmenteffectapplication-settings), [`IEnchantmentEffectApplication.Settings`](/game-api/types/alta-crafting/ienchantmenteffectapplication#m-settings).

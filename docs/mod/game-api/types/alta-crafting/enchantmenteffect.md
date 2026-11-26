---
title: "EnchantmentEffect"
description: "Asset for what an enchantment does (for example DamageMultiplier, DurabilitySaveEnchantment), plus the effects played where it hits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantmentEffect

An **abstract class** in `Root.Township`, `Alta.Enchantments`.

Asset for what an enchantment does (for example `DamageMultiplier`, `DurabilitySaveEnchantment`), plus the effects played where it hits.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DamageMultiplier`](/mod/game-api/types/alta-crafting/damagemultiplier), [`DurabilitySaveEnchantment`](/mod/game-api/types/alta-crafting/durabilitysaveenchantment)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected EnchantmentEffect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onalignedhiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" onAlignedHitEffect"}</code> | <span className="api-desc">Event with position and rotation, played by `CallHitEffectEvents`.</span> |
| <Link id="m-onhiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onHitEffect"}</code> | <span className="api-desc">Event with position, played by `CallHitEffectEvents`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-callhiteffectevents" /><code>{"void CallHitEffectEvents(Vector3 hitPosition, Quaternion hitAlignment)"}</code> | <span className="api-desc">Fires the hit position and aligned hit events.</span> |
| <Link id="m-createapplication" /><code><Link to="/mod/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" CreateApplication("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> | <span className="api-desc">Creates the runtime application of this effect for an enchantment on an item.</span> |
| <Link id="m-createnew" /><code>{"protected abstract "}<Link to="/mod/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" CreateNew("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment)"}</code> | <span className="api-desc">Makes the effect's own `IEnchantmentEffectApplication`.</span> |

## Used in

Members of other types that take, return or hold a `EnchantmentEffect`:

<div className="api-used-in">

[`Enchantment.Binding.effects`](/mod/game-api/types/alta-crafting/enchantment-binding#m-effects), [`Enchantment.Binding.Effects`](/mod/game-api/types/alta-crafting/enchantment-binding#m-effects-2), [`EnchantmentEffectApplication<T>.Alta.Enchantments.IEnchantmentEffectApplication.Settings`](/mod/game-api/types/alta-crafting/enchantmenteffectapplication-t#m-alta-enchantments-ienchantmenteffectapplication-settings), [`IEnchantmentEffectApplication.Settings`](/mod/game-api/types/alta-crafting/ienchantmenteffectapplication#m-settings).

</div>

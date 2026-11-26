---
title: "EnchantmentEffectApplication<T>"
description: "Base for an enchantment effect active on one item, holding its EnchantmentEffect settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantmentEffectApplication&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Enchantments`.

Base for an enchantment effect active on one item, holding its `EnchantmentEffect` settings. Runs when one of its binding's triggers fires and syncs the hit effect to clients.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`IEnchantmentEffectApplication`](/mod/game-api/types/alta-crafting/ienchantmenteffectapplication)
- **Derived types** [`DamageMultiplierApplication`](/mod/game-api/types/alta-crafting/damagemultiplierapplication), [`DurabilitySaveEnchantmentApplication`](/mod/game-api/types/alta-crafting/durabilitysaveenchantmentapplication)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnchantmentEffectApplication("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment, T settings)"}</code> | Creates an `EnchantmentEffectApplication` from `enchantment` and `settings`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitalignement" /><code>{"private Quaternion hitAlignement"}</code> | Rotation facing back along the hit direction, for hit effects. |
| <Link id="m-hitposition" /><code>{"private Vector3 hitPosition"}</code> | Where the last tool hit landed. |
| <Link id="m-isapplied" /><code>{"private bool isApplied"}</code> | Unused flag in this build. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantmentapp" /><code><Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" EnchantmentApp { get; private set; }"}</code> | The enchantment application this effect belongs to. |
| <Link id="m-settings" /><code>{"T Settings { get; private set; }"}</code> | The effect asset with this effect's values. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-enchantments-ienchantmenteffectapplication-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/enchantmenteffect">{"EnchantmentEffect"}</Link>{" Alta.Enchantments.IEnchantmentEffectApplication.Settings { get; }"}</code> | The settings as a plain `EnchantmentEffect`, for the interface. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"virtual void Invoke(object data)"}</code> | Called when the enchanted tool hits: records the hit point, sends the effect to players and plays it. Overrides apply the actual change. |
| <Link id="m-runevent" /><code>{"void RunEvent()"}</code> | Plays the effect's hit events at the stored hit point. Does nothing on a headless server. |
| <Link id="m-sendmessage" /><code>{"virtual void SendMessage("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the hit position and rotation; on a remote client it then plays the hit events. |

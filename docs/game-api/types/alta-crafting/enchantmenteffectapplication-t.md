---
title: "EnchantmentEffectApplication<T>"
description: "abstract class EnchantmentEffectApplication<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantmentEffectApplication&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Enchantments`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`IEnchantmentEffectApplication`](/game-api/types/alta-crafting/ienchantmenteffectapplication)
- **Derived types** [`DamageMultiplierApplication`](/game-api/types/alta-crafting/damagemultiplierapplication), [`DurabilitySaveEnchantmentApplication`](/game-api/types/alta-crafting/durabilitysaveenchantmentapplication)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnchantmentEffectApplication("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment, T settings)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hitalignement" /><code>{"private Quaternion hitAlignement"}</code> |  |
| <Link id="m-hitposition" /><code>{"private Vector3 hitPosition"}</code> |  |
| <Link id="m-isapplied" /><code>{"private bool isApplied"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantmentapp" /><code><Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" EnchantmentApp { get; private set; }"}</code> |  |
| <Link id="m-settings" /><code>{"T Settings { get; private set; }"}</code> |  |
| <Link id="m-alta-enchantments-ienchantmenteffectapplication-settings" /><code>{"private "}<Link to="/game-api/types/alta-crafting/enchantmenteffect">{"EnchantmentEffect"}</Link>{" Alta.Enchantments.IEnchantmentEffectApplication.Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"virtual void Invoke(object data)"}</code> |  |
| <Link id="m-runevent" /><code>{"void RunEvent()"}</code> |  |
| <Link id="m-sendmessage" /><code>{"virtual void SendMessage("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

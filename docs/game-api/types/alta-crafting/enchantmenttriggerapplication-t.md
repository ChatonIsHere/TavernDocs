---
title: "EnchantmentTriggerApplication<T>"
description: "abstract class EnchantmentTriggerApplication<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantmentTriggerApplication&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Enchantments`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`IEnchantmentTriggerApplication`](/game-api/types/alta-crafting/ienchantmenttriggerapplication)
- **Derived types** [`QuickDrawApplication`](/game-api/types/alta-crafting/quickdrawapplication)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnchantmentTriggerApplication("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment, T settings)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-effecttype" /><code>{"private uint effectType"}</code> |  |
| <Link id="m-isapplied" /><code>{"private bool isApplied"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantmentapp" /><code><Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" EnchantmentApp { get; private set; }"}</code> |  |
| <Link id="m-settings" /><code>{"T Settings { get; private set; }"}</code> |  |
| <Link id="m-alta-enchantments-ienchantmenttriggerapplication-settings" /><code>{"private "}<Link to="/game-api/types/alta-crafting/enchantmenttrigger">{"EnchantmentTrigger"}</Link>{" Alta.Enchantments.IEnchantmentTriggerApplication.Settings { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<object> Invoked"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> |  |
| <Link id="m-callevents" /><code>{"void CallEvents("}<Link to="/game-api/types/alta-crafting/enchantmenttrigger-effecttype">{"EnchantmentTrigger.EffectType"}</Link>{" effectType)"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove()"}</code> |  |
| <Link id="m-sendmessage" /><code>{"virtual void SendMessage("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-applyinternal" /><code>{"protected abstract void ApplyInternal()"}</code> |  |
| <Link id="m-gettransformtocallat" /><code>{"private Transform GetTransformToCallAt("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-invoke" /><code>{"protected void Invoke(object data)"}</code> |  |
| <Link id="m-removeinternal" /><code>{"protected abstract void RemoveInternal()"}</code> |  |

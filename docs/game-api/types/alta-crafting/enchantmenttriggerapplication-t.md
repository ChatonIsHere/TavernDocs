---
title: "EnchantmentTriggerApplication<T>"
description: "Runtime part of an EnchantmentTrigger on one item: hooks game events when applied and fires Invoked when the trigger condition is met."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantmentTriggerApplication&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Enchantments`.

Runtime part of an `EnchantmentTrigger` on one item: hooks game events when applied and fires `Invoked` when the trigger condition is met.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`IEnchantmentTriggerApplication`](/game-api/types/alta-crafting/ienchantmenttriggerapplication)
- **Derived types** [`QuickDrawApplication`](/game-api/types/alta-crafting/quickdrawapplication)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnchantmentTriggerApplication("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment, T settings)"}</code> | Creates an `EnchantmentTriggerApplication` from `enchantment` and `settings`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effecttype" /><code>{"private uint effectType"}</code> | Last effect type (charged, cancelled, executed and so on), sent to clients in 6 bits. |
| <Link id="m-isapplied" /><code>{"private bool isApplied"}</code> | Whether `ApplyInternal` has run, so `Apply` and `Remove` only act once. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantmentapp" /><code><Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" EnchantmentApp { get; private set; }"}</code> | The enchantment this trigger belongs to. |
| <Link id="m-settings" /><code>{"T Settings { get; private set; }"}</code> | The trigger asset. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-enchantments-ienchantmenttriggerapplication-settings" /><code>{"private "}<Link to="/game-api/types/alta-crafting/enchantmenttrigger">{"EnchantmentTrigger"}</Link>{" Alta.Enchantments.IEnchantmentTriggerApplication.Settings { get; }"}</code> | The settings as a plain `EnchantmentTrigger`, for the interface. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<object> Invoked"}</code> | Fired when the trigger goes off. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | Hooks the trigger, once. |
| <Link id="m-callevents" /><code>{"void CallEvents("}<Link to="/game-api/types/alta-crafting/enchantmenttrigger-effecttype">{"EnchantmentTrigger.EffectType"}</Link>{" effectType)"}</code> | Plays the trigger's effect events (charged, executed, cancelled). The server also sends them to clients. |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | Unhooks the trigger, once. |
| <Link id="m-sendmessage" /><code>{"virtual void SendMessage("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the effect type. Clients play the events on reading. |
| <Link id="m-applyinternal" /><code>{"protected abstract void ApplyInternal()"}</code> | Subclass hook for `Apply`. |
| <Link id="m-invoke" /><code>{"protected void Invoke(object data)"}</code> | Fires `Invoked` with data such as the hit. |
| <Link id="m-removeinternal" /><code>{"protected abstract void RemoveInternal()"}</code> | Subclass hook for `Remove`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettransformtocallat" /><code>{"private Transform GetTransformToCallAt("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Returns the entity's transform. Not called in this file. |

</details>

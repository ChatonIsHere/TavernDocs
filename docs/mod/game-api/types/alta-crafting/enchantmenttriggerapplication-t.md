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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`IEnchantmentTriggerApplication`](/mod/game-api/types/alta-crafting/ienchantmenttriggerapplication)
- **Derived types** [`QuickDrawApplication`](/mod/game-api/types/alta-crafting/quickdrawapplication)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnchantmentTriggerApplication("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment, T settings)"}</code> | <span className="api-desc">Creates an `EnchantmentTriggerApplication` from `enchantment` and `settings`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effecttype" /><code>{"private uint effectType"}</code> | <span className="api-desc">Last effect type (charged, cancelled, executed and so on), sent to clients in 6 bits.</span> |
| <Link id="m-isapplied" /><code>{"private bool isApplied"}</code> | <span className="api-desc">Whether `ApplyInternal` has run, so `Apply` and `Remove` only act once.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantmentapp" /><code><Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" EnchantmentApp { get; private set; }"}</code> | <span className="api-desc">The enchantment this trigger belongs to.</span> |
| <Link id="m-settings" /><code>{"T Settings { get; private set; }"}</code> | <span className="api-desc">The trigger asset.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-enchantments-ienchantmenttriggerapplication-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/enchantmenttrigger">{"EnchantmentTrigger"}</Link>{" Alta.Enchantments.IEnchantmentTriggerApplication.Settings { get; }"}</code> | <span className="api-desc">The settings as a plain `EnchantmentTrigger`, for the interface.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<object> Invoked"}</code> | <span className="api-desc">Fired when the trigger goes off.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | <span className="api-desc">Hooks the trigger, once.</span> |
| <Link id="m-callevents" /><code>{"void CallEvents("}<Link to="/mod/game-api/types/alta-crafting/enchantmenttrigger-effecttype">{"EnchantmentTrigger.EffectType"}</Link>{" effectType)"}</code> | <span className="api-desc">Plays the trigger's effect events (charged, executed, cancelled). The server also sends them to clients.</span> |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | <span className="api-desc">Unhooks the trigger, once.</span> |
| <Link id="m-sendmessage" /><code>{"virtual void SendMessage("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the effect type. Clients play the events on reading.</span> |
| <Link id="m-applyinternal" /><code>{"protected abstract void ApplyInternal()"}</code> | <span className="api-desc">Subclass hook for `Apply`.</span> |
| <Link id="m-invoke" /><code>{"protected void Invoke(object data)"}</code> | <span className="api-desc">Fires `Invoked` with data such as the hit.</span> |
| <Link id="m-removeinternal" /><code>{"protected abstract void RemoveInternal()"}</code> | <span className="api-desc">Subclass hook for `Remove`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettransformtocallat" /><code>{"private Transform GetTransformToCallAt("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Returns the entity's transform. Not called in this file.</span> |

</details>

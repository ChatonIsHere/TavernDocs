---
title: "IEnchantmentTriggerApplication"
description: "A trigger of an enchantment applied to one enchanted object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IEnchantmentTriggerApplication

An **interface** in `Root.Township`, `Alta.Enchantments`.

A trigger of an enchantment applied to one enchanted object. It watches for its condition and raises `Invoked` when it fires.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`EnchantmentTriggerApplication<T>`](/game-api/types/alta-crafting/enchantmenttriggerapplication-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantmentapp" /><code><Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" EnchantmentApp { get; }"}</code> | The applied enchantment this trigger belongs to. |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-crafting/enchantmenttrigger">{"EnchantmentTrigger"}</Link>{" Settings { get; }"}</code> | The trigger asset. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<object> Invoked"}</code> | Raised when the trigger fires, with trigger-specific data. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | Starts watching for the trigger. Does nothing if already applied. |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | Stops watching for the trigger. |
| <Link id="m-sendmessage" /><code>{"void SendMessage("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the trigger's effect type. Remote clients then play the trigger's effects. |

## Used in

Members of other types that take, return or hold a `IEnchantmentTriggerApplication`:

[`Enchantable.SendTriggerMessage`](/game-api/types/alta-crafting/enchantable#m-sendtriggermessage), [`Enchantable.triggerApplication`](/game-api/types/alta-crafting/enchantable#m-triggerapplication), [`EnchantmentApplication.allTriggers`](/game-api/types/alta-crafting/enchantmentapplication#m-alltriggers), [`EnchantmentTrigger.CreateApplication`](/game-api/types/alta-crafting/enchantmenttrigger#m-createapplication), [`EnchantmentTrigger.CreateNew`](/game-api/types/alta-crafting/enchantmenttrigger#m-createnew), [`QuickDrawTrigger.CreateNew`](/game-api/types/alta-crafting/quickdrawtrigger#m-createnew).

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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`EnchantmentTriggerApplication<T>`](/mod/game-api/types/alta-crafting/enchantmenttriggerapplication-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantmentapp" /><code><Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" EnchantmentApp { get; }"}</code> | <span className="api-desc">The applied enchantment this trigger belongs to.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-crafting/enchantmenttrigger">{"EnchantmentTrigger"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The trigger asset.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<object> Invoked"}</code> | <span className="api-desc">Raised when the trigger fires, with trigger-specific data.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | <span className="api-desc">Starts watching for the trigger. Does nothing if already applied.</span> |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | <span className="api-desc">Stops watching for the trigger.</span> |
| <Link id="m-sendmessage" /><code>{"void SendMessage("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the trigger's effect type. Remote clients then play the trigger's effects.</span> |

## Used in

Members of other types that take, return or hold a `IEnchantmentTriggerApplication`:

<div className="api-used-in">

[`Enchantable.SendTriggerMessage`](/mod/game-api/types/alta-crafting/enchantable#m-sendtriggermessage), [`Enchantable.triggerApplication`](/mod/game-api/types/alta-crafting/enchantable#m-triggerapplication), [`EnchantmentApplication.allTriggers`](/mod/game-api/types/alta-crafting/enchantmentapplication#m-alltriggers), [`EnchantmentTrigger.CreateApplication`](/mod/game-api/types/alta-crafting/enchantmenttrigger#m-createapplication), [`EnchantmentTrigger.CreateNew`](/mod/game-api/types/alta-crafting/enchantmenttrigger#m-createnew), [`QuickDrawTrigger.CreateNew`](/mod/game-api/types/alta-crafting/quickdrawtrigger#m-createnew).

</div>

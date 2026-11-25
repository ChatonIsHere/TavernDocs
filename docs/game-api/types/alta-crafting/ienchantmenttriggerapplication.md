---
title: "IEnchantmentTriggerApplication"
description: "interface IEnchantmentTriggerApplication in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IEnchantmentTriggerApplication

An **interface** in `Root.Township`, `Alta.Enchantments`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`EnchantmentTriggerApplication<T>`](/game-api/types/alta-crafting/enchantmenttriggerapplication-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enchantmentapp" /><code><Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" EnchantmentApp { get; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-crafting/enchantmenttrigger">{"EnchantmentTrigger"}</Link>{" Settings { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<object> Invoked"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove()"}</code> |  |
| <Link id="m-sendmessage" /><code>{"void SendMessage("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IEnchantmentTriggerApplication`:

[`Enchantable.SendTriggerMessage`](/game-api/types/alta-crafting/enchantable#m-sendtriggermessage), [`Enchantable.triggerApplication`](/game-api/types/alta-crafting/enchantable#m-triggerapplication), [`EnchantmentApplication.allTriggers`](/game-api/types/alta-crafting/enchantmentapplication#m-alltriggers), [`EnchantmentTrigger.CreateApplication`](/game-api/types/alta-crafting/enchantmenttrigger#m-createapplication), [`EnchantmentTrigger.CreateNew`](/game-api/types/alta-crafting/enchantmenttrigger#m-createnew), [`QuickDrawTrigger.CreateNew`](/game-api/types/alta-crafting/quickdrawtrigger#m-createnew).

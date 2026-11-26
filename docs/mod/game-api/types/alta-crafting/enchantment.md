---
title: "Enchantment"
description: "An enchantment asset: a list of bindings, each linking triggers to the effects they cause."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Enchantment

A **class** in `Root.Township`, `Alta.Enchantments`.

An enchantment asset: a list of bindings, each linking triggers to the effects they cause.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<Enchantment>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Enchantment`](/mod/game-api/types/alta-crafting/enchantment), [`Enchantment.Create`](/mod/game-api/types/alta-crafting/enchantment-create)
- **Nested types** [`Binding`](/mod/game-api/types/alta-crafting/enchantment-binding), [`Create`](/mod/game-api/types/alta-crafting/enchantment-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Enchantment()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bindings" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/enchantment-binding">{"Enchantment.Binding"}</Link>{"[] bindings"}</code> | Backing field for `Bindings`: each binding pairs triggers with the effects they fire. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bindings-2" /><code><Link to="/mod/game-api/types/alta-crafting/enchantment-binding">{"Enchantment.Binding"}</Link>{"[] Bindings { get; }"}</code> | The trigger and effect pairs that make up the enchantment. |

## Used in

Members of other types that take, return or hold a `Enchantment`:

[`Enchantable.Add`](/mod/game-api/types/alta-crafting/enchantable#m-add), [`Enchantable.enchantments`](/mod/game-api/types/alta-crafting/enchantable#m-enchantments), [`Enchantable.Get`](/mod/game-api/types/alta-crafting/enchantable#m-get), [`Enchantable.initial`](/mod/game-api/types/alta-crafting/enchantable#m-initial), [`Enchantable.sendingEnchantment`](/mod/game-api/types/alta-crafting/enchantable#m-sendingenchantment), [`EnchantableData.enchantments`](/mod/game-api/types/alta-crafting/enchantabledata#m-enchantments), [`EnchantmentApplication.EnchantmentApplication`](/mod/game-api/types/alta-crafting/enchantmentapplication#m-ctor), [`EnchantmentApplication.Settings`](/mod/game-api/types/alta-crafting/enchantmentapplication#m-settings).

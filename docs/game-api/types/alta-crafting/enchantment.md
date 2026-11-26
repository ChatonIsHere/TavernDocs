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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<Enchantment>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Enchantment`](/game-api/types/alta-crafting/enchantment), [`Enchantment.Create`](/game-api/types/alta-crafting/enchantment-create)
- **Nested types** [`Binding`](/game-api/types/alta-crafting/enchantment-binding), [`Create`](/game-api/types/alta-crafting/enchantment-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Enchantment()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bindings" /><code>{"private "}<Link to="/game-api/types/alta-crafting/enchantment-binding">{"Enchantment.Binding"}</Link>{"[] bindings"}</code> | Backing field for `Bindings`: each binding pairs triggers with the effects they fire. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bindings-2" /><code><Link to="/game-api/types/alta-crafting/enchantment-binding">{"Enchantment.Binding"}</Link>{"[] Bindings { get; }"}</code> | The trigger and effect pairs that make up the enchantment. |

## Used in

Members of other types that take, return or hold a `Enchantment`:

[`Enchantable.Add`](/game-api/types/alta-crafting/enchantable#m-add), [`Enchantable.enchantments`](/game-api/types/alta-crafting/enchantable#m-enchantments), [`Enchantable.Get`](/game-api/types/alta-crafting/enchantable#m-get), [`Enchantable.initial`](/game-api/types/alta-crafting/enchantable#m-initial), [`Enchantable.sendingEnchantment`](/game-api/types/alta-crafting/enchantable#m-sendingenchantment), [`EnchantableData.enchantments`](/game-api/types/alta-crafting/enchantabledata#m-enchantments), [`EnchantmentApplication.EnchantmentApplication`](/game-api/types/alta-crafting/enchantmentapplication#m-ctor), [`EnchantmentApplication.Settings`](/game-api/types/alta-crafting/enchantmentapplication#m-settings).

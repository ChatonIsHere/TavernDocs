---
title: "EnchantableData"
description: "Save data for an Enchantable (save structure version 1): the enchantments on the item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnchantableData

A **class** in `Root.Township`, `Alta.Enchantments`.

Save data for an `Enchantable` (save structure version 1): the enchantments on the item.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<Enchantable, EnchantableData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Enchantable`](/game-api/types/alta-crafting/enchantable), [`EnchantableData`](/game-api/types/alta-crafting/enchantabledata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EnchantableData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-enchantments" /><code><Link to="/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{"[] enchantments"}</code> | Enchantments saved with the item. `Enchantable.Load` doesn't read them back, so only the prefab's initial ones return after a restart. |

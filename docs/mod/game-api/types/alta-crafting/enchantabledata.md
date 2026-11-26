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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<Enchantable, EnchantableData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Enchantable`](/mod/game-api/types/alta-crafting/enchantable), [`EnchantableData`](/mod/game-api/types/alta-crafting/enchantabledata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnchantableData()"}</code> | <span className="api-desc">Creates an `EnchantableData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-enchantments" /><code><Link to="/mod/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{"[] enchantments"}</code> | <span className="api-desc">Enchantments saved with the item. `Enchantable.Load` doesn't read them back, so only the prefab's initial ones return after a restart.</span> |

---
title: "ShopInterfaceItem"
description: "One row in the in-game cosmetic shop, showing an item's name and price."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopInterfaceItem

A **class** in `Root.Township`, `Alta.Customization`.

One row in the in-game cosmetic shop, showing an item's name and price. Created by `ShopInterface`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShopInterfaceItem()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-costtext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" costText"}</code> | Text showing the final price. |
| <Link id="m-nametext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" nameText"}</code> | Text showing the item name. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; private set; }"}</code> | Compressed hash of the item's SKU. |
| <Link id="m-shopitem" /><code><Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{" ShopItem { get; private set; }"}</code> | The shop item from the API that this row shows. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{" shopItem)"}</code> | Stores the shop item, hashes its SKU and fills in the name and price text. |

## Used in

Members of other types that take, return or hold a `ShopInterfaceItem`:

[`ShopInterface.currentCart`](/game-api/types/alta-customization/shopinterface#m-currentcart), [`ShopInterface.itemPrefab`](/game-api/types/alta-customization/shopinterface#m-itemprefab).

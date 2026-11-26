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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopInterfaceItem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-costtext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" costText"}</code> | <span className="api-desc">Text showing the final price.</span> |
| <Link id="m-nametext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" nameText"}</code> | <span className="api-desc">Text showing the item name.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; private set; }"}</code> | <span className="api-desc">Compressed hash of the item's SKU.</span> |
| <Link id="m-shopitem" /><code><Link to="/mod/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{" ShopItem { get; private set; }"}</code> | <span className="api-desc">The shop item from the API that this row shows.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{" shopItem)"}</code> | <span className="api-desc">Stores the shop item, hashes its SKU and fills in the name and price text.</span> |

## Used in

Members of other types that take, return or hold a `ShopInterfaceItem`:

<div className="api-used-in">

[`ShopInterface.currentCart`](/mod/game-api/types/alta-customization/shopinterface#m-currentcart), [`ShopInterface.itemPrefab`](/mod/game-api/types/alta-customization/shopinterface#m-itemprefab).

</div>

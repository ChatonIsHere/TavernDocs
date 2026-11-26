---
title: "PostboxManager.TradeVendorData"
description: "Server: coins and items gathered from one player's trade vendors during a wipe, posted to their postbox when the wipe ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostboxManager.TradeVendorData

A **class** in `Root.Township`, the global namespace.

Server: coins and items gathered from one player's trade vendors during a wipe, posted to their postbox when the wipe ends.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PostboxManager`](/mod/game-api/types/global-p/postboxmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeVendorData()"}</code> | <span className="api-desc">Creates a `PostboxManager.TradeVendorData` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{"> items"}</code> | <span className="api-desc">The saved items.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-coincount" /><code>{"int CoinCount { get; private set; }"}</code> | <span className="api-desc">Total coins collected.</span> |
| <Link id="m-entities" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{"> Entities { get; }"}</code> | <span className="api-desc">The saved objects to post: a coin pouch (or one coin) for the coins, then the items.</span> |
| <Link id="m-itemcount" /><code>{"int ItemCount { get; }"}</code> | <span className="api-desc">How many items were saved.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtradevendor" /><code>{"void AddTradeVendor(int coinCount, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dockedItem)"}</code> | <span className="api-desc">Adds a vendor's coins and saves then destroys its docked item.</span> |

## Used in

Members of other types that take, return or hold a `TradeVendorData`:

<div className="api-used-in">

[`PostboxManager.wipeData`](/mod/game-api/types/global-p/postboxmanager#m-wipedata).

</div>

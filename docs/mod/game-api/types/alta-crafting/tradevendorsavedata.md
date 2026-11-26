---
title: "TradeVendorSaveData"
description: "Save data for a TradeVendor (version 2): just the vendor's owner."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeVendorSaveData

A **class** in `Root.Township`, `Alta.Trading`.

Save data for a `TradeVendor` (version 2): just the vendor's owner.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<TradeVendor, TradeVendorSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`TradeVendor`](/mod/game-api/types/alta-crafting/tradevendor), [`TradeVendorSaveData`](/mod/game-api/types/alta-crafting/tradevendorsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeVendorSaveData()"}</code> | <span className="api-desc">Creates a `TradeVendorSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-vendorowner" /><code>{"int vendorOwner"}</code> | <span className="api-desc">User identifier of the vendor's owner, restored to `TradeVendor.Owner` on load. 0 means no owner.</span> |

## Used in

Members of other types that take, return or hold a `TradeVendorSaveData`:

<div className="api-used-in">

[`TradeVendor.Load`](/mod/game-api/types/alta-crafting/tradevendor#m-load), [`TradeVendor.Save`](/mod/game-api/types/alta-crafting/tradevendor#m-save).

</div>

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
| <Link id="m-ctor" /><code>{"TradeVendorSaveData()"}</code> | Creates a `TradeVendorSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-vendorowner" /><code>{"int vendorOwner"}</code> | User identifier of the vendor's owner, restored to `TradeVendor.Owner` on load. 0 means no owner. |

## Used in

Members of other types that take, return or hold a `TradeVendorSaveData`:

[`TradeVendor.Load`](/mod/game-api/types/alta-crafting/tradevendor#m-load), [`TradeVendor.Save`](/mod/game-api/types/alta-crafting/tradevendor#m-save).

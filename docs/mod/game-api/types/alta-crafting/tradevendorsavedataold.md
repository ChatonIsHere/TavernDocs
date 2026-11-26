---
title: "TradeVendorSaveDataOld"
description: "Old version 1 save data for a TradeVendor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeVendorSaveDataOld

A **class** in `Root.Township`, `Alta.Trading`.

Old version 1 save data for a `TradeVendor`. Migrates to `TradeVendorSaveData`, keeping only the owner.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeVendorSaveDataOld()"}</code> | <span className="api-desc">Creates a `TradeVendorSaveDataOld` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-istaxing" /><code>{"bool isTaxing"}</code> | <span className="api-desc">Old tax flag, not carried over.</span> |
| <Link id="m-vendorowner" /><code>{"int vendorOwner"}</code> | <span className="api-desc">Saved owner of the vendor.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Returns a `TradeVendorSaveData` with the owner; `isTaxing` is dropped.</span> |

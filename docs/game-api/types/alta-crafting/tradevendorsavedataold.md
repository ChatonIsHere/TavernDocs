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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeVendorSaveDataOld()"}</code> | Creates a `TradeVendorSaveDataOld` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-istaxing" /><code>{"bool isTaxing"}</code> | Old tax flag, not carried over. |
| <Link id="m-vendorowner" /><code>{"int vendorOwner"}</code> | Saved owner of the vendor. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Returns a `TradeVendorSaveData` with the owner; `isTaxing` is dropped. |

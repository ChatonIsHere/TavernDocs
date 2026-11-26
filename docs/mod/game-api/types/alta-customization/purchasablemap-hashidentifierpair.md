---
title: "PurchasableMap.HashIdentifierPair"
description: "Maps a store SKU to an item hash, for PurchasableMap.ConvertStoreSKUToHash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchasableMap.HashIdentifierPair

A **private class** in `Root.Township`, `Alta.Customization`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Maps a store SKU to an item hash, for `PurchasableMap.ConvertStoreSKUToHash`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`PurchasableMap`](/mod/game-api/types/alta-customization/purchasablemap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HashIdentifierPair()"}</code> | Creates a `PurchasableMap.HashIdentifierPair` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint hash"}</code> | The item's hash. |
| <Link id="m-sku" /><code>{"string sku"}</code> | The store SKU. |

## Used in

Members of other types that take, return or hold a `HashIdentifierPair`:

[`PurchasableMap.hashIdentifierPairs`](/mod/game-api/types/alta-customization/purchasablemap#m-hashidentifierpairs).

---
title: "PurchasableMap.CosmeticSet"
description: "A cosmetic set's hash and the item hashes it contains, stored in PurchasableMap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchasableMap.CosmeticSet

A **class** in `Root.Township`, `Alta.Customization`.

A cosmetic set's hash and the item hashes it contains, stored in `PurchasableMap`. Buying the set grants every item in it.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`PurchasableMap`](/game-api/types/alta-customization/purchasablemap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticSet()"}</code> | Creates a `PurchasableMap.CosmeticSet` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-itemhashes" /><code>{"uint[] itemHashes"}</code> | Hashes of the items in the set. |
| <Link id="m-sethash" /><code>{"uint setHash"}</code> | The set's own hash. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Two sets are equal when their set hashes match. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash based on `setHash`. |

## Used in

Members of other types that take, return or hold a `CosmeticSet`:

[`PurchasableMap.sets`](/game-api/types/alta-customization/purchasablemap#m-sets).

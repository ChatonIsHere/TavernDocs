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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`PurchasableMap`](/mod/game-api/types/alta-customization/purchasablemap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticSet()"}</code> | <span className="api-desc">Creates a `PurchasableMap.CosmeticSet` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-itemhashes" /><code>{"uint[] itemHashes"}</code> | <span className="api-desc">Hashes of the items in the set.</span> |
| <Link id="m-sethash" /><code>{"uint setHash"}</code> | <span className="api-desc">The set's own hash.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Two sets are equal when their set hashes match.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash based on `setHash`.</span> |

## Used in

Members of other types that take, return or hold a `CosmeticSet`:

<div className="api-used-in">

[`PurchasableMap.sets`](/mod/game-api/types/alta-customization/purchasablemap#m-sets).

</div>

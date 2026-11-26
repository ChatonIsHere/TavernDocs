---
title: "PurchasableMap.CosmeticCategory"
description: "A cosmetic category and the item hashes in it, stored in PurchasableMap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchasableMap.CosmeticCategory

A **class** in `Root.Township`, `Alta.Customization`.

A cosmetic category and the item hashes in it, stored in `PurchasableMap`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`PurchasableMap`](/game-api/types/alta-customization/purchasablemap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticCategory()"}</code> | Creates a `PurchasableMap.CosmeticCategory` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-itemhashes" /><code>{"uint[] itemHashes"}</code> | Hashes of the items in the category. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" category"}</code> | Backing field for `Category`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category-2" /><code><Link to="/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{" Category { get; set; }"}</code> | The category, as an `ICustomizationCategory`. Setting it casts to `PlayerCosmeticCategory`. |

## Used in

Members of other types that take, return or hold a `CosmeticCategory`:

[`PurchasableMap.categories`](/game-api/types/alta-customization/purchasablemap#m-categories).

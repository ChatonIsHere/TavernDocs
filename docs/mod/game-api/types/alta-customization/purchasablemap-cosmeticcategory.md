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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`PurchasableMap`](/mod/game-api/types/alta-customization/purchasablemap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticCategory()"}</code> | <span className="api-desc">Creates a `PurchasableMap.CosmeticCategory` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-itemhashes" /><code>{"uint[] itemHashes"}</code> | <span className="api-desc">Hashes of the items in the category.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" category"}</code> | <span className="api-desc">Backing field for `Category`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category-2" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{" Category { get; set; }"}</code> | <span className="api-desc">The category, as an `ICustomizationCategory`. Setting it casts to `PlayerCosmeticCategory`.</span> |

## Used in

Members of other types that take, return or hold a `CosmeticCategory`:

<div className="api-used-in">

[`PurchasableMap.categories`](/mod/game-api/types/alta-customization/purchasablemap#m-categories).

</div>

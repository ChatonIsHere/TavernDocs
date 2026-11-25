---
title: "PlayerCosmeticCategory"
description: "class PlayerCosmeticCategory in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCosmeticCategory

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationCategory`](/game-api/types/alta-customization/customizationcategory)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCosmeticCategory()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allcategories" /><code>{"private static "}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] allCategories"}</code> |  |
| <Link id="m-categoriesfolder" /><code>{"private const string CategoriesFolder"}</code> |  |
| <Link id="m-flatnullchance" /><code>{"private float flatNullChance"}</code> |  |
| <Link id="m-nullelementweight" /><code>{"private float nullElementWeight"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allcategories-2" /><code>{"static "}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] AllCategories { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"override uint GetRandom(ICollection<uint> items, bool canUseNonOwnedItems)"}</code> |  |
| <Link id="m-getrandom-2" /><code>{"override "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" GetRandom(ICollection<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> items)"}</code> |  |
| <Link id="m-loadallcategories" /><code>{"private static void LoadAllCategories()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerCosmeticCategory`:

[`CategoryScrollElement.Category`](/game-api/types/alta-customization/categoryscrollelement#m-category), [`CategoryScrollManager.available`](/game-api/types/alta-customization/categoryscrollmanager#m-available), [`CategoryScrollManager.categories`](/game-api/types/alta-customization/categoryscrollmanager#m-categories), [`CategoryScrollManager.GetAllCategories`](/game-api/types/alta-customization/categoryscrollmanager#m-getallcategories), [`CategoryScrollManager.GetAvailableCategories`](/game-api/types/alta-customization/categoryscrollmanager#m-getavailablecategories), [`CosmeticOwnershipManager.available`](/game-api/types/alta-customization/cosmeticownershipmanager#m-available), [`CosmeticOwnershipManager.Available`](/game-api/types/alta-customization/cosmeticownershipmanager#m-available-2), [`CosmeticOwnershipManager.GetCategoryOptions`](/game-api/types/alta-customization/cosmeticownershipmanager#m-getcategoryoptions), [`CosmeticOwnershipManager.owned`](/game-api/types/alta-customization/cosmeticownershipmanager#m-owned), [`CosmeticOwnershipManager.Owned`](/game-api/types/alta-customization/cosmeticownershipmanager#m-owned-2), [`CosmeticScrollManager.currentCategory`](/game-api/types/alta-customization/cosmeticscrollmanager#m-currentcategory), [`CosmeticScrollManager.initialCategory`](/game-api/types/alta-customization/cosmeticscrollmanager#m-initialcategory), [`CosmeticScrollManager.UpdateCategory`](/game-api/types/alta-customization/cosmeticscrollmanager#m-updatecategory), [`PurchasableMap.GetItemCategory`](/game-api/types/alta-customization/purchasablemap#m-getitemcategory), [`PurchasableMap.CosmeticCategory.category`](/game-api/types/alta-customization/purchasablemap-cosmeticcategory#m-category), [`PlayerLikeSpectralGhost.owned`](/game-api/types/alta-intelligence/playerlikespectralghost#m-owned).

---
title: "PlayerCosmeticCategory"
description: "A category of player cosmetics (a slot such as a hat or shirt), loaded from Resources/Cosmetic Categories."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCosmeticCategory

A **class** in `Root.Township`, `Alta.Customization`.

A category of player cosmetics (a slot such as a hat or shirt), loaded from `Resources/Cosmetic Categories`. Picks random items for random outfits.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationCategory`](/game-api/types/alta-customization/customizationcategory)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerCosmeticCategory()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-allcategories" /><code>{"private static "}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] allCategories"}</code> |
| <Link id="m-categoriesfolder" /><code>{"private const string CategoriesFolder"}</code> |
| <Link id="m-flatnullchance" /><code>{"private float flatNullChance"}</code> |
| <Link id="m-nullelementweight" /><code>{"private float nullElementWeight"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allcategories-2" /><code>{"static "}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] AllCategories { get; }"}</code> | Every active category, sorted by priority. Loaded once, or every time in the editor. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"override uint GetRandom(ICollection<uint> items, bool canUseNonOwnedItems)"}</code> | Picks a random item, or none by the category's null chances. The ID version only picks owned items, or available ones if allowed. |
| <Link id="m-getrandom-2" /><code>{"override "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" GetRandom(ICollection<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> items)"}</code> | Picks a random item, or none by the category's null chances. The ID version only picks owned items, or available ones if allowed. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-loadallcategories" /><code>{"private static void LoadAllCategories()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerCosmeticCategory`:

[`CategoryScrollElement.Category`](/game-api/types/alta-customization/categoryscrollelement#m-category), [`CategoryScrollManager.available`](/game-api/types/alta-customization/categoryscrollmanager#m-available), [`CategoryScrollManager.categories`](/game-api/types/alta-customization/categoryscrollmanager#m-categories), [`CategoryScrollManager.GetAllCategories`](/game-api/types/alta-customization/categoryscrollmanager#m-getallcategories), [`CategoryScrollManager.GetAvailableCategories`](/game-api/types/alta-customization/categoryscrollmanager#m-getavailablecategories), [`CosmeticOwnershipManager.available`](/game-api/types/alta-customization/cosmeticownershipmanager#m-available), [`CosmeticOwnershipManager.Available`](/game-api/types/alta-customization/cosmeticownershipmanager#m-available-2), [`CosmeticOwnershipManager.GetCategoryOptions`](/game-api/types/alta-customization/cosmeticownershipmanager#m-getcategoryoptions), [`CosmeticOwnershipManager.owned`](/game-api/types/alta-customization/cosmeticownershipmanager#m-owned), [`CosmeticOwnershipManager.Owned`](/game-api/types/alta-customization/cosmeticownershipmanager#m-owned-2), [`CosmeticScrollManager.currentCategory`](/game-api/types/alta-customization/cosmeticscrollmanager#m-currentcategory), [`CosmeticScrollManager.initialCategory`](/game-api/types/alta-customization/cosmeticscrollmanager#m-initialcategory), [`CosmeticScrollManager.UpdateCategory`](/game-api/types/alta-customization/cosmeticscrollmanager#m-updatecategory), [`PurchasableMap.GetItemCategory`](/game-api/types/alta-customization/purchasablemap#m-getitemcategory), [`PurchasableMap.CosmeticCategory.category`](/game-api/types/alta-customization/purchasablemap-cosmeticcategory#m-category), [`PlayerLikeSpectralGhost.owned`](/game-api/types/alta-intelligence/playerlikespectralghost#m-owned).

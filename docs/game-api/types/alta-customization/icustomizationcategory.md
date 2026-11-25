---
title: "ICustomizationCategory"
description: "A category of customization items, such as a cosmetic slot, as shown in the customization menus."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationCategory

An **interface** in `Root.Township`, `Alta.Customization`.

A category of customization items, such as a cosmetic slot, as shown in the customization menus.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`CustomizationCategory`](/game-api/types/alta-customization/customizationcategory)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-icon" /><code>{"Sprite Icon { get; }"}</code> | The category's menu icon. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | Whether the category is used at all. Inactive ones aren't loaded. |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; }"}</code> | Whether the category is shown in the customization menu. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The category's name. |
| <Link id="m-pickupscale" /><code>{"float PickupScale { get; }"}</code> | Scale applied to this category's items when shown as pickups. |
| <Link id="m-priority" /><code>{"int Priority { get; }"}</code> | Sort order. Lower comes first. |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" Type { get; }"}</code> | The category's item category in the Alta API. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"uint GetRandom(ICollection<uint> items, bool canUseNonOwnedItems)"}</code> | Picks a random item from a collection, or none. |
| <Link id="m-getrandom-2" /><code><Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" GetRandom(ICollection<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> items)"}</code> | Picks a random item from a collection, or none. |
| <Link id="m-setpickupscale" /><code>{"void SetPickupScale(float scale)"}</code> | Sets `PickupScale`. |

## Used in

Members of other types that take, return or hold a `ICustomizationCategory`:

[`CustomizationSettings.DebugCategoryWhitelist`](/game-api/types/alta-customization/customizationsettings#m-debugcategorywhitelist-2), [`ICustomizationDefinition.Category`](/game-api/types/alta-customization/icustomizationdefinition#m-category), [`PlayerCosmeticDefinition.Category`](/game-api/types/alta-customization/playercosmeticdefinition#m-category-2), [`PlayerEquipmentDefinition.Category`](/game-api/types/alta-customization/playerequipmentdefinition#m-category-2), [`PurchasableMap.categoryMap`](/game-api/types/alta-customization/purchasablemap#m-categorymap), [`PurchasableMap.CosmeticCategory.Category`](/game-api/types/alta-customization/purchasablemap-cosmeticcategory#m-category-2).

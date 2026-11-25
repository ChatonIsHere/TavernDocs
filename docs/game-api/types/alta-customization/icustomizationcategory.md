---
title: "ICustomizationCategory"
description: "interface ICustomizationCategory in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationCategory

An **interface** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`CustomizationCategory`](/game-api/types/alta-customization/customizationcategory)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-icon" /><code>{"Sprite Icon { get; }"}</code> |  |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> |  |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-pickupscale" /><code>{"float PickupScale { get; }"}</code> |  |
| <Link id="m-priority" /><code>{"int Priority { get; }"}</code> |  |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" Type { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"uint GetRandom(ICollection<uint> items, bool canUseNonOwnedItems)"}</code> |  |
| <Link id="m-getrandom-2" /><code><Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" GetRandom(ICollection<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> items)"}</code> |  |
| <Link id="m-setpickupscale" /><code>{"void SetPickupScale(float scale)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ICustomizationCategory`:

[`CustomizationSettings.DebugCategoryWhitelist`](/game-api/types/alta-customization/customizationsettings#m-debugcategorywhitelist-2), [`ICustomizationDefinition.Category`](/game-api/types/alta-customization/icustomizationdefinition#m-category), [`PlayerCosmeticDefinition.Category`](/game-api/types/alta-customization/playercosmeticdefinition#m-category-2), [`PlayerEquipmentDefinition.Category`](/game-api/types/alta-customization/playerequipmentdefinition#m-category-2), [`PurchasableMap.categoryMap`](/game-api/types/alta-customization/purchasablemap#m-categorymap), [`PurchasableMap.CosmeticCategory.Category`](/game-api/types/alta-customization/purchasablemap-cosmeticcategory#m-category-2).

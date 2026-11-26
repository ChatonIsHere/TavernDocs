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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Derived types** [`CustomizationCategory`](/mod/game-api/types/alta-customization/customizationcategory)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-icon" /><code>{"Sprite Icon { get; }"}</code> | <span className="api-desc">The category's menu icon.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | <span className="api-desc">Whether the category is used at all. Inactive ones aren't loaded.</span> |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; }"}</code> | <span className="api-desc">Whether the category is shown in the customization menu.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The category's name.</span> |
| <Link id="m-pickupscale" /><code>{"float PickupScale { get; }"}</code> | <span className="api-desc">Scale applied to this category's items when shown as pickups.</span> |
| <Link id="m-priority" /><code>{"int Priority { get; }"}</code> | <span className="api-desc">Sort order. Lower comes first.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" Type { get; }"}</code> | <span className="api-desc">The category's item category in the Alta API.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"uint GetRandom(ICollection<uint> items, bool canUseNonOwnedItems)"}</code> | <span className="api-desc">Picks a random item from a collection, or none.</span> |
| <Link id="m-getrandom-2" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" GetRandom(ICollection<"}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> items)"}</code> | <span className="api-desc">Picks a random item from a collection, or none.</span> |
| <Link id="m-setpickupscale" /><code>{"void SetPickupScale(float scale)"}</code> | <span className="api-desc">Sets `PickupScale`.</span> |

## Used in

Members of other types that take, return or hold a `ICustomizationCategory`:

<div className="api-used-in">

[`CustomizationSettings.DebugCategoryWhitelist`](/mod/game-api/types/alta-customization/customizationsettings#m-debugcategorywhitelist-2), [`ICustomizationDefinition.Category`](/mod/game-api/types/alta-customization/icustomizationdefinition#m-category), [`PlayerCosmeticDefinition.Category`](/mod/game-api/types/alta-customization/playercosmeticdefinition#m-category-2), [`PlayerEquipmentDefinition.Category`](/mod/game-api/types/alta-customization/playerequipmentdefinition#m-category-2), [`PurchasableMap.categoryMap`](/mod/game-api/types/alta-customization/purchasablemap#m-categorymap), [`PurchasableMap.CosmeticCategory.Category`](/mod/game-api/types/alta-customization/purchasablemap-cosmeticcategory#m-category-2).

</div>

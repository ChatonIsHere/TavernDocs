---
title: "CustomizationCategory"
description: "abstract class CustomizationCategory in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationCategory

An **abstract class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`, [`ICustomizationCategory`](/game-api/types/alta-customization/icustomizationcategory)
- **Derived types** [`PlayerCosmeticCategory`](/game-api/types/alta-customization/playercosmeticcategory), [`PlayerEquipmentCategory`](/game-api/types/alta-customization/playerequipmentcategory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CustomizationCategory()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-icon" /><code>{"private Sprite icon"}</code> |  |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |  |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> |  |
| <Link id="m-pickupscale" /><code>{"private float pickupScale"}</code> |  |
| <Link id="m-priority" /><code>{"private int priority"}</code> |  |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" type"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-icon-2" /><code>{"Sprite Icon { get; }"}</code> |  |
| <Link id="m-isactive-2" /><code>{"bool IsActive { get; }"}</code> |  |
| <Link id="m-isvisible-2" /><code>{"bool IsVisible { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-pickupscale-2" /><code>{"float PickupScale { get; }"}</code> |  |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> |  |
| <Link id="m-type-2" /><code><Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" Type { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"abstract uint GetRandom(ICollection<uint> items, bool canUseNonOwnedItems)"}</code> |  |
| <Link id="m-getrandom-2" /><code>{"abstract "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" GetRandom(ICollection<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> items)"}</code> |  |
| <Link id="m-setpickupscale" /><code>{"void SetPickupScale(float scale)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CustomizationCategory`:

[`CustomizationSettings.debugCategoryWhitelist`](/game-api/types/alta-customization/customizationsettings#m-debugcategorywhitelist), [`DefaultCosmeticInfo.category`](/game-api/types/alta-customization/defaultcosmeticinfo#m-category), [`DefaultCosmeticInfo.Category`](/game-api/types/alta-customization/defaultcosmeticinfo#m-category-2), [`DefaultCosmeticInfo.DefaultCosmeticInfo`](/game-api/types/alta-customization/defaultcosmeticinfo#m-ctor-2), [`PlayerCosmeticDefinition.category`](/game-api/types/alta-customization/playercosmeticdefinition#m-category), [`PlayerEquipmentDefinition.category`](/game-api/types/alta-customization/playerequipmentdefinition#m-category).

---
title: "CustomizationCategory"
description: "Asset for one cosmetic category (hair, hats and so on) in the character customizer: its database item category, ordering, icon and how random picks are made."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationCategory

An **abstract class** in `Root.Township`, `Alta.Customization`.

Asset for one cosmetic category (hair, hats and so on) in the character customizer: its database item category, ordering, icon and how random picks are made.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`, [`ICustomizationCategory`](/game-api/types/alta-customization/icustomizationcategory)
- **Derived types** [`PlayerCosmeticCategory`](/game-api/types/alta-customization/playercosmeticcategory), [`PlayerEquipmentCategory`](/game-api/types/alta-customization/playerequipmentcategory)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected CustomizationCategory()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-icon" /><code>{"private Sprite icon"}</code> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> |
| <Link id="m-pickupscale" /><code>{"private float pickupScale"}</code> |
| <Link id="m-priority" /><code>{"private int priority"}</code> |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" type"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-icon-2" /><code>{"Sprite Icon { get; }"}</code> | Icon for the category on the selection panel. |
| <Link id="m-isactive-2" /><code>{"bool IsActive { get; }"}</code> | If false, the category is left out of the selection panel and of randomizing. |
| <Link id="m-isvisible-2" /><code>{"bool IsVisible { get; }"}</code> | Whether the category is shown. True by default. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The asset's name. |
| <Link id="m-pickupscale-2" /><code>{"float PickupScale { get; }"}</code> | Scale applied to a cosmetic of this category when shown as a pickup. |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> | Sort order on the selection panel. |
| <Link id="m-type-2" /><code><Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" Type { get; }"}</code> | The item category this maps to in the Alta API data. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"abstract uint GetRandom(ICollection<uint> items, bool canUseNonOwnedItems)"}</code> | Subclass: picks a random item from a set of item hashes (optionally only owned ones) or definitions. |
| <Link id="m-getrandom-2" /><code>{"abstract "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" GetRandom(ICollection<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> items)"}</code> | Subclass: picks a random item from a set of item hashes (optionally only owned ones) or definitions. |
| <Link id="m-setpickupscale" /><code>{"void SetPickupScale(float scale)"}</code> | Changes the pickup scale. |

## Used in

Members of other types that take, return or hold a `CustomizationCategory`:

[`CustomizationSettings.debugCategoryWhitelist`](/game-api/types/alta-customization/customizationsettings#m-debugcategorywhitelist), [`DefaultCosmeticInfo.category`](/game-api/types/alta-customization/defaultcosmeticinfo#m-category), [`DefaultCosmeticInfo.Category`](/game-api/types/alta-customization/defaultcosmeticinfo#m-category-2), [`DefaultCosmeticInfo.DefaultCosmeticInfo`](/game-api/types/alta-customization/defaultcosmeticinfo#m-ctor-2), [`PlayerCosmeticDefinition.category`](/game-api/types/alta-customization/playercosmeticdefinition#m-category), [`PlayerEquipmentDefinition.category`](/game-api/types/alta-customization/playerequipmentdefinition#m-category).

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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`, [`ICustomizationCategory`](/mod/game-api/types/alta-customization/icustomizationcategory)
- **Derived types** [`PlayerCosmeticCategory`](/mod/game-api/types/alta-customization/playercosmeticcategory), [`PlayerEquipmentCategory`](/mod/game-api/types/alta-customization/playerequipmentcategory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CustomizationCategory()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-icon" /><code>{"private Sprite icon"}</code> | <span className="api-desc">Icon for the category on the selection panel.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">When off, the category is left off the selection panel and out of randomizing.</span> |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> | <span className="api-desc">Whether the category shows in the category scroll list.</span> |
| <Link id="m-pickupscale" /><code>{"private float pickupScale"}</code> | <span className="api-desc">Scale for cosmetic pickups of this category.</span> |
| <Link id="m-priority" /><code>{"private int priority"}</code> | <span className="api-desc">Order of the category on the selection panel.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" type"}</code> | <span className="api-desc">The shop item category this maps to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-icon-2" /><code>{"Sprite Icon { get; }"}</code> | <span className="api-desc">Icon for the category on the selection panel.</span> |
| <Link id="m-isactive-2" /><code>{"bool IsActive { get; }"}</code> | <span className="api-desc">If false, the category is left out of the selection panel and of randomizing.</span> |
| <Link id="m-isvisible-2" /><code>{"bool IsVisible { get; }"}</code> | <span className="api-desc">Whether the category is shown. True by default.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The asset's name.</span> |
| <Link id="m-pickupscale-2" /><code>{"float PickupScale { get; }"}</code> | <span className="api-desc">Scale applied to a cosmetic of this category when shown as a pickup.</span> |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> | <span className="api-desc">Sort order on the selection panel.</span> |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" Type { get; }"}</code> | <span className="api-desc">The item category this maps to in the Alta API data.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"abstract uint GetRandom(ICollection<uint> items, bool canUseNonOwnedItems)"}</code> | <span className="api-desc">Subclass: picks a random item from a set of item hashes (optionally only owned ones) or definitions.</span> |
| <Link id="m-getrandom-2" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" GetRandom(ICollection<"}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> items)"}</code> | <span className="api-desc">Subclass: picks a random item from a set of item hashes (optionally only owned ones) or definitions.</span> |
| <Link id="m-setpickupscale" /><code>{"void SetPickupScale(float scale)"}</code> | <span className="api-desc">Changes the pickup scale.</span> |

## Used in

Members of other types that take, return or hold a `CustomizationCategory`:

<div className="api-used-in">

[`CustomizationSettings.debugCategoryWhitelist`](/mod/game-api/types/alta-customization/customizationsettings#m-debugcategorywhitelist), [`DefaultCosmeticInfo.category`](/mod/game-api/types/alta-customization/defaultcosmeticinfo#m-category), [`DefaultCosmeticInfo.Category`](/mod/game-api/types/alta-customization/defaultcosmeticinfo#m-category-2), [`DefaultCosmeticInfo.DefaultCosmeticInfo`](/mod/game-api/types/alta-customization/defaultcosmeticinfo#m-ctor-2), [`PlayerCosmeticDefinition.category`](/mod/game-api/types/alta-customization/playercosmeticdefinition#m-category), [`PlayerEquipmentDefinition.category`](/mod/game-api/types/alta-customization/playerequipmentdefinition#m-category).

</div>

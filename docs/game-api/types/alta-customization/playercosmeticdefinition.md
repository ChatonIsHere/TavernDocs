---
title: "PlayerCosmeticDefinition"
description: "A purchasable cosmetic asset: its category, pickup and visual prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCosmeticDefinition

A **class** in `Root.Township`, `Alta.Customization`.

A purchasable cosmetic asset: its category, pickup and visual prefab.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`Purchasable`](/game-api/types/alta-customization/purchasable), [`ICustomizationDefinition`](/game-api/types/alta-customization/icustomizationdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerCosmeticDefinition()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-category" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" pickup"}</code> |
| <Link id="m-pickuptype" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" pickupType"}</code> |
| <Link id="m-uiselectionboardscale" /><code>{"private float uiSelectionBoardScale"}</code> |
| <Link id="m-visualprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationvisual">{"CustomizationVisual"}</Link>{" visualPrefab"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category-2" /><code><Link to="/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{" Category { get; set; }"}</code> | The cosmetic's category. The setter only works in the editor, and as written it throws even after a valid set. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The display name. |
| <Link id="m-pickuptype-2" /><code><Link to="/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" PickupType { get; }"}</code> | What kind of pickup this cosmetic uses. |
| <Link id="m-uiselectionboardscale-2" /><code>{"float UISelectionBoardScale { get; }"}</code> | Scale of the item on the customization selection board. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] CreateDefaultArguments()"}</code> | Default customization arguments for each part of the visual. |
| <Link id="m-getvisual" /><code><Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" GetVisual()"}</code> | Points the visual prefab at this definition, initializes it and returns it. |
| <Link id="m-spawnpickup" /><code><Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" SpawnPickup("}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | Spawns the cosmetic's pickup with the given arguments under a parent. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Type, category and name, for logs. |

## Used in

Members of other types that take, return or hold a `PlayerCosmeticDefinition`:

[`CategoryScrollManager.purchased`](/game-api/types/alta-customization/categoryscrollmanager#m-purchased), [`CosmeticPresetTrophy.standardBody`](/game-api/types/alta-customization/cosmeticpresettrophy#m-standardbody), [`CosmeticPresetTrophy.trophyBody`](/game-api/types/alta-customization/cosmeticpresettrophy#m-trophybody), [`DefaultCosmeticInfo.DefaultCosmeticInfo`](/game-api/types/alta-customization/defaultcosmeticinfo#m-ctor-2), [`DefaultCosmeticInfo.definition`](/game-api/types/alta-customization/defaultcosmeticinfo#m-definition), [`PlayerCosmeticWrapper.GetItem`](/game-api/types/alta-customization/playercosmeticwrapper#m-getitem-2), [`ModellingCharacter.Definition.asset`](/game-api/types/global-m-o/modellingcharacter-definition#m-asset), [`ModellingCharacter.FreeDefinition.asset`](/game-api/types/global-m-o/modellingcharacter-freedefinition#m-asset).

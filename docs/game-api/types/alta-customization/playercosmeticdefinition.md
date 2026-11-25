---
title: "PlayerCosmeticDefinition"
description: "A Purchasable (ScriptableObject loaded through Addressables) with a Hash, Sku, DisplayName, category and visual."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCosmeticDefinition

A **class** in `Root.Township`, `Alta.Customization`.

A `Purchasable` (`ScriptableObject` loaded through Addressables) with a `Hash`, `Sku`, `DisplayName`, category and visual.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`Purchasable`](/game-api/types/alta-customization/purchasable), [`ICustomizationDefinition`](/game-api/types/alta-customization/icustomizationdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCosmeticDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-pickuptype" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" pickupType"}</code> |  |
| <Link id="m-uiselectionboardscale" /><code>{"private float uiSelectionBoardScale"}</code> |  |
| <Link id="m-visualprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationvisual">{"CustomizationVisual"}</Link>{" visualPrefab"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category-2" /><code><Link to="/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{" Category { get; set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-pickuptype-2" /><code><Link to="/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" PickupType { get; }"}</code> |  |
| <Link id="m-uiselectionboardscale-2" /><code>{"float UISelectionBoardScale { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] CreateDefaultArguments()"}</code> |  |
| <Link id="m-getvisual" /><code><Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" GetVisual()"}</code> |  |
| <Link id="m-spawnpickup" /><code><Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" SpawnPickup("}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerCosmeticDefinition`:

[`CategoryScrollManager.purchased`](/game-api/types/alta-customization/categoryscrollmanager#m-purchased), [`CosmeticPresetTrophy.standardBody`](/game-api/types/alta-customization/cosmeticpresettrophy#m-standardbody), [`CosmeticPresetTrophy.trophyBody`](/game-api/types/alta-customization/cosmeticpresettrophy#m-trophybody), [`DefaultCosmeticInfo.DefaultCosmeticInfo`](/game-api/types/alta-customization/defaultcosmeticinfo#m-ctor-2), [`DefaultCosmeticInfo.definition`](/game-api/types/alta-customization/defaultcosmeticinfo#m-definition), [`PlayerCosmeticWrapper.GetItem`](/game-api/types/alta-customization/playercosmeticwrapper#m-getitem-2), [`ModellingCharacter.Definition.asset`](/game-api/types/global-m-o/modellingcharacter-definition#m-asset), [`ModellingCharacter.FreeDefinition.asset`](/game-api/types/global-m-o/modellingcharacter-freedefinition#m-asset).

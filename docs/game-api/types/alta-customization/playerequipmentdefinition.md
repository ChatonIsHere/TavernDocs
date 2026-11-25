---
title: "PlayerEquipmentDefinition"
description: "HashedGeneralValue<PlayerEquipmentDefinition>: an armour piece's look, with its ArmorDefinition and ArmorSlot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEquipmentDefinition

A **class** in `Root.Township`, `Alta.Customization`.

`HashedGeneralValue<PlayerEquipmentDefinition>`: an armour piece's look, with its `ArmorDefinition` and `ArmorSlot`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`HashedGeneralValue<PlayerEquipmentDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t), [`ICustomizationDefinition`](/game-api/types/alta-customization/icustomizationdefinition)
- **Derived types** [`PlayerEquipmentDefinition`](/game-api/types/alta-customization/playerequipmentdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEquipmentDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-armordefinition" /><code>{"private "}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" armorDefinition"}</code> |  |
| <Link id="m-armorslot" /><code>{"private "}<Link to="/game-api/types/alta-customization/equipmentslot">{"EquipmentSlot"}</Link>{" armorSlot"}</code> |  |
| <Link id="m-category" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-pickuptype" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" pickupType"}</code> |  |
| <Link id="m-visualprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationvisual">{"CustomizationVisual"}</Link>{" visualPrefab"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armordefinition-2" /><code><Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" "}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" { get; }"}</code> |  |
| <Link id="m-armorslot-2" /><code><Link to="/game-api/types/alta-customization/equipmentslot">{"EquipmentSlot"}</Link>{" ArmorSlot { get; }"}</code> |  |
| <Link id="m-category-2" /><code><Link to="/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{" Category { get; set; }"}</code> |  |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-pickuptype-2" /><code><Link to="/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" PickupType { get; }"}</code> |  |
| <Link id="m-uiselectionboardscale" /><code>{"float UISelectionBoardScale { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] CreateDefaultArguments()"}</code> |  |
| <Link id="m-getvisual" /><code><Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" GetVisual()"}</code> |  |
| <Link id="m-release" /><code>{"void Release()"}</code> |  |
| <Link id="m-spawnpickup" /><code><Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" SpawnPickup("}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

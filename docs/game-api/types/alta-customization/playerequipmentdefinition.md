---
title: "PlayerEquipmentDefinition"
description: "Definition asset for a wearable piece of equipment: its pickup, visual, category and armour slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEquipmentDefinition

A **class** in `Root.Township`, `Alta.Customization`.

Definition asset for a wearable piece of equipment: its pickup, visual, category and armour slot. Seems left over from the removed equipment system; `Hash` is always 0 and `UISelectionBoardScale` throws.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`HashedGeneralValue<PlayerEquipmentDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t), [`ICustomizationDefinition`](/game-api/types/alta-customization/icustomizationdefinition)
- **Derived types** [`PlayerEquipmentDefinition`](/game-api/types/alta-customization/playerequipmentdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEquipmentDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armordefinition" /><code>{"private "}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" armorDefinition"}</code> | Armor stats this equipment gives. |
| <Link id="m-armorslot" /><code>{"private "}<Link to="/game-api/types/alta-customization/equipmentslot">{"EquipmentSlot"}</Link>{" armorSlot"}</code> | Body slot the armor goes in. |
| <Link id="m-category" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category"}</code> | Customization category it belongs to. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" pickup"}</code> | Pickup prefab spawned for this equipment. |
| <Link id="m-pickuptype" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" pickupType"}</code> | Kind of cosmetic pickup. |
| <Link id="m-visualprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationvisual">{"CustomizationVisual"}</Link>{" visualPrefab"}</code> | Visual put on the player when worn; also supplies the default arguments. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armordefinition-2" /><code><Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" "}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" { get; }"}</code> | Armour stats for this equipment. |
| <Link id="m-armorslot-2" /><code><Link to="/game-api/types/alta-customization/equipmentslot">{"EquipmentSlot"}</Link>{" ArmorSlot { get; }"}</code> | Which equipment slot it goes in. |
| <Link id="m-category-2" /><code><Link to="/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{" Category { get; set; }"}</code> | Customization category. Can only be set in the editor. |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | Always 0, hiding the asset hash. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The asset's name. |
| <Link id="m-pickuptype-2" /><code><Link to="/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" PickupType { get; }"}</code> | The cosmetic pickup type. |
| <Link id="m-uiselectionboardscale" /><code>{"float UISelectionBoardScale { get; }"}</code> | Not implemented. Always throws `NotImplementedException`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] CreateDefaultArguments()"}</code> | Default customization arguments from the visual prefab. |
| <Link id="m-getvisual" /><code><Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" GetVisual()"}</code> | Initializes and returns the visual prefab for this definition. Not a new copy. |
| <Link id="m-release" /><code>{"void Release()"}</code> | Does nothing. |
| <Link id="m-spawnpickup" /><code><Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" SpawnPickup("}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | Spawns the customization pickup under a parent with the given arguments. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Type, category and name as text. |

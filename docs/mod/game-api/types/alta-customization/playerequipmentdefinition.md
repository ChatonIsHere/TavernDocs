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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`HashedGeneralValue<PlayerEquipmentDefinition>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t), [`ICustomizationDefinition`](/mod/game-api/types/alta-customization/icustomizationdefinition)
- **Derived types** [`PlayerEquipmentDefinition`](/mod/game-api/types/alta-customization/playerequipmentdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Customization](/mod/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEquipmentDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armordefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" armorDefinition"}</code> | <span className="api-desc">Armor stats this equipment gives.</span> |
| <Link id="m-armorslot" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/equipmentslot">{"EquipmentSlot"}</Link>{" armorSlot"}</code> | <span className="api-desc">Body slot the armor goes in.</span> |
| <Link id="m-category" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category"}</code> | <span className="api-desc">Customization category it belongs to.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" pickup"}</code> | <span className="api-desc">Pickup prefab spawned for this equipment.</span> |
| <Link id="m-pickuptype" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" pickupType"}</code> | <span className="api-desc">Kind of cosmetic pickup.</span> |
| <Link id="m-visualprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationvisual">{"CustomizationVisual"}</Link>{" visualPrefab"}</code> | <span className="api-desc">Visual put on the player when worn; also supplies the default arguments.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armordefinition-2" /><code><Link to="/mod/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" { get; }"}</code> | <span className="api-desc">Armour stats for this equipment.</span> |
| <Link id="m-armorslot-2" /><code><Link to="/mod/game-api/types/alta-customization/equipmentslot">{"EquipmentSlot"}</Link>{" ArmorSlot { get; }"}</code> | <span className="api-desc">Which equipment slot it goes in.</span> |
| <Link id="m-category-2" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{" Category { get; set; }"}</code> | <span className="api-desc">Customization category. Can only be set in the editor.</span> |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">Always 0, hiding the asset hash.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The asset's name.</span> |
| <Link id="m-pickuptype-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" PickupType { get; }"}</code> | <span className="api-desc">The cosmetic pickup type.</span> |
| <Link id="m-uiselectionboardscale" /><code>{"float UISelectionBoardScale { get; }"}</code> | <span className="api-desc">Not implemented. Always throws `NotImplementedException`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code><Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] CreateDefaultArguments()"}</code> | <span className="api-desc">Default customization arguments from the visual prefab.</span> |
| <Link id="m-getvisual" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" GetVisual()"}</code> | <span className="api-desc">Initializes and returns the visual prefab for this definition. Not a new copy.</span> |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-spawnpickup" /><code><Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" SpawnPickup("}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | <span className="api-desc">Spawns the customization pickup under a parent with the given arguments.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Type, category and name as text.</span> |

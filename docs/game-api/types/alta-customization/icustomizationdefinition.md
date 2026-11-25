---
title: "ICustomizationDefinition"
description: "One cosmetic option for the character customiser: it can be shown on a character, spawned as a pickup for preview and given default arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationDefinition

An **interface** in `Root.Township`, `Alta.Customization`.

One cosmetic option for the character customiser: it can be shown on a character, spawned as a pickup for preview and given default arguments.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`PlayerCosmeticDefinition`](/game-api/types/alta-customization/playercosmeticdefinition), [`PlayerEquipmentDefinition`](/game-api/types/alta-customization/playerequipmentdefinition)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code><Link to="/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{" Category { get; set; }"}</code> | The customisation category this option belongs to. |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | Asset hash identifying the option. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | Option name. |
| <Link id="m-pickuptype" /><code><Link to="/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" PickupType { get; }"}</code> | What kind of cosmetic pickup represents it. |
| <Link id="m-uiselectionboardscale" /><code>{"float UISelectionBoardScale { get; }"}</code> | Scale for the option's preview on the selection board. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] CreateDefaultArguments()"}</code> | Creates the default arguments (such as colours) for this option. |
| <Link id="m-getvisual" /><code><Link to="/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" GetVisual()"}</code> | Returns the visual used to show this option on a character. |
| <Link id="m-spawnpickup" /><code><Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" SpawnPickup("}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | Spawns a pickup for this option with the given arguments under a parent. |

## Used in

Members of other types that take, return or hold a `ICustomizationDefinition`:

[`BodyTypePickup.Spawn`](/game-api/types/alta-customization/bodytypepickup#m-spawn), [`CosmeticPickup.Spawn`](/game-api/types/alta-customization/cosmeticpickup#m-spawn), [`CustomizationCategory.GetRandom`](/game-api/types/alta-customization/customizationcategory#m-getrandom-2), [`CustomizationItemAndArguments.definition`](/game-api/types/alta-customization/customizationitemandarguments#m-definition), [`CustomizationPickup.Definition`](/game-api/types/alta-customization/customizationpickup#m-definition), [`CustomizationPickup.Spawn`](/game-api/types/alta-customization/customizationpickup#m-spawn), [`CustomizationVisual.Definition`](/game-api/types/alta-customization/customizationvisual#m-definition), [`CustomizationVisualManager.Deregister`](/game-api/types/alta-customization/customizationvisualmanager#m-deregister), [`CustomizationVisualManager.Register`](/game-api/types/alta-customization/customizationvisualmanager#m-register), [`CustomizationWrapper.Add`](/game-api/types/alta-customization/customizationwrapper#m-add-2), [`CustomizationWrapper.GetItem`](/game-api/types/alta-customization/customizationwrapper#m-getitem), [`CustomizationWrapper.OverrideSet`](/game-api/types/alta-customization/customizationwrapper#m-overrideset), [`CustomizationWrapperSerializer.AddDefaultItem`](/game-api/types/alta-customization/customizationwrapperserializer#m-adddefaultitem), [`DefaultCosmeticInfo.Definition`](/game-api/types/alta-customization/defaultcosmeticinfo#m-definition-2), [`EditableSlot.Add`](/game-api/types/alta-customization/editableslot#m-add), [`EditableSlot.Hover`](/game-api/types/alta-customization/editableslot#m-hover), [`EditableSlot.IsApplicable`](/game-api/types/alta-customization/editableslot#m-isapplicable), [`EquipmentPickup.Spawn`](/game-api/types/alta-customization/equipmentpickup#m-spawn), [`EyePickup.Spawn`](/game-api/types/alta-customization/eyepickup#m-spawn), [`ICustomizationCategory.GetRandom`](/game-api/types/alta-customization/icustomizationcategory#m-getrandom-2), [`ICustomizationVisual.Definition`](/game-api/types/alta-customization/icustomizationvisual#m-definition), [`ICustomizationVisualManager.Deregister`](/game-api/types/alta-customization/icustomizationvisualmanager#m-deregister), [`ICustomizationVisualManager.Register`](/game-api/types/alta-customization/icustomizationvisualmanager#m-register), [`ICustomizationWrapper.GetItem`](/game-api/types/alta-customization/icustomizationwrapper#m-getitem), [`ICustomizationWrapper.OverrideSet`](/game-api/types/alta-customization/icustomizationwrapper#m-overrideset), [`PlayerCosmeticCategory.GetRandom`](/game-api/types/alta-customization/playercosmeticcategory#m-getrandom-2), [`PlayerCosmeticWrapper.GetItem`](/game-api/types/alta-customization/playercosmeticwrapper#m-getitem), [`PlayerEquipmentCategory.GetRandom`](/game-api/types/alta-customization/playerequipmentcategory#m-getrandom-2), [`PlayerEquipmentWrapper.GetItem`](/game-api/types/alta-customization/playerequipmentwrapper#m-getitem), [`SkinColorPickup.Spawn`](/game-api/types/alta-customization/skincolorpickup#m-spawn), [`ModellingCharacter.Definition.Asset`](/game-api/types/global-m-o/modellingcharacter-definition#m-asset-2), [`ModellingCharacter.FreeDefinition.Asset`](/game-api/types/global-m-o/modellingcharacter-freedefinition#m-asset-2), [`ModellingCharacter.IDefinition.Asset`](/game-api/types/global-m-o/modellingcharacter-idefinition#m-asset).

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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Derived types** [`PlayerCosmeticDefinition`](/mod/game-api/types/alta-customization/playercosmeticdefinition), [`PlayerEquipmentDefinition`](/mod/game-api/types/alta-customization/playerequipmentdefinition)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{" Category { get; set; }"}</code> | <span className="api-desc">The customisation category this option belongs to.</span> |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">Asset hash identifying the option.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Option name.</span> |
| <Link id="m-pickuptype" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" PickupType { get; }"}</code> | <span className="api-desc">What kind of cosmetic pickup represents it.</span> |
| <Link id="m-uiselectionboardscale" /><code>{"float UISelectionBoardScale { get; }"}</code> | <span className="api-desc">Scale for the option's preview on the selection board.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code><Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] CreateDefaultArguments()"}</code> | <span className="api-desc">Creates the default arguments (such as colours) for this option.</span> |
| <Link id="m-getvisual" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" GetVisual()"}</code> | <span className="api-desc">Returns the visual used to show this option on a character.</span> |
| <Link id="m-spawnpickup" /><code><Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" SpawnPickup("}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | <span className="api-desc">Spawns a pickup for this option with the given arguments under a parent.</span> |

## Used in

Members of other types that take, return or hold a `ICustomizationDefinition`:

<div className="api-used-in">

[`BodyTypePickup.Spawn`](/mod/game-api/types/alta-customization/bodytypepickup#m-spawn), [`CosmeticPickup.Spawn`](/mod/game-api/types/alta-customization/cosmeticpickup#m-spawn), [`CustomizationCategory.GetRandom`](/mod/game-api/types/alta-customization/customizationcategory#m-getrandom-2), [`CustomizationItemAndArguments.definition`](/mod/game-api/types/alta-customization/customizationitemandarguments#m-definition), [`CustomizationPickup.Definition`](/mod/game-api/types/alta-customization/customizationpickup#m-definition), [`CustomizationPickup.Spawn`](/mod/game-api/types/alta-customization/customizationpickup#m-spawn), [`CustomizationVisual.Definition`](/mod/game-api/types/alta-customization/customizationvisual#m-definition), [`CustomizationVisualManager.Deregister`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-deregister), [`CustomizationVisualManager.Register`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-register), [`CustomizationWrapper.Add`](/mod/game-api/types/alta-customization/customizationwrapper#m-add-2), [`CustomizationWrapper.GetItem`](/mod/game-api/types/alta-customization/customizationwrapper#m-getitem), [`CustomizationWrapper.OverrideSet`](/mod/game-api/types/alta-customization/customizationwrapper#m-overrideset), [`CustomizationWrapperSerializer.AddDefaultItem`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-adddefaultitem), [`DefaultCosmeticInfo.Definition`](/mod/game-api/types/alta-customization/defaultcosmeticinfo#m-definition-2), [`EditableSlot.Add`](/mod/game-api/types/alta-customization/editableslot#m-add), [`EditableSlot.Hover`](/mod/game-api/types/alta-customization/editableslot#m-hover), [`EditableSlot.IsApplicable`](/mod/game-api/types/alta-customization/editableslot#m-isapplicable), [`EquipmentPickup.Spawn`](/mod/game-api/types/alta-customization/equipmentpickup#m-spawn), [`EyePickup.Spawn`](/mod/game-api/types/alta-customization/eyepickup#m-spawn), [`ICustomizationCategory.GetRandom`](/mod/game-api/types/alta-customization/icustomizationcategory#m-getrandom-2), [`ICustomizationVisual.Definition`](/mod/game-api/types/alta-customization/icustomizationvisual#m-definition), [`ICustomizationVisualManager.Deregister`](/mod/game-api/types/alta-customization/icustomizationvisualmanager#m-deregister), [`ICustomizationVisualManager.Register`](/mod/game-api/types/alta-customization/icustomizationvisualmanager#m-register), [`ICustomizationWrapper.GetItem`](/mod/game-api/types/alta-customization/icustomizationwrapper#m-getitem), [`ICustomizationWrapper.OverrideSet`](/mod/game-api/types/alta-customization/icustomizationwrapper#m-overrideset), [`PlayerCosmeticCategory.GetRandom`](/mod/game-api/types/alta-customization/playercosmeticcategory#m-getrandom-2), [`PlayerCosmeticWrapper.GetItem`](/mod/game-api/types/alta-customization/playercosmeticwrapper#m-getitem), [`PlayerEquipmentCategory.GetRandom`](/mod/game-api/types/alta-customization/playerequipmentcategory#m-getrandom-2), [`PlayerEquipmentWrapper.GetItem`](/mod/game-api/types/alta-customization/playerequipmentwrapper#m-getitem), [`SkinColorPickup.Spawn`](/mod/game-api/types/alta-customization/skincolorpickup#m-spawn), [`ModellingCharacter.Definition.Asset`](/mod/game-api/types/global-m-o/modellingcharacter-definition#m-asset-2), [`ModellingCharacter.FreeDefinition.Asset`](/mod/game-api/types/global-m-o/modellingcharacter-freedefinition#m-asset-2), [`ModellingCharacter.IDefinition.Asset`](/mod/game-api/types/global-m-o/modellingcharacter-idefinition#m-asset).

</div>

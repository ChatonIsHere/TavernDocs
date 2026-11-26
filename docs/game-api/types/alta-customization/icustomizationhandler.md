---
title: "ICustomizationHandler"
description: "Something that shows a customised player body, such as a player character or a dummy, and that the customization manager applies outfits to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationHandler

An **interface** in `Root.Township`, `Alta.Customization`.

Something that shows a customised player body, such as a player character or a dummy, and that the customization manager applies outfits to.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`PlayerCustomizationHandler`](/game-api/types/alta-customization/playercustomizationhandler)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-characterdummy" /><code><Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" "}<Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" { get; }"}</code> | The character dummy used to show customisation, if any. |
| <Link id="m-hasmanager" /><code>{"bool HasManager { get; }"}</code> | Whether a customization manager is set. |
| <Link id="m-isdestroyed" /><code>{"bool IsDestroyed { get; }"}</code> | Whether the handler has been destroyed. |
| <Link id="m-isfirstperson" /><code>{"bool IsFirstPerson { get; }"}</code> | Whether it is shown first person (the local player's own body). |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; }"}</code> | The `PlayerCharacterCustomizationManager` applying customisation to this handler. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | A name for logs. |
| <Link id="m-rootbone" /><code>{"Transform RootBone { get; }"}</code> | Root bone of the body's skeleton. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | Destroys the handler's visuals. |
| <Link id="m-getbone" /><code>{"Transform GetBone(Transform oldBone, bool isLoggingUnfoundBones)"}</code> | Finds this body's matching bone for a bone from a customisation prefab, optionally logging when it is missing. |
| <Link id="m-setfirstperson" /><code>{"void SetFirstPerson(bool isFirstPerson)"}</code> | Switches between first and third person display. |
| <Link id="m-setmanager" /><code>{"void SetManager("}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> | Sets the customization manager. |

## Used in

Members of other types that take, return or hold a `ICustomizationHandler`:

[`CosmeticBodyType.Attach`](/game-api/types/alta-customization/cosmeticbodytype#m-attach), [`CosmeticBodyType.ChangeArguments`](/game-api/types/alta-customization/cosmeticbodytype#m-changearguments), [`CosmeticBodyType.Detach`](/game-api/types/alta-customization/cosmeticbodytype#m-detach), [`CosmeticEyePart.CreateInput`](/game-api/types/alta-customization/cosmeticeyepart#m-createinput), [`CosmeticMeshPartBase<T>.Attach`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-attach), [`CosmeticMeshPartBase<T>.ChangeArguments`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-changearguments), [`CosmeticMeshPartBase<T>.CreateInput`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-createinput), [`CosmeticMeshPartBase<T>.Detach`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-detach), [`CosmeticSkinColor.Attach`](/game-api/types/alta-customization/cosmeticskincolor#m-attach), [`CosmeticSkinColor.ChangeArguments`](/game-api/types/alta-customization/cosmeticskincolor#m-changearguments), [`CosmeticSkinColor.Detach`](/game-api/types/alta-customization/cosmeticskincolor#m-detach), [`CustomizationSlot.CustomizationSlot`](/game-api/types/alta-customization/customizationslot#m-ctor), [`CustomizationSlot.handlers`](/game-api/types/alta-customization/customizationslot#m-handlers), [`CustomizationSlotEntry.Add`](/game-api/types/alta-customization/customizationslotentry#m-add), [`CustomizationSlotEntry.ApplyArguments`](/game-api/types/alta-customization/customizationslotentry#m-applyarguments), [`CustomizationSlotEntry.ModifyDisablers`](/game-api/types/alta-customization/customizationslotentry#m-modifydisablers), [`CustomizationSlotEntry.Remove`](/game-api/types/alta-customization/customizationslotentry#m-remove), [`CustomizationSlotEntry.UpdateFirstPerson`](/game-api/types/alta-customization/customizationslotentry#m-updatefirstperson), [`CustomizationSlotEntry.UpdateImpeded`](/game-api/types/alta-customization/customizationslotentry#m-updateimpeded), [`CustomizationVisualManager.Attach`](/game-api/types/alta-customization/customizationvisualmanager#m-attach), [`CustomizationVisualManager.Detach`](/game-api/types/alta-customization/customizationvisualmanager#m-detach), [`CustomizationVisualManager.handlers`](/game-api/types/alta-customization/customizationvisualmanager#m-handlers), [`CustomizationVisualManager.Handlers`](/game-api/types/alta-customization/customizationvisualmanager#m-handlers-2), [`CustomizationVisualManager.UpdateFirstPerson`](/game-api/types/alta-customization/customizationvisualmanager#m-updatefirstperson), [`CustomizationVisualPart.Attach`](/game-api/types/alta-customization/customizationvisualpart#m-attach), [`CustomizationVisualPart.ChangeArguments`](/game-api/types/alta-customization/customizationvisualpart#m-changearguments), [`CustomizationVisualPart.Detach`](/game-api/types/alta-customization/customizationvisualpart#m-detach), [`CustomizationVisualPart.Hide`](/game-api/types/alta-customization/customizationvisualpart#m-hide), [`CustomizationVisualPart.Show`](/game-api/types/alta-customization/customizationvisualpart#m-show), [`CustomizationVisualPart.UpdateFirstPerson`](/game-api/types/alta-customization/customizationvisualpart#m-updatefirstperson), [`EquipmentPart.Attach`](/game-api/types/alta-customization/equipmentpart#m-attach), [`EquipmentPart.ChangeArguments`](/game-api/types/alta-customization/equipmentpart#m-changearguments), [`EquipmentPart.Detach`](/game-api/types/alta-customization/equipmentpart#m-detach), [`ICustomizationPart.ChangeArguments`](/game-api/types/alta-customization/icustomizationpart#m-changearguments), [`ICustomizationPart.Hide`](/game-api/types/alta-customization/icustomizationpart#m-hide), [`ICustomizationPart.Show`](/game-api/types/alta-customization/icustomizationpart#m-show), [`ICustomizationPart.UpdateFirstPerson`](/game-api/types/alta-customization/icustomizationpart#m-updatefirstperson), [`ICustomizationVisualManager.Attach`](/game-api/types/alta-customization/icustomizationvisualmanager#m-attach), [`ICustomizationVisualManager.Detach`](/game-api/types/alta-customization/icustomizationvisualmanager#m-detach), [`ICustomizationVisualManager.Handlers`](/game-api/types/alta-customization/icustomizationvisualmanager#m-handlers), [`ICustomizationVisualManager.UpdateFirstPerson`](/game-api/types/alta-customization/icustomizationvisualmanager#m-updatefirstperson), [`PlayerCharacterCustomizationManager.Handlers`](/game-api/types/alta-customization/playercharactercustomizationmanager#m-handlers), [`SkinMeshPart.ChangeArguments`](/game-api/types/alta-customization/skinmeshpart#m-changearguments), [`SkinMeshPart.CreateInput`](/game-api/types/alta-customization/skinmeshpart#m-createinput).

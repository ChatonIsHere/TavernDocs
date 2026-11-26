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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Derived types** [`PlayerCustomizationHandler`](/mod/game-api/types/alta-customization/playercustomizationhandler)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-characterdummy" /><code><Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" { get; }"}</code> | <span className="api-desc">The character dummy used to show customisation, if any.</span> |
| <Link id="m-hasmanager" /><code>{"bool HasManager { get; }"}</code> | <span className="api-desc">Whether a customization manager is set.</span> |
| <Link id="m-isdestroyed" /><code>{"bool IsDestroyed { get; }"}</code> | <span className="api-desc">Whether the handler has been destroyed.</span> |
| <Link id="m-isfirstperson" /><code>{"bool IsFirstPerson { get; }"}</code> | <span className="api-desc">Whether it is shown first person (the local player's own body).</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; }"}</code> | <span className="api-desc">The `PlayerCharacterCustomizationManager` applying customisation to this handler.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">A name for logs.</span> |
| <Link id="m-rootbone" /><code>{"Transform RootBone { get; }"}</code> | <span className="api-desc">Root bone of the body's skeleton.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | <span className="api-desc">Destroys the handler's visuals.</span> |
| <Link id="m-getbone" /><code>{"Transform GetBone(Transform oldBone, bool isLoggingUnfoundBones)"}</code> | <span className="api-desc">Finds this body's matching bone for a bone from a customisation prefab, optionally logging when it is missing.</span> |
| <Link id="m-setfirstperson" /><code>{"void SetFirstPerson(bool isFirstPerson)"}</code> | <span className="api-desc">Switches between first and third person display.</span> |
| <Link id="m-setmanager" /><code>{"void SetManager("}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> | <span className="api-desc">Sets the customization manager.</span> |

## Used in

Members of other types that take, return or hold a `ICustomizationHandler`:

<div className="api-used-in">

[`CosmeticBodyType.Attach`](/mod/game-api/types/alta-customization/cosmeticbodytype#m-attach), [`CosmeticBodyType.ChangeArguments`](/mod/game-api/types/alta-customization/cosmeticbodytype#m-changearguments), [`CosmeticBodyType.Detach`](/mod/game-api/types/alta-customization/cosmeticbodytype#m-detach), [`CosmeticEyePart.CreateInput`](/mod/game-api/types/alta-customization/cosmeticeyepart#m-createinput), [`CosmeticMeshPartBase<T>.Attach`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-attach), [`CosmeticMeshPartBase<T>.ChangeArguments`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-changearguments), [`CosmeticMeshPartBase<T>.CreateInput`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-createinput), [`CosmeticMeshPartBase<T>.Detach`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-detach), [`CosmeticSkinColor.Attach`](/mod/game-api/types/alta-customization/cosmeticskincolor#m-attach), [`CosmeticSkinColor.ChangeArguments`](/mod/game-api/types/alta-customization/cosmeticskincolor#m-changearguments), [`CosmeticSkinColor.Detach`](/mod/game-api/types/alta-customization/cosmeticskincolor#m-detach), [`CustomizationSlot.CustomizationSlot`](/mod/game-api/types/alta-customization/customizationslot#m-ctor), [`CustomizationSlot.handlers`](/mod/game-api/types/alta-customization/customizationslot#m-handlers), [`CustomizationSlotEntry.Add`](/mod/game-api/types/alta-customization/customizationslotentry#m-add), [`CustomizationSlotEntry.ApplyArguments`](/mod/game-api/types/alta-customization/customizationslotentry#m-applyarguments), [`CustomizationSlotEntry.ModifyDisablers`](/mod/game-api/types/alta-customization/customizationslotentry#m-modifydisablers), [`CustomizationSlotEntry.Remove`](/mod/game-api/types/alta-customization/customizationslotentry#m-remove), [`CustomizationSlotEntry.UpdateFirstPerson`](/mod/game-api/types/alta-customization/customizationslotentry#m-updatefirstperson), [`CustomizationSlotEntry.UpdateImpeded`](/mod/game-api/types/alta-customization/customizationslotentry#m-updateimpeded), [`CustomizationVisualManager.Attach`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-attach), [`CustomizationVisualManager.Detach`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-detach), [`CustomizationVisualManager.handlers`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-handlers), [`CustomizationVisualManager.Handlers`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-handlers-2), [`CustomizationVisualManager.UpdateFirstPerson`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-updatefirstperson), [`CustomizationVisualPart.Attach`](/mod/game-api/types/alta-customization/customizationvisualpart#m-attach), [`CustomizationVisualPart.ChangeArguments`](/mod/game-api/types/alta-customization/customizationvisualpart#m-changearguments), [`CustomizationVisualPart.Detach`](/mod/game-api/types/alta-customization/customizationvisualpart#m-detach), [`CustomizationVisualPart.Hide`](/mod/game-api/types/alta-customization/customizationvisualpart#m-hide), [`CustomizationVisualPart.Show`](/mod/game-api/types/alta-customization/customizationvisualpart#m-show), [`CustomizationVisualPart.UpdateFirstPerson`](/mod/game-api/types/alta-customization/customizationvisualpart#m-updatefirstperson), [`EquipmentPart.Attach`](/mod/game-api/types/alta-customization/equipmentpart#m-attach), [`EquipmentPart.ChangeArguments`](/mod/game-api/types/alta-customization/equipmentpart#m-changearguments), [`EquipmentPart.Detach`](/mod/game-api/types/alta-customization/equipmentpart#m-detach), [`ICustomizationPart.ChangeArguments`](/mod/game-api/types/alta-customization/icustomizationpart#m-changearguments), [`ICustomizationPart.Hide`](/mod/game-api/types/alta-customization/icustomizationpart#m-hide), [`ICustomizationPart.Show`](/mod/game-api/types/alta-customization/icustomizationpart#m-show), [`ICustomizationPart.UpdateFirstPerson`](/mod/game-api/types/alta-customization/icustomizationpart#m-updatefirstperson), [`ICustomizationVisualManager.Attach`](/mod/game-api/types/alta-customization/icustomizationvisualmanager#m-attach), [`ICustomizationVisualManager.Detach`](/mod/game-api/types/alta-customization/icustomizationvisualmanager#m-detach), [`ICustomizationVisualManager.Handlers`](/mod/game-api/types/alta-customization/icustomizationvisualmanager#m-handlers), [`ICustomizationVisualManager.UpdateFirstPerson`](/mod/game-api/types/alta-customization/icustomizationvisualmanager#m-updatefirstperson), [`PlayerCharacterCustomizationManager.Handlers`](/mod/game-api/types/alta-customization/playercharactercustomizationmanager#m-handlers), [`SkinMeshPart.ChangeArguments`](/mod/game-api/types/alta-customization/skinmeshpart#m-changearguments), [`SkinMeshPart.CreateInput`](/mod/game-api/types/alta-customization/skinmeshpart#m-createinput).

</div>

---
title: "CustomizationArguments"
description: "class CustomizationArguments in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationArguments

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`CosmeticBodyType`](/game-api/types/alta-customization/cosmeticbodytype), [`CosmeticSkinColor`](/game-api/types/alta-customization/cosmeticskincolor), [`EquipmentPart`](/game-api/types/alta-customization/equipmentpart), [`SkinMeshPart`](/game-api/types/alta-customization/skinmeshpart), [`TwoColors`](/game-api/types/alta-customization/twocolors)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationArguments()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isimpeded" /><code>{"bool IsImpeded { get; set; }"}</code> |  |
| <Link id="m-size" /><code>{"virtual int Size { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"virtual "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" Clone()"}</code> |  |
| <Link id="m-randomize" /><code>{"virtual void Randomize()"}</code> |  |
| <Link id="m-serialize" /><code>{"virtual void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CustomizationArguments`:

[`BodyTypePickup.Spawn`](/game-api/types/alta-customization/bodytypepickup#m-spawn), [`CosmeticBodyType.Attach`](/game-api/types/alta-customization/cosmeticbodytype#m-attach), [`CosmeticBodyType.ChangeArguments`](/game-api/types/alta-customization/cosmeticbodytype#m-changearguments), [`CosmeticEyePart.CreateInput`](/game-api/types/alta-customization/cosmeticeyepart#m-createinput), [`CosmeticMeshPartBase<T>.ApplyColorToArguments`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-applycolortoarguments), [`CosmeticMeshPartBase<T>.Attach`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-attach), [`CosmeticMeshPartBase<T>.ChangeArguments`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-changearguments), [`CosmeticMeshPartBase<T>.CreateInput`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-createinput), [`CosmeticPickup.Spawn`](/game-api/types/alta-customization/cosmeticpickup#m-spawn), [`CosmeticSkinColor.Attach`](/game-api/types/alta-customization/cosmeticskincolor#m-attach), [`CosmeticSkinColor.ChangeArguments`](/game-api/types/alta-customization/cosmeticskincolor#m-changearguments), [`CustomizationItemAndArguments.arguments`](/game-api/types/alta-customization/customizationitemandarguments#m-arguments), [`CustomizationPickup.Arguments`](/game-api/types/alta-customization/customizationpickup#m-arguments), [`CustomizationPickup.Spawn`](/game-api/types/alta-customization/customizationpickup#m-spawn), [`CustomizationSlotEntry.ApplyArguments`](/game-api/types/alta-customization/customizationslotentry#m-applyarguments), [`CustomizationSlotEntry.Arguments`](/game-api/types/alta-customization/customizationslotentry#m-arguments), [`CustomizationSlotEntry.CustomizationSlotEntry`](/game-api/types/alta-customization/customizationslotentry#m-ctor), [`CustomizationVisual.CreateDefaultArguments`](/game-api/types/alta-customization/customizationvisual#m-createdefaultarguments), [`CustomizationVisualManager.ApplyArguments`](/game-api/types/alta-customization/customizationvisualmanager#m-applyarguments), [`CustomizationVisualManager.Register`](/game-api/types/alta-customization/customizationvisualmanager#m-register), [`CustomizationVisualPart.Attach`](/game-api/types/alta-customization/customizationvisualpart#m-attach), [`CustomizationVisualPart.ChangeArguments`](/game-api/types/alta-customization/customizationvisualpart#m-changearguments), [`CustomizationVisualPart.CreateDefaultArguments`](/game-api/types/alta-customization/customizationvisualpart#m-createdefaultarguments), [`CustomizationVisualPart.Show`](/game-api/types/alta-customization/customizationvisualpart#m-show), [`CustomizationVisualPart.UpdateFirstPerson`](/game-api/types/alta-customization/customizationvisualpart#m-updatefirstperson), [`CustomizationVisualPart<TArguments>.CreateDefaultArguments`](/game-api/types/alta-customization/customizationvisualpart-targuments#m-createdefaultarguments), [`CustomizationWrapper.Add`](/game-api/types/alta-customization/customizationwrapper#m-add), [`CustomizationWrapper.Arguments`](/game-api/types/alta-customization/customizationwrapper#m-arguments), [`CustomizationWrapper.GetArguments`](/game-api/types/alta-customization/customizationwrapper#m-getarguments), [`CustomizationWrapper.Remove`](/game-api/types/alta-customization/customizationwrapper#m-remove), [`CustomizationWrapperSerializer.AddDefaultItem`](/game-api/types/alta-customization/customizationwrapperserializer#m-adddefaultitem), [`CustomizationWrapperSerializer.SerializeArguments`](/game-api/types/alta-customization/customizationwrapperserializer#m-serializearguments), [`EditableSlot.Add`](/game-api/types/alta-customization/editableslot#m-add), [`EditableSlot.Remove`](/game-api/types/alta-customization/editableslot#m-remove), [`EquipmentPart.Attach`](/game-api/types/alta-customization/equipmentpart#m-attach), [`EquipmentPart.ChangeArguments`](/game-api/types/alta-customization/equipmentpart#m-changearguments), [`EquipmentPickup.Spawn`](/game-api/types/alta-customization/equipmentpickup#m-spawn), [`EyePickup.Spawn`](/game-api/types/alta-customization/eyepickup#m-spawn), [`ICosmeticMeshPartBase.ApplyColorToArguments`](/game-api/types/alta-customization/icosmeticmeshpartbase#m-applycolortoarguments), [`ICustomizationDefinition.CreateDefaultArguments`](/game-api/types/alta-customization/icustomizationdefinition#m-createdefaultarguments), [`ICustomizationDefinition.SpawnPickup`](/game-api/types/alta-customization/icustomizationdefinition#m-spawnpickup), [`ICustomizationPart.ChangeArguments`](/game-api/types/alta-customization/icustomizationpart#m-changearguments), [`ICustomizationPart.Show`](/game-api/types/alta-customization/icustomizationpart#m-show), [`ICustomizationPart.UpdateFirstPerson`](/game-api/types/alta-customization/icustomizationpart#m-updatefirstperson), [`ICustomizationVisualManager.ApplyArguments`](/game-api/types/alta-customization/icustomizationvisualmanager#m-applyarguments), [`ICustomizationVisualManager.Register`](/game-api/types/alta-customization/icustomizationvisualmanager#m-register), [`ICustomizationWrapper.GetArguments`](/game-api/types/alta-customization/icustomizationwrapper#m-getarguments), [`PlayerCosmeticDefinition.CreateDefaultArguments`](/game-api/types/alta-customization/playercosmeticdefinition#m-createdefaultarguments), [`PlayerCosmeticDefinition.SpawnPickup`](/game-api/types/alta-customization/playercosmeticdefinition#m-spawnpickup), [`PlayerEquipmentDefinition.CreateDefaultArguments`](/game-api/types/alta-customization/playerequipmentdefinition#m-createdefaultarguments), [`PlayerEquipmentDefinition.SpawnPickup`](/game-api/types/alta-customization/playerequipmentdefinition#m-spawnpickup), [`SkinColorPickup.Spawn`](/game-api/types/alta-customization/skincolorpickup#m-spawn), [`SkinMeshPart.ChangeArguments`](/game-api/types/alta-customization/skinmeshpart#m-changearguments), [`SkinMeshPart.CreateInput`](/game-api/types/alta-customization/skinmeshpart#m-createinput), [`TwoColors.Clone`](/game-api/types/alta-customization/twocolors#m-clone), [`CosmeticDefinitionSku.arguments`](/game-api/types/global-c-d/cosmeticdefinitionsku#m-arguments).

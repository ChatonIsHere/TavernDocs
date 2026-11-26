---
title: "CustomizationArguments"
description: "Extra settings for one customization part, such as colours (TwoColors)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationArguments

A **class** in `Root.Township`, `Alta.Customization`.

Extra settings for one customization part, such as colours (`TwoColors`). This base class carries nothing; subclasses add fields and serialize them.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Derived types** [`CosmeticBodyType`](/mod/game-api/types/alta-customization/cosmeticbodytype), [`CosmeticSkinColor`](/mod/game-api/types/alta-customization/cosmeticskincolor), [`EquipmentPart`](/mod/game-api/types/alta-customization/equipmentpart), [`SkinMeshPart`](/mod/game-api/types/alta-customization/skinmeshpart), [`TwoColors`](/mod/game-api/types/alta-customization/twocolors)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationArguments()"}</code> | Creates a `CustomizationArguments` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isimpeded" /><code>{"bool IsImpeded { get; set; }"}</code> | Set when another worn part impedes this one; the part may then switch to its impeded LODs. |
| <Link id="m-size" /><code>{"virtual int Size { get; }"}</code> | How many bits `Serialize` uses. 0 in the base class. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" Clone()"}</code> | Returns a copy of these arguments. |
| <Link id="m-randomize" /><code>{"virtual void Randomize()"}</code> | Picks random values. Does nothing in the base class. |
| <Link id="m-serialize" /><code>{"virtual void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the arguments for the network. Does nothing in the base class. |

## Used in

Members of other types that take, return or hold a `CustomizationArguments`:

[`BodyTypePickup.Spawn`](/mod/game-api/types/alta-customization/bodytypepickup#m-spawn), [`CosmeticBodyType.Attach`](/mod/game-api/types/alta-customization/cosmeticbodytype#m-attach), [`CosmeticBodyType.ChangeArguments`](/mod/game-api/types/alta-customization/cosmeticbodytype#m-changearguments), [`CosmeticEyePart.CreateInput`](/mod/game-api/types/alta-customization/cosmeticeyepart#m-createinput), [`CosmeticMeshPartBase<T>.ApplyColorToArguments`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-applycolortoarguments), [`CosmeticMeshPartBase<T>.Attach`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-attach), [`CosmeticMeshPartBase<T>.ChangeArguments`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-changearguments), [`CosmeticMeshPartBase<T>.CreateInput`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-createinput), [`CosmeticPickup.Spawn`](/mod/game-api/types/alta-customization/cosmeticpickup#m-spawn), [`CosmeticSkinColor.Attach`](/mod/game-api/types/alta-customization/cosmeticskincolor#m-attach), [`CosmeticSkinColor.ChangeArguments`](/mod/game-api/types/alta-customization/cosmeticskincolor#m-changearguments), [`CustomizationItemAndArguments.arguments`](/mod/game-api/types/alta-customization/customizationitemandarguments#m-arguments), [`CustomizationPickup.Arguments`](/mod/game-api/types/alta-customization/customizationpickup#m-arguments), [`CustomizationPickup.Spawn`](/mod/game-api/types/alta-customization/customizationpickup#m-spawn), [`CustomizationSlotEntry.ApplyArguments`](/mod/game-api/types/alta-customization/customizationslotentry#m-applyarguments), [`CustomizationSlotEntry.Arguments`](/mod/game-api/types/alta-customization/customizationslotentry#m-arguments), [`CustomizationSlotEntry.CustomizationSlotEntry`](/mod/game-api/types/alta-customization/customizationslotentry#m-ctor), [`CustomizationVisual.CreateDefaultArguments`](/mod/game-api/types/alta-customization/customizationvisual#m-createdefaultarguments), [`CustomizationVisualManager.ApplyArguments`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-applyarguments), [`CustomizationVisualManager.Register`](/mod/game-api/types/alta-customization/customizationvisualmanager#m-register), [`CustomizationVisualPart.Attach`](/mod/game-api/types/alta-customization/customizationvisualpart#m-attach), [`CustomizationVisualPart.ChangeArguments`](/mod/game-api/types/alta-customization/customizationvisualpart#m-changearguments), [`CustomizationVisualPart.CreateDefaultArguments`](/mod/game-api/types/alta-customization/customizationvisualpart#m-createdefaultarguments), [`CustomizationVisualPart.Show`](/mod/game-api/types/alta-customization/customizationvisualpart#m-show), [`CustomizationVisualPart.UpdateFirstPerson`](/mod/game-api/types/alta-customization/customizationvisualpart#m-updatefirstperson), [`CustomizationVisualPart<TArguments>.CreateDefaultArguments`](/mod/game-api/types/alta-customization/customizationvisualpart-targuments#m-createdefaultarguments), [`CustomizationWrapper.Add`](/mod/game-api/types/alta-customization/customizationwrapper#m-add), [`CustomizationWrapper.Arguments`](/mod/game-api/types/alta-customization/customizationwrapper#m-arguments), [`CustomizationWrapper.GetArguments`](/mod/game-api/types/alta-customization/customizationwrapper#m-getarguments), [`CustomizationWrapper.Remove`](/mod/game-api/types/alta-customization/customizationwrapper#m-remove), [`CustomizationWrapperSerializer.AddDefaultItem`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-adddefaultitem), [`CustomizationWrapperSerializer.SerializeArguments`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-serializearguments), [`EditableSlot.Add`](/mod/game-api/types/alta-customization/editableslot#m-add), [`EditableSlot.Remove`](/mod/game-api/types/alta-customization/editableslot#m-remove), [`EquipmentPart.Attach`](/mod/game-api/types/alta-customization/equipmentpart#m-attach), [`EquipmentPart.ChangeArguments`](/mod/game-api/types/alta-customization/equipmentpart#m-changearguments), [`EquipmentPickup.Spawn`](/mod/game-api/types/alta-customization/equipmentpickup#m-spawn), [`EyePickup.Spawn`](/mod/game-api/types/alta-customization/eyepickup#m-spawn), [`ICosmeticMeshPartBase.ApplyColorToArguments`](/mod/game-api/types/alta-customization/icosmeticmeshpartbase#m-applycolortoarguments), [`ICustomizationDefinition.CreateDefaultArguments`](/mod/game-api/types/alta-customization/icustomizationdefinition#m-createdefaultarguments), [`ICustomizationDefinition.SpawnPickup`](/mod/game-api/types/alta-customization/icustomizationdefinition#m-spawnpickup), [`ICustomizationPart.ChangeArguments`](/mod/game-api/types/alta-customization/icustomizationpart#m-changearguments), [`ICustomizationPart.Show`](/mod/game-api/types/alta-customization/icustomizationpart#m-show), [`ICustomizationPart.UpdateFirstPerson`](/mod/game-api/types/alta-customization/icustomizationpart#m-updatefirstperson), [`ICustomizationVisualManager.ApplyArguments`](/mod/game-api/types/alta-customization/icustomizationvisualmanager#m-applyarguments), [`ICustomizationVisualManager.Register`](/mod/game-api/types/alta-customization/icustomizationvisualmanager#m-register), [`ICustomizationWrapper.GetArguments`](/mod/game-api/types/alta-customization/icustomizationwrapper#m-getarguments), [`PlayerCosmeticDefinition.CreateDefaultArguments`](/mod/game-api/types/alta-customization/playercosmeticdefinition#m-createdefaultarguments), [`PlayerCosmeticDefinition.SpawnPickup`](/mod/game-api/types/alta-customization/playercosmeticdefinition#m-spawnpickup), [`PlayerEquipmentDefinition.CreateDefaultArguments`](/mod/game-api/types/alta-customization/playerequipmentdefinition#m-createdefaultarguments), [`PlayerEquipmentDefinition.SpawnPickup`](/mod/game-api/types/alta-customization/playerequipmentdefinition#m-spawnpickup), [`SkinColorPickup.Spawn`](/mod/game-api/types/alta-customization/skincolorpickup#m-spawn), [`SkinMeshPart.ChangeArguments`](/mod/game-api/types/alta-customization/skinmeshpart#m-changearguments), [`SkinMeshPart.CreateInput`](/mod/game-api/types/alta-customization/skinmeshpart#m-createinput), [`TwoColors.Clone`](/mod/game-api/types/alta-customization/twocolors#m-clone), [`CosmeticDefinitionSku.arguments`](/mod/game-api/types/global-c-d/cosmeticdefinitionsku#m-arguments).

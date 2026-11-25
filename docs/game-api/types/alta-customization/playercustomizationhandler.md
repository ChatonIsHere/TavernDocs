---
title: "PlayerCustomizationHandler"
description: "On a body: applies the visuals, finds bones, first-person mode. ArmorManager, EditableEquipmentManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCustomizationHandler

A **class** in `Root.Township`, `Alta.Customization`.

On a body: applies the visuals, finds bones, first-person mode. `ArmorManager`, `EditableEquipmentManager`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICustomizationHandler`](/game-api/types/alta-customization/icustomizationhandler)
- **Documented in** [Customization](/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCustomizationHandler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-armormanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/playerarmormanager">{"PlayerArmorManager"}</Link>{" armorManager"}</code> |  |
| <Link id="m-bodyboundboxsize" /><code>{"private Vector3 bodyBoundBoxSize"}</code> |  |
| <Link id="m-childmap" /><code>{"private Dictionary<string, Transform> childMap"}</code> |  |
| <Link id="m-editableequipmentmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/editableequipmentmanager">{"EditableEquipmentManager"}</Link>{" editableEquipmentManager"}</code> |  |
| <Link id="m-pointer" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" pointer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armormanager-2" /><code><Link to="/game-api/types/alta-customization/playerarmormanager">{"PlayerArmorManager"}</Link>{" ArmorManager { get; }"}</code> |  |
| <Link id="m-characterbounds" /><code>{"Bounds CharacterBounds { get; }"}</code> |  |
| <Link id="m-characterdummy" /><code><Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" "}<Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" { get; }"}</code> |  |
| <Link id="m-editableequipmentmanager-2" /><code><Link to="/game-api/types/alta-customization/editableequipmentmanager">{"EditableEquipmentManager"}</Link>{" "}<Link to="/game-api/types/alta-customization/editableequipmentmanager">{"EditableEquipmentManager"}</Link>{" { get; }"}</code> |  |
| <Link id="m-hasmanager" /><code>{"bool HasManager { get; private set; }"}</code> |  |
| <Link id="m-isdestroyed" /><code>{"bool IsDestroyed { get; private set; }"}</code> |  |
| <Link id="m-isfirstperson" /><code>{"bool IsFirstPerson { get; }"}</code> |  |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; private set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> |  |
| <Link id="m-rootbone" /><code>{"Transform RootBone { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onmanagerupdated" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{"> onManagerUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> |  |
| <Link id="m-getbone" /><code>{"Transform GetBone(Transform oldBone, bool isLoggingUnfoundBones)"}</code> |  |
| <Link id="m-setfirstperson" /><code>{"void SetFirstPerson(bool isFirstPerson)"}</code> |  |
| <Link id="m-setmanager" /><code>{"void SetManager("}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-addtomap" /><code>{"private void AddToMap(Transform transform)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-preparechildmap" /><code>{"private void PrepareChildMap()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerCustomizationHandler`:

[`PlayerCharacter.customizationHandler`](/game-api/types/alta-player/playercharacter#m-customizationhandler), [`PlayerCharacter.CustomizationHandler`](/game-api/types/alta-player/playercharacter#m-customizationhandler-2), [`CosmeticCustomizationManager.customizationHandler`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-customizationhandler), [`CosmeticCustomizationManager.CustomizationHandler`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-customizationhandler-2), [`CosmeticPresetApplier.handler`](/game-api/types/alta-customization/cosmeticpresetapplier#m-handler), [`CosmeticPresetsManager.baseHandler`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-basehandler), [`CosmeticPresetsManager.handlerPrefab`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-handlerprefab), [`CosmeticPresetTrophy.handler`](/game-api/types/alta-customization/cosmeticpresettrophy#m-handler), [`EquipmentCustomizationRoom.customizationHandler`](/game-api/types/alta-customization/equipmentcustomizationroom#m-customizationhandler), [`PlayerCharacterCustomizationManager.Attach`](/game-api/types/alta-customization/playercharactercustomizationmanager#m-attach), [`PlayerCharacterCustomizationManager.Detach`](/game-api/types/alta-customization/playercharactercustomizationmanager#m-detach), [`PlayerCharacterCustomizationManager.UpdateFirstPerson`](/game-api/types/alta-customization/playercharactercustomizationmanager#m-updatefirstperson), [`ShopInterface.customizationHandler`](/game-api/types/alta-customization/shopinterface#m-customizationhandler), [`PlayerLikeSpectralGhost.handler`](/game-api/types/alta-intelligence/playerlikespectralghost#m-handler), [`LocalPlayerAdvertisingTrophy.handler`](/game-api/types/global-i-l/localplayeradvertisingtrophy#m-handler), [`ModellingCharacter.handler`](/game-api/types/global-m-o/modellingcharacter#m-handler), [`PaintBrush.handler`](/game-api/types/global-p/paintbrush#m-handler).

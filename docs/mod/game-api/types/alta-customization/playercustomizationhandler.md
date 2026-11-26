---
title: "PlayerCustomizationHandler"
description: "Links a player's character model to the customization system: finds bones by name, holds the armour and equipment managers and switches first person."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCustomizationHandler

A **class** in `Root.Township`, `Alta.Customization`.

Links a player's character model to the customization system: finds bones by name, holds the armour and equipment managers and switches first person. A component on the player character.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICustomizationHandler`](/mod/game-api/types/alta-customization/icustomizationhandler)
- **Documented in** [Customization](/mod/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCustomizationHandler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armormanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playerarmormanager">{"PlayerArmorManager"}</Link>{" armorManager"}</code> | Backing field for `ArmorManager`. |
| <Link id="m-bodyboundboxsize" /><code>{"private Vector3 bodyBoundBoxSize"}</code> | Half extents of `CharacterBounds`. |
| <Link id="m-childmap" /><code>{"private Dictionary<string, Transform> childMap"}</code> | Bone name to transform under the character's root bone, used by `GetBone`. |
| <Link id="m-editableequipmentmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/editableequipmentmanager">{"EditableEquipmentManager"}</Link>{" editableEquipmentManager"}</code> | Backing field for `EditableEquipmentManager`. |
| <Link id="m-pointer" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" pointer"}</code> | Points at the `CharacterDummy` this handler dresses. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armormanager-2" /><code><Link to="/mod/game-api/types/alta-customization/playerarmormanager">{"PlayerArmorManager"}</Link>{" ArmorManager { get; }"}</code> | The player's armour manager. |
| <Link id="m-characterbounds" /><code>{"Bounds CharacterBounds { get; }"}</code> | Bounds of the character body, from the inspector size. |
| <Link id="m-characterdummy" /><code><Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" { get; }"}</code> | The character model this handler drives. |
| <Link id="m-editableequipmentmanager-2" /><code><Link to="/mod/game-api/types/alta-customization/editableequipmentmanager">{"EditableEquipmentManager"}</Link>{" "}<Link to="/mod/game-api/types/alta-customization/editableequipmentmanager">{"EditableEquipmentManager"}</Link>{" { get; }"}</code> | The editable equipment manager. |
| <Link id="m-hasmanager" /><code>{"bool HasManager { get; private set; }"}</code> | Whether a customization manager is set. |
| <Link id="m-isdestroyed" /><code>{"bool IsDestroyed { get; private set; }"}</code> | Set by `Destroy`. |
| <Link id="m-isfirstperson" /><code>{"bool IsFirstPerson { get; }"}</code> | Whether the model is in first person mode. |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; private set; }"}</code> | The customization manager applying cosmetics to this character. |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | The game object's name, stored on `Start`. |
| <Link id="m-rootbone" /><code>{"Transform RootBone { get; }"}</code> | The model's root bone. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onmanagerupdated" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{"> onManagerUpdated"}</code> | Raised when the manager changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | Marks the handler destroyed and detaches it from its manager. |
| <Link id="m-getbone" /><code>{"Transform GetBone(Transform oldBone, bool isLoggingUnfoundBones)"}</code> | Finds this character's bone with the same name (or entity original name) as another rig's bone. Can log misses. |
| <Link id="m-setfirstperson" /><code>{"void SetFirstPerson(bool isFirstPerson)"}</code> | Switches first person mode and tells the manager. |
| <Link id="m-setmanager" /><code>{"void SetManager("}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> | Sets the customization manager and raises `onManagerUpdated`. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtomap" /><code>{"private void AddToMap(Transform transform)"}</code> | Adds a transform and all its children to `childMap` by name, keeping the first of any duplicate name. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty. |
| <Link id="m-preparechildmap" /><code>{"private void PrepareChildMap()"}</code> | Builds `childMap` from the root bone the first time a bone is looked up. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Caches the object's name in `Name`. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerCustomizationHandler`:

[`PlayerCharacter.customizationHandler`](/mod/game-api/types/alta-player/playercharacter#m-customizationhandler), [`PlayerCharacter.CustomizationHandler`](/mod/game-api/types/alta-player/playercharacter#m-customizationhandler-2), [`CosmeticCustomizationManager.customizationHandler`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-customizationhandler), [`CosmeticCustomizationManager.CustomizationHandler`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-customizationhandler-2), [`CosmeticPresetApplier.handler`](/mod/game-api/types/alta-customization/cosmeticpresetapplier#m-handler), [`CosmeticPresetsManager.baseHandler`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-basehandler), [`CosmeticPresetsManager.handlerPrefab`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-handlerprefab), [`CosmeticPresetTrophy.handler`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-handler), [`EquipmentCustomizationRoom.customizationHandler`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-customizationhandler), [`PlayerCharacterCustomizationManager.Attach`](/mod/game-api/types/alta-customization/playercharactercustomizationmanager#m-attach), [`PlayerCharacterCustomizationManager.Detach`](/mod/game-api/types/alta-customization/playercharactercustomizationmanager#m-detach), [`PlayerCharacterCustomizationManager.UpdateFirstPerson`](/mod/game-api/types/alta-customization/playercharactercustomizationmanager#m-updatefirstperson), [`ShopInterface.customizationHandler`](/mod/game-api/types/alta-customization/shopinterface#m-customizationhandler), [`PlayerLikeSpectralGhost.handler`](/mod/game-api/types/alta-intelligence/playerlikespectralghost#m-handler), [`LocalPlayerAdvertisingTrophy.handler`](/mod/game-api/types/global-i-l/localplayeradvertisingtrophy#m-handler), [`ModellingCharacter.handler`](/mod/game-api/types/global-m-o/modellingcharacter#m-handler), [`PaintBrush.handler`](/mod/game-api/types/global-p/paintbrush#m-handler).

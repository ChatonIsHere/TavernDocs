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
| <Link id="m-ctor" /><code>{"PlayerCustomizationHandler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armormanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playerarmormanager">{"PlayerArmorManager"}</Link>{" armorManager"}</code> | <span className="api-desc">Backing field for `ArmorManager`.</span> |
| <Link id="m-bodyboundboxsize" /><code>{"private Vector3 bodyBoundBoxSize"}</code> | <span className="api-desc">Half extents of `CharacterBounds`.</span> |
| <Link id="m-childmap" /><code>{"private Dictionary<string, Transform> childMap"}</code> | <span className="api-desc">Bone name to transform under the character's root bone, used by `GetBone`.</span> |
| <Link id="m-editableequipmentmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/editableequipmentmanager">{"EditableEquipmentManager"}</Link>{" editableEquipmentManager"}</code> | <span className="api-desc">Backing field for `EditableEquipmentManager`.</span> |
| <Link id="m-pointer" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" pointer"}</code> | <span className="api-desc">Points at the `CharacterDummy` this handler dresses.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armormanager-2" /><code><Link to="/mod/game-api/types/alta-customization/playerarmormanager">{"PlayerArmorManager"}</Link>{" ArmorManager { get; }"}</code> | <span className="api-desc">The player's armour manager.</span> |
| <Link id="m-characterbounds" /><code>{"Bounds CharacterBounds { get; }"}</code> | <span className="api-desc">Bounds of the character body, from the inspector size.</span> |
| <Link id="m-characterdummy" /><code><Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" { get; }"}</code> | <span className="api-desc">The character model this handler drives.</span> |
| <Link id="m-editableequipmentmanager-2" /><code><Link to="/mod/game-api/types/alta-customization/editableequipmentmanager">{"EditableEquipmentManager"}</Link>{" "}<Link to="/mod/game-api/types/alta-customization/editableequipmentmanager">{"EditableEquipmentManager"}</Link>{" { get; }"}</code> | <span className="api-desc">The editable equipment manager.</span> |
| <Link id="m-hasmanager" /><code>{"bool HasManager { get; private set; }"}</code> | <span className="api-desc">Whether a customization manager is set.</span> |
| <Link id="m-isdestroyed" /><code>{"bool IsDestroyed { get; private set; }"}</code> | <span className="api-desc">Set by `Destroy`.</span> |
| <Link id="m-isfirstperson" /><code>{"bool IsFirstPerson { get; }"}</code> | <span className="api-desc">Whether the model is in first person mode.</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; private set; }"}</code> | <span className="api-desc">The customization manager applying cosmetics to this character.</span> |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">The game object's name, stored on `Start`.</span> |
| <Link id="m-rootbone" /><code>{"Transform RootBone { get; }"}</code> | <span className="api-desc">The model's root bone.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onmanagerupdated" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{"> onManagerUpdated"}</code> | <span className="api-desc">Raised when the manager changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | <span className="api-desc">Marks the handler destroyed and detaches it from its manager.</span> |
| <Link id="m-getbone" /><code>{"Transform GetBone(Transform oldBone, bool isLoggingUnfoundBones)"}</code> | <span className="api-desc">Finds this character's bone with the same name (or entity original name) as another rig's bone. Can log misses.</span> |
| <Link id="m-setfirstperson" /><code>{"void SetFirstPerson(bool isFirstPerson)"}</code> | <span className="api-desc">Switches first person mode and tells the manager.</span> |
| <Link id="m-setmanager" /><code>{"void SetManager("}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager)"}</code> | <span className="api-desc">Sets the customization manager and raises `onManagerUpdated`.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtomap" /><code>{"private void AddToMap(Transform transform)"}</code> | <span className="api-desc">Adds a transform and all its children to `childMap` by name, keeping the first of any duplicate name.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-preparechildmap" /><code>{"private void PrepareChildMap()"}</code> | <span className="api-desc">Builds `childMap` from the root bone the first time a bone is looked up.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Caches the object's name in `Name`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerCustomizationHandler`:

<div className="api-used-in">

[`PlayerCharacter.customizationHandler`](/mod/game-api/types/alta-player/playercharacter#m-customizationhandler), [`PlayerCharacter.CustomizationHandler`](/mod/game-api/types/alta-player/playercharacter#m-customizationhandler-2), [`CosmeticCustomizationManager.customizationHandler`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-customizationhandler), [`CosmeticCustomizationManager.CustomizationHandler`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-customizationhandler-2), [`CosmeticPresetApplier.handler`](/mod/game-api/types/alta-customization/cosmeticpresetapplier#m-handler), [`CosmeticPresetsManager.baseHandler`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-basehandler), [`CosmeticPresetsManager.handlerPrefab`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-handlerprefab), [`CosmeticPresetTrophy.handler`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-handler), [`EquipmentCustomizationRoom.customizationHandler`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-customizationhandler), [`PlayerCharacterCustomizationManager.Attach`](/mod/game-api/types/alta-customization/playercharactercustomizationmanager#m-attach), [`PlayerCharacterCustomizationManager.Detach`](/mod/game-api/types/alta-customization/playercharactercustomizationmanager#m-detach), [`PlayerCharacterCustomizationManager.UpdateFirstPerson`](/mod/game-api/types/alta-customization/playercharactercustomizationmanager#m-updatefirstperson), [`ShopInterface.customizationHandler`](/mod/game-api/types/alta-customization/shopinterface#m-customizationhandler), [`PlayerLikeSpectralGhost.handler`](/mod/game-api/types/alta-intelligence/playerlikespectralghost#m-handler), [`LocalPlayerAdvertisingTrophy.handler`](/mod/game-api/types/global-i-l/localplayeradvertisingtrophy#m-handler), [`ModellingCharacter.handler`](/mod/game-api/types/global-m-o/modellingcharacter#m-handler), [`PaintBrush.handler`](/mod/game-api/types/global-p/paintbrush#m-handler).

</div>

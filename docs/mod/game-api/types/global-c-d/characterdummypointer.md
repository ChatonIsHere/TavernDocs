---
title: "CharacterDummyPointer"
description: "Component that points at a CharacterDummy, so other code can find the dummy from this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterDummyPointer

A **class** in `Root.Township`, the global namespace.

Component that points at a `CharacterDummy`, so other code can find the dummy from this object.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CharacterDummySpawner`](/mod/game-api/types/global-c-d/characterdummyspawner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterDummyPointer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-characterdummy" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" characterDummy"}</code> | Backing field for `CharacterDummy`, the character dummy this object points at. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-characterdummy-2" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" { get; set; }"}</code> | The dummy this points to. Subclasses can override it. |

## Used in

Members of other types that take, return or hold a `CharacterDummyPointer`:

[`ArmController.dummy`](/mod/game-api/types/alta-player/armcontroller#m-dummy), [`BasicDummyCharacterController.pointer`](/mod/game-api/types/alta-player/basicdummycharactercontroller#m-pointer), [`CharacterEye.dummy`](/mod/game-api/types/alta-player/charactereye#m-dummy), [`DummyCharacterController.pointer`](/mod/game-api/types/alta-player/dummycharactercontroller#m-pointer), [`MasterHand.dummy`](/mod/game-api/types/alta-player/masterhand#m-dummy), [`PlayerCharacter.dummy`](/mod/game-api/types/alta-player/playercharacter#m-dummy), [`SimpleIKController.dummy`](/mod/game-api/types/alta-player/simpleikcontroller#m-dummy), [`EquipmentCustomizationRoom.dummyPointer`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-dummypointer), [`PlayerCustomizationHandler.pointer`](/mod/game-api/types/alta-customization/playercustomizationhandler#m-pointer), [`VoiceChatMouthController.dummy`](/mod/game-api/types/alta-networking/voicechatmouthcontroller#m-dummy), [`MovementBendController.dummy`](/mod/game-api/types/global-m-o/movementbendcontroller#m-dummy), [`MoveToBone.dummy`](/mod/game-api/types/global-m-o/movetobone#m-dummy), [`NetworkedIKBody.dummy`](/mod/game-api/types/global-m-o/networkedikbody#m-dummy), [`PaintBrush.dummy`](/mod/game-api/types/global-p/paintbrush#m-dummy), [`RebindSkinnedMeshRenderers.pointer`](/mod/game-api/types/global-q-r/rebindskinnedmeshrenderers#m-pointer), [`TransformBone.dummy`](/mod/game-api/types/global-t-x/transformbone#m-dummy), [`WrapBone.dummy`](/mod/game-api/types/global-t-x/wrapbone#m-dummy).

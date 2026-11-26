---
title: "EquipmentCustomizationRoom"
description: "Client: the room spawned for a player's equipment (dress-up) mode, with a dummy that shows their customization and copies their pose."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentCustomizationRoom

A **class** in `Root.Township`, `Alta.Customization`.

Client: the room spawned for a player's equipment (dress-up) mode, with a dummy that shows their customization and copies their pose. `EquipmentState` links and unlinks it.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentCustomizationRoom()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodytransform" /><code>{"private Transform bodyTransform"}</code> | <span className="api-desc">Body transform of the dummy, passed to the rig poser.</span> |
| <Link id="m-boundarytransform" /><code>{"private Transform boundaryTransform"}</code> | <span className="api-desc">The room boundary. Its x scale times two is the distance the player can walk away.</span> |
| <Link id="m-changechecker" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformdeltachangechecker">{"TransformDeltaChangeChecker"}</Link>{" changeChecker"}</code> | <span className="api-desc">Watches the player's head and controllers and fires when all of them have stayed still long enough.</span> |
| <Link id="m-customizationhandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" customizationHandler"}</code> | <span className="api-desc">Customization handler for the dummy, attached to the player's customization.</span> |
| <Link id="m-dummypointer" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummyPointer"}</code> | <span className="api-desc">Points to the character dummy used in the room.</span> |
| <Link id="m-head" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" head"}</code> | <span className="api-desc">Which bone of the dummy rig is the head.</span> |
| <Link id="m-linkedplayercharacter" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" linkedPlayerCharacter"}</code> | <span className="api-desc">The linked player's `PlayerCharacter`. Pose copying is only set up when the controller is one.</span> |
| <Link id="m-playerleftboundarychecker" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" playerLeftBoundaryChecker"}</code> | <span className="api-desc">Running `CheckIfOutsideBoundary` coroutine.</span> |
| <Link id="m-posecheckingdelay" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" poseCheckingDelay"}</code> | <span className="api-desc">Running `DelayPoseChecking` coroutine.</span> |
| <Link id="m-poser" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterrigposer">{"CharacterRigPoser"}</Link>{" poser"}</code> | <span className="api-desc">Copies the player character's pose onto the dummy rig.</span> |
| <Link id="m-roomanimator" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/equipmentroomanimator">{"EquipmentRoomAnimator"}</Link>{" roomAnimator"}</code> | <span className="api-desc">Plays the room's appear and disappear animations.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dummy" /><code><Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" Dummy { get; private set; }"}</code> | <span className="api-desc">The character dummy in the room, set by `LinkToPlayer`.</span> |
| <Link id="m-dummyhead" /><code>{"Transform DummyHead { get; private set; }"}</code> | <span className="api-desc">The dummy's head bone, used to aim the camera flash.</span> |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The player the room is linked to.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/equipmentstatesettings">{"EquipmentStateSettings"}</Link>{" Settings { get; set; }"}</code> | <span className="api-desc">The equipment state settings, loaded in `Awake`.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-playerleftboundary" /><code>{"event Action PlayerLeftBoundary"}</code> | <span className="api-desc">Raised when the player has stayed outside the room boundary for too long.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-linktoplayer" /><code>{"void LinkToPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Starts the room for a player: attaches their customization to the dummy, sets up pose copying and the boundary check, and plays the appear animation and sound.</span> |
| <Link id="m-unlink" /><code>{"void Unlink()"}</code> | <span className="api-desc">Stops pose copying and the boundary check, destroys the customization handler and plays the disappear animation, which then destroys the room.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attempttocopypose" /><code>{"private void AttemptToCopyPose()"}</code> | <span className="api-desc">When the player holds still, poses the dummy like them and, if set up, flashes the screen and plays the pose sound.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Loads the `EquipmentStateSettings` for the room.</span> |
| <Link id="m-checkifoutsideboundary" /><code>{"private IEnumerator CheckIfOutsideBoundary() (iterator)"}</code> | <span className="api-desc">Coroutine: while the player's feet are outside the boundary, ramps up controller haptics and raises `PlayerLeftBoundary` after the set time.</span> |
| <Link id="m-delayposechecking" /><code>{"private IEnumerator DelayPoseChecking() (iterator)"}</code> | <span className="api-desc">Coroutine: waits the settings' start delay, then starts watching the player's head and hands for a freeze.</span> |
| <Link id="m-destroyroom" /><code>{"private void DestroyRoom()"}</code> | <span className="api-desc">Destroys the room object once its disappear animation ends.</span> |
| <Link id="m-isvaliddummybone" /><code>{"private bool IsValidDummyBone(Transform bone)"}</code> | <span className="api-desc">Bone filter for the poser: only bones whose names end in `_jnt`.</span> |
| <Link id="m-setupposecopying" /><code>{"private void SetupPoseCopying()"}</code> | <span className="api-desc">Creates the change checker on the player's head and controllers and the rig poser that copies their pose to the dummy.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EquipmentCustomizationRoom`:

<div className="api-used-in">

[`EquipmentState.CustomizationRoom`](/mod/game-api/types/alta-player/equipmentstate#m-customizationroom), [`EquipmentStateSettings.customizationRoom`](/mod/game-api/types/alta-player/equipmentstatesettings#m-customizationroom), [`EquipmentStateSettings.CustomizationRoom`](/mod/game-api/types/alta-player/equipmentstatesettings#m-customizationroom-2).

</div>

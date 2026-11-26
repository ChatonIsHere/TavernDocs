---
title: "EquipmentStateSettings"
description: "Settings for the equipment player state, where a dummy copy of the player appears in front of them to change gear, and copies their pose when they hold still."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentStateSettings

A **class** in `Root.Township`, `Alta.PlayerStates`.

Settings for the equipment player state, where a dummy copy of the player appears in front of them to change gear, and copies their pose when they hold still.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/mod/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`EquipmentStateSettings.Create`](/mod/game-api/types/alta-player/equipmentstatesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/equipmentstatesettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentStateSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationstageoverlap" /><code>{"private float animationStageOverlap"}</code> | <span className="api-desc">How much the dummy's pose animation stages overlap. Default 0.25.</span> |
| <Link id="m-customizationroom" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/equipmentcustomizationroom">{"EquipmentCustomizationRoom"}</Link>{" customizationRoom"}</code> | <span className="api-desc">Prefab of the `EquipmentCustomizationRoom` spawned in equipment mode.</span> |
| <Link id="m-dummymaterializationduration" /><code>{"private float dummyMaterializationDuration"}</code> | <span className="api-desc">Seconds the room takes to appear or disappear. Default 2.</span> |
| <Link id="m-dummyposeanimationduration" /><code>{"private float dummyPoseAnimationDuration"}</code> | <span className="api-desc">Seconds the dummy takes to move into a copied pose. Default 10.</span> |
| <Link id="m-flashduration" /><code>{"private float flashDuration"}</code> | <span className="api-desc">Seconds the camera flash lasts on a pose copy. Default 0.1.</span> |
| <Link id="m-flashexposure" /><code>{"private float flashExposure"}</code> | <span className="api-desc">Brightness of the camera flash, scaled by how directly the player looks at the dummy. Default 12.</span> |
| <Link id="m-flashfadeoutduration" /><code>{"private float flashFadeoutDuration"}</code> | <span className="api-desc">Seconds the camera flash takes to fade. Default 0.8.</span> |
| <Link id="m-isusingcameraflashonposecopy" /><code>{"private bool isUsingCameraFlashOnPoseCopy"}</code> | <span className="api-desc">Whether copying a pose flashes the screen and plays the pose sound. Off by default.</span> |
| <Link id="m-isusingdummyposes" /><code>{"private bool isUsingDummyPoses"}</code> | <span className="api-desc">Whether the dummy copies the player's pose when they hold still. On by default.</span> |
| <Link id="m-maxpositiondeltatotriggerpose" /><code>{"private float maxPositionDeltaToTriggerPose"}</code> | <span className="api-desc">Most the head and hands can move and still count as holding still. Default 0.01.</span> |
| <Link id="m-maxrotationdeltatotriggerpose" /><code>{"private float maxRotationDeltaToTriggerPose"}</code> | <span className="api-desc">Most the head and hands can rotate and still count as holding still. Default 1.</span> |
| <Link id="m-minfreezetimetotriggerpose" /><code>{"private float minFreezeTimeToTriggerPose"}</code> | <span className="api-desc">Seconds the player must hold still before the pose is copied. Default 0.5.</span> |
| <Link id="m-mintimebetweenposes" /><code>{"private float minTimeBetweenPoses"}</code> | <span className="api-desc">Least time between two pose copies. Default 1 second.</span> |
| <Link id="m-posecheckingstartdelay" /><code>{"private float poseCheckingStartDelay"}</code> | <span className="api-desc">Seconds after entering the mode before pose copying starts. Default 10.</span> |
| <Link id="m-remotedummyeffects" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/remoteequipmentmodevisuals">{"RemoteEquipmentModeVisuals"}</Link>{" remoteDummyEffects"}</code> | <span className="api-desc">Visuals spawned in front of a remote player who is in equipment mode.</span> |
| <Link id="m-spawndistancefromplayer" /><code>{"private float spawnDistanceFromPlayer"}</code> | <span className="api-desc">How far in front of the player's feet the room or remote visuals are placed. Default 1.5.</span> |
| <Link id="m-timetobeforcedoutofmodewhenoutsideboundary" /><code>{"private float timeToBeForcedOutOfModeWhenOutsideBoundary"}</code> | <span className="api-desc">Seconds outside the room boundary before the player is pushed out of the mode. Default 3.</span> |
| <Link id="m-timetotoggleequipmentstate" /><code>{"private float timeToToggleEquipmentState"}</code> | <span className="api-desc">Backing field for `TimeToToggleEquipmentState`, default 1.5. Nothing in the decompiled code reads it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationstageoverlap-2" /><code>{"float AnimationStageOverlap { get; }"}</code> | <span className="api-desc">How much the dummy's pose animation stages overlap (0 to 1).</span> |
| <Link id="m-customizationroom-2" /><code><Link to="/mod/game-api/types/alta-customization/equipmentcustomizationroom">{"EquipmentCustomizationRoom"}</Link>{" CustomizationRoom { get; }"}</code> | <span className="api-desc">The room prefab with the dummy, spawned for the local player.</span> |
| <Link id="m-dummymaterializationduration-2" /><code>{"float DummyMaterializationDuration { get; }"}</code> | <span className="api-desc">How long the room takes to appear and disappear, in seconds.</span> |
| <Link id="m-dummyposeanimationduration-2" /><code>{"float DummyPoseAnimationDuration { get; }"}</code> | <span className="api-desc">How long the dummy takes to copy the player's pose.</span> |
| <Link id="m-dummyspawndistancefromplayer" /><code>{"float DummySpawnDistanceFromPlayer { get; }"}</code> | <span className="api-desc">How far in front of the player's feet the dummy appears.</span> |
| <Link id="m-flashduration-2" /><code>{"float FlashDuration { get; }"}</code> | <span className="api-desc">How long the camera flash lasts when the pose is copied.</span> |
| <Link id="m-flashexposure-2" /><code>{"float FlashExposure { get; }"}</code> | <span className="api-desc">Brightness of the camera flash.</span> |
| <Link id="m-flashfadeoutduration-2" /><code>{"float FlashFadeoutDuration { get; }"}</code> | <span className="api-desc">How long the camera flash takes to fade.</span> |
| <Link id="m-isusingcameraflashonposecopy-2" /><code>{"bool IsUsingCameraFlashOnPoseCopy { get; }"}</code> | <span className="api-desc">Whether a camera flash plays when the dummy copies the pose.</span> |
| <Link id="m-isusingdummyposes-2" /><code>{"bool IsUsingDummyPoses { get; }"}</code> | <span className="api-desc">Whether the dummy copies the player's pose at all.</span> |
| <Link id="m-maxpositiondeltatotriggerpose-2" /><code>{"float MaxPositionDeltaToTriggerPose { get; }"}</code> | <span className="api-desc">Most the player's bones may move and still count as holding still.</span> |
| <Link id="m-maxrotationdeltatotriggerpose-2" /><code>{"float MaxRotationDeltaToTriggerPose { get; }"}</code> | <span className="api-desc">Most the player's bones may rotate (degrees) and still count as holding still.</span> |
| <Link id="m-minfreezetimetotriggerpose-2" /><code>{"float MinFreezeTimeToTriggerPose { get; }"}</code> | <span className="api-desc">How long the player must hold still before the pose is copied.</span> |
| <Link id="m-mintimebetweenposes-2" /><code>{"float MinTimeBetweenPoses { get; }"}</code> | <span className="api-desc">Shortest time between two pose copies.</span> |
| <Link id="m-posecheckingstartdelay-2" /><code>{"float PoseCheckingStartDelay { get; }"}</code> | <span className="api-desc">Delay after entering the state before pose checking starts.</span> |
| <Link id="m-remotedummyeffects-2" /><code><Link to="/mod/game-api/types/global-q-r/remoteequipmentmodevisuals">{"RemoteEquipmentModeVisuals"}</Link>{" RemoteDummyEffects { get; }"}</code> | <span className="api-desc">Effect other players see in front of someone in this state.</span> |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | <span className="api-desc">Always `EquipmentState`.</span> |
| <Link id="m-timetobeforcedoutofmodewhenoutsideboundary-2" /><code>{"float TimeToBeForcedOutOfModeWhenOutsideBoundary { get; }"}</code> | <span className="api-desc">How long the player can stay outside the room's boundary before leaving the state.</span> |
| <Link id="m-timetotoggleequipmentstate-2" /><code>{"float TimeToToggleEquipmentState { get; }"}</code> | <span className="api-desc">Time setting for toggling the state. Not read anywhere in this build.</span> |

## Used in

Members of other types that take, return or hold a `EquipmentStateSettings`:

<div className="api-used-in">

[`EquipmentCustomizationRoom.Settings`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-settings), [`EquipmentState.Settings`](/mod/game-api/types/alta-player/equipmentstate#m-settings), [`EquipmentTransition<TFrom, TTo>.EquipmentSettings`](/mod/game-api/types/alta-player/equipmenttransition-tfrom-tto#m-equipmentsettings).

</div>

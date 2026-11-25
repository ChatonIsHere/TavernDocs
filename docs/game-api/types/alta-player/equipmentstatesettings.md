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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`EquipmentStateSettings.Create`](/game-api/types/alta-player/equipmentstatesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-player/equipmentstatesettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentStateSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animationstageoverlap" /><code>{"private float animationStageOverlap"}</code> |  |
| <Link id="m-customizationroom" /><code>{"private "}<Link to="/game-api/types/alta-customization/equipmentcustomizationroom">{"EquipmentCustomizationRoom"}</Link>{" customizationRoom"}</code> |  |
| <Link id="m-dummymaterializationduration" /><code>{"private float dummyMaterializationDuration"}</code> |  |
| <Link id="m-dummyposeanimationduration" /><code>{"private float dummyPoseAnimationDuration"}</code> |  |
| <Link id="m-flashduration" /><code>{"private float flashDuration"}</code> |  |
| <Link id="m-flashexposure" /><code>{"private float flashExposure"}</code> |  |
| <Link id="m-flashfadeoutduration" /><code>{"private float flashFadeoutDuration"}</code> |  |
| <Link id="m-isusingcameraflashonposecopy" /><code>{"private bool isUsingCameraFlashOnPoseCopy"}</code> |  |
| <Link id="m-isusingdummyposes" /><code>{"private bool isUsingDummyPoses"}</code> |  |
| <Link id="m-maxpositiondeltatotriggerpose" /><code>{"private float maxPositionDeltaToTriggerPose"}</code> |  |
| <Link id="m-maxrotationdeltatotriggerpose" /><code>{"private float maxRotationDeltaToTriggerPose"}</code> |  |
| <Link id="m-minfreezetimetotriggerpose" /><code>{"private float minFreezeTimeToTriggerPose"}</code> |  |
| <Link id="m-mintimebetweenposes" /><code>{"private float minTimeBetweenPoses"}</code> |  |
| <Link id="m-posecheckingstartdelay" /><code>{"private float poseCheckingStartDelay"}</code> |  |
| <Link id="m-remotedummyeffects" /><code>{"private "}<Link to="/game-api/types/global-q-r/remoteequipmentmodevisuals">{"RemoteEquipmentModeVisuals"}</Link>{" remoteDummyEffects"}</code> |  |
| <Link id="m-spawndistancefromplayer" /><code>{"private float spawnDistanceFromPlayer"}</code> |  |
| <Link id="m-timetobeforcedoutofmodewhenoutsideboundary" /><code>{"private float timeToBeForcedOutOfModeWhenOutsideBoundary"}</code> |  |
| <Link id="m-timetotoggleequipmentstate" /><code>{"private float timeToToggleEquipmentState"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationstageoverlap-2" /><code>{"float AnimationStageOverlap { get; }"}</code> | How much the dummy's pose animation stages overlap (0 to 1). |
| <Link id="m-customizationroom-2" /><code><Link to="/game-api/types/alta-customization/equipmentcustomizationroom">{"EquipmentCustomizationRoom"}</Link>{" CustomizationRoom { get; }"}</code> | The room prefab with the dummy, spawned for the local player. |
| <Link id="m-dummymaterializationduration-2" /><code>{"float DummyMaterializationDuration { get; }"}</code> | How long the room takes to appear and disappear, in seconds. |
| <Link id="m-dummyposeanimationduration-2" /><code>{"float DummyPoseAnimationDuration { get; }"}</code> | How long the dummy takes to copy the player's pose. |
| <Link id="m-dummyspawndistancefromplayer" /><code>{"float DummySpawnDistanceFromPlayer { get; }"}</code> | How far in front of the player's feet the dummy appears. |
| <Link id="m-flashduration-2" /><code>{"float FlashDuration { get; }"}</code> | How long the camera flash lasts when the pose is copied. |
| <Link id="m-flashexposure-2" /><code>{"float FlashExposure { get; }"}</code> | Brightness of the camera flash. |
| <Link id="m-flashfadeoutduration-2" /><code>{"float FlashFadeoutDuration { get; }"}</code> | How long the camera flash takes to fade. |
| <Link id="m-isusingcameraflashonposecopy-2" /><code>{"bool IsUsingCameraFlashOnPoseCopy { get; }"}</code> | Whether a camera flash plays when the dummy copies the pose. |
| <Link id="m-isusingdummyposes-2" /><code>{"bool IsUsingDummyPoses { get; }"}</code> | Whether the dummy copies the player's pose at all. |
| <Link id="m-maxpositiondeltatotriggerpose-2" /><code>{"float MaxPositionDeltaToTriggerPose { get; }"}</code> | Most the player's bones may move and still count as holding still. |
| <Link id="m-maxrotationdeltatotriggerpose-2" /><code>{"float MaxRotationDeltaToTriggerPose { get; }"}</code> | Most the player's bones may rotate (degrees) and still count as holding still. |
| <Link id="m-minfreezetimetotriggerpose-2" /><code>{"float MinFreezeTimeToTriggerPose { get; }"}</code> | How long the player must hold still before the pose is copied. |
| <Link id="m-mintimebetweenposes-2" /><code>{"float MinTimeBetweenPoses { get; }"}</code> | Shortest time between two pose copies. |
| <Link id="m-posecheckingstartdelay-2" /><code>{"float PoseCheckingStartDelay { get; }"}</code> | Delay after entering the state before pose checking starts. |
| <Link id="m-remotedummyeffects-2" /><code><Link to="/game-api/types/global-q-r/remoteequipmentmodevisuals">{"RemoteEquipmentModeVisuals"}</Link>{" RemoteDummyEffects { get; }"}</code> | Effect other players see in front of someone in this state. |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | Always `EquipmentState`. |
| <Link id="m-timetobeforcedoutofmodewhenoutsideboundary-2" /><code>{"float TimeToBeForcedOutOfModeWhenOutsideBoundary { get; }"}</code> | How long the player can stay outside the room's boundary before leaving the state. |
| <Link id="m-timetotoggleequipmentstate-2" /><code>{"float TimeToToggleEquipmentState { get; }"}</code> | Time setting for toggling the state. Not read anywhere in this build. |

## Used in

Members of other types that take, return or hold a `EquipmentStateSettings`:

[`EquipmentCustomizationRoom.Settings`](/game-api/types/alta-customization/equipmentcustomizationroom#m-settings), [`EquipmentState.Settings`](/game-api/types/alta-player/equipmentstate#m-settings), [`EquipmentTransition<TFrom, TTo>.EquipmentSettings`](/game-api/types/alta-player/equipmenttransition-tfrom-tto#m-equipmentsettings).

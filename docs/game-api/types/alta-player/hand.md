---
title: "Hand"
description: "class Hand in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Hand

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Hand()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-armikcontrollers" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" armIKControllers"}</code> |  |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> |  |
| <Link id="m-controlleroffsetsettings" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleroffsetsettings">{"ControllerOffsetSettings"}</Link>{" controllerOffsetSettings"}</code> |  |
| <Link id="m-gesturecontroller" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturecontroller">{"HandGestureController"}</Link>{" gestureController"}</code> |  |
| <Link id="m-ghosthandcontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/ghosthandcontroller">{"GhostHandController"}</Link>{" ghostHandController"}</code> |  |
| <Link id="m-gripanimator" /><code>{"private "}<Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" gripAnimator"}</code> |  |
| <Link id="m-grippointsave" /><code>{"private TransformSave gripPointSave"}</code> |  |
| <Link id="m-handanimator" /><code>{"private Animator handAnimator"}</code> |  |
| <Link id="m-handindex" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> |  |
| <Link id="m-handtargetsave" /><code>{"private TransformSave handTargetSave"}</code> |  |
| <Link id="m-ikhandtarget" /><code>{"private "}<Link to="/game-api/types/alta-player/handtargethandler">{"HandTargetHandler"}</Link>{" ikHandTarget"}</code> |  |
| <Link id="m-isnotfixingikhandtopickup" /><code>{"private bool isNotFixingIKHandToPickup"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-masterhand" /><code>{"private "}<Link to="/game-api/types/alta-player/masterhand">{"MasterHand"}</Link>{" masterHand"}</code> |  |
| <Link id="m-movedpickupinthisframe" /><code>{"private bool movedPickupInThisFrame"}</code> |  |
| <Link id="m-pickupstatebeforephysics" /><code>{"private TransformSave pickupStateBeforePhysics"}</code> |  |
| <Link id="m-platform" /><code>{"private "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform"}</code> |  |
| <Link id="m-savedcenterofmass" /><code>{"private Vector3 savedCenterOfMass"}</code> |  |
| <Link id="m-shakedetector" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" shakeDetector"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armikcontrollers-2" /><code><Link to="/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" ArmIKControllers { get; }"}</code> |  |
| <Link id="m-armlength" /><code>{"float ArmLength { get; }"}</code> |  |
| <Link id="m-armlengthsquared" /><code>{"float ArmLengthSquared { get; }"}</code> |  |
| <Link id="m-controller-2" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-distancetomasterhand" /><code>{"float DistanceToMasterHand { get; }"}</code> |  |
| <Link id="m-gesturecontroller-2" /><code><Link to="/game-api/types/global-e-h/handgesturecontroller">{"HandGestureController"}</Link>{" GestureController { get; }"}</code> |  |
| <Link id="m-ghosthandcontroller-2" /><code><Link to="/game-api/types/alta-player/ghosthandcontroller">{"GhostHandController"}</Link>{" "}<Link to="/game-api/types/alta-player/ghosthandcontroller">{"GhostHandController"}</Link>{" { get; }"}</code> |  |
| <Link id="m-gripanimator-2" /><code><Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" GripAnimator { get; }"}</code> |  |
| <Link id="m-handanimator-2" /><code>{"Animator HandAnimator { get; }"}</code> |  |
| <Link id="m-handiktarget" /><code>{"Transform HandIKTarget { get; }"}</code> |  |
| <Link id="m-handindex-2" /><code><Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; }"}</code> |  |
| <Link id="m-ikwrist" /><code>{"Transform IKWrist { get; }"}</code> |  |
| <Link id="m-interactor" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isalwaysrenderingpickupatikhand" /><code>{"bool IsAlwaysRenderingPickupAtIKHand { get; set; }"}</code> |  |
| <Link id="m-lastgraboffset" /><code>{"Vector3 LastGrabOffset { get; set; }"}</code> |  |
| <Link id="m-lastgraboffsetrelativetowrist" /><code>{"Vector3 LastGrabOffsetRelativeToWrist { get; set; }"}</code> |  |
| <Link id="m-lastgrabrotation" /><code>{"Quaternion LastGrabRotation { get; set; }"}</code> |  |
| <Link id="m-lastgrabrotationrelativetowrist" /><code>{"Quaternion LastGrabRotationRelativeToWrist { get; set; }"}</code> |  |
| <Link id="m-lastjoint" /><code>{"Joint LastJoint { get; set; }"}</code> |  |
| <Link id="m-masterhand-2" /><code><Link to="/game-api/types/alta-player/masterhand">{"MasterHand"}</Link>{" "}<Link to="/game-api/types/alta-player/masterhand">{"MasterHand"}</Link>{" { get; }"}</code> |  |
| <Link id="m-otherhand" /><code><Link to="/game-api/types/alta-player/hand">{"Hand"}</Link>{" OtherHand { get; }"}</code> |  |
| <Link id="m-savedgrippoint" /><code>{"TransformSave SavedGripPoint { get; }"}</code> |  |
| <Link id="m-savedhandtargetpoint" /><code>{"TransformSave SavedHandTargetPoint { get; }"}</code> |  |
| <Link id="m-shakedetector-2" /><code><Link to="/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" ShakeDetector { get; }"}</code> |  |
| <Link id="m-sqrdistancetomasterhand" /><code>{"float SqrDistanceToMasterHand { get; }"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attachto" /><code>{"void AttachTo(Vector3 wristPosition, Quaternion wristRotation, Transform parent)"}</code> |  |
| <Link id="m-attachtoinplace" /><code>{"void AttachToInPlace(Transform parent)"}</code> |  |
| <Link id="m-averagecenterofmass" /><code>{"static void AverageCenterOfMass("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-c-d/centerofmasssetter">{"CenterOfMassSetter"}</Link>{" centerOfMass)"}</code> |  |
| <Link id="m-detach-2" /><code>{"void Detach()"}</code> |  |
| <Link id="m-movecenterofmasstogrippoint" /><code>{"void MoveCenterOfMassToGripPoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-movegrippoint" /><code>{"void MoveGripPoint(bool isToMaster)"}</code> |  |
| <Link id="m-offsethandtarget" /><code>{"void OffsetHandTarget(Vector3 worldSpacePosition)"}</code> |  |
| <Link id="m-setupwithcontroller" /><code>{"void SetupWithController("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> |  |
| <Link id="m-updatewithcustomoffset" /><code>{"void UpdateWithCustomOffset(SerializableTransform offset)"}</code> |  |
| <Link id="m-detach" /><code>{"private void Detach("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-resetcenterofmass" /><code>{"private void ResetCenterOfMass("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-setupforplatform" /><code>{"private void SetUpForPlatform()"}</code> |  |
| <Link id="m-updatecontrolleroffsets" /><code>{"private void UpdateControllerOffsets(SerializableTransform additionalOffset = null)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Hand`:

[`Controller.hand`](/game-api/types/global-c-d/controller#m-hand), [`Controller.Hand`](/game-api/types/global-c-d/controller#m-hand-2), [`ControllerOffsetSettings.GetControllerOffsetForHand`](/game-api/types/global-c-d/controlleroffsetsettings#m-getcontrolleroffsetforhand), [`HandHoverPoint.currentHand`](/game-api/types/global-e-h/handhoverpoint#m-currenthand).

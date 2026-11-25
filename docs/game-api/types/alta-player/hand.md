---
title: "Hand"
description: "One hand of a player's character: links the controller, IK hand target, grip animator and ghost hand, and handles where held items attach."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Hand

A **class** in `Root.Township`, `Alta.Character`.

One hand of a player's character: links the controller, IK hand target, grip animator and ghost hand, and handles where held items attach. A component under each `Controller`; set up by `SetupWithController`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Hand()"}</code> |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-armikcontrollers" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" armIKControllers"}</code> |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> |
| <Link id="m-controlleroffsetsettings" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleroffsetsettings">{"ControllerOffsetSettings"}</Link>{" controllerOffsetSettings"}</code> |
| <Link id="m-gesturecontroller" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturecontroller">{"HandGestureController"}</Link>{" gestureController"}</code> |
| <Link id="m-ghosthandcontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/ghosthandcontroller">{"GhostHandController"}</Link>{" ghostHandController"}</code> |
| <Link id="m-gripanimator" /><code>{"private "}<Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" gripAnimator"}</code> |
| <Link id="m-grippointsave" /><code>{"private TransformSave gripPointSave"}</code> |
| <Link id="m-handanimator" /><code>{"private Animator handAnimator"}</code> |
| <Link id="m-handindex" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> |
| <Link id="m-handtargetsave" /><code>{"private TransformSave handTargetSave"}</code> |
| <Link id="m-ikhandtarget" /><code>{"private "}<Link to="/game-api/types/alta-player/handtargethandler">{"HandTargetHandler"}</Link>{" ikHandTarget"}</code> |
| <Link id="m-isnotfixingikhandtopickup" /><code>{"private bool isNotFixingIKHandToPickup"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-masterhand" /><code>{"private "}<Link to="/game-api/types/alta-player/masterhand">{"MasterHand"}</Link>{" masterHand"}</code> |
| <Link id="m-movedpickupinthisframe" /><code>{"private bool movedPickupInThisFrame"}</code> |
| <Link id="m-pickupstatebeforephysics" /><code>{"private TransformSave pickupStateBeforePhysics"}</code> |
| <Link id="m-platform" /><code>{"private "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform"}</code> |
| <Link id="m-savedcenterofmass" /><code>{"private Vector3 savedCenterOfMass"}</code> |
| <Link id="m-shakedetector" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" shakeDetector"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armikcontrollers-2" /><code><Link to="/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" ArmIKControllers { get; }"}</code> | The arm IK controllers for this hand. |
| <Link id="m-armlength" /><code>{"float ArmLength { get; }"}</code> | Arm length from the player's hand settings. |
| <Link id="m-armlengthsquared" /><code>{"float ArmLengthSquared { get; }"}</code> | `ArmLength` squared. |
| <Link id="m-controller-2" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; private set; }"}</code> | The `Controller` this hand belongs to, found in its parents if not set. |
| <Link id="m-distancetomasterhand" /><code>{"float DistanceToMasterHand { get; }"}</code> | Distance between the IK hand root and the master hand root, so probably how far the visible hand lags behind the tracked one. |
| <Link id="m-gesturecontroller-2" /><code><Link to="/game-api/types/global-e-h/handgesturecontroller">{"HandGestureController"}</Link>{" GestureController { get; }"}</code> | The hand gesture controller extension on this hand's controller. |
| <Link id="m-ghosthandcontroller-2" /><code><Link to="/game-api/types/alta-player/ghosthandcontroller">{"GhostHandController"}</Link>{" "}<Link to="/game-api/types/alta-player/ghosthandcontroller">{"GhostHandController"}</Link>{" { get; }"}</code> | The ghost hand controller for this hand. |
| <Link id="m-gripanimator-2" /><code><Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" GripAnimator { get; }"}</code> | The grip animator; its transform gets the per-platform controller offset. |
| <Link id="m-handanimator-2" /><code>{"Animator HandAnimator { get; }"}</code> | The hand's animator. |
| <Link id="m-handiktarget" /><code>{"Transform HandIKTarget { get; }"}</code> | The transform the arm IK reaches for. |
| <Link id="m-handindex-2" /><code><Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; }"}</code> | Left or right. |
| <Link id="m-ikwrist" /><code>{"Transform IKWrist { get; }"}</code> | The IK hand root (wrist) transform. |
| <Link id="m-interactor" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> | The controller's interactor, which grabs things. |
| <Link id="m-isalwaysrenderingpickupatikhand" /><code>{"bool IsAlwaysRenderingPickupAtIKHand { get; set; }"}</code> | Whether held items are always drawn at the IK hand. Copied from hand settings at setup. |
| <Link id="m-lastgraboffset" /><code>{"Vector3 LastGrabOffset { get; set; }"}</code> | Grab point in the held pickup's local space, set when it is grabbed. Used for the centre of mass. |
| <Link id="m-lastgraboffsetrelativetowrist" /><code>{"Vector3 LastGrabOffsetRelativeToWrist { get; set; }"}</code> | Grab offset relative to the wrist, set when grabbing. |
| <Link id="m-lastgrabrotation" /><code>{"Quaternion LastGrabRotation { get; set; }"}</code> | Grab rotation relative to the pickup, set when grabbing. |
| <Link id="m-lastgrabrotationrelativetowrist" /><code>{"Quaternion LastGrabRotationRelativeToWrist { get; set; }"}</code> | Grab rotation relative to the wrist, set when grabbing. |
| <Link id="m-lastjoint" /><code>{"Joint LastJoint { get; set; }"}</code> | The joint made by the last grab. |
| <Link id="m-masterhand-2" /><code><Link to="/game-api/types/alta-player/masterhand">{"MasterHand"}</Link>{" "}<Link to="/game-api/types/alta-player/masterhand">{"MasterHand"}</Link>{" { get; }"}</code> | The `MasterHand` that maps the tracked hand onto the IK hand. |
| <Link id="m-otherhand" /><code><Link to="/game-api/types/alta-player/hand">{"Hand"}</Link>{" OtherHand { get; }"}</code> | The player's other hand. |
| <Link id="m-savedgrippoint" /><code>{"TransformSave SavedGripPoint { get; }"}</code> | The grip point's transform saved at setup. |
| <Link id="m-savedhandtargetpoint" /><code>{"TransformSave SavedHandTargetPoint { get; }"}</code> | The IK hand target's transform saved at setup. |
| <Link id="m-shakedetector-2" /><code><Link to="/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" ShakeDetector { get; }"}</code> | The shake-off detector for this hand. |
| <Link id="m-sqrdistancetomasterhand" /><code>{"float SqrDistanceToMasterHand { get; }"}</code> | Squared `DistanceToMasterHand`. A `Lock` uses it to pull a key out. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" Settings { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attachto" /><code>{"void AttachTo(Vector3 wristPosition, Quaternion wristRotation, Transform parent)"}</code> | Parents the IK hand target to a transform at a given wrist position and rotation, so the visible hand sticks to it. |
| <Link id="m-attachtoinplace" /><code>{"void AttachToInPlace(Transform parent)"}</code> | Attaches the IK hand target to a transform where the IK wrist is now. |
| <Link id="m-averagecenterofmass" /><code>{"static void AverageCenterOfMass("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-c-d/centerofmasssetter">{"CenterOfMassSetter"}</Link>{" centerOfMass)"}</code> | Sets a pickup's centre of mass to the average grab offset of all hands holding it. |
| <Link id="m-detach-2" /><code>{"void Detach()"}</code> | Puts the grip point and IK hand target back where they were saved at setup. |
| <Link id="m-movecenterofmasstogrippoint" /><code>{"void MoveCenterOfMassToGripPoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Moves a grabbed pickup's centre of mass to the grab point, or averages it when held by more hands. Skips pickups that override it. |
| <Link id="m-movegrippoint" /><code>{"void MoveGripPoint(bool isToMaster)"}</code> | Moves the controller's grip point under the master hand root, or back to its saved parent. |
| <Link id="m-offsethandtarget" /><code>{"void OffsetHandTarget(Vector3 worldSpacePosition)"}</code> | Moves the IK hand target to a world position. |
| <Link id="m-setupwithcontroller" /><code>{"void SetupWithController("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Links the hand to its controller, applies the platform's controller offset, saves the start transforms and hooks grab events. |
| <Link id="m-updatewithcustomoffset" /><code>{"void UpdateWithCustomOffset(SerializableTransform offset)"}</code> | Reapplies the platform controller offset plus an extra offset. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-detach" /><code>{"private void Detach("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Puts the grip point and IK hand target back where they were saved at setup. |
| <Link id="m-resetcenterofmass" /><code>{"private void ResetCenterOfMass("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-setupforplatform" /><code>{"private void SetUpForPlatform()"}</code> |  |
| <Link id="m-updatecontrolleroffsets" /><code>{"private void UpdateControllerOffsets(SerializableTransform additionalOffset = null)"}</code> |  |

</details>

## Used in

Members of other types that take, return or hold a `Hand`:

[`Controller.hand`](/game-api/types/global-c-d/controller#m-hand), [`Controller.Hand`](/game-api/types/global-c-d/controller#m-hand-2), [`ControllerOffsetSettings.GetControllerOffsetForHand`](/game-api/types/global-c-d/controlleroffsetsettings#m-getcontrolleroffsetforhand), [`HandHoverPoint.currentHand`](/game-api/types/global-e-h/handhoverpoint#m-currenthand).

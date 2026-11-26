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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Hand()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armikcontrollers" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" armIKControllers"}</code> | <span className="api-desc">The arm IK controllers for this hand.</span> |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> | <span className="api-desc">Backing field for `Controller`, found in the parents on first use.</span> |
| <Link id="m-controlleroffsetsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controlleroffsetsettings">{"ControllerOffsetSettings"}</Link>{" controllerOffsetSettings"}</code> | <span className="api-desc">Per-platform controller offsets for each hand.</span> |
| <Link id="m-gesturecontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturecontroller">{"HandGestureController"}</Link>{" gestureController"}</code> | <span className="api-desc">Backing field for `GestureController`.</span> |
| <Link id="m-ghosthandcontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/ghosthandcontroller">{"GhostHandController"}</Link>{" ghostHandController"}</code> | <span className="api-desc">The ghost hand shown when the real hand is held back from the controller.</span> |
| <Link id="m-gripanimator" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" gripAnimator"}</code> | <span className="api-desc">The `HandGrip` that animates the fingers.</span> |
| <Link id="m-grippointsave" /><code>{"private TransformSave gripPointSave"}</code> | <span className="api-desc">The grip point's original transform, saved on setup and restored by `Detach` and `MoveGripPoint`.</span> |
| <Link id="m-handanimator" /><code>{"private Animator handAnimator"}</code> | <span className="api-desc">The hand's `Animator`.</span> |
| <Link id="m-handindex" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | <span className="api-desc">Whether this is the left or right hand.</span> |
| <Link id="m-handtargetsave" /><code>{"private TransformSave handTargetSave"}</code> | <span className="api-desc">The IK hand target's original transform, saved on setup and restored by `Detach`.</span> |
| <Link id="m-ikhandtarget" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handtargethandler">{"HandTargetHandler"}</Link>{" ikHandTarget"}</code> | <span className="api-desc">The IK hand target, used by the controller to measure distance to the ghost hand.</span> |
| <Link id="m-isnotfixingikhandtopickup" /><code>{"private bool isNotFixingIKHandToPickup"}</code> | <span className="api-desc">When set on the prefab, skips hooking the detach and centre of mass handlers whatever `HandSettings` says.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-masterhand" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/masterhand">{"MasterHand"}</Link>{" masterHand"}</code> | <span className="api-desc">The `MasterHand` with the IK and master hand roots.</span> |
| <Link id="m-movedpickupinthisframe" /><code>{"private bool movedPickupInThisFrame"}</code> | <span className="api-desc">Unused in this build.</span> |
| <Link id="m-pickupstatebeforephysics" /><code>{"private TransformSave pickupStateBeforePhysics"}</code> | <span className="api-desc">Unused in this build.</span> |
| <Link id="m-platform" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform"}</code> | <span className="api-desc">The platform the hand was set up for. In the editor, Meta Quest is treated as OpenXR.</span> |
| <Link id="m-savedcenterofmass" /><code>{"private Vector3 savedCenterOfMass"}</code> | <span className="api-desc">The pickup's centre of mass before this hand moved it, restored on release.</span> |
| <Link id="m-shakedetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" shakeDetector"}</code> | <span className="api-desc">Detects the hand shaking things off; exposed as `ShakeDetector`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armikcontrollers-2" /><code><Link to="/mod/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" ArmIKControllers { get; }"}</code> | <span className="api-desc">The arm IK controllers for this hand.</span> |
| <Link id="m-armlength" /><code>{"float ArmLength { get; }"}</code> | <span className="api-desc">Arm length from the player's hand settings.</span> |
| <Link id="m-armlengthsquared" /><code>{"float ArmLengthSquared { get; }"}</code> | <span className="api-desc">`ArmLength` squared.</span> |
| <Link id="m-controller-2" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The `Controller` this hand belongs to, found in its parents if not set.</span> |
| <Link id="m-distancetomasterhand" /><code>{"float DistanceToMasterHand { get; }"}</code> | <span className="api-desc">Distance between the IK hand root and the master hand root, so probably how far the visible hand lags behind the tracked one.</span> |
| <Link id="m-gesturecontroller-2" /><code><Link to="/mod/game-api/types/global-e-h/handgesturecontroller">{"HandGestureController"}</Link>{" GestureController { get; }"}</code> | <span className="api-desc">The hand gesture controller extension on this hand's controller.</span> |
| <Link id="m-ghosthandcontroller-2" /><code><Link to="/mod/game-api/types/alta-player/ghosthandcontroller">{"GhostHandController"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/ghosthandcontroller">{"GhostHandController"}</Link>{" { get; }"}</code> | <span className="api-desc">The ghost hand controller for this hand.</span> |
| <Link id="m-gripanimator-2" /><code><Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" GripAnimator { get; }"}</code> | <span className="api-desc">The grip animator; its transform gets the per-platform controller offset.</span> |
| <Link id="m-handanimator-2" /><code>{"Animator HandAnimator { get; }"}</code> | <span className="api-desc">The hand's animator.</span> |
| <Link id="m-handiktarget" /><code>{"Transform HandIKTarget { get; }"}</code> | <span className="api-desc">The transform the arm IK reaches for.</span> |
| <Link id="m-handindex-2" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; }"}</code> | <span className="api-desc">Left or right.</span> |
| <Link id="m-ikwrist" /><code>{"Transform IKWrist { get; }"}</code> | <span className="api-desc">The IK hand root (wrist) transform.</span> |
| <Link id="m-interactor" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> | <span className="api-desc">The controller's interactor, which grabs things.</span> |
| <Link id="m-isalwaysrenderingpickupatikhand" /><code>{"bool IsAlwaysRenderingPickupAtIKHand { get; set; }"}</code> | <span className="api-desc">Whether held items are always drawn at the IK hand. Copied from hand settings at setup.</span> |
| <Link id="m-lastgraboffset" /><code>{"Vector3 LastGrabOffset { get; set; }"}</code> | <span className="api-desc">Grab point in the held pickup's local space, set when it is grabbed. Used for the centre of mass.</span> |
| <Link id="m-lastgraboffsetrelativetowrist" /><code>{"Vector3 LastGrabOffsetRelativeToWrist { get; set; }"}</code> | <span className="api-desc">Grab offset relative to the wrist, set when grabbing.</span> |
| <Link id="m-lastgrabrotation" /><code>{"Quaternion LastGrabRotation { get; set; }"}</code> | <span className="api-desc">Grab rotation relative to the pickup, set when grabbing.</span> |
| <Link id="m-lastgrabrotationrelativetowrist" /><code>{"Quaternion LastGrabRotationRelativeToWrist { get; set; }"}</code> | <span className="api-desc">Grab rotation relative to the wrist, set when grabbing.</span> |
| <Link id="m-lastjoint" /><code>{"Joint LastJoint { get; set; }"}</code> | <span className="api-desc">The joint made by the last grab.</span> |
| <Link id="m-masterhand-2" /><code><Link to="/mod/game-api/types/alta-player/masterhand">{"MasterHand"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/masterhand">{"MasterHand"}</Link>{" { get; }"}</code> | <span className="api-desc">The `MasterHand` that maps the tracked hand onto the IK hand.</span> |
| <Link id="m-otherhand" /><code><Link to="/mod/game-api/types/alta-player/hand">{"Hand"}</Link>{" OtherHand { get; }"}</code> | <span className="api-desc">The player's other hand.</span> |
| <Link id="m-savedgrippoint" /><code>{"TransformSave SavedGripPoint { get; }"}</code> | <span className="api-desc">The grip point's transform saved at setup.</span> |
| <Link id="m-savedhandtargetpoint" /><code>{"TransformSave SavedHandTargetPoint { get; }"}</code> | <span className="api-desc">The IK hand target's transform saved at setup.</span> |
| <Link id="m-shakedetector-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/handshakeoffdetector">{"HandShakeOffDetector"}</Link>{" ShakeDetector { get; }"}</code> | <span className="api-desc">The shake-off detector for this hand.</span> |
| <Link id="m-sqrdistancetomasterhand" /><code>{"float SqrDistanceToMasterHand { get; }"}</code> | <span className="api-desc">Squared `DistanceToMasterHand`. A `Lock` uses it to pull a key out.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The player's `HandSettings`, from `PlayerSettings`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attachto" /><code>{"void AttachTo(Vector3 wristPosition, Quaternion wristRotation, Transform parent)"}</code> | <span className="api-desc">Parents the IK hand target to a transform at a given wrist position and rotation, so the visible hand sticks to it.</span> |
| <Link id="m-attachtoinplace" /><code>{"void AttachToInPlace(Transform parent)"}</code> | <span className="api-desc">Attaches the IK hand target to a transform where the IK wrist is now.</span> |
| <Link id="m-averagecenterofmass" /><code>{"static void AverageCenterOfMass("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-c-d/centerofmasssetter">{"CenterOfMassSetter"}</Link>{" centerOfMass)"}</code> | <span className="api-desc">Sets a pickup's centre of mass to the average grab offset of all hands holding it.</span> |
| <Link id="m-detach-2" /><code>{"void Detach()"}</code> | <span className="api-desc">Puts the grip point and IK hand target back where they were saved at setup.</span> |
| <Link id="m-movecenterofmasstogrippoint" /><code>{"void MoveCenterOfMassToGripPoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Moves a grabbed pickup's centre of mass to the grab point, or averages it when held by more hands. Skips pickups that override it.</span> |
| <Link id="m-movegrippoint" /><code>{"void MoveGripPoint(bool isToMaster)"}</code> | <span className="api-desc">Moves the controller's grip point under the master hand root, or back to its saved parent.</span> |
| <Link id="m-offsethandtarget" /><code>{"void OffsetHandTarget(Vector3 worldSpacePosition)"}</code> | <span className="api-desc">Moves the IK hand target to a world position.</span> |
| <Link id="m-setupwithcontroller" /><code>{"void SetupWithController("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Links the hand to its controller, applies the platform's controller offset, saves the start transforms and hooks grab events.</span> |
| <Link id="m-updatewithcustomoffset" /><code>{"void UpdateWithCustomOffset(SerializableTransform offset)"}</code> | <span className="api-desc">Reapplies the platform controller offset plus an extra offset.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-detach" /><code>{"private void Detach("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Puts the grip point and IK hand target back where they were saved at setup.</span> |
| <Link id="m-resetcenterofmass" /><code>{"private void ResetCenterOfMass("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">When a hand lets go, restores the pickup's centre of mass (or removes a temporary setter), or averages the remaining hands' grab points.</span> |
| <Link id="m-setupforplatform" /><code>{"private void SetUpForPlatform()"}</code> | <span className="api-desc">Works out the hand's platform (local player mode or the network player's) and applies its controller offsets.</span> |
| <Link id="m-updatecontrolleroffsets" /><code>{"private void UpdateControllerOffsets(SerializableTransform additionalOffset = null)"}</code> | <span className="api-desc">Moves the grip animator to the platform's controller offset, plus any extra offset. Throws if no offset exists for the platform.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Hand`:

<div className="api-used-in">

[`Controller.hand`](/mod/game-api/types/global-c-d/controller#m-hand), [`Controller.Hand`](/mod/game-api/types/global-c-d/controller#m-hand-2), [`ControllerOffsetSettings.GetControllerOffsetForHand`](/mod/game-api/types/global-c-d/controlleroffsetsettings#m-getcontrolleroffsetforhand), [`HandHoverPoint.currentHand`](/mod/game-api/types/global-e-h/handhoverpoint#m-currenthand).

</div>

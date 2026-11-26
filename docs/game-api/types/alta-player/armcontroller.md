---
title: "ArmController"
description: "Hand-written arm solver for a character dummy: each update it rotates the clavicle, shoulder, elbow, forearm and wrist bones to reach the ghost hand, with..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArmController

A **class** in `Root.Township`, `Alta.Character`.

Hand-written arm solver for a character dummy: each update it rotates the clavicle, shoulder, elbow, forearm and wrist bones to reach the ghost hand, with slight stretch. One per arm.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ArmController()"}</code> |

## Fields

<details>
<summary>33 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chest" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" chest"}</code> | Bone ID of the chest. |
| <Link id="m-chesttoabdomen" /><code>{"private Vector3 chestToAbdomen"}</code> | Chest axis pointing down to the abdomen, for this update. |
| <Link id="m-chesttoarm" /><code>{"private Vector3 chestToArm"}</code> | Chest axis pointing out towards this arm, for this update. |
| <Link id="m-chesttofront" /><code>{"private Vector3 chestToFront"}</code> | Chest axis pointing forward, for this update. |
| <Link id="m-clavicle" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" clavicle"}</code> | Bone ID of the clavicle. |
| <Link id="m-claviclelength" /><code>{"private float clavicleLength"}</code> | Measured clavicle length. |
| <Link id="m-clavicletofront" /><code>{"private Vector3 clavicleToFront"}</code> | Clavicle forward direction after rotation. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Pointer to the character dummy whose rig is posed. |
| <Link id="m-elbow" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" elbow"}</code> | Bone ID of the elbow. |
| <Link id="m-elboworiginalposition" /><code>{"private Vector3 elbowOriginalPosition"}</code> | Elbow rest local position, restored each update before stretching. |
| <Link id="m-forearm" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" forearm"}</code> | Bone ID of the forearm. |
| <Link id="m-forearmlength" /><code>{"private float forearmLength"}</code> | Measured forearm length. |
| <Link id="m-forearmoriginalposition" /><code>{"private Vector3 forearmOriginalPosition"}</code> | Forearm rest local position, restored each update before stretching. |
| <Link id="m-ghosthand" /><code>{"private "}<Link to="/game-api/types/alta-player/handtargethandler">{"HandTargetHandler"}</Link>{" ghostHand"}</code> | Handler that provides the hand target transform. |
| <Link id="m-handrotation" /><code>{"private Quaternion handRotation"}</code> | Ghost hand rotation for this update. |
| <Link id="m-head" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" head"}</code> | Bone ID of the head. |
| <Link id="m-lasttwistangle" /><code>{"private float lastTwistAngle"}</code> | Twist amount from the previous update, used to avoid flips. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-lookrotationcomplement" /><code>{"private static Quaternion lookRotationComplement"}</code> | Fixed rotation that maps the rig's bone axes onto Unity's look rotation. |
| <Link id="m-maxstretch" /><code>{"private float maxStretch"}</code> | Largest extra length the arm may stretch to reach the hand. |
| <Link id="m-oldelbowpull" /><code>{"private Vector3 oldElbowPull"}</code> | Smoothed elbow pull point from the previous update. |
| <Link id="m-otherarm" /><code>{"private "}<Link to="/game-api/types/alta-player/armcontroller">{"ArmController"}</Link>{" otherArm"}</code> | Backing field for `OtherArm`. |
| <Link id="m-shoulder" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" shoulder"}</code> | Bone ID of the shoulder. |
| <Link id="m-shoulderposition" /><code>{"private Vector3 shoulderPosition"}</code> | Shoulder world position for this update. |
| <Link id="m-side" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" side"}</code> | Backing field for `Side`. |
| <Link id="m-sidemultiplier" /><code>{"private float sideMultiplier"}</code> | -1 for the left arm, 1 for the right, used to mirror axes. |
| <Link id="m-upperarmlength" /><code>{"private float upperArmLength"}</code> | Measured upper arm length. |
| <Link id="m-uppertolowerarmstretchratio" /><code>{"private float upperToLowerArmStretchRatio"}</code> | How stretch is split between the upper arm (elbow) and forearm. |
| <Link id="m-wrist" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" wrist"}</code> | Bone ID of the wrist. |
| <Link id="m-wristback" /><code>{"private Vector3 wristBack"}</code> | Back-of-hand direction for this update. |
| <Link id="m-wristposition" /><code>{"private Vector3 wristPosition"}</code> | Ghost hand position for this update. |
| <Link id="m-wristthumb" /><code>{"private Vector3 wristThumb"}</code> | Thumb direction for this update. |
| <Link id="m-wristtoarm" /><code>{"private Vector3 wristToArm"}</code> | Direction from the wrist back along the arm for this update. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chest-2" /><code>{"Transform Chest { get; private set; }"}</code> | The chest bone. |
| <Link id="m-clavicle-2" /><code>{"Transform Clavicle { get; private set; }"}</code> | The clavicle bone. |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { get; private set; }"}</code> | The elbow bone (upper arm end). |
| <Link id="m-forearm-2" /><code>{"Transform Forearm { get; private set; }"}</code> | The forearm twist bone. |
| <Link id="m-ghosthand-2" /><code>{"Transform GhostHand { get; }"}</code> | The hand target transform the arm reaches for. |
| <Link id="m-head-2" /><code>{"Transform Head { get; private set; }"}</code> | The head bone. |
| <Link id="m-otherarm-2" /><code><Link to="/game-api/types/alta-player/armcontroller">{"ArmController"}</Link>{" OtherArm { get; }"}</code> | The arm controller for the other side. |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; private set; }"}</code> | The shoulder (upper arm) bone. |
| <Link id="m-side-2" /><code><Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" Side { get; }"}</code> | Which hand this arm is. |
| <Link id="m-wrist-2" /><code>{"Transform Wrist { get; private set; }"}</code> | The wrist (hand) bone. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | Runs the full arm solve for this frame. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Looks up the arm bones in the dummy's rig map and remembers the elbow and forearm rest positions. |
| <Link id="m-calculateelbowpull" /><code>{"private Vector3 CalculateElbowPull(out float shoulderToWritDistance)"}</code> | Works out a smoothed point the elbow is pulled towards, based on wrist and chest positions. |
| <Link id="m-calculateidealelbowup" /><code>{"private Vector3 CalculateIdealElbowUp(Vector3 upperArmNormalized, Vector3 forearmNormalized)"}</code> | Works out the preferred up direction for the elbow from the upper arm and forearm directions. |
| <Link id="m-getarmvectors" /><code>{"private void GetArmVectors(out Vector3 upperArmNormalized, out Vector3 forearmNormalized)"}</code> | Solves the elbow position and returns the normalised upper arm and forearm directions. |
| <Link id="m-getinitialvectors" /><code>{"private void GetInitialVectors()"}</code> | Reads the ghost hand pose and chest axes for this update and resets elbow and forearm positions. |
| <Link id="m-getshouldervectors" /><code>{"private void GetShoulderVectors(Vector3 clavicleUp)"}</code> | Updates the shoulder position and the clavicle forward direction after the clavicle is rotated. |
| <Link id="m-getupvectors" /><code>{"private void GetUpVectors(out Vector3 shoulderUp, out Vector3 elbowUp, out Vector3 forearmUp, Vector3 upperArmNormalized, Vector3 forearmNormalized)"}</code> | Gets the up vectors for shoulder, elbow and forearm, including shoulder limit and twist. |
| <Link id="m-handlearmtwist" /><code>{"private void HandleArmTwist(ref Vector3 elbowUp, Vector3 upperArmNormalized, Vector3 forearmNormalized, out Vector3 wristThumbForwardRemoved)"}</code> | Rotates the elbow up vector to follow the wrist's twist, avoiding sudden flips. |
| <Link id="m-ikelbowpull" /><code>{"private Vector3 IKElbowPull(Vector3 elbowPull, float shoulderToWrist)"}</code> | Two-bone IK step: returns the upper arm direction that bends towards the elbow pull point. |
| <Link id="m-limitshoulder" /><code>{"private Vector3 LimitShoulder(Vector3 idealElbowUp)"}</code> | Pushes the elbow up vector towards the clavicle's front so the shoulder does not twist too far. |
| <Link id="m-lookrotation" /><code>{"private Quaternion LookRotation(Vector3 forward, Vector3 up)"}</code> | Look rotation corrected for this rig's bone axes and the arm's side. |
| <Link id="m-rotatearm" /><code>{"private void RotateArm()"}</code> | Rotates shoulder, elbow, forearm and wrist and shifts the elbow and forearm to stretch towards the hand. |
| <Link id="m-rotateclavicle" /><code>{"private Quaternion RotateClavicle()"}</code> | Rotates the clavicle towards the hand and returns its new rotation. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Measures clavicle, upper arm and forearm lengths and sets the side multiplier. |

</details>

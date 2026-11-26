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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArmController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>33 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chest" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" chest"}</code> | <span className="api-desc">Bone ID of the chest.</span> |
| <Link id="m-chesttoabdomen" /><code>{"private Vector3 chestToAbdomen"}</code> | <span className="api-desc">Chest axis pointing down to the abdomen, for this update.</span> |
| <Link id="m-chesttoarm" /><code>{"private Vector3 chestToArm"}</code> | <span className="api-desc">Chest axis pointing out towards this arm, for this update.</span> |
| <Link id="m-chesttofront" /><code>{"private Vector3 chestToFront"}</code> | <span className="api-desc">Chest axis pointing forward, for this update.</span> |
| <Link id="m-clavicle" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" clavicle"}</code> | <span className="api-desc">Bone ID of the clavicle.</span> |
| <Link id="m-claviclelength" /><code>{"private float clavicleLength"}</code> | <span className="api-desc">Measured clavicle length.</span> |
| <Link id="m-clavicletofront" /><code>{"private Vector3 clavicleToFront"}</code> | <span className="api-desc">Clavicle forward direction after rotation.</span> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | <span className="api-desc">Pointer to the character dummy whose rig is posed.</span> |
| <Link id="m-elbow" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" elbow"}</code> | <span className="api-desc">Bone ID of the elbow.</span> |
| <Link id="m-elboworiginalposition" /><code>{"private Vector3 elbowOriginalPosition"}</code> | <span className="api-desc">Elbow rest local position, restored each update before stretching.</span> |
| <Link id="m-forearm" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" forearm"}</code> | <span className="api-desc">Bone ID of the forearm.</span> |
| <Link id="m-forearmlength" /><code>{"private float forearmLength"}</code> | <span className="api-desc">Measured forearm length.</span> |
| <Link id="m-forearmoriginalposition" /><code>{"private Vector3 forearmOriginalPosition"}</code> | <span className="api-desc">Forearm rest local position, restored each update before stretching.</span> |
| <Link id="m-ghosthand" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handtargethandler">{"HandTargetHandler"}</Link>{" ghostHand"}</code> | <span className="api-desc">Handler that provides the hand target transform.</span> |
| <Link id="m-handrotation" /><code>{"private Quaternion handRotation"}</code> | <span className="api-desc">Ghost hand rotation for this update.</span> |
| <Link id="m-head" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" head"}</code> | <span className="api-desc">Bone ID of the head.</span> |
| <Link id="m-lasttwistangle" /><code>{"private float lastTwistAngle"}</code> | <span className="api-desc">Twist amount from the previous update, used to avoid flips.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-lookrotationcomplement" /><code>{"private static Quaternion lookRotationComplement"}</code> | <span className="api-desc">Fixed rotation that maps the rig's bone axes onto Unity's look rotation.</span> |
| <Link id="m-maxstretch" /><code>{"private float maxStretch"}</code> | <span className="api-desc">Largest extra length the arm may stretch to reach the hand.</span> |
| <Link id="m-oldelbowpull" /><code>{"private Vector3 oldElbowPull"}</code> | <span className="api-desc">Smoothed elbow pull point from the previous update.</span> |
| <Link id="m-otherarm" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/armcontroller">{"ArmController"}</Link>{" otherArm"}</code> | <span className="api-desc">Backing field for `OtherArm`.</span> |
| <Link id="m-shoulder" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" shoulder"}</code> | <span className="api-desc">Bone ID of the shoulder.</span> |
| <Link id="m-shoulderposition" /><code>{"private Vector3 shoulderPosition"}</code> | <span className="api-desc">Shoulder world position for this update.</span> |
| <Link id="m-side" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" side"}</code> | <span className="api-desc">Backing field for `Side`.</span> |
| <Link id="m-sidemultiplier" /><code>{"private float sideMultiplier"}</code> | <span className="api-desc">-1 for the left arm, 1 for the right, used to mirror axes.</span> |
| <Link id="m-upperarmlength" /><code>{"private float upperArmLength"}</code> | <span className="api-desc">Measured upper arm length.</span> |
| <Link id="m-uppertolowerarmstretchratio" /><code>{"private float upperToLowerArmStretchRatio"}</code> | <span className="api-desc">How stretch is split between the upper arm (elbow) and forearm.</span> |
| <Link id="m-wrist" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" wrist"}</code> | <span className="api-desc">Bone ID of the wrist.</span> |
| <Link id="m-wristback" /><code>{"private Vector3 wristBack"}</code> | <span className="api-desc">Back-of-hand direction for this update.</span> |
| <Link id="m-wristposition" /><code>{"private Vector3 wristPosition"}</code> | <span className="api-desc">Ghost hand position for this update.</span> |
| <Link id="m-wristthumb" /><code>{"private Vector3 wristThumb"}</code> | <span className="api-desc">Thumb direction for this update.</span> |
| <Link id="m-wristtoarm" /><code>{"private Vector3 wristToArm"}</code> | <span className="api-desc">Direction from the wrist back along the arm for this update.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chest-2" /><code>{"Transform Chest { get; private set; }"}</code> | <span className="api-desc">The chest bone.</span> |
| <Link id="m-clavicle-2" /><code>{"Transform Clavicle { get; private set; }"}</code> | <span className="api-desc">The clavicle bone.</span> |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { get; private set; }"}</code> | <span className="api-desc">The elbow bone (upper arm end).</span> |
| <Link id="m-forearm-2" /><code>{"Transform Forearm { get; private set; }"}</code> | <span className="api-desc">The forearm twist bone.</span> |
| <Link id="m-ghosthand-2" /><code>{"Transform GhostHand { get; }"}</code> | <span className="api-desc">The hand target transform the arm reaches for.</span> |
| <Link id="m-head-2" /><code>{"Transform Head { get; private set; }"}</code> | <span className="api-desc">The head bone.</span> |
| <Link id="m-otherarm-2" /><code><Link to="/mod/game-api/types/alta-player/armcontroller">{"ArmController"}</Link>{" OtherArm { get; }"}</code> | <span className="api-desc">The arm controller for the other side.</span> |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; private set; }"}</code> | <span className="api-desc">The shoulder (upper arm) bone.</span> |
| <Link id="m-side-2" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" Side { get; }"}</code> | <span className="api-desc">Which hand this arm is.</span> |
| <Link id="m-wrist-2" /><code>{"Transform Wrist { get; private set; }"}</code> | <span className="api-desc">The wrist (hand) bone.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | <span className="api-desc">Runs the full arm solve for this frame.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Looks up the arm bones in the dummy's rig map and remembers the elbow and forearm rest positions.</span> |
| <Link id="m-calculateelbowpull" /><code>{"private Vector3 CalculateElbowPull(out float shoulderToWritDistance)"}</code> | <span className="api-desc">Works out a smoothed point the elbow is pulled towards, based on wrist and chest positions.</span> |
| <Link id="m-calculateidealelbowup" /><code>{"private Vector3 CalculateIdealElbowUp(Vector3 upperArmNormalized, Vector3 forearmNormalized)"}</code> | <span className="api-desc">Works out the preferred up direction for the elbow from the upper arm and forearm directions.</span> |
| <Link id="m-getarmvectors" /><code>{"private void GetArmVectors(out Vector3 upperArmNormalized, out Vector3 forearmNormalized)"}</code> | <span className="api-desc">Solves the elbow position and returns the normalised upper arm and forearm directions.</span> |
| <Link id="m-getinitialvectors" /><code>{"private void GetInitialVectors()"}</code> | <span className="api-desc">Reads the ghost hand pose and chest axes for this update and resets elbow and forearm positions.</span> |
| <Link id="m-getshouldervectors" /><code>{"private void GetShoulderVectors(Vector3 clavicleUp)"}</code> | <span className="api-desc">Updates the shoulder position and the clavicle forward direction after the clavicle is rotated.</span> |
| <Link id="m-getupvectors" /><code>{"private void GetUpVectors(out Vector3 shoulderUp, out Vector3 elbowUp, out Vector3 forearmUp, Vector3 upperArmNormalized, Vector3 forearmNormalized)"}</code> | <span className="api-desc">Gets the up vectors for shoulder, elbow and forearm, including shoulder limit and twist.</span> |
| <Link id="m-handlearmtwist" /><code>{"private void HandleArmTwist(ref Vector3 elbowUp, Vector3 upperArmNormalized, Vector3 forearmNormalized, out Vector3 wristThumbForwardRemoved)"}</code> | <span className="api-desc">Rotates the elbow up vector to follow the wrist's twist, avoiding sudden flips.</span> |
| <Link id="m-ikelbowpull" /><code>{"private Vector3 IKElbowPull(Vector3 elbowPull, float shoulderToWrist)"}</code> | <span className="api-desc">Two-bone IK step: returns the upper arm direction that bends towards the elbow pull point.</span> |
| <Link id="m-limitshoulder" /><code>{"private Vector3 LimitShoulder(Vector3 idealElbowUp)"}</code> | <span className="api-desc">Pushes the elbow up vector towards the clavicle's front so the shoulder does not twist too far.</span> |
| <Link id="m-lookrotation" /><code>{"private Quaternion LookRotation(Vector3 forward, Vector3 up)"}</code> | <span className="api-desc">Look rotation corrected for this rig's bone axes and the arm's side.</span> |
| <Link id="m-rotatearm" /><code>{"private void RotateArm()"}</code> | <span className="api-desc">Rotates shoulder, elbow, forearm and wrist and shifts the elbow and forearm to stretch towards the hand.</span> |
| <Link id="m-rotateclavicle" /><code>{"private Quaternion RotateClavicle()"}</code> | <span className="api-desc">Rotates the clavicle towards the hand and returns its new rotation.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Measures clavicle, upper arm and forearm lengths and sets the side multiplier.</span> |

</details>

---
title: "ArmController"
description: "class ArmController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArmController

A **class** in `Root.Township`, `Alta.Character`.

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

| Member |
| --- |
| <Link id="m-chest" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" chest"}</code> |
| <Link id="m-chesttoabdomen" /><code>{"private Vector3 chestToAbdomen"}</code> |
| <Link id="m-chesttoarm" /><code>{"private Vector3 chestToArm"}</code> |
| <Link id="m-chesttofront" /><code>{"private Vector3 chestToFront"}</code> |
| <Link id="m-clavicle" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" clavicle"}</code> |
| <Link id="m-claviclelength" /><code>{"private float clavicleLength"}</code> |
| <Link id="m-clavicletofront" /><code>{"private Vector3 clavicleToFront"}</code> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> |
| <Link id="m-elbow" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" elbow"}</code> |
| <Link id="m-elboworiginalposition" /><code>{"private Vector3 elbowOriginalPosition"}</code> |
| <Link id="m-forearm" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" forearm"}</code> |
| <Link id="m-forearmlength" /><code>{"private float forearmLength"}</code> |
| <Link id="m-forearmoriginalposition" /><code>{"private Vector3 forearmOriginalPosition"}</code> |
| <Link id="m-ghosthand" /><code>{"private "}<Link to="/game-api/types/alta-player/handtargethandler">{"HandTargetHandler"}</Link>{" ghostHand"}</code> |
| <Link id="m-handrotation" /><code>{"private Quaternion handRotation"}</code> |
| <Link id="m-head" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" head"}</code> |
| <Link id="m-lasttwistangle" /><code>{"private float lastTwistAngle"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-lookrotationcomplement" /><code>{"private static Quaternion lookRotationComplement"}</code> |
| <Link id="m-maxstretch" /><code>{"private float maxStretch"}</code> |
| <Link id="m-oldelbowpull" /><code>{"private Vector3 oldElbowPull"}</code> |
| <Link id="m-otherarm" /><code>{"private "}<Link to="/game-api/types/alta-player/armcontroller">{"ArmController"}</Link>{" otherArm"}</code> |
| <Link id="m-shoulder" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" shoulder"}</code> |
| <Link id="m-shoulderposition" /><code>{"private Vector3 shoulderPosition"}</code> |
| <Link id="m-side" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" side"}</code> |
| <Link id="m-sidemultiplier" /><code>{"private float sideMultiplier"}</code> |
| <Link id="m-upperarmlength" /><code>{"private float upperArmLength"}</code> |
| <Link id="m-uppertolowerarmstretchratio" /><code>{"private float upperToLowerArmStretchRatio"}</code> |
| <Link id="m-wrist" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" wrist"}</code> |
| <Link id="m-wristback" /><code>{"private Vector3 wristBack"}</code> |
| <Link id="m-wristposition" /><code>{"private Vector3 wristPosition"}</code> |
| <Link id="m-wristthumb" /><code>{"private Vector3 wristThumb"}</code> |
| <Link id="m-wristtoarm" /><code>{"private Vector3 wristToArm"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-chest-2" /><code>{"Transform Chest { get; private set; }"}</code> |
| <Link id="m-clavicle-2" /><code>{"Transform Clavicle { get; private set; }"}</code> |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { get; private set; }"}</code> |
| <Link id="m-forearm-2" /><code>{"Transform Forearm { get; private set; }"}</code> |
| <Link id="m-ghosthand-2" /><code>{"Transform GhostHand { get; }"}</code> |
| <Link id="m-head-2" /><code>{"Transform Head { get; private set; }"}</code> |
| <Link id="m-otherarm-2" /><code><Link to="/game-api/types/alta-player/armcontroller">{"ArmController"}</Link>{" OtherArm { get; }"}</code> |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; private set; }"}</code> |
| <Link id="m-side-2" /><code><Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" Side { get; }"}</code> |
| <Link id="m-wrist-2" /><code>{"Transform Wrist { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> |

<details>
<summary>14 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-calculateelbowpull" /><code>{"private Vector3 CalculateElbowPull(out float shoulderToWritDistance)"}</code> |
| <Link id="m-calculateidealelbowup" /><code>{"private Vector3 CalculateIdealElbowUp(Vector3 upperArmNormalized, Vector3 forearmNormalized)"}</code> |
| <Link id="m-getarmvectors" /><code>{"private void GetArmVectors(out Vector3 upperArmNormalized, out Vector3 forearmNormalized)"}</code> |
| <Link id="m-getinitialvectors" /><code>{"private void GetInitialVectors()"}</code> |
| <Link id="m-getshouldervectors" /><code>{"private void GetShoulderVectors(Vector3 clavicleUp)"}</code> |
| <Link id="m-getupvectors" /><code>{"private void GetUpVectors(out Vector3 shoulderUp, out Vector3 elbowUp, out Vector3 forearmUp, Vector3 upperArmNormalized, Vector3 forearmNormalized)"}</code> |
| <Link id="m-handlearmtwist" /><code>{"private void HandleArmTwist(ref Vector3 elbowUp, Vector3 upperArmNormalized, Vector3 forearmNormalized, out Vector3 wristThumbForwardRemoved)"}</code> |
| <Link id="m-ikelbowpull" /><code>{"private Vector3 IKElbowPull(Vector3 elbowPull, float shoulderToWrist)"}</code> |
| <Link id="m-limitshoulder" /><code>{"private Vector3 LimitShoulder(Vector3 idealElbowUp)"}</code> |
| <Link id="m-lookrotation" /><code>{"private Quaternion LookRotation(Vector3 forward, Vector3 up)"}</code> |
| <Link id="m-rotatearm" /><code>{"private void RotateArm()"}</code> |
| <Link id="m-rotateclavicle" /><code>{"private Quaternion RotateClavicle()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

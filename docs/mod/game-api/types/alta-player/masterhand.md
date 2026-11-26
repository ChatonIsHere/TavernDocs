---
title: "MasterHand"
description: "Copies the finger bone rotations of the hand-pose (master) hand onto the character rig's IK hand after the grip updates each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MasterHand

A **class** in `Root.Township`, `Alta.Character`.

Copies the finger bone rotations of the hand-pose (master) hand onto the character rig's IK hand after the grip updates each frame.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MasterHand()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Pointer to the character dummy whose rig holds the IK hand. |
| <Link id="m-fingerchildindex" /><code>{"private static int[] fingerChildIndex"}</code> | Child index of each finger under the IK hand root. |
| <Link id="m-handgrip" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" handGrip"}</code> | The hand grip whose `PostLateUpdate` drives the copy. |
| <Link id="m-ikhandroot" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" ikHandRoot"}</code> | Bone identifier for the IK hand root on the rig. |
| <Link id="m-ikhandroottransform" /><code>{"private Transform ikHandRootTransform"}</code> | Backing field for `IKHandRoot`, resolved in `Awake`. |
| <Link id="m-masterhandbones" /><code>{"private Transform[] masterHandBones"}</code> | Master finger bones to copy from. |
| <Link id="m-masterhandroot" /><code>{"private Transform masterHandRoot"}</code> | Backing field for `MasterHandRoot`. |
| <Link id="m-mastertoikmap" /><code>{"private Dictionary<Transform, Transform> masterToIKMap"}</code> | Master bone to IK bone lookup built by `SetupBonesMap`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ikhandroot-2" /><code>{"Transform IKHandRoot { get; }"}</code> | The rig's IK hand root that rotations are copied to. |
| <Link id="m-masterhandroot-2" /><code>{"Transform MasterHandRoot { get; }"}</code> | Root of the master hand whose finger bones are the source. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfingerbonesfromroot" /><code>{"static Transform[] GetFingerBonesFromRoot(Transform root)"}</code> | Returns a hand root's five finger bones in the game's finger order. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applybones" /><code>{"private bool ApplyBones()"}</code> | Editor apply method: fills or clears `masterHandBones` depending on whether an IK hand root bone is set. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the IK hand root on the character rig and builds the bone map. |
| <Link id="m-copyhandbones" /><code>{"private void CopyHandBones()"}</code> | Copies local rotations from each master finger bone to its IK counterpart. Hooked to the grip's `PostLateUpdate`. |
| <Link id="m-copyhandbones-2" /><code>{"private void CopyHandBones(Dictionary<Transform, Transform> bonesMap)"}</code> | Copies local rotations from each master finger bone to its IK counterpart. Hooked to the grip's `PostLateUpdate`. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops copying bones. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws a red line from the master hand root to the IK hand root. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts copying bones after each grip late update, if an IK root is set. |
| <Link id="m-setupbonesmap" /><code>{"private void SetupBonesMap()"}</code> | Maps each master finger joint (three per finger) to the matching IK hand joint. |

</details>

## Used in

Members of other types that take, return or hold a `MasterHand`:

[`Hand.masterHand`](/mod/game-api/types/alta-player/hand#m-masterhand), [`Hand.MasterHand`](/mod/game-api/types/alta-player/hand#m-masterhand-2).

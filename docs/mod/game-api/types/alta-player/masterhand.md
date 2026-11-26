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
| <Link id="m-ctor" /><code>{"MasterHand()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | <span className="api-desc">Pointer to the character dummy whose rig holds the IK hand.</span> |
| <Link id="m-fingerchildindex" /><code>{"private static int[] fingerChildIndex"}</code> | <span className="api-desc">Child index of each finger under the IK hand root.</span> |
| <Link id="m-handgrip" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" handGrip"}</code> | <span className="api-desc">The hand grip whose `PostLateUpdate` drives the copy.</span> |
| <Link id="m-ikhandroot" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" ikHandRoot"}</code> | <span className="api-desc">Bone identifier for the IK hand root on the rig.</span> |
| <Link id="m-ikhandroottransform" /><code>{"private Transform ikHandRootTransform"}</code> | <span className="api-desc">Backing field for `IKHandRoot`, resolved in `Awake`.</span> |
| <Link id="m-masterhandbones" /><code>{"private Transform[] masterHandBones"}</code> | <span className="api-desc">Master finger bones to copy from.</span> |
| <Link id="m-masterhandroot" /><code>{"private Transform masterHandRoot"}</code> | <span className="api-desc">Backing field for `MasterHandRoot`.</span> |
| <Link id="m-mastertoikmap" /><code>{"private Dictionary<Transform, Transform> masterToIKMap"}</code> | <span className="api-desc">Master bone to IK bone lookup built by `SetupBonesMap`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ikhandroot-2" /><code>{"Transform IKHandRoot { get; }"}</code> | <span className="api-desc">The rig's IK hand root that rotations are copied to.</span> |
| <Link id="m-masterhandroot-2" /><code>{"Transform MasterHandRoot { get; }"}</code> | <span className="api-desc">Root of the master hand whose finger bones are the source.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfingerbonesfromroot" /><code>{"static Transform[] GetFingerBonesFromRoot(Transform root)"}</code> | <span className="api-desc">Returns a hand root's five finger bones in the game's finger order.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applybones" /><code>{"private bool ApplyBones()"}</code> | <span className="api-desc">Editor apply method: fills or clears `masterHandBones` depending on whether an IK hand root bone is set.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the IK hand root on the character rig and builds the bone map.</span> |
| <Link id="m-copyhandbones" /><code>{"private void CopyHandBones()"}</code> | <span className="api-desc">Copies local rotations from each master finger bone to its IK counterpart. Hooked to the grip's `PostLateUpdate`.</span> |
| <Link id="m-copyhandbones-2" /><code>{"private void CopyHandBones(Dictionary<Transform, Transform> bonesMap)"}</code> | <span className="api-desc">Copies local rotations from each master finger bone to its IK counterpart. Hooked to the grip's `PostLateUpdate`.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops copying bones.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws a red line from the master hand root to the IK hand root.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts copying bones after each grip late update, if an IK root is set.</span> |
| <Link id="m-setupbonesmap" /><code>{"private void SetupBonesMap()"}</code> | <span className="api-desc">Maps each master finger joint (three per finger) to the matching IK hand joint.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MasterHand`:

<div className="api-used-in">

[`Hand.masterHand`](/mod/game-api/types/alta-player/hand#m-masterhand), [`Hand.MasterHand`](/mod/game-api/types/alta-player/hand#m-masterhand-2).

</div>

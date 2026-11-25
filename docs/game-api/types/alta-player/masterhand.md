---
title: "MasterHand"
description: "class MasterHand in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MasterHand

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MasterHand()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> |  |
| <Link id="m-fingerchildindex" /><code>{"private static int[] fingerChildIndex"}</code> |  |
| <Link id="m-handgrip" /><code>{"private "}<Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" handGrip"}</code> |  |
| <Link id="m-ikhandroot" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" ikHandRoot"}</code> |  |
| <Link id="m-ikhandroottransform" /><code>{"private Transform ikHandRootTransform"}</code> |  |
| <Link id="m-masterhandbones" /><code>{"private Transform[] masterHandBones"}</code> |  |
| <Link id="m-masterhandroot" /><code>{"private Transform masterHandRoot"}</code> |  |
| <Link id="m-mastertoikmap" /><code>{"private Dictionary<Transform, Transform> masterToIKMap"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ikhandroot-2" /><code>{"Transform IKHandRoot { get; }"}</code> |  |
| <Link id="m-masterhandroot-2" /><code>{"Transform MasterHandRoot { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfingerbonesfromroot" /><code>{"static Transform[] GetFingerBonesFromRoot(Transform root)"}</code> |  |
| <Link id="m-applybones" /><code>{"private bool ApplyBones()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-copyhandbones" /><code>{"private void CopyHandBones()"}</code> |  |
| <Link id="m-copyhandbones-2" /><code>{"private void CopyHandBones(Dictionary<Transform, Transform> bonesMap)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-setupbonesmap" /><code>{"private void SetupBonesMap()"}</code> |  |

## Used in

Members of other types that take, return or hold a `MasterHand`:

[`Hand.masterHand`](/game-api/types/alta-player/hand#m-masterhand), [`Hand.MasterHand`](/game-api/types/alta-player/hand#m-masterhand-2).

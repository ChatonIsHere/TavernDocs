---
title: "CharacterRigPoser"
description: "class CharacterRigPoser in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterRigPoser

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterRigPoser(Transform dummyRootBone, Transform dummyBodyTransform, Transform characterRigRootBone, Transform characterBodyTransform, Func<Transform, bool> dummyBonesFilter, Func<Transform, Transform> boneMapFromPlayerToDummy, float minTimeBetweenPoses = 2)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bonemapfromplayertodummy" /><code>{"private Func<Transform, Transform> boneMapFromPlayerToDummy"}</code> |  |
| <Link id="m-bonestages" /><code>{"private List<List<Transform>> boneStages"}</code> |  |
| <Link id="m-characterbodytransform" /><code>{"private Transform characterBodyTransform"}</code> |  |
| <Link id="m-characterrigrootbone" /><code>{"private Transform characterRigRootBone"}</code> |  |
| <Link id="m-dummybodytransform" /><code>{"private Transform dummyBodyTransform"}</code> |  |
| <Link id="m-dummyrootbone" /><code>{"private Transform dummyRootBone"}</code> |  |
| <Link id="m-isdummybonevalidfilter" /><code>{"private Func<Transform, bool> isDummyBoneValidFilter"}</code> |  |
| <Link id="m-lastposetime" /><code>{"private float lastPoseTime"}</code> |  |
| <Link id="m-mintimebetweenposes" /><code>{"private float minTimeBetweenPoses"}</code> |  |
| <Link id="m-numberofstages" /><code>{"private int numberOfStages"}</code> |  |
| <Link id="m-posinganimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" posingAnimation"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttocopyplayercharacterspose" /><code>{"bool AttemptToCopyPlayerCharactersPose(float animationDuration, float animationStageOverlap)"}</code> |  |
| <Link id="m-animatebodyroot" /><code>{"private IEnumerator AnimateBodyRoot(float animationDuration) (iterator)"}</code> |  |
| <Link id="m-animatebonelocalposition" /><code>{"private IEnumerator AnimateBoneLocalPosition(Transform bone, Vector3 targetLocalPosition, float duration) (iterator)"}</code> |  |
| <Link id="m-animatebonelocalrotation" /><code>{"private IEnumerator AnimateBoneLocalRotation(Transform bone, Quaternion targetLocalRotation, float duration) (iterator)"}</code> |  |
| <Link id="m-animatedummypose" /><code>{"private IEnumerator AnimateDummyPose(float totalDuration, float stageAnimationOverlap) (iterator)"}</code> |  |
| <Link id="m-copyposition" /><code>{"private void CopyPosition(Transform targetTransform, Transform originalTransform, float animationDuration)"}</code> |  |
| <Link id="m-copyrotation" /><code>{"private void CopyRotation(Transform targetTransform, Transform originalTransform, float animationDuration)"}</code> |  |
| <Link id="m-getmaxbonedepth" /><code>{"private int GetMaxBoneDepth(Transform bone, int maxBoneDepth)"}</code> |  |
| <Link id="m-preparebonesstages" /><code>{"private void PrepareBonesStages()"}</code> |  |
| <Link id="m-startboneanimation" /><code>{"private void StartBoneAnimation(Transform currentBone, float animationDuration)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CharacterRigPoser`:

[`EquipmentCustomizationRoom.poser`](/game-api/types/alta-customization/equipmentcustomizationroom#m-poser).

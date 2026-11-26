---
title: "CharacterRigPoser"
description: "Copies a player character's pose onto a dummy rig, bone by bone from the root outwards, over a set time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterRigPoser

A **class** in `Root.Township`, no namespace.

Copies a player character's pose onto a dummy rig, bone by bone from the root outwards, over a set time. Used by `EquipmentCustomizationRoom`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterRigPoser(Transform dummyRootBone, Transform dummyBodyTransform, Transform characterRigRootBone, Transform characterBodyTransform, Func<Transform, bool> dummyBonesFilter, Func<Transform, Transform> boneMapFromPlayerToDummy, float minTimeBetweenPoses = 2)"}</code> | Creates a `CharacterRigPoser` from `dummyRootBone`, `dummyBodyTransform`, `characterRigRootBone`, `characterBodyTransform`, `dummyBonesFilter`, `boneMapFromPlayerToDummy` and `minTimeBetweenPoses`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bonemapfromplayertodummy" /><code>{"private Func<Transform, Transform> boneMapFromPlayerToDummy"}</code> | Finds the player bone that matches a dummy bone (despite the name, it maps dummy to player). |
| <Link id="m-bonestages" /><code>{"private List<List<Transform>> boneStages"}</code> | Dummy bones grouped by depth, posed one group at a time. |
| <Link id="m-characterbodytransform" /><code>{"private Transform characterBodyTransform"}</code> | The player character's body transform. |
| <Link id="m-characterrigrootbone" /><code>{"private Transform characterRigRootBone"}</code> | The player character's root bone. |
| <Link id="m-dummybodytransform" /><code>{"private Transform dummyBodyTransform"}</code> | The dummy's body transform. |
| <Link id="m-dummyrootbone" /><code>{"private Transform dummyRootBone"}</code> | The dummy's root bone. |
| <Link id="m-isdummybonevalidfilter" /><code>{"private Func<Transform, bool> isDummyBoneValidFilter"}</code> | Filter that decides which dummy bones are posed. |
| <Link id="m-lastposetime" /><code>{"private float lastPoseTime"}</code> | Time the last pose copy started. |
| <Link id="m-mintimebetweenposes" /><code>{"private float minTimeBetweenPoses"}</code> | Minimum seconds between pose copies. Defaults to 2. |
| <Link id="m-numberofstages" /><code>{"private int numberOfStages"}</code> | Number of bone depth stages. |
| <Link id="m-posinganimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" posingAnimation"}</code> | The running pose coroutine, stopped if a new pose starts. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttocopyplayercharacterspose" /><code>{"bool AttemptToCopyPlayerCharactersPose(float animationDuration, float animationStageOverlap)"}</code> | Starts copying the pose. Returns false if the last pose was less than `minTimeBetweenPoses` ago. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatebodyroot" /><code>{"private IEnumerator AnimateBodyRoot(float animationDuration) (iterator)"}</code> | Moves the dummy body to the character body's height and tilt (ignoring yaw and horizontal position). |
| <Link id="m-animatebonelocalposition" /><code>{"private IEnumerator AnimateBoneLocalPosition(Transform bone, Vector3 targetLocalPosition, float duration) (iterator)"}</code> | Coroutine that moves a bone's local position to a target over a duration. |
| <Link id="m-animatebonelocalrotation" /><code>{"private IEnumerator AnimateBoneLocalRotation(Transform bone, Quaternion targetLocalRotation, float duration) (iterator)"}</code> | Coroutine that rotates a bone's local rotation to a target over a duration, or at once if the duration is 0. |
| <Link id="m-animatedummypose" /><code>{"private IEnumerator AnimateDummyPose(float totalDuration, float stageAnimationOverlap) (iterator)"}</code> | Coroutine that poses the body root, then each bone stage in turn with some overlap. |
| <Link id="m-copyposition" /><code>{"private void CopyPosition(Transform targetTransform, Transform originalTransform, float animationDuration)"}</code> | Starts moving a transform to another's local height, with X and Z zeroed. |
| <Link id="m-copyrotation" /><code>{"private void CopyRotation(Transform targetTransform, Transform originalTransform, float animationDuration)"}</code> | Starts rotating a transform to another's local rotation, with yaw zeroed. |
| <Link id="m-getmaxbonedepth" /><code>{"private int GetMaxBoneDepth(Transform bone, int maxBoneDepth)"}</code> | Returns the deepest scene hierarchy depth under a bone. |
| <Link id="m-preparebonesstages" /><code>{"private void PrepareBonesStages()"}</code> | Groups the dummy's bones by depth into stages, skipping bones the filter rejects. |
| <Link id="m-startboneanimation" /><code>{"private void StartBoneAnimation(Transform currentBone, float animationDuration)"}</code> | Starts rotating a dummy bone to match its player bone. Logs a warning if no match is found. |

</details>

## Used in

Members of other types that take, return or hold a `CharacterRigPoser`:

[`EquipmentCustomizationRoom.poser`](/game-api/types/alta-customization/equipmentcustomizationroom#m-poser).

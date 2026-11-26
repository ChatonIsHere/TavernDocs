---
title: "CharacterRigPoser"
description: "Copies a player character's pose onto a dummy rig, bone by bone from the root outwards, over a set time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterRigPoser

A **class** in `Root.Township`, the global namespace.

Copies a player character's pose onto a dummy rig, bone by bone from the root outwards, over a set time. Used by `EquipmentCustomizationRoom`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterRigPoser(Transform dummyRootBone, Transform dummyBodyTransform, Transform characterRigRootBone, Transform characterBodyTransform, Func<Transform, bool> dummyBonesFilter, Func<Transform, Transform> boneMapFromPlayerToDummy, float minTimeBetweenPoses = 2)"}</code> | <span className="api-desc">Creates a `CharacterRigPoser` from `dummyRootBone`, `dummyBodyTransform`, `characterRigRootBone`, `characterBodyTransform`, `dummyBonesFilter`, `boneMapFromPlayerToDummy` and `minTimeBetweenPoses`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bonemapfromplayertodummy" /><code>{"private Func<Transform, Transform> boneMapFromPlayerToDummy"}</code> | <span className="api-desc">Finds the player bone that matches a dummy bone (despite the name, it maps dummy to player).</span> |
| <Link id="m-bonestages" /><code>{"private List<List<Transform>> boneStages"}</code> | <span className="api-desc">Dummy bones grouped by depth, posed one group at a time.</span> |
| <Link id="m-characterbodytransform" /><code>{"private Transform characterBodyTransform"}</code> | <span className="api-desc">The player character's body transform.</span> |
| <Link id="m-characterrigrootbone" /><code>{"private Transform characterRigRootBone"}</code> | <span className="api-desc">The player character's root bone.</span> |
| <Link id="m-dummybodytransform" /><code>{"private Transform dummyBodyTransform"}</code> | <span className="api-desc">The dummy's body transform.</span> |
| <Link id="m-dummyrootbone" /><code>{"private Transform dummyRootBone"}</code> | <span className="api-desc">The dummy's root bone.</span> |
| <Link id="m-isdummybonevalidfilter" /><code>{"private Func<Transform, bool> isDummyBoneValidFilter"}</code> | <span className="api-desc">Filter that decides which dummy bones are posed.</span> |
| <Link id="m-lastposetime" /><code>{"private float lastPoseTime"}</code> | <span className="api-desc">Time the last pose copy started.</span> |
| <Link id="m-mintimebetweenposes" /><code>{"private float minTimeBetweenPoses"}</code> | <span className="api-desc">Minimum seconds between pose copies. Defaults to 2.</span> |
| <Link id="m-numberofstages" /><code>{"private int numberOfStages"}</code> | <span className="api-desc">Number of bone depth stages.</span> |
| <Link id="m-posinganimation" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" posingAnimation"}</code> | <span className="api-desc">The running pose coroutine, stopped if a new pose starts.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttocopyplayercharacterspose" /><code>{"bool AttemptToCopyPlayerCharactersPose(float animationDuration, float animationStageOverlap)"}</code> | <span className="api-desc">Starts copying the pose. Returns false if the last pose was less than `minTimeBetweenPoses` ago.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatebodyroot" /><code>{"private IEnumerator AnimateBodyRoot(float animationDuration) (iterator)"}</code> | <span className="api-desc">Moves the dummy body to the character body's height and tilt (ignoring yaw and horizontal position).</span> |
| <Link id="m-animatebonelocalposition" /><code>{"private IEnumerator AnimateBoneLocalPosition(Transform bone, Vector3 targetLocalPosition, float duration) (iterator)"}</code> | <span className="api-desc">Coroutine that moves a bone's local position to a target over a duration.</span> |
| <Link id="m-animatebonelocalrotation" /><code>{"private IEnumerator AnimateBoneLocalRotation(Transform bone, Quaternion targetLocalRotation, float duration) (iterator)"}</code> | <span className="api-desc">Coroutine that rotates a bone's local rotation to a target over a duration, or at once if the duration is 0.</span> |
| <Link id="m-animatedummypose" /><code>{"private IEnumerator AnimateDummyPose(float totalDuration, float stageAnimationOverlap) (iterator)"}</code> | <span className="api-desc">Coroutine that poses the body root, then each bone stage in turn with some overlap.</span> |
| <Link id="m-copyposition" /><code>{"private void CopyPosition(Transform targetTransform, Transform originalTransform, float animationDuration)"}</code> | <span className="api-desc">Starts moving a transform to another's local height, with X and Z zeroed.</span> |
| <Link id="m-copyrotation" /><code>{"private void CopyRotation(Transform targetTransform, Transform originalTransform, float animationDuration)"}</code> | <span className="api-desc">Starts rotating a transform to another's local rotation, with yaw zeroed.</span> |
| <Link id="m-getmaxbonedepth" /><code>{"private int GetMaxBoneDepth(Transform bone, int maxBoneDepth)"}</code> | <span className="api-desc">Returns the deepest scene hierarchy depth under a bone.</span> |
| <Link id="m-preparebonesstages" /><code>{"private void PrepareBonesStages()"}</code> | <span className="api-desc">Groups the dummy's bones by depth into stages, skipping bones the filter rejects.</span> |
| <Link id="m-startboneanimation" /><code>{"private void StartBoneAnimation(Transform currentBone, float animationDuration)"}</code> | <span className="api-desc">Starts rotating a dummy bone to match its player bone. Logs a warning if no match is found.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CharacterRigPoser`:

<div className="api-used-in">

[`EquipmentCustomizationRoom.poser`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-poser).

</div>

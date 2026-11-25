---
title: "BuildingAnimation"
description: "class BuildingAnimation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingAnimation

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)
- **Derived types** [`BuildingAnimationEvent`](/game-api/types/global-a-b/buildinganimationevent), [`BuildingAnimationUnityEvent`](/game-api/types/global-a-b/buildinganimationunityevent)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildingAnimation()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animationdirection" /><code>{"private Vector3 animationDirection"}</code> |  |
| <Link id="m-animationfinished" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimationevent">{"BuildingAnimationEvent"}</Link>{" animationFinished"}</code> |  |
| <Link id="m-animationparent" /><code>{"private Transform animationParent"}</code> |  |
| <Link id="m-animationstarted" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimationevent">{"BuildingAnimationEvent"}</Link>{" animationStarted"}</code> |  |
| <Link id="m-basedistance" /><code>{"private float baseDistance"}</code> |  |
| <Link id="m-durationmultiplier" /><code>{"private AnimationCurve durationMultiplier"}</code> |  |
| <Link id="m-effectonappear" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectOnAppear"}</code> |  |
| <Link id="m-effectonposition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectOnPosition"}</code> |  |
| <Link id="m-hasmovingcolliders" /><code>{"private bool hasMovingColliders"}</code> |  |
| <Link id="m-insertduration" /><code>{"private float insertDuration"}</code> |  |
| <Link id="m-isplayingonenable" /><code>{"private bool isPlayingOnEnable"}</code> |  |
| <Link id="m-isrepeatable" /><code>{"private bool isRepeatable"}</code> |  |
| <Link id="m-isskippinganimation" /><code>{"private bool isSkippingAnimation"}</code> |  |
| <Link id="m-movingparts" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{"> movingParts"}</code> |  |
| <Link id="m-overallduration" /><code>{"private float overallDuration"}</code> |  |
| <Link id="m-releasetime" /><code>{"private AnimationCurve releaseTime"}</code> |  |
| <Link id="m-soundonappear" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundOnAppear"}</code> |  |
| <Link id="m-soundonposition" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundOnPosition"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationparent-2" /><code>{"Transform AnimationParent { get; }"}</code> |  |
| <Link id="m-movingparts-2" /><code>{"List<"}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{"> MovingParts { get; }"}</code> |  |
| <Link id="m-preinsertanimation" /><code>{"Func<"}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{", float, bool, IEnumerator, IEnumerator> PreInsertAnimation { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-animationfinished-2" /><code>{"event Action AnimationFinished"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateparts" /><code>{"void GenerateParts(Transform[] components)"}</code> |  |
| <Link id="m-ordercomponents" /><code>{"void OrderComponents(Component[] components)"}</code> |  |
| <Link id="m-play" /><code>{"void Play()"}</code> |  |
| <Link id="m-playinstant" /><code>{"void PlayInstant()"}</code> |  |
| <Link id="m-setisskippinganimation" /><code>{"void SetIsSkippingAnimation(bool isSkipping)"}</code> |  |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |  |
| <Link id="m-animatepart" /><code>{"private IEnumerator AnimatePart("}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{" part, float duration, bool isLast) (iterator)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-onanimationfinished" /><code>{"private void OnAnimationFinished()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-playanimation" /><code>{"private IEnumerator PlayAnimation() (iterator)"}</code> |  |
| <Link id="m-shouldkeepanimationparts" /><code>{"private bool ShouldKeepAnimationParts("}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{" part)"}</code> |  |

## Used in

Members of other types that take, return or hold a `BuildingAnimation`:

[`BuildingAnimationWrapper.animationPrefab`](/game-api/types/global-a-b/buildinganimationwrapper#m-animationprefab), [`BuildingAnimationWrapper.spawned`](/game-api/types/global-a-b/buildinganimationwrapper#m-spawned).

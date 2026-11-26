---
title: "BuildingAnimation"
description: "Plays a build-up animation where an object's parts fly in one by one along a direction, with sounds and effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingAnimation

A **class** in `Root.Township`, no namespace.

Plays a build-up animation where an object's parts fly in one by one along a direction, with sounds and effects. Parts are set up in the editor.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)
- **Derived types** [`BuildingAnimationEvent`](/game-api/types/global-a-b/buildinganimationevent), [`BuildingAnimationUnityEvent`](/game-api/types/global-a-b/buildinganimationunityevent)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildingAnimation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationdirection" /><code>{"private Vector3 animationDirection"}</code> | Local direction parts are ordered along and fly in from. |
| <Link id="m-animationfinished" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimationevent">{"BuildingAnimationEvent"}</Link>{" animationFinished"}</code> | Serialized event raised when the animation ends. |
| <Link id="m-animationparent" /><code>{"private Transform animationParent"}</code> | Backing field for `AnimationParent`. |
| <Link id="m-animationstarted" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimationevent">{"BuildingAnimationEvent"}</Link>{" animationStarted"}</code> | Serialized event raised when the animated build starts. |
| <Link id="m-basedistance" /><code>{"private float baseDistance"}</code> | Distance parts start from their final position when generated. |
| <Link id="m-durationmultiplier" /><code>{"private AnimationCurve durationMultiplier"}</code> | Curve over overall progress that scales each part's insert time. Later parts go faster by default. |
| <Link id="m-effectonappear" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectOnAppear"}</code> | Pooled effect spawned where a part appears, unless the part overrides it. |
| <Link id="m-effectonposition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectOnPosition"}</code> | Pooled effect spawned where a part lands, unless the part overrides it. |
| <Link id="m-hasmovingcolliders" /><code>{"private bool hasMovingColliders"}</code> | Serialized flag that nothing reads in this build. |
| <Link id="m-insertduration" /><code>{"private float insertDuration"}</code> | Base seconds for one part to move into place. |
| <Link id="m-isplayingonenable" /><code>{"private bool isPlayingOnEnable"}</code> | Whether the animation plays when the object is enabled. |
| <Link id="m-isrepeatable" /><code>{"private bool isRepeatable"}</code> | Keeps the parts (hidden) after playing so the animation can play again. |
| <Link id="m-isskippinganimation" /><code>{"private bool isSkippingAnimation"}</code> | When set, `Play` jumps straight to the end. Cleared when the animation finishes. |
| <Link id="m-movingparts" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{"> movingParts"}</code> | Backing field for `MovingParts`. |
| <Link id="m-overallduration" /><code>{"private float overallDuration"}</code> | Seconds over which all parts are released. |
| <Link id="m-releasetime" /><code>{"private AnimationCurve releaseTime"}</code> | Curve from overall progress to the fraction of parts released. |
| <Link id="m-soundonappear" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundOnAppear"}</code> | Sound played where a part appears, unless the part overrides it. |
| <Link id="m-soundonposition" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundOnPosition"}</code> | Sound played where a part lands, unless the part overrides it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationparent-2" /><code>{"Transform AnimationParent { get; }"}</code> | Parent transform for the animated parts. |
| <Link id="m-movingparts-2" /><code>{"List<"}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{"> MovingParts { get; }"}</code> | The parts that fly in, in release order. |
| <Link id="m-preinsertanimation" /><code>{"Func<"}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{", float, bool, IEnumerator, IEnumerator> PreInsertAnimation { get; set; }"}</code> | Optional hook that wraps each part's animation, for an extra step before it flies in. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-animationfinished-2" /><code>{"event Action AnimationFinished"}</code> | Raised when the last part lands, or straight away with `PlayInstant`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateparts" /><code>{"void GenerateParts(Transform[] components)"}</code> | Editor: makes an animation part for each transform, moving out sideways from the animation direction. |
| <Link id="m-ordercomponents" /><code>{"void OrderComponents(Component[] components)"}</code> | Editor: sorts components along the animation direction. |
| <Link id="m-play" /><code>{"void Play()"}</code> | Plays the animation from the start, or finishes instantly if skipping is set. |
| <Link id="m-playinstant" /><code>{"void PlayInstant()"}</code> | Finishes at once. The temporary parts are hidden if repeatable or skipping, otherwise destroyed. |
| <Link id="m-setisskippinganimation" /><code>{"void SetIsSkippingAnimation(bool isSkipping)"}</code> | Makes the next `Play` finish instantly. Resets after the animation finishes. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Stops the animation and hides all parts again. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatepart" /><code>{"private IEnumerator AnimatePart("}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{" part, float duration, bool isLast) (iterator)"}</code> | Coroutine that plays the appear effects, moves one part from its start to final position over the duration, then plays the land effects. The last part finishes the animation. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hides every moving part, recalculates their positions and hooks `OnAnimationFinished`. `Stop` calls it again to reset. |
| <Link id="m-onanimationfinished" /><code>{"private void OnAnimationFinished()"}</code> | Clears the skip flag once the animation ends. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks `OnAnimationFinished`. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws an arrow along the animation direction. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Plays the animation if `isPlayingOnEnable` is set. |
| <Link id="m-playanimation" /><code>{"private IEnumerator PlayAnimation() (iterator)"}</code> | Coroutine that releases parts over `overallDuration` following the `releaseTime` curve and starts each part's move. |
| <Link id="m-shouldkeepanimationparts" /><code>{"private bool ShouldKeepAnimationParts("}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{" part)"}</code> | Whether parts are hidden rather than destroyed at the end: true when repeatable or skipping. |

</details>

## Used in

Members of other types that take, return or hold a `BuildingAnimation`:

[`BuildingAnimationWrapper.animationPrefab`](/game-api/types/global-a-b/buildinganimationwrapper#m-animationprefab), [`BuildingAnimationWrapper.spawned`](/game-api/types/global-a-b/buildinganimationwrapper#m-spawned).

---
title: "BuildingAnimation"
description: "Plays a build-up animation where an object's parts fly in one by one along a direction, with sounds and effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingAnimation

A **class** in `Root.Township`, the global namespace.

Plays a build-up animation where an object's parts fly in one by one along a direction, with sounds and effects. Parts are set up in the editor.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/mod/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit)
- **Derived types** [`BuildingAnimationEvent`](/mod/game-api/types/global-a-b/buildinganimationevent), [`BuildingAnimationUnityEvent`](/mod/game-api/types/global-a-b/buildinganimationunityevent)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildingAnimation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationdirection" /><code>{"private Vector3 animationDirection"}</code> | <span className="api-desc">Local direction parts are ordered along and fly in from.</span> |
| <Link id="m-animationfinished" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buildinganimationevent">{"BuildingAnimationEvent"}</Link>{" animationFinished"}</code> | <span className="api-desc">Serialized event raised when the animation ends.</span> |
| <Link id="m-animationparent" /><code>{"private Transform animationParent"}</code> | <span className="api-desc">Backing field for `AnimationParent`.</span> |
| <Link id="m-animationstarted" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buildinganimationevent">{"BuildingAnimationEvent"}</Link>{" animationStarted"}</code> | <span className="api-desc">Serialized event raised when the animated build starts.</span> |
| <Link id="m-basedistance" /><code>{"private float baseDistance"}</code> | <span className="api-desc">Distance parts start from their final position when generated.</span> |
| <Link id="m-durationmultiplier" /><code>{"private AnimationCurve durationMultiplier"}</code> | <span className="api-desc">Curve over overall progress that scales each part's insert time. Later parts go faster by default.</span> |
| <Link id="m-effectonappear" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectOnAppear"}</code> | <span className="api-desc">Pooled effect spawned where a part appears, unless the part overrides it.</span> |
| <Link id="m-effectonposition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectOnPosition"}</code> | <span className="api-desc">Pooled effect spawned where a part lands, unless the part overrides it.</span> |
| <Link id="m-hasmovingcolliders" /><code>{"private bool hasMovingColliders"}</code> | <span className="api-desc">Serialized flag that nothing reads in this build.</span> |
| <Link id="m-insertduration" /><code>{"private float insertDuration"}</code> | <span className="api-desc">Base seconds for one part to move into place.</span> |
| <Link id="m-isplayingonenable" /><code>{"private bool isPlayingOnEnable"}</code> | <span className="api-desc">Whether the animation plays when the object is enabled.</span> |
| <Link id="m-isrepeatable" /><code>{"private bool isRepeatable"}</code> | <span className="api-desc">Keeps the parts (hidden) after playing so the animation can play again.</span> |
| <Link id="m-isskippinganimation" /><code>{"private bool isSkippingAnimation"}</code> | <span className="api-desc">When set, `Play` jumps straight to the end. Cleared when the animation finishes.</span> |
| <Link id="m-movingparts" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{"> movingParts"}</code> | <span className="api-desc">Backing field for `MovingParts`.</span> |
| <Link id="m-overallduration" /><code>{"private float overallDuration"}</code> | <span className="api-desc">Seconds over which all parts are released.</span> |
| <Link id="m-releasetime" /><code>{"private AnimationCurve releaseTime"}</code> | <span className="api-desc">Curve from overall progress to the fraction of parts released.</span> |
| <Link id="m-soundonappear" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundOnAppear"}</code> | <span className="api-desc">Sound played where a part appears, unless the part overrides it.</span> |
| <Link id="m-soundonposition" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundOnPosition"}</code> | <span className="api-desc">Sound played where a part lands, unless the part overrides it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationparent-2" /><code>{"Transform AnimationParent { get; }"}</code> | <span className="api-desc">Parent transform for the animated parts.</span> |
| <Link id="m-movingparts-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{"> MovingParts { get; }"}</code> | <span className="api-desc">The parts that fly in, in release order.</span> |
| <Link id="m-preinsertanimation" /><code>{"Func<"}<Link to="/mod/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{", float, bool, IEnumerator, IEnumerator> PreInsertAnimation { get; set; }"}</code> | <span className="api-desc">Optional hook that wraps each part's animation, for an extra step before it flies in.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-animationfinished-2" /><code>{"event Action AnimationFinished"}</code> | <span className="api-desc">Raised when the last part lands, or straight away with `PlayInstant`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateparts" /><code>{"void GenerateParts(Transform[] components)"}</code> | <span className="api-desc">Editor: makes an animation part for each transform, moving out sideways from the animation direction.</span> |
| <Link id="m-ordercomponents" /><code>{"void OrderComponents(Component[] components)"}</code> | <span className="api-desc">Editor: sorts components along the animation direction.</span> |
| <Link id="m-play" /><code>{"void Play()"}</code> | <span className="api-desc">Plays the animation from the start, or finishes instantly if skipping is set.</span> |
| <Link id="m-playinstant" /><code>{"void PlayInstant()"}</code> | <span className="api-desc">Finishes at once. The temporary parts are hidden if repeatable or skipping, otherwise destroyed.</span> |
| <Link id="m-setisskippinganimation" /><code>{"void SetIsSkippingAnimation(bool isSkipping)"}</code> | <span className="api-desc">Makes the next `Play` finish instantly. Resets after the animation finishes.</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Stops the animation and hides all parts again.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatepart" /><code>{"private IEnumerator AnimatePart("}<Link to="/mod/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{" part, float duration, bool isLast) (iterator)"}</code> | <span className="api-desc">Coroutine that plays the appear effects, moves one part from its start to final position over the duration, then plays the land effects. The last part finishes the animation.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hides every moving part, recalculates their positions and hooks `OnAnimationFinished`. `Stop` calls it again to reset.</span> |
| <Link id="m-onanimationfinished" /><code>{"private void OnAnimationFinished()"}</code> | <span className="api-desc">Clears the skip flag once the animation ends.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks `OnAnimationFinished`.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws an arrow along the animation direction.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Plays the animation if `isPlayingOnEnable` is set.</span> |
| <Link id="m-playanimation" /><code>{"private IEnumerator PlayAnimation() (iterator)"}</code> | <span className="api-desc">Coroutine that releases parts over `overallDuration` following the `releaseTime` curve and starts each part's move.</span> |
| <Link id="m-shouldkeepanimationparts" /><code>{"private bool ShouldKeepAnimationParts("}<Link to="/mod/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{" part)"}</code> | <span className="api-desc">Whether parts are hidden rather than destroyed at the end: true when repeatable or skipping.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BuildingAnimation`:

<div className="api-used-in">

[`BuildingAnimationWrapper.animationPrefab`](/mod/game-api/types/global-a-b/buildinganimationwrapper#m-animationprefab), [`BuildingAnimationWrapper.spawned`](/mod/game-api/types/global-a-b/buildinganimationwrapper#m-spawned).

</div>

---
title: "HoverAnimator"
description: "Bobs a set of transforms around their start positions using per-axis curves, plus any DragTrigger pull."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HoverAnimator

A **class** in `Root.Township`, the global namespace.

Bobs a set of transforms around their start positions using per-axis curves, plus any `DragTrigger` pull. Can stop and ease back to the start.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/mod/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit)
- **Nested types** [`HoverAnimationState`](/mod/game-api/types/global-e-h/hoveranimator-hoveranimationstate)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HoverAnimator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationlengths" /><code>{"private Vector3 animationLengths"}</code> | Length of each axis curve. |
| <Link id="m-animationstarttimes" /><code>{"private Vector3 animationStartTimes"}</code> | First key time of each axis curve. |
| <Link id="m-animationstates" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/hoveranimator-hoveranimationstate">{"HoverAnimator.HoverAnimationState"}</Link>{"[] animationStates"}</code> | Per transform state: start position, time offset and drag trigger. |
| <Link id="m-axiscurves" /><code>{"private Dictionary<SnapAxis, AnimationCurve> axisCurves"}</code> | Axis to curve lookup. |
| <Link id="m-hoverxanimation" /><code>{"private AnimationCurve hoverXAnimation"}</code> | Curve for the x offset. |
| <Link id="m-hoveryanimation" /><code>{"private AnimationCurve hoverYAnimation"}</code> | Curve for the y offset. |
| <Link id="m-hoverzanimation" /><code>{"private AnimationCurve hoverZAnimation"}</code> | Curve for the z offset. |
| <Link id="m-isplaying" /><code>{"private bool isPlaying"}</code> | Whether the hover is running. Starts true. |
| <Link id="m-israndomisedoffsetpertransform" /><code>{"private bool isRandomisedOffsetPerTransform"}</code> | Not read in this build: offsets are always random. |
| <Link id="m-magnitudescale" /><code>{"private float magnitudeScale"}</code> | Multiplier on the hover offset. |
| <Link id="m-resetmovementspeed" /><code>{"private float resetMovementSpeed"}</code> | Speed used to move back to the start after stopping. |
| <Link id="m-resetpositionroutine" /><code>{"private Coroutine resetPositionRoutine"}</code> | The running return to start coroutine, if any. |
| <Link id="m-timescale" /><code>{"private float timeScale"}</code> | Multiplier on animation time. |
| <Link id="m-transformstoanimate" /><code>{"private Transform[] transformsToAnimate"}</code> | The transforms that hover. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playanimation" /><code>{"void PlayAnimation()"}</code> | Stops any return to start and resumes hovering. |
| <Link id="m-stopanimation" /><code>{"void StopAnimation()"}</code> | Stops hovering and starts easing back to the start position. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateanimation" /><code>{"private float EvaluateAnimation(SnapAxis axis, "}<Link to="/mod/game-api/types/global-e-h/hoveranimator-hoveranimationstate">{"HoverAnimator.HoverAnimationState"}</Link>{" animationState, Func<Vector3, float> getValue)"}</code> | Samples one axis curve for a transform at the current time with its offset, looping over the curve length. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | While playing, sets each transform's local position to start plus the scaled hover offset and drag pull. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Rebuilds the animation setup when edited. |
| <Link id="m-returntostartposition" /><code>{"private IEnumerator ReturnToStartPosition() (iterator)"}</code> | Coroutine: moves the first transform back to its start position at `resetMovementSpeed`. Other transforms stay where they are. |
| <Link id="m-setupanimation" /><code>{"private void SetupAnimation()"}</code> | Reads each curve's start time and length and builds the axis to curve map. |
| <Link id="m-setupanimationstates" /><code>{"private void SetupAnimationStates()"}</code> | Stores each transform's start position, a random time offset and its `DragTrigger`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Sets up the animation. |

</details>

## Used in

Members of other types that take, return or hold a `HoverAnimator`:

[`RespawnShrineFuelDisplay.hoverAnimator`](/mod/game-api/types/game-other-namespaces/respawnshrinefueldisplay#m-hoveranimator).

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
| <Link id="m-ctor" /><code>{"HoverAnimator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationlengths" /><code>{"private Vector3 animationLengths"}</code> | <span className="api-desc">Length of each axis curve.</span> |
| <Link id="m-animationstarttimes" /><code>{"private Vector3 animationStartTimes"}</code> | <span className="api-desc">First key time of each axis curve.</span> |
| <Link id="m-animationstates" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/hoveranimator-hoveranimationstate">{"HoverAnimator.HoverAnimationState"}</Link>{"[] animationStates"}</code> | <span className="api-desc">Per transform state: start position, time offset and drag trigger.</span> |
| <Link id="m-axiscurves" /><code>{"private Dictionary<SnapAxis, AnimationCurve> axisCurves"}</code> | <span className="api-desc">Axis to curve lookup.</span> |
| <Link id="m-hoverxanimation" /><code>{"private AnimationCurve hoverXAnimation"}</code> | <span className="api-desc">Curve for the x offset.</span> |
| <Link id="m-hoveryanimation" /><code>{"private AnimationCurve hoverYAnimation"}</code> | <span className="api-desc">Curve for the y offset.</span> |
| <Link id="m-hoverzanimation" /><code>{"private AnimationCurve hoverZAnimation"}</code> | <span className="api-desc">Curve for the z offset.</span> |
| <Link id="m-isplaying" /><code>{"private bool isPlaying"}</code> | <span className="api-desc">Whether the hover is running. Starts true.</span> |
| <Link id="m-israndomisedoffsetpertransform" /><code>{"private bool isRandomisedOffsetPerTransform"}</code> | <span className="api-desc">Not read in this build: offsets are always random.</span> |
| <Link id="m-magnitudescale" /><code>{"private float magnitudeScale"}</code> | <span className="api-desc">Multiplier on the hover offset.</span> |
| <Link id="m-resetmovementspeed" /><code>{"private float resetMovementSpeed"}</code> | <span className="api-desc">Speed used to move back to the start after stopping.</span> |
| <Link id="m-resetpositionroutine" /><code>{"private Coroutine resetPositionRoutine"}</code> | <span className="api-desc">The running return to start coroutine, if any.</span> |
| <Link id="m-timescale" /><code>{"private float timeScale"}</code> | <span className="api-desc">Multiplier on animation time.</span> |
| <Link id="m-transformstoanimate" /><code>{"private Transform[] transformsToAnimate"}</code> | <span className="api-desc">The transforms that hover.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playanimation" /><code>{"void PlayAnimation()"}</code> | <span className="api-desc">Stops any return to start and resumes hovering.</span> |
| <Link id="m-stopanimation" /><code>{"void StopAnimation()"}</code> | <span className="api-desc">Stops hovering and starts easing back to the start position.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateanimation" /><code>{"private float EvaluateAnimation(SnapAxis axis, "}<Link to="/mod/game-api/types/global-e-h/hoveranimator-hoveranimationstate">{"HoverAnimator.HoverAnimationState"}</Link>{" animationState, Func<Vector3, float> getValue)"}</code> | <span className="api-desc">Samples one axis curve for a transform at the current time with its offset, looping over the curve length.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">While playing, sets each transform's local position to start plus the scaled hover offset and drag pull.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Rebuilds the animation setup when edited.</span> |
| <Link id="m-returntostartposition" /><code>{"private IEnumerator ReturnToStartPosition() (iterator)"}</code> | <span className="api-desc">Coroutine: moves the first transform back to its start position at `resetMovementSpeed`. Other transforms stay where they are.</span> |
| <Link id="m-setupanimation" /><code>{"private void SetupAnimation()"}</code> | <span className="api-desc">Reads each curve's start time and length and builds the axis to curve map.</span> |
| <Link id="m-setupanimationstates" /><code>{"private void SetupAnimationStates()"}</code> | <span className="api-desc">Stores each transform's start position, a random time offset and its `DragTrigger`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Sets up the animation.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HoverAnimator`:

<div className="api-used-in">

[`RespawnShrineFuelDisplay.hoverAnimator`](/mod/game-api/types/game-other-namespaces/respawnshrinefueldisplay#m-hoveranimator).

</div>

---
title: "HoverAnimator"
description: "class HoverAnimator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HoverAnimator

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)
- **Nested types** [`HoverAnimationState`](/game-api/types/global-e-h/hoveranimator-hoveranimationstate)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HoverAnimator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animationlengths" /><code>{"private Vector3 animationLengths"}</code> |  |
| <Link id="m-animationstarttimes" /><code>{"private Vector3 animationStartTimes"}</code> |  |
| <Link id="m-animationstates" /><code>{"private "}<Link to="/game-api/types/global-e-h/hoveranimator-hoveranimationstate">{"HoverAnimator.HoverAnimationState"}</Link>{"[] animationStates"}</code> |  |
| <Link id="m-axiscurves" /><code>{"private Dictionary<SnapAxis, AnimationCurve> axisCurves"}</code> |  |
| <Link id="m-hoverxanimation" /><code>{"private AnimationCurve hoverXAnimation"}</code> |  |
| <Link id="m-hoveryanimation" /><code>{"private AnimationCurve hoverYAnimation"}</code> |  |
| <Link id="m-hoverzanimation" /><code>{"private AnimationCurve hoverZAnimation"}</code> |  |
| <Link id="m-isplaying" /><code>{"private bool isPlaying"}</code> |  |
| <Link id="m-israndomisedoffsetpertransform" /><code>{"private bool isRandomisedOffsetPerTransform"}</code> |  |
| <Link id="m-magnitudescale" /><code>{"private float magnitudeScale"}</code> |  |
| <Link id="m-resetmovementspeed" /><code>{"private float resetMovementSpeed"}</code> |  |
| <Link id="m-resetpositionroutine" /><code>{"private Coroutine resetPositionRoutine"}</code> |  |
| <Link id="m-timescale" /><code>{"private float timeScale"}</code> |  |
| <Link id="m-transformstoanimate" /><code>{"private Transform[] transformsToAnimate"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playanimation" /><code>{"void PlayAnimation()"}</code> |  |
| <Link id="m-stopanimation" /><code>{"void StopAnimation()"}</code> |  |
| <Link id="m-evaluateanimation" /><code>{"private float EvaluateAnimation(SnapAxis axis, "}<Link to="/game-api/types/global-e-h/hoveranimator-hoveranimationstate">{"HoverAnimator.HoverAnimationState"}</Link>{" animationState, Func<Vector3, float> getValue)"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-returntostartposition" /><code>{"private IEnumerator ReturnToStartPosition() (iterator)"}</code> |  |
| <Link id="m-setupanimation" /><code>{"private void SetupAnimation()"}</code> |  |
| <Link id="m-setupanimationstates" /><code>{"private void SetupAnimationStates()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |

## Used in

Members of other types that take, return or hold a `HoverAnimator`:

[`RespawnShrineFuelDisplay.hoverAnimator`](/game-api/types/game-other-namespaces/respawnshrinefueldisplay#m-hoveranimator).

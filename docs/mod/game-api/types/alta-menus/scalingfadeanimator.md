---
title: "ScalingFadeAnimator"
description: "Client UI: scales its targets up along a curve when enabled, and can scale them down then switch to another object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScalingFadeAnimator

A **class** in `Root.Township`, `Alta.Meta.UI`.

Client UI: scales its targets up along a curve when enabled, and can scale them down then switch to another object. Locks UI actions while animating.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`, [`UIActionLock.ILockUIAction`](/mod/game-api/types/alta-menus/uiactionlock-ilockuiaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScalingFadeAnimator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> | <span className="api-desc">Normalised animation time.</span> |
| <Link id="m-enableonfinish" /><code>{"private GameObject enableOnFinish"}</code> | <span className="api-desc">Object to show when the scale-down ends.</span> |
| <Link id="m-scaleovertime" /><code>{"private AnimationCurve scaleOverTime"}</code> | <span className="api-desc">Curve of scale over time; its last key sets the duration.</span> |
| <Link id="m-scaling" /><code>{"private Coroutine scaling"}</code> | <span className="api-desc">The running scale coroutine.</span> |
| <Link id="m-targets" /><code>{"private Transform[] targets"}</code> | <span className="api-desc">Transforms scaled by the animation.</span> |
| <Link id="m-targettime" /><code>{"private float targetTime"}</code> | <span className="api-desc">Time being animated to: 1 to show, 0 to hide.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fade" /><code>{"void Fade(GameObject fadeTo)"}</code> | <span className="api-desc">Scales down, then hides this object and shows the given one. Ignored while UI actions are locked.</span> |
| <Link id="m-fade-2" /><code>{"void Fade(GameObject fadeTo, Action onComplete)"}</code> | <span className="api-desc">Scales down, then hides this object and shows the given one. Ignored while UI actions are locked.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Releases its UI action lock.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts scaling up from zero.</span> |
| <Link id="m-scalingcoroutine" /><code>{"private IEnumerator ScalingCoroutine(Action onComplete = null) (iterator)"}</code> | <span className="api-desc">Moves the animation time to its target, applying the curve to every target's scale, then finishes the switch.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ScalingFadeAnimator`:

<div className="api-used-in">

[`AnimatorSetup.animateFrom`](/mod/game-api/types/global-a-b/animatorsetup#m-animatefrom), [`AnimatorSetup.animateTo`](/mod/game-api/types/global-a-b/animatorsetup#m-animateto), [`PicoLoginController.accountRequiredAnimator`](/mod/game-api/types/game-other-namespaces/picologincontroller#m-accountrequiredanimator), [`PicoLoginController.picoLoginPromptAnimator`](/mod/game-api/types/game-other-namespaces/picologincontroller#m-picologinpromptanimator), [`PicoLoginController.seatedStandingAnimator`](/mod/game-api/types/game-other-namespaces/picologincontroller#m-seatedstandinganimator), [`RedesignedAltaAccountLinker.scalingFadeAnimator`](/mod/game-api/types/global-q-r/redesignedaltaaccountlinker#m-scalingfadeanimator).

</div>

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
| <Link id="m-ctor" /><code>{"ScalingFadeAnimator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> | Normalised animation time. |
| <Link id="m-enableonfinish" /><code>{"private GameObject enableOnFinish"}</code> | Object to show when the scale-down ends. |
| <Link id="m-scaleovertime" /><code>{"private AnimationCurve scaleOverTime"}</code> | Curve of scale over time; its last key sets the duration. |
| <Link id="m-scaling" /><code>{"private Coroutine scaling"}</code> | The running scale coroutine. |
| <Link id="m-targets" /><code>{"private Transform[] targets"}</code> | Transforms scaled by the animation. |
| <Link id="m-targettime" /><code>{"private float targetTime"}</code> | Time being animated to: 1 to show, 0 to hide. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fade" /><code>{"void Fade(GameObject fadeTo)"}</code> | Scales down, then hides this object and shows the given one. Ignored while UI actions are locked. |
| <Link id="m-fade-2" /><code>{"void Fade(GameObject fadeTo, Action onComplete)"}</code> | Scales down, then hides this object and shows the given one. Ignored while UI actions are locked. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Releases its UI action lock. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts scaling up from zero. |
| <Link id="m-scalingcoroutine" /><code>{"private IEnumerator ScalingCoroutine(Action onComplete = null) (iterator)"}</code> | Moves the animation time to its target, applying the curve to every target's scale, then finishes the switch. |

</details>

## Used in

Members of other types that take, return or hold a `ScalingFadeAnimator`:

[`AnimatorSetup.animateFrom`](/mod/game-api/types/global-a-b/animatorsetup#m-animatefrom), [`AnimatorSetup.animateTo`](/mod/game-api/types/global-a-b/animatorsetup#m-animateto), [`PicoLoginController.accountRequiredAnimator`](/mod/game-api/types/game-other-namespaces/picologincontroller#m-accountrequiredanimator), [`PicoLoginController.picoLoginPromptAnimator`](/mod/game-api/types/game-other-namespaces/picologincontroller#m-picologinpromptanimator), [`PicoLoginController.seatedStandingAnimator`](/mod/game-api/types/game-other-namespaces/picologincontroller#m-seatedstandinganimator), [`RedesignedAltaAccountLinker.scalingFadeAnimator`](/mod/game-api/types/global-q-r/redesignedaltaaccountlinker#m-scalingfadeanimator).

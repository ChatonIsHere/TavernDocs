---
title: "ScalingFadeAnimator"
description: "class ScalingFadeAnimator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScalingFadeAnimator

A **class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`, [`UIActionLock.ILockUIAction`](/game-api/types/alta-menus/uiactionlock-ilockuiaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScalingFadeAnimator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> |  |
| <Link id="m-enableonfinish" /><code>{"private GameObject enableOnFinish"}</code> |  |
| <Link id="m-scaleovertime" /><code>{"private AnimationCurve scaleOverTime"}</code> |  |
| <Link id="m-scaling" /><code>{"private Coroutine scaling"}</code> |  |
| <Link id="m-targets" /><code>{"private Transform[] targets"}</code> |  |
| <Link id="m-targettime" /><code>{"private float targetTime"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fade" /><code>{"void Fade(GameObject fadeTo)"}</code> |  |
| <Link id="m-fade-2" /><code>{"void Fade(GameObject fadeTo, Action onComplete)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-scalingcoroutine" /><code>{"private IEnumerator ScalingCoroutine(Action onComplete = null) (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ScalingFadeAnimator`:

[`AnimatorSetup.animateFrom`](/game-api/types/global-a-b/animatorsetup#m-animatefrom), [`AnimatorSetup.animateTo`](/game-api/types/global-a-b/animatorsetup#m-animateto), [`PicoLoginController.accountRequiredAnimator`](/game-api/types/game-other-namespaces/picologincontroller#m-accountrequiredanimator), [`PicoLoginController.picoLoginPromptAnimator`](/game-api/types/game-other-namespaces/picologincontroller#m-picologinpromptanimator), [`PicoLoginController.seatedStandingAnimator`](/game-api/types/game-other-namespaces/picologincontroller#m-seatedstandinganimator), [`RedesignedAltaAccountLinker.scalingFadeAnimator`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-scalingfadeanimator).

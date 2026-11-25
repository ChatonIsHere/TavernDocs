---
title: "GhostBook"
description: "class GhostBook in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostBook

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GhostBook()"}</code> |

## Fields

<details>
<summary>29 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> |
| <Link id="m-animatingpages" /><code>{"private int animatingPages"}</code> |
| <Link id="m-animationmaterial" /><code>{"private Material animationMaterial"}</code> |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> |
| <Link id="m-bookappearsafterrotatingeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookAppearsAfterRotatingEffect"}</code> |
| <Link id="m-bookappearsbeforerotatingeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookAppearsBeforeRotatingEffect"}</code> |
| <Link id="m-bookcloseeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookCloseEffect"}</code> |
| <Link id="m-bookdisappearafterrotatingeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookDisappearAfterRotatingEffect"}</code> |
| <Link id="m-closeduration" /><code>{"private float closeDuration"}</code> |
| <Link id="m-currentlyopenbooks" /><code>{"private static List<"}<Link to="/game-api/types/global-e-h/ghostbook">{"GhostBook"}</Link>{"> currentlyOpenBooks"}</code> |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> |
| <Link id="m-maxdistancetoreusesquared" /><code>{"private float maxDistanceToReuseSquared"}</code> |
| <Link id="m-movementlerpspeed" /><code>{"private float movementLerpSpeed"}</code> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> |
| <Link id="m-open" /><code>{"private readonly int Open"}</code> |
| <Link id="m-openduration" /><code>{"private float openDuration"}</code> |
| <Link id="m-pageaddedeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" pageAddedEffect"}</code> |
| <Link id="m-pagestoadd" /><code>{"private List<"}<Link to="/game-api/types/global-p/pageautoaddeffect">{"PageAutoAddEffect"}</Link>{"> pagesToAdd"}</code> |
| <Link id="m-pagetarget" /><code>{"private Transform pageTarget"}</code> |
| <Link id="m-placedrotation" /><code>{"private Vector3 placedRotation"}</code> |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> |
| <Link id="m-scalelerpspeed" /><code>{"private float scaleLerpSpeed"}</code> |
| <Link id="m-snapdistancesquared" /><code>{"private float snapDistanceSquared"}</code> |
| <Link id="m-snapduration" /><code>{"private float snapDuration"}</code> |
| <Link id="m-targetpageposition" /><code>{"private Vector3 targetPagePosition"}</code> |
| <Link id="m-targetpagerotation" /><code>{"private Quaternion targetPageRotation"}</code> |
| <Link id="m-targetpagescale" /><code>{"private Vector3 targetPageScale"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getcloserbook" /><code>{"static bool GetCloserBook(Vector3 position, ref "}<Link to="/game-api/types/global-e-h/ghostbook">{"GhostBook"}</Link>{" bestBook)"}</code> |
| <Link id="m-position" /><code>{"void Position(Vector3 position, Quaternion rotation)"}</code> |
| <Link id="m-registerpage" /><code>{"void RegisterPage()"}</code> |
| <Link id="m-startpageanimation" /><code>{"void StartPageAnimation("}<Link to="/game-api/types/global-p/pageautoaddeffect">{"PageAutoAddEffect"}</Link>{" page)"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-closeandfadeout" /><code>{"private IEnumerator CloseAndFadeOut() (iterator)"}</code> |
| <Link id="m-fadeinandopen" /><code>{"private IEnumerator FadeInAndOpen() (iterator)"}</code> |
| <Link id="m-finishanimation" /><code>{"private void FinishAnimation()"}</code> |
| <Link id="m-finishedopening" /><code>{"private void FinishedOpening()"}</code> |
| <Link id="m-onrequest" /><code>{"private void OnRequest("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |
| <Link id="m-pageanimation" /><code>{"private IEnumerator PageAnimation("}<Link to="/game-api/types/global-p/pageautoaddeffect">{"PageAutoAddEffect"}</Link>{" page) (iterator)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `GhostBook`:

[`PageAutoAddEffect.book`](/game-api/types/global-p/pageautoaddeffect#m-book).

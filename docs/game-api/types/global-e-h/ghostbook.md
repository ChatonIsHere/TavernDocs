---
title: "GhostBook"
description: "Client: pooled ghost book that fades in, opens, pulls nearby auto-added pages into it, then closes and fades out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostBook

A **class** in `Root.Township`, no namespace.

Client: pooled ghost book that fades in, opens, pulls nearby auto-added pages into it, then closes and fades out. `PageAutoAddEffect` reuses an open one nearby or gets a new one.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GhostBook()"}</code> |

## Fields

<details>
<summary>29 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | Shader property ID for the fade progress. |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | Page acceleration toward the target. |
| <Link id="m-animatingpages" /><code>{"private int animatingPages"}</code> | Pages still to land. The book closes when this reaches 0. |
| <Link id="m-animationmaterial" /><code>{"private Material animationMaterial"}</code> | Material copy whose `_Progress` drives the fade. |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | Animator for opening and closing. |
| <Link id="m-bookappearsafterrotatingeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookAppearsAfterRotatingEffect"}</code> | Event raised after the fade in, before opening. |
| <Link id="m-bookappearsbeforerotatingeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookAppearsBeforeRotatingEffect"}</code> | Event raised when the book is positioned. |
| <Link id="m-bookcloseeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookCloseEffect"}</code> | Event raised once the book has closed. |
| <Link id="m-bookdisappearafterrotatingeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookDisappearAfterRotatingEffect"}</code> | Event raised when the fade out ends. |
| <Link id="m-closeduration" /><code>{"private float closeDuration"}</code> | Time the close animation is given (default 0.25s). |
| <Link id="m-currentlyopenbooks" /><code>{"private static List<"}<Link to="/game-api/types/global-e-h/ghostbook">{"GhostBook"}</Link>{"> currentlyOpenBooks"}</code> | Static list of books that are open or opening, for reuse by nearby pages. |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | Fade in and fade out time. |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | Whether the open animation has finished. |
| <Link id="m-maxdistancetoreusesquared" /><code>{"private float maxDistanceToReuseSquared"}</code> | Squared distance within which a new page reuses this book. |
| <Link id="m-movementlerpspeed" /><code>{"private float movementLerpSpeed"}</code> | Not used in this file. |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | Page move speed toward the target. |
| <Link id="m-open" /><code>{"private readonly int Open"}</code> | Animator hash for the `Open` bool. |
| <Link id="m-openduration" /><code>{"private float openDuration"}</code> | Time the open animation is given (default 0.25s). |
| <Link id="m-pageaddedeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" pageAddedEffect"}</code> | Event raised for each page that lands. |
| <Link id="m-pagestoadd" /><code>{"private List<"}<Link to="/game-api/types/global-p/pageautoaddeffect">{"PageAutoAddEffect"}</Link>{"> pagesToAdd"}</code> | Pages queued for this book, released when it closes. |
| <Link id="m-pagetarget" /><code>{"private Transform pageTarget"}</code> | Transform pages fly to. |
| <Link id="m-placedrotation" /><code>{"private Vector3 placedRotation"}</code> | Rotation offset applied on top of the placed rotation. |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | Page rotation lerp speed, faster as the page gets close. |
| <Link id="m-scalelerpspeed" /><code>{"private float scaleLerpSpeed"}</code> | Page scale lerp speed. |
| <Link id="m-snapdistancesquared" /><code>{"private float snapDistanceSquared"}</code> | Squared distance at which a page snaps to the target. |
| <Link id="m-snapduration" /><code>{"private float snapDuration"}</code> | Not used in this file. |
| <Link id="m-targetpageposition" /><code>{"private Vector3 targetPagePosition"}</code> | Page target position stored in `Position`. |
| <Link id="m-targetpagerotation" /><code>{"private Quaternion targetPageRotation"}</code> | Page target rotation stored in `Position`. |
| <Link id="m-targetpagescale" /><code>{"private Vector3 targetPageScale"}</code> | Page target scale stored in `Position`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcloserbook" /><code>{"static bool GetCloserBook(Vector3 position, ref "}<Link to="/game-api/types/global-e-h/ghostbook">{"GhostBook"}</Link>{" bestBook)"}</code> | Finds the nearest open book within its reuse distance of the position. Returns false if none. |
| <Link id="m-position" /><code>{"void Position(Vector3 position, Quaternion rotation)"}</code> | Places the book at a position and rotation and stores the page target pose. |
| <Link id="m-registerpage" /><code>{"void RegisterPage()"}</code> | Counts one more page that will animate into the book. |
| <Link id="m-startpageanimation" /><code>{"void StartPageAnimation("}<Link to="/game-api/types/global-p/pageautoaddeffect">{"PageAutoAddEffect"}</Link>{" page)"}</code> | Queues a page and, if the book is already open, starts animating it. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pool request and gives all renderers one shared copy of the fade material. |
| <Link id="m-closeandfadeout" /><code>{"private IEnumerator CloseAndFadeOut() (iterator)"}</code> | Coroutine: closes the book, releases its pages, fades out and returns it to the pool. |
| <Link id="m-fadeinandopen" /><code>{"private IEnumerator FadeInAndOpen() (iterator)"}</code> | Coroutine: fades the book in, plays the open animation, then starts page animations. |
| <Link id="m-finishanimation" /><code>{"private void FinishAnimation()"}</code> | Called when the last page lands: removes the book from the open list and closes it. |
| <Link id="m-finishedopening" /><code>{"private void FinishedOpening()"}</code> | Marks the book open and starts the animation for every queued page. |
| <Link id="m-onrequest" /><code>{"private void OnRequest("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Pool request handler: resets state, adds the book to the open list and starts fading in. |
| <Link id="m-pageanimation" /><code>{"private IEnumerator PageAnimation("}<Link to="/game-api/types/global-p/pageautoaddeffect">{"PageAutoAddEffect"}</Link>{" page) (iterator)"}</code> | Coroutine: steers a page's rigidbody to the page target, lerping rotation and scale, then snaps it. |

</details>

## Used in

Members of other types that take, return or hold a `GhostBook`:

[`PageAutoAddEffect.book`](/game-api/types/global-p/pageautoaddeffect#m-book).

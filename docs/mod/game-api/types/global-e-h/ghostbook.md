---
title: "GhostBook"
description: "Client: pooled ghost book that fades in, opens, pulls nearby auto-added pages into it, then closes and fades out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostBook

A **class** in `Root.Township`, the global namespace.

Client: pooled ghost book that fades in, opens, pulls nearby auto-added pages into it, then closes and fades out. `PageAutoAddEffect` reuses an open one nearby or gets a new one.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GhostBook()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>29 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for the fade progress.</span> |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | <span className="api-desc">Page acceleration toward the target.</span> |
| <Link id="m-animatingpages" /><code>{"private int animatingPages"}</code> | <span className="api-desc">Pages still to land. The book closes when this reaches 0.</span> |
| <Link id="m-animationmaterial" /><code>{"private Material animationMaterial"}</code> | <span className="api-desc">Material copy whose `_Progress` drives the fade.</span> |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Animator for opening and closing.</span> |
| <Link id="m-bookappearsafterrotatingeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookAppearsAfterRotatingEffect"}</code> | <span className="api-desc">Event raised after the fade in, before opening.</span> |
| <Link id="m-bookappearsbeforerotatingeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookAppearsBeforeRotatingEffect"}</code> | <span className="api-desc">Event raised when the book is positioned.</span> |
| <Link id="m-bookcloseeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookCloseEffect"}</code> | <span className="api-desc">Event raised once the book has closed.</span> |
| <Link id="m-bookdisappearafterrotatingeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" bookDisappearAfterRotatingEffect"}</code> | <span className="api-desc">Event raised when the fade out ends.</span> |
| <Link id="m-closeduration" /><code>{"private float closeDuration"}</code> | <span className="api-desc">Time the close animation is given (default 0.25s).</span> |
| <Link id="m-currentlyopenbooks" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-e-h/ghostbook">{"GhostBook"}</Link>{"> currentlyOpenBooks"}</code> | <span className="api-desc">Static list of books that are open or opening, for reuse by nearby pages.</span> |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | <span className="api-desc">Fade in and fade out time.</span> |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | <span className="api-desc">Whether the open animation has finished.</span> |
| <Link id="m-maxdistancetoreusesquared" /><code>{"private float maxDistanceToReuseSquared"}</code> | <span className="api-desc">Squared distance within which a new page reuses this book.</span> |
| <Link id="m-movementlerpspeed" /><code>{"private float movementLerpSpeed"}</code> | <span className="api-desc">Not used in this file.</span> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | <span className="api-desc">Page move speed toward the target.</span> |
| <Link id="m-open" /><code>{"private readonly int Open"}</code> | <span className="api-desc">Animator hash for the `Open` bool.</span> |
| <Link id="m-openduration" /><code>{"private float openDuration"}</code> | <span className="api-desc">Time the open animation is given (default 0.25s).</span> |
| <Link id="m-pageaddedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" pageAddedEffect"}</code> | <span className="api-desc">Event raised for each page that lands.</span> |
| <Link id="m-pagestoadd" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pageautoaddeffect">{"PageAutoAddEffect"}</Link>{"> pagesToAdd"}</code> | <span className="api-desc">Pages queued for this book, released when it closes.</span> |
| <Link id="m-pagetarget" /><code>{"private Transform pageTarget"}</code> | <span className="api-desc">Transform pages fly to.</span> |
| <Link id="m-placedrotation" /><code>{"private Vector3 placedRotation"}</code> | <span className="api-desc">Rotation offset applied on top of the placed rotation.</span> |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | <span className="api-desc">Page rotation lerp speed, faster as the page gets close.</span> |
| <Link id="m-scalelerpspeed" /><code>{"private float scaleLerpSpeed"}</code> | <span className="api-desc">Page scale lerp speed.</span> |
| <Link id="m-snapdistancesquared" /><code>{"private float snapDistanceSquared"}</code> | <span className="api-desc">Squared distance at which a page snaps to the target.</span> |
| <Link id="m-snapduration" /><code>{"private float snapDuration"}</code> | <span className="api-desc">Not used in this file.</span> |
| <Link id="m-targetpageposition" /><code>{"private Vector3 targetPagePosition"}</code> | <span className="api-desc">Page target position stored in `Position`.</span> |
| <Link id="m-targetpagerotation" /><code>{"private Quaternion targetPageRotation"}</code> | <span className="api-desc">Page target rotation stored in `Position`.</span> |
| <Link id="m-targetpagescale" /><code>{"private Vector3 targetPageScale"}</code> | <span className="api-desc">Page target scale stored in `Position`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcloserbook" /><code>{"static bool GetCloserBook(Vector3 position, ref "}<Link to="/mod/game-api/types/global-e-h/ghostbook">{"GhostBook"}</Link>{" bestBook)"}</code> | <span className="api-desc">Finds the nearest open book within its reuse distance of the position. Returns false if none.</span> |
| <Link id="m-position" /><code>{"void Position(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Places the book at a position and rotation and stores the page target pose.</span> |
| <Link id="m-registerpage" /><code>{"void RegisterPage()"}</code> | <span className="api-desc">Counts one more page that will animate into the book.</span> |
| <Link id="m-startpageanimation" /><code>{"void StartPageAnimation("}<Link to="/mod/game-api/types/global-p/pageautoaddeffect">{"PageAutoAddEffect"}</Link>{" page)"}</code> | <span className="api-desc">Queues a page and, if the book is already open, starts animating it.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pool request and gives all renderers one shared copy of the fade material.</span> |
| <Link id="m-closeandfadeout" /><code>{"private IEnumerator CloseAndFadeOut() (iterator)"}</code> | <span className="api-desc">Coroutine: closes the book, releases its pages, fades out and returns it to the pool.</span> |
| <Link id="m-fadeinandopen" /><code>{"private IEnumerator FadeInAndOpen() (iterator)"}</code> | <span className="api-desc">Coroutine: fades the book in, plays the open animation, then starts page animations.</span> |
| <Link id="m-finishanimation" /><code>{"private void FinishAnimation()"}</code> | <span className="api-desc">Called when the last page lands: removes the book from the open list and closes it.</span> |
| <Link id="m-finishedopening" /><code>{"private void FinishedOpening()"}</code> | <span className="api-desc">Marks the book open and starts the animation for every queued page.</span> |
| <Link id="m-onrequest" /><code>{"private void OnRequest("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Pool request handler: resets state, adds the book to the open list and starts fading in.</span> |
| <Link id="m-pageanimation" /><code>{"private IEnumerator PageAnimation("}<Link to="/mod/game-api/types/global-p/pageautoaddeffect">{"PageAutoAddEffect"}</Link>{" page) (iterator)"}</code> | <span className="api-desc">Coroutine: steers a page's rigidbody to the page target, lerping rotation and scale, then snaps it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GhostBook`:

<div className="api-used-in">

[`PageAutoAddEffect.book`](/mod/game-api/types/global-p/pageautoaddeffect#m-book).

</div>

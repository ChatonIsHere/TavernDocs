---
title: "PageAutoAddEffect"
description: "Pooled client effect for a page being added to the player's book automatically: the page dissolves, a ghost book appears in front of the player and takes it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageAutoAddEffect

A **class** in `Root.Township`, the global namespace.

Pooled client effect for a page being added to the player's book automatically: the page dissolves, a ghost book appears in front of the player and takes it.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageAutoAddEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | <span className="api-desc">Shader property id for the dissolve progress.</span> |
| <Link id="m-animationmaterial" /><code>{"private Material animationMaterial"}</code> | <span className="api-desc">The page's dissolve material copy.</span> |
| <Link id="m-book" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/ghostbook">{"GhostBook"}</Link>{" book"}</code> | <span className="api-desc">The ghost book receiving the page.</span> |
| <Link id="m-bookspawndistance" /><code>{"private float bookSpawnDistance"}</code> | <span className="api-desc">How far in front of the player the book appears.</span> |
| <Link id="m-booktargetposition" /><code>{"private Vector3 bookTargetPosition"}</code> | <span className="api-desc">Where a new ghost book is placed.</span> |
| <Link id="m-booktargetrotation" /><code>{"private Quaternion bookTargetRotation"}</code> | <span className="api-desc">Rotation for a new ghost book, facing the player.</span> |
| <Link id="m-delaytocallbook" /><code>{"private float delayToCallBook"}</code> | <span className="api-desc">Seconds into the dissolve before the book is called.</span> |
| <Link id="m-dissolveduration" /><code>{"private float dissolveDuration"}</code> | <span className="api-desc">Length of the dissolve in seconds.</span> |
| <Link id="m-fadetoghostcoroutine" /><code>{"private Coroutine fadeToGhostCoroutine"}</code> | <span className="api-desc">The running `FadeToGhost` coroutine.</span> |
| <Link id="m-ghostbookdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ghostBookDefinition"}</code> | <span className="api-desc">Pool definition for the ghost book.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbody" /><code><Link to="/mod/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" RigidBody { get; private set; }"}</code> | <span className="api-desc">Fake rigidbody that moves the page.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpositioninfrontofplayer" /><code>{"void GetPositionInFrontOfPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Works out the book position and rotation in front of the player at head height.</span> |
| <Link id="m-registerplayer" /><code>{"void RegisterPlayer("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Sets the book position from the interactor's player.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes a copy of the page material for the dissolve and sets up a fake rigidbody.</span> |
| <Link id="m-fadetoghost" /><code>{"private IEnumerator FadeToGhost() (iterator)"}</code> | <span className="api-desc">Coroutine that runs the dissolve, calls the book part way through, then starts the book's page animation.</span> |
| <Link id="m-getbook" /><code>{"private void GetBook()"}</code> | <span className="api-desc">Uses a nearby ghost book or spawns one in front of the player, and registers the page with it.</span> |
| <Link id="m-onrequest" /><code>{"private void OnRequest("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">When taken from the pool, resets the dissolve and starts `FadeToGhost`.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Steps the fake rigidbody.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PageAutoAddEffect`:

<div className="api-used-in">

[`GhostBook.PageAnimation`](/mod/game-api/types/global-e-h/ghostbook#m-pageanimation), [`GhostBook.pagesToAdd`](/mod/game-api/types/global-e-h/ghostbook#m-pagestoadd), [`GhostBook.StartPageAnimation`](/mod/game-api/types/global-e-h/ghostbook#m-startpageanimation).

</div>

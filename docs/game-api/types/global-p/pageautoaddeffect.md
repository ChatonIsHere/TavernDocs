---
title: "PageAutoAddEffect"
description: "Pooled client effect for a page being added to the player's book automatically: the page dissolves, a ghost book appears in front of the player and takes it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageAutoAddEffect

A **class** in `Root.Township`, no namespace.

Pooled client effect for a page being added to the player's book automatically: the page dissolves, a ghost book appears in front of the player and takes it.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PageAutoAddEffect()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | Shader property id for the dissolve progress. |
| <Link id="m-animationmaterial" /><code>{"private Material animationMaterial"}</code> | The page's dissolve material copy. |
| <Link id="m-book" /><code>{"private "}<Link to="/game-api/types/global-e-h/ghostbook">{"GhostBook"}</Link>{" book"}</code> | The ghost book receiving the page. |
| <Link id="m-bookspawndistance" /><code>{"private float bookSpawnDistance"}</code> | How far in front of the player the book appears. |
| <Link id="m-booktargetposition" /><code>{"private Vector3 bookTargetPosition"}</code> | Where a new ghost book is placed. |
| <Link id="m-booktargetrotation" /><code>{"private Quaternion bookTargetRotation"}</code> | Rotation for a new ghost book, facing the player. |
| <Link id="m-delaytocallbook" /><code>{"private float delayToCallBook"}</code> | Seconds into the dissolve before the book is called. |
| <Link id="m-dissolveduration" /><code>{"private float dissolveDuration"}</code> | Length of the dissolve in seconds. |
| <Link id="m-fadetoghostcoroutine" /><code>{"private Coroutine fadeToGhostCoroutine"}</code> | The running `FadeToGhost` coroutine. |
| <Link id="m-ghostbookdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ghostBookDefinition"}</code> | Pool definition for the ghost book. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbody" /><code><Link to="/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" RigidBody { get; private set; }"}</code> | Fake rigidbody that moves the page. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpositioninfrontofplayer" /><code>{"void GetPositionInFrontOfPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Works out the book position and rotation in front of the player at head height. |
| <Link id="m-registerplayer" /><code>{"void RegisterPlayer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Sets the book position from the interactor's player. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes a copy of the page material for the dissolve and sets up a fake rigidbody. |
| <Link id="m-fadetoghost" /><code>{"private IEnumerator FadeToGhost() (iterator)"}</code> | Coroutine that runs the dissolve, calls the book part way through, then starts the book's page animation. |
| <Link id="m-getbook" /><code>{"private void GetBook()"}</code> | Uses a nearby ghost book or spawns one in front of the player, and registers the page with it. |
| <Link id="m-onrequest" /><code>{"private void OnRequest("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | When taken from the pool, resets the dissolve and starts `FadeToGhost`. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Steps the fake rigidbody. |

</details>

## Used in

Members of other types that take, return or hold a `PageAutoAddEffect`:

[`GhostBook.PageAnimation`](/game-api/types/global-e-h/ghostbook#m-pageanimation), [`GhostBook.pagesToAdd`](/game-api/types/global-e-h/ghostbook#m-pagestoadd), [`GhostBook.StartPageAnimation`](/game-api/types/global-e-h/ghostbook#m-startpageanimation).

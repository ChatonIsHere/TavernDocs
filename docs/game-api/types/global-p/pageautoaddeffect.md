---
title: "PageAutoAddEffect"
description: "class PageAutoAddEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageAutoAddEffect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PageAutoAddEffect()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> |
| <Link id="m-animationmaterial" /><code>{"private Material animationMaterial"}</code> |
| <Link id="m-book" /><code>{"private "}<Link to="/game-api/types/global-e-h/ghostbook">{"GhostBook"}</Link>{" book"}</code> |
| <Link id="m-bookspawndistance" /><code>{"private float bookSpawnDistance"}</code> |
| <Link id="m-booktargetposition" /><code>{"private Vector3 bookTargetPosition"}</code> |
| <Link id="m-booktargetrotation" /><code>{"private Quaternion bookTargetRotation"}</code> |
| <Link id="m-delaytocallbook" /><code>{"private float delayToCallBook"}</code> |
| <Link id="m-dissolveduration" /><code>{"private float dissolveDuration"}</code> |
| <Link id="m-fadetoghostcoroutine" /><code>{"private Coroutine fadeToGhostCoroutine"}</code> |
| <Link id="m-ghostbookdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ghostBookDefinition"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-rigidbody" /><code><Link to="/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" RigidBody { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getpositioninfrontofplayer" /><code>{"void GetPositionInFrontOfPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |
| <Link id="m-registerplayer" /><code>{"void RegisterPlayer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-fadetoghost" /><code>{"private IEnumerator FadeToGhost() (iterator)"}</code> |
| <Link id="m-getbook" /><code>{"private void GetBook()"}</code> |
| <Link id="m-onrequest" /><code>{"private void OnRequest("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PageAutoAddEffect`:

[`GhostBook.PageAnimation`](/game-api/types/global-e-h/ghostbook#m-pageanimation), [`GhostBook.pagesToAdd`](/game-api/types/global-e-h/ghostbook#m-pagestoadd), [`GhostBook.StartPageAnimation`](/game-api/types/global-e-h/ghostbook#m-startpageanimation).

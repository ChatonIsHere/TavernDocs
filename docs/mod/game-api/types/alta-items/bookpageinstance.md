---
title: "BookPageInstance"
description: "A page shown inside a book."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BookPageInstance

A **class** in `Root.Township`, `Alta.Pages`.

A page shown inside a book. Grabbing its tip and dragging sideways turns the page, and dragging up or down on a facing page pulls it out or copies it as a paper page. On the page prefab; both sides.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`PageInstance`](/mod/game-api/types/alta-items/pageinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BookPageInstance()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionaltightgripcolliders" /><code>{"private Collider[] additionalTightGripColliders"}</code> | <span className="api-desc">Extra colliders checked when re-evaluating the tight grip on the tip.</span> |
| <Link id="m-baseposition" /><code>{"private Vector3 basePosition"}</code> | <span className="api-desc">Hand position, local to the page, when the tip was grabbed.</span> |
| <Link id="m-blendstatehash" /><code>{"private int blendStateHash"}</code> | <span className="api-desc">Animator state hash for the front or back interacting state, set on grab.</span> |
| <Link id="m-duplicatepagesound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" duplicatePageSound"}</code> | <span className="api-desc">Sound played when a page is copied out of the book.</span> |
| <Link id="m-ghosthandtransform" /><code>{"private Transform ghostHandTransform"}</code> | <span className="api-desc">Ghost hand of the player holding the tip, tracked each frame.</span> |
| <Link id="m-gripstobelefthandonlyonnotfacing" /><code>{"private int[] gripsToBeLeftHandOnlyOnNotFacing"}</code> | <span className="api-desc">Grab point indexes that refuse the right hand when the page isn't facing.</span> |
| <Link id="m-gripstodisableonnotfacing" /><code>{"private int[] gripsToDisableOnNotFacing"}</code> | <span className="api-desc">Grab point indexes turned off when the page isn't facing.</span> |
| <Link id="m-hasacted" /><code>{"private bool hasActed"}</code> | <span className="api-desc">Set once the current grab has turned, pulled or copied the page, so release does nothing more.</span> |
| <Link id="m-hasactionsound" /><code>{"private bool hasActionSound"}</code> | <span className="api-desc">Whether the pull or copy sound can still play for this grab.</span> |
| <Link id="m-horizontalactionreleasethreshold" /><code>{"private float horizontalActionReleaseThreshold"}</code> | <span className="api-desc">Sideways drag needed at release to turn the page (default 0.1).</span> |
| <Link id="m-horizontalactionthreshold" /><code>{"private float horizontalActionThreshold"}</code> | <span className="api-desc">Sideways drag that turns the page while still holding (default 0.3).</span> |
| <Link id="m-horizontalblendhash" /><code>{"private readonly int horizontalBlendHash"}</code> | <span className="api-desc">Animator hash of the `HorizontalBlend` parameter.</span> |
| <Link id="m-isfacing" /><code>{"private bool isFacing"}</code> | <span className="api-desc">True when the grabbed page is the back side (animator's `IsFront` is false). Only a facing page can be pulled out or copied.</span> |
| <Link id="m-removepagesound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" removePageSound"}</code> | <span className="api-desc">Sound played when a page is pulled out of the book.</span> |
| <Link id="m-rotationevaluation" /><code>{"private Transform rotationEvaluation"}</code> | <span className="api-desc">Point where a pulled or copied paper page is placed before the grip swaps to it.</span> |
| <Link id="m-tippickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" tipPickup"}</code> | <span className="api-desc">Pickup on the page corner that players grab.</span> |
| <Link id="m-verticalactionthreshold" /><code>{"private float verticalActionThreshold"}</code> | <span className="api-desc">Up or down drag on a facing page that pulls it out (up) or copies it (down). Default 0.3.</span> |
| <Link id="m-verticalblendhash" /><code>{"private readonly int verticalBlendHash"}</code> | <span className="api-desc">Animator hash of the `VerticalBlend` parameter.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinteractable" /><code>{"bool IsInteractable { get; set; }"}</code> | <span className="api-desc">Whether the page tip can be grabbed. Reads and sets the tip pickup's flag.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: sets the page animator to always animate so it runs on the headless server.</span> |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Forces whoever holds the tip to drop it.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the tip pickup's grab, release and hand filter events.</span> |
| <Link id="m-delayturn" /><code>{"private IEnumerator DelayTurn() (iterator)"}</code> | <span className="api-desc">Coroutine that waits one frame, then turns the book left or right depending on which side was grabbed.</span> |
| <Link id="m-filterhand" /><code>{"private void FilterHand("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Only lets the tip be grabbed by the player already holding the book.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">While the tip is held, tracks the hand and drives the turn blend, page turns and pull-out or copy actions.</span> |
| <Link id="m-swapinteract" /><code>{"private void SwapInteract("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pagePickup)"}</code> | <span className="api-desc">Server: moves the new paper page to the hand and swaps the grip from the tip to that page.</span> |
| <Link id="m-tipheld" /><code>{"private void TipHeld("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When the tip is grabbed, records the hand's start point, which side is facing, and adjusts which grips are usable.</span> |
| <Link id="m-tipreleased" /><code>{"private void TipReleased("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When the tip is let go without an action, turns the page if dragged past the release threshold (server), else resets the animator.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BookPageInstance`:

<div className="api-used-in">

[`Book.AddPage`](/mod/game-api/types/alta-items/book#m-addpage-2), [`Book.DelayToInteract`](/mod/game-api/types/alta-items/book#m-delaytointeract), [`Book.FinishTurning`](/mod/game-api/types/alta-items/book#m-finishturning), [`Book.spawnedPages`](/mod/game-api/types/alta-items/book#m-spawnedpages).

</div>

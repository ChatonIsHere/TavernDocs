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
| <Link id="m-ctor" /><code>{"BookPageInstance()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionaltightgripcolliders" /><code>{"private Collider[] additionalTightGripColliders"}</code> | Extra colliders checked when re-evaluating the tight grip on the tip. |
| <Link id="m-baseposition" /><code>{"private Vector3 basePosition"}</code> | Hand position, local to the page, when the tip was grabbed. |
| <Link id="m-blendstatehash" /><code>{"private int blendStateHash"}</code> | Animator state hash for the front or back interacting state, set on grab. |
| <Link id="m-duplicatepagesound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" duplicatePageSound"}</code> | Sound played when a page is copied out of the book. |
| <Link id="m-ghosthandtransform" /><code>{"private Transform ghostHandTransform"}</code> | Ghost hand of the player holding the tip, tracked each frame. |
| <Link id="m-gripstobelefthandonlyonnotfacing" /><code>{"private int[] gripsToBeLeftHandOnlyOnNotFacing"}</code> | Grab point indexes that refuse the right hand when the page isn't facing. |
| <Link id="m-gripstodisableonnotfacing" /><code>{"private int[] gripsToDisableOnNotFacing"}</code> | Grab point indexes turned off when the page isn't facing. |
| <Link id="m-hasacted" /><code>{"private bool hasActed"}</code> | Set once the current grab has turned, pulled or copied the page, so release does nothing more. |
| <Link id="m-hasactionsound" /><code>{"private bool hasActionSound"}</code> | Whether the pull or copy sound can still play for this grab. |
| <Link id="m-horizontalactionreleasethreshold" /><code>{"private float horizontalActionReleaseThreshold"}</code> | Sideways drag needed at release to turn the page (default 0.1). |
| <Link id="m-horizontalactionthreshold" /><code>{"private float horizontalActionThreshold"}</code> | Sideways drag that turns the page while still holding (default 0.3). |
| <Link id="m-horizontalblendhash" /><code>{"private readonly int horizontalBlendHash"}</code> | Animator hash of the `HorizontalBlend` parameter. |
| <Link id="m-isfacing" /><code>{"private bool isFacing"}</code> | True when the grabbed page is the back side (animator's `IsFront` is false). Only a facing page can be pulled out or copied. |
| <Link id="m-removepagesound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" removePageSound"}</code> | Sound played when a page is pulled out of the book. |
| <Link id="m-rotationevaluation" /><code>{"private Transform rotationEvaluation"}</code> | Point where a pulled or copied paper page is placed before the grip swaps to it. |
| <Link id="m-tippickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" tipPickup"}</code> | Pickup on the page corner that players grab. |
| <Link id="m-verticalactionthreshold" /><code>{"private float verticalActionThreshold"}</code> | Up or down drag on a facing page that pulls it out (up) or copies it (down). Default 0.3. |
| <Link id="m-verticalblendhash" /><code>{"private readonly int verticalBlendHash"}</code> | Animator hash of the `VerticalBlend` parameter. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinteractable" /><code>{"bool IsInteractable { get; set; }"}</code> | Whether the page tip can be grabbed. Reads and sets the tip pickup's flag. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: sets the page animator to always animate so it runs on the headless server. |
| <Link id="m-release" /><code>{"void Release()"}</code> | Forces whoever holds the tip to drop it. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the tip pickup's grab, release and hand filter events. |
| <Link id="m-delayturn" /><code>{"private IEnumerator DelayTurn() (iterator)"}</code> | Coroutine that waits one frame, then turns the book left or right depending on which side was grabbed. |
| <Link id="m-filterhand" /><code>{"private void FilterHand("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Only lets the tip be grabbed by the player already holding the book. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | While the tip is held, tracks the hand and drives the turn blend, page turns and pull-out or copy actions. |
| <Link id="m-swapinteract" /><code>{"private void SwapInteract("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pagePickup)"}</code> | Server: moves the new paper page to the hand and swaps the grip from the tip to that page. |
| <Link id="m-tipheld" /><code>{"private void TipHeld("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the tip is grabbed, records the hand's start point, which side is facing, and adjusts which grips are usable. |
| <Link id="m-tipreleased" /><code>{"private void TipReleased("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the tip is let go without an action, turns the page if dragged past the release threshold (server), else resets the animator. |

</details>

## Used in

Members of other types that take, return or hold a `BookPageInstance`:

[`Book.AddPage`](/mod/game-api/types/alta-items/book#m-addpage-2), [`Book.DelayToInteract`](/mod/game-api/types/alta-items/book#m-delaytointeract), [`Book.FinishTurning`](/mod/game-api/types/alta-items/book#m-finishturning), [`Book.spawnedPages`](/mod/game-api/types/alta-items/book#m-spawnedpages).

---
title: "BookPageInstance"
description: "class BookPageInstance in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BookPageInstance

A **class** in `Root.Township`, `Alta.Pages`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`PageInstance`](/game-api/types/alta-items/pageinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BookPageInstance()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-additionaltightgripcolliders" /><code>{"private Collider[] additionalTightGripColliders"}</code> |  |
| <Link id="m-baseposition" /><code>{"private Vector3 basePosition"}</code> |  |
| <Link id="m-blendstatehash" /><code>{"private int blendStateHash"}</code> |  |
| <Link id="m-duplicatepagesound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" duplicatePageSound"}</code> |  |
| <Link id="m-ghosthandtransform" /><code>{"private Transform ghostHandTransform"}</code> |  |
| <Link id="m-gripstobelefthandonlyonnotfacing" /><code>{"private int[] gripsToBeLeftHandOnlyOnNotFacing"}</code> |  |
| <Link id="m-gripstodisableonnotfacing" /><code>{"private int[] gripsToDisableOnNotFacing"}</code> |  |
| <Link id="m-hasacted" /><code>{"private bool hasActed"}</code> |  |
| <Link id="m-hasactionsound" /><code>{"private bool hasActionSound"}</code> |  |
| <Link id="m-horizontalactionreleasethreshold" /><code>{"private float horizontalActionReleaseThreshold"}</code> |  |
| <Link id="m-horizontalactionthreshold" /><code>{"private float horizontalActionThreshold"}</code> |  |
| <Link id="m-horizontalblendhash" /><code>{"private readonly int horizontalBlendHash"}</code> |  |
| <Link id="m-isfacing" /><code>{"private bool isFacing"}</code> |  |
| <Link id="m-removepagesound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" removePageSound"}</code> |  |
| <Link id="m-rotationevaluation" /><code>{"private Transform rotationEvaluation"}</code> |  |
| <Link id="m-tippickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" tipPickup"}</code> |  |
| <Link id="m-verticalactionthreshold" /><code>{"private float verticalActionThreshold"}</code> |  |
| <Link id="m-verticalblendhash" /><code>{"private readonly int verticalBlendHash"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinteractable" /><code>{"bool IsInteractable { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-release" /><code>{"void Release()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-delayturn" /><code>{"private IEnumerator DelayTurn() (iterator)"}</code> |  |
| <Link id="m-filterhand" /><code>{"private void FilterHand("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-swapinteract" /><code>{"private void SwapInteract("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pagePickup)"}</code> |  |
| <Link id="m-tipheld" /><code>{"private void TipHeld("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-tipreleased" /><code>{"private void TipReleased("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |

## Used in

Members of other types that take, return or hold a `BookPageInstance`:

[`Book.AddPage`](/game-api/types/alta-items/book#m-addpage-2), [`Book.DelayToInteract`](/game-api/types/alta-items/book#m-delaytointeract), [`Book.FinishTurning`](/game-api/types/alta-items/book#m-finishturning), [`Book.spawnedPages`](/game-api/types/alta-items/book#m-spawnedpages).

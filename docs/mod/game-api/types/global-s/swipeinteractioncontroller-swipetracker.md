---
title: "SwipeInteractionController.SwipeTracker"
description: "Tracks one hand's rigidbody inside a SwipeInteractionController trigger and works out which way it swiped."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SwipeInteractionController.SwipeTracker

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Tracks one hand's rigidbody inside a `SwipeInteractionController` trigger and works out which way it swiped. Client side.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SwipeInteractionController`](/mod/game-api/types/global-s/swipeinteractioncontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SwipeTracker(Rigidbody rigidbody, "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, Vector3 swipeDirection, float swipeMinDistance, bool needToReenterAfterInteract, Action<Rigidbody> removeRigidbody)"}</code> | Creates a `SwipeInteractionController.SwipeTracker` from `rigidbody`, `controller`, `swipeDirection`, `swipeMinDistance`, `needToReenterAfterInteract` and `removeRigidbody`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | The hand's interactor, watched for interactions starting. |
| <Link id="m-needtoreenterafterinteract" /><code>{"private bool needToReenterAfterInteract"}</code> | If true, interacting also removes the tracker, so the hand must leave and re-enter to swipe again. |
| <Link id="m-removerigidbody" /><code>{"private Action<Rigidbody> removeRigidbody"}</code> | Callback that removes this tracker from the controller's dictionary. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered `CalculateSwipe` update. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared late-update module for all swipe trackers. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcolliders" /><code>{"HashSet<Collider> CurrentColliders { get; }"}</code> | The hand's colliders currently inside the trigger. |
| <Link id="m-currentswipedirection" /><code>{"int CurrentSwipeDirection { get; private set; }"}</code> | 1 or -1 once the hand has moved past the minimum distance along the axis, otherwise 0. |

<details>
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbody" /><code>{"private Rigidbody Rigidbody { get; }"}</code> | The tracked hand rigidbody. |
| <Link id="m-swipedirection" /><code>{"private Vector3 SwipeDirection { get; }"}</code> | World-space swipe axis. |
| <Link id="m-swipemindistance" /><code>{"private float SwipeMinDistance { get; }"}</code> | Distance the hand must move along the axis to count as a swipe. |
| <Link id="m-swipeoriginalposition" /><code>{"private Vector3 SwipeOriginalPosition { get; }"}</code> | Rigidbody position when it entered the trigger. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finish" /><code>{"void Finish()"}</code> | Stops the update and unhooks from the interactor. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateswipe" /><code>{"private void CalculateSwipe()"}</code> | Late update: sets the swipe direction from how far the rigidbody moved along the swipe axis. |
| <Link id="m-cleannullcolliders" /><code>{"private bool CleanNullColliders()"}</code> | Drops destroyed or disabled colliders; if none are left, removes the tracker and returns true. |
| <Link id="m-finishoninteract" /><code>{"private void FinishOnInteract("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | When the hand starts an interaction, stops tracking and clears the direction so no swipe fires. |

</details>

## Used in

Members of other types that take, return or hold a `SwipeTracker`:

[`SwipeInteractionController.swipeTrackers`](/mod/game-api/types/global-s/swipeinteractioncontroller#m-swipetrackers).

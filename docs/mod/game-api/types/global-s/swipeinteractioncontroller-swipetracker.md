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
| <Link id="m-ctor" /><code>{"SwipeTracker(Rigidbody rigidbody, "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, Vector3 swipeDirection, float swipeMinDistance, bool needToReenterAfterInteract, Action<Rigidbody> removeRigidbody)"}</code> | <span className="api-desc">Creates a `SwipeInteractionController.SwipeTracker` from `rigidbody`, `controller`, `swipeDirection`, `swipeMinDistance`, `needToReenterAfterInteract` and `removeRigidbody`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | <span className="api-desc">The hand's interactor, watched for interactions starting.</span> |
| <Link id="m-needtoreenterafterinteract" /><code>{"private bool needToReenterAfterInteract"}</code> | <span className="api-desc">If true, interacting also removes the tracker, so the hand must leave and re-enter to swipe again.</span> |
| <Link id="m-removerigidbody" /><code>{"private Action<Rigidbody> removeRigidbody"}</code> | <span className="api-desc">Callback that removes this tracker from the controller's dictionary.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered `CalculateSwipe` update.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared late-update module for all swipe trackers.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcolliders" /><code>{"HashSet<Collider> CurrentColliders { get; }"}</code> | <span className="api-desc">The hand's colliders currently inside the trigger.</span> |
| <Link id="m-currentswipedirection" /><code>{"int CurrentSwipeDirection { get; private set; }"}</code> | <span className="api-desc">1 or -1 once the hand has moved past the minimum distance along the axis, otherwise 0.</span> |

<details className="api-private">
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbody" /><code>{"private Rigidbody Rigidbody { get; }"}</code> | <span className="api-desc">The tracked hand rigidbody.</span> |
| <Link id="m-swipedirection" /><code>{"private Vector3 SwipeDirection { get; }"}</code> | <span className="api-desc">World-space swipe axis.</span> |
| <Link id="m-swipemindistance" /><code>{"private float SwipeMinDistance { get; }"}</code> | <span className="api-desc">Distance the hand must move along the axis to count as a swipe.</span> |
| <Link id="m-swipeoriginalposition" /><code>{"private Vector3 SwipeOriginalPosition { get; }"}</code> | <span className="api-desc">Rigidbody position when it entered the trigger.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finish" /><code>{"void Finish()"}</code> | <span className="api-desc">Stops the update and unhooks from the interactor.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateswipe" /><code>{"private void CalculateSwipe()"}</code> | <span className="api-desc">Late update: sets the swipe direction from how far the rigidbody moved along the swipe axis.</span> |
| <Link id="m-cleannullcolliders" /><code>{"private bool CleanNullColliders()"}</code> | <span className="api-desc">Drops destroyed or disabled colliders; if none are left, removes the tracker and returns true.</span> |
| <Link id="m-finishoninteract" /><code>{"private void FinishOnInteract("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">When the hand starts an interaction, stops tracking and clears the direction so no swipe fires.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SwipeTracker`:

<div className="api-used-in">

[`SwipeInteractionController.swipeTrackers`](/mod/game-api/types/global-s/swipeinteractioncontroller#m-swipetrackers).

</div>

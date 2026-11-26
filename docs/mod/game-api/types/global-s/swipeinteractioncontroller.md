---
title: "SwipeInteractionController"
description: "Trigger that detects a player's hand swiping through it along a set direction and raises OnSwipeExecuted with 1, -1 or 0 when the hand leaves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SwipeInteractionController

A **class** in `Root.Township`, the global namespace.

Trigger that detects a player's hand swiping through it along a set direction and raises `OnSwipeExecuted` with 1, -1 or 0 when the hand leaves.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`SwipeTracker`](/mod/game-api/types/global-s/swipeinteractioncontroller-swipetracker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SwipeInteractionController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-needtoreenterafterinteract" /><code>{"private bool needToReenterAfterInteract"}</code> | <span className="api-desc">If true, a hand that starts an interaction while inside is dropped and must re-enter before it counts.</span> |
| <Link id="m-onswipeexecuted" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" OnSwipeExecuted"}</code> | <span className="api-desc">Event raised when a hand leaves the trigger, with the swipe direction (1, -1, or 0 if it didn't move far enough).</span> |
| <Link id="m-swipedirection" /><code>{"private Vector3 swipeDirection"}</code> | <span className="api-desc">Local swipe direction, normalized.</span> |
| <Link id="m-swipemindistance" /><code>{"private float swipeMinDistance"}</code> | <span className="api-desc">How far along the direction the hand must move to count as a swipe.</span> |
| <Link id="m-swipetrackers" /><code>{"private Dictionary<Rigidbody, "}<Link to="/mod/game-api/types/global-s/swipeinteractioncontroller-swipetracker">{"SwipeInteractionController.SwipeTracker"}</Link>{"> swipeTrackers"}</code> | <span className="api-desc">Active trackers, one per hand rigidbody inside the trigger.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-swipedirection-2" /><code>{"private Vector3 SwipeDirection { get; }"}</code> | <span className="api-desc">The swipe direction in world space (the local `swipeDirection` rotated by this transform).</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops and clears all swipe trackers.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the swipe direction and minimum distance as a red line.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Starts tracking a rigidbody that belongs to a `Controller` (a hand).</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">When the last collider of a tracked hand leaves, stops tracking and raises `OnSwipeExecuted`.</span> |
| <Link id="m-removerigidbody" /><code>{"private void RemoveRigidbody(Rigidbody rigidbody)"}</code> | <span className="api-desc">Drops a hand's tracker without raising the event.</span> |

</details>

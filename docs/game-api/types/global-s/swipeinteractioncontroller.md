---
title: "SwipeInteractionController"
description: "Trigger that detects a player's hand swiping through it along a set direction and raises OnSwipeExecuted with 1, -1 or 0 when the hand leaves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SwipeInteractionController

A **class** in `Root.Township`, no namespace.

Trigger that detects a player's hand swiping through it along a set direction and raises `OnSwipeExecuted` with 1, -1 or 0 when the hand leaves.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`SwipeTracker`](/game-api/types/global-s/swipeinteractioncontroller-swipetracker)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SwipeInteractionController()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-needtoreenterafterinteract" /><code>{"private bool needToReenterAfterInteract"}</code> | If true, a hand that starts an interaction while inside is dropped and must re-enter before it counts. |
| <Link id="m-onswipeexecuted" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" OnSwipeExecuted"}</code> | Event raised when a hand leaves the trigger, with the swipe direction (1, -1, or 0 if it didn't move far enough). |
| <Link id="m-swipedirection" /><code>{"private Vector3 swipeDirection"}</code> | Local swipe direction, normalized. |
| <Link id="m-swipemindistance" /><code>{"private float swipeMinDistance"}</code> | How far along the direction the hand must move to count as a swipe. |
| <Link id="m-swipetrackers" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/global-s/swipeinteractioncontroller-swipetracker">{"SwipeInteractionController.SwipeTracker"}</Link>{"> swipeTrackers"}</code> | Active trackers, one per hand rigidbody inside the trigger. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-swipedirection-2" /><code>{"private Vector3 SwipeDirection { get; }"}</code> | The swipe direction in world space (the local `swipeDirection` rotated by this transform). |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops and clears all swipe trackers. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the swipe direction and minimum distance as a red line. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Starts tracking a rigidbody that belongs to a `Controller` (a hand). |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | When the last collider of a tracked hand leaves, stops tracking and raises `OnSwipeExecuted`. |
| <Link id="m-removerigidbody" /><code>{"private void RemoveRigidbody(Rigidbody rigidbody)"}</code> | Drops a hand's tracker without raising the event. |

</details>

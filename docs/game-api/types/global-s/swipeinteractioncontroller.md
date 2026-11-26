---
title: "SwipeInteractionController"
description: "class SwipeInteractionController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SwipeInteractionController

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-needtoreenterafterinteract" /><code>{"private bool needToReenterAfterInteract"}</code> |
| <Link id="m-onswipeexecuted" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" OnSwipeExecuted"}</code> |
| <Link id="m-swipedirection" /><code>{"private Vector3 swipeDirection"}</code> |
| <Link id="m-swipemindistance" /><code>{"private float swipeMinDistance"}</code> |
| <Link id="m-swipetrackers" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/global-s/swipeinteractioncontroller-swipetracker">{"SwipeInteractionController.SwipeTracker"}</Link>{"> swipeTrackers"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-swipedirection-2" /><code>{"private Vector3 SwipeDirection { get; }"}</code> |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |
| <Link id="m-removerigidbody" /><code>{"private void RemoveRigidbody(Rigidbody rigidbody)"}</code> |

</details>

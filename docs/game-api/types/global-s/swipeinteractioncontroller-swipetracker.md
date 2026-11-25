---
title: "SwipeInteractionController.SwipeTracker"
description: "class SwipeInteractionController.SwipeTracker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SwipeInteractionController.SwipeTracker

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SwipeInteractionController`](/game-api/types/global-s/swipeinteractioncontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SwipeTracker(Rigidbody rigidbody, "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, Vector3 swipeDirection, float swipeMinDistance, bool needToReenterAfterInteract, Action<Rigidbody> removeRigidbody)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-interactor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> |
| <Link id="m-needtoreenterafterinteract" /><code>{"private bool needToReenterAfterInteract"}</code> |
| <Link id="m-removerigidbody" /><code>{"private Action<Rigidbody> removeRigidbody"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentcolliders" /><code>{"HashSet<Collider> CurrentColliders { get; }"}</code> |
| <Link id="m-currentswipedirection" /><code>{"int CurrentSwipeDirection { get; private set; }"}</code> |

<details>
<summary>4 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-rigidbody" /><code>{"private Rigidbody Rigidbody { get; }"}</code> |
| <Link id="m-swipedirection" /><code>{"private Vector3 SwipeDirection { get; }"}</code> |
| <Link id="m-swipemindistance" /><code>{"private float SwipeMinDistance { get; }"}</code> |
| <Link id="m-swipeoriginalposition" /><code>{"private Vector3 SwipeOriginalPosition { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-finish" /><code>{"void Finish()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-calculateswipe" /><code>{"private void CalculateSwipe()"}</code> |
| <Link id="m-cleannullcolliders" /><code>{"private bool CleanNullColliders()"}</code> |
| <Link id="m-finishoninteract" /><code>{"private void FinishOnInteract("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SwipeTracker`:

[`SwipeInteractionController.swipeTrackers`](/game-api/types/global-s/swipeinteractioncontroller#m-swipetrackers).

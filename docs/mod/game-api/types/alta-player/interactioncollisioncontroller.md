---
title: "InteractionCollisionController"
description: "Makes a collider group ignore a pickup's colliders while an Interactor holds it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractionCollisionController

A **class** in `Root.Township`, `Alta.Character`.

Makes a collider group ignore a pickup's colliders while an Interactor holds it.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractionCollisionController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliders"}</code> | The collider group that ignores held pickups. |
| <Link id="m-interactor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | The interactor (hand) to watch. |
| <Link id="m-pickupcolliders" /><code>{"private List<Collider> pickupColliders"}</code> | Colliders of the currently held pickup. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to the interactor's start and end events. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Turns collision back on with the cached pickup colliders and clears the cache. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | If the interactable is a pickup, caches its colliders and makes the group ignore them. |

</details>

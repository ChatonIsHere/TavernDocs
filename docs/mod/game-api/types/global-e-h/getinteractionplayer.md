---
title: "GetInteractionPlayer"
description: "Passes the player who starts or stops using an interactable on to player events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetInteractionPlayer

A **class** in `Root.Township`, the global namespace.

Passes the player who starts or stops using an interactable on to player events.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetInteractionPlayer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | Interactable watched. |
| <Link id="m-interactionended" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" interactionEnded"}</code> | Event fired with the player when they stop interacting. |
| <Link id="m-interactionstarted" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" interactionStarted"}</code> | Event fired with the player when they start interacting. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the interactable's start and end events. |
| <Link id="m-ended" /><code>{"private void Ended("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Fires `interactionEnded` with the interactor's player. |
| <Link id="m-started" /><code>{"private void Started("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Fires `interactionStarted` with the interactor's player. |

</details>

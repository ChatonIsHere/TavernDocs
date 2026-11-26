---
title: "LocalPlayerInteractionEvents"
description: "Fires Unity events when the local player starts or stops using an Interactable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalPlayerInteractionEvents

A **class** in `Root.Township`, no namespace.

Fires Unity events when the local player starts or stops using an `Interactable`. Other players' interactions are ignored. Client.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalPlayerInteractionEvents()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-firstinteractionstarted" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactableevent">{"InteractableEvent"}</Link>{" firstInteractionStarted"}</code> | Event fired when the local player is the first to grab it. |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | The interactable being watched. |
| <Link id="m-interactionended" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactableevent">{"InteractableEvent"}</Link>{" interactionEnded"}</code> | Event fired whenever the local player lets go. |
| <Link id="m-interactionstarted" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactableevent">{"InteractableEvent"}</Link>{" interactionStarted"}</code> | Event fired whenever the local player grabs it. |
| <Link id="m-lastinteractionended" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactableevent">{"InteractableEvent"}</Link>{" lastInteractionEnded"}</code> | Event fired when the local player lets go and no one else holds it. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to the interactable's start and end events. |
| <Link id="m-interactionended-2" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | For the local player, fires `interactionEnded`, and `lastInteractionEnded` if nobody is still interacting. |
| <Link id="m-interactionstarted-2" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | For the local player, fires `interactionStarted`, and `firstInteractionStarted` if it is the only interactor. |

</details>

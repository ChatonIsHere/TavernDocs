---
title: "LocalPlayerInteractionEvents"
description: "Fires Unity events when the local player starts or stops using an Interactable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalPlayerInteractionEvents

A **class** in `Root.Township`, the global namespace.

Fires Unity events when the local player starts or stops using an `Interactable`. Other players' interactions are ignored. Client.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalPlayerInteractionEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-firstinteractionstarted" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactableevent">{"InteractableEvent"}</Link>{" firstInteractionStarted"}</code> | <span className="api-desc">Event fired when the local player is the first to grab it.</span> |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | <span className="api-desc">The interactable being watched.</span> |
| <Link id="m-interactionended" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactableevent">{"InteractableEvent"}</Link>{" interactionEnded"}</code> | <span className="api-desc">Event fired whenever the local player lets go.</span> |
| <Link id="m-interactionstarted" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactableevent">{"InteractableEvent"}</Link>{" interactionStarted"}</code> | <span className="api-desc">Event fired whenever the local player grabs it.</span> |
| <Link id="m-lastinteractionended" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactableevent">{"InteractableEvent"}</Link>{" lastInteractionEnded"}</code> | <span className="api-desc">Event fired when the local player lets go and no one else holds it.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to the interactable's start and end events.</span> |
| <Link id="m-interactionended-2" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">For the local player, fires `interactionEnded`, and `lastInteractionEnded` if nobody is still interacting.</span> |
| <Link id="m-interactionstarted-2" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">For the local player, fires `interactionStarted`, and `firstInteractionStarted` if it is the only interactor.</span> |

</details>

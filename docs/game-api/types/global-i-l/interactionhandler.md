---
title: "InteractionHandler"
description: "Callback for an interaction between an Interactor and an Interactable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractionHandler

A **delegate** in `Root.Township`, no namespace.

Callback for an interaction between an `Interactor` and an `Interactable`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractionHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `InteractionHandler`:

[`Interactor.InteractionEnded`](/game-api/types/global-i-l/interactor#m-interactionended), [`Interactor.InteractionStarted`](/game-api/types/global-i-l/interactor#m-interactionstarted), [`Interactor.PreInteractionStarted`](/game-api/types/global-i-l/interactor#m-preinteractionstarted), [`PlayerEventsManager.InteractionEnded`](/game-api/types/global-p/playereventsmanager#m-interactionended), [`PlayerEventsManager.InteractionStarted`](/game-api/types/global-p/playereventsmanager#m-interactionstarted).

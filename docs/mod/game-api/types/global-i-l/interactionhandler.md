---
title: "InteractionHandler"
description: "Callback for an interaction between an Interactor and an Interactable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractionHandler

A **delegate** in `Root.Township`, the global namespace.

Callback for an interaction between an `Interactor` and an `Interactable`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractionHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `InteractionHandler`:

<div className="api-used-in">

[`Interactor.InteractionEnded`](/mod/game-api/types/global-i-l/interactor#m-interactionended), [`Interactor.InteractionStarted`](/mod/game-api/types/global-i-l/interactor#m-interactionstarted), [`Interactor.PreInteractionStarted`](/mod/game-api/types/global-i-l/interactor#m-preinteractionstarted), [`PlayerEventsManager.InteractionEnded`](/mod/game-api/types/global-p/playereventsmanager#m-interactionended), [`PlayerEventsManager.InteractionStarted`](/mod/game-api/types/global-p/playereventsmanager#m-interactionstarted).

</div>

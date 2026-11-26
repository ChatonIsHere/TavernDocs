---
title: "InteractableUnityEvent"
description: "Serializable UnityEvent that passes an Interactable and the Interactor using it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractableUnityEvent

A **class** in `Root.Township`, no namespace.

Serializable `UnityEvent` that passes an `Interactable` and the `Interactor` using it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `UnityEvent<Interactable, Interactor>`
- **Derived types** [`InteractableEvent`](/game-api/types/global-i-l/interactableevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractableUnityEvent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Used in

Members of other types that take, return or hold a `InteractableUnityEvent`:

[`InteractableEvents.interactionEnded`](/game-api/types/global-i-l/interactableevents#m-interactionended), [`InteractableEvents.interactionStarted`](/game-api/types/global-i-l/interactableevents#m-interactionstarted).

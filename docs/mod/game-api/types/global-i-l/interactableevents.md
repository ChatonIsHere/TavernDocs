---
title: "InteractableEvents"
description: "Exposes an Interactable's interaction started and ended events as Unity events you can wire up in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractableEvents

A **class** in `Root.Township`, the global namespace.

Exposes an `Interactable`'s interaction started and ended events as Unity events you can wire up in the inspector.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractableEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | <span className="api-desc">The interactable on the same object.</span> |
| <Link id="m-interactionended" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactableunityevent">{"InteractableUnityEvent"}</Link>{" interactionEnded"}</code> | <span className="api-desc">Invoked when an interaction ends.</span> |
| <Link id="m-interactionstarted" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactableunityevent">{"InteractableUnityEvent"}</Link>{" interactionStarted"}</code> | <span className="api-desc">Invoked when an interaction starts.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyend" /><code>{"void CopyEnd(UnityEventBase unityEventBase)"}</code> | <span className="api-desc">Replaces the ended event with another one. Only takes effect if called before `Awake`.</span> |
| <Link id="m-copystart" /><code>{"void CopyStart(UnityEventBase unityEventBase)"}</code> | <span className="api-desc">Replaces the started event with another one. Only takes effect if called before `Awake`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the Unity events to the interactable's `InteractionStarted` and `InteractionEnded`.</span> |

</details>

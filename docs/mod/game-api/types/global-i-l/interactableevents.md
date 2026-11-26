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
| <Link id="m-ctor" /><code>{"InteractableEvents()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | The interactable on the same object. |
| <Link id="m-interactionended" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactableunityevent">{"InteractableUnityEvent"}</Link>{" interactionEnded"}</code> | Invoked when an interaction ends. |
| <Link id="m-interactionstarted" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactableunityevent">{"InteractableUnityEvent"}</Link>{" interactionStarted"}</code> | Invoked when an interaction starts. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyend" /><code>{"void CopyEnd(UnityEventBase unityEventBase)"}</code> | Replaces the ended event with another one. Only takes effect if called before `Awake`. |
| <Link id="m-copystart" /><code>{"void CopyStart(UnityEventBase unityEventBase)"}</code> | Replaces the started event with another one. Only takes effect if called before `Awake`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the Unity events to the interactable's `InteractionStarted` and `InteractionEnded`. |

</details>

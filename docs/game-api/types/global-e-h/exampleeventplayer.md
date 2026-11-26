---
title: "ExampleEventPlayer"
description: "Test component that, once enabled, fires one of two events at random every two seconds, forever."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExampleEventPlayer

A **class** in `Root.Township`, no namespace.

Test component that, once enabled, fires one of two events at random every two seconds, forever.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExampleEventPlayer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-event1" /><code>{"private UnityEvent event1"}</code> | First random event. |
| <Link id="m-event2" /><code>{"private UnityEvent event2"}</code> | Second random event. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts the event loop. |
| <Link id="m-playevents" /><code>{"private async void PlayEvents()"}</code> | Async loop that never ends: waits 2 seconds and invokes `event1` or `event2` at random. |

</details>

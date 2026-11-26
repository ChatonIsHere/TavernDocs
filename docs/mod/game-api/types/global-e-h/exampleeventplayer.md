---
title: "ExampleEventPlayer"
description: "Test component that, once enabled, fires one of two events at random every two seconds, forever."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExampleEventPlayer

A **class** in `Root.Township`, the global namespace.

Test component that, once enabled, fires one of two events at random every two seconds, forever.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExampleEventPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-event1" /><code>{"private UnityEvent event1"}</code> | <span className="api-desc">First random event.</span> |
| <Link id="m-event2" /><code>{"private UnityEvent event2"}</code> | <span className="api-desc">Second random event.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts the event loop.</span> |
| <Link id="m-playevents" /><code>{"private async void PlayEvents()"}</code> | <span className="api-desc">Async loop that never ends: waits 2 seconds and invokes `event1` or `event2` at random.</span> |

</details>

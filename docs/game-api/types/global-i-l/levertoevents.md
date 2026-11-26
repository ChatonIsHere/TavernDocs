---
title: "LeverToEvents"
description: "Raises a UnityEvent when a SelectionLever on the same object changes position, optionally on the server only."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeverToEvents

A **class** in `Root.Township`, no namespace.

Raises a UnityEvent when a `SelectionLever` on the same object changes position, optionally on the server only.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Buttons and levers](/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeverToEvents()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isserveronly" /><code>{"private bool isServerOnly"}</code> | If set, the events only run on the server. |
| <Link id="m-onposition0" /><code>{"private UnityEvent onPosition0"}</code> | Event raised when the lever moves to position 0. |
| <Link id="m-onposition1" /><code>{"private UnityEvent onPosition1"}</code> | Event raised when the lever moves to any other position. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the lever's `SelectionChanged`, unless `isServerOnly` is set and this isn't the server. |
| <Link id="m-triggerevents" /><code>{"private void TriggerEvents("}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever, int oldIndex, int newIndex)"}</code> | Raises `onPosition0` for index 0 and `onPosition1` for any other index. |

</details>

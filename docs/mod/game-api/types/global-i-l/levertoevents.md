---
title: "LeverToEvents"
description: "Raises a UnityEvent when a SelectionLever on the same object changes position, optionally on the server only."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeverToEvents

A **class** in `Root.Township`, the global namespace.

Raises a UnityEvent when a `SelectionLever` on the same object changes position, optionally on the server only.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Buttons and levers](/mod/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeverToEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isserveronly" /><code>{"private bool isServerOnly"}</code> | <span className="api-desc">If set, the events only run on the server.</span> |
| <Link id="m-onposition0" /><code>{"private UnityEvent onPosition0"}</code> | <span className="api-desc">Event raised when the lever moves to position 0.</span> |
| <Link id="m-onposition1" /><code>{"private UnityEvent onPosition1"}</code> | <span className="api-desc">Event raised when the lever moves to any other position.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the lever's `SelectionChanged`, unless `isServerOnly` is set and this isn't the server.</span> |
| <Link id="m-triggerevents" /><code>{"private void TriggerEvents("}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever, int oldIndex, int newIndex)"}</code> | <span className="api-desc">Raises `onPosition0` for index 0 and `onPosition1` for any other index.</span> |

</details>

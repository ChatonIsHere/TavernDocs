---
title: "ThrowableArrow"
description: "Lets an arrow fly as an arrow when thrown by hand: stops arrow flight while held and starts simple flight on release, unless docked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThrowableArrow

A **class** in `Root.Township`, the global namespace.

Lets an arrow fly as an arrow when thrown by hand: stops arrow flight while held and starts simple flight on release, unless docked.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThrowableArrow()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrow" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/arrow">{"Arrow"}</Link>{" arrow"}</code> | <span className="api-desc">The `Arrow` component.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The arrow's pickup.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to the pickup's grab and release events.</span> |
| <Link id="m-startupdatingarrowflight" /><code>{"private void StartUpdatingArrowFlight("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On release, starts simple arrow flight if nothing else holds it and it isn't docked.</span> |
| <Link id="m-stopupdatingarrowflight" /><code>{"private void StopUpdatingArrowFlight("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On grab, stops arrow flight.</span> |

</details>

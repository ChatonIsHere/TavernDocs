---
title: "CrankController"
description: "Hooks a Pickup's interaction start and end for a Crank, but both handlers are empty, so it does nothing in this build."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CrankController

A **class** in `Root.Township`, the global namespace.

Hooks a `Pickup`'s interaction start and end for a `Crank`, but both handlers are empty, so it does nothing in this build.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CrankController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-crank" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/crank">{"Crank"}</Link>{" crank"}</code> | <span className="api-desc">The crank this was meant to drive. Unused.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup whose interaction events are hooked.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes the two handlers to the pickup's `InteractionStarted` and `InteractionEnded` events.</span> |
| <Link id="m-startupdatingcrank" /><code>{"private void StartUpdatingCrank("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Empty handler for when the pickup is grabbed.</span> |
| <Link id="m-stopupdatingcrank" /><code>{"private void StopUpdatingCrank("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Empty handler for when the pickup is released.</span> |

</details>

---
title: "CrankController"
description: "Hooks a Pickup's interaction start and end for a Crank, but both handlers are empty, so it does nothing in this build."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CrankController

A **class** in `Root.Township`, no namespace.

Hooks a `Pickup`'s interaction start and end for a `Crank`, but both handlers are empty, so it does nothing in this build.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CrankController()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-crank" /><code>{"private "}<Link to="/game-api/types/global-c-d/crank">{"Crank"}</Link>{" crank"}</code> | The crank this was meant to drive. Unused. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup whose interaction events are hooked. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes the two handlers to the pickup's `InteractionStarted` and `InteractionEnded` events. |
| <Link id="m-startupdatingcrank" /><code>{"private void StartUpdatingCrank("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Empty handler for when the pickup is grabbed. |
| <Link id="m-stopupdatingcrank" /><code>{"private void StopUpdatingCrank("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Empty handler for when the pickup is released. |

</details>

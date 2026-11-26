---
title: "HapticWhileHeld"
description: "Component that buzzes the holding hand's controller every frame while its Pickup is held."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HapticWhileHeld

A **class** in `Root.Township`, `Alta.Pages`.

Component that buzzes the holding hand's controller every frame while its `Pickup` is held. Client side.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HapticWhileHeld()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haptic" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" haptic"}</code> | The running haptic coroutine, if any. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`. |
| <Link id="m-strength" /><code>{"private float strength"}</code> | Backing field for `Strength`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; set; }"}</code> | The pickup to watch. Found on the same object by default. |
| <Link id="m-strength-2" /><code>{"float Strength { get; set; }"}</code> | Haptic strength sent to the controller. |

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haptic-2" /><code>{"private IEnumerator Haptic() (iterator)"}</code> | Coroutine that triggers a haptic pulse of `strength` on every interactor's controller each frame. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Stops the haptic coroutine when the pickup is let go. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Restarts the haptic coroutine when the pickup is grabbed. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks from the pickup's interaction events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the pickup's interaction events, starting the buzz at once if it is already held. |

</details>

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
| <Link id="m-ctor" /><code>{"HapticWhileHeld()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haptic" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" haptic"}</code> | <span className="api-desc">The running haptic coroutine, if any.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`.</span> |
| <Link id="m-strength" /><code>{"private float strength"}</code> | <span className="api-desc">Backing field for `Strength`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The pickup to watch. Found on the same object by default.</span> |
| <Link id="m-strength-2" /><code>{"float Strength { get; set; }"}</code> | <span className="api-desc">Haptic strength sent to the controller.</span> |

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haptic-2" /><code>{"private IEnumerator Haptic() (iterator)"}</code> | <span className="api-desc">Coroutine that triggers a haptic pulse of `strength` on every interactor's controller each frame.</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Stops the haptic coroutine when the pickup is let go.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Restarts the haptic coroutine when the pickup is grabbed.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks from the pickup's interaction events.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the pickup's interaction events, starting the buzz at once if it is already held.</span> |

</details>

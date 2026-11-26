---
title: "DelayedHoverPickup"
description: "A HoverPickup that waits before floating back to its hover spot after being let go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayedHoverPickup

A **class** in `Root.Township`, the global namespace.

A `HoverPickup` that waits before floating back to its hover spot after being let go. Grabbing it again cancels the wait.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`HoverPickup`](/mod/game-api/types/global-e-h/hoverpickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DelayedHoverPickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaytohover" /><code>{"private float delayToHover"}</code> | <span className="api-desc">Seconds to wait after release before moving back.</span> |
| <Link id="m-hoverstart" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" hoverStart"}</code> | <span className="api-desc">The scheduled `Timeline` entry for the move back.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlegrabbed" /><code>{"protected override void HandleGrabbed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Cancels a pending move back, then handles the grab as normal.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Cancels a pending move back.</span> |
| <Link id="m-startmovingback" /><code>{"protected override void StartMovingBack("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Schedules the normal move back after `delayToHover` seconds on the `Timeline`.</span> |

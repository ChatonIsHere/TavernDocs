---
title: "WallCollisionHelper"
description: "Stops fast pickups passing through walls: switches a pickup's rigidbody to continuous collision detection while held and for a while after release,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WallCollisionHelper

A **static class** in `Root.Township`, the global namespace.

Stops fast pickups passing through walls: switches a pickup's rigidbody to continuous collision detection while held and for a while after release, undocking or spawn, then back to discrete. `Pickup` sets it up for pickups that start discrete.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private static Dictionary<uint, "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> entries"}</code> | <span className="api-desc">Pending reset timers, keyed by entity identifier.</span> |
| <Link id="m-thrownduration" /><code>{"private const float ThrownDuration"}</code> | <span className="api-desc">Seconds of continuous detection after release (10).</span> |
| <Link id="m-undockedduration" /><code>{"private const float UndockedDuration"}</code> | <span className="api-desc">Seconds of continuous detection after undocking or server spawn (5).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"static void Initialize("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Hooks a pickup's grab, release, undock and destroy events if its rigidbody is discrete. The server also boosts it for 5 seconds.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelentry" /><code>{"private static void CancelEntry("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Cancels a pickup's pending switch back to discrete.</span> |
| <Link id="m-delaycollisiondetectionset" /><code>{"private static void DelayCollisionDetectionSet("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Called just after a grab; sets `ContinuousDynamic` if the pickup is still held.</span> |
| <Link id="m-increasecollisiondetectionforduration" /><code>{"private static void IncreaseCollisionDetectionForDuration("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, float duration)"}</code> | <span className="api-desc">Sets continuous detection and schedules a return to discrete after the duration if the pickup is then free. Skips docked or kinematic pickups.</span> |
| <Link id="m-interactionended" /><code>{"private static void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, keeps continuous detection for `ThrownDuration`.</span> |
| <Link id="m-interactionstarted" /><code>{"private static void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab, cancels any pending reset and sets `ContinuousDynamic` after a short delay.</span> |
| <Link id="m-stoplistening" /><code>{"private static void StopListening("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Unhooks the pickup's events when its entity is destroyed.</span> |
| <Link id="m-undocked" /><code>{"private static void Undocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">On undock while not held, boosts detection for `UndockedDuration`.</span> |

</details>

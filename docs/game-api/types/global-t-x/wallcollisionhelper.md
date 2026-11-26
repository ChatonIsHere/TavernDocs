---
title: "WallCollisionHelper"
description: "Stops fast pickups passing through walls: switches a pickup's rigidbody to continuous collision detection while held and for a while after release,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WallCollisionHelper

A **static class** in `Root.Township`, no namespace.

Stops fast pickups passing through walls: switches a pickup's rigidbody to continuous collision detection while held and for a while after release, undocking or spawn, then back to discrete. `Pickup` sets it up for pickups that start discrete.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> entries"}</code> | Pending reset timers, keyed by entity identifier. |
| <Link id="m-thrownduration" /><code>{"private const float ThrownDuration"}</code> | Seconds of continuous detection after release (10). |
| <Link id="m-undockedduration" /><code>{"private const float UndockedDuration"}</code> | Seconds of continuous detection after undocking or server spawn (5). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"static void Initialize("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Hooks a pickup's grab, release, undock and destroy events if its rigidbody is discrete. The server also boosts it for 5 seconds. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelentry" /><code>{"private static void CancelEntry("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Cancels a pickup's pending switch back to discrete. |
| <Link id="m-delaycollisiondetectionset" /><code>{"private static void DelayCollisionDetectionSet("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Called just after a grab; sets `ContinuousDynamic` if the pickup is still held. |
| <Link id="m-increasecollisiondetectionforduration" /><code>{"private static void IncreaseCollisionDetectionForDuration("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, float duration)"}</code> | Sets continuous detection and schedules a return to discrete after the duration if the pickup is then free. Skips docked or kinematic pickups. |
| <Link id="m-interactionended" /><code>{"private static void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, keeps continuous detection for `ThrownDuration`. |
| <Link id="m-interactionstarted" /><code>{"private static void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab, cancels any pending reset and sets `ContinuousDynamic` after a short delay. |
| <Link id="m-stoplistening" /><code>{"private static void StopListening("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Unhooks the pickup's events when its entity is destroyed. |
| <Link id="m-undocked" /><code>{"private static void Undocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | On undock while not held, boosts detection for `UndockedDuration`. |

</details>

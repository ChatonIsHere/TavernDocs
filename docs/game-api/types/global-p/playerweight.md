---
title: "PlayerWeight"
description: "Tracks how much a player is carrying: everything in their body docks plus what's in their hands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerWeight

A **class** in `Root.Township`, no namespace.

Tracks how much a player is carrying: everything in their body docks plus what's in their hands. Server side; `PlayerWeightStat` listens to `WeightChanged`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerWeight()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks"}</code> | Backing field for `Docks`. |
| <Link id="m-overridenweight" /><code>{"private float? overridenWeight"}</code> | Backing field for `OverridenWeight`. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | The player controller whose hands are checked. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-docks-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> Docks { get; }"}</code> | The player's body docks whose contents count toward the weight. |
| <Link id="m-overridenweight-2" /><code>{"float? OverridenWeight { get; set; }"}</code> | When set, replaces the computed weight (spirit form sets it to the orbs' weight). Setting null goes back to the real total. |
| <Link id="m-totalweight" /><code>{"float TotalWeight { get; private set; }"}</code> | Current carried weight, or the override when one is set. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-weightchanged" /><code>{"event Action<"}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{", float> WeightChanged"}</code> | Raised with the player and new total whenever `TotalWeight` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks dock and hand events a frame later, and unhooks when the entity is destroyed. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getinteractablesweight" /><code>{"private float GetInteractablesWeight()"}</code> | Weight of what the two hands hold, counting an item held in both hands once. |
| <Link id="m-getinteractorsweight" /><code>{"private float GetInteractorsWeight("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Total weight of the pickup one hand holds, or 0. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | When a hand lets go of a pickup, stops listening to its weight and recalculates. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | When a hand grabs a pickup, listens to its weight changes and recalculates. |
| <Link id="m-onweightchanged" /><code>{"private void OnWeightChanged()"}</code> | Schedules a recalculation for the next frame. |
| <Link id="m-onweightchangedinternal" /><code>{"private void OnWeightChangedInternal()"}</code> | Sums docks and hands into `TotalWeight` and raises `WeightChanged` if it changed. Skipped while `OverridenWeight` is set. |
| <Link id="m-setupevents" /><code>{"private void SetupEvents()"}</code> | Subscribes to dock weight changes and both hands' grab and release events, then calculates the first total. |
| <Link id="m-unsubscribe" /><code>{"private void Unsubscribe("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Stops listening to dock weight changes when the entity is destroyed. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerWeight`:

[`SpiritState.weight`](/game-api/types/alta-player/spiritstate#m-weight), [`PickupWeightScale.players`](/game-api/types/global-p/pickupweightscale#m-players).

---
title: "PlayerWeight"
description: "Tracks how much a player is carrying: everything in their body docks plus what's in their hands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerWeight

A **class** in `Root.Township`, the global namespace.

Tracks how much a player is carrying: everything in their body docks plus what's in their hands. Server side; `PlayerWeightStat` listens to `WeightChanged`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerWeight()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks"}</code> | <span className="api-desc">Backing field for `Docks`.</span> |
| <Link id="m-overridenweight" /><code>{"private float? overridenWeight"}</code> | <span className="api-desc">Backing field for `OverridenWeight`.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | <span className="api-desc">The player controller whose hands are checked.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-docks-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> Docks { get; }"}</code> | <span className="api-desc">The player's body docks whose contents count toward the weight.</span> |
| <Link id="m-overridenweight-2" /><code>{"float? OverridenWeight { get; set; }"}</code> | <span className="api-desc">When set, replaces the computed weight (spirit form sets it to the orbs' weight). Setting null goes back to the real total.</span> |
| <Link id="m-totalweight" /><code>{"float TotalWeight { get; private set; }"}</code> | <span className="api-desc">Current carried weight, or the override when one is set.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-weightchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{", float> WeightChanged"}</code> | <span className="api-desc">Raised with the player and new total whenever `TotalWeight` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks dock and hand events a frame later, and unhooks when the entity is destroyed.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getinteractablesweight" /><code>{"private float GetInteractablesWeight()"}</code> | <span className="api-desc">Weight of what the two hands hold, counting an item held in both hands once.</span> |
| <Link id="m-getinteractorsweight" /><code>{"private float GetInteractorsWeight("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Total weight of the pickup one hand holds, or 0.</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">When a hand lets go of a pickup, stops listening to its weight and recalculates.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">When a hand grabs a pickup, listens to its weight changes and recalculates.</span> |
| <Link id="m-onweightchanged" /><code>{"private void OnWeightChanged()"}</code> | <span className="api-desc">Schedules a recalculation for the next frame.</span> |
| <Link id="m-onweightchangedinternal" /><code>{"private void OnWeightChangedInternal()"}</code> | <span className="api-desc">Sums docks and hands into `TotalWeight` and raises `WeightChanged` if it changed. Skipped while `OverridenWeight` is set.</span> |
| <Link id="m-setupevents" /><code>{"private void SetupEvents()"}</code> | <span className="api-desc">Subscribes to dock weight changes and both hands' grab and release events, then calculates the first total.</span> |
| <Link id="m-unsubscribe" /><code>{"private void Unsubscribe("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Stops listening to dock weight changes when the entity is destroyed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerWeight`:

<div className="api-used-in">

[`SpiritState.weight`](/mod/game-api/types/alta-player/spiritstate#m-weight), [`PickupWeightScale.players`](/mod/game-api/types/global-p/pickupweightscale#m-players).

</div>

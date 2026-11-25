---
title: "PlayerWeight"
description: "class PlayerWeight in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerWeight

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerWeight()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-docks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks"}</code> |
| <Link id="m-overridenweight" /><code>{"private float? overridenWeight"}</code> |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-docks-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> Docks { get; }"}</code> |
| <Link id="m-overridenweight-2" /><code>{"float? OverridenWeight { get; set; }"}</code> |
| <Link id="m-totalweight" /><code>{"float TotalWeight { get; private set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-weightchanged" /><code>{"event Action<"}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{", float> WeightChanged"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getinteractablesweight" /><code>{"private float GetInteractablesWeight()"}</code> |
| <Link id="m-getinteractorsweight" /><code>{"private float GetInteractorsWeight("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |
| <Link id="m-onweightchanged" /><code>{"private void OnWeightChanged()"}</code> |
| <Link id="m-onweightchangedinternal" /><code>{"private void OnWeightChangedInternal()"}</code> |
| <Link id="m-setupevents" /><code>{"private void SetupEvents()"}</code> |
| <Link id="m-unsubscribe" /><code>{"private void Unsubscribe("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerWeight`:

[`SpiritState.weight`](/game-api/types/alta-player/spiritstate#m-weight), [`PickupWeightScale.players`](/game-api/types/global-p/pickupweightscale#m-players).

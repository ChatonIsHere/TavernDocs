---
title: "PickupHolder"
description: "Holds one pickup in place at an interaction point, frozen and parented to this entity, and syncs which pickup it holds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupHolder

A **class** in `Root.Township`, no namespace.

Holds one pickup in place at an interaction point, frozen and parented to this entity, and syncs which pickup it holds. Used by `DecraftingDeck`. The server decides what is held.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupHolder()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactionpoint" /><code>{"private Transform interactionPoint"}</code> | Transform the held pickup is grabbed to. |
| <Link id="m-movetoposition" /><code>{"private Coroutine moveToPosition"}</code> | Running `MoveToPosition` coroutine, if any. |
| <Link id="m-movetopositionduration" /><code>{"private float moveToPositionDuration"}</code> | Seconds the held pickup takes to ease into place. Defaults to 0.5. |
| <Link id="m-syncheldpickup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncHeldPickup"}</code> | Method sync on `SyncA` for the held pickup's ID. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heldpickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" HeldPickup { get; private set; }"}</code> | The pickup currently held, or null. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-holdfilter" /><code>{"event "}<Link to="/game-api/types/global-p/pickupholderfilter">{"PickupHolderFilter"}</Link>{" HoldFilter"}</code> | Lets listeners refuse a pickup before it is held by setting the `ref` valid flag to false. |
| <Link id="m-onheld" /><code>{"event "}<Link to="/game-api/types/global-m-o/onheld">{"OnHeld"}</Link>{" "}<Link to="/game-api/types/global-m-o/onheld">{"OnHeld"}</Link></code> | Raised after `HoldPickup` with the pickup. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-holdpickup" /><code>{"void HoldPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Holds the pickup and fires `OnHeld`. On a client it also sends the ID to the server, but the server ignores incoming syncs. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `syncHeldPickup` method sync. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the held pickup's ID (or 0) to a joining player. |
| <Link id="m-releasepickup" /><code>{"void ReleasePickup()"}</code> | Unfreezes and unparents the held pickup; the server restores its save mode and syncs the release. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-internalholdpickup" /><code>{"private void InternalHoldPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Releases the old pickup, checks `HoldFilter`, then freezes and parents the new one; the server saves it as a child and syncs it. |
| <Link id="m-movetoposition-2" /><code>{"private IEnumerator MoveToPosition() (iterator)"}</code> | Client coroutine that eases the held pickup into its grab pose over `moveToPositionDuration`, with colliders off. |
| <Link id="m-setcollidersenabled" /><code>{"private void SetCollidersEnabled(bool isEnabled)"}</code> | Turns all of the held pickup's colliders on or off. |
| <Link id="m-syncheldpickup-2" /><code>{"private void SyncHeldPickup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint heldIdentifier)"}</code> | Method sync with the held entity ID. Clients wait for that entity to spawn and hold it, or release on 0. |

</details>

## Used in

Members of other types that take, return or hold a `PickupHolder`:

[`DecraftingDeck.pickupHolder`](/game-api/types/alta-crafting/decraftingdeck#m-pickupholder).

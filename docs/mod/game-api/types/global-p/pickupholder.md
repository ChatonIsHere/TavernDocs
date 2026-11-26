---
title: "PickupHolder"
description: "Holds one pickup in place at an interaction point, frozen and parented to this entity, and syncs which pickup it holds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupHolder

A **class** in `Root.Township`, the global namespace.

Holds one pickup in place at an interaction point, frozen and parented to this entity, and syncs which pickup it holds. Used by `DecraftingDeck`. The server decides what is held.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupHolder()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactionpoint" /><code>{"private Transform interactionPoint"}</code> | <span className="api-desc">Transform the held pickup is grabbed to.</span> |
| <Link id="m-movetoposition" /><code>{"private Coroutine moveToPosition"}</code> | <span className="api-desc">Running `MoveToPosition` coroutine, if any.</span> |
| <Link id="m-movetopositionduration" /><code>{"private float moveToPositionDuration"}</code> | <span className="api-desc">Seconds the held pickup takes to ease into place. Defaults to 0.5.</span> |
| <Link id="m-syncheldpickup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncHeldPickup"}</code> | <span className="api-desc">Method sync on `SyncA` for the held pickup's ID.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heldpickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" HeldPickup { get; private set; }"}</code> | <span className="api-desc">The pickup currently held, or null.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-holdfilter" /><code>{"event "}<Link to="/mod/game-api/types/global-p/pickupholderfilter">{"PickupHolderFilter"}</Link>{" HoldFilter"}</code> | <span className="api-desc">Lets listeners refuse a pickup before it is held by setting the `ref` valid flag to false.</span> |
| <Link id="m-onheld" /><code>{"event "}<Link to="/mod/game-api/types/global-m-o/onheld">{"OnHeld"}</Link>{" "}<Link to="/mod/game-api/types/global-m-o/onheld">{"OnHeld"}</Link></code> | <span className="api-desc">Raised after `HoldPickup` with the pickup.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-holdpickup" /><code>{"void HoldPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Holds the pickup and fires `OnHeld`. On a client it also sends the ID to the server, but the server ignores incoming syncs.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the `syncHeldPickup` method sync.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the held pickup's ID (or 0) to a joining player.</span> |
| <Link id="m-releasepickup" /><code>{"void ReleasePickup()"}</code> | <span className="api-desc">Unfreezes and unparents the held pickup; the server restores its save mode and syncs the release.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-internalholdpickup" /><code>{"private void InternalHoldPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Releases the old pickup, checks `HoldFilter`, then freezes and parents the new one; the server saves it as a child and syncs it.</span> |
| <Link id="m-movetoposition-2" /><code>{"private IEnumerator MoveToPosition() (iterator)"}</code> | <span className="api-desc">Client coroutine that eases the held pickup into its grab pose over `moveToPositionDuration`, with colliders off.</span> |
| <Link id="m-setcollidersenabled" /><code>{"private void SetCollidersEnabled(bool isEnabled)"}</code> | <span className="api-desc">Turns all of the held pickup's colliders on or off.</span> |
| <Link id="m-syncheldpickup-2" /><code>{"private void SyncHeldPickup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint heldIdentifier)"}</code> | <span className="api-desc">Method sync with the held entity ID. Clients wait for that entity to spawn and hold it, or release on 0.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PickupHolder`:

<div className="api-used-in">

[`DecraftingDeck.pickupHolder`](/mod/game-api/types/alta-crafting/decraftingdeck#m-pickupholder).

</div>

---
title: "PickupHolder"
description: "Holds one pickup in place (server decides, synced)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupHolder

A **class** in `Root.Township`, no namespace.

Holds one pickup in place (server decides, synced).

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupHolder()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-interactionpoint" /><code>{"private Transform interactionPoint"}</code> |  |
| <Link id="m-movetoposition" /><code>{"private Coroutine moveToPosition"}</code> |  |
| <Link id="m-movetopositionduration" /><code>{"private float moveToPositionDuration"}</code> |  |
| <Link id="m-syncheldpickup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncHeldPickup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heldpickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" HeldPickup { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-holdfilter" /><code>{"event "}<Link to="/game-api/types/global-p/pickupholderfilter">{"PickupHolderFilter"}</Link>{" HoldFilter"}</code> |  |
| <Link id="m-onheld" /><code>{"event "}<Link to="/game-api/types/global-m-o/onheld">{"OnHeld"}</Link>{" "}<Link to="/game-api/types/global-m-o/onheld">{"OnHeld"}</Link></code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-holdpickup" /><code>{"void HoldPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-releasepickup" /><code>{"void ReleasePickup()"}</code> |  |
| <Link id="m-internalholdpickup" /><code>{"private void InternalHoldPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-movetoposition-2" /><code>{"private IEnumerator MoveToPosition() (iterator)"}</code> |  |
| <Link id="m-setcollidersenabled" /><code>{"private void SetCollidersEnabled(bool isEnabled)"}</code> |  |
| <Link id="m-syncheldpickup-2" /><code>{"private void SyncHeldPickup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint heldIdentifier)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PickupHolder`:

[`DecraftingDeck.pickupHolder`](/game-api/types/alta-crafting/decraftingdeck#m-pickupholder).

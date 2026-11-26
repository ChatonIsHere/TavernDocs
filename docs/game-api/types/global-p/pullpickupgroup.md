---
title: "PullPickupGroup"
description: "A group of pickups parented to one holder that players pull off one at a time by grabbing and drawing the hand away (used by PotatoSapling)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullPickupGroup

A **class** in `Root.Township`, no namespace.

A group of pickups parented to one holder that players pull off one at a time by grabbing and drawing the hand away (used by `PotatoSapling`). Both sides; the server decides when a pull succeeds and syncs adds and removes.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullPickupGroup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | The group's transform, cached in `Initialize`. Grouped pickups are parented to it. |
| <Link id="m-directionweighting" /><code>{"private float directionWeighting"}</code> | 0 to 1. How much the pull is measured along `pullDirection` rather than wherever the hand moves. |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> | Strength of the hand vibration while pulling, scaled by how close the pull is to done. |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | The interactable on this object that grouped pickups forward their grabs to. |
| <Link id="m-interactors" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> interactors"}</code> | Which hand is holding each grouped pickup, so `Remove` can hand it over. |
| <Link id="m-isadding" /><code>{"private bool isAdding"}</code> | Whether the next `SyncAdd` is an add (true) or a remove. |
| <Link id="m-nextinteraction" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" nextInteraction"}</code> | The last remote hand that started an interaction, waiting for `SyncSelection` to say which pickup. |
| <Link id="m-nextselection" /><code>{"private uint nextSelection"}</code> | Identifier of the pickup to send or just received in `SyncSelection` (0 for none). |
| <Link id="m-nextspawn" /><code>{"private uint nextSpawn"}</code> | Identifier of the pickup to send or just received in `SyncAdd`. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Optional parent pickup found on the prefab root. When set, grabs only work while the other hand holds it. |
| <Link id="m-pickups" /><code>{"private List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickups"}</code> | The pickups currently in the group. |
| <Link id="m-pullcoroutines" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Coroutine> pullCoroutines"}</code> | Running `CheckPull` coroutine for each hand. |
| <Link id="m-pulldirection" /><code>{"private Vector3 pullDirection"}</code> | Local direction the hand has to move to pull a pickup off. Defaults to up. |
| <Link id="m-pulldistance" /><code>{"private float pullDistance"}</code> | How far (minimum 0.05) the hand must move along the pull direction before the server removes the pickup. |
| <Link id="m-syncadd" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAdd"}</code> | Message (SyncA) for `SyncAdd`. |
| <Link id="m-syncaddall" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAddAll"}</code> | Message (SyncB) for `SyncAddAll`. |
| <Link id="m-syncselection" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSelection"}</code> | Message (SyncC) for `SyncSelection`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of pickups still in the group. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onpulled" /><code>{"event Action<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> OnPulled"}</code> | Fires with the pickup each time one leaves the group, on both sides. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" child)"}</code> | Parents a pickup to the group, makes it kinematic and forwards its grabs here. On the server also saves it as a child and syncs the add. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the three sync messages and hooks the interactable's start and end events. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Resends the full pickup list. Note it sends to all chunks, not only the new player. |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" child)"}</code> | Unparents a pickup, turns its physics back on and fires `OnPulled`. On the server syncs it and hands it to the pulling hand. |
| <Link id="m-removerandom" /><code>{"void RemoveRandom()"}</code> | Server: removes one pickup at random, if any are left. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkpull" /><code>{"private IEnumerator CheckPull("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> | Coroutine while a hand holds a grouped pickup: slides it along the pull direction with haptics. Server removes it past `pullDistance`. |
| <Link id="m-ifheld" /><code>{"private void IfHeld("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Interaction filter, set when `pickup` is set: only allows a grab if the other hand is holding that pickup. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops the pull coroutine for that hand and detaches the hand from the pickup. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On the local hand, sends which pickup was grabbed and starts the pull. For remote hands, waits for `SyncSelection`. |
| <Link id="m-syncadd-2" /><code>{"private void SyncAdd("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends one pickup identifier and whether it was added or removed. Remote clients apply it. |
| <Link id="m-syncaddall-2" /><code>{"private void SyncAddAll("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends every grouped pickup identifier (count in 8 bits, so at most 255). Remote clients add them all. |
| <Link id="m-syncselection-2" /><code>{"private void SyncSelection("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends which pickup a hand grabbed. The server relays it to the others, who start the grab for that remote hand. |
| <Link id="m-trygrab" /><code>{"private void TryGrab("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Puts the pickup in the hand without a joint and starts `CheckPull` for that hand. |

</details>

## Used in

Members of other types that take, return or hold a `PullPickupGroup`:

[`PotatoSapling.pullPickupGroup`](/game-api/types/global-p/potatosapling#m-pullpickupgroup).

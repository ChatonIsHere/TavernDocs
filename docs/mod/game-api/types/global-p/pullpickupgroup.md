---
title: "PullPickupGroup"
description: "A group of pickups parented to one holder that players pull off one at a time by grabbing and drawing the hand away (used by PotatoSapling)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullPickupGroup

A **class** in `Root.Township`, the global namespace.

A group of pickups parented to one holder that players pull off one at a time by grabbing and drawing the hand away (used by `PotatoSapling`). Both sides; the server decides when a pull succeeds and syncs adds and removes.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullPickupGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">The group's transform, cached in `Initialize`. Grouped pickups are parented to it.</span> |
| <Link id="m-directionweighting" /><code>{"private float directionWeighting"}</code> | <span className="api-desc">0 to 1. How much the pull is measured along `pullDirection` rather than wherever the hand moves.</span> |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> | <span className="api-desc">Strength of the hand vibration while pulling, scaled by how close the pull is to done.</span> |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | <span className="api-desc">The interactable on this object that grouped pickups forward their grabs to.</span> |
| <Link id="m-interactors" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> interactors"}</code> | <span className="api-desc">Which hand is holding each grouped pickup, so `Remove` can hand it over.</span> |
| <Link id="m-isadding" /><code>{"private bool isAdding"}</code> | <span className="api-desc">Whether the next `SyncAdd` is an add (true) or a remove.</span> |
| <Link id="m-nextinteraction" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" nextInteraction"}</code> | <span className="api-desc">The last remote hand that started an interaction, waiting for `SyncSelection` to say which pickup.</span> |
| <Link id="m-nextselection" /><code>{"private uint nextSelection"}</code> | <span className="api-desc">Identifier of the pickup to send or just received in `SyncSelection` (0 for none).</span> |
| <Link id="m-nextspawn" /><code>{"private uint nextSpawn"}</code> | <span className="api-desc">Identifier of the pickup to send or just received in `SyncAdd`.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Optional parent pickup found on the prefab root. When set, grabs only work while the other hand holds it.</span> |
| <Link id="m-pickups" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickups"}</code> | <span className="api-desc">The pickups currently in the group.</span> |
| <Link id="m-pullcoroutines" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Coroutine> pullCoroutines"}</code> | <span className="api-desc">Running `CheckPull` coroutine for each hand.</span> |
| <Link id="m-pulldirection" /><code>{"private Vector3 pullDirection"}</code> | <span className="api-desc">Local direction the hand has to move to pull a pickup off. Defaults to up.</span> |
| <Link id="m-pulldistance" /><code>{"private float pullDistance"}</code> | <span className="api-desc">How far (minimum 0.05) the hand must move along the pull direction before the server removes the pickup.</span> |
| <Link id="m-syncadd" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAdd"}</code> | <span className="api-desc">Message (SyncA) for `SyncAdd`.</span> |
| <Link id="m-syncaddall" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAddAll"}</code> | <span className="api-desc">Message (SyncB) for `SyncAddAll`.</span> |
| <Link id="m-syncselection" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSelection"}</code> | <span className="api-desc">Message (SyncC) for `SyncSelection`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of pickups still in the group.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onpulled" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> OnPulled"}</code> | <span className="api-desc">Fires with the pickup each time one leaves the group, on both sides.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" child)"}</code> | <span className="api-desc">Parents a pickup to the group, makes it kinematic and forwards its grabs here. On the server also saves it as a child and syncs the add.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the three sync messages and hooks the interactable's start and end events.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Resends the full pickup list. Note it sends to all chunks, not only the new player.</span> |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" child)"}</code> | <span className="api-desc">Unparents a pickup, turns its physics back on and fires `OnPulled`. On the server syncs it and hands it to the pulling hand.</span> |
| <Link id="m-removerandom" /><code>{"void RemoveRandom()"}</code> | <span className="api-desc">Server: removes one pickup at random, if any are left.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkpull" /><code>{"private IEnumerator CheckPull("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> | <span className="api-desc">Coroutine while a hand holds a grouped pickup: slides it along the pull direction with haptics. Server removes it past `pullDistance`.</span> |
| <Link id="m-ifheld" /><code>{"private void IfHeld("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter, set when `pickup` is set: only allows a grab if the other hand is holding that pickup.</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops the pull coroutine for that hand and detaches the hand from the pickup.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On the local hand, sends which pickup was grabbed and starts the pull. For remote hands, waits for `SyncSelection`.</span> |
| <Link id="m-syncadd-2" /><code>{"private void SyncAdd("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends one pickup identifier and whether it was added or removed. Remote clients apply it.</span> |
| <Link id="m-syncaddall-2" /><code>{"private void SyncAddAll("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends every grouped pickup identifier (count in 8 bits, so at most 255). Remote clients add them all.</span> |
| <Link id="m-syncselection-2" /><code>{"private void SyncSelection("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends which pickup a hand grabbed. The server relays it to the others, who start the grab for that remote hand.</span> |
| <Link id="m-trygrab" /><code>{"private void TryGrab("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Puts the pickup in the hand without a joint and starts `CheckPull` for that hand.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PullPickupGroup`:

<div className="api-used-in">

[`PotatoSapling.pullPickupGroup`](/mod/game-api/types/global-p/potatosapling#m-pullpickupgroup).

</div>

---
title: "PullPickupGroup"
description: "class PullPickupGroup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullPickupGroup

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullPickupGroup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-directionweighting" /><code>{"private float directionWeighting"}</code> |  |
| <Link id="m-hapticstrength" /><code>{"private float hapticStrength"}</code> |  |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> |  |
| <Link id="m-interactors" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> interactors"}</code> |  |
| <Link id="m-isadding" /><code>{"private bool isAdding"}</code> |  |
| <Link id="m-nextinteraction" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" nextInteraction"}</code> |  |
| <Link id="m-nextselection" /><code>{"private uint nextSelection"}</code> |  |
| <Link id="m-nextspawn" /><code>{"private uint nextSpawn"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-pickups" /><code>{"private List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickups"}</code> |  |
| <Link id="m-pullcoroutines" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Coroutine> pullCoroutines"}</code> |  |
| <Link id="m-pulldirection" /><code>{"private Vector3 pullDirection"}</code> |  |
| <Link id="m-pulldistance" /><code>{"private float pullDistance"}</code> |  |
| <Link id="m-syncadd" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAdd"}</code> |  |
| <Link id="m-syncaddall" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAddAll"}</code> |  |
| <Link id="m-syncselection" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSelection"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onpulled" /><code>{"event Action<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> OnPulled"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" child)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" child)"}</code> |  |
| <Link id="m-removerandom" /><code>{"void RemoveRandom()"}</code> |  |
| <Link id="m-checkpull" /><code>{"private IEnumerator CheckPull("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> |  |
| <Link id="m-ifheld" /><code>{"private void IfHeld("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-syncadd-2" /><code>{"private void SyncAdd("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncaddall-2" /><code>{"private void SyncAddAll("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncselection-2" /><code>{"private void SyncSelection("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-trygrab" /><code>{"private void TryGrab("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PullPickupGroup`:

[`PotatoSapling.pullPickupGroup`](/game-api/types/global-p/potatosapling#m-pullpickupgroup).

---
title: "LongHoldInteractable"
description: "Interactable that tells a short grab from a long hold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LongHoldInteractable

A **class** in `Root.Township`, no namespace.

Interactable that tells a short grab from a long hold. Used by `CommunalStorage`; the local client times the grip and tells the server which one happened.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable)
- **Nested types** [`InteractArguments`](/game-api/types/global-i-l/longholdinteractable-interactarguments)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LongHoldInteractable()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onlongheld" /><code>{"Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> onLongHeld"}</code> | Called with the hand when a long hold completes, on the client and again on the server. |
| <Link id="m-onshortheld" /><code>{"Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> onShortHeld"}</code> | Called with the hand when the grab ends as a short hold, on the client and again on the server. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancetriggersquared" /><code>{"private float distanceTriggerSquared"}</code> | Squared distance the hand may move from where it grabbed before the hold ends as a short hold. |
| <Link id="m-pickupduration" /><code>{"private float pickupDuration"}</code> | Seconds the grip must last to count as a long hold. Defaults to 0.5. |
| <Link id="m-syncinteract" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-i-l/longholdinteractable-interactarguments">{"LongHoldInteractable.InteractArguments"}</Link>{"> syncInteract"}</code> | Method sync on `SpawnPouch` that sends hold results to the server. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `syncInteract` method sync. |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On the local client, starts `GripTimer` or `GripTimerPouch` depending on whether hard grab is already held. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-griptimer" /><code>{"private IEnumerator GripTimer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" hardInteractProxy) (iterator)"}</code> | Client coroutine for a grab started with hard grab held: long hold if kept still for `pickupDuration`, short if released or moved. |
| <Link id="m-griptimerpouch" /><code>{"private IEnumerator GripTimerPouch("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" hardInteractProxy) (iterator)"}</code> | Client coroutine for a grab started without hard grab: counts down only while hard grab is pressed, then reports long or short. |
| <Link id="m-longheld" /><code>{"private void LongHeld("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Fires `onLongHeld` and, on a client, sends it to the server. |
| <Link id="m-shortheld" /><code>{"private void ShortHeld("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Fires `onShortHeld` and, on a client, sends it to the server. |
| <Link id="m-syncinteract-2" /><code>{"private void SyncInteract("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-i-l/longholdinteractable-interactarguments">{"LongHoldInteractable.InteractArguments"}</Link>{" arguments)"}</code> | Method sync carrying the hand and long or short hold. The server fires the matching callback if the hand belongs to the sender. |

</details>

## Used in

Members of other types that take, return or hold a `LongHoldInteractable`:

[`CommunalStorage.interactables`](/game-api/types/alta-items/communalstorage#m-interactables).

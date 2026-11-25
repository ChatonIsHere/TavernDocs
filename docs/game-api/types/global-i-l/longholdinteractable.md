---
title: "LongHoldInteractable"
description: "An interactable you must hold for a while."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LongHoldInteractable

A **class** in `Root.Township`, no namespace.

An interactable you must hold for a while.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable)
- **Nested types** [`InteractArguments`](/game-api/types/global-i-l/longholdinteractable-interactarguments)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LongHoldInteractable()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onlongheld" /><code>{"Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> onLongHeld"}</code> |  |
| <Link id="m-onshortheld" /><code>{"Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> onShortHeld"}</code> |  |
| <Link id="m-distancetriggersquared" /><code>{"private float distanceTriggerSquared"}</code> |  |
| <Link id="m-pickupduration" /><code>{"private float pickupDuration"}</code> |  |
| <Link id="m-syncinteract" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-i-l/longholdinteractable-interactarguments">{"LongHoldInteractable.InteractArguments"}</Link>{"> syncInteract"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-griptimer" /><code>{"private IEnumerator GripTimer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" hardInteractProxy) (iterator)"}</code> |  |
| <Link id="m-griptimerpouch" /><code>{"private IEnumerator GripTimerPouch("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" hardInteractProxy) (iterator)"}</code> |  |
| <Link id="m-longheld" /><code>{"private void LongHeld("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-shortheld" /><code>{"private void ShortHeld("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-syncinteract-2" /><code>{"private void SyncInteract("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-i-l/longholdinteractable-interactarguments">{"LongHoldInteractable.InteractArguments"}</Link>{" arguments)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LongHoldInteractable`:

[`CommunalStorage.interactables`](/game-api/types/alta-items/communalstorage#m-interactables).

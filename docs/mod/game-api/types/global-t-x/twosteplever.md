---
title: "TwoStepLever"
description: "A lever with an on and off position: a Trigger whose state follows the handle's angle past a threshold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TwoStepLever

A **class** in `Root.Township`, the global namespace.

A lever with an on and off position: a `Trigger` whose state follows the handle's angle past a threshold. The handle position syncs to joining players.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`Trigger`](/mod/game-api/types/global-t-x/trigger), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Documented in** [Buttons and levers](/mod/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TwoStepLever()"}</code> | Creates a `TwoStepLever` with default values. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | Backing field for `Value`. |
| <Link id="m-handle" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handle"}</code> | The lever handle pickup. |
| <Link id="m-handletransform" /><code>{"private Transform handleTransform"}</code> | The handle's transform, whose X angle is read. |
| <Link id="m-isholderdriven" /><code>{"private bool isHolderDriven"}</code> | If true, the holding player's client decides on or off and syncs it. |
| <Link id="m-motionrangemax" /><code>{"private float motionRangeMax"}</code> | Handle X angle that counts as value 1. Defaults to -40. |
| <Link id="m-motionrangemin" /><code>{"private float motionRangeMin"}</code> | Handle X angle that counts as value 0. Defaults to -60. |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onValueChanged"}</code> | Event fired with the new value when `Value` changes. |
| <Link id="m-synccurrentposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCurrentPosition"}</code> | Method sync on `SyncA` for the handle position. |
| <Link id="m-syncison" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncIsOn"}</code> | Method sync on `SyncB` for the on/off state. |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | Value above which the lever is on. Defaults to 0.5. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; private set; }"}</code> | The network entity on this object. |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | Handle position from 0 to 1. Setting a new value fires `onValueChanged`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcevisualset" /><code>{"void ForceVisualSet(float value)"}</code> | Moves the handle to a 0 to 1 position and sets the state from it, unless someone is holding it. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the handle and entity, hooks the handle's grab and release events and reads the starting value. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | While held, reads the handle angle and sets on or off. If holder driven, the holding client decides and syncs it. |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | Explicit `INetworkEntityBehaviour` method that creates the position and on/off method syncs. |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Does nothing. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops the fixed update, reads the final value and makes the handle kinematic. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Turns on the fixed update while the handle is held. |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current handle position to a joining player. |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Does nothing. |
| <Link id="m-setrotation" /><code>{"private void SetRotation(float rotation)"}</code> | Sets the handle's X angle and updates `Value` to match. |
| <Link id="m-synccurrentposition-2" /><code>{"private void SyncCurrentPosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync for the handle position (0 to 1). Clients apply it with `ForceVisualSet`. |
| <Link id="m-syncison-2" /><code>{"private void SyncIsOn("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync for the on/off state. The server applies any sender's state and relays it without checks. |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue()"}</code> | Reads the handle's X angle and maps it to 0 to 1 between `motionRangeMin` and `motionRangeMax`. |

</details>

## Used in

Members of other types that take, return or hold a `TwoStepLever`:

[`DecraftingDeck.lever`](/mod/game-api/types/alta-crafting/decraftingdeck#m-lever).

---
title: "TwoStepLever"
description: "A lever with an on and off position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TwoStepLever

A **class** in `Root.Township`, no namespace.

A lever with an on and off position. `Value`, `ForceVisualSet(float)`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`Trigger`](/game-api/types/global-t-x/trigger), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Documented in** [Buttons and levers](/game-api/items/buttons-and-levers)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TwoStepLever()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> |
| <Link id="m-handle" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handle"}</code> |
| <Link id="m-handletransform" /><code>{"private Transform handleTransform"}</code> |
| <Link id="m-isholderdriven" /><code>{"private bool isHolderDriven"}</code> |
| <Link id="m-motionrangemax" /><code>{"private float motionRangeMax"}</code> |
| <Link id="m-motionrangemin" /><code>{"private float motionRangeMin"}</code> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onValueChanged"}</code> |
| <Link id="m-synccurrentposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCurrentPosition"}</code> |
| <Link id="m-syncison" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncIsOn"}</code> |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; private set; }"}</code> |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-forcevisualset" /><code>{"void ForceVisualSet(float value)"}</code> |

<details>
<summary>12 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-setrotation" /><code>{"private void SetRotation(float rotation)"}</code> |
| <Link id="m-synccurrentposition-2" /><code>{"private void SyncCurrentPosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncison-2" /><code>{"private void SyncIsOn("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TwoStepLever`:

[`DecraftingDeck.lever`](/game-api/types/alta-crafting/decraftingdeck#m-lever).

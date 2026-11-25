---
title: "MovingPlatform"
description: "class MovingPlatform in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovingPlatform

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`VolumeTrigger`](/game-api/types/global-t-x/volumetrigger), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour), [`IHasMovementContext`](/game-api/types/global-i-l/ihasmovementcontext)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MovingPlatform()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-delays" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> delays"}</code> |
| <Link id="m-isclient" /><code>{"private bool isClient"}</code> |
| <Link id="m-isserver" /><code>{"private bool isServer"}</code> |
| <Link id="m-pickupadddelay" /><code>{"private float pickupAddDelay"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; private set; }"}</code> |
| <Link id="m-ischeckingforpickup" /><code>{"override bool IsCheckingForPickup { get; }"}</code> |
| <Link id="m-ischeckingforplayer" /><code>{"override bool IsCheckingForPlayer { get; }"}</code> |
| <Link id="m-ischeckingforrigidbody" /><code>{"override bool IsCheckingForRigidbody { get; }"}</code> |
| <Link id="m-movementcontext" /><code><Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" MovementContext { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-pickupentered" /><code>{"protected override void PickupEntered("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-pickupleft" /><code>{"protected override void PickupLeft("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-playerentered" /><code>{"protected override void PlayerEntered("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |
| <Link id="m-playerleft" /><code>{"protected override void PlayerLeft("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-applytopickup" /><code>{"private void ApplyToPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-checkpickup" /><code>{"private void CheckPickup("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> |
| <Link id="m-checkpickup-2" /><code>{"private void CheckPickup("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-ismanaged" /><code>{"private bool IsManaged("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-unapplyfrompickup" /><code>{"private void UnapplyFromPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |

</details>

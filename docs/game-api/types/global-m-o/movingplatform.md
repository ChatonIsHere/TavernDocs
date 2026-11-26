---
title: "MovingPlatform"
description: "Trigger volume that carries players and loose pickups with a moving entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovingPlatform

A **class** in `Root.Township`, no namespace.

Trigger volume that carries players and loose pickups with a moving entity. The server tracks pickups and rigidbodies; clients track the local player.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`VolumeTrigger`](/game-api/types/global-t-x/volumetrigger), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour), [`IHasMovementContext`](/game-api/types/global-i-l/ihasmovementcontext)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MovingPlatform()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delays" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> delays"}</code> | Pending timed adds for pickups that just entered. |
| <Link id="m-isclient" /><code>{"private bool isClient"}</code> | True on clients or local test. |
| <Link id="m-isserver" /><code>{"private bool isServer"}</code> | True on the server. |
| <Link id="m-pickupadddelay" /><code>{"private float pickupAddDelay"}</code> | Seconds a loose pickup must stay inside before it rides the platform. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; private set; }"}</code> | The platform's network entity. |
| <Link id="m-ischeckingforpickup" /><code>{"override bool IsCheckingForPickup { get; }"}</code> | True on the server. |
| <Link id="m-ischeckingforplayer" /><code>{"override bool IsCheckingForPlayer { get; }"}</code> | True on clients (and local test). |
| <Link id="m-ischeckingforrigidbody" /><code>{"override bool IsCheckingForRigidbody { get; }"}</code> | True on the server. |
| <Link id="m-movementcontext" /><code><Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" MovementContext { get; private set; }"}</code> | Movement context that moves riders with the platform. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pickupentered" /><code>{"protected override void PickupEntered("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Adds the pickup, after `pickupAddDelay` if it is loose. |
| <Link id="m-pickupleft" /><code>{"protected override void PickupLeft("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Cancels a pending add, or unhooks and removes the platform from the pickup. |
| <Link id="m-playerentered" /><code>{"protected override void PlayerEntered("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Client: gives the local player the movement context and parents them to the platform. |
| <Link id="m-playerleft" /><code>{"protected override void PlayerLeft("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Client: clears the local player's movement context and unparents them. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Parents a loose pickup to the platform, or for a held, docked or crafted one watches for when it becomes loose. |
| <Link id="m-applytopickup" /><code>{"private void ApplyToPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Gives the pickup the platform's movement context, parents it, and makes the platform its chunking parent. |
| <Link id="m-checkpickup" /><code>{"private void CheckPickup("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> | Re-checks a watched pickup after it changes parent or is let go, and applies or removes the platform. |
| <Link id="m-checkpickup-2" /><code>{"private void CheckPickup("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Re-checks a watched pickup after it changes parent or is let go, and applies or removes the platform. |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | Gets the entity, creates the movement context and records which side is running. |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Empty. |
| <Link id="m-ismanaged" /><code>{"private bool IsManaged("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | True if the pickup is held, docked or a crafted child, so the platform should not parent it. |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Empty. |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Empty. |
| <Link id="m-unapplyfrompickup" /><code>{"private void UnapplyFromPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Removes the platform's movement context, parent and chunking parent from the pickup. |

</details>

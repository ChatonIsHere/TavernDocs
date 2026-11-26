---
title: "MovingPlatform"
description: "Trigger volume that carries players and loose pickups with a moving entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovingPlatform

A **class** in `Root.Township`, the global namespace.

Trigger volume that carries players and loose pickups with a moving entity. The server tracks pickups and rigidbodies; clients track the local player.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`VolumeTrigger`](/mod/game-api/types/global-t-x/volumetrigger), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour), [`IHasMovementContext`](/mod/game-api/types/global-i-l/ihasmovementcontext)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MovingPlatform()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delays" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> delays"}</code> | <span className="api-desc">Pending timed adds for pickups that just entered.</span> |
| <Link id="m-isclient" /><code>{"private bool isClient"}</code> | <span className="api-desc">True on clients or local test.</span> |
| <Link id="m-isserver" /><code>{"private bool isServer"}</code> | <span className="api-desc">True on the server.</span> |
| <Link id="m-pickupadddelay" /><code>{"private float pickupAddDelay"}</code> | <span className="api-desc">Seconds a loose pickup must stay inside before it rides the platform.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; private set; }"}</code> | <span className="api-desc">The platform's network entity.</span> |
| <Link id="m-ischeckingforpickup" /><code>{"override bool IsCheckingForPickup { get; }"}</code> | <span className="api-desc">True on the server.</span> |
| <Link id="m-ischeckingforplayer" /><code>{"override bool IsCheckingForPlayer { get; }"}</code> | <span className="api-desc">True on clients (and local test).</span> |
| <Link id="m-ischeckingforrigidbody" /><code>{"override bool IsCheckingForRigidbody { get; }"}</code> | <span className="api-desc">True on the server.</span> |
| <Link id="m-movementcontext" /><code><Link to="/mod/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" MovementContext { get; private set; }"}</code> | <span className="api-desc">Movement context that moves riders with the platform.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pickupentered" /><code>{"protected override void PickupEntered("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Adds the pickup, after `pickupAddDelay` if it is loose.</span> |
| <Link id="m-pickupleft" /><code>{"protected override void PickupLeft("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Cancels a pending add, or unhooks and removes the platform from the pickup.</span> |
| <Link id="m-playerentered" /><code>{"protected override void PlayerEntered("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Client: gives the local player the movement context and parents them to the platform.</span> |
| <Link id="m-playerleft" /><code>{"protected override void PlayerLeft("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Client: clears the local player's movement context and unparents them.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Parents a loose pickup to the platform, or for a held, docked or crafted one watches for when it becomes loose.</span> |
| <Link id="m-applytopickup" /><code>{"private void ApplyToPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Gives the pickup the platform's movement context, parents it, and makes the platform its chunking parent.</span> |
| <Link id="m-checkpickup" /><code>{"private void CheckPickup("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> | <span className="api-desc">Re-checks a watched pickup after it changes parent or is let go, and applies or removes the platform.</span> |
| <Link id="m-checkpickup-2" /><code>{"private void CheckPickup("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Re-checks a watched pickup after it changes parent or is let go, and applies or removes the platform.</span> |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | <span className="api-desc">Gets the entity, creates the movement context and records which side is running.</span> |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-ismanaged" /><code>{"private bool IsManaged("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">True if the pickup is held, docked or a crafted child, so the platform should not parent it.</span> |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-unapplyfrompickup" /><code>{"private void UnapplyFromPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Removes the platform's movement context, parent and chunking parent from the pickup.</span> |

</details>

---
title: "PickupDocker"
description: "The part of a Pickup that docks it into and out of a PickupDock and syncs that over the network."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDocker

A **class** in `Root.Township`, `Alta.Inventory`.

The part of a `Pickup` that docks it into and out of a `PickupDock` and syncs that over the network. Both sides; each pickup owns one.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDocker("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Creates a `PickupDocker` from `pickup`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disabledcolliders" /><code>{"private List<Collider> disabledColliders"}</code> | Colliders turned off while docked, to turn back on later. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for docking errors. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup this docker belongs to. |
| <Link id="m-requestdock" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-q-r/requestdockarguments">{"RequestDockArguments"}</Link>{"> requestDock"}</code> | The method sync used to send docking messages. |
| <Link id="m-undockedlayer" /><code>{"private int undockedLayer"}</code> | The pickup's layer before docking (docked pickups move to the UI layer). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentdock" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" CurrentDock { get; private set; }"}</code> | The dock the pickup is in, or null. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" PickupEntity { get; }"}</code> | The pickup's network entity. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-docked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" Docked"}</code> | Raised after the pickup has docked. |
| <Link id="m-predocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" PreDocked"}</code> | Raised just before the pickup docks, before it's parented to the dock. |
| <Link id="m-undocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" Undocked"}</code> | Raised after the pickup has left a dock. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dockinto" /><code>{"virtual "}<Link to="/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" DockInto("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantity, bool isInstantMovementForced = false)"}</code> | Docks the pickup into a dock: checks it's allowed (enforced on the server), undocks from the old one, parents it, hides physics and sends the change. |
| <Link id="m-initializefornetworking" /><code>{"void InitializeForNetworking()"}</code> | Sets up the docking message sync on the pickup's entity. |
| <Link id="m-synccurrentdockwithplayer" /><code>{"void SyncCurrentDockWithPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: tells a joining player which dock this pickup is in. |
| <Link id="m-undock" /><code>{"void Undock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isScalingBack, int quantity)"}</code> | Takes the pickup out of its dock, restoring layer, physics, colliders and parent, and sends the change. |
| <Link id="m-updatecolliders" /><code>{"void UpdateColliders()"}</code> | Re-applies which colliders are off when the dock's content changes. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablecolliders" /><code>{"private void DisableColliders(bool isPhysical, bool isPhysicalTriggersOnly, LayerMask maintainPhysicalLayers)"}</code> | Turns off the pickup's colliders while docked, keeping those on maintained layers and, for physical docks, triggers if set. |
| <Link id="m-enablephysicalcolliders" /><code>{"private void EnablePhysicalColliders()"}</code> | Turns back on the colliders that `DisableColliders` turned off. |
| <Link id="m-ondocked" /><code>{"private void OnDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Raises `Docked`. |
| <Link id="m-onpredocked" /><code>{"private void OnPreDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Raises `PreDocked`. |
| <Link id="m-onundocked" /><code>{"private void OnUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Raises `Undocked`. |
| <Link id="m-requestdock-2" /><code>{"private void RequestDock("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-q-r/requestdockarguments">{"RequestDockArguments"}</Link>{" request)"}</code> | Handles a docking message. The server checks the sender owns the interactor; clients dock or undock as told, waiting for the dock to spawn if needed. |

</details>

## Used in

Members of other types that take, return or hold a `PickupDocker`:

[`Pickup.docker`](/game-api/types/global-p/pickup#m-docker).

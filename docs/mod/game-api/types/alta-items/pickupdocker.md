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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDocker("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Creates a `PickupDocker` from `pickup`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disabledcolliders" /><code>{"private List<Collider> disabledColliders"}</code> | <span className="api-desc">Colliders turned off while docked, to turn back on later.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for docking errors.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup this docker belongs to.</span> |
| <Link id="m-requestdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-q-r/requestdockarguments">{"RequestDockArguments"}</Link>{"> requestDock"}</code> | <span className="api-desc">The method sync used to send docking messages.</span> |
| <Link id="m-undockedlayer" /><code>{"private int undockedLayer"}</code> | <span className="api-desc">The pickup's layer before docking (docked pickups move to the UI layer).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentdock" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" CurrentDock { get; private set; }"}</code> | <span className="api-desc">The dock the pickup is in, or null.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" PickupEntity { get; }"}</code> | <span className="api-desc">The pickup's network entity.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-docked" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" Docked"}</code> | <span className="api-desc">Raised after the pickup has docked.</span> |
| <Link id="m-predocked" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" PreDocked"}</code> | <span className="api-desc">Raised just before the pickup docks, before it's parented to the dock.</span> |
| <Link id="m-undocked" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" Undocked"}</code> | <span className="api-desc">Raised after the pickup has left a dock.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dockinto" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" DockInto("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantity, bool isInstantMovementForced = false)"}</code> | <span className="api-desc">Docks the pickup into a dock: checks it's allowed (enforced on the server), undocks from the old one, parents it, hides physics and sends the change.</span> |
| <Link id="m-initializefornetworking" /><code>{"void InitializeForNetworking()"}</code> | <span className="api-desc">Sets up the docking message sync on the pickup's entity.</span> |
| <Link id="m-synccurrentdockwithplayer" /><code>{"void SyncCurrentDockWithPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: tells a joining player which dock this pickup is in.</span> |
| <Link id="m-undock" /><code>{"void Undock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isScalingBack, int quantity)"}</code> | <span className="api-desc">Takes the pickup out of its dock, restoring layer, physics, colliders and parent, and sends the change.</span> |
| <Link id="m-updatecolliders" /><code>{"void UpdateColliders()"}</code> | <span className="api-desc">Re-applies which colliders are off when the dock's content changes.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablecolliders" /><code>{"private void DisableColliders(bool isPhysical, bool isPhysicalTriggersOnly, LayerMask maintainPhysicalLayers)"}</code> | <span className="api-desc">Turns off the pickup's colliders while docked, keeping those on maintained layers and, for physical docks, triggers if set.</span> |
| <Link id="m-enablephysicalcolliders" /><code>{"private void EnablePhysicalColliders()"}</code> | <span className="api-desc">Turns back on the colliders that `DisableColliders` turned off.</span> |
| <Link id="m-ondocked" /><code>{"private void OnDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Raises `Docked`.</span> |
| <Link id="m-onpredocked" /><code>{"private void OnPreDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Raises `PreDocked`.</span> |
| <Link id="m-onundocked" /><code>{"private void OnUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Raises `Undocked`.</span> |
| <Link id="m-requestdock-2" /><code>{"private void RequestDock("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-q-r/requestdockarguments">{"RequestDockArguments"}</Link>{" request)"}</code> | <span className="api-desc">Handles a docking message. The server checks the sender owns the interactor; clients dock or undock as told, waiting for the dock to spawn if needed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PickupDocker`:

<div className="api-used-in">

[`Pickup.docker`](/mod/game-api/types/global-p/pickup#m-docker).

</div>

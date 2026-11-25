---
title: "PickupDocker"
description: "class PickupDocker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDocker

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupDocker("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-disabledcolliders" /><code>{"private List<Collider> disabledColliders"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-requestdock" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-q-r/requestdockarguments">{"RequestDockArguments"}</Link>{"> requestDock"}</code> |
| <Link id="m-undockedlayer" /><code>{"private int undockedLayer"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentdock" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" CurrentDock { get; private set; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-pickupentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" PickupEntity { get; }"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-docked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" Docked"}</code> |
| <Link id="m-predocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" PreDocked"}</code> |
| <Link id="m-undocked" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" Undocked"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-dockinto" /><code>{"virtual "}<Link to="/game-api/types/alta-items/pickupdock-allowedresult">{"PickupDock.AllowedResult"}</Link>{" DockInto("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantity, bool isInstantMovementForced = false)"}</code> |
| <Link id="m-initializefornetworking" /><code>{"void InitializeForNetworking()"}</code> |
| <Link id="m-synccurrentdockwithplayer" /><code>{"void SyncCurrentDockWithPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-undock" /><code>{"void Undock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isScalingBack, int quantity)"}</code> |
| <Link id="m-updatecolliders" /><code>{"void UpdateColliders()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-disablecolliders" /><code>{"private void DisableColliders(bool isPhysical, bool isPhysicalTriggersOnly, LayerMask maintainPhysicalLayers)"}</code> |
| <Link id="m-enablephysicalcolliders" /><code>{"private void EnablePhysicalColliders()"}</code> |
| <Link id="m-ondocked" /><code>{"private void OnDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-onpredocked" /><code>{"private void OnPreDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-onundocked" /><code>{"private void OnUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-requestdock-2" /><code>{"private void RequestDock("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-q-r/requestdockarguments">{"RequestDockArguments"}</Link>{" request)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PickupDocker`:

[`Pickup.docker`](/game-api/types/global-p/pickup#m-docker).
